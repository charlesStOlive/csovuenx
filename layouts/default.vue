<template>
  <!-- <v-app id="inspire" class="bgimg" :style="{ backgroundImage: `url(${bgImage})` }" dark> -->
  <v-app id="inspire">
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
            <v-list-tile-title>{{ $t('links.home') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="callContact()" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-envelope</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.contact_me') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('projects')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-briefcase</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.projects') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('competences')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-graduation-cap</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.skills') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('moas')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag-checkered</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.missions') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> 

        <!-- <v-subheader>  Expertises</v-subheader>

        <v-list-tile :to="$i18n.path('expertises/manager-digital')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-laptop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Manager digital</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertises/buiseness-intelligence')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-brain</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Business intelligence</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('expertises/chef-projet-technique-dev')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-user-tag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chef de projet technique / Dev</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        


        <!-- <v-subheader>Mes cibles</v-subheader>

        <v-list-tile :to="$i18n.path('target/pme')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-building</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.pme') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('target/eti-groupes')"  exact>
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-city</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.eti') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->


      </v-list> 

      <v-spacer></v-spacer>

      <v-list>
        <v-list-tile v-if="$i18n.locale === 'fr'" :to="`/en` + $route.fullPath">
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>English version</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>French version</v-list-tile-title>
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
      <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark small flat :to="$i18n.path('survey')">{{ $t('links.survey') }}</v-btn>
          </v-toolbar-items>
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
