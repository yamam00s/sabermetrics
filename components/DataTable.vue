<template>
  <v-data-table
    :headers="headerDataList"
    :items="bodyDataList"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td
        v-for="item in props.item" :key="item"
      >
        {{ item }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DataTable',
  props: {
    headerDataList: [],
    bodyDataList: []
  }
}
</script>
