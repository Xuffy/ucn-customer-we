<template>
    <div class="qc-detail">
        <div class="title">
            <span>{{$i._buyerQc.qcOrderDetail}}</span>
        </div>
        <div class="second-title">
            {{$i._buyerQc.basicInfo}}
        </div>
        <!--<div>-->
            <!--<el-form ref="qcOrder" :model="qcOrderBasic" label-width="190px">-->
                <!--<el-row class="speZone">-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="QC Order No">-->
                            <!--<el-input-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--placeholder="系统生成"-->
                                    <!--v-model="value"-->
                                    <!--:disabled="true">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="QC Type">-->
                            <!--<el-select :disabled="true" class="speInput" size="mini" v-model="value" placeholder="请选择">-->
                                <!--<el-option-->
                                        <!--v-for="item in options"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="QC Date">-->
                            <!--<el-date-picker-->
                                    <!--:disabled="true"-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--v-model="value"-->
                                    <!--align="right"-->
                                    <!--type="date"-->
                                    <!--placeholder="选择日期"-->
                                    <!--:picker-options="pickerOptions1">-->
                            <!--</el-date-picker>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Factory address">-->
                            <!--<el-input-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--placeholder="please input"-->
                                    <!--v-model="qcOrderConfig.factoryAddress">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Factory Contact Phone">-->
                            <!--<el-input-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--placeholder="please input"-->
                                    <!--v-model="qcOrderConfig.factoryContactPhone">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="QC status">-->
                            <!--<el-select :disabled="true" class="speInput" size="mini" v-model="qcStatusCode" placeholder="请选择">-->
                                <!--<el-option-->
                                        <!--v-for="item in qcStatus"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="QC Method">-->
                            <!--<el-select :disabled="true" class="speInput" size="mini" v-model="value" placeholder="请选择">-->
                                <!--<el-option-->
                                        <!--v-for="item in options"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Surveyor">-->
                            <!--<el-select :disabled="true" class="speInput" size="mini" v-model="value" placeholder="请选择">-->
                                <!--<el-option-->
                                        <!--v-for="item in options"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Service Fee">-->
                            <!--<el-input-->
                                    <!--:disabled="true"-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--placeholder="please input"-->
                                    <!--v-model="value">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Service providers">-->
                            <!--<el-select-->
                                    <!--clearable-->
                                    <!--class="speInput"-->
                                    <!--size="mini"-->
                                    <!--v-model="serviceId"-->
                                    <!--filterable-->
                                    <!--remote-->
                                    <!--reserve-keyword-->
                                    <!--placeholder="请输入关键词"-->
                                    <!--:remote-method="remoteMethod"-->
                                    <!--:loading="loading">-->
                                <!--<el-option-->
                                        <!--v-for="item in serviceList"-->
                                        <!--:key="item.companyId"-->
                                        <!--:label="item.name"-->
                                        <!--:value="item.companyId">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Exchange Currency">-->
                            <!--<el-select class="speInput" size="mini" v-model="qcOrderConfig.exchangeCurrencyDictId" placeholder="请选择">-->
                                <!--<el-option-->
                                        <!--v-for="item in currencyOptions"-->
                                        <!--:key="item.id"-->
                                        <!--:label="item.code"-->
                                        <!--:value="item.id">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">-->
                        <!--<el-form-item prop="11" label="Time Zone">-->
                            <!--<v-time-zone class="speTimezone" :value.sync="qcOrderConfig.timeZone"></v-time-zone>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
                        <!--<el-form-item prop="11" label="Remark">-->
                            <!--<el-input-->
                                    <!--class="speInput"-->
                                    <!--type="textarea"-->
                                    <!--autosize-->
                                    <!--placeholder="please input"-->
                                    <!--v-model="qcOrderConfig.remark">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col class="speCol" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
                        <!--<el-form-item prop="11" label="Attachment">-->
                            <!--<el-input-->
                                    <!--:disabled="true"-->
                                    <!--class="speInput"-->
                                    <!--type="textarea"-->
                                    <!--autosize-->
                                    <!--placeholder="please input"-->
                                    <!--v-model="value">-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
                <!--</el-row>-->
            <!--</el-form>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        name:'qc-detail',
        data(){
            return{

            }
        },
        methods:{
            getQcOrderDetail(){

            },
        },
        created(){
            this.getQcOrderDetail();
        }
    }
</script>
<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .second-title{
        font-size: 16px;
        color: #999999;
        padding: 10px 0;
    }
</style>