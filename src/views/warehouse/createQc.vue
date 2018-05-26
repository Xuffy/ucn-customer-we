<template>
    <div class="create-qc" v-loading="loadingData">
        <div class="title">
            <span>{{$i.warehouse.createQcOrder}}</span>
        </div>
        <div class="second-title">
            {{$i.warehouse.basicInfo}}
        </div>
        <div>
            <el-form ref="qcOrder" :model="qcOrderBasic" label-width="190px">
                <el-row class="speZone">
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcOrderNo">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    :placeholder="$i.warehouse.systemGeneration"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcType">
                            <el-select :disabled="true" class="speInput" size="mini" v-model="value" :placeholder="$i.warehouse.serviceFill">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcDate">
                            <el-date-picker
                                    :disabled="true"
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    align="right"
                                    type="date"
                                    :placeholder="$i.warehouse.serviceFill">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.factoryAddress">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    :placeholder="$i.warehouse.pleaseInput"
                                    v-model="qcOrderConfig.factoryAddress">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.factoryContactPhone">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    :placeholder="$i.warehouse.pleaseInput"
                                    v-model="qcOrderConfig.factoryContactPhone">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcStatus">
                            <el-select :disabled="true" class="speInput" size="mini" v-model="qcStatusCode">
                                <el-option
                                        v-for="item in qcStatusOption"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.qcMethod">
                            <el-select :disabled="true" class="speInput" size="mini" v-model="value" :placeholder="$i.warehouse.serviceFill">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.surveyor">
                            <el-select :disabled="true" class="speInput" size="mini" v-model="value" :placeholder="$i.warehouse.serviceFill">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.serviceFee">
                            <el-input
                                    :disabled="true"
                                    class="speInput"
                                    size="mini"
                                    :placeholder="$i.warehouse.serviceFill"
                                    v-model="value">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.serviceProviders">
                            <el-select
                                    clearable
                                    class="speInput"
                                    size="mini"
                                    v-model="serviceId"
                                    filterable
                                    remote
                                    reserve-keyword
                                    :placeholder="$i.warehouse.pleaseInputOrChoose"
                                    :remote-method="remoteMethod"
                                    :loading="loading">
                                <el-option
                                        v-for="item in serviceList"
                                        :key="item.companyId"
                                        :label="item.name"
                                        :value="item.companyId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="11" :label="$i.warehouse.exchangeCurrency">
                            <el-select class="speInput" size="mini" v-model="qcOrderConfig.exchangeCurrencyDictCode" placeholder="请选择">
                                <el-option
                                        v-for="item in currencyOptions"
                                        :key="item.id"
                                        :label="item.code"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item prop="11" :label="$i.warehouse.remark">
                            <el-input
                                    class="speInput"
                                    type="textarea"
                                    :autosize="{minRows: 2}"
                                    :placeholder="$i.warehouse.pleaseInput"
                                    v-model="qcOrderConfig.remark">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item prop="11" :label="$i.warehouse.attachment">
                            <v-upload></v-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="second-title">
            {{$i.warehouse.productInfo}}
        </div>
        <div class="product-info">
            <div class="btns">
                <el-button type="primary" @click="addProduct">{{$i.warehouse.addProduct}}</el-button>
                <el-button type="danger" :disabled="disableRemoveProduct" @click="removeProduct">{{$i.warehouse.remove}}</el-button>
            </div>

            <el-table
                    v-loading="loadingProductTable"
                    class="product-table"
                    :data="productTableData"
                    border
                    show-summary
                    @selection-change="handleProductTableChange"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        align="center"
                        class="table-checkbox"
                        width="55">
                </el-table-column>
                <el-table-column
                        v-for="v in $db.warehouse.createQcProductTable"
                        :key="v.key"
                        :label="v.key"
                        align="center"
                        width="180">
                    <template slot-scope="scope">
                        <div v-if="v.showType==='qc'">
                            {{v.value}}
                        </div>
                        <div v-else-if="v.fromService"></div>
                        <div v-else-if="v.showType==='number'">
                            <el-input-number
                                    v-model="scope.row[v.key]"
                                    :min="0"
                                    :controls="false"
                                    label="please input"></el-input-number>
                        </div>
                        <div v-else-if="v.showType==='input'">
                            <el-input
                                    placeholder="please input"
                                    v-model="scope.row[v.key]"
                                    clearable>
                            </el-input>
                        </div>
                        <div v-else>
                            {{scope.row[v.key]}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        align="center"
                        fixed="right"
                        label="Action"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">Detail</el-button>
                    </template>
                </el-table-column>
            </el-table>


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
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.quantityOfQualifiedProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.volumeOfQualifiedProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.netWeightOfQualifiedProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.grossWeightOfQualifiedProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.quantityOfSubQualityProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.cartonOfSubQualityProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.netWeightOfSubQualityProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.volumeOfSubQualityProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.warehouse.grossWeightOfSubQualityProducts">
                            <el-input
                                    class="speInput"
                                    size="mini"
                                    v-model="value"
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
            <el-button @click="submit" :loading="disableClickSubmit" :disabled="disableSubmit" type="primary">{{$i.warehouse.submit}}</el-button>
            <el-button @click="cancel" type="danger">{{$i.warehouse.cancel}}</el-button>
        </div>



        <el-dialog width="70%" title="Add Product" :visible.sync="productDialogVisible">
            <el-form ref="qcOrder" :model="productDialogConfig" :rules="dialogRules" label-width="120px">
                <el-row class="speZone">
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="orderNo" label="Order No">
                            <el-input
                                    class="dialogInput"
                                    size="mini"
                                    placeholder="please input"
                                    v-model="productDialogConfig.orderNo">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="skuCode" label="SKU Code">
                            <el-input
                                    class="dialogInput"
                                    size="mini"
                                    placeholder="please input"
                                    v-model="productDialogConfig.skuCode">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="skuBarCode" label="SKU Bar Code">
                            <el-input
                                    class="dialogInput"
                                    size="mini"
                                    placeholder="please input"
                                    v-model="productDialogConfig.skuBarCode">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="skuNameEn" label="SKU Name EN">
                            <el-input
                                    class="dialogInput"
                                    size="mini"
                                    placeholder="please input"
                                    v-model="productDialogConfig.skuNameEn">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div class="btn-group">
                <el-button type="primary" @click="search" :loading="loadingProductDialogTable"  :disabled="loadingProductDialogTable">Search</el-button>
                <el-button @click="clear" :disabled="loadingProductDialogTable">Clear</el-button>
            </div>
            <v-table
                    v-loading="loadingProductDialogTable"
                    :data="productDialogTableData"
                    :buttons="[{label: 'Detail', type: 1}]"
                    @action="btnClick"
                    @change-checked="changeProductDialogChecked"></v-table>
            <page
                    @size-change="changeSize"
                    @change="changePage"
                    :page-data="pageData"></page>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" :disabled="loadingProductDialogTable" @click="postProduct">OK</el-button>
                <el-button :disabled="loadingProductDialogTable" @click="productDialogVisible = false">Cancel</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

    import VTable from '@/components/common/table/index'
    import {VTimeZone,VPagination,VUpload} from '@/components/index'

    export default {
        name:'createQc',
        components:{
            VTable,
            VTimeZone,
            page:VPagination,
            VUpload
        },
        data(){
            return{
                value:'',
                options: [],
                pageData:{},
                tableDataList:[],
                loadingTable:false,
                /**
                 * service provider数据处理
                 * */
                serviceId:'',
                serviceList:[],         //用于展现的数组
                serviceMainList:[],     //用于存储总数据的数组
                loading: false,
                /**
                 * 页面基本配置
                 * */
                loadingData:false,
                disableRemoveProduct:true,
                disableClickSubmit:false,
                loadingProductTable:false,
                disableSubmit:false,
                serviceDialogVisible:false,
                radio:'',
                currencyOptions:[],
                qcStatusCode:'WAITING_QC',
                qcStatusOption:[],
                selectProductTableData:[],      //页面上选中的table data


                productTableData:[],
                productConfig:{
                    ids: [],
                    pn: 1,
                    ps: 50,
                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ],
                },

                qcOrderConfig:{

                    exchangeCurrencyDictCode:'CNY',
                    exchangeCurrencyDictId:'',
                    factoryAddress: "",
                    factoryContactPhone: "",
                    qcOrderDetailCreateParams: [
                        // {
                        //     expectQcQty: 0,
                        //     inboundSkuId: 0,
                        //     samplingRate: "",
                        //     unqualifiedProcessingMode: ""
                        // }
                    ],
                    remark: "",
                    serviceName: "",
                    serviceProviderId: 0,
                    serviceProviderNo: "",
                },

                /**
                 * 弹出框配置
                 * */
                dialogRules:{
                    orderNo:[
                        {
                            required:true
                        }
                    ]
                },
                loadingProductDialogTable:false,
                productDialogTableData:[],
                selectProductList:[],
                productDialogVisible:false,
                productDialogConfig:{
                    ids: [],
                    orderNo: "",
                    pn: 1,
                    ps: 50,
                    skuBarCode: "",
                    skuCode: "",
                    skuNameEn: "",
                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ],
                },
                qcOrderBasic:{

                },

                /**
                 * 总计data
                 * */
                summaryData:{
                    skuQuantity:''
                },
            }
        },
        methods:{
            changeChecked(){

            },
            submit(){
                this.serviceMainList.forEach(v=>{
                    if(v.companyId===this.serviceId){
                        this.qcOrderConfig.serviceName=v.name;
                        this.qcOrderConfig.serviceProviderId=v.companyId;
                        this.qcOrderConfig.serviceProviderNo=v.code;
                    }
                });
                this.currencyOptions.forEach(v=>{
                    if(v.id===this.qcOrderConfig.exchangeCurrencyDictId){
                        this.qcOrderConfig.exchangeCurrencyDictCode=v.code;
                    }
                });
                this.qcOrderConfig.qcOrderDetailCreateParams=[];
                this.productTableData.forEach(v=>{
                    if(v.id!==0){
                        this.qcOrderConfig.qcOrderDetailCreateParams.push({
                            expectQcQty: v.expectQcQty?v.expectQcQty:0,
                            inboundSkuId: v.id,
                            samplingRate: v.samplingRate,
                            unqualifiedProcessingMode: v.unqualifiedProcessingMode
                        });
                    }
                });

                this.disableClickSubmit=true;

                this.$ajax.post(this.$apis.add_buyerQcOrder,this.qcOrderConfig).then(res=>{
                    this.$message({
                        message: this.$i.warehouse.createSuccess,
                        type: 'success'
                    });
                    this.$router.push('/warehouse/qcOverview');
                    this.disableClickSubmit=false;
                }).catch(err=>{
                    this.disableClickSubmit=false;
                });
            },

            cancel(){
                window.close();
            },

            /**
             * 选择服务商的方法
             * */
            getService(name){
                this.serviceList=[];
                this.serviceMainList=[];
                this.disableSubmit=true;
                if(!name){
                    name='';
                }
                this.$ajax.get(`${this.$apis.get_supplyProviders}?name=${name}`).then(res=>{
                    res.forEach(v=>{
                        this.serviceList.push(v);
                    });
                    this.$ajax.get(`${this.$apis.get_serviceProviders}?name=${name}`).then(res=>{
                        res.forEach(v=>{
                            this.serviceList.push(v);
                        });
                        this.serviceMainList=this.$copyArr(this.serviceList);
                        this.disableSubmit=false;
                    }).catch(err=>{
                        this.disableSubmit=false;
                    });
                }).catch(err=>{
                    this.disableSubmit=false;
                });
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.serviceList = this.serviceMainList.filter(item => {
                        return item.name.indexOf(query)>-1;
                    });
                } else {
                    this.serviceList = this.$copyArr(this.serviceMainList);
                }
            },

            /**
             * 弹出框事件
             * */
            search(){
                this.$refs.qcOrder.validate((valid)=>{
                    if(valid){
                        this.loadingProductDialogTable=true;
                        this.$ajax.post(this.$apis.get_qcProductData,this.productDialogConfig).then(res=>{
                            this.productDialogTableData = this.$getDB(this.$db.warehouse.createQcProductDialog, res,e=>{
                                if(e.skuInventoryStatusDictCode.value==='WAIT_FOR_QC' || e.skuInventoryStatusDictCode.value==='APPLY_FOR_RETURN' || e.skuInventoryStatusDictCode.value==='CONFIRMATION_OF_RETURN'){
                                    this.$set(e,'_disabled',true);
                                }
                            });
                            this.pageData={datas:res};
                            this.productTableData.forEach(v=>{
                                this.productDialogTableData.forEach(m=>{
                                    if(v.id===m.id.value){
                                        this.$set(m,'_checked',true);
                                        this.$set(m,'_disabled',true);
                                    }
                                })
                            });
                            this.productDialogTableData.forEach(v=>{
                                if(v.id.value===0){
                                    this.$set(v,'_disabled',true);
                                }
                            });
                            this.loadingProductDialogTable=false;
                            this.selectProductList=[];
                        }).catch(err=>{
                            this.loadingProductDialogTable=false;
                        });
                    }
                });
            },
            clear(){
                this.productDialogConfig.orderNo='';
                this.productDialogConfig.skuBarCode='';
                this.productDialogConfig.skuCode='';
                this.productDialogConfig.skuNameEn='';
            },
            changeProductDialogChecked(e){
                this.selectProductList=e;
            },
            btnClick(e){
                this.$windowOpen({
                    url:'/product/sourcingDetail',
                    params:{
                        id:e.skuId.value
                    }
                })
            },
            postProduct(){
                this.productConfig.ids=[];
                this.productDialogTableData.forEach(v=>{
                    if(v._checked && !v._disabled){
                        this.productConfig.ids.push(v.id.value);
                    }
                });
                this.productDialogVisible=false;
                if(this.productConfig.ids.length!==0){
                    this.loadingProductTable=true;
                    this.$ajax.post(this.$apis.get_qcProductData,this.productConfig).then(res=>{
                        this.loadingProductTable=false;
                        res.forEach(v=>{
                            if(v.id!==0){
                                this.productTableData.push(v);
                            }
                        });
                    }).catch(err=>{
                        this.loadingProductTable=false;
                    })
                }
            },

            /**
             * 页面操作事件
             * */
            addProduct(){
                this.productDialogTableData=[];
                this.productDialogVisible=true;
                // this.loadingProductDialogTable=true;
                // this.$ajax.post(this.$apis.get_qcProductData,this.productDialogConfig).then(res=>{
                //     this.productDialogTableData = this.$getDB(this.$db.warehouse.createQcProductDialog, res);
                //     this.productTableData.forEach(v=>{
                //         this.productDialogTableData.forEach(m=>{
                //             if(v.id===m.id.value){
                //                 this.$set(m,'_checked',true);
                //                 this.$set(m,'_disabled',true);
                //             }
                //         })
                //     });
                //     this.productDialogTableData.forEach(v=>{
                //         if(v.id.value===0){
                //             this.$set(v,'_disabled',true);
                //         }
                //     });
                //     console.log(this.productDialogTableData,'this.productDialogTableData')
                //     this.loadingProductDialogTable=false;
                // }).catch(err=>{
                //     this.loadingProductDialogTable=false;
                // });
            },
            removeProduct(){

                this.$confirm('Sure Delete?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.productTableData=_.difference(this.productTableData, this.selectProductTableData);
                    this.selectProductTableData=[];
                    this.$message({
                        type: 'success',
                        message: 'Delete Success!'
                    });
                }).catch(() => {

                });
            },
            handleProductTableChange(e){
                this.selectProductTableData=e;
            },
            handleClick(e){
                this.$windowOpen({
                    url:'/product/sourcingDetail',
                    params:{
                        id:e.skuId
                    }
                });
            },

            /**
             * 分页操作
             * */
            changePage(e){
                console.log(e)
            },
            changeSize(e){
                // this.warehouseConfig.ps=e;
                // this.getWarehouseData();
            },

            /**
             * 获取单位
             * */
            getUnit(){
                this.loadingData=true;
                this.$ajax.post(this.$apis.get_partUnit,['QC_STATUS'],{_cache:true}).then(res=>{
                    this.qcStatusOption=res[0].codes;
                    this.loadingData=false;
                }).catch(err=>{
                    this.loadingData=false;
                });

                this.$ajax.get(this.$apis.get_currencyUnit,{},{_cache:true}).then(res=>{
                    this.currencyOptions=res;
                    this.loadingData=false;
                }).catch(err=>{
                    this.loadingData=false;
                });

            },
        },
        created(){
            this.getService();
            this.getUnit();
        },
        mounted(){
            this.loadingData=true;
        },
        watch:{
            selectProductTableData(n){
                if(n.length>0){
                    this.disableRemoveProduct=false;
                }else{
                    this.disableRemoveProduct=true;
                }
            },
            productDialogVisible(n){
                if(!n){
                    this.clear();
                    setTimeout(()=>{
                        this.$refs.qcOrder.clearValidate();
                    },0);

                }
            },
            productTableData(n){
                if(n.length>0){
                    let sum=0;
                    n.forEach(v=>{
                        sum+=v.orderSkuQty;
                    });
                    this.summaryData.skuQuantity=sum;
                }
            },
        },
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
    .speCol{
        min-height: 51px;
    }
    .speInput{
        width: 80%;
    }
    .radios{
        margin-bottom: 10px;
    }
    .btn-group{
        text-align: center;
    }
    .dialogInput{
        width: 100%;
    }
    .dialog-footer{
        text-align: center;
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
    .speTimezone{
        max-width: 1000px !important;
        width: 80%;
    }
    .speTimezone >>> .el-select{
        display: block;
    }
    .product-table{
        margin-top: 10px;
    }
    .product-table >>> .el-checkbox{
        margin: 0;
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