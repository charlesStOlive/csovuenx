<template>
	<v-dialog
        v-model="show"
        max-width="350"
      >
        <v-card>
          <v-card-title class="headline">{{ $t('type_error.request') }}</v-card-title>
  
          <v-card-text>
            <p>{{ axiosError }}</p>
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              flat="flat"
              @click="show = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
 
</template>

<script>

	export default {
		name: "MAxiosError",
		data: () => ({
			show: false,
			axiosError: '',
		}),
		mounted() {
				// this.$nuxt.$on('axiosError', (error) => { 
    //     console.log(error)
				// this.axiosError = error;
				// this.show = true;
				//  });
		  },
	}
</script>

<style>

</style>
