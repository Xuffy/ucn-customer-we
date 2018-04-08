<template>
    <div class="paymentTable">
        <div>
            <span class="title" style="margin-right: 10px">{{title}}</span>
            <el-button :disabled="disabledBtn.disabledBtn" @click="askForPayment" type="primary" size="mini">{{btnInfo}}</el-button>
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
                    v-for="v in columns"
                    :key="v.prop"
                    :label="v.label"
                    align="center"
                    :prop="v.prop"
                    :width="v.width?v.width:100">
                <template slot-scope="scope">
                    <div v-if="scope.row.isNew || scope.row.isModify">
                        <div v-if="!v.type || v.type==='Text'">
                            {{data.data[scope.$index][v.prop]}}
                        </div>
                        <div v-if="v.type==='Input'">
                            <el-input size="mini" v-model="data.data[scope.$index][v.prop]" placeholder="请输入内容"></el-input>
                        </div>
                        <div v-if="v.type==='Date'">
                            <el-date-picker
                                    class="chooseDate"
                                    size="mini"
                                    v-model="data.data[scope.$index][v.prop]"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                        <div v-if="v.type==='NumberInput'">
                            <el-input-number
                                    class="payMoney"
                                    size="mini"
                                    v-model="data.data[scope.$index][v.prop]"
                                    @change="handleChange"
                                    :min="0"
                                    label="金额"
                                    :controls="false">
                            </el-input-number>
                        </div>
                    </div>
                    <div v-else>
                        {{data.data[scope.$index][v.prop]}}
                    </div>
                </template>
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
                        <div v-if="data.type==='refund'">
                            <el-button type="text">确认</el-button>
                        </div>
                        <div v-if="data.type==='payment'">
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

    /**
     *
     *           <pay-table
     *               :columns="columns"
     *               :title="payTitle"
     *               :btnInfo="btnInfo"
     *               :data="payData"
     *               :disabledBtn="disabledBtn"
     *               @btnClick="handleBtnClick"
     *               :url="queryUrl">
     *           </pay-table>
     *
     *
     *      @param { columns }  -表头配置
     *          columns:[
     *              {
     *                    label:'付款编号',     //表头文字显示
     *                    type:'Text',         //类型:Text,Input,Select,Date,NumberInput
     *                                               不传的话默认是Text纯文本显示
     *                    width:'100',         //表格一列的宽度，不传的话默认是100，可以自行调整
     *                    prop:'paymentId',    //表头对应的字段名
     *               },
     *           ],
     *
     *       @param { title }  -顶部按钮旁边标题文字，如果不传则不显示
     *       @param { btnInfo }  -顶部按钮文字
     *       @param { data }  -表格数据
     *          表格数据格式(以payData为例):
     *          payData:{
     *              data:[              //必传，字段名必须与上面columns里的字段一一对应
     *                                  //一一对应包括字段名和字段顺序
     *                  {
                            paymentId: '125547',
                            payName:'赈灾款',
                            payDate: '1992-02-02',
                            payDateActually:'1992-02-02',
                            payMoney:998,
                            payMoneyActually:'1902',
                            waitMoney:'',
                            status:1
                        },
     *              ],
     *              type:'',            //必传,payment(处理付款)或者refund(处理退款)
     *          }
     *
     *       @param { disabledBtn }  -是否禁用顶部按钮
     *          格式: //不能单独传true/false,必须包在对象里
     *              {
     *                  disabledBtn:true/false
     *              }
     *
     *       @function { btnClick }  -按钮点击事件
     *          如果是处理付款的表格，在新增行，push数据时，需要在对象里加上inNew:true
     *          payData.data.push({
     *              paymentId: '124124',
                    payName:'',
                    payDate: '',
                    payMoney:'',
                    payDateActually:'',
                    payMoneyActually:'',
                    isNew:true,                 !!!!!!!!!!!!!
     *          })
     *
     *       @param {queryUrl}  -点击保存时的url，等接口出来了再后续处理
     *
     *
     * */







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
            },
            columns:{
                type:Array,
                default:[]
            },
            btnInfo:{
                type:String,
                default:''
            },
            disabledBtn:{
                type:Object,
                default:{
                    disabledBtn:false
                }
            },
            queryUrl:{
                type:String,
                default:''
            }
        },
        computed:{
            // isDisabledBtn: {
            //     get(){
            //         return this.disabledBtn;
            //     },
            //     set(value){
            //         // this.isDisabledBtn=value;
            //         console.log(value,'???')
            //     }
            // }
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
                this.$emit('btnClick');
                // this.data.data.push({
                //     paymentId: '124124',
                //     payName:'赈灾款',
                //     date: '1992-02-02',
                //     dateActually:'1992-02-02',
                //     money:'998',
                //     moneyActually:'1902',
                //     waitMoney:'',
                //     isNew:true
                // });
                // this.disableBtn=true;
            },

            //保存一行数据
            saveRow(e){
                let canSave=true;
                _.map(this.columns,v=>{
                    if(v.notEmpty){
                        _.map(e,(m,n)=>{
                            if(n===v.prop){
                                if(!m){
                                    //存在一个没有填的，就不能保存了
                                    canSave=false;
                                }
                            }
                        })
                    }
                });
                if(!canSave){
                    let message='';
                    if(this.data.type==='refund'){
                        message='款项名称/预计退款日期/预计退款金额不能为空';
                    }else if(this.data.type==='payment'){
                        message='款项名称/预计收款日期/预计收款金额不能为空';
                    }
                    this.$message({
                        message: message,
                        type: 'warning'
                    });
                }else{
                    this.$set(e,'isNew',false);
                    this.disabledBtn.disabledBtn=false;
                    this.cacheData=this.copyArr(this.data.data);
                }
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

                let canSave=true;
                _.map(this.columns,v=>{
                    if(v.notEmpty){
                        _.map(e,(m,n)=>{
                            if(n===v.prop){
                                if(!m){
                                    //存在一个没有填的，就不能保存了
                                    canSave=false;
                                }
                            }
                        })
                    }
                });
                if(!canSave){
                    let message='';
                    if(this.data.type==='refund'){
                        message='款项名称/预计退款日期/预计退款金额不能为空';
                    }else if(this.data.type==='payment'){
                        message='款项名称/预计收款日期/预计收款金额不能为空';
                    }
                    this.$message({
                        message: message,
                        type: 'warning'
                    });
                }else{
                    //调用接口，如果返回成功，则执行后续操作，如果失败，则还原数据并提示保存失败
                    let success=false;
                    if(success){
                        this.$set(e,'isModify',false);

                        this.$set(e,'conform',false);                       //修改完数据之后肯定是待确认

                        this.cacheData=this.copyArr(this.data.data);        //更新克隆的data
                    }else{
                        this.cancelModify(e);               //取消修改
                        this.$message.error('保存更改失败');
                    }
                }
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
                            console.log(column,"xxxx")
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
            }
            else{
                this.showPage=true;
            }
            this.cacheData=this.copyArr(this.data.data);           //备份数组
        },
        watch:{
            'data.data'(n){
                if(n.length>=5){
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