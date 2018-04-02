<template>
    <div class="SupplierBookmark">
        <div class="title">
             {{$t("supplier.title.supplierBookmark")}}
            <el-button @click="switchDisplay" class="title-btn" type="text">{{btnInfo}}</el-button>
        </div>
<!--        搜索条件-->
       <div>
            <el-form ref="formItem" :model="formItem" label-width="140px">
                <el-row>
                      <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.supplierName')" prop="SkuName">
                            <el-input v-model="formItem.SkuName" placeholder="Enter something..."></el-input>
                        </el-form-item>
                     </el-col>
<!--                    下拉选择businessScope-->
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.businessScope')"  prop="businessScope">
                            <el-select v-model="formItem.businessScope" placeholder="Enter something..."></el-select>
                           </el-form-item>
                    </el-col>
<!--                    下拉选择category-->
                  <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list"  :label="$t('supplier.input.category')"  prop="category">
                              <drop-down class="speDropdown" style="position: absolute;width: 100%;background-color: #ffffff;" :list="dropData" ref="dropDown"></drop-down>
                        </el-form-item>
                    </el-col>
                    </el-row>
</el-form>
            </div>
            <div class="body" :class="{hide:hideBody}">
                     <el-form ref="formItem" :model="formItem" label-width="140px">
                     <el-row>
                      <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.supplierType')" prop="supplierType">
                            <el-select v-model="formItem.supplierType" placeholder="Enter something..."></el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.vendorSKUname')" prop="vendorSKUname">
                            <el-input v-model="formItem.vendorSKUname" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.vendorSKUcode')" prop="vendorSKUcode">
                            <el-input v-model="formItem.vendorSKUcode" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8">
                        <el-form-item class="form-list" :label="$t('supplier.input.description')" prop="description">
                            <el-input v-model="formItem.description" placeholder="Enter something..."></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary" class="search">{{$t('supplier.buttonname.search')}}</el-button>
            <el-button @click="clear('formItem')">{{$t('supplier.buttonname.clear')}}</el-button>
        </div>
<!--      搜索结果  -->
        <div>
<!--            跳转按钮行-->
             <div class="btnline">
                  <el-button  type="primary" >{{$t('supplier.buttonname.createInquiry')}}</el-button>
                  <el-button  type="primary" >{{$t('supplier.buttonname.createOrder')}}</el-button>
                  <el-button  type="primary" >{{$t('supplier.buttonname.compare')}}</el-button>             
                  <el-button  type="primary" >{{$t('supplier.buttonname.downloadTheSelectedOverview')}}</el-button>
<!--                  remove按钮-->
                   <el-button  type="info" :disabled='disabled' >{{$t('supplier.buttonname.remove')}}</el-button>
              </div>  
              <div>
                 
                
              </div>          
        </div>
        <!--        表格-->
             <v-simple-table :column="tabColumn" :data.sync="tabData" />
    </div>
</template>

<script>
    import {
        dropDown
    } from '@/components/index'
    import {VSimpleTable } from '@/components/index';
    export default {
        name: "SupplierSourcing",
        components: {
            dropDown,
            VSimpleTable
        },
        props: {

        },
        data() {
            return {
                value: 1,
                hideBody: true, //是否显示body
                btnInfo: 'Show the Advance',
                formItem: {
                    SupplierName: '',
                    businessScope: '',
                    category: '',
                    supplierType: '',
                    vendorSKUname: '',
                    vendorSKUcode: '',
                    description: '',
                },
                //                remove
                disabled: true,
                 tabColumn:[],
                  tabData:[]
            }
        },
        methods: {
            //切换body的收缩展开状态
            switchDisplay() {
                this.hideBody = !this.hideBody;
            },

            //清除填写的表格数据
            clear(name) {
                this.$refs[name].resetFields();
            },

            //搜查
            search() {
                this.$router.push('/product/detail');
            },
        },
        created() {
                  this.ajax.get('/supplierOverview', {
                    params: {
                    }
                  })
                  .then( res => {
                    this.tabData=res.supplierdata
                    this.tabColumn = this.$getTableColumn(this.tabData, "supplier.tableData",{width:'180px'});
                    console.log(this.tabColumn)
                  })
                  .catch((res)=>{
                    console.log(res);
                  });
        },
        watch: {
            hideBody(n) {
                if (n) {
                    this.btnInfo = 'Show the Advance';
                } else {
                    this.btnInfo = 'Hide the Advance';
                }
            },
        }
    }

</script>

<style scoped>
    .SupplierSourcing {
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

    .title-btn>>>span {
        color: #118ee9;
    }

    .body {
        /*        margin-top: 10px;*/
        overflow: hidden;
        max-height: 1400px;
        display: block;
        transition: max-height .5s cubic-bezier(.445, .05, .55, .95);
    }

    .hide {
        max-height: 0px;

    }

    /*.show{*/

    /*height: auto;*/

    /*}*/

    .form-list {
        margin-bottom: 10px;
    }

    .el-input {
        /*        width:200px;*/
    }

    .btn-group {
        text-align: center;
        margin-top: 10px;
    }

    .btn-group .search {
        margin-right: 30px;
    }

    .btnline {
        margin-top: 20px;
        width: 100%;
        border-top: 1px solid black;
    }

    .btnline .el-button {
        margin-right: 8px;
        margin-top: 20px;
    }

</style>
