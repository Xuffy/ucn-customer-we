<template>
    <div class="SupplierSourcing">
            <div class="title">
              supplier Sourcing
            <el-button @click="switchDisplay" class="title-btn" type="text">{{btnInfo}}</el-button>
        </div>
<!--        搜索条件-->
            <div>
                <el-form ref="formItem" :model="formItem" label-width="140px" size="mini">
                    <el-row>
                          <el-col :xs="24" :sm="12" :md="8" :lg="8" 
                           v-for='(item,index) in $db.supplier.overview'
                           :key='item'
                           v-if='item.isbasic==true'
                           >
                            <el-form-item class="form-list" 
                             v-if="item.showType==='text'"
                            :label="item.label" 
                            :prop="item.key"                    
                            >
                                <el-input v-model="formItem[item.key]" placeholder="Enter something..."></el-input>
                            </el-form-item>
                            <el-form-item class="form-list"  v-if="item.showType==='select'"
                            :label="item.label" 
                            :prop="item.key" >
                                <el-select v-model="formItem[item.key]"></el-select>
                               </el-form-item>
                               <el-form-item class="form-list"  v-if="item.showType==='dropdown'"
                                :label="item.label" 
                                :prop="item.key">
                                 <div class="speDropdown">
                                     <drop-down   ref="dropDown"></drop-down>
                                </div>
                            </el-form-item>
                         </el-col>

                        </el-row>
    </el-form>
            </div>
            <div class="body" :class="{hide:hideBody}">
                    
                     <el-form ref="formItem" :model="formItem" label-width="140px" size="mini">
                     <el-row>
                     
                                <el-col :xs="24" :sm="12" :md="8" :lg="8" 
                           v-for='(item,index) in $db.supplier.overview'
                           key='item'
                            v-if='item.isbasic==false'
                           >
                            <el-form-item class="form-list" 
                             v-if="item.showType==='text'"
                            :label="item.label" 
                            :prop="item.key"                    
                            >
                                <el-input v-model="formItem[item.key]" placeholder="Enter something..."></el-input>
                            </el-form-item>
                            <el-form-item class="form-list"  v-if="item.showType==='select'"
                            :label="item.label" 
                            :prop="item.key" >
                                <el-select v-model="formItem[item.key]"></el-select>
                               </el-form-item>
                               <el-form-item class="form-list"  v-if="item.showType==='dropdown'"
                                :label="item.label" 
                                :prop="item.key">
                                 <div class="speDropdown">
                                     <drop-down   ref="dropDown"></drop-down>
                                </div>
                            </el-form-item>
                         </el-col>
                     
                     

                </el-row>
            </el-form>
        </div>
<!--
            <div class="btn-group">
            <el-button @click="search" type="primary" class="search">{{$t('supplier.buttonname.search')}}</el-button>
            <el-button @click="clear('formItem')">{{$t('supplier.buttonname.clear')}}</el-button>
        </div>
-->
<!--      搜索结果  -->
            <div>
<!--
             <div class="btnline">
                  <el-button   @click='createInquiry'>{{$t('supplier.buttonname.createInquiry')}}</el-button>
                  <el-button   @click='createOrder'>{{$t('supplier.buttonname.createOrder')}}</el-button>
                  <el-button  @click='compare'>{{$t('supplier.buttonname.compare')}}</el-button>
                  <el-button  >{{$t('supplier.buttonname.addToBookmark')}}</el-button>
                  <el-button   >{{$t('supplier.buttonname.downloadTheSelectedSupplier')}}</el-button>
              </div>  
-->
              <div>
                 
              </div>          
        </div>
<!--        表格-->
<!--             <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>-->
    </div>
</template>

<script>
    import {
        dropDown
    } from '@/components/index'
    import {
        VTable
    } from '@/components/index';
    export default {
        name: "SupplierSourcing",
        components: {
            dropDown,
            VTable
        },
        props: {

        },
        data() {
            return {
                value: 1,
                hideBody: true, //是否显示body
                btnInfo: 'Show the Advance',
                formItem: {
                    supplierName: '',
                    businessScope: '',
                    category: '',
                    supplierType: '',
                    SKUnameEN: '',
                    SKUcode: '',
                    description: '',
                },
                tabData: []
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
            //....跳入createInquiry
            createInquiry() {
                this.$router.push({
                    name: 'createInquiry',
                    query: {

                    }
                })
            },
            //....跳入createOrder
            createOrder() {
                this.$router.push({
                    name: 'creatOrder',
                    query: {

                    }
                })
            },
            //........跳入compare
            compare() {
                this.$router.push({
                    name: 'SupplierCompare',
                    query: {

                    }
                })
            }
        },
        created() {
            //            this.ajax.get(this.$apis.supplier_overview, {
            //                    params: {}
            //                })
            //                .then(res => {
            //                    this.tabData = res
            //
            //                })
            //                .catch((res) => {
            //
            //                });
        },
        watch: {
            hideBody(n) {
                if (n) {
                    this.btnInfo = 'Show the Advance';
                } else {
                    this.btnInfo = 'Hide the Advance';
                }
            }
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
        max-height: 0;

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

    .el-select {
        max-width: 200px
    }

    .el-input {
        max-width: 200px;
    }

    .speDropdown {
        max-width: 200px;
        height: 30px;
    }

    /*
    .vtable {
        margin-top: 20px;
    }
*/

</style>
