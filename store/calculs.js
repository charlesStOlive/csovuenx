import * as math from 'mathjs'

export const state = () => ({           
})

export const getters = {
    fixb: (state) => (name) => {
        //return parseFloat(state.basics[name]).toFixed(5)
    }, 
    getChart: (state) => (id) => {
        //return state.charts.find(obj => obj.id === id);
    },
    findOneCalcul: (state) => (id) => {
        //return state.AllCalculs.find(obj => obj.id === id);
    },
    input: (state, getters, rootState, rootGetters ) => (name) => {
        // if(name != null) {
        //     return parseFloat(rootGetters['data/Component'](name).value);
        // } else {
        //     console.log("ERROR INPUT")
        //     return 0;
        // }
        
    },
    findTemperature: (state, getters, rootState, rootGetters ) => (value) => {
        //return rootGetters['data/Temperatures'].find(obj => obj.ambient_temperature_c === value);
    },
    
    getMaxModel: (state, getters, rootState, rootGetters ) => (obj) => {
        // let max = 0
        // let model= rootGetters['data/'+obj.model]
        // Math.max.apply(Math, model.map(function(o) { max =  o[obj.nominal]; }))
        // return max

    }, 

}

export const mutations = {
    setReady:(state, value ) => {
        //state.ready = value
    },
    increment:(state ) => {
        //state.increment++
        
    },
    setCalculs:(state, datas ) => {
        //state.calculs = datas['application'].calculs
    },
}


export const actions = {
	calculate({ commit, state, getters, rootGetters, route }) {
        commit('increment');
    }
}
