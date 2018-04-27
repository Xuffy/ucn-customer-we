<template>
  <div class="ucn-pagination">
    <el-pagination
      :style="{visibility: !data.length ? 'hidden' : ''}"
      @size-change="size => {$emit('page-size-change', size)}"
      @current-change="page => {$emit('page-change', page)}"
      :page-sizes="pageSizes"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="pageTotal"
      :layout="pageLayout">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    name: 'VPagination',
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
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
      pageNum: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        pageLayout: 'prev, pager, next,sizes, jumper,total'
      }
    },
    watch: {
      pageTotal() {
        this.pageListener();
      },
      pageSize() {
        this.pageListener();
      },
    },
    mounted() {
    },
    methods: {
      pageListener() {
        if (this.pageTotal <= this.pageSize) {
          this.pageLayout = '';
        } else {
          this.pageLayout = this.$options.data().pageLayout;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .filter-column {
    margin-left: 10px;
    display: inline-block;
  }

  .filter-column .el-icon-setting {
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
