<template>
  <section class="filter-value">

    <el-popover
      popper-class="filter-value-popper"
      placement="bottom"
      @hide="hideListener"
      v-model="visible"
      trigger="click">
      <h4 slot="reference" style="cursor: pointer">
        {{label}}
        <i class="el-icon-circle-plus-outline"></i>
      </h4>

      <el-checkbox-group v-model="sortType" size="mini" @change="changeSortType">
        <el-checkbox-button label="asc">升序</el-checkbox-button>
        <el-checkbox-button label="des">降序</el-checkbox-button>
      </el-checkbox-group>

      <el-input placeholder="请输入内容" size="mini" prefix-icon="el-icon-search"
                clearable
                v-model="filterValue"></el-input>

      <div class="content-box">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="changeAllChecked">全选</el-checkbox>
        <br/>

        <el-checkbox-group v-model="checkedDataList" @change="changeChecked">
          <el-checkbox class="checkbox-item" v-for="(item,index) in dataList"
                       :label="item"
                       :key="index"
                       style="">{{item[dataKey]}}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <br/>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button size="mini" style="width: 100%" @click="clickFilter">确定</el-button>
        </el-col>
        <el-col :span="12">
          <el-button size="mini" style="width: 100%" @click="visible = false">取消</el-button>
        </el-col>
      </el-row>
    </el-popover>
  </section>
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
      label: {
        type: String,
        default: '',
      },
      dataKey: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        visible: false,
        sortType: [],
        checkAll: false,
        dataList: [],
        filterValue: '',
        checkedDataList: [],
        isIndeterminate: true
      }
    },
    watch: {
      data(value) {
        if (value.length) {
          this.getFilterValue(this.filterValue);
        }
      },
      filterValue(value) {
        this.getFilterValue(value)
      }
    },
    created() {
      this.getFilterValue(this.filterValue);
      this.checkedDataList = this.dataList;
    },
    methods: {
      uniqueData(value) {
        let dl = [];
        // 去除重复值
        _.map(value, val => {
          let data = val[this.dataKey];
          if (data && _.indexOf(_.pluck(dl, this.dataKey), data) < 0) {
            dl.push(val);
          }
        });
        return dl;
      },
      getFilterValue(value) {
        let dl = [];
        this.dataList = this.uniqueData(this.data);

        this.checkedDataList = _.filter(this.dataList, val => {
          return !val._hide;
        });
        this.changeChecked(this.checkedDataList);

        if (value) {
          _.map(this.dataList, val => {
            let data = val[this.dataKey];
            if (!_.isUndefined(data) && data.toString().indexOf(value) > -1) {
              val._hide = false;
              dl.push(val);
            }
          });
          this.dataList = dl;
          this.checkedDataList = dl;
        }
      },
      changeSortType(val) {
        // @onSort
        if (val.length > 1) {
          val.shift();
        }
        this.$emit('sort-change', val[0] || '', this.dataKey);

        this.visible = false;

      },
      changeAllChecked(val) {
        this.checkedDataList = val ? this.dataList : [];
        this.isIndeterminate = false;
      },
      changeChecked(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.dataList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.dataList.length;
      },
      clickFilter() {
        let data = [];
        _.map(this.data, val => {
          val._hide = (_.indexOf(_.pluck(this.checkedDataList, this.dataKey), val[this.dataKey]) < 0);
          data.push(val);
        });

        this.$emit('update:data', data);

        this.visible = false;
      },
      hideListener() {
        console.log(1)
        console.log(this.data)
        this.getFilterValue();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkbox-item {
    display: block;
    margin-left: 0;
    margin-top: 5px;
  }

  .content-box {
    margin-top: 10px;
    height: 200px;
    overflow: auto;
  }
</style>

<style>

  .filter-value-popper .el-checkbox__label {
    font-size: 12px;

  }

  .filter-value-popper .el-checkbox-button__inner {
    border: none;
    border-color: inherit !important;
    border-left: none !important;
    box-shadow: none !important;
  }

  .filter-value-popper .el-checkbox-button.is-checked .el-checkbox-button__inner {
    background-color: inherit;
    color: #409EFF;
  }

  .filter-value-popper .el-checkbox-button, .el-checkbox-button__inner {
    width: 50%;
  }
</style>
