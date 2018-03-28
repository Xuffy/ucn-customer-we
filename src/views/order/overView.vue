<template>
    <div class="orderOverview">
        <h3 class="hd">Order Overview</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>Status:</span>
                      <el-radio-group v-model="status_buttons">
                            <el-radio-button label="TBC by Customer">TBC by Customer</el-radio-button>
                            <el-radio-button label="TBC by Supplier">TBC by Supplier</el-radio-button>
                            <el-radio-button label="Process">Process</el-radio-button>
                            <el-radio-button label="Finished">Finished</el-radio-button>
                            <el-radio-button label="Canceled">Canceled</el-radio-button>
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
                <el-button type="primary">Download Selected</el-button>
                <el-button type="primary">Accept</el-button>
                <el-button>Copy</el-button>
                <el-button>Cancel</el-button>
                <el-button>Delete</el-button>
            </div>
            <div class="viewBy">
                <span>View by:</span>
                   <el-radio-group v-model="viewBy_buttons">
                            <el-radio-button label="Inquiry">Inquiry</el-radio-button>
                            <el-radio-button label="SKU">SKU</el-radio-button>
                    </el-radio-group>
                <div class="set">
                    <i class="el-icon-setting"></i>
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
    export default {
        name: '',
        data() {
            return {
                value: '',
                keyWord: '',
                options: [{
                    id: '1',
                    label: 'Order No'
                }, {
                    id: '2',
                    label: 'Sku Code'
                }, ],
                status_buttons: 'TBC by Customer', //status的按钮组
                viewBy_buttons: 'SKU', //status的按钮组
            }
        },
        methods: {
            //下拉框值
            selectChange(val) {
                console.log(val)
            },
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
                button {
                    cursor: pointer;
                    border: 1px solid #108ee9;
                    background-color: #fff;
                    margin-left: 10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    padding: 2px 5px;
                    &:hover,
                    &.active {
                        background-color: #108ee9;
                        color: #fff;
                    }
                }
                .set {
                    cursor: pointer;
                    padding-left: 18px;
                    color: #999;
                    i {
                        font-size: 25px;
                    }
                }
            }
        }
    }

</style>
