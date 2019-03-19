export const state = () => ({
    ready: false,
    data:[],
})

export const  getters = {
    data: state => {
        return state.data;
    },
    ready: state => {
        return state.ready
    }
}

export const  mutations = {
    SET_EXPERTISE:(state, datas ) => {
        state.ready = true
        state.data = datas
        console.log("ready")
    },
    SET_NOT_READY:(state) => {
        state.data = []
        state.ready = false
    },
}

export const  actions = {
    getExpertise({ commit, rootState }, slug) {
        console.log("getExpertise")
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH+'expertises/'+slug)
        .then(response => {
            commit('SET_EXPERTISE', response.data);
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
