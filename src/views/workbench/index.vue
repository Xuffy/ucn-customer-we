<template>
  <div class="workbench">

    <v-upload readonly :limit="5" list="http://ucn-oss-dev.oss-cn-hangzhou.aliyuncs.com/35/fcbf6b3f-453f-4ff9-9dfa-7f8ee46fb249/22222222222.png?Expires=1527568722&OSSAccessKeyId=STS.NKMo3MhSGvTnfNeq8C1qJbNPG&Signature=A4ZqeOZ2zME4lg3ZdpW%2BE2YrG%2Fs%3D&security-token=CAIS9gF1q6Ft5B2yfSjIr4j4JIn5hYxmwZaFZGjUlTgWPf5mjYv7pTz2IH9Jf3FrA%2Bges%2F42lG9R6v4alqduQJlyTFDYWtZo6pNe%2FVsfyitmaYjng4YfgbiJREKxaXeiruKwDsz9SNTCAITPD3nPii50x5bjaDymRCbLGJaViJlhHL91N0vCGlggPtpNIRZ4o8I3LGbYMe3XUiTnmW3NFkFlyGEe4CFdkf3umZbEs0uO1QWrkLdP%2F9TLT8L6P5U2DvBWSMyo2eF6TK3F3RNL5gJCnKUM1%2FMZom%2Bc5InFXgMIs0rfb7KM6LxoNxQ8b6Q%2FGqhUVH4lBDbSZYcagAFj206OURyJnApFtOMJ1VkceNMgoZYbPbeFoU3RBKd098y378CKERGN85BrucTHOvCGNlIeSqLXTCc7KJMvZzBbnMUmjNLagaNgRXLEmiFTN6O6MBxcBze1KYExjAdUoRfeBxRYbf90DkPYj2MsmAYVE90RAPDS5jU8xFY%2FAic%2Bmw%3D%3D"></v-upload>
    <!--<v-time-zone :value.sync="timeZone"></v-time-zone>-->
    <div class="quickLink">
      <h3 class="ucn-content-title inline" @click="$refs.importFile.show()" v-text="$i.workbench.quickLink"></h3>
      <el-button size="mini" type="primary" icon="el-icon-plus"
                 style="display: inline-block;margin-left: 30px!important;"
                 @click="$store.state.quickLink.show = true"></el-button>
      <br/>
      <el-button size="mini" v-for="item in $store.state.quickLink.list" :key="item.id">
        <router-link :to="item.link">
          {{item.label}}
        </router-link>
      </el-button>
    </div>
    <br/><br/>
    <v-data-dashboard v-authorize="'WORKBENCH:DATA_DASHBOARD'"></v-data-dashboard>
    <br/><br/>
    <el-row :gutter="10">
      <el-col :span="12">
        <v-table-data :type="1"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="2"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="3"></v-table-data>
      </el-col>
      <el-col :span="12">
        <v-table-data :type="4"></v-table-data>
      </el-col>
    </el-row>

    <v-import-template ref="importFile"></v-import-template>
    <!--<v-message-board module="workbench" code="workbench" id="123"></v-message-board>-->
  </div>
</template>

<script>
  import VDataDashboard from './dataDashboard'
  import VTableData from './tableData'
  import VBasicInfo from './basicInfo'
  import {VHistoryModify, VMessageBoard, VTimeZone, VUpload,VImportTemplate} from '@/components/index';

  export default {
    name: 'workbench',
    components: {
      VImportTemplate,
      VUpload,
      VDataDashboard,
      VTableData,
      VBasicInfo,
      VHistoryModify,
      VMessageBoard,
      VTimeZone,
    },
    data() {
      return {
        visible: false,
        pengdingTask: [],
        futureTask: [],
        fyiTask: [],
        pushTask: [],
        timeZone: '1', // todo 测试
      }
    },
    created() {

    },
    mounted() {


    },
    methods: {
      save(data) {
        console.log(data)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workbench .el-col-12 {
    margin-bottom: 20px;
  }

  .quickLink .el-button {
    margin-top: 10px;
  }
</style>
<style>
  /*.workbench-notify {
    !*width: 250px;*!
  }*/
</style>
