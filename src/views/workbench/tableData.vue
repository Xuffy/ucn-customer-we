<template>
  <div class="tableData">
    <!--<div style="max-height: 500px;overflow: auto;max-width: 600px" ref="testTable">
      <table style="border: 1px solid #000000;">
        <tr v-for="item in dataList">
          <td v-for="cItem in item" v-text="cItem"></td>
        </tr>
      </table>
    </div>-->

    <el-table
      ref="testTable"
      :data="dataList"
      height="500"
      border
      style="width: 100%">
      <el-table-column
        v-if="dataColumn.length"
        width="40"
        fixed="left"
        type="selection">
      </el-table-column>

      <el-table-column
        v-if="dataColumn.length"
        align="center"
        type="index">
      </el-table-column>

      <el-table-column v-for="(item,index) in dataColumn" :key="index"
                       :prop="item.prop"
                       :label="item.label"
                       width="180">
      </el-table-column>
    </el-table>


    <!-- <v-table
       :width="500"
       :height="500"
       :columns="dataColumn"
       :table-data="dataList"
       :show-vertical-border="false">

     </v-table>-->


    <!--<h3 class="ucn-content-title">Pending Task</h3>

    <div style="position: absolute;right: 0;top: -5px">
      &lt;!&ndash;<el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>&ndash;&gt;
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search">
      </el-input>
    </div>
    <br/>-->
    <!--<el-tabs type="border-card">
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
    </el-tabs>-->
  </div>
</template>

<script>
  import {VSimpleTable} from '@/components/index';

  let allDataList = [];
  let i = 0;

  export default {
    name: 'VTableData',
    components: {
      VSimpleTable,
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],
        minNum: 0,
        maxNum: 30,
        splitNum: 30,
      }
    },
    mounted() {
      this.getList();
      let node = this.$refs.testTable.$el.getElementsByClassName('el-table__body-wrapper');

      let scrollNum = 0;
      if (!_.isEmpty(node)) {
        node[0].addEventListener('scroll', (e) => {
          let h = e.target.scrollTop
            , sh = e.target.scrollHeight - e.target.clientHeight
            , trNode = node[0].getElementsByClassName('el-table__row')
            , firstOne = trNode[0].offsetHeight
            , firstTwo = trNode[1].offsetHeight
            , lastOne = trNode[trNode.length - 1].offsetHeight
            , lastTwo = trNode[trNode.length - 2].offsetHeight;


          /*console.log(h, sh)
          if (h > sh - 10) {
            let n = (i - 1) * 50;
            this.dataList = this.dataList.concat(allDataList.slice(n, n + 50));
            i++;
          }*/

          // let n = i * this.splitNum - 2;

          if (h < firstOne && scrollNum > h) {
            /*let k = n - this.splitNum < 0 ? 0 : n - this.splitNum;

            console.log('向上加载', k, n,i)
            this.dataList = allDataList.slice(k, n);
            e.target.scrollTop = sh - firstTwo;
            i--;
            scrollNum = 0;
            return;*/
          }

          if (h > (sh - lastOne) && scrollNum < h) {
            // let k = n + this.splitNum > allDataList.length ? allDataList.length : n + this.splitNum;


            // console.log('向下加载', n, k,i)

            // n = n > allDataList.length ? (n - 30) : n;


            // if (i * 30 > allDataList.length) {
            //   return false;
            // }
            // this.dataList = allDataList.slice(n, k);
            // e.target.scrollTop = lastTwo;
            // i++;
            // scrollNum = 0;
            // return;
          }

          scrollNum = h;

          /*console.log(sh / 50)
          // 向上滑动
          if (sh / 4 < h && h < sh / 2 && scrollNum > h) {
            console.log('向上')
          }

          // 向上滑动
          if (sh / (3 / 4) > h && h > sh / 2 && scrollNum < h) {
            console.log('向下')
            let n = (i - 1) * 30;

            e.target.scrollTop = sh / 4;
            this.dataList = allDataList.slice(n, n + 50);
            i++;
            // this.dataList = allDataList.slice();
          }*/


          // console.log(e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight)
          // console.log(e.target.scrollHeight)
          // console.log(e.target.scrollTop, '++++\n')

          // console.log(e.target.scrollHeight / e.target.scrollTop)
          // if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight) {
            // console.log('loading。。', i * 20, 50 + 20, allDataList.slice(i * 20, 50 + 20))
            // this.dataList = allDataList.slice((i - 1) * 50, i * 50);
            // i++;
            // e.target.scrollTop = 0;
            /*console.log('loading。。', i - 10, i + 50)
            e.target.scrollTop = 0;*/
          // }
        }, false)
      }
    },
    methods: {
      pageChange(page) {
        console.log(page)
      },
      getSort(val, key) {
        console.log(val, key)
      },
      getList() {
        this.dataList = [];
        this.ajax.get('/getBigList').then((data) => {
          data = _.map(data, (val, index) => {
            val.time = index;
            return val;
          });
          allDataList = data;
          this.dataList = data.slice(0, this.splitNum);
          // this.dataList = data;
          i++;
          this.dataColumn = this.$getTableColumn(data, 'negotiation.tableProductInfo');
          // this.dataList = data;
          // this.dataColumn = this.$getTableColumn(data, 'negotiation.tableProductInfo');
          // setInterval(() => {
          //   this.dataList = this.dataList.concat(allDataList.slice(i, i + 50));
          // this.dataList = _.initial(allDataList, allDataList.length - (i * 50));
          // i = i + 50;
          // console.log(this.dataList)
          // }, 2000);
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

  table {
    border-collapse: collapse;
    border: none;
    width: 200px;
  }

  td {
    border: solid #000 1px;
  }
</style>
<style>
  .tableData .el-tabs__item {
    font-size: 12px;
    padding: 0 10px;
  }
</style>
