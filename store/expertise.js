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
    set_expertise:(state, datas ) => {
        state.ready = true
        state.data = datas
        console.log("ready")
    },
    set_expertise_not_ready:(state) => {
        state.data = []
        state.ready = false
    },
}

export const  actions = {
    getExpertise({ commit, rootState }, slug) {
        commit('set_expertise_not_ready');
        return this.$axios.get(process.env.API_PATH+'expertises/'+slug)
        .then(response => {
            commit('set_expertise', response.data);
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
