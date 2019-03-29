<template>
	<v-list>
		   <v-list-tile >
		   	<v-list-tile-content href="tel:0664834287">
	        	<v-img src="/avatar/moije.jpg" width="150px" />
	    	</v-list-tile-content>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-action>
            	<v-btn medium icon ripple href="tel:0664834287"><v-icon color="white">phone</v-icon></v-btn>
            </v-list-tile-action>

            <v-list-tile-content >
              <v-list-tile-title>06 64 83 42 87</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-btn medium icon ripple href="mailto:embauche@charles-saint-olive.com"><v-icon color="white">mail</v-icon></v-btn>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>embauche@charles-saint-olive.com</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-btn medium icon ripple href="http://admin.charles-saint-olive.com/themes/pingendov1/assets/doc/CV_charles_Saint-Olive.pdf"><v-icon color="white">picture_as_pdf</v-icon></v-btn>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ $t('widget.contact.download') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
         </v-list>
</template>

<script>
	// import Slick from "vue-slick";
	// import api from "Api";
	
	export default {
		components: {
		},
		computed: {
		},
		mounted() {
		},
		methods: {
		},
		data() {
			return {
				authors: null
			};
		}
	};
</script>
