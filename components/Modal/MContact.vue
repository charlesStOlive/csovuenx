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
            <v-btn dark small flat :href="gi(settings.mycv)">Télchargez mon CV</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container >
            <v-layout align-center justify-space-around row fill-height>
              <v-flex md4 xs12>
                <v-card>
                 <TopAuthors />
               </v-card>
              </v-flex>
              <v-flex md6 xs12>
                <History/>
              </v-flex>

            </v-layout>
          </v-container>
       

        
        
      </v-card>
    </v-dialog>

</template>
<script>
  import TopAuthors from '@/components/Widgets/TopAuthors'
  import History from '@/components/Widgets/History'
  import { mapGetters } from 'vuex'

export default {
  components: {
    TopAuthors,
    History
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
        settings: 'data/settings',
        gi: 'data/gi'
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