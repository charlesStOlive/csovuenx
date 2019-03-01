 <template>
  <div>
  <v-layout class="pt-1" row wrap v-for="(value, key) in DataList" :key="key">
    <v-flex class="pb-0">
      <v-card flat>
      <v-btn v-if="key != 0" class="mt-4" color="alert" icon absolute ripple top right @click="closeCalcul(key)"><v-icon>close</v-icon></v-btn>
      Calcul name : <b>{{ value.name }}</b> is egual to <b>{{ value.result }} {{ value.measure }}</b><br>
      Formule : <span class="formule">{{ value.formule }}</span>
      <br>Values :
      <div class="doted"></div>
    </v-card>
    </v-flex>
    <v-flex class="pt-1" xs12>
      <v-layout  row wrap v-for="item in value.vars" :key="item.scope" >
        <v-flex shrink style="width: 40px" >
          <v-icon small color="primary" v-if="item._group =='calcul'" @click="addSubCalcul(item.scope)">fas fa-calculator</v-icon>
          <v-icon small v-if="isModel(item._group)">fas fa-table</v-icon>
          <v-icon small v-if="item._group =='input'">fas fa-sliders-h</v-icon>
        </v-flex>
        <v-flex class="m">{{ item.scope }} = {{ item.value }} 
          <span v-if="isCalculExiste(item.index)"> | Row Index : 
            <v-icon small color="primary" @click="addSubCalcul(item.index)">fas fa-calculator</v-icon>
            {{item.index}}
          </span>
        </v-flex>
      </v-layout>
      <v-divider v-if="key + 1 < DataList.length" class="pb-2"></v-divider>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'

export default {
  props: ['DataList', 'picture'],
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
    name() {
      return this.data.labels
    },
    ...mapGetters({
        gt: 'lang/gt',
        isCalculExiste: 'calculs/isCalculExiste',
        execFixedFormule: 'calculs/execFixedFormule',
        showFormule: 'calculs/showFormule',
        getMeasure : 'calculs/getMeasure'
      // ...
      }),
    
    
  },
  methods: {
    isModel(_group) {
      return _group =='findbusbars' || _group =='findtemperatures' || _group =='findcables' || _group =='findcablesTrays'
    },
    closeCalcul(key, _group) {
        this.DataList.splice(key)
    },
    close() {
      this.DataList = []
    },
    addSubCalcul(name, _group) {
        this.DataList.push(this.showFormule(name))
    }

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