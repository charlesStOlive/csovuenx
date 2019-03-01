<template>
  <div>
    <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart.js'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null,
        options: {
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
   }
  },
      }
    },
    mounted () {
      this.$nuxt.$on('calculs-ready', () => { 
        this.fillData();
       });
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Length'],
          datasets: [
            {
              label: 'Busbar',
              backgroundColor: '#4caf50',
              data: [this.getRandomInt()]
            }, {
              label: 'Cable',
              backgroundColor: '#cccccc',
              data: [this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>