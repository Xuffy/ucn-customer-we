<template>
    <div class="paymentTable">
        <div>
            <span style="margin-right: 10px">货物付款</span>
            <el-button :disabled="disableBtn" @click="payment" type="primary" size="mini">申请付款</el-button>

            <el-button v-if="disableBtn" @click="surePay" type="primary" size="mini">OK</el-button>
            <el-button v-if="disableBtn" @click="cancelPay" type="primary" size="mini">Cancel</el-button>
        </div>
        <el-table
                :data="data"
                border
                height="300"
                show-summary
                style="width: 100%; margin-top: 20px"
                :summary-method="getSummaries"
                @selection-change="handleSelectionChange">
            <el-table-column
                    label="#"
                    align="center"
                    width="50">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column
                    label="编号"
                    align="center"
                    width="100">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column
                    label="日期"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
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
                    label="款项类型"
                    align="center"
                    width="120">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-select
                                class="chooseType"
                                size="mini"
                                v-model="scope.row.moneyType"
                                placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div v-else>
                        {{scope.row.moneyType}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="付款金额"
                    align="center"
                    width="150"
                    prop="payMoney">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew">
                        <el-input-number
                                class="payMoney"
                                size="mini"
                                v-model="scope.row.payMoney"
                                @change="handleChange"
                                :min="0"
                                label="金额"
                                :controls="false">
                        </el-input-number>
                    </div>
                    <div v-else>
                        {{scope.row.payMoney}}
                    </div>
                </template>
                <!--<template slot-scope="scope">-->
                    <!--{{scope.row.payMoney}}-->
                <!--</template>-->
            </el-table-column>
            <el-table-column
                    label="收款金额"
                    align="center">
                <template slot-scope="scope">
                    {{scope.row.receiveMoney}}
                </template>
            </el-table-column>
            <el-table-column
                    label="待付金额"
                    align="center"
                    prop="waitPayMoney">
                <!--<template slot-scope="scope">-->
                    <!--{{scope.row.waitPayMoney}}-->
                <!--</template>-->
            </el-table-column>
            <el-table-column
                    label="待收金额"
                    align="center">
                <template slot-scope="scope">
                    {{scope.row.waitReceiveMoney}}
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
            payment(){
                this.data.push({
                    id: '124124',
                    date: '',
                    moneyType: '预付款',
                    payMoney: '',
                    receiveMoney: '',
                    waitPayMoney:'',
                    waitReceiveMoney:'',
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
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                    }
                    else if(index===4){
                        const values = data.map(item => Number(item[column.property]));
                        if (!values.every(value => isNaN(value))) {
                            sums[6] = values.reduce((prev, curr) => {
                                const value = Number(curr);
                                if (!isNaN(value)) {
                                    return prev + curr;
                                } else {
                                    return prev;
                                }
                            }, 0);
                            sums[6]=this.serviceMoney-sums[6];
                            // console.log(sums[index],'????')
                            // sums[index] += ' 元';
                        }else {
                            sums[index] = 'N/A';
                        }
                    }
                });
                return sums;
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
    .chooseDate{
        width: 140px;
    }
    .chooseType{
        width: 100px;
    }
</style>