<template>
    <div class="orderOverview">
        <h3 class="hd">Order Overview</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>Status:</span>
                      <el-radio-group v-model="status_buttons">
                            <el-radio-button label="TBCByCustomer">{{$t('order.buttonname.TBCByCustomer')}}</el-radio-button>
                            <el-radio-button label="TBCBySupplier">{{$t('order.buttonname.TBCBySupplier')}}</el-radio-button>
                            <el-radio-button label="process">{{$t('order.buttonname.process')}}</el-radio-button>
                            <el-radio-button label="finish">{{$t('order.buttonname.finish')}}</el-radio-button>
                            <el-radio-button label="cancel">{{$t('order.buttonname.cancel')}}</el-radio-button>
                    </el-radio-group>
            </div>
            <div class="select-wrap">
                <div class="select">
                    <el-select v-model="value" placeholder="select" @change="selectChange">
                        <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <el-input v-model="keyWord" clearable prefix-icon="el-icon-search" placeholder="search" style="width:150px;"></el-input>
            </div>
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button type="primary">{{$t('order.buttonname.downloadSelected')}}</el-button>
                <el-button type="primary">{{$t('order.buttonname.accept')}}</el-button>
                <el-button>{{$t('order.buttonname.copy')}}</el-button>
                <el-button>{{$t('order.buttonname.cancel')}}</el-button>
                <el-button>{{$t('order.buttonname.delete')}}</el-button>
            </div>
            <div class="viewBy">
                <span>View by : </span>
                   <el-radio-group v-model="viewBy_buttons">
                            <el-radio-button label="Inquiry">{{$t('order.buttonname.order')}}</el-radio-button>
                            <el-radio-button label="SKU">{{$t('order.buttonname.SKU')}}</el-radio-button>
                    </el-radio-group>
                <div class="set">
                    <i class="el-icon-setting" @click='hiddenDropDown'></i>
                    <drop-down :class="showdropDown?'speDropdownshow':'speDropdown'"  ref="dropDown"></drop-down>
                </div>
            </div>
        </div>
        <!--form-->
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据 
     * @param value 下拉框 选中值
     */
    import {
        dropDown
    } from '@/components/index'
    export default {
        name: 'orderOverview',
        components: {
            dropDown
        },
        data() {
            return {
                value: '',
                keyWord: '',
                options: [{
                    id: '1',
                    label: this.$t('order.buttonname.orderNo')
                }, {
                    id: '2',
                    label: this.$t('order.buttonname.skuCode')
                }, ],
                status_buttons: 'TBCByCustomer', //status的按钮组
                viewBy_buttons: 'SKU', //status的按钮组
                showdropDown: false
            }
        },
        methods: {
            //下拉框值
            selectChange(val) {
                console.log(val)
            },
            hiddenDropDown() {
                this.showdropDown = !this.showdropDown
            }
        }
    }

</script>
<style lang="less" scoped>
    .orderOverview {
        .hd {
            height: 50px;
            line-height: 50px;
            color: #666;
            border-bottom: 1px solid #ccc;
            font-size: 18px;
            color: #666666;
        }
        .status {
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            box-sizing: border-box;
            .btn-wrap {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                }
                button {
                    padding: 2px 5px;
                    cursor: pointer;
                    border: 1px solid #108ee9;
                    background-color: #fff;
                    margin-left: 10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    &:hover,
                    &.active {
                        background-color: #108ee9;
                        color: #fff;
                    }
                }
            }
            .select-wrap {
                display: flex;
                align-items: center;
                .select {
                    width: 110px;
                    margin-right: 5px;
                    input {}
                }
            }
        }
        .fn {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            box-sizing: border-box;
            .viewBy {
                display: flex;
                align-items: center;

                span {
                    font-size: 14px;
                    color: #666;
                }

                .set {
                    cursor: pointer;
                    padding-left: 40px;
                    /*                    color: #999;*/
                    i {
                        font-size: 25px;
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
        }
    }

</style>
