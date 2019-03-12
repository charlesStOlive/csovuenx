<template>
  <v-container grid-list-md >
    <div class="pl-2 pr-2" v-if="video" >
    <vue-plyr  size="50">
      <div  data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>
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
          <v-img :src="pictureToShow" max-height="50vh" aspect-ratio="1.9" contain />
      
    </v-layout>
    <v-layout  row wrap fill-height>
      <v-flex xs12 class="pt-2">
          <carousel :per-page="4" navigationEnabled :paginationEnabled=false  centerMode  loop>
            <slide class="pl-2 pr-2">
              <v-img @click="playVideo" src="/avatar/moije.jpg" aspect-ratio="1.7" height="100px">
              <div class="text-xs-center mt-2 pt-4">
              <v-icon large>fa-play-circle</v-icon>
            </div>
              </v-img>
            </slide>
            <slide class="pl-2 pr-2" v-for="(item,i) in data.pictures" :key="i">
              <v-img @click="changePicture(i)" :src="item.path" aspect-ratio="1.7" height="100px" />
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
      pictureToShow:this.data.main_picture.path,
      video: false,

    }
  },
  computed: {
    ...mapGetters({
       gi: 'data/gi',
      // gapp: 'lang/gapp',
      // bgImage: 'lang/bgImage',
      // params: 'lang/params',
      // apiTextReady: 'lang/apiTextReady'
    })

  },
  mounted() {
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
