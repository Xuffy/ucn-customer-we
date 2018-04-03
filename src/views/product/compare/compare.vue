<template>
    <div class="compare-overview">
        <div class="title">
            {{$t('product.page.compareDetail')}}
        </div>
        <div class="btn-groups">
            <el-button type="primary">{{$t('product.page.createInquiry')}}</el-button>
            <el-button type="primary">{{$t('product.page.createOrder')}}</el-button>
            <el-checkbox-group v-model="checkList" class="checkbox-group">
                <el-checkbox :label="$t('product.page.hideTheSame')"></el-checkbox>
                <el-checkbox :label="$t('product.page.highlightTheDifference')"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div>
            <v-simple-table
                    class="speTable"
                    :data.sync="tableDataList"
                    :column="dataColumn"
                    @sort-change="getSort"
                    @page-change="pageChange">
            </v-simple-table>
        </div>
    </div>
</template>

<script>

    import VSimpleTable from '@/components/common/table/simple'

    export default {
        name: "compare",
        components:{
            VSimpleTable
        },
        data(){
            return{
                checkList:[],
                tableDataList:[],
                dataColumn:[]
            }
        },
        methods:{
            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },


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
    .compare-overview{

    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .title-btn{
        float: right;
        margin-right: 5px;
    }

    .btn-groups{
        margin-top: 10px;
    }

    .checkbox-group{
        display: inline-block;
    }

</style>