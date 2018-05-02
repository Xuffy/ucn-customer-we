<template>
    <div class="create-inbound">
        <div class="title">
            {{$i._warehouse.basicInfo}}
        </div>
        <el-form :modal="inboundData" ref="basicInfo" class="speForm" label-width="200px" :label-position="labelPosition">
            <el-row>
                <el-col class="speCol" v-for="v in $db.warehouse.inbound" v-if="v.belong==='basicInfo'" :key="v.key" :xs="24" :sm="v.fullLine?24:8" :md="v.fullLine?24:8" :lg="v.fullLine?24:8" :xl="v.fullLine?24:8">
                    <el-form-item :prop="v.key" :label="v.label">
                        <div v-if="v.showType==='input'">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    :disabled="v.disabled"
                                    v-model="inboundData[v.key]"
                                    placeholder="please input"></el-input>
                        </div>
                        <div v-else-if="v.showType==='select'">
                            <el-select class="speInput" size="mini" v-model="inboundData[v.key]" placeholder="please choose">
                                <el-option
                                        v-for="item in v.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div v-else-if="v.showType==='textarea'">
                            <el-input
                                    class="speInput"
                                    type="textarea"
                                    autosize
                                    placeholder="please input"
                                    v-model="inboundData[v.key]">
                            </el-input>
                        </div>
                        <div v-else-if="v.showType==='number'">
                            <el-input-number
                                    class="speInput"
                                    size="mini"
                                    v-model="inboundData[v.key]"
                                    :controls="false"
                                    :min="0"
                                    label="please input"></el-input-number>
                        </div>
                        <div v-else-if="v.showType==='dropdown'">
                            <drop-down
                                    class="speInput"
                                    :list="dropData"
                                    :defaultProps="defaultProps"
                                    v-model="inboundData[v.key]"
                                    ref="dropDown"></drop-down>
                        </div>
                        <div v-else-if="v.showType==='date'">
                            <el-date-picker
                                    class="speInput"
                                    size="mini"
                                    v-model="inboundData[v.key]"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions1">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$i._warehouse.productInfo}}
        </div>
        <div class="btns">
            <el-button @click="addProduct">{{$i._warehouse.addProduct}}</el-button>
            <el-button @click="removeProduct" :disabled="disableRemoveProduct" type="danger">{{$i._warehouse.removeProduct}}</el-button>
        </div>
        <v-table
                v-loading="loadingProductTable"
                :data="productData"
                @change-checked="changeProductChecked"></v-table>


        <div class="total">
            <div class="title">
                {{$i._warehouse.total}}
            </div>
            <el-form :modal="inboundSummary" label-width="200px" :label-position="labelPosition">
                <el-row>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="asd" :label="$i._warehouse.totalCartonQty">
                            <el-input size="mini" class="speInput" :disabled="true" v-model="inboundSummary.totalCartonQty"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="asd" :label="$i._warehouse.totalGrossWeight">
                            <el-input size="mini" class="speInput" :disabled="true" v-model="inboundSummary.totalCartonQty"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="asd" :label="$i._warehouse.totalVolume">
                            <el-input size="mini" class="speInput" :disabled="true" v-model="inboundSummary.totalCartonQty"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="asd" :label="$i._warehouse.totalNetWeight">
                            <el-input size="mini" class="speInput" :disabled="true" v-model="inboundSummary.totalCartonQty"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="asd" :label="$i._warehouse.totalSkuQty">
                            <el-input size="mini" class="speInput" :disabled="true" v-model="inboundSummary.totalCartonQty"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>

        <div class="footBtn">
            <el-button :loading="disabledSubmit" @click="submit" type="primary">{{$i._warehouse.submit}}</el-button>
            <el-button @click="cancel">{{$i._warehouse.cancel}}</el-button>
        </div>

        <el-dialog
                title="Add Product From Order"
                :visible.sync="addOrderDialogVisible"
                width="70%">

            <el-form :modal="orderProduct" ref="orderProduct" label-width="200px" :label-position="labelPosition">
                <el-row>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="orderNo" :label="$i._warehouse.orderNo">
                            <el-input size="mini" class="speInput" v-model="orderProduct.orderNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="skuCode" :label="$i._warehouse.skuCode">
                            <el-input size="mini" class="speInput" v-model="orderProduct.skuCode"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="skuNameCn" :label="$i._warehouse.nameCn">
                            <el-input size="mini" class="speInput" v-model="orderProduct.skuNameCn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="skuBarCode" :label="$i._warehouse.barCode">
                            <el-input size="mini" class="speInput" v-model="orderProduct.skuBarCode"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div class="search-btn">
                <el-button :disabled="disabledSearch" :loading="disabledClickSubmit" @click="searchOrderData" type="primary">{{$i._warehouse.search}}</el-button>
                <el-button :disabled="disabledCancelSearch" @click="clearSearchData">{{$i._warehouse.clear}}</el-button>
            </div>

            <v-table
                    v-loading="loadingTable"
                    :data="tableDataList"
                    @change-checked="changeChecked"></v-table>

            <div slot="footer" class="dialog-footer">
                <el-button :disabled="disabledSearch" type="primary" @click="postData">确 定</el-button>
                <el-button :disabled="disabledCancelSearch" @click="addOrderDialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>

    import VTable from '@/components/common/table/index'

    export default {
        name: "createInbound",
        components:{
            VTable
        },
        data(){
            return{
                /**
                 * 页面基础配置
                 * */
                labelPosition:'right',
                disableRemoveProduct:true,
                disabledSubmit:false,
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
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
                addOrderDialogVisible:false,
                productTableData:[],
                selectProductList:[],
                loadingProductTable:false,

                /**
                 * 外部展示数据
                 * */
                productIds:[],                  //用于存储用于外部展示的产品ID
                productData:[],                 //添加到外部用于展示的产品详细信息



                inboundData:{
                    inboundNo:'',       //新建的时候不传
                    inboundDate:'',
                    warehouseNo:'',
                    warehouseName:'',
                    inboundTypeDictCode:'',
                    warehouseManager:'',
                    remark:'',
                    purchaser:'',
                    carrier:'',
                    carrierPhone:'',
                    timeZone:'',
                    attachment:'',
                    inboundSkuBeanCreateParams:[],      //新增的产品数组
                    //新增的产品总计
                    skuTotalCartonQty: 0,
                    skuTotalGrossWeight: 0,
                    skuTotalNetWeight: 0,
                    skuTotalQty: 0,
                    skuTotalVolume: 0,
                },
                //inbound总计
                inboundSummary:{
                    totalCartonQty:0,
                    totalGrossWeight:0,
                    totalVolume:0,
                    totalNetWeight:0,
                    totalSkuQty:0,
                },


                /**
                 * 弹出框数据
                 * */
                selectList:[],
                loadingTable:false,
                tableDataList:[],           //弹出框表格数据

                //btns禁用状态
                disabledSearch:true,
                disabledCancelSearch:true,
                disabledClickSubmit:false,

                //add order product搜索数据
                orderProduct:{
                    orderNo: "",
                    pn: 1,
                    ps: 50,
                    skuCode:"",
                    skuBarCode: "",
                    skuNameCn: "",
                },
            }
        },
        methods:{
            //新增产品
            addProduct(){
                //先把在外部的数据的id取出来，拿到内部去对比
                this.selectList=[];
                this.addOrderDialogVisible=true;
                this.loadingTable=true;
                this.disabledSearch=true;
                this.disabledCancelSearch=true;
                //请求弹出框数据
                this.$ajax.post(this.$apis.get_productInfo,this.orderProduct).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.warehouse.inboundOrderTable, res.datas);
                    // this.productTableData.forEach(v=>{
                    //     this.tableDataList.forEach(m=>{
                    //         if(v.id.value===m.id.value){
                    //             m._disabled=true;
                    //             m._checked=true;
                    //         }
                    //     });
                    // });

                    this.disabledSearch=false;
                    this.disabledCancelSearch=false;
                    this.loadingTable=false;
                }).catch(err=>{
                    this.disabledSearch=false;
                    this.disabledCancelSearch=false;
                    this.loadingTable=false;
                });
            },

            //移除产品
            removeProduct(){
                this.$confirm('确定移除产品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.productTableData=_.difference(this.productTableData,this.selectProductList);
                    this.disableRemoveProduct=true;
                    this.$message({
                        type: 'success',
                        message: '移除成功!'
                    });
                }).catch(() => {
                });
            },

            //改变product table选中状态时触发的事件
            changeProductChecked(e){
                this.selectProductList=e;
            },

            //提交表单
            submit(){
                this.disabledSubmit=true;
                this.$ajax.post(this.$apis.add_inbound,this.inboundData).then(res=>{
                    this.disabledSubmit=false;
                    this.$message({
                        message: '新增成功',
                        type: 'success'
                    });
                    this.$router.push('/sellerWarehouse/inbound');
                }).catch(err=>{
                    this.disabledSubmit=false;
                });
            },

            cancel(){
                window.close();
            },





            /**
             * 弹出框事件
             * */
            searchOrderData(){
                this.loadingTable=true;
                this.disabledClickSubmit=true;
                this.$ajax.post(this.$apis.get_productInfo,this.orderProduct).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.warehouse.inboundOrderTable, res.datas);
                    this.loadingTable=false;
                    this.disabledClickSubmit=false;
                }).catch(err=>{
                    this.loadingTable=false;
                    this.disabledClickSubmit=false;
                });
            },
            clearSearchData(){
                this.orderProduct.orderNo='';
                this.orderProduct.skuCode='';
                this.orderProduct.skuBarCode='';
                this.orderProduct.skuNameCn='';
            },
            changeChecked(e){
                this.selectList=e;
            },
            postData(){
                let arr=this.$copyArr(this.selectList);
                arr.forEach(v=>{
                    if(v._checked && !v._disabled){
                        v._checked=false;
                        v._disabled=false;
                        this.productIds.push(v);
                    }
                });

                this.$ajax.post(this.$apis.get_skuListByIds,[12]).then(res=>{
                    console.log(res)
                }).catch(err=>{

                });

                console.log(this.productIds)
                this.addOrderDialogVisible=false;
            },
        },
        created(){

        },
        watch:{
            selectProductList(n){
                if(n.length>0){
                    this.disableRemoveProduct=false;
                }else{
                    this.disableRemoveProduct=true;
                }
            }
        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 16px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }

    .btns{
        margin-top: 5px;
    }

    .speInput{
        width: 80%;
    }

    .search-btn{
        text-align: center;
    }

    .total{
        margin-top: 80px;
    }

    .footer{
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        /*width: 100%;*/
        padding: 10px;
    }


    .footBtn{
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .dialog-footer{
        text-align: center;
    }


</style>