<template>
  <v-card-text class="text-xs-center">
            <v-avatar  tiled size="80" color="grey lighten-4" >
              <img src="/avatar/moije.jpg" alt="avatar"/>
            </v-avatar>
            <v-btn small  @click="callContact()" color="secondary"><v-icon class="pr-1" small>email</v-icon>Contactez moi</v-btn>
            <br><br>
            <v-btn v-if="projects_btn" pt-4 small  :to="$i18n.path('projects')"><v-icon class="pr-1" small>fa-briefcase</v-icon>Tous les projets</v-btn>
            <v-btn v-if="competences_btn" pt-4 small  :to="$i18n.path('skills')"><v-icon class="pr-1" small>arrow_back</v-icon>Tous les projets</v-btn>
            <v-btn v-if="back_btn" pt-4 small  :to="$i18n.path('')"><v-icon class="pr-1" small>fa-home</v-icon>Retour accueil</v-btn>
            
          </v-card-text>

</template>
<script>

export default {
  props: {
    back_btn: {
      type: Boolean,
      default: false
    },
    projects_btn: {
      type: Boolean,
      default: false
    },
    competences_btn: {
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