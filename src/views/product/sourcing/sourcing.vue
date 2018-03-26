<template>
    <div class="bookmark">
        <div class="title">
            Product Sourcing
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
            <!--<Button  class="title-btn" type="text">{{btnInfo}}</Button>-->
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="180px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Category">
                            <el-col :span="15">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Readily Available">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <!--<Form ref="formItem" :model="formItem" :label-width="180">-->
                <!--<Row>-->
                    <!--<Col :xs="24" :sm="12" :md="8" :lg="8">-->
                    <!--<FormItem class="form-spelist" label="Category" prop="Category">-->
                        <!--<drop-down :list="dataList"></drop-down>-->
                    <!--</FormItem>-->
                    <!--</Col>-->
                    <!--<Col :xs="24" :sm="12" :md="8" :lg="8">-->
                    <!--<FormItem class="form-list" label="SKU Name" prop="SKUName">-->
                        <!--<Input v-model="formItem.SKUName" placeholder="Enter something..."></Input>-->
                    <!--</FormItem>-->
                    <!--</Col>-->
                    <!--<Col :xs="24" :sm="12" :md="8" :lg="8">-->
                    <!--<FormItem class="form-list" label="Readily Available" prop="ReadilyAvailable">-->
                        <!--<Input v-model="formItem.ReadilyAvailable" placeholder="Enter something..."></Input>-->
                    <!--</FormItem>-->
                    <!--</Col>-->
                <!--</Row>-->
            <!--</Form>-->
        </div>
        <div class="body" :class="{hide:hideBody}">
            <el-form ref="form" :model="form" label-width="180px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Code">
                            <el-col :span="15">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="EXW Price">
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0" ></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Code">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Incoterm Price">
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0" ></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Materials">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Country">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Supplier Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Package Type">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Product Package Type">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Delivery Days">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="MOQ">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Description">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Description">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">Search</el-button>
            <el-button @click="clear" type="info" plain>Clear</el-button>
            <el-button @click="$router.push('/product/bookmark')" type="danger">Bookmark</el-button>
            <el-button @click="$router.push('/product/compareOverview')" type="danger">Compare</el-button>
            <el-button @click="$router.push('/product/message')" type="success">Message</el-button>
        </div>
    </div>
</template>

<script>

    // import {dropDown} from '@/components/index'

    export default {
        name: "sourcing",
        components:{
            // dropDown
        },
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
                },

                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },

                number:'',



                dataList:[
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checked:true,
                                        isActive:true,
                                        disabled: false
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        isActive:true,
                                        disabled: false
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        isActive:true,
                                        checked: false
                                    },
                                    {
                                        isActive:true,
                                        title: 'leaf 1-2-2'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            //切换body的收缩展开状态
            switchDisplay(){
                this.hideBody=!this.hideBody;
            },

            //清除填写的表格数据
            clear(name){
                console.log(1)
            },

            //搜查
            search(){
                console.log(this.dataList)
                this.$router.push('/product/detail');
                // window.open('http://192.168.51.228、:8080/#/product');
            },


            handleChange(value) {
                console.log(value);
            }
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
        color:#666666;
    }

    .title-btn{
        float: right;
        margin-right: 5px;
    }

    .body{
        overflow: hidden;
        max-height: 1400px;
        display: block;
        transition: max-height .5s cubic-bezier(.445,.05,.55,.95);
    }
    .hide{
        max-height: 0;

    }

    .form-spelist{
        margin-bottom: 10px !important;
    }
    .form-spelist >>> .ivu-form-item-content{
        line-height: normal;
    }

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
