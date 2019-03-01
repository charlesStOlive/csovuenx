export const strict = false

export const state = () => ({
  sidebar: false,
  // locales: ['en', 'fr'],
  // locale: 'en',
  // fr: {
  //       "links": {
  //         "home": "Accueil",
  //         "about": "À propos",
  //         "english": "Version Anglaise",
  //         "french": "Version Française"
  //       },
  //       "home": {
  //         "title": "Bienvenue",
  //         "introduction": "Ceci est un texte d'introduction en Français."
  //       },
  //       "about": {
  //         "title": "À propos",
  //         "introduction": "Cette page est faite pour vous donner plus d'informations."
  //       }
  //     }
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  // SET_LANG(state, locale) {
  //   if (state.locales.indexOf(locale) !== -1) {
  //     state.locale = locale
  //   }
  // }
}
