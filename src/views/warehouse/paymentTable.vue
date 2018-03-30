<template>
    <div class="paymentTable">
        <div>
            <span class="title" style="margin-right: 10px">付款信息</span>
            <el-button :disabled="disableBtn" @click="askForPayment" type="primary" size="mini">申请服务付款</el-button>

            <el-button v-if="disableBtn" @click="surePay" type="primary" size="mini">OK</el-button>
            <el-button v-if="disableBtn" @click="cancelPay" type="primary" size="mini">Cancel</el-button>
        </div>
        <el-table
                :data="data"
                border
                height="300"
                style="width: 100%; margin-top: 20px"
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
                    <div v-if="scope.row.isNew">
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
            <el-table-column
                    label="付款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.payDate"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.payDate}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="实际付款日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-date-picker
                                class="chooseDate"
                                size="mini"
                                v-model="scope.row.payDateActually"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <div v-else>
                        {{scope.row.payDateActually}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="收款金额"
                    align="center"
                    width="150"
                    prop="acceptMoney">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.acceptMoney"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.acceptMoney}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="实际收款金额"
                    align="center"
                    width="150"
                    prop="payMoney">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.acceptMoneyActually"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.acceptMoneyActually}}
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
                    <el-button type="text">有效</el-button>
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
                type:Array,
                default:[],
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
                this.data.push({
                    paymentId: '124124',
                    payName:'赈灾款',
                    payDate: '1992-02-02',
                    payDateActually:'1992-02-02',
                    acceptMoney:'998',
                    acceptMoneyActually:'1902',
                    waitMoney:'',
                    isNew:true
                });
                this.disableBtn=true;
            },

            //确定付款
            surePay(){
                this.disableBtn=false;
                console.log(this.data)
                _.map(this.data,e=>{
                    if(e.isNew){
                        this.$set(e,'isNew',false);
                    }
                });
            },

            //取消付款
            cancelPay(){
                //取消付款要把之前那条数据删除了
                let len=this.data.length;
                this.data.splice(len-1,1);
                this.disableBtn=false;
            },

            //table合计规则
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                // console.log(data)
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                    }
                    else if(index===5){
                        const values = data.map(item => Number(item[column.property]));
                        if (!values.every(value => isNaN(value))) {
                            sums[7] = values.reduce((prev, curr) => {
                                const value = Number(curr);
                                if (!isNaN(value)) {
                                    return prev + curr;
                                } else {
                                    return prev;
                                }
                            }, 0);
                            sums[7]=this.serviceMoney-sums[7];
                            // console.log(sums[index],'????')
                            // sums[index] += ' 元';
                        }else {
                            sums[index] = 'N/A';
                        }
                    }
                });
                return sums;
            },

            //如果无效则这一行变色
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                }
                return '';
            }
        },
        created(){
            if(this.data.length<10){
                //如果数据长度小于10条，就不显示分页组件
                this.showPage=false;
            }else{
                this.showPage=true;
            }
        },
        watch:{
            data(n){
                if(n.length>=10){
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