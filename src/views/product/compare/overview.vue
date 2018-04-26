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

        <v-table
                class="speTable"
                :data="tableDataList"
                :buttons="[{label:'Modify',type:1},{label: 'Detail', type: 2}]"
                @action="btnClick"
                @change-checked="changeChecked"></v-table>

    </div>
</template>
<script>
    import {dropDown} from '@/components/index'
    import selectSearch from '@/components/common/fnCompon/selectSearch'
    import VTable from '@/components/common/table/index'

    export default {
        name: '',
        components: {
            dropDown,
            selectSearch,
            VTable
        },
        data() {
            return {
                /**
                 * 页面基本配置
                 * */
                disableDelete:true,
                tableDataList:[],
                selectList:[],
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
                    name: "",
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
                }).then(res=>{

                    this.tableDataList = this.$getDB(this.$db.product.compareTable, res.datas,(e)=>{
                        e.updateDt.value=this.$dateFormat(e.updateDt.value,'yyyy-mm-dd');
                        return e;
                    });
                    console.log(this.tableDataList)
                });
            },


            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },

            btnClick(e,type){
                if(type===1){
                    //modify
                }else if(type===2){
                    //Detail
                    this.$router.push({
                        name:'Compare Detail',
                        params:{
                            type:'modify'
                        },
                        query:{
                            compareId:e.id.value
                        }
                    });
                }
            },

            changeChecked(e){
                this.selectList=e;
            },

        },
        created(){
            console.log(this.$db)
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
        .speTable{
            margin-top: 10px;
        }



    }

</style>
