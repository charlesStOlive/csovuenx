<template>
  <v-container v-if="ready" fluid grid-list-md fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <v-flex d-flex sm12 md6>
         <v-card flat dark>
          <v-card-title primary class="title">Expertise : {{ target.name }}</v-card-title>
          <v-card-text>
            <span v-html="$md.render(target.description)"/>
            <v-list >
              <template v-for="mission in target.missions" >
                
                <v-divider :key="mission.id"></v-divider>
    
                <v-list-tile :class="isSelected(mission.slug)"
                :key="mission.id+'-'+target.slug"
                >
                  
    
                  <v-list-tile-content :key="mission.id+'-'+target.slug"  >
                    <v-list-tile-title><b>{{ mission.name }}</b></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn medium icon ripple exact :to="$i18n.path('target/'+targetSlug+'/mission/'+mission.slug)">
                      <v-icon color="white">queue_play_next</v-icon>
                    </v-btn>
                  </v-list-tile-action>

                </v-list-tile>
              </template>
            </v-list>
            <Contact back_btn></Contact>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex sm12 md6>
        <nuxt-child :key="$route.params.slug"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import Contact from '@/components/Widgets/Contact'
  import { mapGetters } from 'vuex'

export default {
  props:['data'],
  components: {
    Contact
  },
  
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      targetSlug: null,
      missionSlug: null,
    }
  },
  head() {
    //let slug = this.params.slug
    return { title: "Project "+this.$nuxt._route.params.slug }
  },
  fetch({store, params }) {
    
  },
  mounted() {
  	this.targetSlug = this.$nuxt._route.params.targetslug
    this.$store.dispatch('target/getTarget', this.targetSlug);
  },
  methods: {
  	showMission(slug) {
  		// $i18n.path('target/'+targetSlug+'/mission/'+mission.slug)

  	},
    isSelected: function (slug) {
      if(slug == this.$nuxt._route.params.slug ) return 'primary'
    },
  },
  computed: {
    ...mapGetters({
      target: 'target/data',
      ready: 'target/ready',
      //
    }),
    
    compiledMarkdown: function (txt) {
      return marked(txt, { sanitize: true })
    }
  },
}

</script>
<style>
</style>

