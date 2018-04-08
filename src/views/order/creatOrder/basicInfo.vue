<template>
    <div class="basicinfo">
             <div class="basicinfo_title">{{$t('order.basicinfo.basicInfo')}}</div>
             <div class="basicinfo_form">
                  <el-form ref='ruleform' :model="formItem" label-width="230px" :rules="rules" >
                    <el-row :gutter="10">
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.orderNumber')" prop="orderNumber">
                                <el-input v-model="formItem.orderNumber" :disabled='disabled'  placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list":label=" $t('order.basicinfo.orderDate')" prop="orderDate">
                              <div style='display:flex;max-width:200px;'>
                               <el-date-picker
                                      v-model="formItem.orderDate"
                                      type="date"
                                      :disabled='disabled'
                                      placeholder="选择日期"
                                      >
                                    </el-date-picker>
                                    </div>
                                </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.purchaseOrderNumber')" prop="purchaseOrderNumber">
                                <el-input v-model="formItem.purchaseOrderNumber" :disabled='disabled' placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerShortName')" prop="customerShortName">
                                <el-input v-model="formItem.customerShortName" :disabled='disabled' placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerSerialNumber')" prop="customerSerialNumber">
                                 <el-input v-model="formItem.customerSerialNumber" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>                 
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.salesOrderNumber')" prop="salesOrderNumber">
                                 <el-input v-model="formItem.salesOrderNumber" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierShortName')" prop="supplierShortName">
                                 <el-input v-model="formItem.supplierShortName" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>              
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierSerialNumber')" prop="supplierSerialNumber">
                                 <el-input v-model="formItem.supplierSerialNumber" :disabled='disabled' placeholder="please enter">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.referencesInquiryID')" prop="referencesInquiryID">
                                 <el-select v-model="formItem.referencesInquiryID" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in referencesInquiryID"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.orderStatus')" prop="orderStatus">
                                 <el-select v-model="formItem.orderStatus" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in orderStatus"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.estDeliveryDate')" prop="estDeliveryDate">
                             <div style='display:flex;max-width:200px;'>
                            <el-date-picker
                                      v-model="formItem.estDeliveryDate"
                                      type="date"
                                      :disabled='disabled'
                                      placeholder="选择日期">
                                    </el-date-picker>
                                    </div>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.priceTerms')" prop="priceTerms">
                                 <el-select v-model="formItem.priceTerms" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in priceTerms"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.incortermAea')" prop="incortermAea">
                                 <el-input v-model="formItem.incortermAea" :disabled='disabled' placeholder="select">                               
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentMethod')" prop="paymentMethod">
                                 <el-input v-model="formItem.paymentMethod" :disabled='disabled' placeholder="select">
                                    
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.lcNumber')"prop="lcNumber">
                                 <el-input v-model="formItem.lcNumber" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.countryofShipmentOrigin')" prop="countryofShipmentOrigin">
                                 <el-input v-model="formItem.countryofShipmentOrigin" :disabled='disabled' placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.portofLoading')" prop="portofLoading">
                                 <el-input v-model="formItem.portofLoading" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.destinationCountry')" prop="destinationCountry">
                                 <el-input v-model="formItem.destinationCountry" :disabled='disabled' placeholder="Please enter">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.destinationPort')" prop="destinationPort">
                                 <el-input v-model="formItem.destinationPort" :disabled='disabled' placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.transportationWay')" prop="transportationWay">
                                 <el-select v-model="formItem.transportationWay" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in transportationWay"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerAgreementID')" prop="customerAgreementID">
                                 <el-input v-model="formItem.customerAgreementID" :disabled='disabled' placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerAgreementDate')" prop="customerAgreementDate">
                                   <div style='display:flex;max-width:200px;'>
                                   <el-date-picker
                                      v-model="formItem.customerAgreementDate"
                                      type="date"
                                      :disabled='disabled'
                                      placeholder="选择日期">
                                    </el-date-picker>
                                        </div>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.batchForLogistics')" prop="batchForLogistics">
                                 <el-select v-model="formItem.batchForLogistics" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in batchForLogistics"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentCondition')" prop="paymentCondition">
                                 <el-select v-model="formItem.paymentCondition" :disabled='disabled' placeholder="select">
                                    <el-option
                                      v-for="item in paymentCondition"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.agreeOnDateInterval')" prop="agreeOnDateInterval">
                                <el-input v-model="formItem.agreeOnDateInterval" :disabled='disabled' placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentStatus')" prop="paymentStatus">
                                <el-input v-model="formItem.paymentStatus" :disabled='disabled' placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.comments')" prop="comments">
                                <el-input v-model="formItem.comments" :disabled='disabled' placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                </el-form>
             </div>
         </div>  
</template>
<script>
    export default {
        name: 'basicinfo',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            list: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        components: {

        },
        data() {
            return {
                formItem: {
                    orderNumber: '', //必填 
                    orderDate: '', //必填          
                    purchaseOrderNumber: '',
                    customerShortName: '', //必填 
                    customerSerialNumber: '', //必填 
                    salesOrderNumber: '',
                    supplierShortName: '', //必填 
                    supplierSerialNumber: '', //必填 
                    referencesInquiryID: '', //referencesInquiryID下拉框值
                    orderStatus: '', //orderStatus下拉框值 //必填 
                    estDeliveryDate: '', //必填 
                    //                    actDeliveryDate: '',
                    priceTerms: '', //下拉框值//必填 
                    incortermAea: '', //必填 
                    paymentMethod: '', //必填 
                    lcNumber: '',
                    countryofShipmentOrigin: '',
                    portofLoading: '',
                    destinationCountry: '',
                    destinationPort: '',
                    transportationWay: '', //transportationWay下拉框值
                    customerAgreementID: '',
                    customerAgreementDate: '',
                    batchForLogistics: '', //batchForLogistics下拉框值
                    paymentCondition: '', //paymentCondition下拉框值
                    agreeOnDateInterval: '',
                    paymentStatus: '',
                    comments: '',
                },
                //......................表单正则
                rules: {
                    orderNumber: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    orderDate: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    customerShortName: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    customerSerialNumber: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    supplierShortName: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    supplierSerialNumber: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    estDeliveryDate: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    priceTerms: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    incortermAea: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    paymentMethod: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                },
                referencesInquiryID: [{
                    value: 'TBCByCustomer',
                    label: this.$t('order.basicinfo.TBCByCustomer')
                }, {
                    value: 'TBCBySupplier',
                    label: this.$t('order.basicinfo.TBCBySupplier')
                }],
                orderStatus: [{
                    value: 'Process',
                    label: this.$t('order.basicinfo.Process')
                }, {
                    value: 'Finished',
                    label: this.$t('order.basicinfo.Finished')
                }, {
                    value: 'Cancled',
                    label: this.$t('order.basicinfo.Cancled')
                }],
                priceTerms: [{
                    value: 'fob',
                    label: this.$t('order.basicinfo.fob')
                }, {
                    value: 'exw',
                    label: this.$t('order.basicinfo.exw')
                }],
                transportationWay: [{
                    value: '海运',
                    label: this.$t('order.basicinfo.海运')
                }],
                batchForLogistics: [{
                    value: 'Yes',
                    label: this.$t('order.basicinfo.Yes')
                }, {
                    value: 'No',
                    label: this.$t('order.basicinfo.No')
                }],
                paymentCondition: [{
                    value: 'paySinceBL',
                    label: this.$t('order.basicinfo.paySinceBL')
                }, {
                    value: 'paySinceLCNumber',
                    label: this.$t('order.basicinfo.paySinceLCNumber')
                }],

            }
        },
        methods: {
            submitForm(ruleform) {
                this.$refs.ruleform.validate((valid) => {
                    if (valid === false) {
                        return false
                    }
                });
            },
        },
        mounted() {

        }
    }

</script>
<style scoped>
    .basicinfo {
        width: 100%;

    }

    .form-list {
        /*        max-width: 240px;*/
        /*        display: flex;*/
        /*        justify-content: flex-start;*/
    }

    .basicinfo_title {
        font-size: 14px;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;
    }

    .basicinfo_form {
        padding-top: 20px;
    }

    .el-select {
        max-width: 200px
    }

    .el-input {
        max-width: 200px;
    }

</style>
