<template>
        <carousel :per-page="1" autoplay paginationPosition="bottom-overlay" centerMode loop >
            <slide v-for="(item,i) in data" :key="i">
              <v-img :src="item.main_picture.path" aspect-ratio="1.9" />
            </slide>
        </carousel>
</template>

<script>

export default {
  props:['data'],
  data () {
    return {
    }
  }
}


</script>
