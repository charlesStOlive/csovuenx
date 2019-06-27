export default function ({ isHMR, app, store, route, params, error, redirect }) {
  console.log("middleware i8n")
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    console.log("IS HMR ????????????????????????????")
    return

  }
  // Get locale from params
  const locale = params.lang || defaultLocale
  if (store.state.lang.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  //store.commit('data/SET_NOT_READY')
  store.commit('lang/SET_LANG', locale)
  //store.dispatch('lang/getSelectedlocale');
  app.i18n.locale = store.state.lang.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  }
}
