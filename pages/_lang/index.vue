<template>
  <v-container fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="secondary" dark>
          <v-card-title primary class="title">Pourquoi ce site</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card>
                <v-img
                class="white--text"
                height="150px"
                src="img/creademo.jpg">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Une démo de BO</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  
                  <span>Découvrez une démo d'application.</span><br>
                  <span class="grey--text">Choisissez ce qui vous convient le mieux : </span><br>
                </div>
              </v-card-title>
              <v-card-actions class="pt-0">
                <v-btn small color="secondary">Dir Co</v-btn>
                <v-btn small color="secondary">Agence</v-btn>
                <v-btn small color="secondary">ECommerce</v-btn>
              </v-card-actions>
            </v-card>
              </v-flex>
              <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-card-title>
                        <v-icon large > fab fa-linkedin-in</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#4078c0" dark max-width="400">
                    <v-card-title>
                        <v-icon large > fab fa-github</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#162221" dark max-width="400">
                    <v-card-title>
                        <v-icon large > fab fa-vimeo-v</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex>
            <v-card dark>
              <v-card-title primary class="title">Compétences</v-card-title>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="primary" dark>
                  <v-card-title primary  class="title">Derniers projets</v-card-title >
                      <v-carousel height="250px" hide-delimiters ma-0>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
                  </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card dark>
              <v-card-title primary class="title">Clients</v-card-title>
              


          <v-layout row wrap>
            <v-flex
              v-for="n in 6"
              :key="n"
              xs4
            >
              <v-card flat tile>
                <v-img
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="100px"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>




              
            </v-card>
          </v-flex>
        </v-layout>   
        </v-flex> 
      </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showBanner:false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
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
      //gt: 'lang/gt',
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

