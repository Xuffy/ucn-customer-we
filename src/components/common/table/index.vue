<template>
  <div class="ucn-table" v-loading="loading"
       :class="{'fixed-left-box':selection,'fixed-right-box':buttons}">

    <div class="header-content">
      <div>
        <slot name="header"></slot>
      </div>
      <div class="fixed">
        <v-table-filter ref="tableFilter"
                        @filter-column="onFilterColumn" 
                        @filter-value="val => {$emit('filter-value',val)}"></v-table-filter>
      </div>
    </div>

    <div class="table-container" :style="{height:height + 'px'}">
      <div class="fixed-left" v-if="selection"
           ref="fixedLeft" :class="{show:dataColumn.length}">
        <input type="checkbox" v-model="checkedAll" :class="{visibility:selectionRadio}" ref="checkboxAll"/>
      </div>
      <div class="fixed-right" v-if="buttons"
           ref="fixedRight" :class="{show:dataColumn.length}">
        action
      </div>

      <div class="table-box" id="table-box" ref="tableBox">
        <table v-if="dataList.length">
          <thead ref="tableTitle">
          <tr>
            <td ref="tableCheckbox" v-if="selection">
              <div style="visibility: hidden">
                <input type="checkbox" :class="{visibility:selectionRadio}"/>
              </div>
            </td>
            <td v-if="rowspan < 2">
              <div>#</div>
            </td>
            <td v-for="item in dataColumn" v-if="!item._hide && item.key">
              <div v-text="item.label">
              </div>
            </td>
            <td v-if="buttons" ref="tableAction">
              <div>action</div>
            </td>
          </tr>
          </thead>

          <tbody ref="tableBody">
          <tr v-for="(item,index) in dataList" :style="{opacity:item._disabled ? 0.5 : 1}"
              :class="{rowspan:index % rowspan !== 0}">
            <td v-if="selection && (index % rowspan === 0) " :rowspan="rowspan">
              <div>
                <input type="checkbox" ref="checkbox" :disabled="item._disabled"
                       v-if="typeof selection === 'function' ? selection(item) : true"
                       @change="changeCheck(item)"
                       v-model="item._checked"/>
              </div>
            </td>
            <td v-if="rowspan < 2" :rowspan="rowspan">
              <div v-text="index + 1"></div>
            </td>
            <td v-for="(cItem,cKey) in item" v-if="!cItem._hide && cItem.key"
                :style="{'background-color':cItem._highlight}">
              <div v-text="cItem.value"></div>
            </td>
            <td v-if="buttons && (index % rowspan === 0) " :rowspan="rowspan">
              <div style="white-space: nowrap;">
                <span class="button" v-for="aItem in (typeof buttons === 'function' ? buttons(item) : buttons)"
                      @click="$emit('action',item,aItem.type)">{{aItem.label || aItem}}</span>
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

    <!--分页-->
    <v-pagination :data="dataList"
                  :page-sizes="pageSizes"
                  :page-size="pageSize"
                  :page-total="pageTotal"></v-pagination>
  </div>
</template>

<script>
  /**
   * 表格组件
   * @desc 表格基础组件
   * @param {Array} [data]    - 列表数据  例：[{},{},{}]
   * @param {String} [dataKey]    - i18n对应配置参数  例：'negotiation.tableProductInfo'
   * @param {Boolean} [loading]    - 加载loading状态  例：true
   * @param {String} [height]    - 设置表格高度  例：200
   * @param {Array} [pageSizes]    - 允许分页显示条数  例：[10,20,30]
   * @param {Number} [pageSize]    - 每页条数  例：200
   * @param {Number} [pageTotal]    - 总条数  例：200
   * @param {Function, Array} [buttons]    - 设置action按钮，可传入函数判断按钮是否显示，返回Array
   *                                         例：[{label: 'detail', type: 1}, {label: 'history', type: 2}]
   *                                         例：['detail', 'history']
   *
   * @method @change-checked(checkedList)   - checkbox改变时调用
   * @method @page-size-change(size)    - 改变分页条数
   * @method @page-change(page)   - 改变分页
   *
   * @example
   *  <v-table></v-table>
   */


  import VTableFilter from './filter'
  import VPagination from './pagination'

  export default {
    name: 'VTable',
    components: {VTableFilter, VPagination},
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
      buttons: {
        type: [Function, Array]
      },
      selection: {
        type: [Function, Boolean],
        default: true,
      },
      selectionRadio: {
        type: Boolean,
        default: false,
      },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 40, 50];
        },
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      pageTotal: {
        type: Number,
        default: 1,
      },
      rowspan: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],
        checkedAll: false,
        tableAttr: {},
      }
    },
    watch: {
      data(val) {
        this.dataList = val;
        this.dataColumn = this.filterColumn(val);
        this.updateTable();
      },
      checkedAll(value) {
        this.dataList = _.map(this.dataList, val => {
          val._checked = val._disabled ? false : value;
          return val;
        });
        this.changeCheck();
      },
      buttons() {
        this.updateTable();
      },
      selection() {
        this.updateTable();
      },
    },
    mounted() {
      this.dataList = this.data;
      this.dataColumn = this.filterColumn(this.dataList);
      this.updateTable();
      this.$refs.tableBox.addEventListener('scroll', this.updateTable);
    },
    methods: {
      onFilterColumn(checked) {
        this.dataList = this.$refs.tableFilter.getFilterColumn(this.dataList, checked);
        this.dataColumn = this.filterColumn(this.dataList);
        this.updateTable();
      },
      filterColumn(data) {
        if (_.isEmpty(data)) {
          return [];
        } else {
          return _.values(data[0]);
        }
      },
      updateTable(e) {
        this.$nextTick(() => {
          if (!this.$refs.tableBody) return false;

          let trs = this.$refs.tableBody.children;
          let st, sl, sw;
          if (e) {
            st = e.target.scrollTop;
            sl = e.target.scrollLeft;
            sw = e.target.scrollWidth;
          } else {
            st = this.tableAttr.st || 0;
            sl = this.tableAttr.sl || 0;
            sw = this.$refs.tableBody.offsetWidth;
          }

          this.tableAttr.st = st;
          this.tableAttr.sl = sl;

          if (this.selection) {
            this.$refs.fixedLeft.style.width = `${this.$refs.tableCheckbox.offsetWidth}px`;
          }

          if (this.buttons) {
            this.$refs.fixedRight.style.width = `${this.$refs.tableAction.offsetWidth}px`;
          }
          _.map(trs, (val, index) => {
            if (index % this.rowspan !== 0) return false;
            if (this.selection && val.firstChild.style) {
              val.firstChild.style.transform = `translate3d(${sl}px,0,0)`;
            }
            if (this.buttons && val.lastChild.style) {
              val.lastChild.style.transform = `translate3d(${this.$refs.tableBox.clientWidth - sw + sl}px,0,0)`;
            }
          });
          this.$refs.tableTitle.style.transform = `translate3d(0,${st}px,0)`;

        });
      },
      changeCheck(item) {
        if (this.selectionRadio) {
          this.dataList = _.map(this.dataList, val => {
            val._checked = false;
            return val;
          });
          item._checked = true;
        }
        this.$emit('change-checked', this.getSelected());
      },
      getSelected() {
        return this.selectionRadio ? _.findWhere(this.dataList, {_checked: true}) :
          _.where(this.dataList, {_checked: true});
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

  .ucn-table .visibility {
    visibility: hidden !important;
  }

  .ucn-table.fixed-left-box .fixed-left,
  .ucn-table.fixed-right-box .fixed-right {
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
    display: block !important;
  }

  .ucn-table.fixed-left-box .fixed-left {
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
  .ucn-table tbody tr:nth-child(even) td {
    background-color: #F7F8F9;
  }

  .ucn-table tbody tr td:hover,
  .ucn-table tbody tr:hover td {
    /*background-color: #ebeff1 !important;*/
  }

  .ucn-table.fixed-left-box tbody tr:not(.rowspan) td:first-child,
  .ucn-table.fixed-right-box tbody tr:not(.rowspan) td:last-child {
    background-color: #FFFFFF;
    position: relative;
  }

  .ucn-table.fixed-right-box tbody tr:not(.rowspan) td:last-child:after,
  .ucn-table.fixed-left-box tbody tr:not(.rowspan) td:first-child:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: 0;
    background-color: #ebeef5;
    box-shadow: 3px 0 10px rgba(0, 0, 0, .4);
  }

  .ucn-table.fixed-right-box tbody tr:not(.rowspan) td:last-child:after {
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
