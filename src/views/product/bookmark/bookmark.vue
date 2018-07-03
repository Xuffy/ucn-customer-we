<template>
    <div class="bookmark">
        <div class="title">
            <span>Product Bookmark</span>
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
                            <drop-down v-model="productForm[v.key]" v-if="v.showType==='dropdown'" :list="categoryList" :defaultProps="defaultProps"
                                       ref="dropDown" :expandOnClickNode="false"></drop-down>
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]" :placeholder="$i.product.pleaseInput"></el-input>
                            <el-select class="speSelect" v-if="v.showType==='select'" size="mini" v-model="productForm[v.key]" placeholder="不限">
                                <el-option
                                        v-for="item in v.options"
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
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]" :placeholder="$i.product.pleaseInput"></el-input>
                            <el-select multiple collapse-tags class="speSelect" v-if="v.showType==='select'" size="mini" v-model="selectCountry" :placeholder="$i.product.pleaseChoose">
                                <el-option
                                        v-for="item in countryOption"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                            <div v-if="v.showType==='exwNumber'" class="section-number">
                                <el-input size="mini" class="section-input" v-model="productForm.minExwPrice" :placeholder="$i.product.pleaseInput"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxExwPrice" :placeholder="$i.product.pleaseInput"></el-input>
                            </div>
                            <div v-if="v.showType==='fobNumber'" class="section-number">
                                <el-input size="mini" class="section-input" v-model="productForm.minFobPrice" :placeholder="$i.product.pleaseInput"></el-input>
                                <div class="section-line">--</div>
                                <el-input size="mini" class="section-input" v-model="productForm.maxFobPrice" :placeholder="$i.product.pleaseInput"></el-input>
                            </div>
                            <el-input v-if="v.showType==='number'" size="mini" v-model="productForm[v.key]" :placeholder="$i.product.pleaseInput"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" :loading="disabledSearch" type="primary">{{$i.product.search}}</el-button>
            <el-button @click="clear" type="info" plain>{{$i.product.clear}}</el-button>
        </div>
        <div class="footer">
            <v-table
                    code="udata_purchase_sku_bookmark_overview"
                    :height="500"
                    v-loading="loadingTable"
                    :data="tableDataList"
                    :buttons="[{label: 'Detail', type: 1}]"
                    @change-checked="changeChecked"
                    @action="btnClick">
                <template slot="header">
                    <div class="btns">
                        <el-button @click="createInquiry">{{$i.product.createInquiry}}</el-button>
                        <el-button @click="createOrder">{{$i.product.createOrder}}</el-button>
                        <el-button @click="compare" :disabled="disabledCompare">{{$i.product.compare}}</el-button>
                        <el-button @click="addProduct">{{$i.product.addNewProductEn}}</el-button>
                        <el-button @click="manuallyAddProduct">{{$i.product.manuallyAdd}}</el-button>
                        <el-button @click="()=>$refs.importCategory.show()">{{$i.button.upload}}</el-button>
                    </div>
                </template>
            </v-table>
            <page
                    @size-change="changeSize"
                    @change="changePage"
                    :page-sizes="[50,100,200,500]"
                    :page-data="pageData"></page>
        </div>

        <el-dialog :title="$i.product.addProduct" :visible.sync="addProductDialogVisible" width="80%">
            <product
                    :disableBookmarkChoose="true"
                    :forceUpdateNumber="forceUpdateNumber"
                    :title="addProductTitle"
                    :type="addProductType"
                    :disabledOkBtn="disabledOkBtn"
                    :hideBtn="true"
                    :isInModify="true"
                    @handleCancel="handleCancel"
                    @handleOK="handleOkClick"></product>
        </el-dialog>

        <el-dialog :title="$i.product.followingProductCantAddOrder" :visible.sync="dialogFormVisible" width="50%">
            <el-table
                    :data="disabledOrderList"
                    border
                    style="width: 100%">
                <el-table-column
                        label="#"
                        width="180">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$i.product.skuNameEn"
                        width="180">
                    <template slot-scope="scope">
                        {{scope.row.nameEn.value}}
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$i.product.skuCode">
                    <template slot-scope="scope">
                        {{scope.row.code.value}}
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <v-import-template ref="importCategory" code="PRODUCT_PURCHASE" biz-code="PRODUCT_PURCHASE"></v-import-template>

    </div>
</template>

<script>
    import {dropDownSingle,VPagination,VImportTemplate,VTable} from '@/components/index'
    import sectionNumber from '../../product/sectionNumber'
    import product from '../addProduct'
    import { mapActions } from 'vuex'

    export default {
        name: "overview",
        components:{
            dropDown:dropDownSingle,
            sectionNumber,
            VTable,
            product,
            page:VPagination,
            VImportTemplate
        },

        data(){
            return{
                /**
                 * 字典配置
                 * */
                statusOption:[],
                lengthOption:[],
                weightOption:[],
                volumeOption:[],
                dateOption:[],
                skuUnitOption:[],
                countryOption:[],


                hideBody:true,            //是否显示body
                btnInfo:this.$i.product.advanced,     //按钮默认文字显示
                disabledSearch:false,
                loadingTable:false,                     //是否让table处于加载状态
                selectList:[],
                downloadBtnInfo:'All',
                pageData:{},
                //btn禁用状态
                disabledCompare:true,
                disabledRemove:true,
                addProductDialogVisible:false,      //新增产品弹出框显示隐藏
                addProductTitle:'',
                addProductType:'product',
                disabledOkBtn:false,
                disableClickDelete:false,
                forceUpdateNumber:11,               //改变数值以驱动内部更新
                disabledOrderList:[],               //不能添加到order的list
                dialogFormVisible:false,
                selectCountry:[],
                //表格字段绑定
                productForm: {
                    categoryId: null,
                    nameCnLike: "",
                    readilyAvailable: null,
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
                    deliveryDates: null,
                    descEnLike: "",
                    descCnLike: "",

                    pn: 1,
                    ps: 50,

                    recycle: false,         //是否是在recycle bin里请求
                    operatorFilters: [
                    //     {
                    //         operator: "",
                    //         property: "",
                    //         value: {}
                    //     }
                    ],

                    sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    ],
                },
                //表格验证参数
                productFormRules:{

                },


                //Category下拉组件数据
                categoryList:[
                    {
                        id:121213,
                        name:"系统分类",
                        children:[]
                    },
                    {
                        id:513522625,
                        name:"自己的分类",
                        children:[]
                    },
                ],
                defaultProps:{
                    label:'name',
                    children:'children'
                },

                //底部table数据
                tableDataList:[],
                dataColumn:[],

                disabledLine:[]
            }
        },
        methods:{
            ...mapActions([
                'setRecycleBin','setLog'
            ]),
            //切换body的收缩展开状态
            switchDisplay(){
                this.hideBody=!this.hideBody;
            },
            //清除填写的表格数据
            clear(){
                this.$refs['productFormTop'].resetFields();
                this.$refs['productForm'].resetFields();
                this.$set(this.productForm,'categoryId','');
                this.$set(this.productForm,'minExwPrice','');
                this.$set(this.productForm,'maxExwPrice','');
                this.$set(this.productForm,'minFobPrice','');
                this.$set(this.productForm,'maxFobPrice','');
                this.selectCountry=[];
            },
            //搜查
            search(){
                this.disabledSearch=true;
                if(!this.productForm.maxExwPrice){
                    this.productForm.maxExwPrice=null;
                }else{
                    this.productForm.maxExwPrice=Number(this.productForm.maxExwPrice);
                }
                if(!this.productForm.minExwPrice){
                    this.productForm.minExwPrice=null;
                }else{
                    this.productForm.minExwPrice=Number(this.productForm.minExwPrice);
                }
                if(!this.productForm.maxFobPrice){
                    this.productForm.maxFobPrice=null;
                }else{
                    this.productForm.maxFobPrice=Number(this.productForm.maxFobPrice);
                }
                if(!this.productForm.minFobPrice){
                    this.productForm.minFobPrice=null;
                }else{
                    this.productForm.minFobPrice=Number(this.productForm.minFobPrice);
                }
                this.loadingTable=true;
                this.productForm.country='';
                if(this.selectCountry.length>0){
                    _.map(this.selectCountry,v=>{
                        this.productForm.country+=(v+',');
                    });
                    this.productForm.country=this.productForm.country.slice(0,this.productForm.country.length-1);
                }

                this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
                    this.pageData=res;
                    this.disabledSearch=false;
                    this.selectList=[];
                    this.loadingTable=false;
                }).catch(err=>{
                    this.disabledSearch=false;
                    this.loadingTable=false;
                });

            },
            handleChange(value) {
                console.log(value);
            },
            //切换check状态
            changeChecked(e){
                this.selectList=e;
            },
            //emit数据
            postData(){
                this.$emit('handleOK',this.selectList);
            },
            cancel(){
                this.$emit('handleCancel');
            },
            //获取类别数据
            getCategoryId(){
                this.$ajax.get(this.$apis.get_buyer_sys_category,{}).then(res=>{
                    this.categoryList[0].children=res;
                }).catch(err=>{

                });
                this.$ajax.get(this.$apis.get_buyer_my_category,{}).then(res=>{
                    this.categoryList[1].children=res;
                }).catch(err=>{

                });
            },
            //获取table数据
            getData() {
                this.loadingTable=true;
                this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,e=>{
                        let noneSellCountry='';
                        e.noneSellCountry.value.split(',').forEach(v=>{
                            this.countryOption.forEach(m=>{
                                if(m.code===v){
                                    noneSellCountry+=(m.name+',');
                                }
                            })
                        });
                        noneSellCountry=noneSellCountry.slice(0,noneSellCountry.length-1);
                        e.noneSellCountry.value=noneSellCountry;

                        e.status.value=this.$change(this.statusOption,'status',e,true).name;
                        e.expireUnit.value=this.$change(this.dateOption,'expireUnit',e,true).name;
                        e.unit.value=this.$change(this.skuUnitOption,'unit',e,true).name;
                        e.unitLength.value=this.$change(this.lengthOption,'unitLength',e,true).name;
                        e.unitVolume.value=this.$change(this.volumeOption,'unitVolume',e,true).name;
                        e.unitWeight.value=this.$change(this.weightOption,'unitWeight',e,true).name;
                        e.yearListed.value=this.$dateFormat(e.yearListed.value,'yyyy-mm');
                        return e;
                    });
                    this.pageData=res;
                    this.loadingTable=false;
                }).catch(err=>{
                    this.loadingTable=false;
                });
            },
            handleOkClick(e){
                if(e.length===0){
                    //表示一个都没选
                    this.$message({
                        message: this.$i.product.pleaseChoose,
                        type: 'warning'
                    });
                }else{
                    this.disabledOkBtn=true;
                    this.addProductDialogVisible=false;
                    this.loadingTable=true;
                    this.$ajax.post(this.$apis.add_buyerBookmark,e).then(res=>{
                        this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(res=>{
                            this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,e=>{
                                let noneSellCountry='';
                                e.noneSellCountry.value.split(',').forEach(v=>{
                                    this.countryOption.forEach(m=>{
                                        if(m.code===v){
                                            noneSellCountry+=(m.name+',');
                                        }
                                    })
                                });
                                noneSellCountry=noneSellCountry.slice(0,noneSellCountry.length-1);
                                e.noneSellCountry.value=noneSellCountry;

                                e.status.value=this.$change(this.statusOption,'status',e,true).name;
                                e.expireUnit.value=this.$change(this.dateOption,'expireUnit',e,true).name;
                                e.unit.value=this.$change(this.skuUnitOption,'unit',e,true).name;
                                e.unitLength.value=this.$change(this.lengthOption,'unitLength',e,true).name;
                                e.unitVolume.value=this.$change(this.volumeOption,'unitVolume',e,true).name;
                                e.unitWeight.value=this.$change(this.weightOption,'unitWeight',e,true).name;
                                return e;
                            });
                            this.pageData=res;
                            this.$message({
                                message: '添加成功',
                                type: 'success'
                            });
                            this.loadingTable=false;
                            this.disabledOkBtn=false;
                        }).catch(err=>{
                            this.loadingTable=false;
                        });
                    }).catch(err=>{
                        this.loadingTable=false;
                        this.disabledOkBtn=false;
                    });
                }
            },

            //处理取消
            handleCancel(){
                this.addProductDialogVisible=false;
            },
            /**
             * 按钮组操作
             * */

            //表格按钮点击
            btnClick(item){
                if(!item._disabled){
                    this.$windowOpen({
                        url:'/product/bookmarkDetail',
                        params:{
                            id:item.skuId.value,
                            bookmarkId:item.id.value
                        }
                    })
                }
            },

            createInquiry(){
                if(this.selectList.length===0){
                    this.$windowOpen({
                        url:'/negotiation/createInquiry',
                    })
                }else{
                    let skus='',codes=[],supplierCodes='';
                    _.map(this.selectList,v=>{
                        if(v.id.value){
                            skus+=(v.skuId.value+',');
                        }
                        if(v.supplierCode.value){
                            codes.push(v.supplierCode.value)
                        }
                    });
                    skus=skus.slice(0,skus.length-1);
                    _.map(_.uniq(codes),v=>{
                        supplierCodes+=(v+',');
                    });
                    supplierCodes=supplierCodes.slice(0,supplierCodes.length-1);
                    this.$windowOpen({
                        url:'/negotiation/createInquiry',
                        params:{
                            skus:skus,
                            supplierCodes:supplierCodes
                        }
                    })
                }
            },

            //勾选的商品创建order
            createOrder(){
                this.disabledOrderList=[];
                this.selectList.forEach(v=>{
                    //如果customerCreate值为true,那么就代表是用户自己创建的不能添加到order
                    if(v.customerCreate.value){
                        this.disabledOrderList.push(v);
                    }
                });
                if(this.disabledOrderList.length>0){
                    this.dialogFormVisible=true;
                }else{
                    if(this.selectList.length===0){
                        this.$windowOpen({
                            url:'/order/create',
                        })
                    }else{
                        let supplierList=[];
                        _.map(this.selectList,v=>{
                            // if(v.customerCreate.value){
                            //     allow=false;
                            // }
                            supplierList.push(v.supplierCode.value);
                        });
                        console.log(supplierList,'supplierList')
                        if(_.uniq(supplierList).length>1){
                            return this.$message({
                                message: this.$i.product.notAddDifferentSupplierProduct,
                                type: 'warning'
                            });
                        }

                        let ids='';
                        this.selectList.forEach(v=>{
                            ids+=(v.skuId.value+',');
                        });
                        this.$windowOpen({
                            url:'/order/create',
                            params:{
                                type:'product',
                                ids:ids,
                                supplierCode:this.selectList[0].supplierCode.value
                            },
                        })
                    }
                }
            },

            compare(){
                if(this.selectList.length>100){
                    return this.$message({
                        message: this.$i.product.compareRecordMustLessThan100,
                        type: 'success'
                    });
                }
                let id='';
                this.selectList.forEach((v,k)=>{
                    let item=_.findWhere(v,{key:'skuId'});
                    if(k===this.selectList.length-1){
                        id+=item.value;
                    }else{
                        id+=(item.value+',');
                    }
                });

                this.$windowOpen({
                    url:'product/compareDetail/new',
                    params:{
                        id:id,
                    }
                });
            },

            addProduct(){
                // this.disabledLine=this.$copyArr(this.tableDataList);

                this.forceUpdateNumber=Math.random();
                this.addProductDialogVisible=true;
            },
            manuallyAddProduct(){
                this.$windowOpen({
                    url:'/product/bookmarkManuallyAdd'
                });
            },
            deleteBookmark(){
                this.$confirm('是否确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let id=[];
                    this.disableClickDelete=true;
                    this.loadingTable=true;
                    this.selectList.forEach(v=>{
                        id.push(v.id.value);
                    });
                    this.$ajax.post(this.$apis.delete_buyerProductBookmark,id).then(res=>{
                        this.selectList=[];
                        this.$ajax.post(this.$apis.get_buyerBookmarkList,{
                            recycle:false
                        }).then(res=>{
                            this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.disableClickDelete=false;
                            this.loadingTable=false;
                        }).catch(err=>{
                            this.disableClickDelete=false;
                            this.loadingTable=false;
                        });
                    });

                }).catch(() => {

                });
            },

            /**
             * 分页操作
             * */
            changePage(e){
                this.productForm.pn=e;
                this.getData();
            },
            changeSize(e){
                this.productForm.ps=e;
                this.getData();
            }
        },
        created(){
            this.$ajax.post(this.$apis.get_partUnit,['SKU_SALE_STATUS','WT_UNIT','ED_UNIT','VE_UNIT','LH_UNIT','SKU_UNIT'],{cache:true}).then(res=>{
                res.forEach(v=>{
                    if(v.code==='SKU_SALE_STATUS'){
                        this.statusOption=v.codes;
                    }else if(v.code==='WT_UNIT'){
                        this.weightOption=v.codes;
                    }else if(v.code==='ED_UNIT'){
                        this.dateOption=v.codes;
                    }else if(v.code==='VE_UNIT'){
                        this.volumeOption=v.codes;
                    }else if(v.code==='LH_UNIT'){
                        this.lengthOption=v.codes;
                    }else if(v.code==='SKU_UNIT'){
                        this.skuUnitOption=v.codes;
                    }
                });
                //国家
                this.$ajax.get(this.$apis.get_country,{},{cache:true}).then(res=>{
                    this.countryOption=res;
                    this.getData();
                    this.getCategoryId();
                }).catch(err=>{

                });
            }).catch(err=>{

            });
            // this.setRecycleBin({
            //     name: 'productBookmarkRecycleBin',
            //     show: true
            // });
        },
        mounted(){
            this.setLog({query:{code:'PRODUCT'}});
        },

        watch:{
            hideBody(n){
                if(n){
                    this.btnInfo=this.$i.product.advanced;
                }else{
                    this.btnInfo=this.$i.product.hideTheAdvanced;
                }
            },
            selectList(n){
                if(n.length===0){
                    this.downloadBtnInfo='All';
                    this.disabledRemove=true;
                }else{
                    this.downloadBtnInfo=n.length;
                    this.disabledRemove=false;
                }

                if(n.length>=2){
                    this.disabledCompare=false;
                }else{
                    this.disabledCompare=true;
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
    .footer-btn{
        text-align: center;
    }
</style>
