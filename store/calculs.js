import * as math from 'mathjs'

export const state = () => ({
    increment: 1,
    calculs: [],            
})

export const getters = {
    test: (state, getters)  => {
        return "end";
    },
    getMeasure: (state) => (name) => {
        let calcul = state.calculs.find(obj => obj.name === name)
        return calcul.measure
        
    },
    isCalculExiste: (state) => (name) => {
        let calcul = state.calculs.find(obj => obj.name === name)
        if(calcul != undefined) {
            return true
        } else {
            return false;
        }
        
    },
    isInputExiste: (state) => (name) => {
        let calcul = state.calculs.find(obj => obj.name === name)
        if(calcul != undefined) {
            return calcul
        } else {
            console.log("Erreur le calcul  "+ name +" n'existe pas.")
            return "error";
        }
        
    },
    getCalcul: (state) => (name) => {
        let calcul = state.calculs.find(obj => obj.name === name)
        if(calcul != undefined) {
            return calcul
        } else {
            console.log("Erreur le calcul  "+ name +" n'existe pas.")
            return "error";
        }
        
    },
    getVar: (state, getters, rootState) => (obj, varname, index=null) => {
        let vars = obj.vars
        let calcvar = vars.find(obj => obj.scope === varname)
        if(calcvar._group == 'calcul') {
            let value = getters.execFormule(varname)
            if(isNaN(value)) {
                console.log("error calcul "+obj.name +" | name "+ varname+" | index :  "+ index)
                return 0;
            } else {
                return value
            }
            
        } else if(calcvar._group == 'input') {
            let value = getters.input(varname)
            if(isNaN(value)) {
                console.log("error "+obj.name+" |  input : "+ getters.input(varname) +" |  name "+ varname)
                return 0;
            } else {
                return value
            }
        } else if(calcvar._group == 'findbusbars') {
            let nominal = getters.execFormule(index);
            let model = getters.findBusbarModel({ nominal: nominal, nc:calcvar.wire});
            if (model == "error") {
                let MyError = {}
                MyError.type = "type_error.model_busbar"
                MyError.message = "Nominal : "+ nominal+ " Max "+getters.getMaxModel({model:'Busbars', nominal:'nominal_current'})
                MyError.solution = "solution_error.lowerInput"
                rootState.errors.errors.push(MyError);
                rootState.errors.showErrors = true;
                return 0
            }
            let value = model[varname];
            if(isNaN(value)) {
                let MyError = {}
                MyError.type = "type_error.model_busbar"
                MyError.message = "Nominal : "+ nominal+ 'value is missing ! '
                MyError.solution = "solution_error.missing_value"
                rootState.errors.errors.push(MyError);
                return 0
            } else {
                return value
            }
            
        } else if(calcvar._group == 'findcables') {
            let nominal = getters.execFormule(index);
            let model = getters.findCableModel({ nominal: nominal, nc:calcvar.wire});
            if (model == "error") {
                let MyError = {}
                MyError.type = "type_error.model_cable"
                MyError.message = "Nominal : "+ nominal+ " Max "+getters.getMaxModel({model:'Cables', nominal:'nominal_current_all_cables'})
                MyError.solution = "solution_error.lowerInput"
                rootState.errors.errors.push(MyError);
                rootState.errors.showErrors = true;
            }
            let value = model[varname]
            if(isNaN(value)) {
                let MyError = {}
                console.log("Error "+obj.name+" findcables name : "+ varname +" index "+ index+" , value index "+nominal)
                return 0;
            } else {
                return value
            }
            
        } else if(calcvar._group == 'findtemperatures') {
            let value = getters.findTemperature(getters.input(index))[varname]
            if(isNaN(value)) {
                console.log("error "+obj.name+" findtemperatures name : "+ varname +" index "+ index)
                return 0;
            } else {
                return value
            }
            
        } else if(calcvar._group == 'findcablesTrays') {
            let searchedValue = getters.execFormule(index);
            let model = getters.findCableTrayModel(searchedValue)
            if(model == "error") {
                let MyError = {}
                MyError.type = "type_error.model_tray"
                MyError.message = "total width : "+ searchedValue+ " Max "+getters.getMaxModel({model:'CableTrays', nominal:'total_width'})
                MyError.solution = "solution_error.lowerInput"
                rootState.errors.errors.push(MyError);
                rootState.errors.showErrors = true;
            }
            let value = model[varname]
            if(isNaN(value)) {
                console.log("error "+obj.name+" findcablesTrays name : "+ varname +" index "+ index)
                return 20000000;
            } else {
                return value
            }
            
        }
    } ,
    getCalculScope:  (state, getters) => (obj) => {
        let scope= {}
        for (let calcvar of obj.vars) {
            if(calcvar.scope != undefined) {
                if(calcvar.index == undefined) calcvar.index = null;
                scope[calcvar.scope] =  getters.getVar(obj, calcvar.scope, calcvar.index)
            }
            
        }
        return scope
    },

    showFormule: (state, getters) => (name) => {
        let calcul = getters.getCalcul(name);
        if(calcul == undefined) {
            console.log("pas un calcul");
        }
        let scope  = getters.getCalculScope(calcul)
        let obj = {}
        obj.result = parseFloat(math.eval(calcul.formule, scope )).toFixed(4)
        obj.name = name
        obj.formule = calcul.formule
        obj.measure = calcul.measure
        //

        let vars = calcul.vars
        let i=0
        console.log("--scope--")
        for(let key in scope) {
            vars[i].value = parseFloat(scope[key]).toFixed(4)
            i++

        }
        console.log(obj)
        obj.vars = vars
        return obj;
    },


    execFormule: (state, getters) => (name) => {
        
        let calcul = getters.getCalcul(name)
        let scope  = getters.getCalculScope(calcul)
        // console.log("-------------------------------------------------------------------"+name)
        // console.log(scope)
        return math.eval(calcul.formule, scope )
    },
    execFixedFormule: (state, getters) => (name) => {
        
        let calcul = getters.getCalcul(name)
        let scope  = getters.getCalculScope(calcul)
        // console.log("--"+name)
        // console.log(scope)
        return parseFloat(math.eval(calcul.formule, scope )).toFixed(calcul.nbfloat)
    },
    fixb: (state) => (name) => {
        return parseFloat(state.basics[name]).toFixed(5)
    }, 
    getChart: (state) => (id) => {
        return state.charts.find(obj => obj.id === id);
    },
    findOneCalcul: (state) => (id) => {
        return state.AllCalculs.find(obj => obj.id === id);
    },
    input: (state, getters, rootState, rootGetters ) => (name) => {
        if(name != null) {
            return parseFloat(rootGetters['data/Component'](name).value);
        } else {
            console.log("ERROR INPUT")
            return 0;
        }
        
    },
    findTemperature: (state, getters, rootState, rootGetters ) => (value) => {
        return rootGetters['data/Temperatures'].find(obj => obj.ambient_temperature_c === value);
    },
    findBusbarModel: (state, getters, rootState, rootGetters ) => (obj) => {
        // console.log("findBusbarModel")
        // console.log(obj)
        let mat = 1;
        if(rootGetters['data/Component']('matcond_busbars').value == 'AL') mat = 2 ;
        let sc= rootGetters['data/Busbars']

        sc = sc.filter(model => model.matcond_id == mat)
        //
        let retour = "error"
        for (let element of sc) {
            //console.log('test '+obj.nominal+" est il inferieur ou égale à "+element.nominal_current )
            if(obj.nominal <= element.nominal_current ) {
                //console.log('OK '+element.nominal_current )
                retour = element;
            } 
        }
        return retour;          
    },
    getMaxModel: (state, getters, rootState, rootGetters ) => (obj) => {
        let max = 0
        let model= rootGetters['data/'+obj.model]
        Math.max.apply(Math, model.map(function(o) { max =  o[obj.nominal]; }))
        return max

    }, 
    findCableModel: (state, getters, rootState, rootGetters ) => (obj) => {
        let mat = 1;
        if(rootGetters['data/Component']('matcond_cables').value == 'AL') mat = 2 ;
        //
        let wire = 1;
        if(obj.nc =="1") {
            // console.log('wire 5 o 3 : '+obj.nominal)
            // console.log("Wire is not 1, rack_pdu_polarity "+getters.input('rack_pdu_polarity') );
            if(getters.input('rack_pdu_polarity') == 1) wire = 3
            if(getters.input('rack_pdu_polarity') == 3) wire = 5
        }
        //
        let sc= rootGetters['data/Cables'];
        //
        sc = sc.filter(model => model.matcond_id == mat)
        sc = sc.filter(model => model.number_of_conductors_cable == wire)
        let retour = "error"

        for (let element of sc) { 
            //console.log('test '+obj.nominal+" est il inferieur ou égale à "+element.nominal_current_all_cables )
            if(obj.nominal <= element.nominal_current_all_cables ) {
                //console.log('OK '+element.nominal_current_all_cables )
                retour = element;
                //console.log(retour)
                break;
            } 
        }
        return retour;          
    },
    findCableTrayModel: (state, getters, rootState, rootGetters) => (value) => {
            let sc = rootGetters['data/CableTrays'];
            let retour = "error"
        for (let element of sc) { 
            //console.log('test '+value+" est il inferieur ou égale à "+element.total_width )
            if(value <= element.total_width ) {
                //console.log('OK '+element.nominal_current )
                retour = element;
                break;
            } 
        }
        return retour;          
    },

}

export const mutations = {
    setReady:(state, value ) => {
        state.ready = value
    },
    increment:(state ) => {
        state.increment++
        
    },
    setCalculs:(state, datas ) => {
        state.calculs = datas['application'].calculs
    },
}


export const actions = {
	calculate({ commit, state, getters, rootGetters, route }) {
        commit('increment');
    }
   

    
}
