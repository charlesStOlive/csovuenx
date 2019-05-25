export const state = () => ({
    ready: false,
    data:[],
    competencestype: null
})

export const  getters = {
    data: state => {
        return state.data;
    },
    ready: state => {
        return state.ready
    },
    competencestype: state => {
        return state.competencestype;
    }
}

export const  mutations = {
    SET_CTS:(state, datas ) => {
        state.ready = true
        state.data = datas
        console.log("ready")
        console.log(state.data)

    },
    SET_NOT_READY:(state) => {
        state.data = []
        state.ready = false
    },
    SET_CT:(state, slug ) => {
        console.log("SET_CT "+slug)
        state.competencestype = state.data.find(obj => obj.slug === slug);
        console.log(state.competencestype)

    },
}

export const  actions = {
    getCompetencestypes({ commit, rootState }, slug) {
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH+'competencestypes/')
        .then(response => {
            commit('SET_CTS', response.data);
        })
        .catch(function (error) {
            let MyError = {}
            console.log(error)
            // MyError.type = "type_error.request"
            // MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            // MyError.solution = "solution_error.refresh"
            // commit("errors/newError", MyError, { root: true })
        })
    },
}
