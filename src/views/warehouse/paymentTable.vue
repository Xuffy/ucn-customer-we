<template>
    <div class="paymentTable">
        <div>
            <span class="title" style="margin-right: 10px">{{title}}</span>
            <el-button :disabled="disableBtn" @click="askForPayment" type="primary" size="mini">申请服务付款</el-button>
        </div>
        <el-table
                :data="data.data"
                border
                height="300"
                style="width: 100%; margin-top: 20px"
                :summary-method="getSummaries"
                show-summary
                :row-class-name="tableRowClassName"
                @selection-change="handleSelectionChange">
            <el-table-column
                    label="序号"
                    align="center"
                    width="50">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column
                    label="付款编号"
                    align="center"
                    width="100">
                <template slot-scope="scope">
                    {{scope.row.paymentId}}
                </template>
            </el-table-column>
            

            <el-table-column
                    label="款项名称"
                    align="center">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-select size="mini" v-model="scope.row.payName" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div v-else>
                        {{scope.row.payName}}
                    </div>
                </template>
            </el-table-column>

            <!--付款显示区域-->
            <el-table-column
                    v-if="data.type==='payment'"
                    label="预计付款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.date"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.date}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='payment'"
                    label="预计付款金额"
                    align="center"
                    width="150"
                    prop="money">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.money"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.money}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='payment'"
                    label="实际付款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.dateActually"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.dateActually}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='payment'"
                    label="实际付款金额"
                    align="center"
                    width="150"
                    prop="moneyActually">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.moneyActually"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.moneyActually}}
                    </div>
                </template>
                <!--<template slot-scope="scope">-->
                    <!--{{scope.row.payMoney}}-->
                <!--</template>-->
            </el-table-column>


            <!--退款显示区域-->
            <el-table-column
                    v-if="data.type==='refund'"
                    label="预计退款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.date"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.date}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='refund'"
                    label="预计退款金额"
                    align="center"
                    width="150"
                    prop="money">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.money"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.money}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='refund'"
                    label="实际退款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.dateActually"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.dateActually}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="data.type==='refund'"
                    label="实际退款金额"
                    align="center"
                    width="150"
                    prop="moneyActually">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.moneyActually"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.moneyActually}}
                    </div>
                </template>
                <!--<template slot-scope="scope">-->
                <!--{{scope.row.payMoney}}-->
                <!--</template>-->
            </el-table-column>

            <el-table-column
                    label="有效性"
                    align="center"
                    prop="waitPayMoney">
                <template slot-scope="scope">
                    <div v-if="scope.row.abandoned">无效</div>
                    <div v-if="!scope.row.abandoned">
                        <span v-if="scope.row.conform">已确认</span>
                        <span v-if="!scope.row.conform">待确认</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    align="center"
                    prop="waitPayMoney">
                <template slot-scope="scope">
                    <div v-if="!scope.row.abandoned">
                        <!--页面新增栏目时的保存取消-->
                        <div v-if="scope.row.isNew && !scope.row.isModify">
                            <el-button @click="saveRow(scope.row)" type="text">保存</el-button>
                            <el-button @click="cancelSaveRow(scope.row)" type="text">取消</el-button>
                        </div>
                        <!--修改一行数据时的保存取消-->
                        <div v-if="!scope.row.isNew && scope.row.isModify">
                            <el-button @click="saveModify(scope.row)" type="text">保存</el-button>
                            <el-button @click="cancelModify(scope.row)" type="text">取消</el-button>
                        </div>
                        <div v-if="!scope.row.isNew && !scope.row.isModify">
                            <el-button @click="modifyRow(scope.row)" type="text">修改</el-button>
                            <el-button @click="abandon(scope.row)" type="text">作废</el-button>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <br>
        <el-pagination
                v-if="showPage"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 50, 100, 200]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="200 ">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        name: "payment-table",
        props:{
            data:{
                type:Object,
                default:{},
            },
            title:{
                type:String,
                default:''
            }
        },
        data(){
            return{
                currentPage:1,
                showPage:true,              //是否显示分页组件
                date:'',                    //日期

                disableBtn:false,           //是否禁用申请付款按钮,默认为false

                //总的服务金额，实际是由接口获取，现在是假数据

                serviceMoney:10000,

                options: [
                    {
                        value: '预付款',
                        label: '预付款'
                    },
                    {
                        value: '尾款',
                        label: '尾款'
                    },
                ],

                cacheData:[],

            }
        },
        methods:{
            //表格选择的时间
            handleSelectionChange(e){

            },

            handleSizeChange(){

            },

            handleCurrentChange(){

            },

            //数字输入框变化方法
            handleChange(){

            },

            //申请付款
            askForPayment(){
                this.data.data.push({
                    paymentId: '124124',
                    payName:'赈灾款',
                    date: '1992-02-02',
                    dateActually:'1992-02-02',
                    money:'998',
                    moneyActually:'1902',
                    waitMoney:'',
                    isNew:true
                });
                this.disableBtn=true;
            },

            //保存一行数据
            saveRow(e){
                this.$set(e,'isNew',false);
                this.disableBtn=false;
                this.cacheData=this.copyArr(this.data.data);
            },
            //取消保存
            cancelSaveRow(e){
                let len=this.data.data.length;
                this.data.data.splice(len-1,1);
                this.disableBtn=false;
            },

            //修改一行数据
            modifyRow(e){
                this.$set(e,'isModify',true);
                // this.cacheData=this.copyArr(this.tableData);

            },

            //保存修改
            saveModify(e){
                this.$set(e,'isModify',false);
                //这里要调用接口,最后保存cacheData
                this.cacheData=this.copyArr(this.data.data);
                this.$emit('saveNewItem',e);
            },

            //取消修改
            cancelModify(e){
                let d=_.findWhere(this.data.data,{paymentId:e.paymentId})
                _.map(this.cacheData,(val,index)=>{
                    if(d.paymentId === val.paymentId){
                        let obj=this.copyArr([val])[0];
                        obj.isModify=false;
                        this.$set(this.data.data,index,obj);
                    }
                });
            },

            //作废
            abandon(e){
                this.$confirm('确定作废该记录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '作废成功!'
                    });
                    this.$set(e,'abandoned',true);
                }).catch(() => {

                });
            },

            //如果无效则这一行变色
            tableRowClassName({row, rowIndex}) {
                if(row.abandoned){
                    return 'warning-row';
                }else{
                    return '';
                }
            },
            //total总计计算方法
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }else if(index===4 || index===6){
                        const values = data.map(item => {
                            if(!item.abandoned){
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
                        }
                    }
                });
                return sums;
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
            if(this.data.data.length<10){
                //如果数据长度小于10条，就不显示分页组件
                this.showPage=false;
            }else{
                this.showPage=true;
            }
            _.map(this.data.data,v=>{
                if(v.payDate || v.refundDate){
                    this.$set(v,'date',v.payDate || v.refundDate);
                }
                if(v.payMoney || v.refundMoney){
                    this.$set(v,'money',v.payMoney || v.refundMoney);
                }
                if(v.payDateActually || v.refundDateActually){
                    this.$set(v,'dateActually',v.payDateActually || v.refundDateActually);
                }
                if(v.payMoneyActually || v.refundMoneyActually){
                    this.$set(v,'moneyActually',v.payMoneyActually || v.refundMoneyActually);
                }
            });

            this.cacheData=this.copyArr(this.data.data);           //备份数组

        },
        watch:{
            'data.data'(n){
                if(n.length>=3){
                    this.showPage=true;
                }else{
                    this.showPage=false;
                }
            }
        }
    }
</script>

<style scoped>
    .paymentTable{
        padding: 10px 0;
    }
    .title{
        font-size: 14px;
        font-weight: bold;
    }
    .chooseDate{
        width: 140px;
    }
    .chooseType{
        width: 100px;
    }


    .el-table >>> .warning-row {
        background: #fafafa;
    }

</style>