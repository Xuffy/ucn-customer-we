<template>
    <div>
        <div>
            <el-button @click="createRemark" type="primary" plain size="mini">新增</el-button>
        </div>
        <br>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="time"
                    label="Time"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="remark"
                    label="Remark"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="submiter"
                    label="Submiter"
                    align="center">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    align="center">
                <template slot-scope="scope">
                    <el-button @click="checkRemark" type="text" size="small">查看</el-button>
                    <el-button @click="editRemark" type="text" size="small">修改</el-button>
                    <el-button @click="deleteRemark" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage1"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>

        <el-dialog title="新增备注" :visible.sync="addRemarkFormVisible" center width="500px">
            <el-form :model="form">
                <el-form-item label="备注:" :label-width="formLabelWidth">
                    <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                            v-model="form.name">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addRemarkFormVisible = false">提交</el-button>
                <el-button @click="addRemarkFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>

        <el-dialog title="备注查看" :visible.sync="checkRemarkFormVisible" center width="500px">
            <el-form :model="form">

                <el-form-item label="备注:" :label-width="formLabelWidth">
                    {{form.name}}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur debitis deleniti ea, eligendi est magnam numquam perferendis quidem suscipit, veniam voluptatem voluptatibus! Assumenda, corporis impedit in iste minus neque.
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="checkRemarkFormVisible = false">关 闭</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改备注" :visible.sync="editRemarkFormVisible" center width="500px">
            <el-form :model="form">
                <el-form-item label="备注:" :label-width="formLabelWidth">
                    <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                            v-model="form.name">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editRemarkFormVisible = false">提交</el-button>
                <el-button @click="editRemarkFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose"
                center>
            <span>确定删除这条备注吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>


    export default {
        name: "addline-table",
        data(){
            return{
                columns:[
                    {
                        title: '备注',
                        key: 'remark',
                        align:'center',
                    },
                    {
                        title: '操作人',
                        key: 'submiter',
                        align:'center',
                    },
                    {
                        title: '操作时间',
                        key: 'time',
                        align:'center',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align:'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '删除')
                            ]);
                        }
                    }

                ],
                data:[
                    {
                        remark: '只有充钱你才能变得更强',
                        submiter: '麻花藤',
                        time: '2012-02-02',
                    },
                    {
                        remark: '我从不卖假货',
                        submiter: '强东',
                        time: '2013-03-03',
                    },
                ],
                value:'',       //输入框内容
                currentPage1:1,     //当前页
                tableData:[
                    {
                        time:'2018-02-23',
                        remark:'这是一条操作',
                        submiter:'麻花藤',
                    }
                ],

                form: {
                    name: '按时发生付款静安寺浩哥看暗示过看',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },

                addRemarkFormVisible: false,          //新增备注弹出框显示隐藏
                checkRemarkFormVisible:false,         //查看备注弹出框显示隐藏
                editRemarkFormVisible:false,          //编辑备注弹出框显示隐藏
                dialogVisible:false,                  //提示弹出框显示隐藏
                formLabelWidth: '50px',            //弹出框input长度

            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            //新增备注
            createRemark() {
                this.addRemarkFormVisible=true;
            },

            //查看备注
            checkRemark(){
                this.checkRemarkFormVisible=true;
            },

            //修改备注
            editRemark(){
                this.editRemarkFormVisible=true;
            },

            //删除备注
            deleteRemark(){
                // this.$confirm('确定删除这条备注吗？','',{
                //     center: true
                // }).then(_ => {
                //     done();
                // }).catch(_ => {});
                this.dialogVisible=true;
            },


            handleClose(){

            },
        }
    }
</script>
<style>

    .el-dialog__wrapper .el-dialog__header{
        border-bottom: 1px solid #e9eaec;
    }
    .el-dialog__wrapper .el-dialog__body{
        padding: 16px;
    }
    .el-dialog__wrapper .el-form-item--small.el-form-item{
        margin-bottom: 0;
    }
    .el-dialog__wrapper .el-dialog__footer{
        padding: 12px 18px;
    }
    /*.el-message-box__wrapper .el-message-box--center{*/
        /*padding:0;*/
    /*}*/
    /*.el-message-box__wrapper .el-message-box__content{*/
        /*border-bottom: 1px solid #e9eaec;*/
        /*padding: 16px;*/
    /*}*/
    /*.el-message-box__wrapper .el-message-box__title span{*/
        /*font-size: 14px;*/
    /*}*/
    /*.el-message-box__wrapper .el-message-box__header{*/
        /*padding: 14px 16px;*/
        /*line-height: 1;*/
        /*border-bottom: 1px solid #e9eaec;*/
    /*}*/
    /*.el-message-box__wrapper .el-message-box__btns{*/
        /*padding: 12px 18px;*/
    /*}*/
</style>
<style scoped>

</style>