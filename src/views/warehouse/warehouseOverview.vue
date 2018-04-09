<template>
    <div class="warehouse">
        <div class="title">
            {{$t('product.page.warehouseOverview')}}
        </div>
        <div class="body">
            <div class="select">
                <select-search class="search"></select-search>
            </div>
            <div class="btn">
                <el-button type="primary">{{$t('warehouse.page.downLoad')}}</el-button>
            </div>

            <div class="table">
                <v-table :data="tableDataList" data-key="payment.tableData"></v-table>
            </div>
        </div>

        <el-button @click="$router.push('/warehouse/qcOverview')" type="primary">qc Overview</el-button>
        <el-button @click="$router.push('/warehouse/createQc')" type="primary">Create Qc Order</el-button>
    </div>
</template>
<script>
    import VTable from '@/components/common/table/index'
    import {bigPhoto} from '@/components/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'

    export default {
        name:'warehouse',
        components:{
            bigPhoto,
            VTable,
            selectSearch
        },
        data(){
            return{
                options:[
                    {
                        label:'哇哈哈',
                        value:'哇哈哈'
                    },
                    {
                        label:'喜之郎',
                        value:'喜之郎'
                    },
                ],
                searchValue:'',                 //搜索的内容
                tableDataList:[],
                dataColumn:[],
                value:''
            }
        },
        methods:{
            toDetail(){
                window.open('http://192.168.51.229:8080/#/warehouse/qcDetail');
            },


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
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }

    .body{
        margin-top: 10px;
    }
    .body .search-input{
        width: auto;
    }
    .body .btn{
        margin-top: 10px;
    }

    .table{
        margin-top: 10px;
    }
</style>