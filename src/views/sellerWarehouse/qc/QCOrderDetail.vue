<template>
    <div class="QCOrderDetail">
        <el-form ref="ruleform" :model="fromArg">
            <el-row :gutter="10">                    
                <el-col 
                    v-for="(item, index) in $db.warehouse.qcDetailBasicInfo" 
                    :key="index" 
                    :xs="item.xs || 8" 
                    :sm="item.sm || 8" 
                    :md="item.md || 8" 
                    :lg="item.lg || 8"
                    v-if="!item._inquiryHide && !item._hide"
                >
                    <el-form-item  
                            :label="item.label" 
                            :prop="item.key" 
                            :rules="item.rules" 
                            :label-width="item.width || '150px'"
                        >
                        <el-input 
                            v-model="basicInfo[item.key]" 
                            :size="item.size || 'mini'"
                            v-if="item.type === 'String' && !item._hide" 
                            disabled="true"
                        />
                        <el-input-number v-model="basicInfo[item.key]" disabled="true" :min="0" :max="100" v-if="item.type === 'phone'" controls-position="right" size="mini" :controls="false" style="width:100%;"/>
                        <el-select
                                v-model="basicInfo[item.key]" 
                                value-key="id"
                                :size="item.size || 'mini'"
                                v-if="item.type === 'Select'"
                                style="width:100%;"
                                disabled="true"
                            >
                            <el-option
                                v-for="item in []"
                                :key="item.id"
                                :id="item.id"
                            />
                        </el-select>
                        <el-input
                            type="textarea"
                            v-model="basicInfo[item.key]"
                            :rows="item.rows || 4"
                            :size="item.size || 'mini'"
                            :placeholder="item.placeholder"
                            v-if="item.type === 'textarea'"
                            resize="none"
                            disabled="true"
                        />
                        <v-up-load v-if="item.type === 'attachment' || item.type === 'upData'"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <h5 class="solid">付款信息</h5>
        <el-table
                :data="tableData6"
                border
                show-summary
                style="width: 100%"
            >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
        </el-table>
        <h5 class="solid">产品信息</h5>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="验货结果" name="first">
                <el-button>接受</el-button>
                <v-table 
                    :data.sync="tabData"
                    :buttons="[{'label': '详情', type: 'detail'}]"
                    @action="producInfoAction"
                    @change-checked="changeChecked"
                    :totalRow="true"
                />
            </el-tab-pane>
            <el-tab-pane label="返工申请" name="second">
                <el-button>接受返工</el-button>
                <v-table 
                    :data.sync="tabData"
                    :buttons="[{'label': '详情', type: 'detail'}]"
                    @action="producInfoAction"
                    @change-checked="changeChecked"
                    :totalRow="true"
                />
            </el-tab-pane>
            <el-tab-pane label="退货申请" name="third">
                <el-button>接受退货</el-button>
                <v-table 
                    :data.sync="tabData"
                    :buttons="[{'label': '详情', type: 'detail'}]"
                    @action="producInfoAction"
                    @change-checked="changeChecked"
                    :totalRow="true"
                />
            </el-tab-pane>
        </el-tabs>
        <h5 class="solid">总结</h5>
        <el-form ref="ruleform" :model="fromArg">
            <el-row :gutter="10">                    
                <el-col 
                    v-for="(item, index) in $db.warehouse.summary" 
                    :key="index" 
                    :xs="item.xs || 8" 
                    :sm="item.sm || 8" 
                    :md="item.md || 8" 
                    :lg="item.lg || 8"
                    v-if="!item._inquiryHide && !item._hide"
                >
                    <el-form-item  
                            :label="item.label" 
                            :prop="item.key" 
                            :rules="item.rules" 
                            :label-width="item.width || '150px'"
                        >
                        <el-input 
                            v-model="fromArg[item.key]" 
                            :size="item.size || 'mini'"
                            v-if="!item._hide" 
                            :disabled="item.disabled"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    import { Upload, VTable } from '@/components/index';
    export default {
        name: 'QCOrderDetail',
        data() {
            return {
                basicInfo: {},
                tabData: [],
                activeName2: 'first',
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }]
            }
        },
        computed: {
            fromArg() {
                let json = {};
                _.mapObject(this.$db.warehouse.qcDetailBasicInfo, (val, k) => {
                    json[k] = '';
                });
                return json;
            }
        },
        components: {
            'v-up-load': Upload,
            'v-table': VTable
        },
        created() {
            this.getDetail();
        },
        methods: {
            getDetail() {
                this.$ajax.get(`${this.$apis.GET_QC_GETBYID}?id=${this.$route.query.id}`)
                .then(res => {
                    this.basicInfo = res;
                })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSelectionChange() {

            },
            producInfoAction() {

            },
            changeChecked() {

            }
        }
    }
</script>
<style scoped>
    .QCOrderDetail .el-form {
        padding: 10px;
    }
    .QCOrderDetail .el-form-item >>> .el-form-item__label {
        display:flex;
        justify-content:flex-end;
        text-align: left;
    }
</style>
<style scoped lang="less">
    .QCOrderDetail h5 {
        font-size:15px;
        font-weight: bold;
        color:#666;
        padding:10px 0;
        margin: 5px 0;
        &.solid {
            border-bottom:1px dotted #ccc;
        }
    }
</style>

