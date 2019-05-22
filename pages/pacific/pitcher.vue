<template>
  <DataTable
    :headerDataList="pitcherHeaderDataList"
    :bodyDataList="pitcherBodyDataList"
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
      pitcherHeaderDataList: [
        { text: '順位', value: 'RANK' },
        { text: '選 手 名', value: 'NAME' },
        { text: '所属球団', value: 'TEAM' },
        { text: '防御率', value: 'ERA' },
        { text: '登板試合数', value: 'APP' },
        { text: '先発出場数', value: 'GS' },
        { text: '完投数', value: 'CG' },
        { text: '完封数', value: 'SHO' },
        { text: 'QS', value: 'QS' },
        { text: '勝利数', value: 'W' },
        { text: '負け数', value: 'L' },
        { text: 'ホールド数', value: 'HLD' },
        { text: 'ホールドポイント', value: 'HP' },
        { text: 'セーブ数', value: 'SV' },
        { text: '勝率', value: 'WPCT' },
        { text: '投球回', value: 'IP' },
        { text: '被安打数', value: 'H' },
        { text: '被本塁打数', value: 'HR' },
        { text: '奪三振', value: 'SO' },
        { text: '奪三振率', value: 'SO/9' },
        { text: '与四球数', value: 'BB' },
        { text: '与死球数', value: 'HBP' },
        { text: '暴投数', value: 'WP' },
        { text: 'ボーク数', value: 'BK' },
        { text: '失点数', value: 'R' },
        { text: '自責点数', value: 'ER' },
        { text: '被打率', value: 'AVG' },
        { text: 'K/BB', value: 'K/BB' },
        { text: 'WHIP', value: 'WHIP' }
      ],
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
