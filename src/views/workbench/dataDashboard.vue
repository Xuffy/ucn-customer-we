<template>
  <div class="dataDashboard">

    <h3 class="ucn-content-title inline" v-text="$i.workbench.dataDashboard"></h3>
    <!--<div class="block" style="display: inline-block;margin-left: 80px">
      <span class="demonstration">Time：</span>
      <el-date-picker
        v-model="value7"
        type="daterange"
        size="mini"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2">
      </el-date-picker>
    </div>

    <el-button size="medium" type="text"
               style="display: inline-block;margin-left: 30px!important;"
               @click="dialog.show = true">more
    </el-button>-->

    <br/><br/>

    <el-row class="data-table" :gutter="20" v-loading="loading">
      <el-col :span="6" v-for="(item,index) in dataList" :key="index">
        <table>
          <tr>
            <!--<td class="title" v-text="$i.workbench.purchaseOrder"></td>-->
            <td class="title" v-text="item.module"></td>
            <td class="value">
              <div v-if="item.list[0]" v-text="item.list[0].value + ' ' + item.list[0].code"></div>&nbsp;
            </td>
          </tr>
          <tr>
            <!--<td class="title" rowspan="2" v-text="$i.workbench.orderPlaced"></td>-->
            <td class="title" rowspan="2" v-text="item.theme"></td>
            <td class="value">
              <div v-if="item.list[1]" v-text="item.list[1].value + ' ' + item.list[1].code"></div>&nbsp;
            </td>
          </tr>
          <tr>
            <td class="value">
              <div v-if="item.list[2]" v-text="item.list[2].code + ' ' + item.list[2].value"></div>&nbsp;
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  export default {
    name: 'VDataDashboard',
    data() {
      return {
        dataList: [],
        loading: false,
        dialog: {
          show: false,
        },
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.loading = true;
        this.$ajax.post(this.$apis.UDA_FINDDATAANALYSISLIST, {
          statPoints: ['CUST_PO_PLACED', 'CUST_PO_IN_PROCESSING', 'CUST_PO_CANCELED', 'CUST_LO_IN_PROCESSING']
        })
          .then(data => {
            this.dataList = data;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .data-table {
    min-height: 80px;
  }

  .data-table table {
    width: 100%;
  }

  .data-table table td {
    vertical-align: middle;
  }

  .data-table table .el-checkbox {
    margin-right: 5px;
  }

  .data-table .title {
    background-color: #F2F2F2;
    text-align: center;
    width: 50%;
  }

  .data-table .value {
    background-color: #D7D7D7;
    text-align: center;
    border-bottom: 1px solid #FFFFFF;
  }

  .data-table .value > div {
    display: inline-block;
  }

  .data-table .el-col-6 {
    margin-bottom: 10px;
  }

  /*.dataDashboard .el-picker-panel__shortcut{*/
  /*font-size: 12px;*/
  /*}*/
</style>
