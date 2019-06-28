<template>
  <v-card-text class="text-xs-center">
    <v-layout column wrap >
      <v-flex md6 xs12>
      <v-avatar v-if="!is_user_client"  tiled size="80" color="grey lighten-4" >
        <img src="/avatar/moije.jpg" alt="avatar"/>
      </v-avatar>
      
      <v-img  v-if="is_user_client" :src="cloudi('bookmailcontactclient')" contain height="200"/>
      </v-flex>
      <v-flex md6 xs12>
      <v-layout column justify-center align-center child-flex>
        <Mcontact2/>
        <v-btn small v-if="is_user_client"  @click="openUrl(create_url_cv)" color="primary"><v-icon class="pr-1" small>file_copy</v-icon>{{ $t('widget.contact.user_cv') }}</v-btn>
        <v-btn v-if="projects_btn" pt-4 small  :to="$i18n.path('projects')"><v-icon class="pr-1" small>fa-briefcase</v-icon>{{ $t('widget.contact.all_project') }}</v-btn>
        <v-btn v-if="competences_btn" pt-4 small  :to="$i18n.path('skills')"><v-icon class="pr-1" small>arrow_back</v-icon>{{ $t('widget.contact.all_project') }}</v-btn>
        <v-btn v-if="back_btn" pt-4 small  :to="$i18n.path('')"><v-icon class="pr-1" small>fa-home</v-icon>{{ $t('widget.contact.back_home') }}</v-btn>
      </v-layout>
      </v-flex>
    </v-layout>
            
          </v-card-text>

</template>
<script>
import { mapGetters } from "vuex";
import Mcontact2 from "@/components/Modal/Mcontact2"
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
  components: {
    Mcontact2
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      is_user: "user/is_user",
      is_user_client : "user/is_user_client",
      user: "user/user",
      cloudi: "user/cloudi",
      create_url_cv: "user/create_url_cv"
    })
  },
  methods: {
    callContact() {
      this.$nuxt.$emit('call-contact')
    },
    openUrl(url) {
      window.open(url);
    }
  }
}


</script>
<style>
.bgimg {
  background-color: #424242;
  color: white;
}
</style>