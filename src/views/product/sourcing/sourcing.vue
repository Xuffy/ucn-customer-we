<template>
    <div class="bookmark">
        <div class="title">
            {{$t('product.title.productSourcing')}}
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="190px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.category')">
                            <!--<el-input v-model="form.name"></el-input>-->
                            <drop-down class="speDropdown" style="position: absolute;width: 100%;background-color: #ffffff;z-index: 2000" :list="dropData" ref="dropDown"></drop-down>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.skuName')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.readilyAvailable')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="body" :class="{hide:hideBody}">
            <el-form ref="form" :model="form" label-width="190px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.skuCode')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.exwPrice')">
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="number"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="number"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.vendorSKUCode')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.vendorSKUName')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.incotermPrice')">
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="number"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="number"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.skuMaterials')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.country')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.supplierName')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.packageType')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.productPackageType')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.deliveryDays')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.skuDescription')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item :label="$t('product.page.vendorSKUDescription')">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">{{$t('product.btn.search')}}</el-button>
            <el-button @click="clear" type="info" plain>{{$t('product.btn.clear')}}</el-button>
            <el-button @click="$router.push('/product/message')" type="success">Message</el-button>
            <el-button @click="$router.push('/product/logs')" type="success">Logs</el-button>
        </div>
    </div>
</template>

<script>

    import {dropDown} from '@/components/index'

    export default {
        name: "sourcing",
        components:{
            dropDown
        },
        props:{

        },
        data(){
            return{
                value:1,
                hideBody:true,            //是否显示body
                btnInfo:this.$t('product.page.showTheAdvance'),
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
                ],




                dropData:[{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
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
                this.$router.push('/product/sourcing/detail');
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
                    this.btnInfo=this.$t('product.page.showTheAdvance');
                }else{
                    this.btnInfo=this.$t('product.page.hideTheAdvance');
                }
            }
        }
    }
</script>

<style scoped>
    .speDropdown{
        /*position: absolute;*/
        /*width: 100%;*/
        /*height: 32px;*/
        /*background-color: #ffffff;*/
        /*z-index: 2000;*/
    }
    /*.speDropdown >>> .checkInputBox{*/
        /*height: 32px;*/
        /*line-height: 32px;*/
        /*min-height: 32px !important;*/
    /*}*/
    /*.speDropdown >>> .checkInputBox .checkInputBoxPl{*/
        /*height: 32px;*/
        /*line-height: 32px;*/
    /*}*/

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

    .outGroup{

    }
    .outGroup .label{
        width: 190px;
        float: left;
    }

    .body{
        overflow: hidden;
        max-height: 320px;
        display: block;
        transition: max-height .5s cubic-bezier(.445,.05,.55,.95);
    }
    .body .numberInput{
        width: 80px;
        text-align: left;
    }
    .body .numberInput >>> input{
        padding: 0;
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
