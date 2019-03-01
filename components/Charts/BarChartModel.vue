<template>
  <v-card flat >
      <bar-chart style="height:400px"  :chart-data="datacollection" :options="options"></bar-chart>
    <v-btn color="primary" small icon absolute class="mt-5" ripple top right @click="callExplain"><v-icon small>fas fa-info</v-icon></v-btn>
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
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + " "+data.datasets[tooltipItems.datasetIndex].measure;
                }
            }

          },
        },
      }
    },
    mounted () {
      this.fillData();
      this.$nuxt.$on('calculs-ready', () => { 
        this.fillData();
       });
      this.$nuxt.$on('explaination-ready', () => { 
        this.fillData();
       });
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.gt(this.data.labels)],
          datasets: [
            {
              label: this.gt(this.data.datasets[0].label),
              backgroundColor: this.data.datasets[0].backgroundColor,
              data: [this.execFixedFormule(this.data.datasets[0].calcul)],
              measure: this.getMeasure(this.data.datasets[1].calcul)
            }, {
              label: this.gt(this.data.datasets[1].label),
              backgroundColor: this.data.datasets[1].backgroundColor,
              data: [this.execFixedFormule(this.data.datasets[1].calcul)],
              measure: this.getMeasure(this.data.datasets[1].calcul)
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
        gt: 'lang/gt',
        execFixedFormule: 'calculs/execFixedFormule',
        getMeasure: 'calculs/getMeasure'
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