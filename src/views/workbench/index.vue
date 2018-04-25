<template>
  <div class="workbench">

    <div class="quickLink">
      <h3 class="ucn-content-title inline" v-text="$i.workbench.quickLink"
          @click="$refs.historyModify.edit(mockData,historyData, true)"></h3>
      <el-button size="mini" type="primary" icon="el-icon-plus"
                 style="display: inline-block;margin-left: 30px!important;"
                 @click="$store.state.quickLink.show = true"></el-button>
      <br/>
      <el-button size="mini" v-for="item in $store.state.quickLink.list" :key="item.id">
        {{item.label}}
      </el-button>

    </div>
    <!--<v-table-data></v-table-data>-->
    <!--<v-quick-link></v-quick-link>-->
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

    <v-history-modify ref="historyModify" @save="save">
    </v-history-modify>
  </div>
</template>

<script>
  // import VQuickLink from './quickLink'
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'
  import VBasicInfo from './basicInfo'
  import {VHistoryModify} from '@/components/index';
  import testData from './test'

  export default {
    name: 'workbench',
    data() {
      return {
        visible: false,
        testData: testData.content.details, // todo 测试
        mockData: [], // todo 测试
        historyData: [], // todo 测试
      }
    },
    components: {
      VDataDashboard,
      VTableData,
      VBasicInfo,
      VHistoryModify,
    },
    created() {
        console.log(this.$db)
        console.log(this.$lang)
    },
    mounted() {
      this.mockData = this.$getDB(
        this.$db.inquiryOverview.productInfo,
        this.$refs.historyModify.getFilterData([this.testData[0]]),
        item => {
          if (item.updateDt) {
            item.updateDt.value = this.$dateFormat(item.updateDt.value, 'yyyy-mm-dd');
          }
          return item;
        }
      );
      this.historyData = this.$getDB(
        this.$db.inquiryOverview.productInfo,
        this.$refs.historyModify.getFilterData(this.testData),
        item => {
          if (item.updateDt) {
            item.updateDt.value = this.$dateFormat(item.updateDt.value, 'yyyy-mm-dd');
          }
          return item;
        }
      );


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
    methods: {
      save(data) {
        console.log(data)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workbench .el-col-12 {
    margin-bottom: 20px;
  }

  .quickLink .el-button {
    margin-top: 10px;
  }
</style>
<style>
  /*.workbench-notify {
    !*width: 250px;*!
  }*/
</style>
