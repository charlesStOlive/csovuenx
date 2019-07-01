export default async function({ store, route, redirect }) {
	if(process.env.API_PATH == undefined) {
		console.log("Alerte API_PATH is uknown")
	}
	//Check information we get
	let locale = store.getters['lang/locale']
	let paramlocale = route.params.lang
	//
	//si la langue est inconnu on prend la valeur par defautl 'en'
	if(paramlocale == undefined)  {
		paramlocale = 'en';
	}
	//Check is lang exist in countrys
	if(locale != paramlocale ) {
		await store.dispatch('lang/toogleLang', paramlocale);
		return redirect("/"+store.getters['lang/locale']+'/datacenter')
		// return redirect("/"+store.getters['lang/locale']+'/datacenter')
	}


}
	// else if(store.getters['lang/findCountries'](paramlocale)) {
	// if(locale == 'start') {
	// 	//the  application is starting we need to launch everything. 
	// 	store.dispatch('lang/getCountrysData', 'en');
	// } else if(store.getters['lang/findCountries'](paramlocale)) {
	// 	//si pas start, on à une langue 
	// 	//la langue existe on peut entrer dans la page. 
	// 	if(locale =! paramlocale )  {
	// 		//Il y a eu un changement de la langue. 
	// 		store.commit('lang/toogleLang', paramlocale);
	// 	} else {
	// 		//rien on peut continuer on reste dans la même langue et on a dékà les données. 
	// 	}
	// } else {
	// 	//la langue n'a pas été trouvé. nous cherchons les données. 
	// 	store.dispatch('lang/getCountrysData', );
	// }