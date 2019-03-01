 <template>
    <v-flex md12 xs12 >
      <v-text-field
          class="caption pt-0 mt-0"
          @change="callUpdate"
          v-model="data.value"
        ></v-text-field>
    </v-flex>
    <!-- <v-flex md3 xs3>
      <p class="caption mt-2 pl-2">{{ data.measure }}</p>
    </v-flex> -->

</template>
<script>


export default {
  name: "cso-input",
  props: ['data'],
  data() {
    return {
      c_data: this.data
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    callUpdate: function (event) {
     this.$nuxt.$emit('callUpdate');
    },
    
  }
};
</script>