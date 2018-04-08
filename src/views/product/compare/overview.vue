<template>
    <div class="compare-overview">
        <h3 class="hd">{{$t("product.page.compareOverview")}}</h3>
        <el-button type="primary" @click="$router.push('/product/compare/detail')">Detail</el-button>
        <div class="status">
            <div class="btn-wrap">
                <el-button>{{$t("product.page.downloadSelectedCompare")}}</el-button>
                <el-button type="danger">{{$t("product.page.delete")}}</el-button>
            </div>

            <div class="select-wrap">
                <select-search></select-search>


                <!--<el-select v-model="value" placeholder="select" @change="selectChange">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.id"-->
                            <!--:label="item.label"-->
                            <!--:value="item.id" />-->
                <!--</el-select>-->
                <!--<el-input v-model="keyWord" clearable       prefix-icon="el-icon-search" placeholder="search" style="width:150px;margin-left:10px;"></el-input>-->
            </div>
        </div>
        <div class="body">
            <v-simple-table
                    class="speTable"
                    :data.sync="tableDataList"
                    :column="dataColumn"
                    @sort-change="getSort"
                    @page-change="pageChange">
            </v-simple-table>
        </div>
        <!--from-->
    </div>
</template>
<script>
    import {dropDown} from '@/components/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'
    import VSimpleTable from '@/components/common/table/simple'

    export default {
        name: '',
        components: {
            dropDown,
            VSimpleTable,
            selectSearch
        },
        data() {
            return {
                options: [
                    {
                        id: '1',
                        label: this.$t("supplier.compare.compareName")
                    },
                    {
                        id: '2',
                        label: this.$t("supplier.compare.compareName")
                    },
                ],
                showdropDown: false,
                value:'',
                keyWord:'',

                tableDataList:[],
                dataColumn:[],

            }
        },
        methods: {
            selectChange() {

            },
            hiddenDropDown() {
                this.showdropDown = !this.showdropDown
            },

            //获取data数据
            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
                })
            },


            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },



        },
        created(){
            this.getList();
        },
    }

</script>
<style lang="less" scoped>
    .compare-overview {
        .hd {
            font-size: 18px;
            height: 50px;
            line-height: 50px;
            color: #666;
        }
        .status {
            display: flex;
            height: 60px;
            box-sizing: border-box;
            padding-left: 25px;
            padding-right: 25px;
            align-items: center;
            justify-content: space-between;
            .btn-wrap {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                }
            }
        }
        .select-wrap {
            display: flex;
            align-items: center;
            .select {
                width: 110px;
                margin-right: 5px;
            }
            .el-icon-setting {
                padding-left: 30px;
                font-size: 26px;
                /*                line-height: 60px;*/
            }
            .speDropdown {
                position: absolute;
                right: 40px;
                background-color: #ffffff;
                z-index: 2000;
                display: none
            }
            .speDropdownshow {
                position: absolute;
                right: 40px;
                background-color: #ffffff;
                z-index: 2000;

            }
        }
    }

</style>
