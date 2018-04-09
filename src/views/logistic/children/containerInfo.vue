<template>
    <div>
        <div class="btn-wraps">
            <el-button @click="tabAppend" :disabled="isActive">{{ $t('logistic.btn.add') }}</el-button>
        </div>
        <div class="tab-wrap">
            <el-table
                :data="tableData"
                border
                style="width: 100%; margin-top: 20px"
                :row-class-name="tableRowClassName"
                tooltip-effect="dark"
                row-key
            >
                <el-table-column
                    type="selection"
                    width="40"
                />
                <el-table-column
                        label="序号"
                        align="center"
                        width="50">
                    <template slot-scope="scope">
                        {{scope.row.index + 1}}
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$t('logistic.containerInfo.containerType')"
                        align="center">
                    <template slot-scope="scope">
                        <el-select v-model="containerSelect" placeholder="请选择" v-if="!scope.row.Product">
                            <el-option
                                v-for="item in containerType"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label" 
                            />
                        </el-select>
                        <div v-else>
                            {{scope.row.Product}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$t('logistic.containerInfo.containerQuantity')"
                        align="center">
                    <template slot-scope="scope">
                        <div v-if="!scope.row.containerAmount">
                            <el-input-number v-model="containerNo" :min="1" label="描述文字"></el-input-number>
                        </div>
                        <div v-else>
                            {{scope.row.containerAmount}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="$t('logistic.containerInfo.actions')"
                    width="100"
                >
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="tailBtn('ok')" v-show="!scope.row.containerAmount">ok</el-button>
                        <el-button type="text" size="small" @click="tabSplite(scope.row.index)" v-show="scope.row.containerAmount">{{ $t('logistic.btn.delete') }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                containerNo: '',
                containerSelect: '',
                isActive: false
            }
        },
        props: {
            tableData: {
                type: Array,
                default: []
            },
            containerType: {
                type: Array,
                default: () => {
                    return [
                        {
                            label: "dada",
                            id: "1"
                        }
                    ]
                }
            }
        },
        created() {
            this.tabAppend();
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                row.index = rowIndex;
            },
            tabAppend() {
                this.isActive = true;
                this.$emit('tabAppend');
            },
            tailBtn(str) {
                if(str === 'ok') {
                    if(!this.containerSelect) return this.$message({
                        message: '请选择货柜类型',
                        type: 'warning'
                    });
                    if(!this.containerNo) return this.$message({
                        message: '请填写货柜数量',
                        type: 'warning'
                    });
                    this.$emit('tailBtnOk', {
                        Product: this.containerSelect,
                        containerAmount: this.containerNo
                    });
                    this.containerSelect = '';
                    this.containerNo = '';
                } else {
                    this.$emit('tailBtnCancel');
                }
                return this.isActive = false
            },
            tabSplite(index) {
                if(this.tableData.length <= 1) this.tabAppend();
                this.$emit('tabSplite', index)
            }
        }
    }
</script>
<style lang="less" scoped>
    .btn-wraps {
        padding:10px 0;
    }
</style>
