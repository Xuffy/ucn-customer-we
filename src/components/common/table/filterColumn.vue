<template>
  <section class="filter-column">

    <el-popover
      placement="bottom-end"
      trigger="click">
      <i slot="reference" class="el-icon-setting">Set Filed</i>
      <el-input v-model="filterText" placeholder="请输入内容" size="mini"></el-input>
      <el-checkbox v-model="checkAll">全选</el-checkbox>
      <el-tree
        show-checkbox
        default-expand-all
        class="filter-tree"
        node-key="id"
        :data="dataList"
        :props="{children: 'children',label: 'label'}"
        :filter-node-method="filterNode"
        ref="columnTree">
      </el-tree>
    </el-popover>
  </section>
</template>

<script>

  export default {
    name: 'VFilterColumn',
    data() {
      return {
        checkAll: false,
        filterText: '',
        dataList: [{
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
        }],
      }
    },
    watch: {
      filterText(val) {
        this.$refs.columnTree.filter(val);
      },
      checkAll(val) {
        val ? this.$refs.columnTree.setCheckedKeys(_.pluck(this.dataList, 'id'))
          : this.$refs.columnTree.setCheckedKeys([]);
      }
    },
    created() {
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
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
