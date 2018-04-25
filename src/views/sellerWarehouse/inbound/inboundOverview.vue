<template>
    <div class="inbound-overview">
        <div class="title">
            <span>{{$i.warehouse.inboundOverview}}</span>
        </div>
        <div class="body">
            <div class="head">
                <span>{{$i.warehouse.inboundType}}</span>
                <el-radio-group class="radioGroup" @change="changeStatus" v-model="inboundStatus" size="mini">
                    <el-radio-button label="0">全部</el-radio-button>
                    <el-radio-button label="1">采购入库</el-radio-button>
                    <el-radio-button label="2">验货入库</el-radio-button>
                    <el-radio-button label="3">客户退货入库</el-radio-button>
                    <el-radio-button label="4">预发货退货入库</el-radio-button>
                </el-radio-group>
                <select-search class="search"></select-search>
            </div>
            <div class="section">
                <div class="btns">
                    <el-button>下载</el-button>
                    <el-button @click="createInbound">新建</el-button>
                </div>
                <v-table
                        :data="tableDataList"
                        :buttons="[{label: '详情', type: 1}]"
                        @action="btnClick">
                </v-table>
            </div>
        </div>
    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'

    export default {
        name: "inboundOverview",
        components:{
            selectSearch,
            VTable
        },
        data(){
            return{
                /**
                 * 页面基本配置
                 * */
                inboundStatus:'0',
                tableDataList:[],
                inboundConfig:{
                    inboundNo: "",
                    pn: 1,
                    ps: 50,
                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ],
                    storageType: null
                }
            }
        },
        methods:{
            changeStatus(e){
                let num=Number(e);
                if(num===0){
                    this.inboundConfig.storageType=null;
                }else{
                    this.inboundConfig.storageType=num;
                }
                this.getInboundData();
            },

            //获取表格数据
            getInboundData(){
                this.$ajax.post(this.$apis.get_inboundData,this.inboundConfig).then(res=>{
                    console.log(res)
                    this.tableDataList = this.$getDB(this.$db.warehouse.inboundTable, res.datas,(e)=>{
                        e.entryDt.value=this.$dateFormat(e.entryDt.value,'yyyy-mm-dd');
                        e.inboundDate.value=this.$dateFormat(e.inboundDate.value,'yyyy-mm-dd');
                        e.updateDt.value=this.$dateFormat(e.updateDt.value,'yyyy-mm-dd');
                        return e;
                    });
                }).catch(err=>{
                    console.log(err)
                });
            },

            //新建入库单
            createInbound(){
                this.$windowOpen({
                    url:'/sellerWarehouse/createInbound'
                });
            },

            btnClick(e){
                console.log(e)
            },
        },
        created(){
            this.getInboundData();
        },
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
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