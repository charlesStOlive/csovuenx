<template>
  <v-container >
    <div class=" contain" v-if="video" >
    <vue-plyr>
      <div  :data-plyr-provider="data.video.source" :options="options" :data-plyr-embed-id="data.video.code"></div>
    </vue-plyr>
  </div>
    <v-layout v-else  row wrap>
          <v-img v-if="pictureToShow" :src="pictureToShow" max-height="50vh" aspect-ratio="1.7" contain />
    </v-layout>
    <v-layout  row wrap fill-height>
      <v-flex xs12 class="pt-2">
          <carousel :per-page="4" navigationEnabled :paginationEnabled=false  centerMode  loop>
            <slide v-if="videoExiste" class="pl-2 pr-2">
              <v-img @click="playVideo" :src="findthumb" aspect-ratio="1.5">
              <div class="text-xs-center mt-2 pt-4">
              <v-icon absolute bottom large>fa-play-circle</v-icon>
            </div>
              </v-img>
            </slide>
            <slide  class="pl-2 pr-2">
              <v-img @click="changePicture(null)" :src="data.main_picture.path" aspect-ratio="1.5" />
            </slide>
            <slide  class="pl-2 pr-2" v-for="(item,i) in data.pictures" :key="i">
              <v-img v-if="item.path" @click="changePicture(i)" :src="item.path" aspect-ratio="1.5" />
            </slide>
        </carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  props:['data',],
  data () {
    return {
      pictureToShow: null,
      video: false,
      videoExiste: false

    }
  },
  computed: {
    findthumb() {
      if(this.data.video_picture != undefined) {
        return  this.data.video_picture.path
      } else {
        return "/avatar/moije.jpg"
      }

    }
    

  },
  mounted() {
    if(this.data.video != null) {
      if(this.data.video.code != "") {
        this.video = true
        this.videoExiste = true
      } else {
        this.video = false
        this.videoExiste = false
      }
    } else {
      this.video = false
      this.videoExiste = false

    }
    this.pictureToShow = this.data.main_picture.path
  },
  methods: {
    changePicture(nb) {
      this.video = false
      if(nb == null) {
        this.pictureToShow = this.data.main_picture.path
      } else {
        this.pictureToShow = this.data.pictures[nb].path
      }
    },
    playVideo() {
      this.video = true
    }
  }

}


</script>
<style>
  .contain {
  margin: 5px auto;
  max-width: 80vh;
}
</style>
