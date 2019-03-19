<template>
  <v-container v-if="dataReady" fluid grid-list-md fill-height >
    <v-layout row wrap align-center>
      <v-flex
        v-for="competence in competences()"
        :key="competence.id"
        lg3 md4 sm6 xs12
      >
      <v-card :id="competence.slug" color="grey darken-2">
        <v-responsive :aspect-ratio="1/1">
        <v-card-title primary-title>
          <div>
            <div class="headline"><v-btn color="primary" fab dark><v-icon>{{ competence.wiki_picture }}</v-icon></v-btn>{{ competence.name }}</div>
            <span v-if="competence.description">{{ competence.description }}</span>
            <span v-else >{{ competence.wiki_description }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat dark  v-if="competence.error_wiki || competence.disabled_wiki" :href="competence.external_link" target='_blank'>En savoir +</v-btn>
          <v-btn flat dark v-else :href="competence.external_link" target='_blank'>La suite sur wikipedia</v-btn>
        </v-card-actions>
      </v-responsive>
      </v-card>
        
        
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      }),
    head() {
      return { title: this.$t('home.title') }
    },
    mounted() {
      if(!this.$store.getters['data/dataReady']) {
        console.log("Note ready")
        this.$store.dispatch('data/getSettings');
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters({
        dataReady : 'data/dataReady',
        clients: 'data/clients',
        projects: 'data/projects',
        competences: 'data/competences',
        //
      })
    },
  }
</script>