<template>
  <div class="tableData">
    <h3 class="ucn-content-title">Pending Task</h3>

    <div style="position: absolute;right: 0;top: -5px">
      <!--<el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>-->
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search">
      </el-input>
    </div>
    <br/>


    <!--<el-table
      :data="dataList"
      :width="500"
      :height="500">
      <el-table-column v-for="(item,index) in dataColumn" :key="index"
                       :prop="item.prop"
                       :label="item.label"
                       width="100">
      </el-table-column>
    </el-table>-->


    <el-tabs type="border-card">
      <el-tab-pane label="Inquiry" style="min-height: 300px">

        <v-table :data="dataList"></v-table>
        <!--<v-simple-table :data.sync="dataList" :column="dataColumn"
                        @sort-change="getSort"
                        @page-change="pageChange"></v-simple-table>-->
      </el-tab-pane>
      <el-tab-pane label="Order">
        <!--<v-simple-table></v-simple-table>-->
      </el-tab-pane>
      <el-tab-pane label="Logistic">
        <!--<v-simple-table></v-simple-table>-->
      </el-tab-pane>
      <el-tab-pane label="Warehouse">
        <!--<v-simple-table></v-simple-table>-->
      </el-tab-pane>
      <el-tab-pane label="Payment">
        <!--<v-simple-table></v-simple-table>-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {VSimpleTable, VTable} from '@/components/index';

  export default {
    name: 'VTableData',
    components: {
      VSimpleTable,
      VTable,
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      pageChange(page) {
        console.log(page)
      },
      getSort(val, key) {
        console.log(val, key)
      },
      getList() {
        this.ajax.get('/getBigList').then((data) => {
          this.dataList = data;
          // this.dataColumn = this.$getTableColumn(data, 'negotiation.tableProductInfo');
        });
        /*this.ajax.get('/getTrackList').then((data)=>{
          this.dataList = data;
          this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
        })*/
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tableData {
    position: relative;
  }
</style>
<style>
  .tableData .el-tabs__item {
    font-size: 12px;
    padding: 0 10px;
  }
</style>
