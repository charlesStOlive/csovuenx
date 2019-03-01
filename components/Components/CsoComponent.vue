 <template>
  <v-layout row wrap >
    <v-btn @click="callExplain(data)" icon absolute ripple right v-if="data.show_help">

                <v-icon  small color="grey lighten-1">fas fa-info</v-icon>
    </v-btn>
    <v-flex xs12 >
      <h5>{{ gt(data.label) }}</h5>
    </v-flex>
    <cso-slider v-if="data.type == 'slider'" :data="data"/>
    <cso-combo v-if="data.type == 'combobox'" :data="data"/>
    <cso-input v-if="data.type == 'numeric'"  :data="data"/>
    <cso-input v-if="data.type == 'simple'"  :data="data"/>
  </v-layout>
    

</template>
<script>
  import CsoSlider from '~/components/Components/CsoSlider';
  import CsoCombo from '~/components/Components/CsoCombo';
  import CsoInput from '~/components/Components/CsoInput';
  import { mapGetters } from 'vuex'

export default {
  components: {
      CsoSlider,
      CsoCombo,
      CsoInput,
    },



  props: ['data'],
  data() {
    return {
      slider: 45,
    };
  },
  mounted() {
  },
  computed: {
    valueSigle() {
      let myMeasure = '';
      if(this.data.measure != null) myMeasure = this.data.measure
      return this.data.value+' '+myMeasure
    },
    ...mapGetters({
        gt: 'lang/gt',
      // ...
      }),
  },
  methods: {
    callExplain(data) {
      console.log(data)
      this.$nuxt.$emit('show-dialogue', data);
    }

  }
};
</script>