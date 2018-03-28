<template>
    <div class="orderOverview">
        <h3 class="hd">Draft Overview</h3>
        <div class="status">
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
                <el-button type="primary">Send</el-button>
                <el-button type="primary">Delete</el-button>
            </div>
            <div class="viewBy">
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
                }, ]
            }
        },
        methods: {
            selectChange(val) {
                console.log(val)
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
            justify-content: flex-end;
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
