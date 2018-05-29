<template>
  <div class="logs-import">
    <br>
    <h3 class="ucn-content-title inline" v-text="'Import logs'"></h3>
    <br>
    <br>
    <el-table
      :data="resData.datas"
      :height="500"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="文件名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="文件大小"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="执行状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="执行时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建人">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="成功行数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="失败行数">
      </el-table-column>
      <el-table-column
        prop="address"
        fixed="right"
        label="执行结果下载">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <v-pagination :page-data="resData" @size-change="pageSizeChange"
                  @change="pageChange"></v-pagination>
  </div>
</template>

<script>

  import {VPagination} from '@/components/index';

  export default {
    name: 'import',
    components: {VPagination},
    data() {
      return {
        resData: {},
        paging:{pn: 0, ps: 10}
      }
    },
    watch: {},
    created() {
      this.getDataList();
    },
    methods: {
      getDataList() {
        this.$ajax.post(this.$apis.IMPORTFILE_GETIMPORTTASK, this.paging)
          .then(res => {
            this.resData = res;
            console.log(res)
          });
      },
      pageSizeChange(val){
        this.paging.ps = val;
        this.getDataList();
      },
      pageChange(val){
        this.paging.pn = val;
        this.getDataList();
      }
    }
  }
</script>

<style scoped>
</style>
