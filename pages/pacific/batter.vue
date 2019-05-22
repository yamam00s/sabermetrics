<template>
  <DataTable
    :headerDataList="batterHeaderDataList"
    :bodyDataList="batterBodyDataList"
  >
</template>

<script>
import DataTable from '~/components/DataTable.vue'
import { batterHeaderDataList } from '~/models/headerDataList.js'
import axios from 'axios'

export default {
  components: {
    DataTable
  },
  data() {
    return {
      batterHeaderDataList: batterHeaderDataList,
      batterBodyDataList: [],
    };
  },
  async mounted() {
    const targetUrl = 'https://us-central1-scraping-baseball-data-55f5f.cloudfunctions.net/scrapingBaseball';
    this.batterBodyDataList = await axios
    .get(targetUrl, {
      params: {
        league: 'pacific',
        type: 'batter'
      }
    })
    .then(res => res.data)
  }
}
</script>
