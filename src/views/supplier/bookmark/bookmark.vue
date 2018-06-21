<template>
    <div class="SupplierSourcing">
            <div class="title">
             {{$i.supplier.supplierBookmark}}
        </div>
<!--        搜索条件-->
            <div style='marginTop:20px;'>
              <el-form ref="params" :model="params" label-width="200px" size="mini">
                <el-row>
                  <el-col :xs="24" :sm="12" :md="8" :lg="8"
                          v-for='(v,index) in $db.supplier.overview'
                          :key="index+'j'">
                    <el-form-item class="speWidth" :prop="v.key"  :label="v.label">
                      <div v-if="v.type==='input'">
                        <el-input
                          size="mini"
                          placeholder="请输入内容"
                          v-model="params[v.key]">
                        </el-input>
                      </div>
                      <div v-if="v.type==='select'">
                        {{params[v.country]}}
                        <el-select class="speWidth" v-model="params[v.key]" placeholder="请选择">
                          <el-option
                            size="mini"
                            v-for="item in options[v.key]"
                            :key="item.code"
                            :label="item.name"
                            :value="item.code">
                          </el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <div class="btn-group">
            <el-button @click="search" type="primary" class="search" >{{$i.common.search}}</el-button>
            <el-button @click="clear('params')">{{$i.common.clear}}</el-button>
        </div>
<!--      搜索结果  -->
            <div>
             <div class="btnline">

                  <el-button v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:CREATE_INQUIRY'"  @click='createInquiry'>{{$i.common.creatInquiry}}({{selectedNumber.length}})</el-button>
                  <el-button v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:CREATE_ORDER'"  @click='createOrder'  :class="(selectedData.length>1)?'disabledBtn':'' ">{{$i.common.creatOrder}}({{selectedNumber.length}})</el-button>
                  <el-button v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:COMPARE'" @click='compare' :disabled='!(selectedData.length>1)'>{{$i.common.compare}}({{selectedNumber.length}})</el-button>
               <el-button  @click='addNewProduct'>{{$i.common.addSupplier}}</el-button>
<!--                 <el-button :disabled='!selectedData.length>0'>{{$i.common.downloadSelected}}({{selectedNumber.length}})</el-button>-->
<!--                  <el-button :disabled='!selectedData.length>0' v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:DELETE'" @click='remove' type='danger'>{{$i.common.delete}}({{selectedNumber.length}})</el-button>-->

              </div>
              <div>

              </div>
        </div>
<!--        表格-->
             <v-table
                code="udata_pruchase_supplier_bookmark_overview"
                :height=360
                :data="tabData"
                :buttons="[{label: 'detail', type: 1}]"
                @action="detail"
                @change-checked='checked'
                :loading='loading'
                @filter-value="tableFilterValue"
                style='marginTop:10px'/>
            <page
              :page-data="pageData"
              @change="handleSizeChange"
              :page-sizes="[50,100,200,500]"
              @size-change="pageSizeChange"></page>

      <el-dialog title="Add Supplier" :visible.sync="addProductDialogVisible" width="80%">
        <VSupplier
          @handleOkClick='handleOkClick'
          :isButton=false
          :disabledLine="disabledLine"
          @handleCancel="handleCancel"
        >
        </VSupplier>
      </el-dialog>

    </div>

</template>

<script>
    import { mapActions } from 'vuex'
    import VSupplier from '../sourcing/sourcing'
    import {
        dropDown,
        VPagination
    } from '@/components/index'
    import {
        VTable
    } from '@/components/index';
    export default {
        name: "SupplierBookMark",
        components: {
          dropDown,
          VTable,
          page:VPagination,
          VSupplier
        },
        props: {

        },
        data() {
            return {
                value: 1,
                hideBody: true, //是否显示body
                btnInfo: 'Show the Advance',
                params: {
                  conditions: {},
                  description: "",
//                    mainBusiness: [],
                  name: '',
                  pn: 1,
                  ps: 50,
                  tc: 0,
                  skuCode: "",
                  skuNameEn: "",
                  type: '',
                  recycle: false,
                  operatorFilters:[],
                  sorts:[]
                },
                tabData: [],
                selectedData: [],
                selectedNumber: [],
                loading: false,
                dropData: [],
                defaultProps: {
                    label: 'name',
                    children: 'children'
                },
                options:[],
                pageData:{},
                addProductDialogVisible:false,
                disabledLine:[],        //在弹出框中默认置灰不能操作的条目
            }
        },
        methods: {
              ...mapActions([
                // 'setRecycleBin',
                'setLog'
            ]),
            //获取字典
            getCodePart(){
              this.$ajax.post(this.$apis.POST_CODE_PART,["SR_TYPE","ITM"]).then(res=>{
                this.options.type = _.findWhere(res, {'code': 'SR_TYPE'}).codes
                this.options.incoterm = _.findWhere(res, {'code': 'ITM'}).codes;
              }).catch(err=>{
                console.log(err)
              });
            },
            handleSizeChange(val) {
              this.params.pn = val;
              this.get_data();
            },
            pageSizeChange(val) {
              this.params.ps = val;
              this.get_data();
            },
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
                this.get_data()
            },
            //....跳入createInquiry
            createInquiry() {
              if(this.selectedData.length===0){
                this.$windowOpen({
                  url:'/negotiation/createInquiry',
                })
              }else{
                let companyId = '';
                this.selectedData.forEach((v,k)=>{
                  let item = _.findWhere(v, {
                    key: 'companyId'
                  });
                  if (k === this.selectedData.length - 1) {
                    companyId += item.value;
                  } else {
                    companyId += (item.value + ',');
                  }
                })
                this.$windowOpen({
                  url: '/negotiation/createInquiry',
                  params: {
                    supplierCompanies: companyId
                  }
                });
              }
            },
            //....跳入createOrder
            createOrder() {
              if(this.selectedData.length===0){
                this.$windowOpen({
                  url:'/order/create',
                })
              }else if (this.selectedData.length===1){
                this.$windowOpen({
                  url: '/order/create',
                  params: {
                    supplierCode: this.selectedData[0].code.value
                  }
                });
              }else{
                this.$message({
                  message: '供应商只能单选!',
                  type: 'warning',
                });
                return false;
              }
            },
            //........跳入compare
            compare() {
                let id = '';
                this.selectedData.forEach((v, k) => {
                    let item = _.findWhere(v, {
                        key: 'id'
                    });
                    if (k === this.selectedData.length - 1) {
                        id += item.value;
                    } else {
                        id += (item.value + ',');
                    }
                });
                this.$windowOpen({
                    url: '/supplier/compareDetail/{type}',
                    params: {
                        type: 'new',
                        id: id,
                    }
                });
            },
            //...........进入detail
            detail(item) {
                this.$windowOpen({
                    url: '/supplier/bookmarkDetail',
                    params: {
                        id: item.id.value,
                        companyId: item.companyId.value
                    }
                });
            },
            //.........checked
            checked(item) {
                this.selectedData = item
                let number = []
                this.selectedData.forEach(item => {
                    number.push(item.id.value);
                });
                this.selectedNumber = number
            },
            //获取国家
            getCountryAll(){
              this.$ajax.get(this.$apis.GET_COUNTRY_ALL).then(res=>{
                this.countryOption = res
                this.get_data();
              }).catch(err=>{
                console.log(err)
              });
            },
            get_data() {
                this.loading = true;
                this.$ajax.post(this.$apis.post_supplier_listbookmark, this.params)
                    .then(res => {
                        this.pageData=res;
                        this.loading = false
                        this.tabData = this.$getDB(this.$db.supplier.overviewtable, res.datas, e => {
                          // let country='';
                          // e.country.value.split(',').forEach(v=>{
                          //   this.countryOption.forEach(m=>{
                          //     if(m.code===v){
                          //       country+=(m.name+',');
                          //     }
                          //   })
                          // });
                          // country = country.slice(0,country.length-1);
                          // e.country.value=country;

                          e.type.value=this.$change(this.options.type,'type',e,true).name;
                          e.incoterm.value=this.$change(this.options.incoterm ,'incoterm',e,true).name;
                          return e;

                        });
                      this.disabledLine=this.tabData;
                    })
                    .catch((res) => {
                        this.loading = true
                    });
            },
            //..........remove
            remove() {
                this.$ajax.post(this.$apis.post_deleteBookmarks, this.selectedNumber)
                    .then(res => {
                        this.get_data()
                    })
                    .catch((res) => {

                    });
            },
            getCategoryId() {
                this.$ajax.get(this.$apis.getCategory, {}).then(res => {
                    this.dropData = res;
                }).catch(err => {
                    console.log(err)
                });
            },
          //新增product
          addNewProduct(){
            this.addProductDialogVisible=true;
            this.forceUpdateNumber=Math.random();
          },
          handleOkClick(e){
            let params = []
            e.forEach(v=>{
              let id
              id=_.findWhere(v,{key:'id'}).value;
              params.push(id);
            });
            if (params.length != []){
              this.$ajax.post(this.$apis.post_supplier_addbookmark,params).then(res=>{
                this.$message({
                  message: '添加成功',
                  type: 'success',
                })
                this.get_data();
              }).catch(err=>{

              });
            }

            this.addProductDialogVisible=false;
          },
          handleCancel(){
            this.addProductDialogVisible=false;
          },
          tableFilterValue(val){
            let {operatorFilters,sorts}=val;
            this.params.operatorFilters=operatorFilters||[];
            this.params.sorts=sorts||[];
            this.get_data();
          }

        },
        created() {
            this.getCodePart();
            this.getCountryAll();
            // this.setRecycleBin({
            //     name: 'bookmarkRecycleBin',
            //     show: true
            // });
        },
        mounted(){
          this.setLog({query:{code:'BIZ_PURCHASE_SUPPLIER'}});
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
    .disabledBtn{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }

</style>
