<template>
    <div class="message">
        <div class="head">
            <el-button @click="manageMessage">{{$lang.baseText.messageManagement}}</el-button>
            <!-- <h1 style="color:red">这个页面表格要加一列title</h1> -->
        </div>
        <div class="body">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane :label="$lang.platformMessage" name="System Message">
                    <div class="title">
                        <el-button>{{$lang.baseText.markAsRead}}</el-button>
                        <el-input
                                class="message-input"
                                placeholder="请输入内容"
                                v-model="searchValue">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div class="content">
                        <v-table :data="tableDataList"></v-table>                       
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="$lang.companyMessage" messagename="Message Settings">
                    <el-table
                            ref="multipleTable"
                            :data="messageType"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                label="Message Type"
                                align="center">
                            <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column
                                label="Notification Method"
                                align="center">
                            <template slot-scope="scope">
                                <el-checkbox v-model="checked">Email</el-checkbox>
                                <el-checkbox v-model="checked1" disabled>Platform</el-checkbox>
                            </template>
                        </el-table-column>
                    </el-table>
                    <br>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'

    export default {
        name: "message",
        components:{
            VTable
        },
        data(){
            return{
                tableDataList:[],
                tabPosition: 'left',
                searchValue:'',
                tableData3: [
                    {
                        content:'这是第一条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第二条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第三条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第四条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第一条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第二条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第三条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第四条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第一条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第二条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第三条日志',
                        time:'2018-02-02'
                    },
                    {
                        content:'这是第四条日志',
                        time:'2018-02-02'
                    },
                ],
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
                checked:false,
                checked1:true
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

            //管理信息
            manageMessage(){
                this.$router.push('/message/management');
            },
        },
        created(){
            //  this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
            console.log(this.$lang)
        }
    }
</script>

<style scoped>
    .head{
        padding: 10px 0;
    }
    .message-input{
        width: 300px;
        float: right;
    }

    .speTable >>> .el-table__header-wrapper table thead tr th{
        font-weight: bold;
    }
</style>
