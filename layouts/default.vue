<template>
  <!-- <v-app id="inspire" class="bgimg" :style="{ backgroundImage: `url(${bgImage})` }" dark> -->
  <v-app id="inspire" dark>
  <MError />
  <MContact />
    <v-navigation-drawer
      v-model="showMenu"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-tile :to="$i18n.path('')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="callContact()" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-envelope</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contactez moi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('projects')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-briefcase</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Les Projets</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('competences')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-graduation-cap</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Competences</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-subheader>  Expertises</v-subheader>

        <v-list-tile :to="$i18n.path('expertise/buiseness-intelligence')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-brain</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Business intelligence</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertise/marketing-digital')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-user-tag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Marketing digital</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertise/developpeur')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-laptop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Developpeur</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-subheader>Accès  Demo</v-subheader>

        <v-list-tile :to="$i18n.path('expertise/buiseness-intelligence')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-chart-line</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Direction commercial</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertise/marketing-digital')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-pen-nib</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard Agence</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertise/developpeur')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-shopping-cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ecommerce</v-list-tile-title>
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
            <v-list-tile-title>French version</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>English version</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile @click.stop="miniVariant = !miniVariant" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">{{ miniVariant ? 'fa-chevron-right' : 'fa-chevron-left' }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reduire le menu</v-list-tile-title>
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
        <nuxt />
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
  import MContact from '@/components/Modal/MContact';
  import { mapGetters } from 'vuex'

export default {
  
  name: 'App',
  components: {
      MError,
      MContact
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
      title: 'Charles SaintO',
      app: null
      //
    }
  },
  mounted() {
    console.log("yo"+this.bgImage)
    // if(!this.apiTextReady) {
    //   this.$store.dispatch('lang/getSelectedlocale');
    // } 
    this.$nuxt.$on('launchMenu', () => { 
         this.launchMenu();
       });

  },

  computed: {
    ...mapGetters({
      // gt: 'lang/gt',
      // gapp: 'lang/gapp',
      // bgImage: 'lang/bgImage',
      // params: 'lang/params',
      // apiTextReady: 'lang/apiTextReady'
    })

  },
  methods: {
    launchMenu() {
      this.showMenu = true
    },
    callContact() {
      this.$nuxt.$emit('call-contact')
    }
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
