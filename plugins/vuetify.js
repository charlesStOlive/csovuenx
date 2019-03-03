import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
	iconfont: 'fa',
	theme: {
		primary: '#546e7a', // a color that is not in the material colors palett
		secondary: '#263238' // a color that is not in the material colors palett
	}
})
