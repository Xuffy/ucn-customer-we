<template>
    <div class="create-inbound">
        <div class="title">
            {{$i.warehouse.basicInfo}}
        </div>
        <el-form :modal="inboundData" ref="basicInfo" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="speCol" v-for="v in $db.product.detailTab" v-if="v.belongTab==='basicInfo'" :key="v.key" :xs="24" :sm="v.fullLine?24:12" :md="v.fullLine?24:12" :lg="v.fullLine?24:12" :xl="v.fullLine?24:12">
                    <el-form-item :prop="v.key" :label="v.label">
                        <div v-if="v.showType==='input'">
                            <el-input class="speInput" size="mini" v-model="inboundData[v.key]" placeholder="please choose"></el-input>
                        </div>
                        <div v-else-if="v.showType==='select'">
                            <el-select class="speInput" size="mini" v-model="inboundData[v.key]" placeholder="please choose">
                                <el-option
                                        v-for="item in v.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div v-else-if="v.showType==='textarea'">
                            <el-input
                                    class="speInput"
                                    type="textarea"
                                    autosize
                                    placeholder="please input"
                                    v-model="inboundData[v.key]">
                            </el-input>
                        </div>
                        <div v-else-if="v.showType==='number'">
                            <el-input-number
                                    class="speInput"
                                    size="mini"
                                    v-model="inboundData[v.key]"
                                    :controls="false"
                                    :min="0"
                                    label="please input"></el-input-number>
                        </div>
                        <div v-else-if="v.showType==='dropdown'">
                            <drop-down
                                    class="speInput"
                                    :list="dropData"
                                    :defaultProps="defaultProps"
                                    v-model="inboundData[v.key]"
                                    ref="dropDown"></drop-down>
                        </div>

                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "createInbound",
        data(){
            return{
                /**
                 * 页面基础配置
                 * */
                labelPosition:'left',


                inboundData:[

                ],
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 16px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
</style>