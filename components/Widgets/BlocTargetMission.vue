<template>
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
    }
  },
  // methods: {
  //   // start() {
  //   //   this.$nuxt.$emit('launchMenu');
  //   // },
  //   // callContact() {
  //   //   this.$nuxt.$emit('call-contact')
  //   // },
  //   // openUrl(url) {
  //   //   window.open(url, '_blank');
  //   // }
  // },
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