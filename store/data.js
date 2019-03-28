export const state = () => ({
    datas: [],
    dataReady: false,
    clients:[],
    projects:[],
    targets:[],
    settings:[],
    competences:[],
})

export const  getters = {
    dataReady: state => {
        return state.dataReady;
    },
    dataNotReady: state => {
        return !state.dataReady;
    },
    AppTabActive: (state) => (i) => {
        //return state.datas['application']['tab_'+i+"_active"]
    },
    clients: state => {
        return state.clients;
    },
    projects: state => {
        return state.projects;
    },
    targets: state =>  {
        return state.targets;
    },
    oneTarget: (state) => (slug) => {
        return state.targets.find(obj => obj.slug === slug);
    },
    competenceToString: (state, getters) => (array) => {
        let newArray = getters.shuffleAraay(array)
        let txt = ''
        newArray.forEach(function(element) {
          txt += element.name + ' | '
        });
        return txt
    },
    shuffleAraay: (state) => (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
          return array;
    },
    competences: (state) => (filter) => {
        if(filter == null) {
            return state.competences
        } else {
            return state.competences
        } 
    },
    settings: state => {
        console.log("projects");

        return state.settings;
    },
    gi: (state) => (slug) => {
        if(slug == undefined) {
            console.log("error : "+slug);
        } else {
            return process.env.MEDIA_PATH + slug
        }
          
    },
    
}

export const  mutations = {
    SET_CLIENTS:(state, datas ) => {
        state.clients = datas
    },
    SET_PROJECTS:(state, datas ) => {
        state.projects = datas
    },
    SET_SETTINGS:(state, datas ) => {
        state.settings = datas
    },
    SET_COMPETENCES:(state, datas ) => {
        state.competences = datas
    },
    SET_TARGETS:(state, datas ) => {
        state.targets = datas
    },
    SET_NOT_READY:(state) => {
        state.dataReady = false;
    },
    SET_READY:(state) => {
        state.dataReady = true;
    },
}

export const  actions = {
    getSettings({ commit, rootState }, app) {
        return this.$axios.get(process.env.API_PATH+'settings/')
        .then(response => {
            commit('SET_SETTINGS', response.data.settings);
            commit('SET_CLIENTS', response.data.clients);
            commit('SET_PROJECTS', response.data.projects);
            commit('SET_PROJECTS', response.data.projects);
            commit('SET_TARGETS', response.data.targets);
            commit('SET_READY');
        })
        .catch(function (error) {
            console.log('error')
            let MyError = {}
            MyError.type = "type_error.request"
            MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            MyError.solution = "solution_error.refresh"
            commit("errors/newError", MyError, { root: true })
        })
    },
    getCompetences({ commit, rootState }, app) {
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH+'competences/')
        .then(response => {
            commit('SET_COMPETENCES', response.data);
        })
        .catch(function (error) {
            console.log('error')
            let MyError = {}
            MyError.type = "type_error.request"
            MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            MyError.solution = "solution_error.refresh"
            commit("errors/newError", MyError, { root: true })
        })
    }
}
