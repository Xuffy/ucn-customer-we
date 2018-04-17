<template>
    <div>
        <el-dialog
                :title="title"
                :visible.sync="value"
                width="70%"
                lock-scroll
            >
            
            <el-table
                    :data="filterData"
                    style="width: 100%"
                >
                <el-table-column
                    v-for="(item, index) in filtColumn"
                    :key="index"
                    :label="item.label"
                    :prop="item.key"
                    :width="item.width || 130"
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
            list: {
                type: Array,
                default: () => {
                    return [];
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
            },
            filterData: {
                get() {;
                    return this.list;
                },
                set(val) {
                    console.log(val)
                }
            },
            filtColumn() {
                let column = [], 
                    data = this.$db.inquiryOverview.basicInfo;
                for(let key in data) {
                    if(key !== 'id') column.push(data[key]);
                };
                return column;
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
            
        }
    }
</script>
<style lang="less" scoped>

</style>
