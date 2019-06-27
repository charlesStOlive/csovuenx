<template>
  <v-layout row wrap >
    <v-flex xs7>
      <carousel  @page-change="changeInfo" :per-page="1" autoplay centerMode paginationPosition="top-overlay" loop >
            <slide  v-for="(item,i) in data" :key="i">
                <v-img :src="item.main_picture.path" aspect-ratio="1.9"></v-img>    
            </slide>
        </carousel>
    </v-flex>
    <v-flex xs5>
      <div v-if="slideData != null" class="pa-2 text-xs-center">
          <h5>{{slideData.name}}</h5>
          <v-btn small outline color="primary" :to="$i18n.path('projects/'+slideData.slug)"><v-icon >fa-eye</v-icon>&nbsp;{{ $t('widget.carousel.show_project') }}</v-btn>
          <h5 v-if="slideData.client">{{ slideData.client.name }}</h5>
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