<template>
  <div class="workbench">
    <v-table-data></v-table-data>
   <!-- <v-quick-link></v-quick-link>
    <br/><br/>
    <v-data-dashboard></v-data-dashboard>
    <br/><br/>
-->
    <!--<el-row :gutter="10">
      <el-col :span="12">
        <v-table-data></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data></v-table-data>
      </el-col>
    </el-row>-->
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

    },
    methods: {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
