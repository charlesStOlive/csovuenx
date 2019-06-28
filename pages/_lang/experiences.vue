<template>
<div>
  <ModalLoader :show="!ready" :title="$t('popup.show')"/>
  <v-timeline class="pa-5" v-if="ready">
    <v-timeline-item v-for="experience in data" :key="experience.id">
      <v-card class="elevation-2">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>{{ experience.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          {{ experience.description.secteur }}
        </v-toolbar>
        <v-card-text>
          <p>{{ experience.description.start_month }}</p>
          <p class="caption" v-html="$md.render(experience.description.description)"></p>
          
        </v-card-text> 
      </v-card>
    </v-timeline-item>
    <v-timeline-item>
      <v-card class="elevation-2">
        <v-card-title class="headline pt-0">{{ $t('widget.history.title_7') }}</v-card-title>
        <v-card-text class="pt-0">{{ $t('widget.history.sub_title_7') }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalLoader from "@/components/Modal/ModalLoader"

export default {
  components: {
    ModalLoader
  },
  data() {
    return {
      showBanner: false
    };
  },
  head() {
    return { title: this.$t("experiences.title") };
  },
  mounted() {
    this.$store.dispatch('experience/getExperience');
  },
  watch: {
    //check if new calcul
  },
  methods: {},
  computed: {
    ...mapGetters({
      ready: "experience/ready",
      data: "experience/data",
      //
    }),
  }
};
</script>
<style>
</style>

