<template>
  <div>
    <h4
      class="pa-4"
    >Un mini formulaire en 3 étapes avec pas plus de dix questions. à la dernière étape cliquez sur terminer.</h4>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">le contenu</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">la forme</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">autre chose ?</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-container fill-height grid-list-xs pt-0>
            <v-layout justify-center row fill-height wrap>
              <v-flex md6 xs12 pr-1>
                <CsoComponent
                  v-for="question in filterQuestions('content')"
                  :slug="question.slug"
                  :key="question.slug"
                />
              </v-flex>
              <v-flex md6 xs12 pl-1>
                <CsoComponent
                  v-for="question in filterQuestions('content', true)"
                  :slug="question.slug"
                  :key="question.slug"
                />
              </v-flex>
              <v-flex xs12 class="text-xs-right">
                <v-btn color="primary" @click="e1 = 2">Continuer</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-container fill-height grid-list-xs pt-0>
            <v-layout justify-center row fill-height wrap>
              <v-flex md6 xs12 pr-1>
                <CsoComponent
                  v-for="question in filterQuestions('graph')"
                  :slug="question.slug"
                  :key="question.slug"
                />
              </v-flex>
              <v-flex md6 xs12 pl-1>
                <CsoComponent
                  v-for="question in filterQuestions('graph', true)"
                  :slug="question.slug"
                  :key="question.slug"
                />
              </v-flex>
              <v-flex xs6 class="text-xs-left">
                <v-btn color="primary" @click="e1 = 1">retour</v-btn>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <v-btn color="primary" @click="e1 = 3">Continuer</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-layout justify-center row fill-height wrap>
            <v-flex md6 xs12 pr-1>
              <CsoComponent
                v-for="question in filterQuestions('end')"
                :slug="question.slug"
                :key="question.slug"
              />
            </v-flex>
            <v-flex md6 xs12 pl-1>
              <CsoComponent
                v-for="question in filterQuestions('end', true)"
                :slug="question.slug"
                :key="question.slug"
              />
            </v-flex>
            <v-flex xs6 class="text-xs-left">
              <v-btn color="primary" @click="e1 = 2">retour</v-btn>
            </v-flex>
            <v-flex xs6 class="text-xs-right" v-if="formSend">Merci !</v-flex>
            <v-flex xs6 class="text-xs-right" v-else>
              <v-btn color="success" @click="send" :loading="sendForm">terminer</v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import CsoComponent from "~/components/Components/CsoComponent";
import { mapGetters } from "vuex";

export default {
  components: {
    CsoComponent
  },
  data() {
    return {
      e1: 0
    };
  },
  methods: {
    send() {
      this.$store.dispatch("data/sendQuestions");
    }
  },
  computed: {
    ...mapGetters({
      questions: "data/questions",
      filterQuestions: "data/filterQuestions",
      sendForm: "data/sendForm",
      formSend: "data/formSend"
      //
    })
  }
};
</script>