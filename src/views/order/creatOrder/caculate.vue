<template>
  <div class='caculate'>
      <div class="caculate_title">Summary</div>
      <el-form :model="caculateForm" label-width="240px" class='caculateForm'>
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Quantity">                          
                            <el-input size="mini" v-model="caculateForm.totalQty" :disabled=true></el-input>
                        </el-form-item>                                         
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="SKU Type Quantity">                          
                            <el-input size="mini" v-model="caculateForm.skuQty" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Total SKU Price">                          
                            <el-input size="mini" v-model="caculateForm.totalSkuPrice" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Outer Carton Quantity">                          
                            <el-input size="mini" v-model="caculateForm.totalOuterCartonQty" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Total Outer Carton Gross Wet">                          
                            <el-input size="mini" v-model="caculateForm.totalGrossWeight" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Outer Carton Net Wet">                          
                            <el-input size="mini" v-model="caculateForm.totalNetWeight" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Total Outer Carton Volume">                          
                            <el-input size="mini" v-model="caculateForm.totalVolume" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Paid Amount">                          
                            <el-input size="mini" v-model="caculateForm.paidAmount" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Unpaid Amount">                          
                            <el-input size="mini" v-model="caculateForm.unpaidAmount" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>    
  </div>
</template>

<script>
    export default {
        name: 'caculate',
        data() {
            return {
                caculateForm: {
                    totalQty: '',
                    skuQty: '',
                    totalSkuPrice: '',
                    totalOuterCartonQty: '',
                    totalGrossWeight: '',
                    totalNetWeight: '',
                    totalVolume: '',
                    paidAmount: '',
                    unpaidAmount: '',
                }
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
        },
        created() {},
        methods: {

        },
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .caculate_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;
    }

    .caculateForm {
        margin-top: 20px;
        margin-bottom: 80px;
    }

</style>
