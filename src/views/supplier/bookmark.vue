<template>
    <div class="SuPPlierBookmark">
        <div class="title">
            Supplier Sourcing
            <Button @click="switchDisplay" class="title-btn" type="text">{{btnInfo}}</Button>
        </div>
<!--        搜索条件-->
        <div class="body" :class="{hide:hideBody}">
            <Form ref="formItem" :model="formItem" :label-width="180">
                <Row>
                      <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Sku Name" prop="SkuName">
                            <Input v-model="formItem.SkuName" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
<!--                    下拉选择Category-->
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Category" prop="Category">
                            <Input v-model="formItem.Category" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
<!--                    下拉选择SupplierType-->
                  <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Supplier Type" prop="SupplierType">
                            <Input v-model="formItem.SupplierType" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                      <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Business Scope" prop="businessScope">
                            <Input v-model="formItem.businessScope" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Name" prop="skuName">
                            <Input v-model="formItem.skuName" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Code" prop="SKUCode">
                            <Input v-model="formItem.SKUCode" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Code" prop="VendorSkuCode">
                            <Input v-model="formItem.VendorSkuCode" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </div>
        <div class="btn-group">
            <Button @click="search" type="primary" class="search">Search</Button>
            <Button @click="clear('formItem')">Clear</Button>
        </div>
<!--      搜索结果  -->
        <div>
<!--            跳转按钮行-->
             <div class="btnline">
                  <Button  type="primary" >Create Inquiry</Button>
                  <Button  type="primary" >Create Order</Button>
                  <Button  type="primary" >Compare</Button>
                  <Button  type="primary" >Download the Selected Supplier</Button>
                  <Button  type="primary" :disabled='disabled' >Remove</Button>
              </div>  
              <div>
                  这块表格
              </div>          
        </div>
    </div>
</template>

<script>
    export default {
        name: "SuPPlierBookmark",
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
                disabled: true //切换remove按钮disable状态
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
    .SuPPlierBookmark {
        padding-right: 20px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
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

    .btnline button {
        margin-right: 8px;
        margin-top: 20px;
    }

</style>
