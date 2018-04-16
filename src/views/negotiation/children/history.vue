<template>
    <div>
        <el-dialog
                :title="title"
                :visible.sync="value"
                width="70%"
                lock-scroll
            >
            <el-table
                    :data="tableData"
                    style="width: 100%"
                >
                <el-table-column
                    v-for="(item, index) in this.filterColumn(this.tableColumn)"
                    :key="index"
                    :label="item.label"
                    :prop="item.key"
                >
                    
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'title'
            },
            oSwitch: {
                type: Boolean,
                default: false
            },
            tableData: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            tableColumn: {
                type: String,
                default: () => {
                    return '';
                }
            }
        },
        computed: {
            value: {
                get() {
                    return this.oSwitch;
                },
                set(val) {
                    this.$emit('update:oSwitch', val);
                }
            }
        },
        watch: {
            oSwitch(val) {
                this.$emit('update:oSwitch', val);
            }
        },
        mounted() {
            
        },
        methods: {
            filterColumn(str) {
                
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
