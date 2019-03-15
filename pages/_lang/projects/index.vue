<template>
  <v-container v-if="dataReady" fluid grid-list-md fill-height>
    <v-layout row wrap>
      <v-flex
        v-for="project in projects"
        :key="project.id"
        xs4
      >
      <v-card flat tile>
        <v-img
           :src="project.main_picture.path"
          aspect-ratio="1.6"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ project.name }}</h3>
            <div v-if="project.client">Client :  {{ project.client.name }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="white" :to="$i18n.path('projects/'+project.slug)" outline>Voir</v-btn>
        </v-card-actions>
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
        settings: 'data/settings',
        //
      })
    },
  }
</script>