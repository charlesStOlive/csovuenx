<template>
	 <v-layout row wrap>
    <v-flex>
          <v-card color="primary" dark>
            <v-card-title  class="title">{{ $t('home.title_2') }}</v-card-title>
            <v-list two-line color="primary">
              <v-list-tile  color="primary"
                v-for="item in moas"
                :key="item.id"
                :to="$i18n.path('moas/'+item.slug)"
              >
                <v-list-tile-content >
                  <v-list-tile-title><b>{{ item.name }}</b></v-list-tile-title>
                  <v-list-tile-sub-title> {{ item.accroche }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
  </v-layout>
</template>
<script>
  import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      moas: 'data/moas',
    })
  },
}
</script>