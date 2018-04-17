<template>
    <div class="company-info">
        <div class="title">
            <span><span style="color:red;font-weight: bold">供应商!!! </span>{{$i.setting.companyInfo}}</span>
        </div>
        <div class="summary">
            <el-form ref="summary" :model="companyInfo" :rules="companyInfoRules" label-width="190px">
                <el-row class="speZone">
                    <el-col class="speCol" v-if="v.belong==='summary'" v-for="v in $db.setting.companyInfo" :key="v.key" :xs="24" :sm="v.fullLine?24:12" :md="v.fullLine?24:12" :lg="v.fullLine?24:8" :xl="v.fullLine?24:8">
                        <el-form-item class="speWidth" :prop="v.key" :label="v.label">
                            <div v-if="v.type==='input'">
                                <el-input
                                        :disabled="summaryDisabled"
                                        size="mini"
                                        placeholder="请输入内容"
                                        v-model="companyInfo[v.key]">
                                </el-input>
                            </div>
                            <div v-if="v.type==='select'">
                                <el-select :disabled="summaryDisabled" class="speWidth" v-model="companyInfo[v.key]" placeholder="请选择">
                                    <el-option
                                            size="mini"
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="v.type==='textarea'">
                                <el-input
                                        :disabled="summaryDisabled"
                                        class="speWidth"
                                        type="textarea"
                                        autosize
                                        placeholder="请输入内容"
                                        v-model="companyInfo[v.key]">
                                </el-input>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div class="summary-btn">
                <el-button @click="modifySummary">{{$i.setting.modify}}</el-button>
            </div>
        </div>
        <div class="section">
            <el-tabs type="border-card">
                <el-tab-pane :label="$i.setting.address">
                    <div class="section-btn">
                        <el-button @click="addAddress" type="primary">{{$i.setting.add}}</el-button>
                    </div>
                    <el-table
                            :data="companyInfo.address"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                align="center"
                                :label="$i.setting.factoryName">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                align="center"
                                :label="$i.setting.factoryAddress">
                        </el-table-column>
                        <el-table-column
                                prop="exportPort"
                                align="center"
                                :label="$i.setting.exportPort">
                        </el-table-column>
                        <el-table-column
                                prop="contactPerson1"
                                align="center"
                                :label="$i.setting.contactPerson1">
                        </el-table-column>
                        <el-table-column
                                prop="concatPhone1"
                                align="center"
                                :label="$i.setting.contactPhoneNo1">
                        </el-table-column>
                        <el-table-column
                                prop="contactPerson2"
                                align="center"
                                :label="$i.setting.contactPerson2">
                        </el-table-column>
                        <el-table-column
                                prop="contactPhone2"
                                align="center"
                                :label="$i.setting.contactPhoneNo2">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                :label="$i.setting.action">
                            <template slot-scope="scope">
                                <el-button @click="modifyAddreess(scope.row)" type="text">{{$i.setting.modify}}</el-button>
                                <el-button @click="deleteAddress(scope.row)" type="text">{{$i.setting.delete}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="$i.setting.accountInfo">
                    <div class="section-btn">
                        <el-button @click="addAccount" type="primary">{{$i.setting.add}}</el-button>
                    </div>
                    <el-table
                            :data="companyInfo.accounts"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="beneficiaryName"
                                align="center"
                                :label="$i.setting.beneficiaryName">
                        </el-table-column>
                        <el-table-column
                                prop="beneficiaryAccount"
                                align="center"
                                :label="$i.setting.beneficiaryAccount">
                        </el-table-column>
                        <el-table-column
                                prop="beneficiaryAddress"
                                align="center"
                                :label="$i.setting.beneficiaryAddress">
                        </el-table-column>
                        <el-table-column
                                prop="beneficiaryBankName"
                                align="center"
                                :label="$i.setting.beneficiaryBankName">
                        </el-table-column>
                        <el-table-column
                                prop="beneficiaryBankSwift"
                                align="center"
                                :label="$i.setting.beneficiaryBankSWIFT">
                        </el-table-column>
                        <el-table-column
                                prop="accountType"
                                align="center"
                                :label="$i.setting.accountType">
                        </el-table-column>
                        <el-table-column
                                prop="currency"
                                align="center"
                                :label="$i.setting.currency">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                :label="$i.setting.action">
                            <template slot-scope="scope">
                                <el-button @click="modifyAccount(scope.row)" type="text">{{$i.setting.modify}}</el-button>
                                <el-button @click="deleteAccount(scope.row)" type="text">{{$i.setting.delete}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="$i.setting.contactInfo">
                    <div class="section-btn">
                        <el-button @click="addContact" type="primary">{{$i.setting.add}}</el-button>
                    </div>
                    <el-table
                            :data="companyInfo.concats"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                align="center"
                                :label="$i.setting.name">
                        </el-table-column>
                        <el-table-column
                                prop="deptName"
                                align="center"
                                :label="$i.setting.department">
                        </el-table-column>
                        <el-table-column
                                prop="gender"
                                align="center"
                                :label="$i.setting.gender">
                        </el-table-column>
                        <el-table-column
                                prop="cellphone"
                                align="center"
                                :label="$i.setting.mobileNumber">
                        </el-table-column>
                        <el-table-column
                                prop="telphone"
                                align="center"
                                :label="$i.setting.telNumber">
                        </el-table-column>
                        <el-table-column
                                prop="fax"
                                align="center"
                                :label="$i.setting.faxNumber">
                        </el-table-column>
                        <el-table-column
                                prop="email"
                                align="center"
                                :label="$i.setting.emailAddress">
                        </el-table-column>
                        <el-table-column
                                prop="skype"
                                align="center"
                                :label="$i.setting.skype">
                        </el-table-column>
                        <el-table-column
                                prop="qq"
                                align="center"
                                :label="$i.setting.QQ">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                :label="$i.setting.action">
                            <template slot-scope="scope">
                                <el-button @click="modifyAccount(scope.row)" type="text">{{$i.setting.modify}}</el-button>
                                <el-button @click="deleteAccount(scope.row)" type="text">{{$i.setting.delete}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="$i.setting.attachment">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>

        <el-dialog width="70%" :title="$i.setting.address" :visible.sync="addressDialogVisible">
            <el-form label-width="100px" :model="addressData">
                <el-row>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="name" :label="$i.setting.factoryName">
                            <el-input size="mini" v-model="addressData.name" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="address" :label="$i.setting.factoryAddress">
                            <el-input size="mini" v-model="addressData.address" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="exportPort" :label="$i.setting.exportPort">
                            <el-input size="mini" v-model="addressData.exportPort" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson1" :label="$i.setting.contactPerson1">
                            <el-input size="mini" v-model="addressData.contactPerson1" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone1" :label="$i.setting.contactPhoneNo1">
                            <el-input size="mini" v-model="addressData.concatPhone1" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson2" :label="$i.setting.contactPerson2">
                            <el-input size="mini" v-model="addressData.contactPerson2" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone2" :label="$i.setting.contactPhoneNo2">
                            <el-input size="mini" v-model="addressData.concatPhone2" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addressDialogVisible=false">取 消</el-button>
                <el-button :loading="allowAddAddress" type="primary" @click="sureAddAddress">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog width="70%" :title="$i.setting.accountInfo" :visible.sync="accountDialogVisible">
            <el-form label-width="100px" :model="accountData">
                <el-row>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="name" :label="$i.setting.beneficiaryName">
                            <el-input size="mini" v-model="accountData.beneficiaryName" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="address" :label="$i.setting.beneficiaryAccount">
                            <el-input size="mini" v-model="accountData.beneficiaryAccount" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="exportPort" :label="$i.setting.beneficiaryAddress">
                            <el-input size="mini" v-model="accountData.beneficiaryAddress" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson1" :label="$i.setting.beneficiaryBankName">
                            <el-input size="mini" v-model="accountData.beneficiaryBankName" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone1" :label="$i.setting.beneficiaryBankSWIFT">
                            <el-input size="mini" v-model="accountData.beneficiaryBankSwift" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson2" :label="$i.setting.accountType">
                            <el-input size="mini" v-model="accountData.accountType" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone2" :label="$i.setting.currency">
                            <el-input size="mini" v-model="accountData.currency" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="accountDialogVisible=false">取 消</el-button>
                <el-button :loading="allowAddAccount" type="primary" @click="sureAddAccount">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog width="70%" :title="$i.setting.contactInfo" :visible.sync="contactDialogVisible">
            <el-form label-width="100px" :model="accountData">
                <el-row>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="name" :label="$i.setting.beneficiaryName">
                            <el-input size="mini" v-model="accountData.beneficiaryName" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="address" :label="$i.setting.beneficiaryAccount">
                            <el-input size="mini" v-model="accountData.beneficiaryAccount" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="exportPort" :label="$i.setting.beneficiaryAddress">
                            <el-input size="mini" v-model="accountData.beneficiaryAddress" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson1" :label="$i.setting.beneficiaryBankName">
                            <el-input size="mini" v-model="accountData.beneficiaryBankName" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone1" :label="$i.setting.beneficiaryBankSWIFT">
                            <el-input size="mini" v-model="accountData.beneficiaryBankSwift" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="contactPerson2" :label="$i.setting.accountType">
                            <el-input size="mini" v-model="accountData.accountType" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-form-item prop="concatPhone2" :label="$i.setting.currency">
                            <el-input size="mini" v-model="accountData.currency" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="contactDialogVisible=false">取 消</el-button>
                <el-button :loading="allowAddAccount" type="primary" @click="sureAddAccount">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "companyInfo",
        data(){
            return{
                summaryDisabled:true,
                addressDialogVisible:false,
                accountDialogVisible:false,
                contactDialogVisible:false,
                //页面page绑定
                companyInfo:{
                    code:'',            //供应商编号
                    name:'',            //供应商名称
                    type:'',            //供应商类别
                    country:'',         //国家
                    city:'',
                    incoterm:'',
                    exportLicense:'',   //出口资质
                    currency:'',        //币种
                    payment:'',         //付款方式
                    shortName:'',       //简称
                    description:'',            //供应商描述
                },
                //验证规则
                companyInfoRules:{

                },

                //弹出框data
                addressData:{
                    name:'',
                    address:'',
                    exportPort:'',
                    contactPerson1:'',
                    concatPhone1:'',
                    contactPerson2:'',
                    concatPhone2:'',
                    supplierId:'',                  //接口需要的参数
                },
                accountData:{
                    beneficiaryName:'',
                    beneficiaryAccount:'',
                    beneficiaryAddress:'',
                    beneficiaryBankName:'',
                    beneficiaryBankSwift:'',
                    accountType:'',
                    currency:'',
                    supplierId:'',                  //接口需要的参数
                },
                contactData:{
                    name:'',
                    deptName:'',
                    gender:'',
                    cellphone:'',
                    telphone:'',
                    fax:'',
                    email:'',
                    skype:'',
                    qq:''
                },

                //btn loading状态
                allowAddAddress:false,
                allowAddAccount:false,
                //是否正在修改地址标识，因为新增和修改都是用的同一个按钮，所以为了区分增加一个标识
                isModifyAddress:false,
                isModifyAccount:false,

                //下拉选择框假数据
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
            }
        },
        methods:{
            //获取整个页面数据
            getWholeData(){
                this.$ajax.get(this.$apis.get_supplierWhole,{}).then(res=>{
                    this.companyInfo=res;
                }).catch(err=>{
                    console.log(err)
                });
            },

            //修改顶部简介信息
            modifySummary(){
                this.summaryDisabled=false;
            },

            /**
             * address操作
             * */
            addAddress(){
                this.addressDialogVisible=true;
            },
            sureAddAddress(){
                this.allowAddAddress=true;
                this.addressData.supplierId=this.companyInfo.id;
                if(this.isModifyAddress){
                    //表示是在修改地址
                    this.$ajax.post(`${this.$apis.update_address}?id=${this.addressData.id}`,this.addressData).then(res=>{
                        this.allowAddAddress=false;
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.getWholeData();
                        this.addressDialogVisible=false;
                    }).catch(err=>{
                        this.allowAddAddress=false;
                    });
                }else{
                    //表示是在新增地址
                    this.$ajax.post(this.$apis.add_address,this.addressData).then(res=>{
                        this.allowAddAddress=false;
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.getWholeData();
                        this.addressDialogVisible=false;
                    }).catch(err=>{
                        this.allowAddAddress=false;
                        this.$message({
                            message: err,
                            type: 'success'
                        });
                        this.addressDialogVisible=false;
                    });
                }
            },
            modifyAddreess(e){
                this.isModifyAddress=true;      //标识正在修改地址
                this.addressData=Object.assign({}, e);
                this.addressDialogVisible=true;
            },
            deleteAddress(e){
                this.$confirm('确定删除该地址?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$ajax.post(this.$apis.delete_address,{id:e.id}).then(res=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getWholeData();
                    }).catch(err=>{
                        console.log(err)
                    });
                }).catch(() => {

                });
            },

            /**
             * account操作
             * */
            addAccount(){
                this.accountDialogVisible=true;
            },
            sureAddAccount(){
                this.allowAddAccount=true;
                this.accountData.supplierId=this.companyInfo.id;

                if(this.isModifyAccount){
                    //表示是在修改account
                    this.$ajax.post(`${this.$apis.update_account}?id=${this.accountData.id}`,this.accountData).then(res=>{
                        this.allowAddAccount=false;
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.getWholeData();
                        this.accountDialogVisible=false;
                    }).catch(err=>{
                        this.allowAddAccount=false;
                        this.accountDialogVisible=false;
                    });
                }else{
                    //表示是在新增account
                    this.$ajax.post(this.$apis.add_account,this.accountData).then(res=>{
                        this.allowAddAccount=false;
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.getWholeData();
                        this.accountDialogVisible=false;
                    }).catch(err=>{
                        this.allowAddAccount=false;
                        this.$message({
                            message: err,
                            type: 'success'
                        });
                        this.accountDialogVisible=false;
                    });
                }
            },
            modifyAccount(e){
                this.isModifyAccount=true;      //标识正在修改account
                this.accountData=Object.assign({}, e);
                this.accountDialogVisible=true;
            },
            deleteAccount(e){
                this.$confirm('确定删除该账户?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$ajax.post(this.$apis.delete_account,{id:e.id}).then(res=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getWholeData();
                    }).catch(err=>{
                        console.log(err)
                    });
                }).catch(() => {

                });
            },

            /**
             * contact操作
             * */
            addContact(){
                this.contactDialogVisible=true;
            },
        },
        created(){
            this.getWholeData();
        },
        watch:{
            addressDialogVisible(n){
                if(!n){
                    _.map(this.addressData,(v,k)=>{
                        this.$set(this.addressData,k,'');
                    });
                    this.isModifyAddress=false;
                }
            },
            accountDialogVisible(n){
                if(!n){
                    _.map(this.accountData,(v,k)=>{
                        this.$set(this.accountData,k,'');
                    });
                    this.isModifyAccount=false;
                }
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
    }
    .speCol{
        height: 51px;
    }
    .speWidth{
        width: 100%;
    }
    .summary-btn{
        text-align: center;

    }
    .section-btn{
        margin-bottom: 10px;
    }

    .section{
        margin-top: 20px;
    }

    /*弹出框样式*/
    .dialog-footer{
        text-align: center;
    }
</style>