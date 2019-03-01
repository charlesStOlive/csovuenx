<template>
  <v-container fluid grid-list-md>
      <ModalLoader :show="!dataReady" />
      <App :app="gapp('datacenter')" v-if="dataReady" />
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalLoader from '~/components/Modal/ModalLoader';
  import App from '@/components/Partials/App.vue'

  export default {
    components: {
      ModalLoader,
      App,
      // MAxiosError,
      // MError,
    },
    head () {
      return {
        title: "Data Center",
        meta: [
          { hid: 'description', name: 'description', content: 'Ma description personnalisée' }
        ]
      }
    },
  //
  mounted() {
    if(this.apiTextReady) {
      console.log("apiTextReady")
      this.getData()
      
    } else {
      console.log("apiText PAS Ready")
      this.getLocale()
    }
  },
  //
  computed: {
    ...mapGetters({
      gt: 'lang/gt',
      bgImage: 'lang/bgImage',
      gapp: 'lang/gapp',
      apiTextReady: 'lang/apiTextReady',
      dataReady: 'data/dataReady',
      //
    })
  },
  //
  methods: {
    async  getLocale() {
      console.log("hightRize method getlocale")
      await this.$store.dispatch('lang/getSelectedlocale');
      this.getData()
    },
    getData() {
      this.$store.commit('lang/setBgImage', 'datacenter') 
      this.$store.dispatch('data/getDatas', 'datacenter')
    }
  },  
}
</script>
