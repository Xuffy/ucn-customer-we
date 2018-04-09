<template>
    <div class="qc-overview">
        <div class="head">
            <el-form ref="qcOrder" :model="qcOrder" label-width="190px">
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="qcStatus" :label="$t('warehouse.page.qcStatus')+' :'">
                            <!--<drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>-->
                            <el-input size="mini" v-model="qcOrder.qcStatus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="qcStatus" :label="$t('warehouse.page.qcOrderNo')+' :'">
                            <!--<drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>-->
                            <el-input size="mini" v-model="qcOrder.qcOrderNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="qcStatus" :label="$t('warehouse.page.orderNo')+' :'">
                            <!--<drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>-->
                            <el-input size="mini" v-model="qcOrder.orderNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item prop="qcStatus" :label="$t('warehouse.page.inboundNo')+' :'">
                            <!--<drop-down class="speDropdown" style="width:100%" :list="dropData" ref="dropDown"></drop-down>-->
                            <el-input size="mini" v-model="qcOrder.inboundNo"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

            <div class="btns">
                <el-button type="primary">{{$t('warehouse.page.search')}}</el-button>
                <el-button type="info">{{$t('warehouse.page.clear')}}</el-button>
            </div>
        </div>

        <div class="body">
            <div class="btn-group">
                <el-button>{{$t('warehouse.page.exports')}}</el-button>
                <el-button>{{$t('warehouse.page.add')}}</el-button>
                <el-button @click="$router.push('/warehouse/qcDetail')">qc detail</el-button>
            </div>

            <v-table :data="tableDataList" data-key="payment.tableData"></v-table>
        </div>

    </div>
</template>

<script>

    import VTable from '@/components/common/table/index'

    export default {
        name: "qc-overview",
        components:{
            VTable
        },
        data(){
            return{
                name:'',
                value:'',
                options:[
                    {
                        label:'哇哈哈',
                        value:'哇哈哈',
                    },
                    {
                        label:'喜之郎',
                        value:'喜之郎',
                    },
                ],
                qcOrder:{
                    qcStatus:'',
                    qcOrderNo:'',
                    orderNo:'',
                    inboundNo:''
                },
                tableDataList:[],
                dataColumn:[],
            }
        },
        methods:{
            //获取表格data
            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },


            //获取表格data
            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;
                })
            },
        },
        created(){
            this.getList();
        },
    }
</script>

<style scoped>
    .head-list{
        margin-bottom: 10px;
    }
    .head-list label{
        width: 190px;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        text-align: right;
        font-size: 14px;
        color:#606266;
        padding: 0 12px 0 0;
        box-sizing: border-box;
        float: left;
    }
    .head-list .content{
        margin-left: 190px;
        height: 32px;
    }
    .head-list .content >>> input{
        height: 32px;
    }

    .btns{
        text-align: center;
    }
    .btn-group{
        margin-bottom: 10px;
    }
</style>