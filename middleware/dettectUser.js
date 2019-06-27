export default function ({ isHMR, app, store, route, params, error, redirect }) {
  console.log("middleware user")
  
  if(!route.query.k) {
    console.log("PAS DE CODE K------------")
    if(store.getters["user/existe"]) {
      //si l'utilisateur existe on ne fait rien
      return
    } else {
       //sinon on charge l'utilsateur de base
      return store.dispatch('user/getUser','3lrU70dUgW8R').then((res) => {
        console.log("end promise  user")
      })
    }  
  } else {
    console.log("CODE K-------")
    // si il y a un code K
    if(store.getters["user/existe"] && route.query.k == store.getters["user/user_key"]  ) {
      //si l'utilisateur exite et les clés sont les mêmes on ne fait rien. 
      return
    }
    if(store.getters["user/existe"] && route.query.k != store.getters["user/user_key"]  ) {
      //si l'utilisateur exite mais les clés sont différente on recharge. 
      return store.dispatch('user/getUser', route.query.k).then((res) => {
        console.log("end promise  user")
      })
    }
    if(!store.getters["user/existe"]) {
      //si l'utilisateur exite on utilise la clé K
      return store.dispatch('user/getUser', route.query.k).then((res) => {
        console.log("end promise  user")
      })
    }
  }
  return 
}
