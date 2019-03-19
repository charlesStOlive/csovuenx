<template>
  <v-container v-if="ready" fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex sm12 md5>
        <v-card flat dark>
          <v-card-title primary class="title">Expertise : {{ expertise.name }}</v-card-title>
          <v-card-text>
            <span v-html="$md.render(expertise.description)"/><br>
            <span v-html="$md.render(expertise.description_2)"/>
            <Contact back_btn></Contact>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex sm12 md3>
        <v-card flat dark>
          <v-card-title primary class="title">Compétences utiles</v-card-title>
            <v-flex
              v-for="competence in expertise.competences"
              :key="competence.id"
              lg12 md4 sm6 xs12
            >
                <div>
                  <div><v-btn color="primary" fab small dark><v-icon>{{ competence.wiki_picture }}</v-icon></v-btn>{{ competence.name }}</div>
                </div>
            </v-flex>
        </v-card>
      </v-flex>
      <v-flex d-flex sm12 md4>
        <v-card flat dark>
          <v-card-title primary class="title">Projets utilisant cette expertise</v-card-title>
            <v-flex
              v-for="project in expertise.projects"
              :key="project.id"
              xs12 pa-4
            >
            <v-card tile>
              <v-img class="ma-2"
                 :src="project.main_picture.path"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class=" mb-0">{{ project.name }}</h3>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="white" :to="$i18n.path('projects/'+project.slug)" outline>Voir</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CarouselUnique from '@/components/Widgets/CarouselUnique'
  import CarouselPhoto from '@/components/Widgets/CarouselPhoto'
  import Contact from '@/components/Widgets/Contact'
  import { mapGetters } from 'vuex'

export default {
  props:['data'],
  components: {
    CarouselUnique,
    CarouselPhoto,
    Contact
  },
  
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    }
  },
  validate ({ params }) {
    return /[a-z]+/g.test(params.slug)
  },
  head() {
    //let slug = this.params.slug
    return { title: "Project "+this.$nuxt._route.params.slug }
  },
  fetch({store, params }) {
    
  },
  mounted() {
    this.$store.dispatch('expertise/getExpertise', this.$nuxt._route.params.slug);
    this.$store.dispatch('competences/getCompetences', this.$nuxt._route.params.slug);
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      expertise: 'expertise/data',
      ready: 'expertise/ready'
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

