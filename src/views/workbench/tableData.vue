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
    <el-tabs type="border-card">
      <el-tab-pane label="Inquiry" style="min-height: 300px">
        <v-simple-table :data.sync="dataList" :column="dataColumn"
                        @sort-change="getSort"
                        @page-change="pageChange"></v-simple-table>
      </el-tab-pane>
      <el-tab-pane label="Order">
        <v-simple-table></v-simple-table>
      </el-tab-pane>
      <el-tab-pane label="Logistic">
        <v-simple-table></v-simple-table>
      </el-tab-pane>
      <el-tab-pane label="Warehouse">
        <v-simple-table></v-simple-table>
      </el-tab-pane>
      <el-tab-pane label="Payment">
        <v-simple-table></v-simple-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {VSimpleTable} from '@/components/index';

  export default {
    name: 'VTableData',
    components: {
      VSimpleTable
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],
      }
    },
    created() {
      console.log()
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
        this.ajax.get('/getList').then((data) => {
          this.dataList = data;
          this.dataColumn = this.$getTableColumn(data, 'workbench.tableData');
        });
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
