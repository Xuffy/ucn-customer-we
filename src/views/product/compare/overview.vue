<template>
    <div class="compare-overview">
        <div class="title">
            <span>{{$i.product.compareOverview}}</span>
        </div>
       <!--<div class="status">-->
         <!--<el-button>{{$i.button.download}}</el-button>-->
         <!--<el-button v-authorize="'PRODUCT:COMPARE_OVERVIEW:RECYCLE_BIN'" type="danger" @click="deleteCompare">{{$i.button.remove}}</el-button>-->
       <!--</div>-->
        <v-table
                :height="500"
                v-loading="loadingTable"
                class="speTable"
                :data="tableDataList"
                :buttons="[{label:'Modify',type:1},{label: 'Detail', type: 2}]"
                @action="btnClick"
                @change-checked="changeChecked">
            <template slot="header">
                <div class="btns">
                    <el-button
                            @click="download"
                            v-authorize="'PRODUCT:COMPARE_OVERVIEW:DOWNLOAD'">{{$i.product.download+' ('+downloadBtnInfo+')'}}</el-button>
                    <el-button
                            @click="deleteCompare"
                            :disabled="disableDelete"
                            :loading="disableClickDeleteBtn"
                            v-authorize="'PRODUCT:COMPARE_OVERVIEW:DELETE'"
                            type="danger">{{$i.product.delete}}</el-button>
                    <select-search
                            v-model="searchValue"
                            :options="searchOptions"
                            @inputEnter="searchCompare"
                            class="search"></select-search>
                </div>
            </template>
        </v-table>
        <page
                @size-change="changeSize"
                @change="changePage"
                :page-sizes="[50,100,200,500]"
                :page-data="pageData"></page>


    </div>
</template>
<script>
    import {dropDown,VPagination} from '@/components/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'
    import VTable from '@/components/common/table/index'
    import { mapActions } from 'vuex'

    export default {
        name: '',
        components: {
            dropDown,
            selectSearch,
            VTable,
            page:VPagination
        },
        data() {
            return {
                /**
                 * 页面基本配置
                 * */
                loadingTable:false,         //是否让表格处于loading状态
                disableDelete:true,
                tableDataList:[],
                selectList:[],
                downloadBtnInfo:'All',
                disableClickDeleteBtn:false,
                searchValue:1,
                searchOptions:[
                    {
                        label:'Compare Name',
                        id:1
                    },
                    {
                        label:'Compare Item',
                        id:2
                    },
                ],
                queryParam:{
                    name: '',
                    compareItem:'',
                    // operatorFilters: [
                    //     {
                    //         columnName: "",
                    //         operator: "",
                    //         property: "",
                    //     }
                    // ],
                    pn: 1,
                    ps: 50,
                    recycle: false,
                    sorts: [
                        {
                            orderBy: 'updateDt',
                            orderType: 'desc',
                        }
                    ]
                },
                pageData:{}
            }
        },
        methods: {
            ...mapActions(['setMenuLink']),
            selectChange() {

            },
            hiddenDropDown() {
                this.showdropDown = !this.showdropDown
            },

            //获取data数据
            getList() {
                this.loadingTable=true;
                this.$ajax.post(this.$apis.get_compareList,this.queryParam).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.product.compareTable, res.datas,(e)=>{
                        e.updateDt.value=this.$dateFormat(e.updateDt.value,'yyyy-mm-dd');
                        return e;
                    });
                    this.selectList=[];
                    this.loadingTable=false;
                    this.loadingTable=false;
                    this.pageData=res;
                }).catch(err=>{
                    this.loadingTable=false;
                    this.loadingTable=false;
                });
            },
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },

            btnClick(e,type){
                if(type===1){
                    //modify
                    this.$windowOpen({
                        url:'/product/compareDetail/modify',
                        params:{
                            isModify:true,
                            compareId:e.id.value,
                            compareName:e.name.value
                        },
                    });
                }else if(type===2){
                    //Detail
                    this.$windowOpen({
                        url:'/product/compareDetail/modify',
                        params:{
                            compareId:e.id.value,
                            compareName:e.name.value
                        },
                    });
                }
            },

            changeChecked(e){
                this.selectList=e;
            },
            searchCompare(e){
                console.log(e)
                if(!e.id){
                    this.$message({
                        message: 'please choose a type',
                        type: 'warning'
                    });
                }else{
                    this.loadingTable=true;
                    if(e.id===1){
                        //compareName
                        this.queryParam.compareItem='';
                        this.queryParam.name=e.value;
                        this.getList();
                    }else if(e.id===2){
                        //compareItem
                        this.queryParam.name='';
                        this.queryParam.compareItem=e.value;
                        this.getList();
                    }
                }
            },
            download(){
                let ids=_.pluck(_.pluck(this.selectList,"id"),'value');
                if(ids.length>0){
                    this.$fetch.export_task('SKU_PURCHASE_EXPORT_COMPARE_IDS',{ids:ids});
                }else{
                    let params=this.$depthClone(this.queryParam);
                    this.$fetch.export_task('SKU_PURCHASE_EXPORT_COMPARE_PARAMS',params);
                }
            },
            deleteCompare(){
                this.$confirm(this.$i.product.sureDelete, this.$i.product.prompt, {
                    confirmButtonText: this.$i.product.sure,
                    cancelButtonText: this.$i.product.cancel,
                    type: 'warning'
                }).then(() => {
                    this.disableClickDeleteBtn=true;
                    let id=_.pluck(_.pluck(this.selectList,'id'),'value');
                    this.$ajax.post(this.$apis.delete_buyerProductCompare,id).then(res=>{
                        this.getList();
                        this.$message({
                            type: 'success',
                            message: this.$i.product.deleteSuccess
                        });
                    }).finally(()=>{
                        this.disableClickDeleteBtn=false;
                    });

                }).catch(() => {

                });
            },
            /**
             * 分页操作
             * */
            changePage(e){
                this.queryParam.pn=e;
                this.getList();
            },
            changeSize(e){
                this.queryParam.ps=e;
                this.getList();
            }

        },
        created(){
            this.getList();
            // this.setRecycleBin({
            //     name: 'compareRecycleBin',
            //     show: true
            // });
        },
        mounted(){
            this.setMenuLink({
                path: '/logs/index',
                query: {code: 'PRODUCT'},
                type: 10,
                label: this.$i.common.log
            });
            this.setMenuLink({
                path: '/product/compareArchive',
                type: 20,
                label: this.$i.common.archive
            });
        },
        watch:{
            selectList(n){
                if(n.length>0){
                    this.disableDelete=false;
                    this.downloadBtnInfo=n.length;
                }else{
                    this.disableDelete=true;
                    this.downloadBtnInfo='All';
                }
            }
        }
    }

</script>
<style lang="less" scoped>
    .compare-overview {

        .title{
            font-weight: bold;
            font-size: 18px;
            height: 32px;
            line-height: 32px;
            color:#666666;
        }
        .btns{
            .search{
                float: right;
            }
        }
        .speTable{
            margin-top: 10px;
        }
    }
    .status{
      margin-top: 20px;
    }

</style>
