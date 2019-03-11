 <template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Contactez Moi ! </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark small flat @click="dialog = false">Télchargez mon CV</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <TopAuthors />
        
      </v-card>
    </v-dialog>

</template>
<script>
  import TopAuthors from '@/components/Widgets/TopAuthors'
  import { mapGetters } from 'vuex'

export default {
  components: {
    TopAuthors
    },
  data() {
    return {
      dialog: false,
      picture_dialog:false,
    };
  },
  mounted() {
    this.$nuxt.$on('call-contact', () => {
      this.dialog = true; 
    });
  },
  computed: {
    ...mapGetters({
        // gt: 'lang/gt',
        // gi: 'lang/gi',
        // isCalculExiste: 'calculs/isCalculExiste',
        // execFixedFormule: 'calculs/execFixedFormule',
        // showFormule: 'calculs/showFormule',
        // getMeasure : 'calculs/getMeasure'
      }),
    
    
  },
};
</script>
<style>
  
</style>