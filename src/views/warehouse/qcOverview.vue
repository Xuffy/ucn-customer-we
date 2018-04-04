<template>
    <div class="qc-overview">
        <div class="head">
            <el-row>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>验货结果</label>
                    <div class="content">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>验货单号</label>
                    <div class="content">
                        <el-input v-model="name"></el-input>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>订单编号</label>
                    <div class="content">
                        <el-input v-model="name"></el-input>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>客户编号</label>
                    <div class="content">
                        <el-input v-model="name"></el-input>
                    </div>
                </el-col>
                <el-col class="head-list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <label>入库编号</label>
                    <div class="content">
                        <el-input v-model="name"></el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="btns">
                <el-button size="mini" type="primary">搜索</el-button>
                <el-button size="mini" type="primary">新增</el-button>
            </div>
        </div>

        <div class="body">
            <div>
                <el-button>导出</el-button>
                <el-button @click="$router.push('/warehouse/qcDetail')">qc detail</el-button>
            </div>

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
        name: "qc-overview",
        components:{
            VSimpleTable
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
</style>