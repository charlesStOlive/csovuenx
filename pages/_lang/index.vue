<template>
  <v-container class="fullPage" fill-height fluid px-0>
      <v-layout align-end justify-center>
        <v-flex xs12>
          <transition name="slide-fade" appear>
          <div v-if="showBanner"  class="resultContainer" >
            
            <v-layout transition="slide-y-reverse-transition" align-end justify-end row wrap fill-height>
              <v-flex class="py-4 mx-2" md3 xs12>
                <v-img  src="/logo.png" height="90" contain />
              </v-flex>
              <v-flex shrink>
                <div class="px-4 headline">
                  <span class="text-md-right"  v-html="gt('g_intro')"/>
                </div>
                <!-- <div class="elevation-5 text-md-center headline">Welcome<br> compare busbar and cable</div> -->
              </v-flex>
              <v-flex shrink>
                <v-icon @click="start" color="primary" class="pr-5 pb-4">fas fa-play</v-icon>
              </v-flex>
            </v-layout>
          </div>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showBanner:false
    }
  },
  head() {
    return { title: this.$t('home.title') }
  },
  mounted() {
    this.showBanner = true
    this.$store.commit('lang/setBgImage', null) 
  },
  methods: {
    start() {
      this.$nuxt.$emit('launchMenu');
    }
  },
  computed: {
    ...mapGetters({
      gt: 'lang/gt',
      //
    })
  },
}
</script>
<style>
  .resultContainer {
  background-color: rgb(255, 255, 255, 0.8)
  }
.fullPage{
  height: 70vh;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>

