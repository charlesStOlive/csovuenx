<template>
  <v-container fluid text-xs-center class="pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="rgb(200, 200, 200, 0.7)">
          <v-card-text class="mt-40 px-0">Salut</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  // asyncData() {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 2000)
  //   })
  // },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>