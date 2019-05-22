<template>
  <DataTable
    :headerDataList="batterHeaderDataList"
    :bodyDataList="batterBodyDataList"
  >
</template>

<script>
import DataTable from '~/components/DataTable.vue'
import axios from 'axios'

export default {
  components: {
    DataTable
  },
  data() {
    return {
      batterHeaderDataList: [
        { text: '順位', value: 'RANK' },
        { text: '選 手 名', value: 'NAME' },
        { text: '所属球団', value: 'TEAM'},
        { text: '打率', value: 'AVG' },
        { text: '本塁打', value: 'GAMES'},
        { text: '打席数', value: 'PA' },
        { text: '打点', value: 'AB' },
        { text: '安打数', value: 'H' },
        { text: '二塁打', value: '2B' },
        { text: '三塁打', value: '3B' },
        { text: '本塁打', value: 'HR' },
        { text: '塁打数', value: 'TB' },
        { text: '打点数', value: 'RBI' },
        { text: '得点数', value: 'RS' },
        { text: '三振数', value: 'SO' },
        { text: '四球数', value: 'BB' },
        { text: '死球', value: 'HBP' },
        { text: '犠打数', value: 'SH' },
        { text: '犠飛数', value: 'SF' },
        { text: '盗塁数', value: 'SB' },
        { text: '盗塁死数', value: 'CS' },
        { text: '併殺打数', value: 'GDP' },
        { text: '出塁率', value: 'OBP' },
        { text: '長打率', value: 'SLG' },
        { text: 'OPS', value: 'OPS' },
        { text: '得点圏', value: 'RISP'},
        { text: '失策数', value: 'E' }
      ],
      batterBodyDataList: [],
    };
  },
  async mounted() {
    const targetUrl = 'https://us-central1-scraping-baseball-data-55f5f.cloudfunctions.net/scrapingBaseball';
    this.batterBodyDataList = await axios
    .get(targetUrl, {
      params: {
        league: 'central',
        type: 'batter'
      }
    })
    .then(res => res.data)
  }
}
</script>
