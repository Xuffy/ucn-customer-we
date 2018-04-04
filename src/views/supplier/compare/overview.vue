<template>
    <div class="compare-overview">
        <h3 class="hd">{{$t("supplier.title.compareOverview")}}</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button type="primary">{{$t("supplier.buttonname.downloadSelectedCompare")}}</el-button>
                <el-button type="info">{{$t("supplier.buttonname.delete")}}</el-button>
            </div>

       <div class="select-wrap">       
                <el-select v-model="value" placeholder="select" @change="selectChange">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id" />
                </el-select>               
                <el-input v-model="keyWord" clearable       prefix-icon="el-icon-search" placeholder="search" style="width:150px;margin-left:10px;"></el-input>
                <div>
<!--
                <i class="el-icon-setting" @click='hiddenDropDown'>
                </i>
                <drop-down :class="showdropDown?'speDropdownshow':'speDropdown'"  ref="dropDown"></drop-down>
-->
                </div>
            </div>
        </div>
        <!--from-->
          <!--        表格-->
          <v-simple-table :column="tabColumn" :data.sync="tabData" />
    </div>
</template>
<script>
    import {
        dropDown
    } from '@/components/index'
    import {
        VSimpleTable
    } from '@/components/index';
    export default {
        name: '',
        data() {
            return {
                options: [{
                    id: '1',
                    label: this.$t("supplier.compare.compareName")
                }, {
                    id: '1',
                    label: this.$t("supplier.compare.compareItem")
                }],
//                showdropDown: false,
                tabColumn: [],
                tabData: []
            }
        },
        components: {
            dropDown,
            VSimpleTable
        },
        methods: {
            selectChange() {

            },
//  hiddenDropDown() { // this.showdropDown = !this.showdropDown // }
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
