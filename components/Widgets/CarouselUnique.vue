<template>
  <v-layout row wrap >
    <v-flex xs12>
        <carousel  @page-change="changeInfo" :per-page="1" autoplay centerMode paginationPosition="top-overlay" loop >
            <slide  v-for="(item,i) in data" :key="i">
                <v-img :src="item.main_picture.path" aspect-ratio="1.9"></v-img>    
            </slide>
            <!-- <v-container fill-height pa-0 pb-5 >
                  <v-parallax :src="item.main_picture.path" aspect-ratio="1.9">
                    <v-layout align-end pr-2>
                      <v-card flat class="hidden-sm-and-down primary"  >
                       <span v-if="item.name">{{ item.name }}</span><br>
                        <span v-if="item.client">{{ item.client.name }}</span><br>
                        <v-btn fab dark small color="white pl-0" :to="$i18n.path('projects/'+item.slug)"><v-icon color="primary" small>add</v-icon></v-btn>
                      </v-card>
                      <v-btn class="hidden-sm-and-up primary"  fab dark small color="primary" :to="$i18n.path('projects/'+item.slug)"><v-icon color="white" small>add</v-icon></v-btn>
                    </v-layout>
                  </v-parallax>
                  </v-container> -->

        </carousel>
        <div v-if="slideData != null" class="pa-2 text-xs-center">
          <h3>{{slideData.name}}</h3>
          <v-btn outline :to="$i18n.path('projects/'+slideData.slug)"><v-icon >fa-eye</v-icon>&nbsp;voir ce projet<span v-if="slideData.client"> : {{ slideData.client.name }}</span></v-btn>
        </div>
    </v-flex>
  </v-layout>

</template>

<script>

export default {
  props:['data'],
  data () {
    return {
      name: null,
      client:null,
      slideData:null
    }
  },
  mounted() {
    this.slideData = this.data[0]

   },
  methods: {
    changeInfo(i)  {
       this.slideData = this.data[i]
    },
  }
}


</script>
<style>
.bgimg {
  background-color: #424242;
  color: white;
}
</style>