<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $t('negotiation.text.inquiryDetail') }}</h3>
        <div class="select-wrap">
            <h4 class="content-hd">{{ $t('negotiation.text.basicInfo') }}</h4>
            <div class="select-main">
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.shippingMethod') }}：</span>
                    <el-select v-model="shipping" placeholder="Please select">
                        <el-option
                        v-for="item in shippingOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.paymentTerm') }}：</span>
                    <el-select v-model="Payment" placeholder="Please select">
                        <el-option
                        v-for="item in PaymentOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.departureCountry') }}：</span>
                    <el-select v-model="departure" placeholder="Please select">
                        <el-option
                        v-for="item in departureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.departurePort') }}：</span>
                    <el-select v-model="port" placeholder="Please select">
                        <el-option
                        v-for="item in portOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.incoterm') }}：</span>
                    <el-select v-model="incoterm" placeholder="Please select">
                        <el-option
                        v-for="item in incotermOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.currency') }}：</span>
                    <el-select v-model="currency" placeholder="Please select">
                        <el-option
                        v-for="item in currencyOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.inquiryData') }}：</span>
                    <el-select v-model="inquiryData" placeholder="Please select">
                        <el-option
                        v-for="item in inquiryDataOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.inquiryData') }}：</span>
                    <el-select v-model="InquiryStatus" placeholder="Please select">
                        <el-option
                        v-for="item in InquiryStatusOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.inquirySequance') }}：</span>
                    <el-input
                        placeholder="input here"
                        v-model="InquirySequance"
                        clearable
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.inquirySequance') }}：</span>
                    <el-input
                        placeholder="input here"
                        v-model="InquirySequance1"
                        clearable
                        :disabled="true"
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.destinationCountry') }}：</span>
                    <el-select v-model="destinationCountry" placeholder="Please select">
                        <el-option
                        v-for="item in destinationCountryOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.quotationValidity') }}：</span>
                    <el-select v-model="quotation" placeholder="Please select">
                        <el-option
                        v-for="item in quotationOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.destinationPort') }}：</span>
                    <el-select v-model="Destination" placeholder="Please select">
                        <el-option
                        v-for="item in DestinationOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.inquiryData') }}：</span>
                    <el-date-picker
                    v-model="date"
                    align="right"
                    type="date"
                    placeholder="Please choose the date"
                    :picker-options="pickerOptions"
                    />
                </div>
                <div class="select-item">
                    <span>{{ $t('negotiation.basicInfo.myInquiryID') }}：</span>
                    <el-input
                        placeholder="input here"
                        v-model="MyInquiryID"
                        clearable
                        :disabled="true"
                        style="max-width:203px;"
                        />
                </div>
                <div class="select-item textarea">
                    <span>{{ $t('negotiation.basicInfo.remarks') }}：</span>
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
                    <span>{{ $t('negotiation.basicInfo.attachment') }}：</span>
                    <el-button type="primary">{{ $t('negotiation.btn.add') }}</el-button>
                </div>
            </div>
        </div>
        <h4 class="content-hd">{{ $t('negotiation.text.productInfo') }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button type="primary">{{ $t('negotiation.btn.addProduct') }}</el-button>
                <el-button type="info">{{ $t('negotiation.btn.remove') }}</el-button>
            </div>
            <select-search :options="options" />
        </div>
        <v-simple-table :column="tabColumn" :data.sync="tabData" />
        <div class="bom-btn-wrap">
            <el-button type="primary">{{ $t('negotiation.btn.submit') }}</el-button>
            <el-button type="primary">{{ $t('negotiation.btn.saveAsDraft') }}</el-button>
        </div>
    </div>
</template>
<script>
    import { selectSearch, VSimpleTable } from '@/components/index';
    export default {
        name:'createInquiry',
        data() {
            return {
                tabColumn: [],
                tabData: [],
                options:[{
                    id:'1',
                    label:'dada'
                }],
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
        },
        components: {
            'select-search': selectSearch,
            'v-simple-table': VSimpleTable
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

