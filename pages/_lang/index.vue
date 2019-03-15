<template>
  <v-container fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="secondary" dark>
          <v-card-title primary class="title">Pourquoi ce site</v-card-title>
          <v-card-text>
            <span v-html="settings.site_intro"/>
          </v-card-text>
          <Contact></Contact>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card color="primary" dark>
                  <v-card-title primary class="title">Expertise</v-card-title>
                 <span class="grey--text pl-3">Choisissez une expertise : </span><br>
                 <v-btn small outline color="white">Business Intelligence</v-btn>
                 <v-btn small outline color="white">Marketing digital</v-btn>
                 <v-btn small outline color="white">Developpeur</v-btn>
                 <v-btn small  color="success">Voir mes compétences</v-btn>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12>
                <v-card color="primary" dark>
                <v-img
                class="white--text"
                height="35vh"
                src="img/creademo.jpg">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Une démo</span>
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
                <v-btn small outline color="white">Dir Co</v-btn>
                <v-btn small outline color="white">Agence</v-btn>
                <v-btn small outline color="white">ECommerce</v-btn>
              </v-card-actions>
            </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm12 md5>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card dark>
                  <v-card-title primary  class="title">Derniers projets</v-card-title >
                  <v-flex xs12>
                  <CarouselUnique :data="projects"></CarouselUnique>
                </v-flex>
                      <!-- <v-carousel height="250px" hide-delimiters ma-0>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel> -->
                  </v-card>
          </v-flex>
          <v-flex d-flex xs12>
            <v-card dark>
              <v-card-title primary class="title">Clients</v-card-title>
              <v-flex xs12 class="pl-4 pr-4">
              <CarouselLogo   loop :data="clients"></CarouselLogo>
              </v-flex>

              


          <!-- <v-layout row wrap>
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
          </v-layout> -->




              
            </v-card>
          </v-flex>
          <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#26c6da" dark >
                    <v-card-title>
                        <v-icon large > fab fa-linkedin-in</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#4078c0" dark >
                    <v-card-title>
                        <v-icon large > fab fa-github</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs4>
                <v-card class="mx-auto" color="#162221" dark >
                    <v-card-title>
                        <v-icon large > fab fa-vimeo-v</v-icon>
                    </v-card-title>
                </v-card>
              </v-flex>
        </v-layout>   
        </v-flex> 
      </v-layout>
  </v-container>
</template>

<script>
  import CarouselUnique from '@/Components/Widgets/CarouselUnique'
  import Contact from '@/Components/Widgets/Contact'
  import CarouselLogo from '@/Components/Widgets/CarouselLogo'
  import { mapGetters } from 'vuex'

export default {
  components: {
    CarouselUnique,
    CarouselLogo,
    Contact
  },
  data () {
    return {
      showBanner:false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    }
  },
  head() {
    return { title: this.$t('home.title') }
  },
  mounted() {
    this.showBanner = true;
    this.$store.dispatch('data/getSettings');
    // this.$store.dispatch('data/getClients');
    // this.$store.dispatch('data/getProjects');
  },
  methods: {
    start() {
      this.$nuxt.$emit('launchMenu');
    },
    callContact() {
      this.$nuxt.$emit('call-contact')
    }
  },
  computed: {
    ...mapGetters({
      clients: 'data/clients',
      projects: 'data/projects',
      settings: 'data/settings',
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

