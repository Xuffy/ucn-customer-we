<template>
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
             </div>
         </div>  
</template>
<script>
    export default {
        name:'basicinfo',
        components: {

        },
        data(){
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
            }
        }
    }
</script>
<style scoped>
  .basicinfo_title {
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid black
    }

    .basicinfo_form {
        padding-top: 20px;
    }


</style>