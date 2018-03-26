<template>
    <div class="create-inquiry">
        <h3 class="hd">inquiry Overview</h3>
        <div class="select-wrap">
            <h4 class="content-hd">Basic Info</h4>
            <div class="select-main">
                <div class="select-item">
                    <span>Shipping method：</span>
                    <el-select v-model="shipping" placeholder="Please select">
                        <el-option
                        v-for="item in shippingOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Payment Term：</span>
                    <el-select v-model="Payment" placeholder="Please select">
                        <el-option
                        v-for="item in PaymentOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Departure Country：</span>
                    <el-select v-model="departure" placeholder="Please select">
                        <el-option
                        v-for="item in departureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Departure Port：</span>
                    <el-select v-model="port" placeholder="Please select">
                        <el-option
                        v-for="item in portOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Incoterm：</span>
                    <el-select v-model="incoterm" placeholder="Please select">
                        <el-option
                        v-for="item in incotermOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Currency：</span>
                    <el-select v-model="currency" placeholder="Please select">
                        <el-option
                        v-for="item in currencyOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Inquiry Data：</span>
                    <el-select v-model="inquiryData" placeholder="Please select">
                        <el-option
                        v-for="item in inquiryDataOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Inquiry Status：</span>
                    <el-select v-model="InquiryStatus" placeholder="Please select">
                        <el-option
                        v-for="item in InquiryStatusOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Inquiry Sequance：</span>
                    <el-input
                        placeholder="input here"
                        v-model="InquirySequance"
                        clearable
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item">
                    <span>Inquiry Sequance：</span>
                    <el-input
                        placeholder="input here"
                        v-model="InquirySequance1"
                        clearable
                        :disabled="true"
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item">
                    <span>Destination Country：</span>
                    <el-select v-model="destinationCountry" placeholder="Please select">
                        <el-option
                        v-for="item in destinationCountryOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Quotation Validity：</span>
                    <el-select v-model="quotation" placeholder="Please select">
                        <el-option
                        v-for="item in quotationOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Destination Port：</span>
                    <el-select v-model="Destination" placeholder="Please select">
                        <el-option
                        v-for="item in DestinationOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>Inquiry Data：</span>
                    <el-date-picker
                    v-model="date"
                    align="right"
                    type="date"
                    placeholder="Please choose the date"
                    :picker-options="pickerOptions"
                    />
                </div>
                <div class="select-item">
                    <span>My Inquiry ID：</span>
                    <el-input
                        placeholder="input here"
                        v-model="MyInquiryID"
                        clearable
                        :disabled="true"
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item textarea">
                    <span>Remarks：</span>
                    <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="Please enter the content"
                        v-model="textarea"
                        style="max-width:203px"
                        clearable
                        />
                </div>
                <div class="select-item">
                    <span>Attachment：</span>
                    <el-button type="primary">add</el-button>
                </div>
            </div>
        </div>
        <h4 class="content-hd">Product Info</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button type="info">Add Product</el-button>
                <el-button type="info">Remove</el-button>
            </div>
            <div class="select-wrap">
                <div class="select">
                    <el-select v-model="value" placeholder="select" @change="selectChange">
                        <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <el-input v-model="keyWord" clearable prefix-icon="el-icon-search" placeholder="search" style="width:150px;"></el-input>
                <div class="set">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
        </div>
        <!--form-->
        <div class="bom-btn-wrap">
            <el-button type="primary">Submit</el-button>
            <el-button type="primary">Save as Draft</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'createInquiry',
        data() {
            return {
                InquirySequance1:'',
                InquirySequance:'',
                DestinationOptions:[],
                Destination:'',
                PaymentOptions:[],
                Payment:'',
                departureOptions:[],
                departure:'',
                portOptions:[],
                port:'',
                incotermOptions:[],
                incoterm:'',
                inquiryDataOptions:[],
                inquiryData:'',
                InquirySequance:'',
                InquiryStatusOptions:[],
                InquiryStatus:'',
                destinationCountryOptions:[],
                destinationCountry:'',
                currencyOptions:[],
                currency:'',
                quotationOptions:[],
                quotation:'',
                MyInquiryID:'',
                textarea:'',
                pickerOptions:{
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: 'Today',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: 'Yesterday',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: 'A week ago',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
                },
                date:'',
                shippingOptions:[{
                    id: '1',
                    label: '黄金糕'
                }, {
                    id: '2',
                    label: '双皮奶'
                }, {
                    id: '3',
                    label: '蚵仔煎'
                }],
                shipping:''
            }
        }
    }
</script>
<style lang="less" scoped>
    .create-inquiry {
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #ccc;
        }
        .content-hd {
            font-size:14px;
            line-height:40px;
            padding-left:20px;
        }
        .status {
            display:flex;
            height: 60px;
            box-sizing: border-box;
            padding-left:25px;
            padding-right:25px;
            align-items: center;
            justify-content:space-between;
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                }
            }
            .select-wrap {
                display:flex;
                align-items:center;
                .select {
                    width: 110px;
                    margin-right:5px;
                }
                .set {
                    cursor: pointer;
                    padding-left:18px;
                    color:#999;
                    i {
                        font-size:25px;
                    }
                }
            }
        }
        .select-main {
            display:flex;
            align-items: center;
            flex-wrap:wrap;
            height:300px;
            overflow-y: auto;
            .select-item {
                width:50%;
                display:flex;
                margin-bottom:20px;
                span {
                    line-height:32px;
                    width:200px;
                    text-align: right;
                    padding-right:5px;
                    box-sizing: border-box;
                    font-size:14px;
                    color:#666;
                }
            }
        }
        .bom-btn-wrap {
            padding-left:25px;
        }
    }
</style>

