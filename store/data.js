export const state = () => ({
    datas: [],
    dataReady: false,
    clients:[],
    projects:[],
    project:[],
    settings:[],
    application: {},
    components: [],
    graphs: [],
    
})

export const  getters = {
    dataReady: state => {
        return state.dataReady;
    },
    AppTabActive: (state) => (i) => {
        //return state.datas['application']['tab_'+i+"_active"]
    },
    clients: state => {
        return state.clients;
    },
    projects: state => {
        console.log("projects");

        return state.projects;
    },
    project: state => {
        console.log("project");

        return state.project;
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
        //state.dataReady = true;
        //console.log("store data setDatas => dataReady = true ")

    },
    SET_PROJECTS:(state, datas ) => {
        state.projects = datas
        //state.dataReady = true;
        //console.log("store data setDatas => dataReady = true ")

    },
    SET_PROJECT:(state, datas ) => {
        state.project = datas
        //state.dataReady = true;
        //console.log("store data setDatas => dataReady = true ")

    },
    SET_SETTINGS:(state, datas ) => {
        state.settings = datas
        //state.dataReady = true;
        //console.log("store data setDatas => dataReady = true ")

    },
    SET_NOT_READY:(state) => {
        state.dataReady = false;
        //console.log("store data setDatas => dataReady = true ")

    },
}

export const  actions = {
    getSettings({ commit, rootState }, app) {
        console.log("getSettings")
         state.dataReady = false;
        return this.$axios.get(process.env.API_PATH+'settings/')
        .then(response => {
            commit('SET_SETTINGS', response.data.settings);
            commit('SET_CLIENTS', response.data.clients);
            commit('SET_PROJECTS', response.data.projects);
        })
        .catch(function (error) {
            let MyError = {}
            MyError.type = "type_error.request"
            MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            MyError.solution = "solution_error.refresh"
            commit("errors/newError", MyError, { root: true })
        })
    },
    // getClients({ commit, rootState }, app) {
    //     console.log("getClients")
    //      state.dataReady = false;
    //     return this.$axios.get(process.env.API_PATH+'clients/')
    //     .then(response => {
    //         commit('SET_CLIENTS', response.data);
    //     })
    //     .catch(function (error) {
    //         let MyError = {}
    //         MyError.type = "type_error.request"
    //         MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
    //         MyError.solution = "solution_error.refresh"
    //         commit("errors/newError", MyError, { root: true })
    //     })
    // },
    // getProjects({ commit, rootState }, app) {
    //     console.log("getClients")
    //      state.dataReady = false;
    //     return this.$axios.get(process.env.API_PATH+'projects/')
    //     .then(response => {
    //         commit('SET_PROJECTS', response.data);
    //     })
    //     .catch(function (error) {
    //         let MyError = {}
    //         MyError.type = "type_error.request"
    //         MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
    //         MyError.solution = "solution_error.refresh"
    //         commit("errors/newError", MyError, { root: true })
    //     })
    // },
    getProject({ commit, rootState }, slug) {
        console.log("get project : "+ slug)
         state.dataReady = false;
        return this.$axios.get(process.env.API_PATH+'project/'+slug)
        .then(response => {
            commit('SET_PROJECT', response.data);
        })
        .catch(function (error) {
            let MyError = {}
            MyError.type = "type_error.request"
            MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            MyError.solution = "solution_error.refresh"
            commit("errors/newError", MyError, { root: true })
        })
    },
}
