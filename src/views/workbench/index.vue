<template>
  <div class="workbench">
    <v-quick-link></v-quick-link>
    <br/><br/>
    <v-data-dashboard></v-data-dashboard>
    <br/><br/>
    <v-table-data></v-table-data>
  </div>
</template>

<script>
  import VQuickLink from './quickLink'
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'

  export default {
    name: 'workbench',
    data() {
      return {}
    },
    components: {
      VQuickLink,
      VDataDashboard,
      VTableData,
    },
    created() {
      console.log()
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
