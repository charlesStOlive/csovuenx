<template>
  <v-flex md6 xs12 d-flex>
    <v-layout justify-start>
      <div @click="openUrl(contact.key)">
        <span :style="'color:'+contact.client.base_color">
          {{ contact.name }}
          <br>
          {{ contact.fname }}
        </span>
      </div>
      <v-img :src="gi(contact.client.logo)" contain height="50"/>
      <v-btn v-if="btn" small outline :color="contact.client.base_color" @click="openUrl(contact.key)">
        <v-icon>fa-eye</v-icon>
      </v-btn>
    </v-layout>
  </v-flex>
</template>
<script>
import { mapGetters } from "vuex";
//
export default {

  props: {
    contact: {
      default: null
    },
    btn: {
      type: Boolean,
      default: false
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      window.open("/?k=" + url, '_self');
    }
  },
  computed: {
    ...mapGetters({
      gi: "data/gi"
    })
  }
};
</script>
