<template>
  <v-container v-if="ready" fluid grid-list-md fill-height>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-card>
        <v-list two-line>
          <v-subheader>{{ $t('home.title_ct') }}</v-subheader>
          <v-list-tile v-for="item in competencestypes" :key="item.id" :to="$i18n.path('competencestypes/'+item.slug)">
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
    return {};
  },
  head() {
    return { title: "Competences types" };
  },
  mounted() {
    if (!this.$store.getters["competencestypes/ready"]) {
      this.$store.dispatch("competencestypes/getCompetencestypes");
    }
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