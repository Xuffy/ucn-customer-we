<template>
    <div class="bookmark">
        <div class="title">
            {{$t('product.page.productBookmark')}}
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
        <div style="margin-bottom: 5px">
            <el-row>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>{{$t('product.page.category')}}</label>
                    <div class="content">
                        <drop-down class="speDropdown" style="" :list="dropData" ref="dropDown"></drop-down>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>{{$t('product.page.skuName')}}</label>
                    <div class="content">
                        <el-input v-model="form.name"></el-input>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>{{$t('product.page.readilyAvailable')}}</label>
                    <div class="content">
                        <el-input v-model="form.name"></el-input>
                    </div>
                </el-col>
            </el-row>
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
        </div>


        <div class="footer">
            <div class="btns">
                <el-button type="primary">{{$t('product.page.createInquiry')}}</el-button>
                <el-button type="primary">{{$t('product.page.createOrder')}}</el-button>
                <el-button type="primary">{{$t('product.page.compare')}}</el-button>

                <el-dropdown>
                    <el-button type="primary">{{$t('product.page.addNewProduct')}}</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="addFromNewSearch">{{$t('product.page.fromNewSearch')}}</el-dropdown-item>
                        <el-dropdown-item @click.native="addFromManually">{{$t('product.page.fromManuallyAdd')}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-button type="primary">{{$t('product.page.downloadSelectedProducts')}}</el-button>
                <el-button @click="removeBookmark" type="info">{{$t('product.page.remove')}}</el-button>
            </div>


            <v-simple-table
                    class="speTable"
                    :data.sync="tableDataList"
                    :column="dataColumn"
                    @sort-change="getSort"
                    @page-change="pageChange">
            </v-simple-table>


            <el-dialog
                    title="Add Product"
                    :visible.sync="newSearchDialogVisible"
                    width="80%"
                    :before-close="handleClose">
                <product :hideBtns="true"></product>
            </el-dialog>


        </div>
    </div>
</template>

<script>

    import {dropDown} from '@/components/index'
    // import dropDown from '../../../components/common/fnCompon/dropdown'
    import VSimpleTable from '@/components/common/table/simple'
    import product from '../addProduct'

    export default {
        name: "bookmark",
        components:{
            dropDown,
            VSimpleTable,
            product
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

                //表格数据
                dataColumn:[],
                tableDataList:[],

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

                //弹出框
                //弹出框显示隐藏
                newSearchDialogVisible:false,
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
                this.$router.push('/product/bookmark/detail');
                // window.open('http://192.168.51.228、:8080/#/product');
            },

            handleChange(value) {
                console.log(value);
            },


            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },

            //获取表格data
            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
                    console.log(this.dataColumn,'.//////')
                })
            },

            //添加product
            addFromNewSearch(){
                this.newSearchDialogVisible=true;
            },
            addFromManually(){
                window.open('http://192.168.51.229:8080/#/product/bookmark/manuallyAdd');
            },


            //移除bookmark
            removeBookmark(){
                this.$confirm('是否确认删除该bookmark？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Successfully Remove！'
                    });
                }).catch(() => {

                });
            },

            //弹出框关闭方法
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
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
    .speDropdown{

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
        max-height: 1400px;
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
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 15px;
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
