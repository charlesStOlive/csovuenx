module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'canalisnuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
      ],

  /*
  ** Global CSS
  */
  // css: [
  //   '~/assets/style/app.styl'
  // ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   '@/plugins/vuetify'
  // ],

  
  /*
  ** Router
  */
  router: {
    middleware: 'checkCountrys'
  },
  /*
  ** Customize the progress bar color
  */
  //loading: '~/components/loading.vue',
  // loading: { color: '#ff0000', height:'6px' },



  
  /*
  ** Build configuration
  */
  
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

