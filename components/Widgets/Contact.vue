<template>
  <v-card-text class="text-xs-center">
            <v-avatar  tiled size="80" color="grey lighten-4" >
              <img src="/avatar/moije.jpg" alt="avatar"/>
            </v-avatar>
            <v-btn small  @click="callContact()" color="secondary"><v-icon class="pr-1" small>email</v-icon>Contactez moi</v-btn>
            <br><br>
            <v-btn v-if="back_btn" pt-4 small  :to="$i18n.path('')"><v-icon class="pr-1" small>arrow_back</v-icon>Retour accueil</v-btn>
          </v-card-text>

</template>
<script>

export default {
  props: {
    back_btn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    callContact() {
      this.$nuxt.$emit('call-contact')
    }
  },
}


</script>
<style>
.bgimg {
  background-color: #424242;
  color: white;
}
</style>