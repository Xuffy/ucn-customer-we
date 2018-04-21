<template>
    <div>
        <el-dialog
                :title="title"
                :visible.sync="value"
                width="70%"
                lock-scroll
            >
            <v-simple-table />
            <!-- <el-table
                    :data="data"
                    style="width: 100%"
                    v-if="title === 'Modify'"
                    :span-method="arraySpanMethod"
                    :row-class-name="tableRowClassName"
                >
                <el-table-column type="index" />
                <el-table-column
                        :label="item.label"
                        :width="item.wdith || 120"
                        v-for="item in column"
                        :key="item.id"
                        v-if="!item._hide"
                    >
                    <template slot-scope="scope">
                        <el-select v-model="scope.row[item.key]" :placeholder="item.placeholder" v-if="item.type === 'select' && scope.row[item.key] && scope.row[item.key].sta === 'remark'">
                            <el-option
                                    v-for="items in item.select"
                                    :key="items"
                                    :value="items"
                                >
                                {{ items }}
                            </el-option>
                        </el-select>
                        <el-input v-if="scope.row[item.key] && scope.row[item.key].sta === 'histoty'" placeholder="Please select"></el-input>
                    </template>
                </el-table-column>
            </el-table> -->
            <h3 v-if="title === 'Modify'">Histoty</h3>
            <VTable :data.sync="history" :rowspan="2" :selection="false" />
        </el-dialog>
    </div>
</template>
<script>
    import VTable from '@/components/common/table/index';
    import VSimpleTable from '@/components/common/table/simple';
    export default {
        data() {
            return {
                data: []
            }
        },
        props: {
            title: {
                type: String,
                default: 'title'
            },
            oSwitch: {
                type: Boolean,
                default: false
            },
            list: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            column: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            msgTableType: {
                type: Boolean,
                default: () => {
                    return false;
                }
            }
        },
        computed: {
            value: {
                get() {
                    if(this.msgTableType) {
                        //console.log(this.column)
                    };
                    return this.oSwitch;
                },
                set(val) {
                    this.$emit('update:oSwitch', val);
                }
            },
            filtColumn() {
                let column = [], 
                    data = this.column;
                for(let key in data) {
                    if(key !== 'id') column.push(data[key]);
                };
                return column;
            },
            history() {
                if(this.title === 'Modify') {
                    let arr = [];
                    for(let i = 0; i <= 1; i ++) {
                        let json = {};
                        for(let key in this.column) {
                            if(i <= 0) {
                                json[key] = {
                                    label: null,
                                    key: key,
                                    sta: 'remark'
                                };
                            } else {
                                json[key] = {
                                    label: null,
                                    key: key,
                                    sta: 'histoty'
                                };
                            }
                        }
                        arr.push(json);
                    };
                    this.data = arr;
                };
                return this.$getDB(this.$db.inquiryOverview.basicInfo, this.$filterRemark(this.list, 'fieldRemark'));
            }
        },
        watch: {
            oSwitch(val) {
                this.$emit('update:oSwitch', val);
            }
        },
        created() {
            
        },
        mounted() {
            
        },
        methods: {
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            tableRowClassName(row, index) {
                row.index = index
            }
        },
        components: {
            VTable,
            VSimpleTable
        }
    }
</script>
<style lang="less" scoped>

</style>
