 <template>
  <v-layout row wrap  >
    <v-flex sx12   >
      <span v-if="myForm.type == 'radio-group'">{{ myForm.label }}</span>
      <v-radio-group v-if="myForm.type =='radio-group'" v-model="myForm.val" row height="10px" class="mb-0">
        <template v-for="(opt,i) in myForm.list" >
          <v-radio small :label="opt" :value="opt" :key="i"></v-radio>
        </template>
      </v-radio-group>
      <v-textarea
          v-if="myForm.type =='text'"
          v-model="myForm.val"
          outline
          name="input-7-4"
          :label="myForm.label"
        ></v-textarea>
        <v-select
          v-if="myForm.type =='combo'"
          v-model="myForm.val"
          :items="myForm.list"
          :label="myForm.label"
          outline
          class="pb-0 mb-0"
        ></v-select>
        <v-text-field
            v-if="myForm.type =='label'"
            v-model="myForm.val"
            :label="myForm.label"
            outline
          ></v-text-field>

    </v-flex>
    
  </v-layout>
    

</template>
<script>
  import { mapGetters } from 'vuex'

export default {
  components: {
    },



  props: ['slug'],
  data() {
    return {
      myForm: {},
      switch1: false
    };
  },
  mounted() {
    this.myForm = this.$store.getters['data/questions'](this.slug)

  },
  computed: {
  },
};
</script>