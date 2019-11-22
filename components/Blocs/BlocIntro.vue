<template>
  <v-card class="white_tr">
    <v-card-title class="headline primary--text">{{ $t('home.title_1') }}<span v-if="is_user">&nbsp;{{ user.name }} {{ user.fname }}</span></v-card-title>
    <v-card-text>
      <span v-if="$i18n.locale === 'fr'" v-html="user.site_intro"/>
      <span v-else v-html="settings.site_intro_en"/>
      <Contact></Contact>
    </v-card-text>
    
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
//
import Contact from "@/components/Widgets/Contact"


export default {
  components: {
    Contact,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      settings: "data/settings",
      is_user: "user/is_user",
      user: "user/user",
    })
  }
};
</script>
