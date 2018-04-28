<template>
  <div class="workbench">

    <div class="quickLink">
      <h3 class="ucn-content-title inline" v-text="$i._workbench.quickLink"
          @click="$refs.historyModify.edit(mockData,historyData, true)"></h3>
      <el-button size="mini" type="primary" icon="el-icon-plus"
                 style="display: inline-block;margin-left: 30px!important;"
                 @click="$store.state.quickLink.show = true"></el-button>
      <br/>
      <el-button size="mini" v-for="item in $store.state.quickLink.list" :key="item.id">
        {{item.label}}
      </el-button>

    </div>
    <br/><br/>
    <v-data-dashboard></v-data-dashboard>
    <br/><br/>
    <el-row :gutter="10">
      <el-col :span="12">
        <v-table-data :type="1"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="2"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="4"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="3"></v-table-data>
      </el-col>
    </el-row>

    <v-history-modify ref="historyModify" @save="save">
    </v-history-modify>

    <!--<v-message-board module="workbench" code="workbench" id="123"></v-message-board>-->
  </div>
</template>

<script>
  // import VQuickLink from './quickLink'
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'
  import VBasicInfo from './basicInfo'
  import {VHistoryModify, VMessageBoard} from '@/components/index';
  import testData from './test'

  export default {
    name: 'workbench',
    components: {
      VDataDashboard,
      VTableData,
      VBasicInfo,
      VHistoryModify,
      VMessageBoard,
    },
    data() {
      return {
        testId: '', // todo 测试
        visible: false,
        pengdingTask: [],
        futureTask: [],
        fyiTask: [],
        pushTask: [],
        testData: testData.content.details, // todo 测试
        mockData: [], // todo 测试
        historyData: [], // todo 测试
      }
    },
    created() {
      console.log(this.$apis);
    },
    mounted() {
      this.testId = '123';
      /*this.$ajax.post(this.$apis.UTASK_PAGELIST).then(data => {
        this.pengdingTask = data.pending_task;
        this.futureTask = data.future_task;
        this.fyiTask = data.fyi_task;
        this.pushTask = data.push_task;
      });*/

      // this.$ajax.post(this.$apis.UTASK_TYPELIST,{}).then(data => {
      //
      // });


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

      /*this.$notify({
        title: 'Wellcome! Please set your basic info',
        duration: 0,
        offset: 60,
        dangerouslyUseHTMLString: true,
        message: h(VBasicInfo)
      });*/
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
