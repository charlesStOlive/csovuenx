 <template>
    <v-layout row>
     <v-flex xs12  >
        <v-slider class="mt-0" @click.stop="callUpdate" hide-details  :step="data.options.step" :max="data.options.max" v-model="data.value" :min="data.options.min"></v-slider>
    </v-flex>
  
    <v-flex shrink style="width: 90px">
      <p class="caption mt-2">{{ valueSigle }}</p>
      <!-- <v-text-field v-model="valueSigle"  class="mt-0" hide-details single-line>{{ data.measure }}</v-text-field> -->
    </v-flex>
  </v-layout>

</template>
<script>


export default {
  name: "cso-slider",
  props: ['data'],
  data() {
    return {
    };
  },
  mounted() {
    
  },
  computed: {
    valueSigle() {
      let myMeasure = '';
      if(this.data.measure != null) myMeasure = this.data.measure
      return this.data.value+' '+myMeasure
    }
  },
  methods: {
    callUpdate: function (event) {
     this.$nuxt.$emit('callUpdate');
    },
    callmodale: function (event) {
      this.$nuxt.$emit('show-dialogue', this.data);
    }

    
  }
};
</script>