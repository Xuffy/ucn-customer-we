<template>
    <div class="compare-overview">
        <div class="title">
            <span>{{$i.product.compareDetail}}</span>
        </div>
        <div class="name">
            <span>Compare Name</span>
            <el-input
                    size="mini"
                    class="compare-name"
                    placeholder="please input"
                    v-model="compareName"
                    clearable>
            </el-input>
        </div>
        <div class="btns">
            <el-button @click="addNewProduct" type="primary">{{$i.product.addNew}}</el-button>
            <el-button @click="deleteProduct" :disabled="disableDelete" type="danger">{{$i.product.delete}}</el-button>
            <el-checkbox-group v-model="screenTableStatus" class="compare-checkbox">
                <el-checkbox label="1">{{$i.product.hideTheSame}}</el-checkbox>
                <el-checkbox label="2">{{$i.product.highlightTheDifferent}}</el-checkbox>
            </el-checkbox-group>
        </div>

        <v-table
                :data="tableDataList"
                :buttons="[{label: 'detail', type: 1}]"
                @action="btnClick"
                @change-checked="changeChecked"
                ></v-table>
        <div class="footBtn">
            <el-button @click="saveCompare" :loading="disabledSaveCompare" type="primary">{{$i.product.saveTheCompare}}</el-button>
        </div>

        <el-dialog title="Add Product" :visible.sync="addProductDialogVisible" width="80%">
            <product
                    :title="addProductTitle"
                    :disabledOkBtn="false"
                    :hideBtn="true"
                    :disabledLine="disabledLine"
                    :forceUpdateNumber="forceUpdateNumber"
                    @handleOK="handleOkClick"
                    @handleCancel="handleCancel"></product>
        </el-dialog>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import product from '../addProduct'


    export default {
        name: "compare",
        components:{
            VTable,
            product
        },
        data(){
            return{
                forceUpdateNumber:1,
                compareName:'',         //对比的名称
                screenTableStatus:[],   //表格筛选状态
                tableDataList:[],       //表格数据展示
                addProductTitle:'哇哈哈',
                totalDataList:[],       //因为要分页，所以先取一个全部数据
                disabledLine:[],        //在弹出框中默认置灰不能操作的条目
                selectList:[],          //保存选择的数剧

                //弹出框显示状态
                addProductDialogVisible:false,

                //btns状态
                disabledSaveCompare:false,
                disableDelete:true,            //是否禁止删除
            }
        },
        methods:{
            getTotalData(){

            },



            getList() {
                if(this.$route.params.type==='new'){
                    //表示是新建detail还未保存
                    let id=[];
                    this.$route.query.id.split(',').forEach(v=>{
                        id.push(Number(v));
                    });
                    this.$ajax.post(this.$apis.get_skuListByIds,id).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.product.indexTable, res,(e)=>{
                            if(e.status.value===1){
                                e.status.value='上架';
                            }else if(e.status.value===0){
                                e.status.value='下架';
                            }
                            return e;
                        });
                        this.disabledLine=this.tableDataList;
                    }).catch(err=>{

                    });
                }else if(this.$route.params.type==='modify'){
                    //表示这里已经生成对应的compare单，直接获取该单数据即可
                    let params={
                        id: Number(this.$route.query.compareId),
                        // operatorFilters: [
                        //     {
                        //         "columnName": "string",
                        //         "operator": "string",
                        //         "property": "string",
                        //         "resultMapId": "string",
                        //         "value": {}
                        //     }
                        // ],
                        pn: 1,
                        ps: 50,
                        recycle: false,
                        // sorts: [
                        //     {
                        //         orderBy: "string",
                        //         orderType: "string",
                        //     }
                        // ]
                    };
                    this.$ajax.post(this.$apis.get_buyerProductCompareDetail,params).then(res=>{
                        console.log(res)
                    }).catch(err=>{

                    });
                }
            },

            btnClick(e){
                this.windowOpen('/product/sourcingDetail',{id:e.id.value});
            },

            changeChecked(e){
                this.selectList=e;
            },


            //新增product
            addNewProduct(){
                this.addProductDialogVisible=true;
                this.forceUpdateNumber=Math.random();
            },

            //删除product
            deleteProduct(){
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
                this.$nextTick(()=>{
                    this.disableDelete=true;
                    this.disabledLine=[];
                    this.tableDataList.forEach(v=>{
                        if(!v._disabled){
                            this.disabledLine.push(v);
                        }
                    });
                });
            },

            handleOkClick(e){
                console.log(e)

                e.forEach(v=>{
                    let id=_.findWhere(v,{key:'id'}).value;
                    let isIn=false;
                    this.tableDataList.forEach((m,index)=>{
                        let newId=_.findWhere(m,{key:'id'}).value;
                        if(id===newId){
                            this.$set(m,'_disabled',false);
                        }
                    })
                });

                // e.forEach(v=>{
                //     this.tableDataList.push(v);
                // });
                this.addProductDialogVisible=false;
            },

            handleCancel(){
                this.addProductDialogVisible=false;
            },

            //保存该compare list
            saveCompare(){
                let params={
                    compares: [],
                    name: this.compareName
                };
                this.tableDataList.forEach(v=>{
                    let id,name;
                    id=_.findWhere(v,{key:'id'}).value;
                    name=_.findWhere(v,{key:'nameEn'}).value;
                    console.log(id,name)
                    params.compares.push({
                        id:id,
                        name:name
                    });
                });
                this.$ajax.post(this.$apis.add_buyerProductCompare,params).then(res=>{
                    let compareId=res;
                    this.$router.push({
                        name:'Compare Detail',
                        params:{
                            type:'modify'
                        },
                        query:{
                            compareId:compareId
                        }
                    });
                }).catch(err=>{

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

        },
        created(){
            this.getTotalData();
            this.getList();
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
            }
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
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
    }

</style>