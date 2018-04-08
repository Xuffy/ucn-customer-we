<template>
    <div class="compare">
        <h3 class="hd">{{$t("supplier.title.compareDetail")}}</h3>
        <div class="fn">
            <div class="box-l">
                <el-button >{{$t("supplier.buttonname.createOrder")}}</el-button>
                 <el-button >{{$t("supplier.buttonname.accept")}}</el-button>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label='$t("supplier.buttonname.hideTheSame")'></el-checkbox>
                    <el-checkbox :label='$t("supplier.buttonname.hightlightTheDifferent")'></el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
<!--
<i class="el-icon-setting" @click='hiddenDropDown'></i>
<drop-down :class="showdropDown?'speDropdownshow':'speDropdown'" ref="dropDown"></drop-down>
-->
            </div>

           
        </div>
        <!--from-->
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
        name: 'compare',
        components: {
            dropDown,
            VSimpleTable
        },
        data() {
            return {
                checkList: [],
                options: [{
                    label: 'wwww.baidu.com',
                    id: '1'
                }],
                Filed: '',
                tabColumn: [],
                tabData: []
            }
        },
        methods: {},
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
    .compare {
        .hd {
            height: 50px;
            line-height: 50px;
            color: #666;
            padding: 0 20px;
            font-size: 18px;
        }
        .fn {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            .box-l {
                display: flex;
                align-items: center;
                margin: 10px 0;
                button {
                    margin-right: 10px;
                }
                .el-checkbox__label {
                    font-size: 12px;
                }
                .el-checkbox+.el-checkbox {
                    margin-left: 15px;
                }
            }
            .el-icon-setting {
                font-size: 26px;
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
            span {
                font-size: 12px;
                color: #999;
            }
            button {
                padding: 5px 5px !important;
            }
            .filedSelect {
                margin-left: 10px;
            }
        }
    }

</style>
