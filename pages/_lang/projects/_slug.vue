<template>
  <v-container v-if="project.length != 0" fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex sm12 md3>
        <v-card flat dark>
          <v-card-title primary class="title">Project : {{ project.name }}</v-card-title>
          <v-card-text>
            <span v-html="$md.render(project.description)"/>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex sm12 md9>
        <v-card flat dark>
          <v-card-title primary class="title">Photo & vidéo</v-card-title>
            <CarouselPhoto :data="project"></CarouselPhoto>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CarouselUnique from '@/Components/Widgets/CarouselUnique'
  import CarouselPhoto from '@/Components/Widgets/CarouselPhoto'
  import { mapGetters } from 'vuex'

export default {
  
  components: {
    CarouselUnique,
    CarouselPhoto
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
  mounted() {
    this.slug = this.$nuxt._route.params.slug
    this.$store.dispatch('data/getProject', this.slug);
    console.log(this.$nuxt)
  },
  methods: {
    
  },
  computed: {
    ...mapGetters({
      project: 'data/project',
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

