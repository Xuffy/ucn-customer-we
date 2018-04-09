<template>
  <div class="filter-value">
    <i class="el-icon-search" @click="visible = !visible"></i>


    <el-dialog title="Table filter" :visible.sync="visible">
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
      }
    },
    watch: {},
    created() {
    },
    methods: {}
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
</style>
