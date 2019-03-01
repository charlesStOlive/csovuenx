 <template>
    <v-layout row wrap>
     <!--  <v-btn @click="callmodale"   icon absolute right>YO</v-btn> -->
      <!-- <v-btn @click="callmodale" icon absolute right v-if="data.show_help">
                YO
      </v-btn> -->
      <v-btn icon absolute ripple right v-if="data.show_help">
                <v-icon color="grey lighten-1">info</v-icon>
      </v-btn>
    <v-flex md12 xs12 >
      <p class="ma-0 body-2">{{ data.label }}</p>
    </v-flex>
    <v-flex>
      <v-slider class="mt-0" @click="callUpdate" hide-details  :step="data.options.step" :max="data.options.max" v-model="data.value" :min="data.options.min"></v-slider>
    </v-flex>
    <!-- <v-flex xs2>
      <v-text-field class="mt-0 pl-4 pt-0" hide-details v-model="valueSigle"  type="number"></v-text-field>
    </v-flex> -->
    <v-flex shrink style="width: 80px" >
      <p class="caption mt-2 pl-2">{{ valueSigle }}</p>
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