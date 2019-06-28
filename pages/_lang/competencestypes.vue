<template>
  <v-container v-if="ready" fluid grid-list-md fill-height>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-card color="rgb(255, 255, 255, 0.8)">
          <v-toolbar color="rgb(255, 255, 255, 0.5)">
            <v-toolbar-title>{{ $t('home.title_ct') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="showList = !showList" icon>
              <v-icon color="primary" v-if="!showList">fa-plus-square</v-icon>
              <v-icon v-if="showList">fa-minus-square</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list class="transparent" v-if="showList">
            <v-list-tile
              class="transparent"
              v-for="item in competencestypes"
              :key="item.id"
              :to="$i18n.path('competencestypes/'+item.slug)"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  <b>{{ item.name }}</b>
                </v-list-tile-title>
                <v-list-tile-sub-title>{{ item.accroche }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex md8 pa-O ma-0>
        <nuxt-child :key="$route.params.slug"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showList: true
    };
  },
  head() {
    return { title: "Competences types" };
  },
  mounted() {
    if (!this.$store.getters["competencestypes/ready"]) {
      this.$store.dispatch("competencestypes/getCompetencestypes");
    }
    if (this.$nuxt._route.params.slug && this.$vuetify.breakpoint.smAndDown)
      this.showList = false;
  },
  methods: {},
  computed: {
    ...mapGetters({
      competencestypes: "competencestypes/data",
      ready: "competencestypes/ready"
      //
    })
  }
};
</script>
<style>
.transparent {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>