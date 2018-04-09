<template>
  <div class="ucn-table" v-loading="loading">

    <div class="header-content">
      <div class="fixed">
        <v-filter-value :data="dataColumn"></v-filter-value>
        <v-filter-column :data="dataColumn"></v-filter-column>
      </div>
    </div>

    <div class="table-container" :style="{height:height + 'px'}">
      <div class="fixed-left" ref="fixedLeft" :class="{show:dataColumn.length}">
        <input type="checkbox" v-model="checkedAll" ref="checkboxAll"/>
        <!--<el-checkbox v-model="checkedAll"></el-checkbox>-->
      </div>
      <div class="fixed-right" ref="fixedRight" :class="{show:dataColumn.length}">
        action
      </div>

      <div class="table-box" ref="tableBox">
        <table v-if="dataList.length">
          <thead ref="tableTitle">
          <tr>
            <td ref="tableCheckbox">
              <div style="visibility: hidden"><input type="checkbox"/></div>
            </td>
            <td>
              <div>#</div>
            </td>
            <td v-for="item in dataColumn">
              <div v-text="item.label">
              </div>
            </td>
            <td ref="tableAction">
              <div>action</div>
            </td>
          </tr>
          </thead>
          <tbody ref="tableBody">
          <tr v-for="(item,index) in dataList">
            <td>
              <div>
                <input type="checkbox" ref="checkbox" v-model="item._checked"/>
                <!--<el-checkbox v-model="item._checked"></el-checkbox>-->
              </div>
            </td>
            <td>
              <div v-text="index + 1"></div>
            </td>
            <td v-for="(cItem,cKey) in item" v-if="filterKey(cKey)">
              <div v-text="cItem"></div>
            </td>
            <td>
              <div style="white-space: nowrap;">
                <span class="button">查看</span>
                <span class="button">修改</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else class="empty">
          暂无数据
        </div>
      </div>
    </div>

    <el-pagination
      v-if="dataColumn.length"
      background
      layout="prev, pager, next, jumper,total,sizes"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  /**
   * 表格组件
   * @desc 组件描述
   * @author xuffy
   * @param {Object} [title]    - 参数说明
   * @param {String} [columns] - 参数说明
   *
   * @method @sort-change(val, key)   - 点击排序
   * @method @page-size-change(size)    - 改变分页条数
   * @method @page-change(page)   - 改变分页
   *
   * @example
   *  <v-table></v-table>
   */

  // import VFilterValue from './filterValue'
  // import VFilterColumn from './filterColumn'

  import VFilterColumn from './filterColumn'
  import VFilterValue from './filterValue'

  export default {
    name: 'VTable',
    components: {VFilterColumn, VFilterValue},
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
      dataKey: {
        type: String,
        default: '',
      },
      loading: {
        type: Boolean,
        default: false,
      },
      height: {
        type: Number,
        default: 300,
      },
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],
        checkedAll: false,
      }
    },
    watch: {
      data(val) {
        this.dataList = val;
        this.dataColumn = this.filterColumn(val);
        this.$nextTick(() => {
          this.scrollListener();
        });
      },
      checkedAll(value) {
        this.dataList = _.map(this.dataList, val => {
          val._checked = value;
          return val;
        });
      },
    },
    mounted() {
      this.dataList = this.data;
      this.dataColumn = this.filterColumn(this.dataList);
      this.$nextTick(() => {
        this.scrollListener();
      });
      this.$refs.tableBox.addEventListener('scroll', this.scrollListener);
    },
    methods: {
      filterColumn(data) {
        let list = [];
        if (_.isEmpty(data)) {
          return [];
        } else {
          _.map(_.keys(data[0]), val => {
            let k = this.filterKey(val);
            k && list.push({label: k, prop: val, width: 100});
          });
          return list;
        }
      },
      filterKey(k) {
        // const dk = 'negotiation.tableProductInfo';
        let sk = this.$tc(`${this.dataKey}.${k}`);
        if (sk.indexOf('.') < 0 || sk.charAt(sk.length - 1) === '.') {
          return sk;
        }
        return false;
      },
      scrollListener(e) {
        if (!this.$refs.tableBody) return false;

        let trs = this.$refs.tableBody.children;
        let st, sl, sw;
        if (e) {
          st = e.target.scrollTop;
          sl = e.target.scrollLeft;
          sw = e.target.scrollWidth;
        } else {
          st = 0;
          sl = 0;
          sw = this.$refs.tableBody.offsetWidth;
        }

        this.$refs.fixedRight.style.width = `${this.$refs.tableAction.offsetWidth}px`;
        this.$refs.fixedLeft.style.width = `${this.$refs.tableCheckbox.offsetWidth}px`;

        _.map(trs, (val) => {
          val.firstChild.style.transform = `translate3d(${sl}px,0,0)`;
          val.lastChild.style.transform = `translate3d(${this.$refs.tableBox.clientWidth - sw + sl}px,0,0)`;
        });
        this.$refs.tableTitle.style.transform = `translate3d(0,${st}px,0)`;
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ucn-table .table-container {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
  }

  .ucn-table .fixed-left,
  .ucn-table .fixed-right {
    position: absolute;
    z-index: 9;
    top: 0;
    height: 40px;
    width: 20px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    color: #999999;
    display: none;
    background-color: #ECEFF1;
  }

  .ucn-table .show {
    display: block;
  }

  .ucn-table .fixed-left {
    left: 0;
    line-height: 50px;
  }

  .ucn-table .fixed-right {
    right: 14px;
  }

  .ucn-table .table-box {
    max-height: 100%;
    max-width: 100%;
    overflow-y: scroll;
    overflow-x: auto;
  }

  .ucn-table table {
    border-collapse: collapse;
    border: none;
    table-layout: fixed;
    min-width: 100%;
  }

  .ucn-table input[type=checkbox] {
    zoom: 130%;
    cursor: pointer;
    margin: 0;
  }

  .ucn-table tr {
    background-color: #FFFFFF;
  }

  .ucn-table td,
  .ucn-table th {
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    border-bottom: 1px solid #ebeef5;

  }

  .ucn-table thead {
    /*position: absolute;*/
    /*z-index: 9999;*/
  }

  .ucn-table thead td {
    background-color: #ECEFF1;
    color: #999999;
    word-break: keep-all;
    padding: 0 10px;
  }

  .ucn-table td > div {
    text-align: center;
    width: 100%;
    line-height: 14px;
  }

  .ucn-table thead td > div {
    line-height: 40px;
    white-space: nowrap;
  }

  .ucn-table thead tr td:first-child > div {
    width: 20px;
  }

  .ucn-table tbody td {
    padding: 10px;
  }

  .ucn-table thead tr:nth-child(even) td,
  .ucn-table tbody tr:nth-child(even) {
    background-color: #F7F8F9;
  }

  .ucn-table tbody tr td:hover,
  .ucn-table tbody tr:hover td {
    background-color: #ebeff1 !important;
  }

  .ucn-table tbody tr td:first-child,
  .ucn-table tbody tr td:last-child {
    background-color: #FFFFFF;
    position: relative;
  }

  .ucn-table tbody tr td:last-child:after,
  .ucn-table tbody tr td:first-child:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: 0;
    background-color: #ebeef5;
    box-shadow: 3px 0 10px rgba(0, 0, 0, .4);
  }

  .ucn-table tbody tr td:last-child:after {
    left: 0;
    box-shadow: -3px 0 10px rgba(0, 0, 0, .2);
  }

  .ucn-table .button {
    color: #409eff;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
  }

  .ucn-table .button:last-child {
    margin-right: 0;
  }

  .ucn-table .empty {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #999999;
  }

  .ucn-table .el-pagination {
    white-space: inherit;
  }

  .header-content {
    width: 100%;
    position: relative;
    min-height: 30px;
  }

  .header-content .fixed {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
