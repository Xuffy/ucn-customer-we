<template>
  <div class="inquiryOverview">
    <h3 class="hd"></h3>
    <div class="status">
      <div class="state">
        <span>{{ $i._baseText.qcStatus }}</span>
        <el-radio-group v-model="params.qcStatusDictCode" @change="getQcOrderList">
          <el-radio-button label="WAITING_QC">{{$i._baseText.waitingQC}}</el-radio-button>
          <el-radio-button label="COMPLETED_QC">{{$i._baseText.completedQC}}</el-radio-button>
        </el-radio-group>
      </div>
      <div style="float: right">
        <select-search
          :options="options"
          @inputEnter="inputEnter"
          :searchLoad="searchLoad"
        />
      </div>
    </div>
    <div class="fn">
      <div class="btn-wrap">
        <el-button @click='download'>{{($i._baseText.download)}}({{selectedDate.length}})</el-button>
        <el-button @click="createQcOrder">{{ $i._baseText.create }}</el-button>
      </div>
    </div>
    <v-table
      :data="tabData"
      :loading='loading'
      :buttons="[{label: 'detail', type: 1}]"
      @action="onAction"
      @change-checked='checked'
    />
    <v-pagination
      :page-data.sync="params"
      @change="handleSizeChange"
      @size-change="pageSizeChange"
    />
  </div>
</template>
<script>
import { selectSearch, VTable ,VPagination} from '@/components/index';

    export default {
        name: "qc-overview",
        components:{
            VTable,
            selectSearch,
            VPagination
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
                loading: false,
                pageTotal: 0,
                pazeSize: [10, 20, 30, 40, 50, 100],
                params: {
                  pn: 1,
                  ps: 10,
                  tc:0,
                  purchaseId: '',
                  qcOrderNo: '',
                  qcStatusDictCode: 'WAITING_QC',
                  serviceProviderId: '',
                  sorts: [
                    {
                      nativeSql: true,
                      orderBy: '',
                      orderType: 'DESC',
                      resultMapId: ''
                    }
                  ]
                },
                tabData:[],
                selectedDate: [],
                selectedNumber: []
            }
        },
        methods:{
            getSort(val, key) {
                console.log(val, key)
            },
            handleSizeChange(val) {
              this.params.pn = val;
            },
            pageSizeChange(val) {
              this.params.ps = val;
            },
            checked(item) {
              this.selectedDate = item
              var obj=[]
              this.selectedDate.forEach(item => {
                obj.push(item.id.value);
              });
              this.selectedNumber=obj
            },
            inputEnter(val) {
              console.log(val)
              if (!val.keyType) return this.$message('请选中搜索类型');
              if (!val.key) return this.$message('搜索内容不能为空');
              if (val.keyType == '1') {
                this.params.qcOrderNo = val.key
              }
              this.getQcOrderList()
            },
            onAction(item, type) {
              //点击后跳转到此验货单详情页面
              this.$windowOpen({
                url: '',
                params: {

                }
              });
            },
            download() {
              this.$ajax.post(this.$apis.download_order, {ids:this.selectedNumber})
                .then((res) => {
                  console.log(res)
                })
                .catch((res) => {
                  console.log(res)
                });
            },
            //获取表格data
            getQcOrderList(){
              this.loading = true
              this.$ajax.post(this.$apis.post_qc_page,this.params)
                .then(res => {
                    this.loading = false
                    res.tc ? this.params.tc = res.tc : this.params.tc = this.params.tc;
                    this.tabData = this.$getDB(this.$db.warehouse.qcOrderTable, res.datas);
                })
                .catch((res) => {
                   this.loading = false
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
