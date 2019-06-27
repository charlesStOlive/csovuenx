<template>
  <v-card color="rgb(255, 255, 255, 0.8)">
    <v-card-text primary>
      <p class="title">{{ $t('home.key_title') }}</p>
      <p v-if="is_user_client">{{ $t('home.key_description_is_user_contact') }}</p>
      <!-- <p v-if="is_user  && !is_user_contact">{{ $t('home.key_description_is_user') }}</p> -->
      <p v-if="!is_user">{{ $t('home.key_description_no_user') }}</p>
      <v-layout align-center row>
        <ContactPart v-if="!is_user_client" btn :contact="contact[0]"/>
        <ContactPart v-if="!is_user_client" btn :contact="contact[1]"/>
        <ContactPart v-if="is_user_client" :contact="user"/>
      </v-layout>
    </v-card-text>
    <v-card-actions v-if="is_user_client" class="pt-0">
      <v-btn href="/" small outline color="primary">Voir le site classique</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
import ContactPart from "@/components/Partials/ContactPart";
export default {
  components: {
    ContactPart
  },
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      window.open("http://localhost:3000/?k=" + url);
    }
  },
  computed: {
    ...mapGetters({
      contact: "data/false_contacts",
      is_user_client: "user/is_user_client",
      is_user: "user/is_user",
      user: "user/user"
    })
  }
};
</script>
<style>
</style>