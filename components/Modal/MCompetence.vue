<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card v-if="data">
        <v-card-title
          class="headline primary lighten-2"
          primary-title
        >
          {{ data.name }}
        </v-card-title>

        <v-card-text v-if="data.description">
          {{ data.description }}
        </v-card-text>

        <v-card-text v-else>
          {{ data.wiki_description }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outline
            @click="dialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    data: {
    },
  },
  mounted() {
  },
  computed: {
  },
};
</script>
<style>
  
</style>