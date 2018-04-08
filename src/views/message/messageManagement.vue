<template>
    <div>
        <div class="head">
            <el-button @click="addNews">{{$t('product.page.addNews')}}</el-button>
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
                        :label="$t('product.page.content')"
                        align="left">
                </el-table-column>
                <el-table-column
                        prop="time"
                        :label="$t('product.page.time')"
                        sortable
                        align="center">
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


        <el-dialog
                class="speDialog"
                title="Add News"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="newsContent">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">发 布</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
            </span>
        </el-dialog>
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
                dialogVisible:false,            //弹出框显示隐藏
                newsContent:'',                 //新增消息的内容
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

            //新增消息
            addNews(){
                this.dialogVisible=true;
            },

            //点击外部取消时的提示
            handleClose(done) {
                console.log('取消了')
                // this.$confirm('确认关闭？')
                //     .then(_ => {
                //         done();
                //     })
                //     .catch(_ => {});
                done();
            }

        }
    }
</script>

<style scoped>
    .head{
        padding: 10px 0;
    }
    .speDialog >>> .el-dialog__footer{
        text-align: center;
    }
</style>