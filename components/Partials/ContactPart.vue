<template>
  <v-flex class="xs12 " :class="{ md6: exemple}">
    <v-hover :style="{cursor:isCursor}"  >
    <v-card color="rgb(255, 255, 255, 0)"  @click="openUrl(contact.key)" slot-scope="{ hover }" :class="`elevation-${hover ? upElevation : baseElevation}`"
      >
      <v-container class="pa-1">
        <v-layout align-center justify-center column fill-height>
          <v-flex
            xs12
            :style="'color:'+contact.client.base_color"
          >Contact : {{ contact.name }} {{ contact.fname }}</v-flex>
          <v-flex xs12>
            <v-img :src="gi(contact.client.logo)" contain width="60" height="50"/>
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
