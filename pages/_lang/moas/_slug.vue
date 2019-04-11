<template>
  <div>
    <MCompetence :dialog="showDialogCompetence" :data="competenceData" />
      <v-card flat dark v-if="moa">
        
        <v-card-title primary class="title">{{ moa.name }}</v-card-title>
        <v-card-text>
          <span v-if="moa.description" v-html="$md.render(moa.description)"/>
          <v-list v-if="moa.competences" >
            <template v-for="competence in moa.competences" >
              
              <v-divider :key="competence.id"></v-divider>

              <v-list-tile
              :key="'c'+competence.id"
              @click="showDialogue(competence)"
              >
                
                <v-list-tile-avatar>
                  <v-icon >{{ competence.wiki_picture }}</v-icon>
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
    MCompetence,
    Contact
  },
  
  data () {
    return {
      slug: null,
      showDialogCompetence: false,
      competenceData:null
    }
  },
  validate ({ params }) {
    return /[a-z]+/g.test(params.slug)
  },
  head() {
    //let slug = this.params.slug
    return { title: " "+this.$nuxt._route.params.slug }
  },
  fetch({store, params }) {
    
  },
  mounted() {
    this.slug = this.$nuxt._route.params.slug
    this.$store.commit('moa/SET_MOA', this.slug) 
  },
  methods: {
    showDialogue(object) {
      this.competenceData = object
      this.showDialogCompetence = true
    }
  },
  computed: {
    ...mapGetters({
      ready: 'moa/ready',
      moa: 'moa/moa'
      //
    }),
    compiledMarkdown: function (txt) {
      return marked(txt, { sanitize: true })
    }
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

