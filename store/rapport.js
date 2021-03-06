export const state = () => ({
  rapport: null,
  ready:false,
  regionId: 1,
  increment:1
})

export const getters = {
  ready: state => {
    return state.ready;
  },
  rapport: state => {
    return state.rapport;
  },
  regionId: state => {
    return state.regionId;
  },
  weekStart: state => {
    return state.rapport.global.weekStart
  },
  date: state => {
    return state.rapport;
  },
  url_pdf: (state) => (object) => {
    if(object.date) {
      return process.env.API_PATH+'pdfreportglobal/'+object.rapportKey+'/'+object.regionId+'/1/'+object.date
    } else {
      return process.env.API_PATH+'pdfreportglobal/'+object.rapportKey+'/'+object.regionId+'/1/'
    }
  }
}

export const mutations = {
  SET_RAPPORT:(state, datas ) => {
    state.ready = true
    state.rapport = datas
    state.regionId = datas.global.regionId
  },
  SET_READY:(state, value ) => {
    state.ready = value
  },
  increment:(state ) => {
    state.increment++
    
},
  
}

export const actions = {
  
  getRapport({ commit, rootState }, object) {
    let url= null
    if(object.date) {
      url = process.env.API_PATH+'pdfreportglobal/'+object.rapportKey+'/'+object.regionId+'/0/'+object.date
    } else {
      url = process.env.API_PATH+'pdfreportglobal/'+object.rapportKey+'/'+object.regionId+'/0/'
    }
    //console.log("We grab rapport info : "+url)
    return this.$axios.get(url)
    .then(response => {
        commit('SET_RAPPORT', response.data);
        commit('increment');
        
        
    })
    .catch(function (error) {
        let MyError = {}
        MyError.type = "type_error.request"
        MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
        MyError.solution = "solution_error.refresh"
        //console.log(MyError)
        commit("errors/newError", MyError, { root: true })
    })
},

}
