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
                  <el-button v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:CREATE_ORDER'"  @click='createOrder' :disabled='!(selectedData.length==1)'>{{$i.common.creatOrder}}({{selectedNumber.length}})</el-button>
                  <el-button v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:COMPARE'" @click='compare' :disabled='!(selectedData.length>1)'>{{$i.common.compare}}({{selectedNumber.length}})</el-button>
<!--                 <el-button :disabled='!selectedData.length>0'>{{$i.common.downloadSelected}}({{selectedNumber.length}})</el-button>-->
<!--                  <el-button :disabled='!selectedData.length>0' v-authorize="'SUPPLIER:BOOKMARK_OVERVIEW:DELETE'" @click='remove' type='danger'>{{$i.common.delete}}({{selectedNumber.length}})</el-button>-->

              </div>
              <div>

              </div>
        </div>
<!--        表格-->
             <v-table
                   :height=360
                    :data="tabData"
                    :buttons="[{label: 'detail', type: 1}]"
                    @action="detail"
                    @change-checked='checked'
                    :loading='loading'
                    style='marginTop:10px'/>
            <page
              :page-data="pageData"
              @change="handleSizeChange"
              @size-change="pageSizeChange"></page>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
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
            page:VPagination
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
                pageData:[]
            }
        },
        methods: {
              ...mapActions([
                'setRecycleBin'
            ]),
            //获取字典
            getCodePart(){
              this.$ajax.post(this.$apis.POST_CODE_PART,["SR_TYPE"]).then(res=>{
                this.options.type = _.findWhere(res, {'code': 'SR_TYPE'}).codes;
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

            },
            //....跳入createOrder
            createOrder() {
                this.$windowOpen({
                    url: '/order/creat',
                    params: {
                        type: 'supplier',
                        supplierName: this.selectedData[0].name.value,
                        supplierNo: this.selectedData[0].code.value
                    }
                });
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
                        supplierId: item.supplierId.value
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
            get_data() {
                this.loading = true;
                this.$ajax.post(this.$apis.post_supplier_listbookmark, this.params)
                    .then(res => {
                        //分页组件的参数
                        this.pageData=res;
                        this.tabData = this.$getDB(this.$db.supplier.overviewtable, res.datas);
                        this.loading = false

                    })
                    .catch((res) => {
                        this.loading = true
                    });
            },
            //..........remove
            remove() {
                console.log(this.selectNumber);
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
            handleSizeChange(val) {
                this.params.pn = val;
                this.get_data()
            },
            pageSizeChange(val) {
                this.params.ps = val;
                this.get_data()
            },
        },
        created() {
            this.get_data()
            this.setRecycleBin({
                name: 'bookmarkRecycleBin',
                show: true
            });
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
