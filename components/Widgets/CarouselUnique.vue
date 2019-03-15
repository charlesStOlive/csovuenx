<template>
        <carousel :per-page="1" autoplay paginationPosition="bottom-overlay" centerMode loop >
            <slide v-for="(item,i) in data" :key="i">
              <v-img :src="item.main_picture.path" aspect-ratio="1.9">
                <v-container fill-height pa-0 pb-5 >
                    <v-layout fill-height align-end justify-end row wrap width="150px">
                      <v-flex d-child xs6 pa-2 class="primary">
                        <h3 >{{ item.name }}</h3>
                        <span v-if="item.client">{{ item.client.name }}</span><br>
                          <v-btn  fab dark small color="white pl-0" :to="$i18n.path('projects/'+item.slug)"><v-icon color="primary" small>add</v-icon></v-btn>
                      </v-flex>
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