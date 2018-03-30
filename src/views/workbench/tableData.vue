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
      <el-tab-pane label="Inquiry">
        <v-simple-table :data="dataList" :column="dataColumn"
                        @update:data="val => dataList = val"></v-simple-table>
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
      getList() {
        this.ajax.get('/getList').then((data) => {
          this.dataList = data;
          if (data.length) {
            _.map(_.keys(data[0]), val => {
              let key = this.$tc(`workbench.tableData.${val}`);
              if (key.indexOf('.') < 0) {
                this.dataColumn.push({label: key, prop: val,width:80});
              }
            });
          }
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
