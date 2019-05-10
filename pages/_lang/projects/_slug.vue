<template>
  <v-container v-if="readyss" fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex sm12 md3>
        <v-card flat dark>
          <v-card-title
            primary
            class="title"
          >{{ $t('project.project') }}Project : {{ project.name }}</v-card-title>
          <v-card-text>
            <span v-html="$md.render(project.description)"/>
            <Contact back_btn projects_btn></Contact>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex sm12 md9>
        <v-card flat dark>
          <v-card-title primary class="title">{{ $t('project.photos') }}</v-card-title>
          <CarouselPhoto :data="project"></CarouselPhoto>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CarouselUnique from "@/components/Widgets/CarouselUnique";
import CarouselPhoto from "@/components/Widgets/CarouselPhoto";
import Contact from "@/components/Widgets/Contact";
import { mapGetters } from "vuex";

export default {
  props: ["data"],
  components: {
    CarouselUnique,
    CarouselPhoto,
    Contact
  },

  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  },
  validate({ params }) {
    return /[a-z]+/g.test(params.slug);
  },
  head() {
    //let slug = this.params.slug
    return { title: "Project " + this.$nuxt._route.params.slug };
  },
  fetch({ store, params }) {},
  mounted() {
    this.$store.dispatch("project/getProject", this.$nuxt._route.params.slug);
  },
  methods: {},
  computed: {
    ...mapGetters({
      project: "project/data",
      readyss: "project/ready"
      //
    }),
    compiledMarkdown: function(txt) {
      return marked(txt, { sanitize: true });
    }
  }
};
</script>
<style>
.resultContainer {
  background-color: rgb(255, 255, 255, 0.8);
}
.fullPage {
  height: 70vh;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>

