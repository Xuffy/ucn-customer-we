<template>
    <div class="bookmark">
        <div class="title">
            <span>{{$lang.product.title}}</span>
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
        <div>
            <el-form ref="productFormTop" :model="productForm" :rules="productFormRules" label-width="190px">
                <el-row class="speZone">
                    <el-col v-if="v.isDefaultShow && v.belongPage==='sellerProductOverview'" v-for="v in $db.product.buyerBasic" :key="v.key" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <drop-down v-model="productForm[v.key]" v-if="v.showType==='dropdown'" :list="dropData" ref="dropDown"></drop-down>
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]"></el-input>
                            <el-select class="speSelect" v-if="v.showType==='select'" size="mini" v-model="productForm[v.key]" placeholder="不限">
                                <el-option
                                        v-for="item in readilyAvailableOptions"
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
        <div class="body" :class="{hide:hideBody}">
            <el-form ref="productForm" :rule="productFormRules" :model="productForm" label-width="190px">
                <el-row class="speZone">
                    <el-col v-if="!v.isDefaultShow && v.belongPage==='sellerProductOverview'" v-for="v in $db.product.buyerBasic" :key="v.key" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <drop-down v-if="v.showType==='dropdown'" class="" :list="dropData" ref="dropDown"></drop-down>
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]"></el-input>
                            <el-select class="speSelect" v-if="v.showType==='select'" size="mini" v-model="productForm[v.key]" placeholder="请选择">
                                <el-option
                                        v-for="item in readilyAvailableOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <div v-if="v.showType==='exwNumber'" class="section-number">
                                <el-input size="mini" class="section-input" v-model="productForm.minExwPrice"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxExwPrice"></el-input>
                            </div>
                            <div v-if="v.showType==='fobNumber'" class="section-number">
                                <el-input size="mini" class="section-input" v-model="productForm.minFobPrice"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxFobPrice"></el-input>
                            </div>
                            <el-input v-if="v.showType==='number'" size="mini" v-model="productForm[v.key]"></el-input>
                        </el-form-item>
                    </el-col>

                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="customerSkuCode" :label="$t('productSeller.page.customerSkuCode')">-->
                    <!--<el-input size="mini" v-model="productForm.customerSkuCode"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<div class="section-number">-->
                    <!--<el-form-item :label="$t('productSeller.page.exwPrice')">-->
                    <!--<el-input size="mini" class="section-input" v-model="productForm.minExwPrice"></el-input>-->
                    <!--<div class="section-line">&#45;&#45;</div>-->
                    <!--<el-input size="mini" class="section-input" v-model="productForm.maxExwPrice"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</div>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="code" :label="$t('productSeller.page.skuCode')">-->
                    <!--<el-input size="mini" v-model="productForm.code"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="nameCn" :label="$t('productSeller.page.skuNameCN')">-->
                    <!--<el-input size="mini" v-model="productForm.nameCn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<div class="section-number">-->
                    <!--<el-form-item class="section-item1" :label="$t('productSeller.page.fobPrice')">-->
                    <!--<el-input size="mini" class="section-input" v-model="productForm.minFobPrice"></el-input>-->
                    <!--<div class="section-line">&#45;&#45;</div>-->
                    <!--<el-input size="mini" class="section-input" v-model="productForm.maxFobPrice"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</div>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="materialEn" :label="$t('productSeller.page.skuMaterialsEN')">-->
                    <!--<el-input size="mini" v-model="productForm.materialEn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="country" :label="$t('productSeller.page.country')">-->
                    <!--<el-input size="mini" v-model="productForm.country"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="supplierName" :label="$t('productSeller.page.supplierName')">-->
                    <!--<el-input size="mini" v-model="productForm.supplierName"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="outerCartonMethodEn"  :label="$t('productSeller.page.packingMethodOfOuterCartonEN')">-->
                    <!--<el-input size="mini" v-model="productForm.outerCartonMethodEn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="methodPkgEn"  :label="$t('productSeller.page.packingMethodEN')">-->
                    <!--<el-input size="mini" v-model="productForm.methodPkgEn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="deliveryDates"  :label="$t('productSeller.page.deliveryDays')">-->
                    <!--<el-input size="mini" v-model="productForm.deliveryDates"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="descEn" :label="$t('productSeller.page.skuDescriptionEN')">-->
                    <!--<el-input size="mini" v-model="productForm.descEn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                    <!--<el-form-item prop="descCn":label="$t('productSeller.page.skuDescriptionCN')">-->
                    <!--<el-input size="mini" v-model="productForm.descCn"></el-input>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->

                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">{{$lang.product.search}}</el-button>
            <el-button @click="clear" type="info" plain>{{$lang.product.clear}}</el-button>
        </div>
        <div class="footer">
            <div class="btns">
                <el-button @click="addNewProduct">{{$lang.product.createInquiry}}</el-button>
                <el-button>{{$lang.product.createOrder}}</el-button>
                <el-button>{{$lang.product.compare}}</el-button>
                <el-button>{{$lang.product.download+'(0)'}}</el-button>
                <el-button type="danger">{{$lang.product.delete}}</el-button>
            </div>

            <v-table
                    :data="tableDataList"
                    :buttons="[{label: 'detail', type: 1}]"
                    @action="btnClick"></v-table>

        </div>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import {dropDownSingle} from '@/components/index'
    import sectionNumber from '../product/sectionNumber'

    export default {
        name: "overview",
        components:{
            dropDown:dropDownSingle,
            sectionNumber,
            VTable
        },
        props:{

        },
        data(){
            return{

                hideBody:true,            //是否显示body
                btnInfo:this.$lang.product.advanced,     //按钮默认文字显示

                //表格字段绑定
                productForm: {
                    categoryId: '',
                    nameCnLike: "",
                    readilyAvailable: '',
                    customerSkuCodeLike: "",
                    minExwPrice: '',
                    maxExwPrice: '',
                    codeLike: "",
                    nameEnLike: "",
                    minFobPrice: '',
                    maxFobPrice: '',
                    materialEnLike: "",
                    country: '',
                    supplierNameLike: "",
                    outerCartonMethodEnLike: "",
                    methodPkgEnLike: "",
                    deliveryDates: '',
                    descEnLike: "",
                    descCnLike: "",







                    pn: 1,
                    ps: 50,


                    recycle: false,         //是否是在recycle bin里请求
                    operatorFilters: [
                        {
                            operator: "",
                            property: "",
                            value: {}
                        }
                    ],

                    sorts: [
                        {
                            orderBy: "",
                            orderType: "",
                        }
                    ],

                },
                //表格验证参数
                productFormRules:{
                    nameCn: [
                        { max: 10, message: `长度在 3 到 10 个字符`, trigger: 'blur' }
                    ],
                },
                //表格配置参数
                readilyAvailableOptions: [
                    {
                        label: 'not ready',
                        value: false
                    },
                    {
                        label: 'ready',
                        value: true
                    },
                ],

                //Category下拉组件数据
                dropData:[
                    {
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

                //底部table数据
                tableDataList:[],
                dataColumn:[]
            }
        },
        methods:{
            //切换body的收缩展开状态
            switchDisplay(){
                this.hideBody=!this.hideBody;
            },

            //清除填写的表格数据
            clear(){
                // this.$refs.dropDown.selectedList=[];
                this.$refs['productFormTop'].resetFields();
                this.$refs['productForm'].resetFields();
                this.$set(this.productForm,'minExwPrice','');
                this.$set(this.productForm,'maxExwPrice','');
                this.$set(this.productForm,'minFobPrice','');
                this.$set(this.productForm,'maxFobPrice','');
            },

            //搜查
            search(){
                console.log(this.productForm)
                // this.$set(this.productForm,'categoryId',this.$refs.dropDown.selectedList.id);
                //
                // this.$ajax.post(this.$apis.get_productList,{});

            },

            handleChange(value) {
                console.log(value);
            },

            //获取table数据
            getData() {
                this.$ajax.post(this.$apis.get_productList,{}).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
                    console.log(res.datas)
                }).catch(err=>{
                    console.log(err)
                });
            },

            //表格按钮点击
            btnClick(item){
                this.windowOpen('/sellerProduct/detail',{id:item.id.value});
            },


            addNewProduct(){

            },
        },
        created(){
            this.getData();
            console.log(this.$db,'db')
            console.log(this.$lang,'lang')
        },

        watch:{
            hideBody(n){
                if(n){
                    this.btnInfo=this.$lang.product.advanced;
                }else{
                    this.btnInfo=this.$lang.product.hideTheAdvanced;
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

    .head-list{

    }
    .head-list label{
        width: 190px;
        display: inline-block;
        height: 42px;
        line-height: 42px;
        text-align: right;
        font-size: 14px;
        color:#606266;
        padding: 0 12px 0 0;
        box-sizing: border-box;
        float: left;
    }
    .head-list .content{
        margin-left: 190px;
        height: 42px;
    }
    .head-list .content >>> input{
        height: 42px;
    }


    .speZone >>> label{

    }
    .speZone >>> input{

    }

    .section-number{

    }
    .section-number .section-input{
        float: left;
        width: 40%;
    }
    .section-number .section-line{
        float: left;
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


    .speSelect{
        width: 100%;
    }




    .btn-group{
        text-align: center;
        margin-top: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e0e0e0;
    }
    .btn-group .search{
        margin-right: 30px;
    }

    .footer{

    }
    .footer .btns{
        padding: 10px 0;
    }
</style>
