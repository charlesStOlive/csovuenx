<template>
  <!-- <v-app id="inspire" class="bgimg" :style="{ backgroundImage: `url(${bgIm*age})` }" dark> -->
    <v-app id="inspire"  >
      <div class="bgimg" :style="{ backgroundImage: `url(${bgImage})`}">
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

        

        <v-list-tile :to="$i18n.path('projects')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-briefcase</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.projects') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('experiences')" >
          <v-list-tile-action>
            <v-icon :small="!miniVariant">fa-portrait</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('links.experiences') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="$i18n.path('competencestypes')" >
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

      </v-list> 

      <v-spacer></v-spacer>
      <MContact2 v-if="!miniVariant"/>
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
      <v-btn icon>
        <v-icon @click="openBo">settings</v-icon>
      </v-btn>
          <!-- <v-toolbar-items>
            <v-btn dark small flat :to="$i18n.path('survey')">{{ $t('links.survey') }}</v-btn>
          </v-toolbar-items> -->
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
    </div>
  </v-app>
  
</template>

<script>
  import MError from '@/components/Modal/MError';
  import MContact from '@/components/Modal/MContact';
  import MContact2 from "@/components/Modal/MContact2"
  import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
      MError,
      MContact,
      MContact2
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
      app: null,
      bgImage : null
      
      //
    }
  },
  layout (context) {
    
    return 'default'
  },
  head() {
      this.$vuetify.theme.primary = this.$store.getters["user/color"]
      this.bgImage = this.$store.getters["user/cloudi"](this.$store.getters["user/main_picture"])
      return { title:"Welcome" }
    },
  mounted() {
    this.$nuxt.$on('launchMenu', () => { 
         this.launchMenu();
       });

  },

  computed: {
    ...mapGetters({
    })

  },
  fetch () {
     
  },
  methods: {
    launchMenu() {
      this.showMenu = true
    },
    callContact() {
      this.$nuxt.$emit('call-contact')
    },
    openBo() {
      window.open(process.env.API_PATH+'../backend', "_blank");
    }
  }

}
</script>

<style>
.white_tr {
  background-color: rgba(255, 255, 255, 0.911) !important;
}
.bgimg {
  height: 100% !important;
  background-size: cover !important;
  background-attachment: fixed;
  background-position: 50% !important;
}
</style>
