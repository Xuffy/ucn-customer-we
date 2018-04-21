<template>
  <div class="ucn-history-modify">
    <el-dialog
      title="提示"
      width="80%"
      @close="() => {$emit('update:visible', false)}"
      :visible.sync="showDialog">

      <el-table
        :data="dataList"
        height="400px"
        :span-method="objectSpanMethod"
        border>
        <el-table-column v-for="item in dataColumn" :key="item.id"
                         v-if="!item._hide"
                         min-width="200px"
                         :prop="item.key"
                         :label="item.label">

          <template slot-scope="scope" v-if="scope.row[item.key] && !scope.row[item.key]._hide">

            <div v-if="!scope.row[item.key]._edit || scope.row[item.key]._title">
              {{scope.row[item.key].value}}
              <p v-if="scope.row[item.key]._title" v-text="scope.row[item.key]._title"></p>
            </div>

            <div v-else>
              <el-input v-if="scope.row[item.key].type !== 'Number'"
                        placeholder="Please select" :disabled="scope.row[item.key]._disabled"
                        v-model="scope.row[item.key].value" size="mini"></el-input>

              <el-input-number v-if="scope.row[item.key].type === 'Number'"
                               v-model="scope.row[item.key].value"
                               :min="scope.row[item.key].min || 0"
                               :max="scope.row[item.key].max || 99999999" controls-position="right" size="mini"
                               :controls="false"></el-input-number>
              <span v-if="scope.row[item.key].unit"></span>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div slot="footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  // testData = testData.content.details;

  export default {
    name: 'VHistoryModify',
    components: {},
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      visible: {
        type: Boolean,
        default: false
      },
      config: {
        type: Object,
        default() {
          return {};
        }
      },

    },
    data() {
      return {
        showDialog: false,
        dataList: [],
        dataColumn: [],
      }
    },
    watch: {
      data(val) {
        // this.dataList = this.getEditData(val);
      },
      visible(val) {
        this.showDialog = val;
      }
    },
    mounted() {
      // this.dataList = this.getEditData(this.data);
      // console.log(this.dataList)
    },
    methods: {
      submit() {
        this.$emit('save', [this.dataList[0], this.dataList[1]]);
        this.showDialog = false;
      },
      edit(editData, history = [], visible = true) {
        let ed = [];
        if (_.isEmpty(editData) || !_.isArray(editData)) return false;

        // 初始化可编辑行
        ed = _.map(editData, value => {
          return _.mapObject(value, (val, index) => {
            val._edit = true;
            val.type = index === 1 ? 'String' : val.type;
            val.value = val.value || '';
            val.value = _.isBoolean(val.value) ? '' : val.value; // todo 屏蔽Boolean
            return val;
          });
        });

        this.dataList = ed.concat(history);
        this.dataColumn = this.dataList[0];
        this.showDialog = visible;

        console.log(this.dataList)

      },
      /*getEditData(data) {
        let list = this.getFilterData(data)
          , dateList;

        list = [list[0], list[1]].concat(list);

        dateList = this.$getDB(this.config, list, (item, index) => {
          if (item.updateDt) {
            item.updateDt.value = this.$dateFormat(item.updateDt.value, 'yyyy-mm-dd');
          }
          // 初始化可编辑行

          item = _.mapObject(item, val => {
            val._edit = index < 2;
            val.type = index === 1 ? 'String' : val.type;
            val.value = val.value || '';
            val.value=_.isBoolean(val.value) ? '' :val.value;
            console.log(val.value,'++++')
            return val;
          });

          return item;
        });

        this.dataColumn = dateList[0];

        return dateList;
      },*/
      getFilterData(data) {
        let list = [];
        _.map(data, value => {
          list.push(value);
          value.fieldRemark = value.fieldRemark || {};
          value.fieldRemark._remark = true;
          list.push(_.extend(_.mapObject(value, (val, key) => {
            if (key !== 'id') {
              val = '';
            }
            return val;
          }), value.fieldRemark));
        });
        return list;
      },
      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
