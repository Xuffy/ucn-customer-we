<template>
  <div class='caculate'>
      <div class="caculate_title">Summary</div>
      <el-form :model="caculateForm" label-width="190px" class='caculateForm'>
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Number of Carton">                          
                            <el-input size="mini" v-model="caculateForm.totalNumberofCarton" :disabled=true></el-input>
                        </el-form-item>                                         
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Total Quantity">                          
                            <el-input size="mini" v-model="caculateForm.totalQuantity" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                   
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Volume">                          
                            <el-input size="mini" v-model="caculateForm.totalVolume" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Total Net Weight">                          
                            <el-input size="mini" v-model="caculateForm.totalNetWeight" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="email" label="Total Gross Weight">                          
                            <el-input size="mini" v-model="caculateForm.totalGrossWeight" :disabled=true></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                         <el-form-item prop="email" label="Quantity of SKU">                          
                            <el-input size="mini" v-model="caculateForm.quantityofSKU" :disabled=true></el-input>
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
                    totalNumberofCarton: '',
                    totalQuantity: '',
                    totalVolume: '',
                    totalNetWeight: '',
                    totalGrossWeight: '',
                    quantityofSKU: ''
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
