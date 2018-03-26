<template>
    <div class="SupplierSourcing">
        <div class="title">
            Supplier Sourcing
            <el-button @click="switchDisplay" class="title-btn" type="text">{{btnInfo}}</el-button>
        </div>
<!--        搜索条件-->
        <div class="body" :class="{hide:hideBody}">
            <el-form ref="formItem" :model="formItem" label-width="140px">
                <el-row>
                      <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="Sku Name" prop="SkuName">
                            <el-input v-model="formItem.SkuName" placeholder="Enter something..."></el-input>
                        </el-form-item>
                     </el-col>
<!--                    下拉选择Category-->
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="Category" prop="Category">
                            <el-input v-model="formItem.Category" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
<!--                    下拉选择SupplierType-->
                  <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="Supplier Type" prop="SupplierType">
                            <el-input v-model="formItem.SupplierType" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                      <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="Business Scope" prop="businessScope">
                            <el-input v-model="formItem.businessScope" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="SKU Name" prop="skuName">
                            <el-input v-model="formItem.skuName" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="SKU Code" prop="SKUCode">
                            <el-input v-model="formItem.SKUCode" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" label="Vendor SKU Code" prop="VendorSkuCode">
                            <el-input v-model="formItem.VendorSkuCode" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary" class="search">Search</el-button>
            <el-button @click="clear('formItem')">Clear</el-button>
        </div>
<!--      搜索结果  -->
        <div>
<!--            跳转按钮行-->
             <div class="btnline">
                  <el-button  type="primary" >Create Inquiry</el-button>
                  <el-button  type="primary" >Create Order</el-button>
                  <el-button  type="primary" >Compare</el-button>
                  <el-button  type="primary" >Add to Bookmark</el-button>
                  <el-button  type="primary" >Download the Selected Supplier</el-button>
              </div>  
              <div>
                  这块表格
              </div>          
        </div>
    </div>
</template>

<script>
    export default {
        name: "SupplierSourcing",
        components: {

        },
        props: {

        },
        data() {
            return {
                value: 1,
                hideBody: true, //是否显示body
                btnInfo: 'Show the Advance',
                formItem: {
                    SupplierName: '',
                    Category: '',
                    SupplierType: '',
                    BusinessScope: '',
                    SkuName: '',
                    SkuCode: '',
                    VendorSkuCode: '',
                },
            }
        },
        methods: {
            //切换body的收缩展开状态
            switchDisplay() {
                this.hideBody = !this.hideBody;
            },

            //清除填写的表格数据
            clear(name) {
                this.$refs[name].resetFields();
            },

            //搜查
            search() {
                this.$router.push('/product/detail');
            },
        },
        created() {

        },
        watch: {
            hideBody(n) {
                if (n) {
                    this.btnInfo = 'Show the Advance';
                } else {
                    this.btnInfo = 'Hide the Advance';
                }
            }
        }
    }

</script>

<style scoped>
    .SupplierSourcing {
        padding-right: 20px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color: #666666;
    }

    .title-btn {
        float: right;
        margin-right: 5px;
    }

    .title-btn>>>span {
        color: #118ee9;
    }

    .body {
        margin-top: 10px;
        overflow: hidden;
        max-height: 1400px;
        display: block;
        transition: max-height .5s cubic-bezier(.445, .05, .55, .95);
    }

    .hide {
        max-height: 43px;

    }

    /*.show{*/

    /*height: auto;*/

    /*}*/

    .form-list {
        margin-bottom: 10px;
    }

    .el-input {
        /*        width:200px;*/
    }

    .btn-group {
        text-align: center;
        margin-top: 10px;
    }

    .btn-group .search {
        margin-right: 30px;
    }

    .btnline {
        margin-top: 20px;
        width: 100%;
        border-top: 1px solid black;
    }

    .btnline .el-button {
        margin-right: 8px;
        margin-top: 20px;
    }

</style>
