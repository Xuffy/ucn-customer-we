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

        <v-table ref="pendingTable" :data="dataList" data-key="negotiation.tableProductInfo"
                 :buttons="[{label: 'detail', type: 1}, {label: 'history', type: 2}]"
                 :selection="filterSelection"
                 @action="onAction"
                 @change-checked="changeChecked">
          <div slot="header">asdasd</div>
        </v-table>
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
      console.log(this.$lang)
      this.getList();
    },
    watch: {
      dataList(val) {
      }
    },
    methods: {
      filterButton(params) {
        return [{label: 'detail', type: 1}, {label: 'history', type: 2}]
      },
      filterSelection(params) {
        return true;
      },
      onAction(item, type) {
        console.log(item, type)
      },
      pageChange(page) {
        console.log(page)
      },
      getSort(val, key) {
        console.log(val, key)
      },
      changeChecked(list) {
        console.log(list)
      },
      getList() {
        this.$ajax.get(this.$apis.get_listTest).then((data) => {
          this.dataList = this.$getDB(this.$db.workbench.pending, data);
          console.log(this.dataList)
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
