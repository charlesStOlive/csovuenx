<template>
  <v-card flat >
      <bar-chart style="height:200px"  :chart-data="datacollection" :options="options"></bar-chart>
  </v-card>
</template>

<script>
  import BarChart from './BarChart.js'
  import { mapGetters } from 'vuex'

  export default {
    props: ['data'],
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null,
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
         },
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true,
               },
               display: true
            }]
         },
         tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return tooltipItems.yLabel + " "+data.datasets[tooltipItems.datasetIndex].measure;
                }
            }

          },
        },
      }
    },
    mounted () {
      this.fillData()
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
              backgroundColor: this.$store.getters["user/color"],
              data: Object.values(this.data),
              measure: " €",
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
      // ...
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