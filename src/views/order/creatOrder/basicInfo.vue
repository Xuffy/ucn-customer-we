<template>
    <div class="basicinfo">
             <div class="basicinfo_title">{{$t('order.basicinfo.basicInfo')}}</div>
             <div class="basicinfo_form">
                  <el-form ref='ruleform' :model="formItem" label-width="230px" :rules="rules" >
                    <el-row :gutter="10">
                         
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item  :label=" $t('order.basicinfo.orderNo')" prop="orderNo">
                                <el-input v-model="formItem.orderNo" :disabled=true  placeholder=""></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item  :label=" $t('order.basicinfo.orderDate')" prop="orderDate">
                              <div style='display:flex;max-width:200px;'>
                                       <el-date-picker
                                              v-model="formItem.orderDate"
                                              type="date"
                                              :disabled=true
                                              placeholder=""
                                              >
                                        </el-date-picker>
                                    </div>
                                </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                                <el-form-item :label=" $t('order.basicinfo.customerOrderNo')" prop="customerOrderNo">
                                    <el-input v-model="formItem.customerOrderNo" :disabled='disabled' placeholder=""></el-input>
                                </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                                <el-form-item class="form-list" :label=" $t('order.basicinfo.customerName')" prop="customerName">
                                    <el-input v-model="formItem.customerName" :disabled='disabled' placeholder=""></el-input>                   
                                </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerNo')" prop="customerNo">
                                 <el-input v-model="formItem.customerNo" :disabled='disabled' placeholder="">
                                  </el-input>
                            </el-form-item>
                         </el-col>                 
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierOrderNo')" prop="supplierOrderNo">
                                 <el-input v-model="formItem.supplierOrderNo" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierName')" prop="supplierName">
                                 <el-input v-model="formItem.supplierName" :disabled=true placeholder="">
                                  </el-input>
                            </el-form-item>
                         </el-col>              
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierNo')" prop="supplierNo">
                                 <el-input v-model="formItem.supplierNo" :disabled=true placeholder="">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.QuotationNo')" prop="QuotationNo">
                                 <el-input v-model="formItem.QuotationNo" :disabled=true placeholder="">
                                  </el-input>
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
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.deliveryDate')" prop="estDeliveryDate">
                             <div style='display:flex;max-width:200px;'>
                            <el-date-picker
                                      v-model="formItem.deliveryDate"
                                      type="date"
                                      :disabled='disabled'
                                      placeholder="选择日期">
                                    </el-date-picker>
                                    </div>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.incoterm')" prop="incoterm">
                                 <el-select v-model="formItem.incoterm" :disabled='disabled' placeholder="select">
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
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.payment')" prop="payment">
                                 <el-input v-model="formItem.payment" :disabled='disabled' placeholder="select">
                                    
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.lcNo')" prop="lcNo">
                                 <el-input v-model="formItem.lcNo" :disabled='disabled' placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentDays')" prop="paymentDays">
                                 <el-input v-model="formItem.paymentDays" :disabled='disabled' placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentStatus')" prop="paymentStatus">
                                 <el-input v-model="formItem.paymentStatus" :disabled=true placeholder="">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.departureCountry')" prop="departureCountry">
                                 <el-input v-model="formItem.departureCountry" :disabled='disabled' placeholder="Please enter">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.departurePort')" prop="departurePort">
                                 <el-input v-model="formItem.departurePort" :disabled='disabled' placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.destinationCountry')" prop="destinationCountry">
                                 <el-input v-model="formItem.destinationCountry" :disabled='disabled' placeholder="select">
                                   
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
                                 <el-select v-model="formItem.transportationWay" :disabled=true placeholder="select">
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
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerAgreementNumber')" prop="customerAgreementNumber">
                                 <el-input v-model="formItem.customerAgreementNumber" :disabled='disabled' placeholder="select">
                                   
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
                          <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item class="form-list" :label=" $t('order.basicinfo.remark')" prop="remark">
                                    <el-input type="textarea" v-model="formItem.remark" :disabled='disabled' placeholder="Enter something..."></el-input>
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
                    orderNo: '', //必填   系统生成 不可编辑
                    orderDate: '', //必填    系统生成   不可编辑   
                    customerOrderNo: '',
                    customerName: '', //必填 系统生成 弹出框 
                    customerNo: '', //必填 系统生成 弹出框
                    supplierOrderNo: '',
                    supplierName: '', //必填 不可编辑 系统生成 
                    supplierNo: '', //必填 不可编辑 系统生成 
                    QuotationNo: '', // 不可编辑
                    orderStatus: '', //必填 orderStatus下拉框值 部分可编辑.........  可手动finished
                    deliveryDate: '', //必填 
                    incoterm: '', //必填 
                    incortermAea: '', //必填 
                    payment: '', //必填 
                    lcNo: '',
                    paymentDays: '',
                    paymentStatus: '', //不可编辑
                    departureCountry: '',
                    departurePort: '', //必填
                    destinationCountry: '',
                    destinationPort: '', //必填
                    transportationWay: '海运', //不可编辑
                    customerAgreementNumber: '',
                    customerAgreementDate: '',
                    remark: '',
                },
                //......................表单正则
                rules: {
                    customerName: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    customerNo: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    supplierName: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    supplierNo: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    deliveryDate: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    incoterm: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    incortermAea: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    payment: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    departurePort: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                    destinationPort: [{
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
                //           transportationWay: [{ // value: '海运', // label: this.$t('order.basicinfo.海运') // }],
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

    .form-list {}

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
