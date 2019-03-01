 <template>
   <v-layout row justify-center>
      <v-dialog v-model="dialog" lazy fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card v-if="dialog">
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="close">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>{{gt('g_explaination') }} : {{ gt(name) }}</v-toolbar-title>
          </v-toolbar>
          <v-layout class="pa-2 ma-2">
             <bar-chart style="height:300px"  :chart-data="datacollection" :options="options"></bar-chart>
          </v-layout>

          <v-divider></v-divider>
          
          <v-layout row wrap>
            <v-flex md6 xs12>
              <v-card-text>
                <h2 class="pb-2">{{ gt('ch_busway') }}</h2>
                <a @click="showImage(data.picture_busbar)" v-if="data.picture_busbar"><v-img :src="gi(data.picture_busbar)" position="left" max-height="100" contain></v-img></a>
                <CalculsDetails :DataList="BusbarList"/>
                <v-divider vertical></v-divider>
                
              </v-card-text>
            </v-flex>
      
            <!-- <v-divider vertical></v-divider> -->
      
            <v-flex xs12 md6>
              <v-card-text>
                <h2 class="pb-2">{{ gt('ch_cable') }}</h2>
                <a @click="showImage(data.picture_cable)" v-if="data.picture_cable"><v-img v-if="data.picture_cable" :src="gi(data.picture_cable)" position="left" max-height="100" contain></v-img></a>
                <CalculsDetails :DataList="CableList"/>
              </v-card-text>
            </v-flex>

          </v-layout>
          <v-divider></v-divider>   
        </v-card>
      </v-dialog>
      <v-dialog v-model="picture_dialog" max-width="75%" >
        <v-card>
          <v-img v-if="data.picture_cable" :src="gi(modalPicture)" contain></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat="flat"
              @click="picture_dialog = false"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    </v-layout>

</template>
<script>
  import BarChart from '~/components/Charts/BarChart.js'
  import CalculsDetails from '@/components/Partials/CalculsDetails'
  import { mapGetters } from 'vuex'

export default {
  components: {
      BarChart,
      CalculsDetails
    },
  data() {
    return {
      dialog: false,
      picture_dialog:false,
      modalPicture:null,
      data: [],
      //For explaination
      BusbarList: [],
      BusbarCalcul: [],
      CableList:[],
      CableCalcul:[],
      //for chart
      datacollection: null,
      options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
         },
         tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + " "+data.datasets[tooltipItems.datasetIndex].measure;
                }
            }

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
  mounted() {
    this.$nuxt.$on('call-explain', (data) => { 
      this.data = data
      this.BusbarCalcul = data.datasets[0].calcul
      this.CableCalcul = data.datasets[1].calcul
      this.BusbarList.push(this.showFormule(this.BusbarCalcul))
      this.CableList.push(this.showFormule(this.CableCalcul))
      this.dialog = true;
      this.fillData()
        
       });
  },
  computed: {
    name() {
      return this.data.labels
    },
    ...mapGetters({
        gt: 'lang/gt',
        gi: 'lang/gi',
        isCalculExiste: 'calculs/isCalculExiste',
        execFixedFormule: 'calculs/execFixedFormule',
        showFormule: 'calculs/showFormule',
        getMeasure : 'calculs/getMeasure'
      // ...
      }),
    
    
  },
  methods: {
    fillData () {
        this.datacollection = {
          labels: [this.gt(this.data.labels)],
          datasets: [
            {
              label: this.gt(this.data.datasets[0].label),
              backgroundColor: this.data.datasets[0].backgroundColor,
              data: [this.execFixedFormule(this.BusbarCalcul)],
              measure: this.getMeasure(this.data.datasets[1].calcul)
            }, {
              label: this.gt(this.data.datasets[1].label),
              backgroundColor: this.data.datasets[1].backgroundColor,
              data: [this.execFixedFormule(this.CableCalcul)],
              measure: this.getMeasure(this.data.datasets[1].calcul)
            }
          ],
          options: {
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' €';
                    }
                }

            },
          }
        }
      },
    showImage(name) {
      console.log(name)
      this.picture_dialog = true
      this.modalPicture = name
    },
    isModel(_group) {
      return _group =='findbusbars' || _group =='findtemperatures' || _group =='findcables' || _group =='findcablesTrays'
    },
    close() {
      this.dialog = false
      this.BusbarList = []
      this.CableList = []
    },

  }
};
</script>
<style>
.formule {
  font-style: italic;
  font-weight: 600;
  font-family: 'Nunito'
}
.doted {
  border-style: none none dotted none;
  width: 200px;
  color: lightgrey;
  border-width: 1px
}
  
</style>