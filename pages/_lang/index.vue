<template>
  
  <v-container fluid grid-list-md fill-height>
    <ModalLoader :show="!dataReady" :title="$t('popup.show')"/>
    <v-layout row wrap align-end fill-height  v-if="dataReady">
      <!-- BLOC 1 -->
      <v-flex d-flex xs12 md4>
        <BlocIntro/>
      </v-flex>
      <!-- DEBUT BLOC 1 -->
      <!-- FIN BLOC 1 -->
      <v-flex d-flex xs12 md4>
        <v-layout row wrap>
          <v-flex d-flex>
            <BlocChangeVersion/>
          </v-flex>
          <v-flex d-flex>
            <BlocCrm/>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- FIN BLOC  -->
      <!-- FIN BLOC 1 -->
      <v-flex d-flex xs12 md4>
        <v-layout row wrap>
          <v-flex xs12>
            <BlocMoas/>
          </v-flex>
          <v-flex d-flex xs12>
            <BlocCarouselProjects/>
          </v-flex>
          <!-- <v-flex d-flex xs12>
            <BlocDemo/>
          </v-flex> -->
        </v-layout>
      </v-flex>
      <!-- DEBUT BLOC 1 -->
    </v-layout>
  </v-container>
</template>

<script>
import ModalLoader from "@/components/Modal/ModalLoader"
import BlocIntro from "@/components/Blocs/BlocIntro"
import BlocMoas from "@/components/Blocs/BlocMoas"
import BlocDemo from "@/components/Blocs/BlocDemo"
import BlocCrm from "@/components/Blocs/BlocCrm"
import BlocChangeVersion from "@/components/Blocs/BlocChangeVersion"
import BlocCarouselProjects from "@/components/Blocs/BlocCarouselProjects"
//
import { mapGetters } from "vuex"

export default {
  components: {
    ModalLoader,
    BlocIntro,
    BlocMoas,
    BlocDemo,
    BlocCrm,
    BlocChangeVersion,
    BlocCarouselProjects
  },
  data() {
    return {
      showBanner: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      active: null
    };
  },
  head() {
    return { title: this.$t("home.title") }
  },
  mounted() {
    this.showBanner = true;
    this.$store.dispatch("data/getSettings")
  },
  methods: {
    start() {
      this.$nuxt.$emit("launchMenu");
    },
    callContact() {
      this.$nuxt.$emit("call-contact");
    },
    openUrl(url) {
      window.open(url, "_blank");
    }
  },
  computed: {
    ...mapGetters({
      dataReady: "data/dataReady",
      dataNotReady: "data/dataNotReady"
      //
    })
  }
}
</script>

