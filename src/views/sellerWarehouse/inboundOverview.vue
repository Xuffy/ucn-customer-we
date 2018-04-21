<template>
    <div class="inbound-overview">
        <div class="title">
            <span>{{$i.warehouse.inboundOverview}}</span>
        </div>
        <div class="body">
            <div class="head">
                <span>入库类型</span>
                <el-radio-group class="radioGroup" @change="changeStatus" v-model="inboundStatus" size="mini">
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
                    <el-button>新建</el-button>
                </div>
                <v-table
                        :data="tableDataList"
                        :buttons="[{label: 'detail', type: 1}]">
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
                inboundStatus:'1',
                tableDataList:[],
            }
        },
        methods:{
            changeStatus(e){
                console.log(e)
            },

            getInboundData(){
                this.$ajax.get(this.$apis.get_inboundData,{
                    sorts:[
                        {

                        }
                    ],
                    inboundNo:1,
                    ps:50,
                    pn:1
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                });
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