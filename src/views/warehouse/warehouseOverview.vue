<template>
    <div class="warehouse">
        <div class="title">
            {{$t('product.page.warehouseOverview')}}
        </div>
        <div class="body">
            <div class="select">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-input
                        class="search-input"
                        placeholder="请输入内容"
                        v-model="searchValue">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div class="btn">
                <el-button type="primary">{{$t('warehouse.page.downLoad')}}</el-button>
            </div>

            <div class="table">
                <v-simple-table
                        class="speTable"
                        :data.sync="tableDataList"
                        :column="dataColumn"
                        @sort-change="getSort"
                        @page-change="pageChange">
                </v-simple-table>

            </div>

        </div>



        <el-button @click="$router.push('/warehouse/qcOverview')" type="primary">qc Overview</el-button>
        <el-button @click="$router.push('/warehouse/createQc')" type="primary">Create Qc Order</el-button>
    </div>
</template>
<script>

    import VSimpleTable from '@/components/common/table/simple'
    import {bigPhoto} from '@/components/index'

    export default {
        name:'warehouse',
        components:{
            VSimpleTable,
            bigPhoto
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
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
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
</style>