<template>
  <v-data-table
    :headers="batterHeaderDataList"
    :items="batterBodyDataList"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="">{{ props.item.NAME }}</td>
      <td class="">{{ props.item.TEAM }}</td>
      <td class="text-xs-right">{{ props.item.AVG }}</td>
      <td class="text-xs-right">{{ props.item.HR }}</td>
      <td class="text-xs-right">{{ props.item.RBI }}</td>
    </template>
  </v-data-table>
</template>

<script>
import ApiRequester from './modules/ApiRequester.js'

export default {
  name: 'DataTable',
  data: () => ({
    batterHeaderDataList: [
      {
        text: '選手名',
        value: 'NAME'
      },
      {
        text: '所属球団',
        value: 'TEAM'
      },
      {
        text: '打率',
        value: 'AVG'
      },
      {
        text: '本塁打',
        value: 'HR'
      },
      {
        text: '打点',
        value: 'RBI'
      }
    ],
    batterBodyDataList: []
  }),
  async mounted() {
    const apiRequester = await new ApiRequester(
      'https://us-central1-scraping-baseball-data-55f5f.cloudfunctions.net/scrapingBaseball'
    )
    const resulte = await apiRequester.fetchJsonDataList()
    this.batterBodyDataList = resulte.data
    /* eslint-disable no-console */
    console.log(this.batterBodyDataList)
  }
}
</script>
