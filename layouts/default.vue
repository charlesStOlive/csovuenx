<template>
  <v-app id="inspire" class="bgimg" :style="{ backgroundImage: `url(${bgImage})` }">
  <MError />
    <v-navigation-drawer
      v-model="showMenu"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-tile :to="$i18n.path('')" exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.home') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="$i18n.path('datacenter')" exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">{{gapp('datacenter').icone}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ gt(gapp('datacenter').title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="$i18n.path('hightrize')" exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">{{gapp('hightrize').icone}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ gt(gapp('hightrize').title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-spacer></v-spacer>

      <v-list>
        <v-list-tile v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath">
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.french') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.english') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile @click.stop="miniVariant = !miniVariant" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">{{ miniVariant ? 'fa-chevron-right' : 'fa-chevron-left' }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.reduce') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
    >
      <v-toolbar-side-icon @click="showMenu = !showMenu" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-container fluid class="px-0 mx-0" >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
      color="primary"
      dark
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import MError from '@/components/Modal/MError';
  import { mapGetters } from 'vuex'

export default {
  
  name: 'App',
  components: {
      MError,
      //MExplain,
  },
  data () {
    return {
      footer: {
        inset: false
      },
      clipped: true,
      showMenu: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Canalis',
      app: null
      //
    }
  },
  mounted() {
    console.log("yo"+this.bgImage)
    if(!this.apiTextReady) {
      this.$store.dispatch('lang/getSelectedlocale');
    } 
    this.$nuxt.$on('launchMenu', () => { 
         this.launchMenu();
       });

  },

  computed: {
    ...mapGetters({
      gt: 'lang/gt',
      gapp: 'lang/gapp',
      bgImage: 'lang/bgImage',
      params: 'lang/params',
      apiTextReady: 'lang/apiTextReady'
    })

  },
  methods: {
    launchMenu() {
      this.showMenu = true
    },
  }

}
</script>

<style scoped>
.back {
  background-size: cover;
}
#inspire img {
  height: 100%
}
.slider {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
}
.bgimg {
  height: 100%;
  background-size: cover;
  background-position: 50%;
}

</style>
