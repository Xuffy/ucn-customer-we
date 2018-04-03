<template>
    <div class="FromBookmark">
        <div class='search_enter'>
            <el-select v-model="value" placeholder="select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="input" placeholder="Please enter"></el-input>
              <el-button type="primary" icon="el-icon-search">{{$t('order.buttonname.search')}}</el-button>
        </div>
        <div>
             <v-simple-table :column="tabColumn" :data.sync="tabData" />
        </div>
    </div>
</template>

<script>
    import {
        VSimpleTable
    } from '@/components/index';
    export default {
        name: "FromBookmark",
        components: {
            VSimpleTable
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
                    this.tabColumn = this.$getTableColumn(this.tabData, "supplier.tableData", {
                        width: '180px'
                    });
                    console.log(this.tabColumn)
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

</style>
