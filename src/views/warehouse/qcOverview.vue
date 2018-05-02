<template>
  <div class="inquiryOverview">
    <h3 class="hd"></h3>
    <div class="status">
      <div class="state">
        <span>{{ $i._baseText.qcStatus }}</span>
        <el-radio-group>
          <el-radio-button>{{$i._baseText.waitingQC}}</el-radio-button>
          <el-radio-button>{{$i._baseText.completedQC}}</el-radio-button>
        </el-radio-group>
      </div>
      <div style="float: right">
        <select-search
          :options="options"
          @inputChange="inputEnter"
          :searchLoad="searchLoad"
        />
      </div>
    </div>
    <div class="fn">
      <div class="btn-wrap">
        <el-button>{{ $i._baseText.downloadall }}</el-button>
        <el-button @click="createQcOrder">{{ $i._baseText.create }}</el-button>
      </div>
    </div>
    <v-table
      :data="tabData"
    />
  </div>
</template>
<script>
import { selectSearch, VTable } from '@/components/index';

    export default {
        name: "qc-overview",
        components:{
            VTable,
            selectSearch
        },
        data(){
            return{
                name:'',
                value:'',
                options: [{
                  id: 1,
                  label: 'QC Order No'
                  }],
                searchLoad:false,
                params: {
                  pn: 1,
                  ps: 10,
                  purchaseId: '',
                  qcOrderNo: '',
                  qcStatusDictCode: '',
                  serviceProviderId: '',
                  sorts: [
                    {
                      nativeSql: true,
                      orderBy: 'id',
                      orderType: 'DESC',
                      resultMapId: ''
                    }
                  ]
                },
                tabData:[]
            }
        },
        methods:{
            //获取表格data
            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },
            inputEnter(val) {
              if (!val.keyType) return this.$message('请选中搜索类型');
              if (!val.key) return this.$message('搜索内容不能为空');
              if (val.keyType == '1') {
                this.params.qcOrderNo = val.key
              }
              this.getdata()
            },
            //获取表格data
            getQcOrderList(){
              this.$ajax.post(this.$apis.post_qc_page,this.params)
                .then(res => {
                    this.tabData = this.$getDB(this.$db.qcOrderTable, res.datas);
                    console.log(res)
                });
            },
            createQcOrder(){
              this.$router.push({
                path: '/createQc',
                query: {
                  id: id
                }
              })
            }

        },
        created(){
             this.getQcOrderList();
        },
    }
</script>

<style scoped>
    .head-list{
        margin-bottom: 10px;
    }
    .head-list label{
        width: 190px;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        text-align: right;
        font-size: 14px;
        color:#606266;
        padding: 0 12px 0 0;
        box-sizing: border-box;
        float: left;
    }
    .head-list .content{
        margin-left: 190px;
        height: 32px;
    }
    .head-list .content >>> input{
        height: 32px;
    }
    .state{
      float: left;
    }
    .status{
      overflow: hidden;
    }
    .fn {
      display:flex;
      justify-content:space-between;
      padding:30px 15px;
      box-sizing: border-box;
      .viewBy {
        display:flex;
        align-items: center;
        span {
          font-size:14px;
          color:#666;
        }
        button {
          cursor: pointer;
          padding:2px 5px;
        }
          .set {
            cursor: pointer;
            padding-left:18px;
            color:#999;
          i {
            font-size:25px;
          }
        }
      }
    }
    .btns{
        text-align: center;
    }
    .btn-group{
        margin-bottom: 10px;
    }
</style>
