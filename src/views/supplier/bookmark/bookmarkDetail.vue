<template>
    <div class="bookmarkDetail">
        <div class="head">
            <div class="title">
                <el-row>  
                 <el-col  :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                    <span>  
                        <img src='../../../assets/images/logo.jpg'/> 
                        <span>name</span>
                    </span> 
                </el-col>  
                 <el-col  :xs="6" :sm="6" :md="6" :lg="6" :xl="6">      
                     <el-button>Remove</el-button>
                </el-col>
                </el-row>  
            </div>
            <div class="detail">             
                   <el-row>             
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier Code：xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier type :xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier phase: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Rigister address: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Taxpayer qualification: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Provide category: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier company name: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier rank: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Provide incoterm: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Office address: xxxx
                            </el-col>
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Supplier sourcing from: xxxx
                            </el-col>                     
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                Export license: xxxx
                            </el-col>
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                               Representative: xxxx
                            </el-col>
                              <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                Remark：XXXXXXXX
                            </el-col>
                        </el-row>

                </el-row>
                <div class="btns" v-if="noEdit">
                    <el-button type="primary">Create Inquiry</el-button>
                    <el-button type="primary">Create Order</el-button>
                    <el-button type="primary">Add to Compare</el-button>
                    <el-button type="primary">Supplier's Products</el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">Finish</el-button>
                    <el-button @click="cancelEdit" type="info">Cancel</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
                <el-tab-pane label="Factory Address" name="FactoryAddress">
                   
                </el-tab-pane>
                <el-tab-pane label="Account Info" name="AccountInfo">
                   
                </el-tab-pane>
                <el-tab-pane label="Contact Info" name="ContactInfo">
                    
                </el-tab-pane>
                <el-tab-pane label="Trade History" name="TradeHistory">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Inquiry qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Ontime delivery rate : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Feedback qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Complain qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Orders qty : XXXXXX
                        </el-col>
                         <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Feedback qty : XXXXXX
                        </el-col>
                         <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Quality approval rate : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="Remark" name="Remark">
                            
                </el-tab-pane>
            </el-tabs>
        </div>



    </div>
</template>

<script>
    export default {
        name: "bookmarkDetail",
        components: {

        },
        data() {
            return {
                noEdit: true,
                tabName: 'FactoryAddress' //默认打开的tab
            }
        },
        methods: {}
    }

</script>

<style scoped>
    .title img {
        max-width: 100px;
        max-height: 100px;
    }

    .title {
        margin-top: 20px;

    }

    .title span {
        display: flex;
        align-items: center;
    }

    .detail {
        padding-top: 20px;
    }

    .bookmarkDetail {
        background-color: #f4f4f4;
    }

    .bookmarkDetail .head {
        background-color: #FFFFFF;
        padding: 0 20px;
    }

    .bookmarkDetail .head .title {
        position: relative;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
        color: #666666;
    }

    .bookmarkDetail .head .title .title-btn {
        float: right;
    }

    .bookmarkDetail .head .detail {
        margin-top: 8px;
    }

    .bookmarkDetail .head .detail .carousel-img {
        height: 170px;
    }

    .bookmarkDetail .head .detail .carousel-img img {
        width: 100%;
        height: 100%;
    }

    .bookmarkDetail .head .detail .right {
        /*padding-top: 10px;*/
    }

    .bookmarkDetail .head .detail .list {
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        border-bottom: 1px dotted #e0e0e0;
    }

    .bookmarkDetail .head .detail .btns {
        text-align: center;
        padding: 15px 0;
    }

    .bookmarkDetail .head .detail .btns>Button {
        margin-right: 10px;
    }

    .bookmarkDetail .body {
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: #FFFFFF;
    }

    .bookmarkDetail .body .list {
        line-height: 30px;
        font-size: 13px;
    }

    .speForm .el-form-item--small.el-form-item {
        margin-bottom: 0;
    }

    .speForm .el-row .list .el-input {
        width: 80%;
    }

</style>
