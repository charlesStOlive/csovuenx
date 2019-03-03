export default function({ store, route }) {

	if(route.params.lang == undefined) {
		store.commit('lang/setLocale', 'en')
	} else {
		store.commit('lang/getCountrysData', route.params.lang)
	}
  return true
}
