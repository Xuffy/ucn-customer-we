<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <div class="basicinfo">
             <div class="basicinfo_title">Basic Info</div>
             <div class="basicinfo_form">
                  <el-form ref="formItem" :model="formItem" label-width="180px">
                    <el-row>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="供应商合同号" prop="SupplierName">
                                <el-input v-model="formItem.SupplierName" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                         <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="合同确认序号" prop="SupplierName">
                                <el-input v-model="formItem.SupplierName" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                         <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="合同日期" prop="SupplierName">
                                <el-input v-model="formItem.SupplierName" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
                         <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户合同" prop="SupplierName">
                                <el-input v-model="formItem.SupplierName" placeholder="Enter something..."></el-input>
                            </el-form-item>
                         </el-col>
<!--                        下拉选择                      -->
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="供应商简称" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>                 
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="合同状态" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                         
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户确认日期" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>              
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="公司抬头" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户编号" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户简称" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="价格条款" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="付款方式" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="信用证号" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="起运国" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="出运口岸" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                         <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="目的国" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="目的口岸" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="运输方式" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="币种" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户协议号" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="客户协议日期" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="可否分批" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                          <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="外销员" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                         <el-col :xs="24" :sm="12" :md="8" :lg="6">
                            <el-form-item class="form-list" label="参考客户询价单号码" prop="SupplierName">
                                 <el-select v-model="formItem.SupplierName" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </el-form-item>
                         </el-col>
                    </el-row>
                </el-form>
                  <div class="basicinfo_other">
    <!--                order remark-->
                    <el-row>
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                             <div class="order_remark">
                                 <div class='order_remark_title'>Order Remark</div>
                                 <div>
                                     <el-input
                                          type="textarea"
                                          :rows="4"
                                          placeholder="请输入内容"
                                          v-model="textarea">
                                        </el-input>
                                 </div>
                                </div>  
                         </el-col>
    <!--                 attchment         -->
                          <el-col :xs="24" :sm="12" :md="12" :lg="8">
                             <div class="attchment">
                                <div class="order_remark_title">Attchment</div>
                            </div>
                           </el-col>
                    </el-row>
                   </div>
             </div>
         </div>       
  </div>
</template>

<script>
    export default {
        name: 'creatOrder',
        data() {
            return {
                formItem: {
                    SupplierName: '',
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }],
                textarea: "" //orderremark输入内容
            }
        },
        created() {},
        methods: {}
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color: #666666;
        border-bottom: 1px solid #BEBEBE
    }

    .basicinfo_title {
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid black
    }

    .basicinfo_form {
        padding-top: 20px;
    }

    .order_remark {
        width: 400px;
    }

    .order_remark_title {
        margin-bottom: 20px;
    }

    .basicinfo_other {
        margin-left: 80px;
    }

</style>
