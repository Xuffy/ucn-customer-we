<template>
  <div class="workbench">

    <!--<v-table-data></v-table-data>-->
    <v-quick-link></v-quick-link>
    <br/><br/>
    <v-data-dashboard></v-data-dashboard>
    <br/><br/>
    <el-row :gutter="10">
      <el-col :span="12">
        <v-table-data></v-table-data>
      </el-col>
      <el-col :span="12">
        <!--<v-table-data></v-table-data>-->
      </el-col>
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
  import VQuickLink from './quickLink'
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'
  import VBasicInfo from './basicInfo'

  export default {
    name: 'workbench',
    data() {
      return {}
    },
    components: {
      VQuickLink,
      VDataDashboard,
      VTableData,
      VBasicInfo,
    },
    created() {
        console.log(this.$db)
        console.log(this.$lang)
    },
    mounted() {
      const h = this.$createElement;
      this.$notify.closeAll();

      this.$notify({
        title: 'Wellcome! Please set your basic info',
        duration: 0,
        offset: 60,
        dangerouslyUseHTMLString: true,
        message: h(VBasicInfo)
      });
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workbench .el-col-12 {
    margin-bottom: 20px;
  }

</style>
<style>
  /*.workbench-notify {
    !*width: 250px;*!
  }*/
</style>
