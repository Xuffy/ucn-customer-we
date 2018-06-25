<template>
    <div class="compare-overview">
        <div class="title">
            <span>{{$i.product.compareDetail}}</span>
        </div>
        <div class="name">
            <span>Compare Name</span>
            <el-input
                    :disabled="$route.params.type==='modify' && !isModify"
                    size="mini"
                    class="compare-name"
                    placeholder="please input"
                    v-model="compareName"
                    clearable>
            </el-input>
        </div>
        <div class="btns">
            <span v-if="$route.params.type==='new'">
                <el-button v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_INQUIRY'" @click='createInquiry'>{{$i.product.createInquiry}}({{selectNumber.length}})</el-button>
                <el-button v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_ORDER'"  @click="createOrder" :class="(selectedData.length>1)?'disabledBtn':'' ">{{$i.product.createOrder}}({{selectNumber.length}})</el-button>
                <el-button v-authorize="'SUPPLIER:COMPARE_DETAIL:ADD_NEW'" @click="addNewProduct">{{$i.product.addNew}}</el-button>
                <el-button v-authorize="'SUPPLIER:COMPARE_DETAIL:DELETE'" @click="deleteProduct" :disabled="disableDelete" type="danger">{{$i.product.delete}}</el-button>
            </span>
            <span v-if="$route.params.type==='modify'">
                <el-button v-if="!isModify" v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_INQUIRY'" @click="createInquiry">{{$i.product.createInquiry}}({{selectNumber.length}})</el-button>
                <el-button @click="createOrder" v-if="!isModify" v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_ORDER'"  :class="(selectedData.length>1)?'disabledBtn':'' ">{{$i.product.createOrder}}({{selectNumber.length}})</el-button>

                <el-button v-if="!isModify" @click="modifyCompare" >Modify</el-button>
addNewProduct
                <el-button v-if="isModify" @click="addNewProduct" v-authorize="'SUPPLIER:COMPARE_DETAIL:ADD_NEW'">{{$i.product.addNew}}</el-button>
                <el-button v-if="isModify" @click="deleteProduct" :disabled="disableDelete" type="danger" v-authorize="'SUPPLIER:COMPARE_DETAIL:DELETE'">{{$i.product.delete}}</el-button>
            </span>
           <span v-if="$route.params.type==='read'">
                <el-button v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_INQUIRY'" @click="createInquiry">{{$i.product.createInquiry}}({{selectNumber.length}})</el-button>
                <el-button @click="createOrder" v-authorize="'SUPPLIER:COMPARE_DETAIL:CREATE_ORDER'"  :class="(selectedData.length>1)?'disabledBtn':'' ">{{$i.product.createOrder}}({{selectNumber.length}})</el-button>
                <el-button  @click="addNewProduct" v-authorize="'SUPPLIER:COMPARE_DETAIL:ADD_NEW'">{{$i.product.addNew}}</el-button>
                <!--<el-button v-if="isModify" @click="deleteProduct" :disabled="disableDelete" type="danger" v-authorize="'SUPPLIER:COMPARE_DETAIL:DELETE'">{{$i.product.delete}}</el-button>-->
            </span>
            <el-checkbox-group v-model="screenTableStatus" class="compare-checkbox">
                <el-checkbox label="1">{{$i.product.hideTheSame}}</el-checkbox>
                <el-checkbox label="2">{{$i.product.highlightTheDifferent}}</el-checkbox>
            </el-checkbox-group>
        </div>

        <v-table
          code="udata_pruchase_supplier_compare_detail_overview"
          :data="tableDataList"
          :buttons="[{label: 'Detail', type: 1}]"
          @action="btnClick"
          @change-checked="changeChecked"
          @filter-value="tableFilterValue"></v-table>

        <div class="footBtn">
            <div v-if="$route.params.type==='new'">
                <el-button @click="saveCompare" :loading="disabledSaveCompare" type="primary" v-authorize="'SUPPLIER:COMPARE_DETAIL:SAVE'">{{$i.product.saveTheCompare}}</el-button>
            </div>
            <div v-if="$route.params.type==='modify'">
                <el-button v-if="!isModify" @click="deleteCompare" :loading="disabledSaveCompare" :disabled="allowDeleteCompare" type="danger" v-authorize="'SUPPLIER:COMPARE_DETAIL:DELETE'">{{$i.product.deleteTheCompare}}</el-button>
                <el-button :disabled="allowBottomClick" type="primary" v-if="isModify" @click='saveCompare' v-authorize="'SUPPLIER:COMPARE_DETAIL:SAVE'">Save</el-button>
                <el-button :disabled="allowBottomClick" @click="cancelModify" v-if="isModify">Cancel</el-button>
            </div>
          <div v-if="$route.params.type==='read'">
            <el-button :disabled="allowBottomClick" type="primary"  @click='saveCompare' v-authorize="'SUPPLIER:COMPARE_DETAIL:SAVE'">OK</el-button>
            <el-button :disabled="allowBottomClick" @click="cancelModify">Cancel</el-button>
          </div>
        </div>

        <el-dialog title="Add Supplier" :visible.sync="addProductDialogVisible" width="80%">
            <VSupplier
                @handleOkClick='handleOkClick'
                :isButton=false
                :disabledLine="disabledLine"
                @handleCancel="handleCancel"
                >
            </VSupplier>
        </el-dialog>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import product from '../../product/addProduct'
    import VSupplier from '../sourcing/sourcing'

    let copy_data=[];

    export default {
        name: "compare",
        components:{
            VTable,
            product,
            VSupplier
        },
        data(){
            return{
                pageData:[],
                options:[],
                countryOption:[],
                forceUpdateNumber:1,
                compareName:'',         //对比的名称
                screenTableStatus:[],   //表格筛选状态
                tableDataList:[],       //表格数据展示
                addProductTitle:'哇哈哈',
                totalDataList:[],       //因为要分页，所以先取一个全部数据
                disabledLine:[],        //在弹出框中默认置灰不能操作的条目
                selectList:[],          //保存选择的数剧
                isModify:false,         //是否处于编辑状态，默认为false

                //弹出框显示状态
                addProductDialogVisible:false,
                dialogFormVisible:false,

                //btns状态
                disabledSaveCompare:false,
                disableDelete:true,            //是否禁止删除
                allowDeleteCompare:true,      //是否可以点击delete，在数据还没加载完的时候不能点击
                allowBottomClick:true,          //是否禁止点击底部操作按钮,
                params:{
                  id: Number(this.$route.query.compareId),
                  name:'',
                  pn: 1,
                  ps: 50,
                  recycle: false,
                  operatorFilters:[],
                  sorts:[]
                },
                selectedData:[],
                selectNumber: [],
            }
        },
        methods:{
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
                this.getList();
              }).catch(err=>{
                console.log(err)
              });
            },
            getList() {
                if(this.$route.params.type==='new'){
                    //表示是新建detail还未保存
                    let id=[];
                    this.$route.query.id.split(',').forEach(v=>{
                        id.push(Number(v));
                    });
                    let time=new Date();
                    this.compareName=this.$dateFormat(time,'yyyymmdd')+Date.parse(time);
                    this.$ajax.post(this.$apis.post_listSupplierByIds,id).then(
                        res=>{
                        this.tableDataList = this.$getDB(this.$db.supplier.compareDetail, res, e => {
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
                        });
                        this.disabledLine=this.tableDataList;
                        copy_data = this.tableDataList;
                    }).catch(err=>{

                    })

                }else if(this.$route.params.type==='modify'){
                    //表示这里已经生成对应的compare单，直接获取该单数据即可
                    this.compareName=this.$route.query.compareName;
                    if(this.$route.query.isModify){
                        this.isModify=true;
                    }
                    this.$ajax.post(this.$apis.post_supplier_listCompareDetails,this.params).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.supplier.compareDetail, res.datas,e=>{
                          e.type.value=this.$change(this.options.type,'type',e,true).name;
                          e.incoterm.value=this.$change(this.options.incoterm,'incoterm',e,true).name;

                          return e;
                        });
                        copy_data = this.tableDataList;
                        console.log(copy_data)
                        this.disabledLine=this.tableDataList;
                        this.allowDeleteCompare=false;
                        this.allowBottomClick=false;
                    })
                }else{
                  this.compareName=this.$route.query.compareName;
                  if(this.$route.query.isModify){
                    this.isModify=true;
                  }
                  this.$ajax.post(this.$apis.post_supplier_listCompareDetails,this.params).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.supplier.compareDetail, res.datas,e=>{
                      e.type.value=this.$change(this.options.type,'type',e,true).name;
                      e.incoterm.value=this.$change(this.options.incoterm,'incoterm',e,true).name;

                      return e;
                    });
                    copy_data = this.$getDB(this.$db.supplier.compareDetail, res.datas)
                    console.log(copy_data)
                    this.disabledLine=this.tableDataList;
                    this.allowDeleteCompare=false;
                    this.allowBottomClick=false;
                  })
                }
            },

            btnClick(e){
                this.$windowOpen({
                    url:'/supplier/sourcingDetail',
                    params:{
                        companyId:e.companyId.value,
                        id:e.id.value
                    }
                })
            },

            changeChecked(item){
              this.selectList=item;
              this.selectedData = item
              let number = []
              this.selectedData.forEach(item => {
                number.push(item.id.value);
              });
              this.selectNumber = number
            },

            //编辑单子
            modifyCompare(){
                this.isModify=true;
            },

            //取消编辑
            cancelModify(){
              this.isModify=false;
              this.selectNumber = [];
              this.getList();
            },
            createInquiry() {
              if(this.selectList.length===0){
                this.$windowOpen({
                  url:'/negotiation/createInquiry',
                })
              }else{
                let companyId = '';
                this.selectList.forEach((v,k)=>{
                  let item = _.findWhere(v, {
                    key: 'companyId'
                  });
                  if (k === this.selectList.length - 1) {
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
                })
              }

            },
            //勾选的商品创建order
            createOrder(){
              console.log(this.selectedData)
              if(_.uniq(this.selectNumber).length>1){
                this.$message({
                  message: '供应商只能单选!',
                  type: 'warning',
                });
                return false;
              }else{
                if(this.selectNumber.length===0){
                  this.$windowOpen({
                    url:'/order/create',
                  })
                }else{
                  this.$windowOpen({
                    url:'/order/create',
                    params:{
                      type:'supplier',
                      supplierCode:this.selectedData[0].code.value
                    },
                  })
                }
              }
            },

            //新增product
            addNewProduct(){
                this.addProductDialogVisible=true;
                this.forceUpdateNumber=Math.random();
                let v = [];
                // this.getList.forEach(v => x[v.id] = v);
              console.log(this.tableDataList)

            },

            //删除product
            deleteProduct(){
                this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.selectList.forEach(v=>{
                        let id=_.findWhere(v,{key:'id'}).value;
                        this.tableDataList.forEach(m=>{
                            let newId=_.findWhere(m,{key:'id'}).value;
                            if(id===newId){
                                this.$set(m,'_disabled',true);
                                this.$set(m,'_checked',false);
                            }
                        })
                    });
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.$nextTick(()=>{
                        this.disableDelete=true;
                        this.disabledLine=[];
                        this.tableDataList.forEach(v=>{
                            if(!v._disabled){
                                this.disabledLine.push(v);
                            }
                        });
                    });
                }).catch(() => {

                });
            },

            handleOkClick(e){
                //如果总条数>100，则进行提示
                let totalLen=0;
                this.tableDataList.forEach(v=>{
                    if(!v._disabled){
                        totalLen++;
                    }
                });
                if(totalLen+e.length>100){
                    this.$message({
                        message: '不能超过100条',
                        type: 'warning'
                    });
                }else{
                    e.forEach(v=>{
                        let id=_.findWhere(v,{key:'id'}).value;
                        let isIn=false;
                        this.tableDataList.forEach(m=>{
                            let newId=_.findWhere(m,{key:'id'}).value;
                            if(id===newId){
                                this.$set(m,'_disabled',false);
                                isIn=true;
                            }
                        });
                        if(!isIn){
                            this.tableDataList.push(v);
                        }
                    });
                    this.disabledLine=[];
                    this.tableDataList.forEach(v=>{
                        if(!v._disabled){
                          this.disabledLine.push(v);
                          copy_data = this.tableDataList
                        }
                    });

                }
                this.addProductDialogVisible=false;
            },

            handleCancel(){
                this.addProductDialogVisible=false;
            },

            //保存该compare list
            saveCompare(){
                if(!this.compareName){
                    this.$message({
                        message: 'Please Input Compare Name',
                        type: 'warning'
                    });
                    return;
                }
                this.disabledSaveCompare=true;
                let params={
                    compares: [],
                    name: this.compareName
                };
                this.tableDataList.forEach(v=>{
                    let id,name;
                    id=_.findWhere(v,{key:'id'}).value;
                    name=_.findWhere(v,{key:'name'}).value;
                    params.compares.push({
                        id:id,
                        name:name
                    });
                });
                this.$ajax.post(this.$apis.post_supplier_addCompare,params).then(res=>{
                    let compareId=res;
                    this.$router.push({
                        name:'supplierCompareDetail',
                        params:{
                            type:'modify'
                        },
                        query:{
                            compareId:compareId,
                            compareName:this.compareName
                        }
                    });
                    this.disabledSaveCompare=false;
                }).catch(err=>{
                    this.disabledSaveCompare=false;
                });
            },
            //删除该compare
            deleteCompare(){
                this.$confirm('确认删除该compare?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.disabledSaveCompare=true;
                    let id=[];
                    id.push(Number(this.$route.query.compareId));
                    this.$ajax.post(this.$apis.post_supplier_deleteCompare,id).then(res=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.disabledSaveCompare=false;
                        this.$router.push({
                            path:'/supplier/compare'
                        });
                    }).catch(err=>{
                        this.disabledSaveCompare=false;
                    });
                }).catch(() => {

                });
            },

            handleClick(e){
                e.isActive=!e.isActive;
                this.keylist.forEach(v=>{
                    if(v.isActive){
                      this.selectList.push(v);
                    }
                });
            },
          tableFilterValue(val){
            let {operatorFilters,sorts}=val;
            this.params.operatorFilters=operatorFilters||[];
            this.params.sorts=sorts||[];
            this.getList();
          }

        },
        created(){
            this.getCodePart();
            this.getCountryAll();
        },
        watch:{
          selectList(n){
              let len=0;
              this.tableDataList.forEach(v=>{
                  if(!v._disabled){
                      len++;
                  }
              });

              if(n.length>0 && (len-n.length)>=2){
                  this.disableDelete=false;
              }else{
                  this.disableDelete=true;
              }
          },
          screenTableStatus(){
            console.log(this.screenTableStatus)
             if (this.screenTableStatus.length != 0){
               this.screenTableStatus.forEach(v => {
                  if (v == 1){
                    this.tableDataList = this.$table.setHideSame(this.tableDataList)
                  }else{
                    this.tableDataList = this.$table.setHighlight(this.tableDataList)
                  }
               })
             }else{
                this.tableDataList = copy_data

             }
          },
        },
    }
</script>

<style scoped>
    .compare-overview{

    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .name{
        padding: 15px 0;
    }
    .name span{
        font-size: 14px;
    }
    .compare-name{
        display: inline-block;
        width: 250px;
        margin-left: 10px;
    }
    .compare-checkbox{
        display: inline-block;
    }
    .footBtn{
        margin-top: 10px;
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .disabledBtn{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }

</style>
