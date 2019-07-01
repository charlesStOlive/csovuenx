export const state = () => ({
    ready: false,
    mission: [],
    data:[],
})

export const  getters = {
    data: state => {
        return state.data;
    },
    mission: state => {
        return state.mission;
    },
    ready: state => {
        return state.ready
    }
}

export const  mutations = {
    SET_TARGET:(state, datas ) => {
        state.ready = true
        state.data = datas
    },
    SET_MISSION:(state, slug ) => {
       state.mission = state.data.missions.find(obj => obj.slug === slug);
    },
    SET_NOT_READY:(state) => {
        state.data = []
        state.ready = false
    },
}

export const  actions = {
    getTarget({ commit, rootState }, slug) {
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH+'targets/'+slug)
        .then(response => {
            commit('SET_TARGET', response.data);
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
