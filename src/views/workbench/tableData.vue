<template>
  <div class="tableData">
    <h3 class="ucn-content-title" @click="$refs.viewPicture.show('')">Pending Task</h3>

    <div style="position: absolute;right: 0;top: -5px">
      <!--<el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>-->
      <!--<el-input
        placeholder="请输入内容"
        icon="el-icon-search"
        prefix-icon="el-icon-search">
      </el-input>-->
      <el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <br/>

    <el-tabs type="border-card">
      <el-tab-pane label="Inquiry" style="min-height: 300px">
        <!--<v-table ref="pendingTable"
                 :data.sync="dataList"
                 :buttons="[{label: 'detail', type: 1,disabled:true}, {label: 'history', type: 2}]"
                 :selection="filterSelection"
                 :rowspan="2"
                 :total-row="totalRow"
                 selection-radio
                 @action="onAction"
                 @filter-value="onFilterValue"
                 @change-checked="changeChecked">
        </v-table>-->
        <v-table ref="pendingTable"
                 :data.sync="dataList"
                 hide-filter-column
                 hide-filter-value
                 :page-size="taskData.ps">
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
  import {VSimpleTable, VTable, VTableFilter, VViewPicture} from '@/components/index';

  export default {
    name: 'VTableData',
    components: {
      VSimpleTable,
      VTable,
      VTableFilter,
      VViewPicture,
    },
    props: {
      type: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        pictureVisible: true,
        taskData: {},
        dataList: [],
        dataColumn: [],
        totalRow: [], // todo 测试
      }
    },
    mounted() {
      // this.getList();
      this.getData();
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
      onFilterValue(val) {
        console.log(val);
      },
      getData() {
        this.$ajax.post(this.$apis.UTASK_TYPELIST, {type: this.type, moduleCode: '1'})
          .then(data => {
            this.taskData = data;
            this.dataList = this.$getDB(this.$db.workbench.table, data.datas, item => {
              item.submittedTime.value = this.$dateFormat(item.submittedTime.value, 'yyyy-mm-dd');
              return item;
            });
          });
      },
      getList() {
        this.$ajax.get(this.$apis.get_listTest, {}, {_cache: true}).then((data) => {
          // this.dataList = this.$table.setHighlight(this.$getDB(this.$db.workbench.pending, data));
          this.dataList = this.$getDB(this.$db.workbench.pending, data, (item, index) => {

            // item._disabled = true;
            return item;
          });

          this.totalRow = this.$getDB(this.$db.workbench.pending, [data[0]], item => {
            // item._totalRow = {label: '总计'};
            return item;
          })
          /*this.totalRow = _.clone(this.dataList[0]);
          this.totalRow = [{key: '_total', value: '', label: '总计'}].concat(this.totalRow);
          this.totalRow = [this.totalRow];*/
          // console.log(this.summary);
          /*let a = this.dataList[0];
          this.summary = this.$getDB(this.$db.workbench.pending, [], item => {
            item._summary = {key: '_summary', value: ''};
            return item;
          });
          console.log(this.summary);*/
          // this.$dataBackfill(data, this.dataList);
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
