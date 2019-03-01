 <template>
    <v-layout row wrap >
    <v-flex md12 xs12 >
      <span class="ma-0 body-2">{{ data.label }}</span>
    </v-flex>
    <v-flex md9 xs9 >
      <v-select
          class="pt-0 mt-0"
          @change="callUpdate"
          v-model="data.value"
          :items="getDataSet"
          item-text="value"
          item-value="value"
        >
          <template class="caption" slot="selection" slot-scope="data">
              <span class="caption right" style="align:right">{{ data.item.value }}</span>
          </template>
        </v-select>
    </v-flex>
    <v-flex md3 xs12>
      <p class="caption mt-2 pl-2">{{ data.measure }}</p>
    </v-flex>
  </v-layout>

</template>
<script>


export default {
  name: "cso-combo",
  props: ['data'],
  data() {
    return {
      c_data: ''
    };
  },
  mounted() {
  },
  computed: {
    getDataSet() {
      let array = Object.values(this.data.options.dataset)
      return Object.values(array)

    }
  },
  methods: {
    callUpdate: function (event) {
     this.$nuxt.$emit('callUpdate');
    },
    
  }
};
</script>