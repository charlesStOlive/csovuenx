<template>
  <v-container fluid grid-list-md >
    <v-dialog
      v-model="dataNotReady"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          {{ $t('popup.wait') }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-layout v-if="dataReady" row wrap align-start >
      <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
        <v-flex md10 sm12>
          <v-card color="secondary" dark>
            
              <v-card-title primary class="title">{{ $t('home.title_1') }}</v-card-title>
              <v-card-text>
                <span v-html="settings.site_intro"/>
              </v-card-text>
              <Contact></Contact>
            
          </v-card>
      </v-flex >
      <v-flex md2 sm12>
        <v-layout row wrap>
        <v-flex md12 sm4>
          <v-card color="#26c6da" dark with="100px" >
            <v-responsive :aspect-ratio="1/1" >
              <v-card-title v-ripple @click="openUrl('https://www.linkedin.com/in/charlesstolive/')">
                  <v-icon> fab fa-linkedin-in</v-icon>
              </v-card-title>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex md12 sm4>
          <v-card class="mx-auto" color="#4078c0" with="100px"  dark >
            <v-responsive :aspect-ratio="1/1" >
              <v-card-title v-ripple  @click="openUrl('https://github.com/charlesStOlive')">
                  <v-icon> fab fa-github</v-icon>
              </v-card-title>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex md12 sm4>
          <v-card class="mx-auto" color="#162221" with="100px"   dark >
            <v-responsive :aspect-ratio="1/1" >
              <v-card-title v-ripple @click="openUrl('https://vimeo.com/stolive')" >
                  <v-icon> fab fa-vimeo-v</v-icon>
              </v-card-title>
             </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
      </v-flex>
    </v-layout>
    </v-flex>
 
      <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
          <v-flex>
            <v-layout row wrap>
              <v-flex >
                <v-card color="primary" dark>
                  <v-card-title primary class="title">{{ $t('home.title_2') }}</v-card-title>
                <v-tabs v-if="dataReady" v-model="active" color="primary">
                  <v-tab v-for="target in targets" :key="target.slug" > {{ target.name }}</v-tab>
                  <v-tab-item
                    v-for="target in targets"
                    :key="target.slug"
                  >
                  <v-card-title primary >
                   
                   <!-- <span v-html="$md.render(target.description)" ></span> -->
                   {{ $t('home.exemple_mission') }} {{ target.name }} 
                  </v-card-title>
                    <v-list  class="primary"  two-line>
                      <template v-for="mission in target.missions" >
                        
                        <v-divider :key="mission.id"></v-divider>
            
                        <v-list-tile class="primary"
                        :key="mission.id+'-'+target.slug"
                        >
                          
            
                          <v-list-tile-content :key="mission.id+'-'+target.slug" >
                            <v-list-tile-title><b>{{ mission.name }}</b></v-list-tile-title>
                            <v-list-tile-sub-title>
                              <span class="text--primary">{{ $t('home.skills') }}</span>
                              <span>| {{ competenceToString(mission.competences) }}</span>
                              
                            </v-list-tile-sub-title>
                          </v-list-tile-content>

                          <v-list-tile-action>
                            <v-btn icon ripple :href="$i18n.path('target/'+target.slug+'/mission/'+mission.slug)">
                              <v-icon color="secondary">info</v-icon>
                            </v-btn>
                          </v-list-tile-action>

                        </v-list-tile>
                      </template>
                    </v-list>
                    <v-btn small outline color="white" :href="$i18n.path('target/'+target.slug)">{{ $t('home.sea_page') }} {{ target.name }}</v-btn> <v-btn small outline color="white" :href="$i18n.path('competences/')">{{ $t('home.all_skills') }}</v-btn>


              </v-tab-item>
            </v-tabs>




                </v-card>
              </v-flex>
             
            </v-layout>
          </v-flex>
          
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm12 md4>
        <v-layout wrap >
          <v-flex xs12>
            <v-card  dark>
            <v-layout row wrap>
              <v-flex xs4 pl-1 pt-0>
                <v-img src="/img/creademo.jpg"/>
              </v-flex>
              <v-flex xs8>
                <v-card-title>
                  <div>
                    <span>{{ $t('home.discover_demo') }}</span><br>
                    <span class="grey--text">{{ $t('home.choose_best') }} : </span><br>
                  </div>
                </v-card-title>
              </v-flex> 
            </v-layout>
            <v-card-actions class="pt-0">
              <v-layout row wrap pt-1>
                  <v-flex d-flex md4  xs12>
                    <v-btn small outline color="white" href="http://demobo.charles-saint-olive.com/horizontal/dashboard/saas">{{ $t('home.dir_co') }}</v-btn>
                  </v-flex>
                  <v-flex d-flex md4  xs12>
                    <v-btn small outline color="white"  href="http://demobo.charles-saint-olive.com/boxed/dashboard/agency" >{{ $t('home.agency') }}</v-btn>
                  </v-flex>
                  <v-flex d-flex md4  xs12>
                    <v-btn small outline color="white" href="http://demobo.charles-saint-olive.com/default/dashboard/ecommerce">{{ $t('home.ecommerce') }}</v-btn>
                  </v-flex>
              </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex d-flex xs12>
            <v-card dark>
              <v-card-title primary  class="title">{{ $t('home.last_projects') }}</v-card-title >
              <CarouselUnique :data="projects"></CarouselUnique>
            </v-card>
          </v-flex>
          
        </v-layout>   
        </v-flex> 
      </v-layout>
  </v-container>
</template>

<script>
  import CarouselUnique from '@/components/Widgets/CarouselUnique'
  import Contact from '@/components/Widgets/Contact'
  import CarouselLogo from '@/components/Widgets/CarouselLogo'
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
      active: null,
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
    },
    openUrl(url) {
      window.open(url, '_blank');
    }
  },
  computed: {
    ...mapGetters({
      targets: 'data/targets',
      oneTarget: 'data/oneTarget',
      competenceToString: 'data/competenceToString',
      clients: 'data/clients',
      projects: 'data/projects',
      settings: 'data/settings',
      dataReady: 'data/dataReady',
      dataNotReady: 'data/dataNotReady',
      //
    })
  },
}
</script>
<style>

</style>

