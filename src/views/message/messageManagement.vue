<template>
    <div>
        <div class="head">
            <el-button>新增消息</el-button>
        </div>
        <div class="body">
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    height="400">
                <el-table-column
                        prop="content"
                        label="内容"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="时间"
                        sortable
                        align="center">
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center">
                    <template slot-scope="scope">
                        <el-button @click="publish(scope.row)" type="text">发布</el-button>
                        <el-button type="text">修改</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
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
    export default {
        name: "message-management",
        data(){
            return{
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
                currentPage:1,
            }
        },
        methods:{
            //表格操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            //发布
            publish(e){
                console.log(e)
            },

            //分页操作
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
</style>