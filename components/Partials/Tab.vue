<template>
  <v-tab-item :value="value">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="item in content" :key="item.name" :class="item.size" xs12 height="100px">
                  <h2 v-if="item._group == 'title'">{{ gt(item.title) }}</h2>
                  <span v-if="item._group == 'text'" v-html="gt(item.text)"></span>
                  <BarChartModel class="pt-4"  v-if="item._group == 'graph'" height="100px" :data="Chart(item.graph)" />    
                  <v-img  v-if="item._group == 'picture'" :src="getContentImage(item.picture)" :aspect-ratio="item.picture_ratio" />
          </v-flex>
        </v-layout>
      </v-container>
  </v-tab-item>
</template>

<script>
  import RandomChart from '~/components/Charts/RandomChart';
  import BarChartModel from '~/components/Charts/BarChartModel';
  import { mapGetters } from 'vuex'

  export default {
    props: ['value', 'content'],
    components: {
      RandomChart,
      BarChartModel,


    },
    data () {
      return {
      }
    },
    computed: {
    ...mapGetters({
        gt: 'lang/gt',
        Chart: 'data/Chart',
        getContentImage: 'data/getContentImage'
      // ...
      })
    }
}
</script>

<style>
  
</style>