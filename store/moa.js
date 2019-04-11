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
        console.log("ready")
        console.log(state.data)

    },
    SET_NOT_READY:(state) => {
        state.data = []
        state.ready = false
    },
    SET_MOA:(state, slug ) => {
        console.log("Set MOA "+slug)
        state.moa = state.data.find(obj => obj.slug === slug);
        console.log(state.moa)

    },
}

export const  actions = {
    getMoas({ commit, rootState }, slug) {
        console.log("getMoas")
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH+'moas/')
        .then(response => {
            commit('SET_MOAS', response.data);
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
