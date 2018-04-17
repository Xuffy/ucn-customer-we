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
                <el-button @click="addNewProduct">{{$i.product.createInquiry}}</el-button>
                <el-button>{{$i.product.createOrder}}</el-button>
                <el-button>{{$i.product.compare}}</el-button>
                <el-button>{{$i.product.download+'(0)'}}</el-button>
                <el-button type="danger">{{$i.product.delete}}</el-button>
            </div>

            <v-table
                    :data="tableDataList"
                    :buttons="[{label: 'detail', type: 1}]"
                    @change-checked="changeChecked"
                    @action="btnClick"></v-table>
            <div class="footer-btn">
                <el-button type="primary" @click="postData">OK</el-button>
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
                default:''
            },
            hideBtn:{
                type:Boolean,
                default:false
            },
            disabledLine:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                hideBody:true,            //是否显示body
                btnInfo:this.$i.product.advanced,     //按钮默认文字显示
                disabledSearch:false,
                selectList:[],
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
                this.$set(this.productForm,'categoryId','');
                this.$set(this.productForm,'minExwPrice','');
                this.$set(this.productForm,'maxExwPrice','');
                this.$set(this.productForm,'minFobPrice','');
                this.$set(this.productForm,'maxFobPrice','');
            },


            //搜查
            search(){
                console.log(this.productForm)
                this.disabledSearch=true;
                this.$ajax.post(this.$apis.get_productList,this.productForm).then(res=>{
                    res.datas.forEach(v=>{
                        if(v.status===0){
                            v.status='下架(暂时中文)';
                        }else if(v.status===1){
                            v.status='上架';
                        }
                    });
                    this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
                    this.disabledSearch=false;
                }).catch(err=>{
                    this.disabledSearch=false;
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
                this.$ajax.get(this.$apis.getCategory,{}).then(res=>{
                    this.dropData=res;
                }).catch(err=>{
                    console.log(err)
                });
            },

            //获取table数据
            getData() {
                this.$ajax.post(this.$apis.get_productList,{
                    recycle:false
                }).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.product.indexTable, res.datas);
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
                    console.log(err)
                });
            },

            //表格按钮点击
            btnClick(item){
                if(!item._disabled){
                    this.windowOpen('/sellerProduct/detail',{id:item.id.value});
                }
            },

            addNewProduct(){

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
