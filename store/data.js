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
    AppTabActive: (state) => (i) => {
        //return state.datas['application']['tab_'+i+"_active"]
    },
    
}

export const  mutations = {
    SET_DATAS:(state, datas ) => {
        state.datas = datas
        state.dataReady = true;
        //console.log("store data setDatas => dataReady = true ")

    },
    SET_NOT_READY:(state) => {
        state.dataReady = false;
        //console.log("store data setDatas => dataReady = true ")

    },
}

export const  actions = {
    getDatas({ commit, rootState }, app) {
        // state.dataReady = false;
        // console.log("store data getDatas")
        // return this.$axios.get(process.env.API_PATH+'data/'+rootState.lang.locale+"/"+app)
        // .then(response => {
        //     commit('SET_DATAS', response.data);
        //     commit('calculs/setCalculs', response.data,  { root: true });
        // })
        // .catch(function (error) {
        //     let MyError = {}
        //     MyError.type = "type_error.request"
        //     MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
        //     MyError.solution = "solution_error.refresh"
        //     commit("errors/newError", MyError, { root: true })
        // })
    },
}
