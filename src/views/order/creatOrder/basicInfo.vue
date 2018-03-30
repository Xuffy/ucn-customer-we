<template>
    <div class="basicinfo">
             <div class="basicinfo_title">{{$t('order.basicinfo.basicInfo')}}</div>
             <div class="basicinfo_form">
                  <el-form ref="formItem" :model="formItem" label-width="210px">
                    <el-row>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.orderNumber')" prop="orderNumber">
                                <el-input v-model="formItem.orderNumber" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list":label=" $t('order.basicinfo.orderDate')" prop="orderDate">
                                <el-input v-model="formItem.orderDate" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.purchaseOrderNumber')" prop="purchaseOrderNumber">
                                <el-input v-model="formItem.purchaseOrderNumber" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerShortName')" prop="customerShortName">
                                <el-input v-model="formItem.customerShortName" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerSerialNumber')" prop="customerSerialNumber">
                                 <el-input v-model="formItem.customerSerialNumber" placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>                 
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.salesOrderNumber')" prop="salesOrderNumber">
                                 <el-input v-model="formItem.salesOrderNumber" placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierShortName')" prop="supplierShortName">
                                 <el-input v-model="formItem.supplierShortName" placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>              
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.supplierSerialNumber')" prop="supplierSerialNumber">
                                 <el-input v-model="formItem.supplierSerialNumber" placeholder="please enter">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.referencesInquiryID')" prop="referencesInquiryID">
                                 <el-select v-model="formItem.referencesInquiryID" placeholder="select">
                                    <el-option
                                      v-for="item in referencesInquiryID"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.orderStatus')" prop="orderStatus">
                                 <el-select v-model="formItem.orderStatus" placeholder="select">
                                    <el-option
                                      v-for="item in orderStatus"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.estDeliveryDate')" prop="estDeliveryDate">
                                 <el-input v-model="formItem.estDeliveryDate" placeholder="please enter">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.actDeliveryDate')" prop="actDeliveryDate">
                                 <el-input v-model="formItem.actDeliveryDate" placeholder="please enter">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.priceTerms')" prop="priceTerms">
                                 <el-select v-model="formItem.priceTerms" placeholder="select">
                                    <el-option
                                      v-for="item in priceTerms"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.incortermAea')" prop="incortermAea">
                                 <el-input v-model="formItem.incortermAea" placeholder="select">                               
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentMethod')" prop="paymentMethod">
                                 <el-input v-model="formItem.paymentMethod" placeholder="select">
                                    
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.lcNumber')"prop="lcNumber">
                                 <el-input v-model="formItem.lcNumber" placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.countryofShipmentOrigin')" prop="countryofShipmentOrigin">
                                 <el-input v-model="formItem.countryofShipmentOrigin" placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.portofLoading')" prop="portofLoading">
                                 <el-input v-model="formItem.portofLoading" placeholder="select">
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.destinationCountry')" prop="destinationCountry">
                                 <el-input v-model="formItem.destinationCountry" placeholder="Please enter">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.destinationPort')" prop="destinationPort">
                                 <el-input v-model="formItem.destinationPort" placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.transportationWay')" prop="transportationWay">
                                 <el-select v-model="formItem.transportationWay" placeholder="select">
                                    <el-option
                                      v-for="item in transportationWay"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerAgreementID')" prop="customerAgreementID">
                                 <el-input v-model="formItem.customerAgreementID" placeholder="select">
                                   
                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.customerAgreementDate')" prop="customerAgreementDate">
                                 <el-input v-model="formItem.customerAgreementDate" placeholder="select">

                                  </el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.batchForLogistics')" prop="batchForLogistics">
                                 <el-select v-model="formItem.batchForLogistics" placeholder="select">
                                    <el-option
                                      v-for="item in batchForLogistics"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentCondition')" prop="paymentCondition">
                                 <el-select v-model="formItem.paymentCondition" placeholder="select">
                                    <el-option
                                      v-for="item in paymentCondition"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.agreeOnDateInterval')" prop="agreeOnDateInterval">
                                <el-input v-model="formItem.agreeOnDateInterval" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.paymentStatus')" prop="paymentStatus">
                                <el-input v-model="formItem.paymentStatus" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" :label=" $t('order.basicinfo.comments')" prop="comments">
                                <el-input v-model="formItem.comments" placeholder="Enter something..."></el-input>
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
        components: {

        },
        data() {
            return {
                formItem: {
                    orderNumber: '',
                    orderDate: '',
                    purchaseOrderNumber: '',
                    customerShortName: '',
                    customerSerialNumber: '',
                    salesOrderNumber: '',
                    supplierShortName: '',
                    supplierSerialNumber: '',
                    referencesInquiryID: '', //referencesInquiryID下拉框值
                    orderStatus: '', //orderStatus下拉框值
                    estDeliveryDate: '',
                    actDeliveryDate: '',
                    priceTerms: '', //下拉框值
                    incortermAea: '',
                    paymentMethod: '',
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
        }
    }

</script>
<style scoped>
    .basicinfo_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
    }

    .basicinfo_form {
        padding-top: 20px;
    }

</style>
