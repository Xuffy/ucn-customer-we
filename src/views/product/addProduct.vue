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
            <el-form ref="productFormTop" :model="productForm" :rules="productFormRules" label-width="190px">
                <el-row class="speZone">
                    <el-col v-if="v.isDefaultShow && v.belongPage==='sellerProductOverview'" v-for="v in $db.product.buyerBasic" :key="v.key" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <drop-down v-model="productForm[v.key]" v-if="v.showType==='dropdown'" :list="dropData" :defaultProps="defaultProps" ref="dropDown"></drop-down>
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]"></el-input>
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
                            <el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]"></el-input>
                            <el-select class="speSelect" v-if="v.showType==='select'" size="mini" v-model="productForm[v.key]" placeholder="请选择">
                                <el-option
                                        v-for="item in v.options"
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
                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" :loading="disabledSearch" type="primary">{{$i.product.search}}</el-button>
            <el-button @click="clear" type="info" plain>{{$i.product.clear}}</el-button>
        </div>
        <div class="footer">
            <div class="btns" v-if="!hideBtn">
                <el-button @click="createInquiry">{{$i.product.createInquiry}}</el-button>
                <el-button>{{$i.product.createOrder}}</el-button>
                <el-button @click="compareProducts" :disabled="disabledCompare">{{$i.product.compare}}</el-button>
                <el-button @click="addToBookmark" :disabled="disabledAddBookmark">{{$i.product.addToBookmark}}</el-button>
                <el-button :disabled="disabledDownload">{{$i.product.download+'('+downloadBtnInfo+')'}}</el-button>
                <!--<el-button type="danger">{{$i.product.delete}}</el-button>-->
            </div>
            <div class="btns" v-if="type==='recycle'">
                <el-button :disabled="disabledRecover" :loading="disabledClickRecover" @click="recover" type="primary">{{$i.product.recover}}</el-button>
                <el-button>{{$i.product.download+'('+downloadRecycleListInfo+')'}}</el-button>
            </div>

            <v-table
                    :data="tableDataList"
                    :buttons="type==='recycle'?[]:[{label: 'detail', type: 1}]"
                    @change-checked="changeChecked"
                    @action="btnClick"></v-table>
            <div class="footer-btn" v-if="hideBtn && type!=='recycle'">
                <el-button :loading="disabledOkBtn" type="primary" @click="postData">OK</el-button>
                <el-button @click="cancel">Cancel</el-button>
            </div>
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
            title:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'product'
            },
            hideBtn:{
                type:Boolean,
                default:false
            },
            disabledLine:{
                type:Array,
                default:function () {
                    return []
                }
            },
            disabledOkBtn:{
                type:Boolean,
                default:false
            },
        },
        data(){
            return{
                hideBody:true,            //是否显示body
                btnInfo:this.$i.product.advanced,     //按钮默认文字显示
                disabledSearch:false,
                selectList:[],
                downloadBtnInfo:'0',
                downloadRecycleListInfo:'all',

                //btn禁用状态
                disabledAddBookmark:true,
                disabledCompare:true,
                disabledDownload:true,
                disabledRecover:true,
                disabledClickRecover:false,     //是否让recover按钮不能点

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
                    country: null,
                    supplierNameLike: "",
                    outerCartonMethodEnLike: "",
                    methodPkgEnLike: "",
                    deliveryDates: null,
                    descEnLike: "",
                    descCnLike: "",

                    pn: 1,
                    ps: 50,

                    recycle: false,         //是否是在recycle bin里请求
                    //初始搜索的时候不传，当有筛选条件之后再传
                    // operatorFilters: [
                    //     {
                    //         operator: "",
                    //         property: "",
                    //         value: {}
                    //     }
                    // ],

                    //初始搜索的时候不传，当有筛选条件之后再传
                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ],

                },
                //表格验证参数
                productFormRules:{
                    nameCn: [
                        { max: 10, message: `长度在 3 到 10 个字符`, trigger: 'blur' }
                    ],
                },

                //Category下拉组件数据
                dropData:[],
                defaultProps:{
                    label:'name',
                    children:'children'
                },

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
                this.$set(this.productForm,'categoryId',null);
                this.$set(this.productForm,'minExwPrice',null);
                this.$set(this.productForm,'maxExwPrice',null);
                this.$set(this.productForm,'minFobPrice',null);
                this.$set(this.productForm,'maxFobPrice',null);
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

                if(this.type==='recycle'){
                    this.productForm.recycle=true;
                    this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        this.disabledSearch=false;
                        this.selectList=[];
                        if(this.disabledLine.length>0){
                            this.disabledLine.forEach(v=>{
                                this.tableDataList.forEach(m=>{
                                    if(m.id.value===v){
                                        m._disabled=true;
                                    }
                                })
                            })
                        }
                    }).catch(err=>{
                        this.disabledSearch=false;
                    });
                }else{
                    this.$ajax.post(this.$apis.get_buyerProductList,this.productForm).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        this.disabledSearch=false;
                        this.selectList=[];
                    }).catch(err=>{
                        this.disabledSearch=false;
                    });
                }
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
                this.$refs.productFormTop.resetFields();
                this.$emit('handleOK',this.selectList);
            },
            cancel(){
                this.$emit('handleCancel');
            },

            //获取类别数据
            getCategoryId(){
                this.$ajax.get(this.$apis.getCategory,{}).then(res=>{
                    this.dropData=res;
                }).catch(err=>{
                    console.log(err)
                });
            },

            //获取table数据
            getData() {
                if(this.type==='recycle'){
                    this.$ajax.post(this.$apis.get_buyerBookmarkList,{
                        recycle:true
                    }).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        if(this.disabledLine.length>0){
                            this.disabledLine.forEach(v=>{
                                this.tableDataList.forEach(m=>{
                                    if(m.id.value===v.id.value){
                                        m._disabled=true;
                                    }
                                })
                            })
                        }
                    }).catch(err=>{
                        console.log(err)
                    });
                }else{
                    this.$ajax.post(this.$apis.get_buyerProductList,{
                        recycle:false
                    }).then(res=>{
                        console.log(res.datas)
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        console.log(this.disabledLine,'disabledLine')
                        if(this.disabledLine.length>0){
                            this.disabledLine.forEach(v=>{
                                this.tableDataList.forEach(m=>{
                                    if(m.id.value===v.id.value){
                                        m._disabled=true;
                                    }
                                })
                            })
                        }
                    }).catch(err=>{
                        console.log(err)
                    });
                }
            },

            /**
             * 按钮组操作
             * */
            addToBookmark(){
                let id=[];
                this.selectList.forEach(v=>{
                    id.push(v.id.value);
                });
                // this.$ajax.post(this.$apis.add_bookmark,{
                //     ids:id
                // }).then(res=>{
                //     console.log(res)
                // }).catch(err=>{
                //
                // });
            },

            //表格按钮点击
            btnClick(item){
                if(!item._disabled){
                    this.windowOpen('/product/sourcingDetail',{id:item.id.value});
                }
            },

            createInquiry(){
                console.log(1234)
            },

            //对比product
            compareProducts(){
                let id='';
                this.selectList.forEach((v,k)=>{
                    if(k===this.selectList.length-1){
                        id+=v.id.value;
                    }else{
                        id+=(v.id.value+',');
                    }
                });
                this.windowOpen('/product/compareDetail',{id:id});
            },

            recover(){
                let id=[];
                this.selectList.forEach(v=>{
                    id.push(v.id.value);
                });
                this.disabledClickRecover=true;
                this.$ajax.post(this.$apis.recover_bookmark,id).then(res=>{
                    this.selectList=[];
                    this.$ajax.post(this.$apis.get_buyerBookmarkList,{
                        recycle:true
                    }).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        if(this.disabledLine.length>0){
                            this.disabledLine.forEach(v=>{
                                this.tableDataList.forEach(m=>{
                                    if(m.id.value===v.id.value){
                                        m._disabled=true;
                                    }
                                })
                            })
                        }
                        this.$message({
                            message: 'successfully recovery!',
                            type: 'success'
                        });
                        this.disabledClickRecover=false;
                    }).catch(err=>{
                        this.disabledClickRecover=false;
                    });
                }).catch(err=>{
                    this.disabledClickRecover=false;
                });
            },
        },
        created(){
            this.getData();
            this.getCategoryId();
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
                    this.downloadBtnInfo=0;
                    this.downloadRecycleListInfo='all';
                    this.disabledAddBookmark=true;
                    this.disabledDownload=true;
                    this.disabledRecover=true;
                }else{
                    this.downloadBtnInfo=n.length;
                    this.downloadRecycleListInfo=n.length;
                    this.disabledAddBookmark=false;
                    this.disabledDownload=false;
                    this.disabledRecover=false;
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
