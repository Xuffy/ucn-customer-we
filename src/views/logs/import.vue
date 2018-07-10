<template>
  <div class="logs-import">
    <br>
    <h3 class="ucn-content-title inline" v-text="$i.logs.importTitle"></h3>&nbsp;&nbsp;&nbsp;&nbsp;
    <el-button icon="el-icon-refresh" type="primary" :loading="loading"
               @click="getImportData">{{$i.logs.refreshTask}}
    </el-button>
    <br>
    <br>
    <el-tabs type="card" v-model="tabActive">
      <!--导入任务-->
      <el-tab-pane label="导入任务" name="import">
        <el-table
          :data="resData.datas"
          :max-height="500"
          border
          v-loading="loading"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="uploadFileName"
            :label="$i.logs.uploadFileName"
            min-width="200">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$i.logs.uploadFileSize"
            width="100">
            <template slot-scope="scope">
              {{$bytesConvert(scope.row.uploadFileSize)}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="100"
            prop="status"
            :label="$i.logs.uploadStatus">
          </el-table-column>
          <el-table-column
            align="center"
            width="180"
            :label="$i.logs.uploadEndTime">
            <template slot-scope="scope">
              {{$dateFormat(scope.row.endTime,'yyyy-mm-dd hh:mm:ss')}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="entryName"
            :label="$i.logs.uploadEntryName">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$i.logs.uploadEntryDt">
            <template slot-scope="scope">
              {{scope.row.entryDt ? $dateFormat(scope.row.entryDt,'yyyy-mm-dd hh:mm:ss') : ''}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="successRows"
            :label="$i.logs.uploadSuccessRows">
          </el-table-column>
          <el-table-column
            align="center"
            prop="errorRows"
            :label="$i.logs.uploadErrorRows">
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            :label="$i.logs.uploadAction">
            <template slot-scope="scope">
              <el-button type="text" size="small" v-if="scope.row.errorMsgFileUrl"
                         @click="downloadLogs(scope.row.successMsgFileUrl)">
                {{$i.logs.downSuccess}}
              </el-button>
              <el-button type="text" size="small" v-if="scope.row.errorMsgFileUrl"
                         @click="downloadLogs(scope.row.errorMsgFileUrl)">
                {{$i.logs.downError}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <v-pagination :page-data="resData" @size-change="pageSizeChange"
                      @change="pageChange"></v-pagination>
      </el-tab-pane>

      <!--导出任务-->
      <el-tab-pane label="导出任务" name="export">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import {VPagination} from '@/components/index';

  export default {
    name: 'import',
    components: {VPagination},
    data() {
      return {
        loading: false,
        resData: {},
        paging: {pn: 0, ps: 10},
        tabActive: 'import',
      }
    },
    watch: {},
    created() {
      this.getPart();
      this.getImportData();
    },
    methods: {
      getImportData() {
        this.loading = true;
        this.$ajax.all([
          this.getPart(),
          this.$ajax.post(this.$apis.IMPORTFILE_GETIMPORTTASK, this.paging)
        ]).then(res => {
          this.resData = res[1];
          this.resData.datas = _.map(res[1].datas, val => {
            let item = _.findWhere(res[0], {code: val.status.toString()});
            val.status = item ? item.name : '';
            return val;
          });
        })
          .finally(() => this.loading = false);
      },
      getPart() {
        return this.$ajax.post(this.$apis.CODE_PART, ['IMPORT_TASK_STATUS'], {cache: true})
          .then(res => {
            return res[0] ? res[0].codes : [];
          });
      },
      pageSizeChange(val) {
        this.paging.ps = val;
        this.getImportData();
      },
      pageChange(val) {
        this.paging.pn = val;
        this.getImportData();
      },
      downloadLogs(url) {
        url && window.open(url);
      }
    }
  }
</script>

<style scoped>
</style>
