<template>
    <div class="inbound-overview">
        <div class="title">
            <span>{{$i.warehouse.warehouseOverview}}</span>
        </div>
        <div class="body">
            <div class="head">
                <span>{{$i.warehouse.status}}</span>

                <el-radio-group class="radioGroup" @change="changeStatus" v-model="warehouseConfig.skuInventoryStatusDictCode" size="mini">
                    <el-radio-button label="">{{$i.warehouse.all}}</el-radio-button>
                    <el-radio-button v-for="v in warehouseStatusOption" :key="v.id" :label="v.code">{{v.name}}</el-radio-button>
                </el-radio-group>
                <select-search
                        class="search"
                        @inputEnter="searchInbound"
                        v-model="searchId"
                        :options="searchOptions"></select-search>
            </div>
            <div class="section">
                <v-table
                        :loading="loadingTable"
                        :data="tableDataList"
                        :buttons="[{label: 'Detail', type: 1}]"
                        @change-checked="changeChecked"
                        @action="btnClick">
                    <template slot="header">
                        <div class="btns">
                            <el-button>{{$i.warehouse.download}}({{selectList.length?selectList.length:'All'}})</el-button>
                        </div>
                    </template>
                </v-table>
            </div>
        </div>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'

    export default {
        name: "warehouseOverview",
        components:{
            selectSearch,
            VTable
        },
        data(){
            return{
                /**
                 * 页面基本配置
                 * */
                loadingTable:false,
                qcOrderStatus:'0',
                tableDataList:[],
                downloadBtnInfo:'All',
                selectList:[],
                warehouseStatusOption:[],
                warehouseConfig:{
                    inboundNo: "",
                    orderNo: "",
                    pn: 1,
                    ps: 100,
                    skuCode: "",
                    skuInventoryStatusDictCode: "",

                    // sorts: [
                    //     {
                    //         "orderBy": "string",
                    //         "orderType": "string",
                    //     }
                    // ],
                    // operatorFilters: [
                    //     {
                    //         "columnName": "string",
                    //         "operator": "string",
                    //         "property": "string",
                    //         "value": {}
                    //     }
                    // ],
                },
                searchId:1,
                searchOptions:[
                    {
                        label:'orderNo',
                        id:1
                    },
                    {
                        label:'skuCode',
                        id:2
                    },
                    {
                        label:'inboundNo',
                        id:3
                    },
                ]
            }
        },
        methods:{
            changeStatus(){
                this.getWarehouseData();
            },

            //获取表格数据
            getWarehouseData(){
                this.loadingTable=true;
                this.$ajax.post(this.$apis.get_buyerWarehouseOverview,this.warehouseConfig).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.warehouse.warehouseOverview, res.datas);
                    this.loadingTable=false;
                }).catch(err=>{
                    this.loadingTable=false;
                });
            },

            searchInbound(e){
                if(!e.keyType){
                    return this.$message({
                        message: 'please choose a type',
                        type: 'warning'
                    });
                }else{
                    if(e.keyType===1){
                        this.warehouseConfig.inboundNo='';
                        this.warehouseConfig.orderNo=e.key;
                        this.warehouseConfig.skuCode='';
                    }else if(e.keyType===2){
                        this.warehouseConfig.inboundNo='';
                        this.warehouseConfig.orderNo='';
                        this.warehouseConfig.skuCode=e.key;
                    }else if(e.keyType===3){
                        this.warehouseConfig.inboundNo=e.key;
                        this.warehouseConfig.orderNo='';
                        this.warehouseConfig.skuCode='';
                    }
                    this.getWarehouseData();
                }
            },

            btnClick(e){
                this.$windowOpen({
                    url:'/product/sourcingDetail',
                    params:{
                        id:e.skuId.value
                    }
                })
            },

            changeChecked(e){
                this.selectList=e;
            },


            /**
             * 字典获取
             * */
            getUnit(){
                this.$ajax.post(this.$apis.get_partUnit,['SKU_INVENTORY_STATUS'],{_cache:true}).then(res=>{
                    this.warehouseStatusOption=res[0].codes;
                    console.log(this.warehouseStatusOption)
                    // this.warehouseStatusOption.forEach(v=>{
                    //     if(v.code==='1'){
                    //         v.label='已验货';
                    //     }else if(v.code==='2'){
                    //         v.label='待验货';
                    //     }
                    // })
                }).catch(err=>{

                });
                // this.$ajax.get(this.$apis.get_allUnit).then(res=>{
                //     console.log(res)
                // });
            },
        },
        created(){
            this.getWarehouseData();
            this.getUnit();
        },
        watch:{

        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
        margin-bottom: 5px;
    }

    .radioGroup{
        margin-left: 10px;
    }

    .head .search{
        float: right;
    }
    .section{
        margin-top: 10px;
    }
</style>