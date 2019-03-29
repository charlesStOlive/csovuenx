<template>
  <div>
  <MCompetence :dialog="showDialogCompetence" :data="competenceData" />
   <v-card v-if="ready" flat dark>
    <v-card-title primary class="title">{{ $t('target_mission.mission') }} : {{ mission.name }}</v-card-title>
    <v-card-text>
      <span v-if="mission.description" v-html="$md.render(mission.description)"/>
      <v-list v-if="mission.competences" >
        <template v-for="competence in mission.competences" >
          
          <v-divider :key="competence.id"></v-divider>

          <v-list-tile
          :key="'c'+competence.id"
          >
            
            <v-list-tile-avatar>
              <v-icon @click="showDialogue(competence)">{{ competence.wiki_picture }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content :key="'c'+competence.id" >
              <v-list-tile-title><b>{{ competence.name }}</b></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text> 
  </v-card>
</div>
</template>

<script>
  import MCompetence from '@/components/Modal/MCompetence'
  import Contact from '@/components/Widgets/Contact'
  import { mapGetters } from 'vuex'

export default {
  props:['data'],
  components: {
    Contact,
    MCompetence
  },
  
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      missionSlug: null,
      showDialogCompetence: false,
      competenceData:null
    }
  },
 
  fetch({store, params }) {
    
  },
  mounted() {
    console.log("mounted")
    console.log(this.$nuxt._route.params)
  	this.missionSlug = this.$nuxt._route.params.slug
    this.$store.commit('target/SET_MISSION', this.missionSlug) 
  },
  methods: {
    showDialogue(object) {
      this.competenceData = object
      this.showDialogCompetence = true
    }
  },
  computed: {
    ...mapGetters({
      mission: 'target/mission',
      ready: 'target/ready',
      //
    }),
  },
}

</script>
<style>

</style>

