export const state = () => ({
    datas: [],
    application: {},
    components: [],
    graphs: [],
    dataReady: false,
})

export const  getters = {
    dataReady: state => {
        return state.dataReady;
    },
    Temperatures: state => {
        return state.datas['temperature'];
    },
    Busbars: state => {
        return state.datas['busbars'];
    },
    Cables: state => {
        return state.datas['cables'];
    },
    CableTrays: state => {
        return state.datas['cabletrays'];
    },
    AppTabActive: (state) => (i) => {
        return state.datas['application']['tab_'+i+"_active"]
    },
    AppTabName: (state) => (i) => {
        return state.datas['application']['tab_'+i+"_name"]
    },
    AppTabContent: (state) => (i) => {
        return state.datas['application']['tab_'+i]
    },
    Components: state => {
        return state.datas['application'].components;
    },
    Component: (state, getters) => (name) => {
        return state.datas['application'].components.find(obj => obj.name === name)
    },
    Chart: (state, getters) => (code) => {
        return state.datas['graphs'].find(obj => obj.code === code)
    },
    getContentImage: (state, getters) => (url) => {
        return state.datas['storageUrl'] + url;
    }
    
}

export const  mutations = {
    SET_DATAS:(state, datas ) => {
        
        state.datas = datas
        state.dataReady = true;
        console.log("store data setDatas => dataReady = true ")

    },
    SET_NOT_READY:(state) => {
        state.dataReady = false;
        console.log("store data setDatas => dataReady = true ")

    },
}

export const  actions = {
    getDatas({ commit, rootState }, app) {
        state.dataReady = false;
        console.log("store data getDatas")
        return this.$axios.get(process.env.API_PATH+'data/'+rootState.lang.locale+"/"+app)
        .then(response => {
            commit('SET_DATAS', response.data);
            commit('calculs/setCalculs', response.data,  { root: true });
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
