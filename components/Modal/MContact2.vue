<template>
  <div class="text-xs-center">
    <v-dialog v-model="show" width="500">
      <template v-slot:activator="{ on }">
        <v-btn small color="primary" dark v-on="on"><v-icon class="pr-1" small>email</v-icon>Contactez moi</v-btn>
      </template>

      <v-card color="primary" class="white--text">
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Charles Saint Olive</div>
                <div>Marié 3 enfants</div>
                <div class="contain">12 chemin de la paserelle</div>
                <div class="contain">69160 Tassin</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img src="/avatar/moije.jpg" height="125px" contain></v-img>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          Mon email et mon tel son sur le CV. 
          <v-spacer></v-spacer>
          <v-btn small @click="openUrl(create_url_cv)" outline color="white"><v-icon class="pr-1" small>file_copy</v-icon>CV</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    title_complete: {
      type: String,
      default: null
    },
    content: {
      type: String
    }
  },
  data() {
    return {
      helpDialog: false,
      helpData: ""
    };
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
    openUrl(url) {
      window.open(url);
    }
  },
}
</script>
