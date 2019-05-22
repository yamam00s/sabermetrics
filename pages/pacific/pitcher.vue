<template>
  <DataTable
    :headerDataList="pitcherHeaderDataList"
    :bodyDataList="pitcherBodyDataList"
  >
</template>

<script>
import DataTable from '~/components/DataTable.vue'
import { pitcherHeaderDataList } from '~/models/headerDataList.js'
import axios from 'axios'

export default {
  components: {
    DataTable
  },
  data() {
    return {
      pitcherHeaderDataList: pitcherHeaderDataList,
      pitcherBodyDataList: [],
    };
  },
  async mounted() {
    const targetUrl = 'https://us-central1-scraping-baseball-data-55f5f.cloudfunctions.net/scrapingBaseball';
    this.pitcherBodyDataList = await axios
    .get(targetUrl, {
      params: {
        league: 'pacific',
        type: 'pitcher'
      }
    })
    .then(res => res.data)
  }
}
</script>
