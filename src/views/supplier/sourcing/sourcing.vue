<template>
    <div class="SupplierSourcing">
            <div class="title">
             {{$i.supplier.supplierSourcing}}
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
            <div v-show='isButton'>
             <div class="btnline">
<!--                  <el-button :disabled='!selectedData.length>0'>{{$i._baseText.downloadSelected}}({{selectNumber.length}})</el-button>-->

                  <el-button v-authorize="'SUPPLIER:OVERVIEW:CREATE_INQUIRY'" @click='createInquiry'>{{$i.common.creatInquiry}}({{selectNumber.length}})</el-button>
                  <el-button v-authorize="'SUPPLIER:OVERVIEW:CREATE_ORDER'" @click='createOrder' :disabled='!(selectedData.length==1)'>{{$i.common.creatOrder}}</el-button>
                  <el-button v-authorize="'SUPPLIER:OVERVIEW:COMPARE'" @click='compare' :disabled='!(selectedData.length>1)'>{{$i.common.compare}}({{selectNumber.length}})</el-button>
                  <el-button v-authorize="'SUPPLIER:OVERVIEW:ADD_BOOKMARK'" @click='addToBookmark' :disabled='!(selectedData.length)>0'>{{$i.common.addToBookmark}}({{selectNumber.length}})</el-button>
<!--                  <el-button :disabled='!selectedData.length>0'>{{$i.common.downloadSelected}}({{selectNumber.length}})</el-button>-->

              </div>
              <div>

              </div>
        </div>
<!--        表格-->
             <v-table
                    :height=360
                    :loading='loading'
                    :data="tabData"
                    :buttons="[{label: 'detail', type: 1}]"
                    @action="detail"
                    @change-checked='checked'
                    style='marginTop:10px'/>
            <page
              :page-data="pageData"
              @change="handleSizeChange"
              @size-change="pageSizeChange"></page>
            <div v-show='!isButton'  style='display:flex; justify-content: center'>
                <el-button @click='emitData'>{{$i.common.ok}}</el-button>
                <el-button type="primary">{{$i.common.cancel}}</el-button>
            </div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import {
        dropDownSingle
    } from '@/components/index'
    import {
        VTable,
        VPagination
    } from '@/components/index';
    export default {
        name: "SupplierSourcing",
        components: {
            dropDown: dropDownSingle,
            VTable,
            page:VPagination
        },
        props: {
            isButton: {
                type: Boolean,
                default: true
            },
            disabledLine: {
                type: Array,
                default: function() {
                    return []
                }
            },
        },
        data() {
            return {
                value: 1,
                hideBody: true, //是否显示body
                btnInfo: 'Show the Advance',
                loading: false,
                pageTotal: "",
                endpn: "",
                params: {
                    description: "",
                    name: '',
                    pn: 1,
                    ps: 50,
                    skuCode: "",
                    skuNameEn: "",
                    type:'',
                    // recycle: true,
                },
                tabData: [],
                selectedData: [],
                selectNumber: [],
                countryOption:[],
                options:[],
                pageData:{},
                //Category下拉组件数据
                dropData: [],
                defaultProps: {
                    label: 'name',
                    children: 'children'
                },
            }
        },
        methods: {
             ...mapActions([
                'setRecycleBin'
            ]),
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
            //当作为主键时
            emitData() {
                this.$emit('handleOkClick', this.selectedData)
            },
            //搜查
            search() {
                this.get_data()
            },
            //....跳入createInquiry
            createInquiry() {
              console.log(this.selectedData)
                this.$windowOpen({
                    url: '/negotiation/createInquiry',
                    params: {
                        selectedData: this.selectedData
                    }
                });

            },
            //....跳入createOrder
            createOrder() {
                this.$windowOpen({
                    url: '/order/create',
                    params: {
                      supplierCode: this.selectedData[0].code.value
                    }
                });
            },
            //........compare
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
                    url: '/supplier/sourcingDetail',
                    params: {
                        companyId: item.companyId.value,
                        id: item.id.value
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
                this.selectNumber = number
            },
          //获取字典
          getCodePart(){
            this.$ajax.post(this.$apis.POST_CODE_PART,["SR_TYPE","ITM"]).then(res=>{
              this.options.type = _.findWhere(res, {'code': 'SR_TYPE'}).codes;
              this.options.incoterm = _.findWhere(res, {'code': 'ITM'}).codes;
            }).catch(err=>{
              console.log(err)
            });
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
            //.....拿数据
            get_data() {
                this.loading = true
                this.$ajax.post(this.$apis.get_listSupplier, this.params)
                    .then(res => {
                        this.pageData=res;
                        this.loading = false;
                        this.tabData = this.$getDB(this.$db.supplier.overviewtable, res.datas,e=>{
                          let country='';
                          e.country.value.split(',').forEach(v=>{
                            this.countryOption.forEach(m=>{
                              if(m.code===v){
                                country+=(m.name+',');
                              }
                            })
                          });
                          country=country.slice(0,country.length-1);
                          e.country.value=country;

                          e.type.value=this.$change(this.options.type,'type',e,true).name;
                          e.incoterm.value=this.$change(this.options.incoterm,'incoterm',e,true).name;
                          return e;
                          if (this.disabledLine.length > 0) {
                              this.disabledLine.forEach(v => {
                                  let id = _.findWhere(v, {
                                      key: 'id'
                                  }).value;
                                  this.tabData.forEach(m => {
                                      let newId = _.findWhere(m, {
                                          key: 'id'
                                      }).value;
                                      if (id === newId) {
                                          m._disabled = true;
                                      }
                                  })
                              })
                          }

                        })
                    })
                    .catch((res) => {
                        this.loading = false
                    });
            },
            //...........addToBookmark
            addToBookmark() {
                this.$ajax.post(this.$apis.post_supplier_addbookmark, this.selectNumber)
                    .then(res => {
                      this.$message({
                        message: '添加成功',
                        type: 'success'
                      });
                        console.log(res)
                    })
                    .catch((res) => {
                        console.slog(res)
                    });
            },
            getCategoryId() {
                this.$ajax.get(this.$apis.getCategory, {}).then(res => {
                    this.dropData = res;
                }).catch(err => {
                    console.log(err)
                });
            },
        },
        created() {
            this.getCodePart();
            this.getCountryAll();
            this.getCategoryId();
            this.setRecycleBin({
                name: 'bookmarkRecycleBin',
                show: true
            });
        },
        watch: {}
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
