<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="show"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn fab dark small  color="primary lighten-2"
          v-on="on"
        >
          <v-icon>help_outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline primary lighten-2"
          primary-title
        >
          {{ title }}
        </v-card-title>

        <v-card-text> 
          <slot></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="show = false"
          >
           OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "Aide"
      },
      title_complete: {
        type: String,
        default: null
      },
      content: {
        type: String,
      },
      txt:{
        type: String,
        default: "lorem ipsum"
      }
    },
    data() {
      return {
        helpDialog: false,
        helpData:'',
      }
    },
    computed: {
    ...mapGetters({
      // ...
      }),
    
    
  },
  mounted() {
  },
  
  methods: {
  }

    
}
</script>
