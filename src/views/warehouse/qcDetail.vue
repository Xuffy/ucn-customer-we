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
            <el-button @click="addPayment" :loading="disableClickAdd" class="payment-btn" :disabled="disableAdd" type="primary">{{$i.warehouse.add}}</el-button>
            <el-table
                    v-loading='loadingPaymentTable'
                    :data="paymentTableData"
                    :row-class-name="tableRowClassName"
                    border
                    style="width: 100%">
                <el-table-column
                    label="No"
                    align="center"
                    width="60">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        v-for="v in $db.warehouse.qcPaymentTable"
                        :label="$i.warehouse[v.key]"
                        :key="v.key"
                        align="center"
                        width="200">
                    <template slot-scope="scope">
                        <div v-if="scope.row.isNew || scope.row.isModify">
                            <div v-if="v.type==='input'">
                                <el-input
                                        :placeholder="$i.warehouse.pleaseInput"
                                        v-model="scope.row[v.realKey]"
                                        clearable>
                                </el-input>
                            </div>
                            <div v-else-if="v.type==='date'">
                                <el-date-picker
                                        style="width: 160px"
                                        v-model="scope.row[v.realKey]"
                                        align="right"
                                        type="date"
                                        :editable="false"
                                        :placeholder="$i.warehouse.pleaseChoose"
                                        :picker-options="pickerOptions1">
                                </el-date-picker>
                            </div>
                            <div v-else-if="v.type==='number'">
                                <el-input-number
                                        v-model="scope.row[v.realKey]"
                                        :min="0"
                                        :controls="false"
                                        label="描述文字"></el-input-number>
                            </div>
                            <div v-else-if="v.type==='select'">
                                <el-select :disabled="true" v-model="scope.row[v.realKey]" :placeholder="$i.warehouse.pleaseChoose">
                                    <el-option
                                            v-for="item in currencyOption"
                                            :key="item.id"
                                            :label="item.code"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isStatus">
                                {{scope.row[v.realKey]===-1?'Invalid':(scope.row[v.realKey]===10 || 20 || 30?'Waite Service Confirm':'Confirm')}}
                            </div>
                            <div v-else>
                                {{scope.row[v.realKey]}}
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="v.type==='date'">
                                {{$dateFormat(scope.row[v.realKey],'yyyy-mm-dd')}}
                            </div>
                            <div v-else-if="v.isStatus">
                                {{scope.row[v.realKey]===-1?'Invalid':(scope.row[v.realKey]===10 || 20 || 30?'Waite Service Confirm':'Confirm')}}
                            </div>
                            <div v-else>
                                {{scope.row[v.realKey]}}
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Action"
                        align="center"
                        width="150">
                    <template slot-scope="scope">
                        <div v-if="scope.row.status===-1">
                            <el-button @click="restore(scope.row)" type="text" size="small">{{$i.warehouse.restore}}</el-button>
                        </div>
                        <div v-else>
                            <div v-if="scope.row.isNew">
                                <el-button @click="sureAdd(scope.row)" type="text" size="small">{{$i.warehouse.submit}}</el-button>
                                <el-button @click="cancelAdd(scope.row)" type="text" size="small">{{$i.warehouse.cancel}}</el-button>
                            </div>
                            <div v-else-if="scope.row.isModify">
                                <el-button @click="sureModify(scope.row)" type="text" size="small">{{$i.warehouse.submit}}</el-button>
                                <el-button @click="cancelModify(scope.row)" type="text" size="small">{{$i.warehouse.cancel}}</el-button>
                            </div>
                            <div v-else>
                                <el-button @click="modify(scope.row)" type="text" size="small">{{$i.warehouse.modify}}</el-button>
                                <el-button @click="invalid(scope.row)" type="text" size="small">{{$i.warehouse.invalid}}</el-button>
                            </div>
                        </div>
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

        <div class="summary">
            <div class="second-title">
                {{$i.warehouse.summary}}
            </div>
            <el-form label-width="280px">
                <el-row class="speZone">
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.cartonOfQualifiedProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.cartonOfQualifiedProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.quantityOfQualifiedProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.quantityOfQualifiedProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.volumeOfQualifiedProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.volumeOfQualifiedProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.netWeightOfQualifiedProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.netWeightOfQualifiedProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.grossWeightOfQualifiedProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.grossWeightOfQualifiedProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.quantityOfSubQualityProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.quantityOfSubQualityProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.cartonOfSubQualityProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.cartonOfSubQualityProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.netWeightOfSubQualityProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.netWeightOfSubQualityProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.volumeOfSubQualityProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.volumeOfSubQualityProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.grossWeightOfSubQualityProducts">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.grossWeightOfSubQualityProducts"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.skuQuantity">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="summaryData.skuQuantity"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
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
                disableAdd:true,
                copyList:[],
                /**
                 * paymentTable data
                 * */
                loadingPaymentTable:false,
                paymentTableData: [],
                disableClickAdd:false,
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
                currencyOption:[],

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

                /**
                 * summary Data
                 * */
                summaryData:{
                    cartonOfQualifiedProducts:'',
                    quantityOfQualifiedProducts:'',
                    volumeOfQualifiedProducts:'',
                    netWeightOfQualifiedProducts:'',
                    grossWeightOfQualifiedProducts:'',
                    quantityOfSubQualityProducts:'',
                    cartonOfSubQualityProducts:'',
                    netWeightOfSubQualityProducts:'',
                    volumeOfSubQualityProducts:'',
                    grossWeightOfSubQualityProducts:'',
                    skuQuantity:''
                },
            }
        },
        methods:{
            getQcOrderDetail(){
                this.$ajax.get(`${this.$apis.get_qcDetail}?id=${this.$route.query.id}`)
                    .then(res=>{
                        this.qcDetail=res;
                        this.loadingData=false;
                        if(this.qcDetail.qcStatusDictCode==='WAITING_QC'){
                            this.disableAdd=true;
                        }else{
                            this.disableAdd=false;
                        }
                        this.getProductInfo();
                        this.getPaymentData();
                    }).catch(err=>{
                        this.loadingData=false;
                    }
                );
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
                    let diffData=[];
                    if(this.qcDetail.qcStatusDictCode==='WAITING_QC'){
                        //如果是等待QC，只统计SKU QTY
                        this.productInfoData.forEach(v=>{
                            diffData.push(v.skuId.value+v.orderNo.value);
                            this.summaryData.skuQuantity=_.uniq(diffData).length;
                        })
                    }else{
                        //否则，统计全部summary
                        _.mapObject(this.summaryData,(v,index)=>{
                            this.summaryData[index]=0;
                        });
                        this.productInfoData.forEach(v=>{
                            this.summaryData.cartonOfQualifiedProducts+=v.qualifiedSkuCartonTotalQty.value;
                            this.summaryData.quantityOfQualifiedProducts+=v.qualifiedSkuQty.value;
                            this.summaryData.volumeOfQualifiedProducts+=v.qualifiedSkuVolume.value;
                            this.summaryData.netWeightOfQualifiedProducts+=v.qualifiedSkuNetWeight.value;
                            this.summaryData.grossWeightOfQualifiedProducts+=v.qualifiedSkuGrossWeight.value;
                            this.summaryData.quantityOfSubQualityProducts+=v.unqualifiedSkuQty.value;
                            this.summaryData.cartonOfSubQualityProducts+=v.unqualifiedSkuCartonTotalQty.value;
                            this.summaryData.netWeightOfSubQualityProducts+=v.unqualifiedSkuNetWeight.value;
                            this.summaryData.volumeOfSubQualityProducts+=v.unqualifiedSkuVolume.value;
                            this.summaryData.grossWeightOfSubQualityProducts+=v.unqualifiedSkuGrossWeight.value;
                            diffData.push(v.skuId.value+v.orderNo.value);
                        });
                        this.summaryData.skuQuantity=_.uniq(diffData).length;

                    }

                    this.loadingProductInfoTable=false;
                }).catch(err=>{
                    this.loadingProductInfoTable=false;
                });
            },
            getPaymentData(){
                this.loadingPaymentTable=true;
                this.$ajax.post(this.$apis.get_qcPaymentData,{
                    orderNo:this.qcDetail.qcOrderNo,
                    orderType:20
                }).then(res=>{
                    this.loadingPaymentTable=false;
                    this.paymentTableData=res.datas;
                }).catch(err=>{
                    this.loadingPaymentTable=false;
                });
            },

            /**
             * payment事件
             * */
            tableRowClassName({row}) {
                if(row.status===-1){
                    return 'warning-row';
                }
                return '';
            },
            addPayment(){
                this.disableClickAdd=true;
                this.$ajax.post(this.$apis.get_qcPaymentNo).then(res=>{
                    this.disableClickAdd=false;
                    this.paymentTableData.push({
                        no:res,
                        name:'',
                        planPayDt:'',
                        planPayAmount:'',
                        actualPayDt:'',
                        actualPayAmount:'',
                        currencyCode:this.qcDetail.exchangeCurrencyDictCode,
                        status:10,
                        isNew:true
                    });
                }).catch(err=>{
                    this.disableClickAdd=false;
                });
                console.log(2134)
            },
            sureAdd(e){
                let param={
                    actualPayAmount: e.actualPayAmount,
                    actualPayDt: e.actualPayDt,
                    name: e.name,
                    no: e.no,
                    orderNo: this.qcDetail.qcOrderNo,
                    orderType: 20,
                    planPayAmount: e.planPayAmount,
                    planPayDt: e.planPayDt,
                    type: 10,       //10代表付款
                    payToId: this.qcDetail.serviceOwnerId,
                    payToName: this.qcDetail.serviceName,
                    currency: 0,
                    currencyCode: '',
                };
                this.currencyOption.forEach(v=>{
                    if(v.code===this.qcDetail.exchangeCurrencyDictCode){
                        param.currency=v.id;
                        param.currencyCode=v.code;
                    }
                });
                this.loadingPaymentTable=true;
                this.$ajax.post(this.$apis.save_qcPayment,param).then(res=>{
                    this.$message({
                        message: this.$i.warehouse.submitSuccess,
                        type: 'success'
                    });
                    this.loadingPaymentTable=false;
                    this.$set(e,'isNew',false);
                    this.$set(e,'version',res.version);
                    this.$set(e,'id',res.id);
                }).catch(err=>{
                    this.loadingPaymentTable=false;
                });
            },
            cancelAdd(e){
                this.$confirm(this.$i.warehouse.sureDelete, 'Info', {
                    confirmButtonText: this.$i.warehouse.sure,
                    cancelButtonText: this.$i.warehouse.cancel,
                    type: 'warning'
                }).then(() => {
                    this.paymentTableData=_.difference(this.paymentTableData,[e]);

                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {

                });
            },
            modify(e){
                this.$set(e,'isModify',true);
                let has=false;
                this.copyList.forEach(v=>{
                    if(v.no===e.no){
                        has=true;
                    }
                });
                if(!has){
                    this.copyList.push(Object.assign({},e));
                }
            },
            invalid(e){
                this.$confirm(this.$i.warehouse.sureInvalid, 'Info', {
                    confirmButtonText: this.$i.warehouse.sure,
                    cancelButtonText: this.$i.warehouse.cancel,
                    type: 'warning'
                }).then(() => {
                    this.loadingPaymentTable=true;
                    this.$ajax.post(this.$apis.abandon_qcPayment,{
                        id:e.id,
                        version:e.version
                    }).then(res=>{
                        this.$message({
                            type: 'success',
                            message: this.$i.warehouse.invalidSuccess
                        });
                        this.$set(e,'status',-1);
                        this.$set(e,'version',res.version);
                        this.loadingPaymentTable=false;
                    }).catch(err=>{
                        this.loadingPaymentTable=false;
                    });
                }).catch(() => {

                });
            },
            restore(e){
                this.$confirm(this.$i.warehouse.sureRestore, 'Info', {
                    confirmButtonText: this.$i.warehouse.sure,
                    cancelButtonText: this.$i.warehouse.cancel,
                    type: 'warning'
                }).then(() => {
                    this.loadingPaymentTable=true;
                    this.$ajax.post(this.$apis.recover_qcPayment,{
                        id:e.id,
                        version:e.version
                    }).then(res=>{
                        this.$message({
                            type: 'success',
                            message: this.$i.warehouse.restoreSuccess
                        });
                        this.$set(e,'status',30);
                        this.$set(e,'version',res.version);
                        this.loadingPaymentTable=false;
                    }).catch(err=>{
                        this.loadingPaymentTable=false;
                    });
                }).catch(() => {

                });
            },
            sureModify(e){
                let param={
                    actualPayAmount: e.actualPayAmount,
                    actualPayDt: e.actualPayDt,
                    id: e.id,
                    name: e.name,
                    planPayAmount: e.planPayAmount,
                    planPayDt: e.planPayDt,
                    version:e.version
                };
                this.loadingPaymentTable=true;
                this.$ajax.post(this.$apis.update_qcPayment,param).then(res=>{
                    this.$message({
                        message: this.$i.warehouse.changeSuccess,
                        type: 'success'
                    });
                    this.copyList.forEach(v=>{
                        if(v.no===e.no){
                            let obj=Object.assign({},e);
                            this.$set(v,'name',obj.name);
                            this.$set(v,'planPayDt',obj.planPayDt);
                            this.$set(v,'planPayAmount',obj.planPayAmount);
                            this.$set(v,'actualPayDt',obj.actualPayDt);
                            this.$set(v,'actualPayAmount',obj.actualPayAmount);
                        }
                    });
                    this.$set(e,'isModify',false);
                    this.$set(e,'version',res.version);
                    this.loadingPaymentTable=false;
                }).catch(err=>{
                    this.loadingPaymentTable=false;
                });
            },
            cancelModify(e){
                this.copyList.forEach(v=>{
                    if(v.no===e.no){
                        let obj=Object.assign({},v);
                        this.$set(e,'name',obj.name);
                        this.$set(e,'planPayDt',obj.planPayDt);
                        this.$set(e,'planPayAmount',obj.planPayAmount);
                        this.$set(e,'actualPayDt',obj.actualPayDt);
                        this.$set(e,'actualPayAmount',obj.actualPayAmount);
                    }
                });
                this.$set(e,'isModify',false);
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

            getCurrency(){
                this.$ajax.get(this.$apis.get_currency,{},{_cache:true}).then(res=>{
                    this.currencyOption=res;
                }).catch(err=>{

                });
            },
        },
        created(){
            this.getCurrency();
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
                    // this.getProductInfo();
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
    .el-table >>> .warning-row {
        background: #f5f7fa;
    }
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
        margin-top: 40px;
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
    .speInput{
        width: 80%;
    }
    .summary{
        margin-top: 50px;
    }
    .summaryInput{
        width: 80%;
    }
    .summaryInput >>> input{
        text-align: center;
    }
</style>