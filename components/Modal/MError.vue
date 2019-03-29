<template>
    <v-dialog
      v-model="showError"
      hide-overlay
      persistent
      lazy
      width="500px"
    >
      <v-card
      v-if="showError"
        color="red"
        dark
      >
      <v-card-title primary-title>
        <v-icon left>fa fa-exclamation-triangle</v-icon>
        <span class="headline font-weight-bold">error</span>
      </v-card-title>
      <v-card-text> 
          <ul>
            <li>{{ $t(type_error.type) }} : {{ $t(lastError.type) }} </li>
            <li>{{ $t(type_error.message) }} : {{ lastError.message }} </li>
            <li>{{ $t(type_error.solution) }} : {{ $t(lastError.solution) }} </li>
          </ul> 
        </v-card-text>
      <v-card-actions>
        <v-btn @click="killErrors" flat dark>OK</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted() {
      this.$nuxt.$on('callUpdate', () => { 
        this.$store.commit('errors/killErrors');
     });

    },
    computed: {
    ...mapGetters({
        showError: 'errors/showError',
        errors: 'errors/errors',
        lastError: 'errors/lastError'
      // ...
      }),
    
    
  },
  methods: {
    killErrors() {
      this.$store.commit('errors/killErrors');
    },


  }

    
}
</script>
