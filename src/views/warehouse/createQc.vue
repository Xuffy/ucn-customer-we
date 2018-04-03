<template>
    <div class="createQc">
        <div class="title">
            {{$t('warehouse.page.createQCOrder')}}
        </div>
        <div class="body">
            <div class="section">
                <div class="head"> {{$t('warehouse.page.basicInfo')}}</div>
                <div class="content">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                            {{$t('warehouse.page.qcOrderNo')}}. : 自动生成
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                            {{$t('warehouse.page.orderDate')}} : 来自order
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.qcType')}} :
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.qcDate')}} :
                            <el-input
                                    class="speInput"
                                    placeholder="请输入内容"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.supplierNO')}} : 来自order
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.supplierName')}} : 来自order
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.factoryAddress')}} :
                            <el-input
                                    class="speInput"
                                    placeholder="请输入内容"
                                    v-model="value">
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.factoryContactPhone')}} :
                            <el-input
                                    class="speInput"
                                    placeholder="请输入内容"
                                    v-model="value">
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.qcStatus')}} :
                            <el-select v-model="value" disabled placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.qcMethod')}} :
                            <el-select v-model="value" disabled placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.surveyor')}} :
                            <el-select v-model="value" disabled placeholder="服务商用户选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.supplierOrderNo')}} : 来自QC Order
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
                            {{$t('warehouse.page.serviceFee')}} :
                            <el-input
                                    class="speInput"
                                    placeholder="服务商填写"
                                    v-model="value"
                                    :disabled="true">
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.orderNo')}}. :
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="value"
                                    class="input-with-select speInput">
                                <el-button @click="chooseOrderNo" slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.serviceProviders')}} :
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="value"
                                    class="input-with-select speInput">
                                <el-button @click="chooseProviders" slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.remark')}} :
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2}"
                                    placeholder="请输入内容"
                                    v-model="value">
                            </el-input>

                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.attachment')}} : XXXXXX
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <div class="footBtn">
            <el-button type="primary">{{$t('warehouse.page.send')}}</el-button>
            <el-button type="primary">{{$t('warehouse.page.saveAsDraft')}}</el-button>
        </div>


        <el-dialog width="80%" title="Choose Service Providers" :visible.sync="serviceTableVisible">
            <el-form ref="form" :model="form" label-width="100px">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="">
                            <el-radio v-model="radio" label="1">服务商</el-radio>
                            <el-radio v-model="radio" label="2">供应商</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="公司编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="公司名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="国家">
                            <el-select v-model="form.name" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="城市">
                            <el-select v-model="form.name" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="type"
                        label="公司分类"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="公司编号"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="公司名称"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="country"
                        label="国家"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="城市"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="contact"
                        label="联系人"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="contactPhone"
                        label="联系电话"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center">
                    <template slot-scope="scope">
                        <el-button type="text">选择</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </el-dialog>

        <el-dialog width="80%" title="Choose Order No" :visible.sync="orderTableVisible">
            <el-form ref="form" :model="form" label-width="100px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="合同号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="工厂货号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="客户货号">
                            <el-select v-model="form.name" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                        <el-form-item label="合同日期">
                            <el-date-picker
                                    style="width: 100%"
                                    v-model="value"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="type"
                        label="公司分类"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="公司编号"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="公司名称"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="country"
                        label="国家"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="城市"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="contact"
                        label="联系人"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="contactPhone"
                        label="联系电话"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center">
                    <template slot-scope="scope">
                        <el-button type="text">选择</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "create-qc",
        data(){
            return{
                servicePrice:'',
                remark:'',
                serviceProviders:'',
                serviceTableVisible:false,           //service弹出框的显示隐藏
                orderTableVisible:false,             //order弹出框的显示隐藏

                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value:'',
                tableData: [
                    {
                        type:'甲类',
                        id:'312515',
                        name:'华为',
                        country:'China',
                        city:'成都',
                        contact:'张三',
                        contactPhone:'138888888888',
                    },
                    {
                        type:'甲类',
                        id:'312515',
                        name:'华为',
                        country:'China',
                        city:'成都',
                        contact:'张三',
                        contactPhone:'138888888888',
                    },
                    {
                        type:'甲类',
                        id:'312515',
                        name:'华为',
                        country:'China',
                        city:'成都',
                        contact:'张三',
                        contactPhone:'138888888888',
                    },

                ],
                currentPage:1,
                radio: '1',                         //弹出框的单选，服务商或者供应商


                allowClick:false,


            }
        },
        methods:{

            chooseProviders(){
                this.serviceTableVisible=true;
            },

            chooseOrderNo(){
                this.orderTableVisible=true;
            },


            //inputNumber change
            handleChange(){

            },

            //分页操作
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
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
        border-bottom: 1px solid #e4e4e4;
        padding-bottom: 8px;
    }


    .section{
        margin-bottom: 10px;
    }
    .section .important{
        color:red;
    }
    .section .head{
        padding: 10px 0;
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid #797979;
        margin-bottom: 5px;
    }
    .section .content .list{
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        border-bottom: 1px dotted #e0e0e0;
    }
    .section .content .noBorder{
        border: none;
    }
    .section .speInput{
        width: auto;
    }
    .section .speInput >>> .el-input__inner{
        text-align: left;
    }
    .section .speInput >>> .el-input-group__append{
        padding: 0;
    }
    .section .speInput >>> .el-input-group__append .el-button{
        margin-right: 0 !important;
    }

    .footBtn{
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
        /*text-align: center;*/
    }
</style>