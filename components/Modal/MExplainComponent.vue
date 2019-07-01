<template>
	<v-dialog
      v-model="helpDialog"
      max-width="500"
    >
      <v-card>
         <v-card-title primary-title>{{gt(helpData.label)}}</v-card-title>
        <v-img v-if="helpData.picture"
            :src="gi(helpData.picture)"
            max-height="400"
              contain
          ></v-img>

        <v-card-text>
          <span v-html="gt(helpData.help)"></span>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary darken-1"
            flat="flat"
            @click="helpDialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        helpDialog: false,
        helpData:'',
      }
    },
    computed: {
    ...mapGetters({
    	gt: 'lang/gt',
      gi: 'lang/gi'
      // ...
      }),
    
    
  },
  mounted() {
    this.$nuxt.$on('show-dialogue', (event) => {
    	this.helpData = event;
  		this.helpDialog = true;
    });
  },
  
  methods: {
  }

    
}
</script>
