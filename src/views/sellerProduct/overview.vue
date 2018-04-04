<template>
    <div class="bookmark">
        <div class="title">
            <span>产品总览</span>
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
        <div style="margin-bottom: 5px">

            <el-form ref="productFormTop" :model="productForm" label-width="190px">
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="分类">
                            <drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品英文名" prop="nameEn">
                            <el-input v-model="productForm.nameEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="是否有现货" prop="isReadilyAvailable">
                            <el-select v-model="productForm.isReadilyAvailable" placeholder="请选择">
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
            <el-form ref="productForm" :model="productForm" label-width="190px">
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="客户货号">
                            <el-input v-model="productForm.customerSkuCode"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="EXW价格">
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="productForm.minExwPrice"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="productForm.maxExwPrice"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="供应商货号">
                            <el-input v-model="productForm.code"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品中文名">
                            <el-input v-model="productForm.nameCn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="FOB价格">
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="productForm.minFobPrice"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="10">
                                <el-input-number
                                        class="numberInput"
                                        v-model="productForm.maxFobPrice"
                                        @change="handleChange"
                                        :min="0"
                                        :controls="false"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品英文材质">
                            <el-input v-model="productForm.materialEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="国家">
                            <el-input v-model="productForm.country"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="供应商名称">
                            <el-input v-model="productForm.supplierName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="外包装方式EN">
                            <el-input v-model="productForm.outerCartonMethodEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品包装方式EN">
                            <el-input v-model="productForm.methodPkgEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="交期">
                            <el-input-number
                                    class="numberInput"
                                    v-model="productForm.deliveryDates"
                                    @change="handleChange"
                                    :min="0"
                                    :controls="false"></el-input-number>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品英文描述">
                            <el-input v-model="productForm.descEn"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="产品中文描述">
                            <el-input v-model="productForm.descCn"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">{{$t('product.btn.search')}}</el-button>
            <el-button @click="resetForm('productForm')" type="info" plain>{{$t('product.btn.clear')}}</el-button>
        </div>
        <div class="footer">
            <div class="btns">
                <el-button type="primary" v-if="!hideBtns">{{$t('product.page.createInquiry')}}</el-button>
                <el-button type="primary" v-if="!hideBtns">{{$t('product.page.createOrder')}}</el-button>
                <el-button type="primary" v-if="!hideBtns">{{$t('product.page.compare')}}</el-button>
                <el-button @click="addToBookmark" type="primary" v-if="!hideBtns">{{$t('product.page.addToBookmark')}}
                </el-button>
                <el-button type="primary" v-if="!hideBtns">{{$t('product.page.downloadSelectedProducts')}}</el-button>
                <el-button @click="recover" type="primary" v-if="showRecover">{{$t('product.page.recover')}}</el-button>
            </div>

            <v-simple-table
                    class="speTable"
                    :data.sync="tableDataList"
                    :column="dataColumn"
                    @sort-change="getSort"
                    @page-change="pageChange">
            </v-simple-table>

        </div>
    </div>
</template>

<script>

    import {dropDown} from '@/components/index'
    import VSimpleTable from '@/components/common/table/simple'

    export default {
        name: "overview",
        components: {
            dropDown,
            VSimpleTable
        },
        props: {
            hideBtns: {
                type: Boolean,
                default: false
            },
            showRecover: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                value: 1,
                hideBody: true,            //是否显示body
                btnInfo: '展开高级搜索',
                formItem: {
                    Category: '',
                    SKUName: '',
                    ReadilyAvailable: '',
                    SKUCode: '',
                    minEXWPrice: 0,
                    maxEXWPrice: 0,
                    VendorSKUCode: '',
                    VendorSKUName: '',
                    minIncotermPrice: 0,
                    maxIncotermPrice: 0,
                    SKUMaterials: '',
                    Country: '',
                    SupplierName: '',
                    PackageType: '',
                    ProductPackageType: '',
                    DeliveryDays: '',
                    MOQ: '',
                    SKUDescription: '',
                    VendorSKUDescription: ''
                },

                testValidateForm:{
                    name:''
                },

                productForm: {
                    categoryId: '0',
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

                number: '',

                dataList: [
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
                                        checked: true,
                                        isActive: true,
                                        disabled: false
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        isActive: true,
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
                                        isActive: true,
                                        checked: false
                                    },
                                    {
                                        isActive: true,
                                        title: 'leaf 1-2-2'
                                    }
                                ]
                            }
                        ]
                    }
                ],

                dropData: [
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

                tableDataList: [],
                dataColumn: [],


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

                ]


            }
        },
        methods: {
            //切换body的收缩展开状态
            switchDisplay() {
                this.hideBody = !this.hideBody;
            },

            //清除填写的表格数据
            clear(name) {
                console.log(1)
            },

            //搜查
            search() {
                console.log(this.dataList)
                this.$router.push('/product/sourcing/detail');
                // window.open('http://192.168.51.228、:8080/#/product');
            },


            handleChange(value) {
                console.log(value);
            },


            getList() {
                this.ajax.get('/getTrackList').then((data) => {
                    this.tableDataList = data;
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData', {width: 200});
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
            addToBookmark() {
                this.$message({
                    message: 'Successfully Add',
                    type: 'success'
                });
            },


            //恢复删除的bookmark
            recover() {
                console.log(1)
            },


            //表格操作
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.$refs['productFormTop'].resetFields();
            }


        },
        created() {
            this.getList();
        },
        watch: {
            hideBody(n) {
                if (n) {
                    this.btnInfo = '展开高级搜索';
                } else {
                    this.btnInfo = '隐藏高级搜索';
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

    .bookmark {
        padding-right: 20px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color: #666666;
    }

    .title-btn {
        float: right;
        margin-right: 5px;
    }

    .head-list {

    }

    .head-list label {
        width: 190px;
        display: inline-block;
        height: 42px;
        line-height: 42px;
        text-align: right;
        font-size: 14px;
        color: #606266;
        padding: 0 12px 0 0;
        box-sizing: border-box;
        float: left;
    }

    .head-list .content {
        margin-left: 190px;
        height: 42px;
    }

    .head-list .content > > > input {
        height: 42px;
    }

    .speZone > > > label {

    }

    .speZone > > > input {

    }

    .outGroup {

    }

    .outGroup .label {
        width: 190px;
        float: left;
    }

    .body {
        overflow: hidden;
        max-height: 320px;
        display: block;
        transition: max-height .5s cubic-bezier(.445, .05, .55, .95);
    }

    .body .numberInput {
        width: 80px;
        text-align: left;
    }

    .body .numberInput > > > input {
        padding: 0;
    }

    .hide {
        max-height: 0;
    }

    .form-spelist {
        margin-bottom: 10px !important;
    }

    .form-spelist > > > .ivu-form-item-content {
        line-height: normal;
    }

    .form-list {
        margin-bottom: 10px;
    }

    .btn-group {
        text-align: center;
        margin-top: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e0e0e0;
    }

    .btn-group .search {
        margin-right: 30px;
    }

    .footer {

    }

    .footer .btns {
        padding: 10px 0;
    }
</style>
