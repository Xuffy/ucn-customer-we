<template>
  <div class="workbench">
    <v-quick-link></v-quick-link>
    <br/><br/>
    <v-data-dashboard></v-data-dashboard>
    <br/><br/>

    <!--<v-test-table></v-test-table>-->
    <v-table-data></v-table-data>
    <el-row :gutter="10">
      <el-col :span="12">
        <!--<v-table-data></v-table-data>-->
      </el-col>
      <el-col :span="12">
        <!--<v-table-data></v-table-data>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {VTestTable} from '@/components/index';
  import VQuickLink from './quickLink'
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'

  export default {
    name: 'workbench',
    data() {
      return {}
    },
    components: {
      VTestTable,
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
