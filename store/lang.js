export const state = () => ({
  locales: ['en', 'fr', 'gb'],
  locale: 'en',
  changeLang: true,
  apps: [],
  //
  apiTextReady:false,
  texts: [],
  bgImage: "/photoFond.jpg"
})

export const getters = {
    // gt: (state) => (slug) => {
    //     let txt = state.texts.find(obj => obj.code === slug);
    //     if(txt == undefined) {
    //         //console.log("error : "+slug);
    //         return "Error "+slug;
    //     } else {
    //         return state.texts.find(obj => obj.code === slug).default;
    //     }
          
    // },
    // gi: (state) => (slug) => {
    //     if(slug == undefined) {
    //         console.log("error : "+slug);
    //     } else {
    //         return process.env.MEDIA_PATH + slug
    //     }
          
    // },
    // bgImage: state => {
    //     return state.bgImage
    // },
    // params: (state) => (name) => { 
    //     return { 
    //       lang: state.locale,
    //       app: 'datacenter'
    //       }
    // },
    // apiTextReady: state => {
    //     return state.apiTextReady;
    // }
    
}

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  // SET_LANG(state, locale) {
  //   if (state.locales.indexOf(locale) !== -1) {
  //     if(state.locale != locale ) {
  //       state.changeLang = true
  //     } else {
  //       state.changeLang = false
  //     }
  //     state.locale = locale
  //   }
  // },
  // setSelectedlocale:(state, data) => {
  //   console.log("setSelectedlocale")
  //   state.texts = data['strs'];
  //   state.apps = data['applications'];
  //   state.apiTextReady = true

  // },
  // setBgImage: (state, appName) => { 
  //     if(appName != undefined) {
  //       let app = state.apps.find(obj => obj.name === appName);
  //       let img = process.env.MEDIA_PATH + app.bg_image
  //       if(img != undefined) {
  //         state.bgImage =  process.env.MEDIA_PATH + app.bg_image
  //       } else {
  //         state.bgImage = "/photoFond.jpg"
  //       }
        
  //     } else {
  //       state.bgImage = "/photoFond.jpg"
  //     }
  // }
  
}

export const actions = {

  // async getSelectedlocale({ commit, rootState, getters, state }) {
  //   console.log("GET SELECTED")
  //   if(!state.apiTextReady || state.changeLang ) {

  //     return this.$axios.get(process.env.API_PATH+"lang/"+state.locale)
  //       .then(response => {
  //         commit('setSelectedlocale', response.data)
  //       })
  //       .catch(function (error) {
  //         let MyError = {}
  //         MyError.type = "type_error.request"
  //         MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
  //         MyError.solution = "solution_error.refresh"
  //         commit("errors/newError", MyError, { root: true })
  //       })
  //   } 
  // },
}
