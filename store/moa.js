export const state = () => ({
    ready: false,
    data:[],
    moa: null
})

export const  getters = {
    data: state => {
        return state.data;
    },
    ready: state => {
        return state.ready
    },
    moa: state => {
        return state.moa;
    }
}

export const  mutations = {
    SET_MOAS:(state, datas ) => {
        state.ready = true
        state.data = datas

    },
    SET_NOT_READY:(state) => {
        state.data = []
        state.ready = false
    },
    SET_MOA:(state, slug ) => {
        state.moa = state.data.find(obj => obj.slug === slug);

    },
}

export const  actions = {
    getMoas({ commit, rootState }, slug) {
        return this.$axios.get(process.env.API_PATH+'moas/')
        .then(response => {
            commit('SET_MOAS', response.data);
        })
        .catch(function (error) {
            let MyError = {}
            // MyError.type = "type_error.request"
            // MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
            // MyError.solution = "solution_error.refresh"
            // commit("errors/newError", MyError, { root: true })
        })
    },
}
