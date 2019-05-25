<template>
  <v-container v-if="ready" fluid grid-list-md fill-height>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-card>
        <v-list two-line>
          <v-subheader>{{ $t('home.title_2') }}</v-subheader>
          <v-list-tile v-for="item in moas" :key="item.id" :to="$i18n.path('moas/'+item.slug)">
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
      
      <!-- <v-flex
        v-for="project in projects"
        :key="project.id"
        xs12
      >
      <v-card flat tile>
        <v-layout row wrap>
        <v-flex xs4>
        <v-img
           :src="project.main_picture.path"
        ></v-img>
        </v-flex>
        <v-flex xs8>
          {{ project.name }} 
            <span v-if="project.client">Client :  {{ project.client.name }} </span>
          <v-btn flat small :to="$i18n.path('moas/'+project.slug)" outline>{{ $t('links.show') }}</v-btn>
        </v-flex>
      </v-layout>
      </v-card>
      </v-flex>
      </v-flex>-->
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
    return { title: "MOAS" };
  },
  mounted() {
    if (!this.$store.getters["moa/dataReady"]) {
      this.$store.dispatch("moa/getMoas");
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      moas: "moa/data",
      ready: "moa/ready"
      //
    })
  }
};
</script>