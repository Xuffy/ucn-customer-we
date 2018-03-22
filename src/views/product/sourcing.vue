<template>
    <div class="bookmark">
        <div class="title">
            Product Sourcing
            <Button @click="switchDisplay" class="title-btn" type="text">{{btnInfo}}</Button>
        </div>
        <div class="body" :class="{hide:hideBody}">
            <Form ref="formItem" :model="formItem" :label-width="180">
                <Row>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Category" prop="Category">
                            <Input v-model="formItem.Category" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Name" prop="SKUName">
                            <Input v-model="formItem.SKUName" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Readily Available" prop="ReadilyAvailable">
                            <Input v-model="formItem.ReadilyAvailable" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Code" prop="SKUCode">
                            <Input v-model="formItem.SKUCode" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="EXW Price">
                            <InputNumber :min="1" v-model="formItem.minEXWPrice"></InputNumber>
                            ~
                            <InputNumber :min="1" v-model="formItem.maxEXWPrice"></InputNumber>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Code" prop="VendorSKUCode">
                            <Input v-model="formItem.VendorSKUCode" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Name" prop="VendorSKUName">
                            <Input v-model="formItem.VendorSKUName" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Incoterm Price">
                            <InputNumber :min="1" v-model="formItem.minIncotermPrice"></InputNumber>
                            ~
                            <InputNumber :min="1" v-model="formItem.maxIncotermPrice"></InputNumber>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Materials" prop="SKUMaterials">
                            <Input v-model="formItem.SKUMaterials" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Country" prop="Country">
                            <Input v-model="formItem.Country" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Supplier Name" prop="SupplierName">
                            <Input v-model="formItem.SupplierName" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Package Type" prop="PackageType">
                            <Input v-model="formItem.PackageType" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Product Package Type" prop="ProductPackageType">
                            <Input v-model="formItem.ProductPackageType" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Delivery Days" prop="DeliveryDays">
                            <Input v-model="formItem.DeliveryDays" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="MOQ" prop="MOQ">
                            <Input v-model="formItem.MOQ" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Description" prop="SKUDescription">
                            <Input v-model="formItem.SKUDescription" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Description" prop="VendorSKUDescription">
                            <Input v-model="formItem.VendorSKUDescription" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </div>
        <div class="btn-group">
            <Button @click="search" type="primary" class="search">Search</Button>
            <Button @click="clear('formItem')">Clear</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bookmark",
        props:{

        },
        data(){
            return{
                value:1,
                hideBody:true,            //是否显示body
                btnInfo:'Show the Advance',
                formItem:{
                    Category:'',
                    SKUName:'',
                    ReadilyAvailable:'',
                    SKUCode:'',
                    minEXWPrice:0,
                    maxEXWPrice:0,
                    VendorSKUCode:'',
                    VendorSKUName:'',
                    minIncotermPrice:0,
                    maxIncotermPrice:0,
                    SKUMaterials:'',
                    Country:'',
                    SupplierName:'',
                    PackageType:'',
                    ProductPackageType:'',
                    DeliveryDays:'',
                    MOQ:'',
                    SKUDescription:'',
                    VendorSKUDescription:''
                }
            }
        },
        methods:{
            //切换body的收缩展开状态
            switchDisplay(){
                this.hideBody=!this.hideBody;
            },

            //清除填写的表格数据
            clear(name){
                this.$refs[name].resetFields();
            },

            //搜查
            search(){
                console.log(this.formItem)
                this.$router.push('/product/detail');
            },
        },
        created(){

        },
        watch:{
            hideBody(n){
                if(n){
                    this.btnInfo='Show the Advance';
                }else{
                    this.btnInfo='Hide the Advance';
                }
            }
        }
    }
</script>

<style scoped>
    .bookmark{
        padding-right: 20px;
    }

    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
    }
    .title-btn{
        float: right;
        margin-right: 5px;
    }
    .title-btn >>> span{
        color:#118ee9;
    }

    .body{
        margin-top: 10px;
        overflow: hidden;
        max-height: 1400px;
        display: block;
        transition: max-height .5s cubic-bezier(.445,.05,.55,.95);
    }
    .hide{
        max-height: 43px;

    }
    /*.show{*/
    /*height: auto;*/
    /*}*/
    .form-list{
        margin-bottom: 10px;
    }

    .btn-group{
        text-align: center;
        margin-top: 10px;
    }
    .btn-group .search{
        margin-right: 30px;
    }
</style>