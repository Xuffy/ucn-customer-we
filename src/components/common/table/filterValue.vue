<template>
  <div class="filter-value">
    <i class="el-icon-search" @click="visible = !visible"></i>

    <el-dialog title="Table filter" :visible.sync="visible">
      <ul>
        <li class="filter-item" v-for="(item,index) in conditionList">
          <el-select v-model="item.key" class="compute-key" filterable placeholder="请选择">
            <el-option
              v-for="item in data"
              :key="item.prop"
              :label="item.label"
              :value="item.prop">
            </el-option>
          </el-select>

          <el-select v-model="item.type" class="compute-type" placeholder="请选择">
            <el-option
              v-for="item in computeTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-input class="compute-value" v-model="item.value"></el-input>

          <el-button icon="el-icon-plus" @click="addCompute"></el-button>
          <el-button icon="el-icon-minus" @click="cutCompute(index)"></el-button>
        </li>
      </ul>

      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'VFilterValue',
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        visible: false,
        computeTypeList: [
          {
            value: '等于',
            label: '等于'
          },
          {
            value: '不等于',
            label: '不等于'
          },
          {
            value: '大于',
            label: '大于'
          },
          {
            value: '小于',
            label: '小于'
          },
          {
            value: '大于等于',
            label: '大于等于'
          },
          {
            value: '小于等于',
            label: '小于等于'
          },
          {
            value: '为空',
            label: '为空'
          },
          {
            value: '不为空',
            label: '不为空'
          }
        ],
        computeType: '',
        conditionList: [
          {key: '', type: '', value: ''}
        ],
        value8: '',
      }
    },
    watch: {},
    created() {
    },
    methods: {
      addCompute() {
        this.conditionList.push(this.$options.data().conditionList[0])
      },
      cutCompute(index) {
        if (this.conditionList.length > 1) {
          this.conditionList = _.filter(this.conditionList, (val, ind) => {
            return ind !== index;
          });
        } else {
          this.conditionList = this.$options.data().conditionList;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filter-value {
    display: inline-block;
    margin-left: 10px;
  }

  .filter-value .el-icon-search {
    font-size: 20px;
    color: #666666;
    cursor: pointer;
  }

  .filter-item {
    margin-bottom: 10px;
  }

  .compute-key {
    width: 120px;
  }

  .compute-type {
    width: 100px;
  }

  .compute-value {
    width: 150px;
  }
</style>
