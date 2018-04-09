<template>
    <div class="bookmark">
        <div class="title">
           <span>{{title}}</span>
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
        <div>
            <el-form ref="productFormTop" :model="productForm" label-width="190px">
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="categoryId" :label="$t('product.page.category')">
                            <!--<drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>-->
                            <el-input size="mini" v-model="productForm.categoryId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="nameEn" :label="$t('product.page.skuNameEN')">
                            <el-input size="mini" v-model="productForm.nameEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="isReadilyAvailable":label="$t('product.page.readilyAvailable')">
                            <el-select size="mini" v-model="productForm.isReadilyAvailable" placeholder="请选择">
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
            <el-form ref="productForm" :rule="rules" :model="productForm" label-width="190px">
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="customerSkuCode" :label="$t('product.page.customerSkuCode')">
                            <el-input size="mini" v-model="productForm.customerSkuCode"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <div class="section-number">
                            <el-form-item :label="$t('product.page.exwPrice')">
                                <el-input size="mini" class="section-input" v-model="productForm.minExwPrice"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxExwPrice"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="code" :label="$t('product.page.skuCode')">
                            <el-input size="mini" v-model="productForm.code"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="nameCn" :label="$t('product.page.skuNameCN')">
                            <el-input size="mini" v-model="productForm.nameCn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <div class="section-number">
                            <el-form-item class="section-item1" :label="$t('product.page.fobPrice')">
                                <el-input size="mini" class="section-input" v-model="productForm.minFobPrice"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxFobPrice"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="materialEn" :label="$t('product.page.skuMaterialsEN')">
                            <el-input size="mini" v-model="productForm.materialEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="country" :label="$t('product.page.country')">
                            <el-input size="mini" v-model="productForm.country"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="supplierName" :label="$t('product.page.supplierName')">
                            <el-input size="mini" v-model="productForm.supplierName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="outerCartonMethodEn"  :label="$t('product.page.packingMethodOfOuterCartonEN')">
                            <el-input size="mini" v-model="productForm.outerCartonMethodEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="methodPkgEn"  :label="$t('product.page.packingMethodEN')">
                            <el-input size="mini" v-model="productForm.methodPkgEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="deliveryDates"  :label="$t('product.page.deliveryDate')">
                            <el-input size="mini" v-model="productForm.deliveryDates"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="descEn" :label="$t('product.page.skuDescriptionEN')">
                            <el-input size="mini" v-model="productForm.descEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="descCn":label="$t('product.page.skuDescriptionCN')">
                            <el-input size="mini" v-model="productForm.descCn"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">{{$t('product.btn.search')}}</el-button>
            <el-button @click="clear" type="info" plain>{{$t('product.btn.clear')}}</el-button>
        </div>
        <div class="footer">
            <div class="btns">
                <el-button v-if="!hideBtns">{{$t('product.page.createInquiry')}}</el-button>
                <el-button v-if="!hideBtns">{{$t('product.page.createOrder')}}</el-button>
                <el-button v-if="!hideBtns">{{$t('product.page.compare')}}</el-button>
                <el-button @click="addToBookmark" v-if="!hideBtns">{{$t('product.page.addToBookmark')}}</el-button>
                <el-button v-if="!hideBtns">{{$t('product.page.downloadSelectedProducts')}}</el-button>
                <el-button @click="recover" type="primary" v-if="showRecover">{{$t('product.page.recover')}}</el-button>
            </div>
            <v-table :data="tableDataList" data-key="payment.tableData"></v-table>

        </div>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import {dropDownSingle} from '@/components/index'
    import sectionNumber from './sectionNumber'

    export default {
        name: "add-product",
        components:{
            dropDown:dropDownSingle,
            sectionNumber,
            VTable
        },
        props:{
            hideBtns:{
                type:Boolean,
                default:false
            },
            showRecover:{
                type:Boolean,
                default:false
            },
            title:{
                type:String,
                default:''
            }
        },
        data(){
            return{
                hideBody:true,            //是否显示body
                btnInfo:this.$t('product.page.showTheAdvance'),     //按钮默认文字显示
                productForm: {
                    categoryId: '',
                    nameEn: '',                  //产品英文名
                    isReadilyAvailable: '',      //
                    customerSkuCode: '',         //客户货号
                    minExwPrice: '',
                    maxExwPrice: '',
                    code: '',                    //供应商货号
                    nameCn: '',                  //产品中文名
                    minFobPrice: '',
                    maxFobPrice: '',
                    materialEn: '',              //英文材质
                    country: '',
                    supplierName: '',            //供应商名称
                    outerCartonMethodEn: '',     //外包装方式EN
                    methodPkgEn: '',             //产品包装方式EN
                    deliveryDates: '',           //交期
                    descEn: '',                  //产品英文描述
                    descCn: '',                  //产品中文描述
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
                //表格验证参数
                rules:[],




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
                this.$refs['productFormTop'].resetFields();
                this.$refs['productForm'].resetFields();
                this.$set(this.productForm,'minExwPrice','');
                this.$set(this.productForm,'maxExwPrice','');
                this.$set(this.productForm,'minFobPrice','');
                this.$set(this.productForm,'maxFobPrice','');
            },

            //搜查
            search(){
                this.$router.push('/product/sourcing/detail');
                // window.open('http://192.168.51.228、:8080/#/product');
            },


            handleChange(value) {
                console.log(value);

            },


            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
                })
            },

            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },

            //添加到书签
            addToBookmark(){
                this.$message({
                    message: 'Successfully Add',
                    type: 'success'
                });
            },


            //恢复删除的bookmark
            recover(){
                console.log(1)
            },
        },
        created(){
            this.getList();
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
    /*.speDropdown{*/
    /*!*position: absolute;*!*/
    /*!*width: 100%;*!*/
    /*height: 32px;*/
    /*!*background-color: #ffffff;*!*/
    /*!*z-index: 2000;*!*/
    /*}*/
    /*.speDropdown >>> .el-dropdown{*/
    /*height: 32px;*/
    /*}*/
    /*.speDropdown >>> .el-dropdown .checkInputBox{*/
    /*height: 32px;*/
    /*min-height: 32px;*/
    /*}*/
    /*.speDropdown >>> .el-dropdown .checkInputBox .checkInputBoxPl{*/
    /*height: 32px;*/
    /*line-height: 32px;*/
    /*}*/
    /*.speDropdown >>> .el-dropdown .checkInputBox .dataBox{*/
    /*height: 32px;*/
    /*}*/
    /*.speDropdown >>> .el-dropdown .checkInputBox .dataBox span{*/
    /*padding: 0 8px;*/
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
