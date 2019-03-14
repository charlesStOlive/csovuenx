<template>
  <v-container >
    <div class=" contain" v-if="video" >
    <vue-plyr>
      <div  :data-plyr-provider="data.video.source" :options="options" :data-plyr-embed-id="data.video.code"></div>
    </vue-plyr>
  </div>
    <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
<!-- <vue-plyr v-if="video">
    <div class="plyr__video-embed">
      <iframe
        src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
        allowfullscreen allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr> -->

    <v-layout v-else  row wrap>
          <v-img v-if="pictureToShow" :src="pictureToShow" max-height="50vh" aspect-ratio="1.7" contain />
      
    </v-layout>
    <v-layout  row wrap fill-height>
      <v-flex xs12 class="pt-2">
          <carousel :per-page="4" navigationEnabled :paginationEnabled=false  centerMode  loop>
            <slide v-if="videoExiste" class="pl-2 pr-2">
              <v-img @click="playVideo" src="/avatar/moije.jpg" aspect-ratio="1.5">
              <div class="text-xs-center mt-2 pt-4">
              <v-icon absolute bottom large>fa-play-circle</v-icon>
            </div>
              </v-img>
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
    ...mapGetters({
       gi: 'data/gi',
       options: {
        autoplay: true,
        fullscreen: { enabled: false },


       }
      // gapp: 'lang/gapp',
      // bgImage: 'lang/bgImage',
      // params: 'lang/params',
      // apiTextReady: 'lang/apiTextReady'
    })

  },
  mounted() {
    this.video = this.data.video !=  null ? true : false
    this.videoExiste = this.data.video !=  null ? true : false
    this.pictureToShow = this.data.main_picture.path
  },
  methods: {
    changePicture(nb) {
      console.log("changePicture : "+nb)
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
