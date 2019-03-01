<template>
  <v-layout  align-space-around justify-center row wrap fill-height v-if="dataReady">
  <MExplainComponent />
          <v-navigation-drawer
            v-model="advanced"
            :right="right"
            temporary
            fixed
          >
            <v-container fluid grid-list-xs v-if="advanced" >
                  <v-layout row wrap v-for="item in Components" :key="item.name" v-if="item.advanced" >
                    <CsoComponent :data="item"/>
                  </v-layout>
              </v-container>
          </v-navigation-drawer>
      <MExplain />
      <v-flex  xs12 sm9 md9>
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-toolbar color="grey" dark tabs>
            <!-- <v-toolbar-side-icon @click.stop="launchMenu"></v-toolbar-side-icon> -->
            <v-toolbar-title><v-icon>{{app.icone}}</v-icon> {{ gt(app.title) }}</v-toolbar-title>
            

            <v-tabs slot="extension" v-model="model" color="grey"  slider-color="primary" class="pa-0" @change="changeInput" >
              <v-tab v-if="AppTabActive(1)" href="#tab1">{{ gt(AppTabName(1)) }}</v-tab>
              <v-tab v-if="AppTabActive(2)" href="#tab2">{{ gt(AppTabName(2)) }}</v-tab>
              <v-tab v-if="AppTabActive(3)" href="#tab3">{{ gt(AppTabName(3)) }}</v-tab>
              <v-tab v-if="AppTabActive(4)" href="#tab4">{{ gt(AppTabName(4)) }}</v-tab>
              <v-tab v-if="AppTabActive(5)" href="#tab5">{{ gt(AppTabName(5)) }}</v-tab>
            </v-tabs>
          </v-toolbar>

         <v-tabs-items   v-model="model">
            <Tab :content="AppTabContent(1)" value="tab1" />
            <Tab :content="AppTabContent(2)" value="tab2" />
            <Tab :content="AppTabContent(3)" value="tab3" />
            <Tab :content="AppTabContent(4)" value="tab4" />
            <Tab :content="AppTabContent(5)" value="tab5" />
          </v-tabs-items>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm9 md3>
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-toolbar color="grey" dark>
          <v-toolbar-title>{{ gt('g_configurator') }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon v-if="!advanced" @click="switchAdvanced" ><v-icon>build</v-icon></v-btn>
        </v-toolbar>
              <v-container fluid grid-list-xs v-if="!advanced" >
                  <v-layout row wrap v-for="item in Components" :key="item.name" v-if="!item.advanced" >
                    <CsoComponent :data="item"/>
                  </v-layout>
              </v-container>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalLoader from '@/components/Modal/ModalLoader'
  import CsoComponent from '@/components/Components/CsoComponent'
  import Tab from '@/components/Partials/Tab'
  import MExplain from '@/components/Modal/MExplain'
  import MExplainComponent from '@/components/Modal/MExplainComponent'
  
  export default {
    props: ['app'],
    components: {
      ModalLoader,
      CsoComponent,
      MExplainComponent,
      MExplain,
      Tab,
    },
    data() {
      return {
        model: 'tab1',
        advanced: false,
        right: true,
        rightDrawer: true,
      }
    },
    //

  watch:{ 
    //check if new calcul
    '$store.state.calculs.increment'(v){
        this.$nuxt.$emit('calculs-ready');
     },
     // '$store.state.data.waitForData'(v){
     //    console.log("data are ready we call update");
     //    this.$nuxt.$emit('calculs-ready');
     // }
  },
  //
  mounted() {
    this.$nuxt.$on('callUpdate', () => { 
      this.$store.dispatch('calculs/calculate');
     });
  },
  //
  computed: {
    ...mapGetters({
      gt: 'lang/gt',
      dataReady: 'data/dataReady',
      Components: 'data/Components',
      AppTabActive: 'data/AppTabActive',
      AppTabName: 'data/AppTabName',
      AppTabContent: 'data/AppTabContent',
    })
  },
  //
  methods: {
    changeInput(val) {
      console.log(val);
      //this.$nuxt.$emit('callUpdate');
    },
    switchAdvanced() {
      this.advanced = !this.advanced

    },
    switchCalcul() {
      this.showCalcul = !this.showCalcul

    },
    launchMenu() {
      this.$nuxt.$emit('launchMenu');
    }
  },
  
      
}
</script>