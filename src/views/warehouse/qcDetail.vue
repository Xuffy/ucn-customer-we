<template>
    <div class="qc-detail" v-loading="loadingData">
        <div class="title">
            <span>{{$i.warehouse.qcOrderDetail}}</span>
        </div>
        <div class="second-title">
            {{$i.warehouse.basicInfo}}
        </div>
        <div>
            <el-form label-width="190px">
                <el-row class="speZone">
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.qcOrderNo">
                            <el-input
                                    v-model="qcDetail.qcOrderNo"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.qcTypeDictCode">
                            <el-select style="width: 100%" placeholder="service choose" :disabled="true" class="speInput" size="mini" v-model="qcDetail.qcTypeDictCode">
                                <el-option
                                        v-for="item in qcTypeOption"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcDate">
                            <el-date-picker
                                    style="width: 100%"
                                    :disabled="true"
                                    class="speInput"
                                    size="mini"
                                    v-model="qcDetail.qcDate"
                                    align="right"
                                    type="date"
                                    placeholder="service input">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.factoryAddress">
                            <el-input
                                    v-model="qcDetail.factoryAddress"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.factoryContactPhone">
                            <el-input
                                    v-model="qcDetail.factoryContactPhone"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcStatusDictCode">
                            <el-input
                                    v-model="qcDetail.qcStatusDictCode"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcMethodDictCode">
                            <el-select style="width: 100%;" placeholder="service choose" :disabled="true" class="speInput" size="mini" v-model="qcDetail.qcMethodDictCode">
                                <el-option
                                        v-for="item in qcMethodOption"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.surveyor">
                            <el-input
                                    :placeholder="$i.warehouse.serviceChoose"
                                    v-model="qcDetail.surveyor"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.serviceFee">
                            <el-input
                                    :placeholder="$i.warehouse.serviceFill"
                                    v-model="qcDetail.serviceFee"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.serviceName">
                            <el-input
                                    v-model="qcDetail.serviceName"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.exchangeCurrencyDictCode">
                            <el-input
                                    v-model="qcDetail.exchangeCurrencyDictCode"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Time Zone">-->
                            <!--<el-input-->
                                    <!--v-model="qcDetail.timeZone"-->
                                    <!--:disabled="true">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item prop="11" :label="$i.warehouse.remark">
                            <el-input
                                    v-model="qcDetail.remark"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item prop="11" :label="$i.warehouse.attachment">
                            <el-input
                                    v-model="qcDetail.attachment"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="second-title">
            {{$i.warehouse.payment}}
        </div>
        <div class="payment-table">
            <el-button class="payment-btn" type="primary">{{$i.warehouse.add}}</el-button>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        label="No."
                        align="center"
                        width="60">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="Payment Number"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="Payment Item"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Est. Pay Date">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Act. Pay Date">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Est. Amount">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Act. Amount">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Currency">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="Available">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Action"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="second-title">
            {{$i.warehouse.productInfo}}
        </div>
        <div class="product-info">
            <v-table
                    :loading="loadingProductInfoTable"
                    :data="productInfoData"
                    :buttons="[{'label': 'Detail', type: 1}]"
                    @action="btnClick"
                    @change-checked="changeChecked"
                    :totalRow="true">
                <template slot="header">
                    <div class="btn-group">
                        <el-button :disabled="selectList.length===0" type="primary" @click="confirm">{{$i.warehouse.confirmSKU}}</el-button>
                        <el-button :disabled="disableClickRestart" type="primary">{{$i.warehouse.restartQc}}</el-button>
                        <el-button :disabled="selectList.length===0" type="primary" @click="rework">{{$i.warehouse.rework}}</el-button>
                        <el-button :disabled="selectList.length===0" type="danger" @click="returnProduct">{{$i.warehouse.return}}</el-button>
                    </div>
                </template>
            </v-table>

        </div>



        <div class="footBtn">
            <el-button @click="cancel" type="danger">{{$i.warehouse.cancel}}</el-button>
        </div>
    </div>
</template>
<script>

    import {VTable } from '@/components/index';

    export default {
        name:'qc-detail',
        components:{
            VTable
        },
        data(){
            return{
                qcDetail:{},
                qcTypeOption:[],
                qcMethodOption:[],
                disableClickRestart:true,
                /**
                 * paymentTable data
                 * */
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],


                /**
                 * product info data
                 * */
                loadingProductInfoTable:false,
                productInfoConfig:{
                    pn: 1,
                    ps: 200,
                    qcOrderId: this.$route.query.id,

                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ],
                },
                productInfoData:[],
                selectList:[],

                loadingData:false,
            }
        },
        methods:{
            getQcOrderDetail(){
                this.$ajax.get(`${this.$apis.get_qcDetail}?id=${this.$route.query.id}`)
                    .then(res=>{
                        this.qcDetail=res;
                        this.loadingData=false;
                    }).catch(err=>{
                    this.loadingData=false;
                });
            },
            getProductInfo(){
                this.loadingProductInfoTable=true;
                this.$ajax.post(this.$apis.get_qcProductInfo,this.productInfoConfig).then(res=>{
                    this.productInfoData = this.$getDB(this.$db.warehouse.qcDetailProductInfo, res.datas,e=>{
                        if(e.skuQcResultDictCode.value==='WAIT_FOR_QC'){
                            e._disabled=true;
                        }
                        return e;
                    });
                    this.loadingProductInfoTable=false;
                }).catch(err=>{
                    this.loadingProductInfoTable=false;
                });
            },


            /**
             * product info表格事件
             * */
            btnClick(e){
                console.log(e)
            },
            changeChecked(e){
                this.selectList=e;
            },

            confirm(){
                this.$confirm('Sure Confirm?', 'Info', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let allow=true;
                    this.selectList.forEach(v=>{
                        if(v.skuInventoryStatusDictCode.value==='CONFIRMED' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_REWORK' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_RETURN'){
                            allow=false;
                        }
                    });
                    if(!allow){
                        return this.$message({
                            message: this.$i.warehouse.alreadyHandled,
                            type: 'warning'
                        });
                    }
                    let id=[];
                    this.selectList.forEach(v=>{
                        id.push(v.id.value);
                    });
                    this.loadingProductInfoTable=true;
                    this.$ajax.post(this.$apis.set_qcResultConfirm,id).then(res=>{
                        this.$message({
                            type: 'success',
                            message: this.$i.warehouse.confirmSuccess
                        });
                        this.getProductInfo();
                    }).catch(err=>{
                        this.loadingProductInfoTable=false;
                    });
                }).catch(() => {

                });

            },

            rework(){
                this.$confirm(this.$i.warehouse.sureRework, '提示', {
                    confirmButtonText: this.$i.warehouse.sure,
                    cancelButtonText: this.$i.warehouse.cancel,
                    type: 'warning'
                }).then(() => {
                    let allow=true;
                    this.selectList.forEach(v=>{
                        if(v.skuInventoryStatusDictCode.value==='CONFIRMED' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_REWORK' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_RETURN'){
                            allow=false;
                        }
                    });
                    if(!allow){
                        return this.$message({
                            message: this.$i.warehouse.alreadyHandled,
                            type: 'warning'
                        });
                    }

                    let id=[];
                    this.selectList.forEach(v=>{
                        id.push(v.id.value);
                    });
                    this.loadingProductInfoTable=true;
                    this.$ajax.post(this.$apis.set_qcResultRework,id).then(res=>{
                        this.$message({
                            type: 'success',
                            message: this.$i.warehouse.reworkSuccess
                        });
                        this.getProductInfo();
                    }).catch(err=>{
                        this.loadingProductInfoTable=false;
                    });
                }).catch(() => {

                });
            },

            returnProduct(){
                this.$confirm(this.$i.warehouse.sureReturn, '提示', {
                    confirmButtonText: this.$i.warehouse.sure,
                    cancelButtonText: this.$i.warehouse.cancel,
                    type: 'warning'
                }).then(() => {
                    let allow=true;
                    this.selectList.forEach(v=>{
                        if(v.skuInventoryStatusDictCode.value==='CONFIRMED' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_REWORK' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_RETURN'){
                            allow=false;
                        }
                    });
                    if(!allow){
                        return this.$message({
                            message: this.$i.warehouse.alreadyHandled,
                            type: 'warning'
                        });
                    }

                    let id=[];
                    this.selectList.forEach(v=>{
                        id.push(v.id.value);
                    });
                    this.loadingProductInfoTable=true;
                    this.$ajax.post(this.$apis.set_qcResultReturn,id).then(res=>{
                        this.$message({
                            type: 'success',
                            message: this.$i.warehouse.returnSuccess
                        });
                        this.getProductInfo();
                    }).catch(err=>{
                        this.loadingProductInfoTable=false;
                    });
                }).catch(() => {

                });
            },

            cancel(){
                window.close();
            },
        },
        created(){
            this.loadingData=true;
            this.$ajax.post(this.$apis.get_partUnit,['QC_TYPE','QC_MD'],{_cache:true})
                .then(res=>{
                    res.forEach(v=>{
                        if(v.code==='QC_TYPE'){
                            this.qcTypeOption=v.codes;
                        }else if(v.code==='QC_MD'){
                            this.qcMethodOption=v.codes;
                        }
                    });
                    this.getQcOrderDetail();
                    this.getProductInfo();
                })
                .catch(err=>{
                    this.loadingData=false;
                });
        },
        watch:{
            selectList(n){
                if(n.length===0){
                    this.disableClickRestart=true;
                }else{
                    let allow=false;
                    n.forEach(v=>{
                        if(v.skuInventoryStatusDictCode.value==='WAIT_FOR_QC' || v.skuInventoryStatusDictCode.value==='APPLY_FOR_RETURN' || v.skuInventoryStatusDictCode.value==='CONFIRMATION_OF_RETURN'){
                            allow=true;
                        }
                    });
                    this.disableClickRestart=allow;
                }
            }
        }
    }
</script>
<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .second-title{
        font-size: 16px;
        color: #999999;
        padding: 10px 0;
    }
    .payment-btn{
        margin: 5px 0 10px 0;
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
        text-align: left;
        z-index: 1000;
    }
</style>