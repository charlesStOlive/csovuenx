export const state = () => ({
  user: null,
  ready:false,
  
})

export const getters = {
  ready: state => {
    return state.ready;
  },
  user: state => {
    return state.user;
  },
  existe: state => {
    if(state.user) {
      return true
    } else {
      return false
    };
  },
  is_user: state => {
    if(state.user.id =="9999") return false
    return true
  },
  is_user_client: state => {
    if(state.user.id =="9999") return false
    if(!state.user.client) return false
    return true
  },
  create_url_cv: state => {
    return process.env.API_PATH+"../maker/pdfcv/"+state.user.key
  },
  user_id: state => {
    return state.user.id;
  },
  user_key: state => {
    return state.user.key;
  },
  color: state => {
    if(state.user) {
      if(state.user.client.base_color) {
        return state.user.client.base_color
      } 
    }
    return "739aaa"

  },
  colors: state => {
    if(state.user) {
      if(state.user.client) {
        return state.user.colors
      } 
    }
    return null

  },
  cloudi: (state) => (slug) => {
      let img = state.user.cloudis.find(obj => obj.slug === slug);
      if(img == undefined) {
          //console.log("error : "+slug);
          return "Error "+slug;
      }
      return img.pivot.url
  },
  
  
    
}

export const mutations = {
  SET_USER:(state, datas ) => {
    state.ready = true
    state.user = datas
  },
  
}

export const actions = {
  
  getUser({ commit, rootState }, userKey) {
    console.log("We grab user info")
    //commit('SET_NOT_READY');
    console.log(process.env.API_PATH+'user/'+userKey)
    return this.$axios.get(process.env.API_PATH+'user/'+userKey)
    .then(response => {
        commit('SET_USER', response.data);
    })
    .catch(function (error) {
        
        let MyError = {}
        MyError.type = "type_error.request"
        MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
        MyError.solution = "solution_error.refresh"
        console.log(MyError)
        commit("errors/newError", MyError, { root: true })
    })
},

}
