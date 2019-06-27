<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="rgb(255, 255, 255, 0.8)">
        <v-card-title color="primary" class="title pb-0">{{ $t('home.title_2') }}</v-card-title>
        <v-list class="transparent" dense two-line>
          <v-list-tile
            dense
            color="primary"
            v-for="item in moas"
            :key="item.id"
            :to="$i18n.path('moas/'+item.slug)"
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
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      moas: "data/moas"
    })
  }
};
</script>
<style>
.transparent {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>