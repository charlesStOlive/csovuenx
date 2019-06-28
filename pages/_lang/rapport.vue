<template>
<div>
  <ModalLoader :show="!ready" :title="$t('popup.wait_data')"/>
  <v-card color="rgb(255, 255, 255, 0.8)" v-if="ready" class="ma-4">
    <v-toolbar color="primary" dark tabs>
      <v-toolbar-title>Votre rapport</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-combobox placeholder="Modifier Région"  v-model="selectedRegions" :items="rapport.regions" item-text="name" return-object/>
      <v-combobox placeholder="Modifier Semaine" v-model="selectedMonths" :items="rapport.old_report" item-text="name" return-object/>
      <v-btn @click="changeRapport()" :loading="loading" :disabled="show_btn_changr" class="grey">
        Modifier
      </v-btn>
      <v-btn @click="createUrlPdf()" class="grey">
        Télecharger
      </v-btn>
    </v-toolbar>
    <div class="pa-3">
      <span class="primary--text"><b>Info :</b></span>
      Semaine analysé du <b>{{rapport.global.weekStart}} au {{ rapport.global.weekEnd }}</b> | 
      N° de semaine : <b>{{ rapport.global.weekNum }}</b> | 
      Pour la région : <span class="primary--text">{{ rapport.region.name }}</span>
    </div>
    <v-layout wrap row>
    <v-flex md6 class="pa-2">
      <h2 class="headline mb-3">Répartition des ventes par <span class="primary--text"><b>commercial</b></span> région {{ rapport.region.name }}...</h2>
        <v-layout wrap row>
          <v-flex md6>
            <ul>
              <li>NB commerciaux  : {{ rapport.region.commercial_count }}</li>
              
              <li>Vente de la dernière semaine : {{ rapport.region.week_total_sales }} €   </li>
              <li>Top 3 commerciaux de la semaine ( en CA)   </li>
              <ul>
                  <li v-for="commercial in rapport.region.best_week_sales_sum" :key="commercial.id" >{{ commercial.name }} : {{ commercial.week_sales_sum }} €</li>
              </ul>
              <li>Ventes année N : {{ rapport.region.compil_total_sales }} € </li>
              <li>Top 3 commerciaux année N (CA)   </li>
              <ul>
                  <li v-for="commercial in rapport.region.best_compil_sales_sum" :key="commercial.id" >{{ commercial.name }} : {{ commercial.compil_sales_sum }} €</li>
              </ul>
          </ul>
          
          </v-flex>
          <v-flex md6>
           <BarChartModel class="pt-4"  height="300px" :data="rapport.region.week_sales" />
          </v-flex>
        </v-layout>
    </v-flex>
      
    <v-flex md6 class="pa-2">
      <h2 class="headline mb-3">Synthèse de toutes les régions</h2>
        <v-layout wrap row>
          <v-flex md6>
            <ul>
              <li>NB commerciaux  : {{ rapport.all.commercial_count }}</li>
              
              <li>Vente de la dernière semaine : {{ rapport.all.week_total_sales }} €   </li>
              <li>Top 3 commerciaux de la semaine ( en CA)   </li>
              <ul>
                  <li v-for="commercial in rapport.all.best_week_sales_sum" :key="commercial.id" >{{ commercial.name }} : {{ commercial.week_sales_sum }} €</li>
              </ul>
              <li>Ventes année N : {{ rapport.all.compil_total_sales }} € </li>
              <li>Top 3 commerciaux année N (CA)   </li>
              <ul>
                  <li v-for="commercial in rapport.all.best_compil_sales_sum" :key="commercial.id" >{{ commercial.name }} : {{ commercial.compil_sales_sum }} €</li>
              </ul>
          </ul>
          
          </v-flex>
          <v-flex md6>
           <BarChartModel class="pt-4"  height="300px" :data="rapport.all.week_sales" />
          </v-flex>
        </v-layout>

    </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap row>
    <v-flex md6 class="pa-2">
      <h2 class="headline mb-3">Répartition des ventes par <span class="primary--text"><b>gammes</b></span> région {{ rapport.region.name }}...</h2>
        <v-layout wrap row>
          <v-flex md6>
            <ul>
              <li v-for="(item, index) in rapport.region.repartition_gammes" :key="index" >{{ index }} : {{ item }} €</li>
            </ul>
          </v-flex>
          <v-flex md6>
           <DoughnutChartModel class="pt-4"  height="300px" :data="rapport.region.repartition_gammes" />
          </v-flex>
        </v-layout>
    </v-flex>
      
    <v-flex md6 class="pa-2">
        <h2 class="headline mb-3">Synthèse de toutes les régions</h2>
        <v-layout wrap row>
          <v-flex md6>
            <ul>
              <li v-for="(item, index) in rapport.all.repartition_gammes" :key="index" >{{ index }} : {{ item }} €</li>
            </ul>
          </v-flex>
          <v-flex md6>
           <DoughnutChartModel class="pt-4"  height="300px" :data="rapport.all.repartition_gammes" />
          </v-flex>
        </v-layout>

    </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import ModalLoader from "@/components/Modal/ModalLoader";
import Contact from "@/components/Widgets/Contact";
import BarChartModel from '~/components/Charts/BarChartModel';
import DoughnutChartModel from '~/components/Charts/DoughnutChartModel';

import { mapGetters } from "vuex";

export default {
  components: {
    ModalLoader,
    Contact,
    BarChartModel,
    DoughnutChartModel
  },
  data() {
    return {
      showBanner: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      active: null,
      datacollection: null,
      selectedRegions: null,
      selectedMonths: null,
      loading:false,
      options: {
          maintainAspectRatio: false,
          responsive: true,
         tooltips: {
            
        },
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true,
               },
               display: true
            }]
         }
        },
    };
  },
  head() {
    return { title: this.$t("rapport.title") };
  },
  mounted() {
    let object = {}
    if (!this.$store.getters["rapport/ready"]) {
        object.rapportKey = this.$store.getters["user/user"].key
        object.regionId = this.$store.getters["rapport/regionId"]
      this.$store.dispatch("rapport/getRapport", object );
    }
    
  },
  watch:{ 
    //check if new calcul
    '$store.state.rapport.increment'(v){
        this.loading= false
        this.$nuxt.$emit('rapport-ready');
        this.selectedMonths

     },
  },
  methods: {
    changeRapport() {
      this.loading= true
      let object = {}
      object.rapportKey = this.$store.getters["user/user"].key
      object.regionId = this.selectedRegions.id
      object.date = this.selectedMonths.date
      this.$store.dispatch("rapport/getRapport", object );
    },
    createUrlPdf() {
      let object = {}
      object.rapportKey = this.$store.getters["user/user"].key
      if(!this.selectedRegions) {
        object.regionId = this.$store.getters["rapport/regionId"]
      } else {
        object.regionId = this.selectedRegions.id
      }
      if(!this.selectedMonths) {
        object.date = this.$store.getters["rapport/weekStart"]
      } else {
         object.date = this.selectedMonths.date
      }
      this.openUrl(this.$store.getters["rapport/url_pdf"](object))
    },
    openUrl(url) {
      window.open(url, "_blank");
    }
  },
  computed: {
    ...mapGetters({
      ready: "rapport/ready",
      rapport: "rapport/rapport",
      url_pdf: "rapport/url_pdf"
      //
    }),
    show_btn_changr: function () {
      if(this.selectedRegions && this.selectedMonths ) return false
      return true
    }
  }


};

</script>
<style>
</style>

