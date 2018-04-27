<template>
    <div class="message">
        <div class="head">
            <el-button @click="manageMessage">{{$i._baseText.messageManagement}}</el-button>
            <el-button type="primary" @click="postRead">{{$i._baseText.markAsRead}}</el-button>
            <!-- <h1 style="color:red">这个页面表格要加一列title</h1> -->
        </div>
        <div class="spe-div">
          <div class="View">
            <el-radio-group size=""  v-model="viewByStatus">
              <el-radio-button label="1">{{$i._messages.platformMessage}}</el-radio-button>
              <el-radio-button label="2">{{$i._messages.companyMessage}}</el-radio-button>
              <el-radio-button label="3">{{$i._messages.messageSetting}}</el-radio-button>
            </el-radio-group>
          </div>
          <div class="search">
            <select-search  class="search" :options="options" @inputChange="inputEnter" :searchLoad="searchLoad"/>
          </div>
        </div>
      <div class="main">
       <div v-show="isHide">
         <v-table
           :data="tabData"
           @change-checked="changeChecked"
         />
       </div>

        <div v-show="isShow" class="box">
          <el-tabs  type="border-card" @tab-click="handleClick">
              <el-table
                ref="multipleTable"
                :data="messageType"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange" highlight-current-row>
                <el-table-column
                  label="Type"
                  align="center" highlight-current-row>
                  <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                  label="Method"
                  align="center">
                  <template slot-scope="scope">
                    <el-checkbox @change="handleCheckedCitiesChange">Email</el-checkbox>
                    <el-checkbox v-model="checked1" disabled>Platform</el-checkbox>
                  </template>
                </el-table-column>
              </el-table>
              <br>
          </el-tabs>
        </div>
      </div>
    </div>
</template>

<script>
    import { selectSearch, VTable } from '@/components/index';

    export default {
        name: "message",
        components:{
            VTable,
            selectSearch
        },
        data(){
            return{
                searchLoad: false,
                viewByStatus:'',
                isShow:false,
                isHide:true,
                options: [{
                  id: '1',
                  label: 'Tittle'
                }, {
                  id: '2',
                  label: 'Content'
                }],
                activeName: 'System Message',           //激活的tab页的name
                multipleSelection:[],
                currentPage:1,
                messageType:[                           //消息类型
                    {
                        name:'System Message'
                    },
                    {
                        name:'Conpany Message'
                    },
                    {
                        name:'Pending Task'
                    },
                    {
                        name:'Future Task'
                    },
                    {
                        name:'FYI'
                    },
                    {
                        name:'Push'
                    },
                ],
                params: {
                  mark: 0,
                  content: ''
                },
                checked:false,
                checked1:true,
                tabData:[],
                checkedData:[],
                activeName: 'System Message',
                checkValues: [],
                tableData: [{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            changeChecked(item) { //tab 勾选
              this.checkedData = item;
            },
            //管理信息
            manageMessage(){
              if (this.viewByStatus + '' === '1'){
                this.$router.push({
                  path: '/message/messageManagement',
                  query: {
                    type: 1,
                  }
                })
              }else{
                this.$router.push({
                  path: '/message/messageManagement',
                  query: {
                    type: 2,
                  }
                })
              }
            },
          handleCheckedCitiesChange(value){
              console.log(value)
            console.log(this.messageType)
          },
          getTrue(ev){

          },
          inputEnter(val) {
            console.log(val)
            if(!val.keyType) return this.$message('请选中搜索类型');
            if(!val.key) return this.$message('搜索内容不能为空');
            this.params.mark = val.keyType;
            this.params.content = val.key;
            this.searchLoad = true;
          },
          getDataInfo() {
            let url, column;
            this.tabLoad = true;
            column = this.$db.message.table;
            if(this.viewByStatus + '' === '1') {;
              url = this.$apis.post_systemmessage_query;
            } else {
              url = this.$apis.post_companymessage_query;
            };
            this.$ajax.post(url, this.params)
              .then(res => {
                this.tabData = this.$getDB(column, res);
                this.tabLoad = false;
                this.searchLoad = false;
              })
              .catch(() => {
                this.searchLoad = false;
                this.tabLoad = false;
              })
          },
          postRead(){
            let url;
            if(this.viewByStatus + '' === '1'){
              url = this.$apis.post_sys_updateread;
            } else {
              url = this.$apis.post_company_updateread;
            };
            let arr = [];
            _.map(this.checkedData, item => {
              if(!_.isUndefined(item)) arr.push(_.findWhere(item, {'key': 'subscribeId'}).value);
            });
            this.$ajax.post(url, arr)
            .then(res => {
              this.$message('系统将消息置为已读');
            })
            .catch(() => {

            })
          }
        },
        watch: {
          viewByStatus() {
            if(this.viewByStatus == 3){
              this.isShow = true;
              this.isHide = false;
            }else{
              this.isShow = false;
              this.isHide = true;
            }
          },
        },
        created(){
          this.viewByStatus = 1
          this.getDataInfo()
            //  this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
        }
    }
</script>

<style>
    .head{
        padding: 10px 0;
    }
    .box{
      padding-top: 20px;
    }
    /*.speTable >>> .el-table__header-wrapper table thead tr th{*/
        /*font-weight: bold;*/
    /*}*/
    .spe-div{
      padding-top: 20px;
      overflow: hidden;
    }
    .spe-div .View{
      float: left;
    }
    .spe-div .search{
      float: right;
      margin-left: 10px;
      margin-right: 40px;
    }
</style>
