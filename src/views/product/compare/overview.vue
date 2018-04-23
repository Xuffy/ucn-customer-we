<template>
    <div class="compare-overview">
        <div class="title">
            <span>{{$i.product.compareOverview}}</span>
        </div>
        <div class="btns">
            <el-button>{{$i.product.download}}</el-button>
            <el-button :disabled="disableDelete" type="danger">{{$i.product.delete}}</el-button>
            <select-search
                    :options="[]"
                    class="search"></select-search>
        </div>
        <!--<el-button type="primary" @click="$router.push('/product/compareDetail')">Detail</el-button>-->
        <!--<div class="status">-->
            <!--<div class="btn-wrap">-->
                <!--<el-button>{{$t("product.page.downloadSelectedCompare")}}</el-button>-->
                <!--<el-button type="danger">{{$t("product.page.delete")}}</el-button>-->
            <!--</div>-->

            <!--<div class="select-wrap">-->
                <!--<select-search></select-search>-->


                <!--&lt;!&ndash;<el-select v-model="value" placeholder="select" @change="selectChange">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                            <!--&lt;!&ndash;v-for="item in options"&ndash;&gt;-->
                            <!--&lt;!&ndash;:key="item.id"&ndash;&gt;-->
                            <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                            <!--&lt;!&ndash;:value="item.id" />&ndash;&gt;-->
                <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-input v-model="keyWord" clearable       prefix-icon="el-icon-search" placeholder="search" style="width:150px;margin-left:10px;"></el-input>&ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="body">-->
            <!--<v-simple-table-->
                    <!--class="speTable"-->
                    <!--:data.sync="tableDataList"-->
                    <!--:column="dataColumn"-->
                    <!--@sort-change="getSort"-->
                    <!--@page-change="pageChange">-->
            <!--</v-simple-table>-->
        <!--</div>-->
        <!--from-->
    </div>
</template>
<script>
    import {dropDown} from '@/components/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'


    export default {
        name: '',
        components: {
            dropDown,
            selectSearch
        },
        data() {
            return {
                /**
                 * 页面基本配置
                 * */
                disableDelete:true,

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
                this.$ajax.post(this.$apis.get_compareList,{
                    name: "string",
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
                    // sorts: [
                    //     {
                    //         orderBy: "",
                    //         orderType: "",
                    //     }
                    // ]
                });
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


    }

</style>
