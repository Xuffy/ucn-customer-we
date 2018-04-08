<template>
    <div class="logs">
        <div class="title">
            {{$t('product.page.logs')}}
        </div>
        <div class="head-btn">
            <!--<el-input-->
                    <!--class="message-input"-->
                    <!--placeholder="请输入内容"-->
                    <!--v-model="searchValue">-->
                <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
            <!--</el-input>-->
            <select-search :selectHide="true" class="search"></select-search>
            <el-button class="btn">{{$t('product.page.download')}}</el-button>
        </div>

        <div class="body">
            <el-table
                    class="logs-table"
                    :data="tableData"
                    style="width: 100%"
                    :default-sort = "{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                        prop="type"
                        :label="$t('product.tableData.operationType')"
                        sortable
                        align="center"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="describe"
                        :label="$t('product.tableData.description')"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="date"
                        :label="$t('product.tableData.operationDate')"
                        sortable
                        align="center"
                        width="180">
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

    </div>
</template>

<script>

    import selectSearch from '@/components/common/fnCompon/selectSearch'

    export default {
        name: "logs",
        components:{
            selectSearch
        },
        data(){
            return{
                searchValue:'',         //搜索框搜索内容
                tableData: [
                    {
                        type:'系统消息',
                        describe:'这是一条神奇的消息',
                        date:'2018-02-22',
                        remark:'哇哈哈哈哈哈哈哈'
                    },
                    {
                        type:'系统消息',
                        describe:'这是一条神奇的消息',
                        date:'2018-02-22',
                        remark:'哇哈哈哈哈哈哈哈'
                    },
                    {
                        type:'系统消息',
                        describe:'这是一条神奇的消息',
                        date:'2018-02-22',
                        remark:'哇哈哈哈哈哈哈哈'
                    },
                ],
                currentPage:1
            }
        },
        methods:{
            formatter(row, column) {
                return row.remark;
            },


            //分页caoz
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        }
    }
</script>

<style scoped>
    .head{
        padding: 10px 0;
    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .head-btn{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .head-btn:after{
        display: table;
        clear: both;
        content: '';
    }
    .head-btn .search{
        float: left;
    }

    .head-btn .btn{
        float: left;
    }



    .body{
        margin-top: 15px;
    }
    .message-input{
        /*width: 300px;*/
        /*float: right;*/
    }
    .logs-table >>> .el-table__header-wrapper>table>thead>tr>th{
        background-color: #f3f3f3;
    }
</style>