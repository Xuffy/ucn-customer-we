<template>
  <div class="ucn-table">
    <el-row>
      <el-col :span="16">&nbsp;</el-col>
      <el-col :span="8" style="text-align: right;cursor: pointer">
        <v-filter-column></v-filter-column>
      </el-col>
    </el-row>
    <el-table
      :max-height="maxHeight"
      :data="showData">
      <el-table-column
        v-if="columnList.length"
        width="40"
        fixed="left"
        type="selection">
      </el-table-column>

      <el-table-column
        v-if="columnList.length"
        align="center"
        type="index">
      </el-table-column>

      <el-table-column v-for="(item,index) in columnList" :key="index"
                       align="center"
                       :prop="item.prop"
                       :label="item.label"
                       :render-header="item.renderHeader"
                       :width="item.width || 80">
      </el-table-column>
      <el-table-column v-if="columnList.length"
                       label="Actions"
                       align="center"
                       fixed="right"
                       width="80">

        <template slot-scope="scope">
          <el-button type="text">detail</el-button>
        </template>
      </el-table-column>
    </el-table>

    <br>
    <!--<el-pagination
      background
      :current-page="4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="prev, pager, next,sizes, jumper,total"
      :total="400">
    </el-pagination>-->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="prev, pager, next,sizes, jumper,total"
      :total="400"></el-pagination>
  </div>
</template>

<script>
  /**
   * 表格组件
   * @desc 组件描述
   * @author xuffy
   * @param {Object} [title]    - 参数说明
   * @param {String} [columns] - 参数说明
   * @example
   *  <v-table></v-table>
   */

  import VFilterValue from './filterValue'
  import VFilterColumn from './filterColumn'

  export default {
    name: 'VSimpleTable',
    components: {
      VFilterValue,
      VFilterColumn
    },
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
      column: {
        type: Array,
        default() {
          return [];
        },
      },
      maxHeight: {
        type: Number,
        default: 400,
      },
    },
    data() {
      return {
        showData: [],
        columnList: [],
        // checkValue: [],
      }
    },
    watch: {
      data(value) {
        if (!_.isEmpty(value)) {
          this.showData = _.filter(value, val => {
            return !val._isHide;
          });
        }
      },
      column(columns) {
        if (columns.length) {
          this.columnList = _.map(columns, val => {
            val.renderHeader = (h, params) => {
              return h(VFilterValue, {
                props: {
                  dataKey: val.prop,
                  data: this.data,
                  label: params.column.label
                },
                on: {
                  'update:data': val => {
                    this.$emit('update:data', val);
                  }
                }
              });
            };
            return val;
          });
        }
      }
    },
    created() {
      // this.$emit('update:column', [])
    },
    methods: {
      /**
       * 函数说明
       * @method getList
       * @param {Object} [title]    - 参数说明
       * @param {Object} [title]    - 参数说明
       * @return {Object} - 参数说明
       */
      getList() {

      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ucn-table table {
    border-collapse: collapse;
    border-spacing: 0;
    border-left: 1px solid #e9eaec;
    background-color: #ffffff;
  }

  .ucn-table table tr:first-child {
    border-top: 1px solid #e9eaec;
    background-color: #f8f8f9;
  }

  .ucn-table table tr {
    border-right: 1px solid #e9eaec;
  }

  .ucn-table table tr th,
  .ucn-table table tr td {
    text-align: center;
    border-bottom: 1px solid #e9eaec;
    padding: 10px 5px;
  }
</style>
<style>
  .ucn-table .ivu-checkbox-wrapper {
    margin-right: 0;
  }

  .ucn-table td.ivu-table-expanded-cell {
    padding: 0 0 0 64px;
  }

  .ucn-table .ivu-table-fixed-body {
    background-color: #f8f8f9;
  }

  .ucn-table .el-table .cell {
    line-height: 16px;
  }
</style>
