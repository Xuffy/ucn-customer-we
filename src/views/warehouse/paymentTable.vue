<template>
    <div class="payment-table">
        <div class="payment-btn">
            <el-button :disabled="disabledBtn" @click="handleClick" type="primary">申请付款服务</el-button>
            <el-button type="danger" @click="showData">显示数据(测试用按钮)</el-button>
        </div>
        <el-table
                :data="data"
                border
                show-summary
                :summary-method="getSummaries"
                :row-class-name="tableRowClassName"
                style="width: 100%">
            <el-table-column
                    label="#"
                    align="center"
                    width="60">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="paymentNumber"
                    align="center"
                    label="付款编号">
                <template slot-scope="scope">
                    {{scope.row.paymentNumber}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="paymentItem"
                    align="center"
                    label="款项名称"
                    width="140">
                <template slot-scope="scope">
                    <div v-if="scope.row.isEdit || scope.row.isNew">
                        <el-input
                                placeholder="请输入内容"
                                v-model="scope.row.paymentItem"
                                clearable>
                        </el-input>
                    </div>
                    <div v-else>
                        {{scope.row.paymentItem}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="estPayDate"
                    align="center"
                    :label="type==='payment'?'预计付款日期':'预计退款日期'"
                    width="160">
                <template slot-scope="scope">
                    <div v-if="scope.row.isEdit || scope.row.isNew">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.estPayDate"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.estPayDate}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="estAmount"
                    align="center"
                    :label="type==='payment'?'预计付款金额':'预计退款金额'"
                    width="150">
                <template slot-scope="scope">
                    <div v-if="scope.row.isEdit || scope.row.isNew">
                        <el-input-number
                                v-model="scope.row.estAmount"
                                :min="0"
                                :controls='false'
                                label="描述文字">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.estAmount}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="actPayDate"
                    align="center"
                    :label="type==='payment'?'实际付款日期':'实际退款日期'"
                    width="160">
                <template slot-scope="scope">
                    <div v-if="scope.row.isEdit || scope.row.isNew">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.actPayDate"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.actPayDate}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="actAmount"
                    align="center"
                    :label="type==='payment'?'实际付款金额':'实际退款金额'"
                    width="150">
                <template slot-scope="scope">
                    <div v-if="scope.row.isEdit || scope.row.isNew">
                        <el-input-number
                                v-model="scope.row.actAmount"
                                :min="0"
                                :controls='false'
                                label="描述文字">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.actAmount}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="available"
                    align="center"
                    label="有效性"
                    width="120">
                <template slot-scope="scope">
                    {{scope.row.available===1?'待确认':(scope.row.available===2?'已确认':'无效')}}
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    align="center"
                    width="120">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-button @click="saveNewItem(scope.row)" type="text" size="small">保存</el-button>
                        <el-button v-if="isBuyer" @click="cancelSaveNewItem(scope.row)" type="text" size="small">取消</el-button>
                    </div>
                    <div v-else>
                        <!--是否处在编辑状态-->
                        <div v-if="scope.row.isEdit">
                            <el-button @click="saveChange(scope.row)" type="text" size="small">保存</el-button>
                            <el-button v-if="isBuyer" @click="cancelChange(scope.row)" type="text" size="small">取消</el-button>
                        </div>
                        <div v-else>
                            <div v-if="scope.row.available===1 || scope.row.available===2">
                                <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                                <el-button v-if="isBuyer" @click="abandon(scope.row)" type="text" size="small">作废</el-button>
                            </div>
                            <div v-if="scope.row.available===3">
                                <el-button v-if="isBuyer" @click="recover(scope.row)" type="text" size="small">恢复</el-button>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "payment-table",
        props:{
            data:{
                type:Array,
                default:[]
            },
            isBuyer:{           //是否是采购商页面,默认为false
                type:Boolean,
                default:true
            },
            type:{
                type:String,
                default:'payment'
            }
        },
        data(){
            return{
                copyData:[],            //用于还原操作时的备份数据
                disabledBtn:false,      //是否禁用顶部按钮，在付款类型时才可能禁用
                pickerOptions1: {       //日期组件使用
                    // disabledDate(time) {
                    //     return time.getTime() > Date.now();
                    // },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
            }
        },
        methods:{
            showData(){
                console.log(this.data,'data')
            },

            //无效栏变灰
            tableRowClassName({row, rowIndex}) {
                if(row.available===3){
                    return 'warning-row';
                }
                return '';
            },


            //统计
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }else if(index === 4 || index === 6){
                        const values = data.map(item => {
                            if(item.available===2){
                                return Number(item[column.property])
                            }
                        });
                        if (!values.every(value => isNaN(value))) {
                            sums[index] = values.reduce((prev, curr) => {
                                const value = Number(curr);
                                if (!isNaN(value)) {
                                    return prev + curr;
                                } else {
                                    return prev;
                                }
                            }, 0);
                            // sums[index] += ' 元';
                        } else {
                            sums[index] = '0';
                        }
                    }

                });
                return sums;
            },


            //顶部按钮点击事件
            handleClick(){
                if(this.tableType==='payment'){
                    this.$emit('btnClick',this.data);
                    this.disabledBtn=true;
                }else if(this.tableType==='refund'){

                }
            },


            //编辑
            edit(e){
                this.$set(e,'isEdit',true);
            },

            //作废(调用接口之后也要同步更新copyData)
            abandon(e){
                this.$confirm('确定作废该条目?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    e.available=3;
                    this.$emit('restoreData',e);
                    let key;
                    this.copyData.forEach((v,k)=>{
                        if(v.paymentNumber===e.paymentNumber){
                            key=k;
                        }
                    });
                    this.copyData.splice(key,1,e);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {

                });
            },

            //恢复按钮(调用接口之后也要同步更新copyData)
            recover(e){
                this.$confirm('确定恢复该条目?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    e.available=1;
                    this.$emit('restoreData',e);
                    let key;
                    this.copyData.forEach((v,k)=>{
                        if(v.paymentNumber===e.paymentNumber){
                            key=k;
                        }
                    });
                    this.copyData.splice(key,1,e);
                    this.$message({
                        type: 'success',
                        message: '恢复成功!'
                    });
                }).catch(() => {

                });
            },

            //保存修改(调用接口之后也要同步更新copyData)
            saveChange(e){
                //先判断款项名称，预计付款日期，预计付款金额都不能为空
                if(!e.paymentItem || !e.estPayDate || !e.estAmount){
                    this.$message.error('款项名称，预计付款日期，预计付款金额不能为空');
                }else{
                    e.isEdit=false;
                    this.$emit('restoreData',e);
                    let key;
                    this.copyData.forEach((v,k)=>{
                        if(v.paymentNumber===e.paymentNumber){
                            key=k;
                        }
                    });
                    this.copyData.splice(key,1,e);
                }
            },

            //取消修改
            cancelChange(e){
                e.isEdit=false;
                let data;
                this.copyData.forEach(v=>{
                    if(v.paymentNumber===e.paymentNumber){
                        data=v;
                    }
                });
                this.$emit('restoreData',data);
            },

            //保存新条目
            saveNewItem(e){
                if(!e.paymentItem || !e.estPayDate || !e.estAmount){
                    this.$message.error('款项名称，预计付款日期，预计付款金额不能为空');
                }else{
                    e.isNew=false;
                    this.copyData.push(Object.assign({},e));
                    this.disabledBtn=false;
                }
            },

            //取消保存新条目
            cancelSaveNewItem(){
                let len=this.data.length;
                this.data.splice(len-1,1);
                this.disabledBtn=false;
            },



            //深克隆方法
            copyArr(arr){
                return arr.map((e)=>{
                    if(typeof e === 'object'){
                        return Object.assign({},e)
                    }else{
                        return e
                    }
                })
            },
        },
        created(){
            //把data备份，还原的时候emit到父组件进行还原
            this.copyData=this.copyArr(this.data);
        },
        watch:{

        }
    }
</script>
<style>
    .el-table .warning-row {
        background: rgba(237, 237, 237,.5);
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>
<style scoped>
    /*日期选择框宽度*/
    .chooseDate{
        width:140px;
    }
    .payment-btn{
        padding: 10px 0;
    }

</style>