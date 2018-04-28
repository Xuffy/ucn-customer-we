<template>
    <div class="basicinfo">
             <div class="basicinfo_title">basicInfo</div>
             <div class="basicinfo_form">
                  <el-form ref='ruleform' :model="formItem" label-width="230px" :rules="rules" >
                    <el-row>
                     <el-col :xs="24" :sm="12" :md="12" :lg="8" 
                           v-for="(item, index) in $db.order.basicInfo"
                            :key="index"                         
                           >
                            <el-form-item 
                                  v-if='item.type=="text"'
                                 :label="item.label" 
                                 :prop="item.key">
                                <el-input                       
                                v-model='formItem[item.key]'                                   :disabled=item.ismodify||disabled||item.isDefaultEdit ></el-input>
                            </el-form-item>  
                             <el-form-item 
                                  v-if='item.type=="textdialog"'
                                 :label="item.label" 
                                 :prop="item.key">
                                <el-input                       
                                v-model='formItem[item.key]'                                   :disabled=item.ismodify||disabled||item.isDefaultEdit ></el-input>
                                <i class="el-icon-more-outline" style='fontSize:20px'  @click='dialogEdit'></i>
                            </el-form-item>                         
                             <el-form-item class="form-list"
                                   v-if='item.type=="datepicker"'
                                    :label="item.label" 
                                   :prop="item.key">
                                   <div style='display:flex;max-width:200px;'>
                                   <el-date-picker
                                      v-model='formItem[item.key]' 
                                      type="date"
                                     :disabled=item.ismodify||disabled||item.isDefaultEdit
                                    >
                                    </el-date-picker>
                                      </div>
                            </el-form-item>
                            
                             <el-form-item 
                                  v-if='item.type=="select"'
                                 :label="item.label"
                                 :prop="item.key">
                                 <el-select
                                          v-model='formItem[item.key]'                 
                                        :disabled=item.ismodify||disabled||item.isDefaultEdit >
<!--
                                          <el-option
                                              v-for="item in options"
                                              :key="item.value"
                                              :label="item.label"
                                              :value="item.value">
                                            </el-option>
-->
                                  </el-select>
                            </el-form-item>                  
                         </el-col>

                         <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                <el-form-item class="form-list" 
                                   v-for="(item, index) in $db.order.basicInfo"
                                   :key="index"
                                   v-if='item.type==="textarea"'
                                   :label="item.label" 
                                   :prop="item.key">
                                    <el-input type="textarea"
                                      v-model='formItem[item.key]'                  :disabled=item.ismodify||disabled||item.isDefaultEdit                   
                                     ></el-input>
                                </el-form-item>
                          </el-col>
                     </el-row>
                 </el-form>
             </div>
<!--
               <el-dialog :visible.sync="dialogEditDiv" width='70%'>
                </el-dialog>
-->
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
            podisabled: {
                type: Boolean,
                default: false
            }
        },
        components: {

        },
        data() {
            return {
                dialogEditDiv: false,
                formItem: {
                    orderNo:'', //必填   系统生成 不可编辑
                    orderDate: '', //必填    系统生成   可编辑    ??????
                    customerOrderNo: '',
                    customerName: '', //必填 系统生成  
                    customerNo: '', //必填 系统生成 
                    supplierOrderNo: '',
                    supplierName: '', //必填 不可编辑 系统生成 弹出框
                    supplierNo: '', //必填 不可编辑 系统生成 弹出框
                    quotationNo: '', // 不可编辑
                    status: '', //必填 orderStatus下拉框值 部分可编辑.........  可手动finished
                    deliveryDt: '', //必填 
                    incoterm: '', //必填 
                    incortermAea: '', //必填 
                    payment: '', //必填 
                    lcNo: '',
                    paymentDays: '',
                    paymentStatus: '', //不可编辑
                    departureCountry: '',
                    departurePort: '', //必填
                    destCountry: '', // ??????
                    destPort: '', //必填   //?????
                    transport: '1', //不可编辑
                    customerAgreementNo: '',
                    customerAgreementDt: '',
                    remark: '',
                    currency: ''
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
                    deliveryDt: [{
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
            dialogEdit() {
                this.dialogEditDiv = true;

            }
        },
        mounted() {

        },
        created() {

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
