<template>
    <div class="QuickCreate">
       <div class="select_div">
           <selectSearch></selectSearch>
       </div>
        
        <div>
             <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
        </div>
    </div>
</template>

<script>
    import {
        VTable,
        selectSearch
    } from '@/components/index';
    export default {
        name: "QuickCreate",
        components: {
            VTable,
            selectSearch
        },
        props: {

        },
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: this.$t('order.buttonname.skuDec')
                }, {
                    value: '选项2',
                    label: this.$t('order.buttonname.skuName')
                }, {
                    value: '选项3',
                    label: this.$t('order.buttonname.skuCode')
                }],
                value: '', //下拉框值
                input: '', //输入框内容
                tabColumn: [],
                tabData: []
            }
        },
        methods: {

        },
        created() {
            this.ajax.get('/supplierOverview', {
                    params: {}
                })
                .then(res => {
                    this.tabData = res.supplierdata
                })
                .catch((res) => {
                    console.log(res);
                });
        },
        watch: {

        }
    }

</script>

<style scoped>
    .search_enter {
        display: flex;
        justify-content: flex-start;
    }

    .el-input {
        width: 200px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .el-select {
        width: 140px;
    }

    .select_div {
        display: flex;
        justify-content: flex-end
    }

</style>
