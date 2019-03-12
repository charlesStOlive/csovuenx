<template>
        <carousel :per-page="3" navigationEnabled :paginationEnabled=false  centerMode loop>
            <slide v-for="(item,i) in data" :key="i">
              <v-img :src="gi(item.logo)" aspect-ratio="1" height="75px" contain />
            </slide>
        </carousel>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  props:['data',],
  data () {
    return {
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

}


</script>
