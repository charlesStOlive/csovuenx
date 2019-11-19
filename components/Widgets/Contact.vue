<template>
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex xs12 md4>
      <!-- <v-avatar v-if="!is_user_client"  tiled size="80" color="grey lighten-4" >
        <img src="/avatar/moije.jpg" alt="avatar"/>
      </v-avatar> -->
      <v-img  v-if="!is_user_client" :src="cloudi('bookmailcontactclient')"  contain height="200"/>
      <v-img  v-if="is_user_client" :src="cloudi('bookmailcontactclient')" contain height="200"/>
      </v-flex>
      <v-flex shrink>
      <v-layout column justify-center align-center child-flex>
        <MContact2/>
        <v-btn small v-if="is_user_client"  @click="openUrl(create_url_cv)" color="primary"><v-icon class="pr-1" small>file_copy</v-icon>{{ $t('widget.contact.user_cv') }}</v-btn>
        <v-btn v-if="projects_btn" pt-4 small  :to="$i18n.path('projects')"><v-icon class="pr-1" small>fa-briefcase</v-icon>{{ $t('widget.contact.all_project') }}</v-btn>
      </v-layout>
      </v-flex>
    </v-layout>
            
          

</template>
<script>
import { mapGetters } from "vuex";
import MContact2 from "@/components/Modal/MContact2"
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
    MContact2
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