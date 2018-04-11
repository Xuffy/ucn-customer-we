<template>
    <div class="compare-overview">
        <h3 class="hd">{{$t("supplier.title.compareOverview")}}</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button >{{$t("supplier.buttonname.downloadSelectedCompare")}}</el-button>
                <el-button type="danger">{{$t("supplier.buttonname.delete")}}</el-button>
            </div>

       <div class="select-wrap">       
<!--
                <el-select v-model="value" placeholder="select" @change="selectChange">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id" />
                </el-select>               
                <el-input v-model="keyWord" style="width:150px;margin-left:10px;">
                    
                </el-input>
-->
                   <selectSearch></selectSearch>
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
           <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
    </div>
</template>
<script>
    import {
        dropDown,
        selectSearch
    } from '@/components/index'
    import {
        VTable
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
            VTable,
            selectSearch
        },
        methods: {
            selectChange() {

            },
            //  hiddenDropDown() { // this.showdropDown = !this.showdropDown // }
        },
        created() {
            this.ajax.get(this.$apis.supplier_overview, {
                    params: {}
                })
                .then(res => {
                    this.tabData = res

                })
                .catch((res) => {

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
