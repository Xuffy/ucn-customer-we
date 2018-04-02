<template>
  <section class="filter-column">

    <el-popover
      :width="200"
      v-model="visible"
      placement="bottom-end"
      trigger="click">
      <i slot="reference" class="el-icon-setting">Set Filed</i>
      <el-input v-model="filterText" placeholder="请输入内容" prefix-icon="el-icon-search"
                size="mini" clearable style="margin-bottom: 10px"></el-input>
      <el-checkbox v-model="checkAll">全选</el-checkbox>
      <div style="height: 200px;overflow: auto">
        <el-tree
          show-checkbox
          default-expand-all
          class="filter-tree"
          node-key="prop"
          :data="data"
          @current-change=""
          :props="{children: 'children',label: 'label'}"
          :filter-node-method="filterNode"
          ref="columnTree">
        </el-tree>
      </div>
      <br/>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button size="mini" style="width: 100%">确定</el-button>
        </el-col>
        <el-col :span="12">
          <el-button size="mini" style="width: 100%" @click="visible =  false">取消</el-button>
        </el-col>
      </el-row>
    </el-popover>
  </section>
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
        checkAll: false,
        filterText: '',
        dataList: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }
        ],
      }
    },
    watch: {
      data(value) {
        // this.dataList = value;
        // console.log(value)
        let checked = [];
        /*_.map(value, val => {
          val._hide
        })*/
      },
      dataList(value) {
        // console.log(value)
      },
      filterText(val) {
        this.$refs.columnTree.filter(val);
      },
      checkAll(val) {
        val ? this.$refs.columnTree.setCheckedKeys(_.pluck(this.data, 'prop'))
          : this.$refs.columnTree.setCheckedKeys([]);
      }
    },
    created() {
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-box {
    padding: 10px;
    max-height: 300px;
  }

</style>
<style>
  .ucn-table .ivu-poptip-body {
    padding: 0;
  }
</style>
