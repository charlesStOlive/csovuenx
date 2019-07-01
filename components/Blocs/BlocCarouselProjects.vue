<template>
  <v-card class="white_tr">
    <v-card-title primary class="title">{{ $t('home.last_projects') }}</v-card-title>
    <CarouselUnique :data="projects"></CarouselUnique>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
//
import CarouselUnique from "@/components/Widgets/CarouselUnique";

export default {
  components: {
    CarouselUnique, 
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      projects: "data/projects_carousel"
    })
  }
};
</script>
