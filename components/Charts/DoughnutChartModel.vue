<template>
  <v-card flat >
      <doughnut-chart style="height:200px"  :chart-data="datacollection" :options="options"></doughnut-chart>
  </v-card>
</template>

<script>
  import DoughnutChart from './DoughnutChart.js'
  import { mapGetters } from 'vuex'

  export default {
    props: ['data'],
    components: {
      DoughnutChart
    },
    data () {
      return {
        datacollection: {},
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: true
         },
        },
      }
    },
    mounted () {
      this.fillData();
      this.$nuxt.$on('rapport-ready', () => { 
        this.fillData();
       });
    },
    methods: {
      fillData () {
        this.datacollection = {
          //Si tabeau direct key value il faut utiliser : Object.keys(this.data) & Object.values(this.data)
          labels: Object.keys(this.data),
          datasets: [
            {
              backgroundColor: Object.values(this.$store.getters["user/colors"]),
              data: Object.values(this.data),
            }
          ]
        }

      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      callExplain() {
        this.$nuxt.$emit('call-explain', this.data)
      }
    },
    computed: {
    ...mapGetters({
      })
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>