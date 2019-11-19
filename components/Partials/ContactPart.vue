<template>
  <v-flex class="xs12 " :class="{ md6: exemple}">
    <v-hover :style="{cursor:isCursor}"  >
    <v-card color="rgb(255, 255, 255, 0)"  @click="openUrl(contact.key)" slot-scope="{ hover }" :class="`elevation-${hover ? upElevation : baseElevation}`"
      >
      <v-container class="pa-1">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 md4 >
          <v-img :src="gi(contact.client.logo)" contain height="80px"/>
        </v-flex>
        <v-flex caption xs12 md8  :style="'color:'+contact.client.base_color">
          <p class="text-xs-right"><b>Contact : </b><br> {{ contact.name }} {{ contact.fname }}</p>
          <p class="text-xs-right"><b>Société : </b>{{ contact.client.name }}</p>
        </v-flex>
      </v-layout>
      </v-container>
    </v-card>
    </v-hover>
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
    exemple: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      if(this.exemple) {
        window.open("/?k=" + url, "_self");
      }
      
    }
  },
  computed: {
    ...mapGetters({
      gi: "data/gi"
    }),
    isCursor : function() {
      if(this.exemple) {
        return "pointer"
      } else  {
        return ""
      }
    },
    baseElevation : function() {
      if(this.exemple) {
        return 1
      } else  {
        return 0
      }
    },
    upElevation : function() {
      if(this.exemple) {
        return 6
      } else  {
        return 0
      }
    }
  }
};
</script>
