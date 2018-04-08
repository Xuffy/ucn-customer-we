<template>
    <div class="message">
        <div class="head">
            <el-button @click="manageMessage">{{$t('product.page.messageManagement')}}</el-button>
        </div>
        <div class="body">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane :label="$t('product.page.systemMessage')" name="System Message">
                    <div class="title">
                        <el-button>{{$t('product.page.markAsRead')}}</el-button>
                        <el-input
                                class="message-input"
                                placeholder="请输入内容"
                                v-model="searchValue">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div class="content">
                        <el-table
                                class="speTable"
                                ref="multipleTable"
                                :data="tableData3"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange"
                                height="350">
                            <el-table-column
                                    type="selection"
                                    width="40">
                            </el-table-column>
                            <el-table-column
                                    :label="$t('product.page.content')"
                                    align="left">
                                <template slot-scope="scope">
                                    <div style="font-weight: bold;color:#3f9eff;">
                                        {{ scope.row.content }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="time"
                                    :label="$t('product.page.time')"
                                    sortable
                                    align="center">
                                <!--<template slot-scope="scope">{{ scope.row.content }}</template>-->
                            </el-table-column>
                        </el-table>
                        <br>
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.messageSettings')" name="Message Settings">
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
    export default {
        name: "message",
        data(){
            return{
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
                this.$router.push('/product/messageManagement');
            },
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