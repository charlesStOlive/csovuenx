<template>
        <carousel :per-page="1" autoplay paginationPosition="bottom-overlay" centerMode loop >
            <slide v-for="(item,i) in data" :key="i">
              <v-img :src="item.main_picture.path" aspect-ratio="1.9">
                <v-container  fill-height >
                    <v-layout align-end justify-end column fill-height class="pb-5"  >
                      <div class="pa-2 bgimg">{{ item.name }}</div>
                      <div class="pa-2 bgimg" v-if="item.client">{{ item.client.name }}</div>
                      <v-btn color="primary" :to="{ name: 'projects-slug', params: { slug: item.slug }}"><v-icon small>fa-eye</v-icon></v-btn>
                    </v-layout>
                  </v-container>
              </v-img>
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
<style>
.bgimg {
  background-color: #424242;
  color: white;
}
</style>