<template>
  <div class="filter-column">
    <el-popover
      :width="200"
      v-model="visible"
      @hide="defaultChecked"
      placement="bottom-end"
      trigger="click">
      <i slot="reference" class="el-icon-setting"></i>
      <el-input v-model="filterText" placeholder="请输入内容" prefix-icon="el-icon-search"
                size="mini" clearable style="margin-bottom: 10px"></el-input>
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</el-checkbox>
      <div style="height: 200px;overflow: auto">
        <el-tree
          show-checkbox
          default-expand-all
          class="filter-tree"
          node-key="prop"
          :data="data"
          @check-change="changeCheck"
          :props="{children: 'children',label: 'label'}"
          :filter-node-method="filterNode"
          ref="columnTree">
        </el-tree>
      </div>
      <br/>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button size="mini" style="width: 100%" @click="clickFilter">确定</el-button>
        </el-col>
        <el-col :span="12">
          <el-button size="mini" style="width: 100%" @click="visible =  false">取消</el-button>
        </el-col>
      </el-row>
    </el-popover>
  </div>
</template>

<script>

  export default {
    name: 'VFilterColumn',
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      }
    },
    data() {
      return {
        visible: false,
        checkedList: [],
        checkAll: false,
        filterText: '',
        isIndeterminate: true,
      }
    },
    watch: {
      data() {
        this.defaultChecked();
      },
      filterText(val) {
        this.$refs.columnTree.filter(val);
      },
      checkAll(val) {
        val ? this.$refs.columnTree.setCheckedKeys(_.pluck(this.data, 'prop'))
          : this.$refs.columnTree.setCheckedKeys([]);
      },
      checkedList(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.data.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.data.length;
      }
    },
    mounted() {
      this.defaultChecked();
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      },
      clickFilter() {
        let list = [];
        list = _.map(this.data, (value) => {
          value._isHide = !_.findWhere(this.checkedList, {prop: value.prop});
          return value;
        });
        this.$emit('update:data', list);
        this.visible = false;
      },
      defaultChecked() {
        let list = [];
        _.map(this.data, val => {
          if (!val._isHide) {
            list.push(val.prop);
          }
        });
        this.$refs.columnTree.setCheckedKeys(list);
      },
      changeCheck() {
        this.checkedList = this.$refs.columnTree.getCheckedKeys();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .filter-column{
    margin-left: 10px;
    display: inline-block;
  }
  .filter-column .el-icon-setting{
    font-size: 20px;
    color: #666666;
    cursor: pointer;
  }

</style>
<style>
  .ucn-table .ivu-poptip-body {
    padding: 0;
  }
</style>
