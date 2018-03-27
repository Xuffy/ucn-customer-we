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
        column: [
          {
            title: 'all(80/60)',
            expand: true,
            children: [
              {
                title: 'parent 1',
                expand: true,
                children: [
                  {
                    title: 'parent 1-1',
                    expand: true
                  },
                  {
                    title: 'parent 1-2',
                    expand: true
                  }
                ]
              }
            ]

          }

        ]
      }
    },
    watch: {},
    created() {
    },
    methods: {
      /*changeCheck(type) {
        this.checkAll = !this.checkAll;

        console.log(_.map(this.column, val => {
          val.checked = this.checkAll;
          return val
        }));
      }*/
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
