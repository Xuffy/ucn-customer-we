<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $t('negotiation.text.inquiryDetail') }}</h3>
        <time-selection />
        <div class="select-wrap">
            <h4 class="content-hd">{{ $t('negotiation.text.basicInfo') }}</h4>
            <div class="select-main">
                <!-- <el-form 
                        :model="basicInfoForm" 
                        status-icon 
                        :rules="rules2" 
                        ref="ruleForm2" 
                        label-width="100px" 
                        class="demo-ruleForm"
                    >
                    <el-row :gutter="10">
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                            <div class="select-item">
                                <span>{{ $t('negotiation.basicInfo.shippingMethod') }}：</span>
                                <el-select v-model="shipping" placeholder="Please select">
                                    <el-option
                                        v-for="item in shippingOptions"
                                        :key="item.id"
                                        :label="item.label"
                                        :value="item.id"
                                    />
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                            <div class="select-item">
                                <span>{{ $t('negotiation.basicInfo.inquirySequance') }}：</span>
                                <el-input
                                    placeholder="input here"
                                    v-model="InquirySequance"
                                    clearable
                                    style="max-width:203px;"
                                    />
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
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
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <div class="select-item">
                                <span>{{ $t('negotiation.basicInfo.attachment') }}：</span>
                                <v-up-load />
                            </div>
                        </el-col>
                    </el-row>
                </el-form> -->
            </div>
        </div>
        <h4 class="content-hd">{{ $t('negotiation.text.productInfo') }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button @click="dialogTableVisible = true">{{ $t('negotiation.btn.addProduct') }}</el-button>
                <el-button type="danger">{{ $t('negotiation.btn.remove') }}</el-button>
            </div>
            <select-search :options="options" />
        </div>
        <v-table :data="tabData" :data-key="tabColumn"></v-table>
        <div class="bom-btn-wrap">
            <el-button @click="$router.push('/negotiation/inquiryDetail')">{{ $t('negotiation.btn.submit') }}</el-button>
            <el-button @click="$router.push('/negotiation/inquiryDetail')">{{ $t('negotiation.btn.saveAsDraft') }}</el-button>
        </div>
        <div class="bom-btn-wrap-station"></div>
        <el-dialog
                title="Add Product"
                :visible.sync="dialogTableVisible"
                width="80%"
                lock-scroll>
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="From New Search"></el-radio-button>
                <el-radio-button label="From my bookmark"></el-radio-button>
            </el-radio-group>
            <v-product :hideBtns="true"></v-product>
             <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableVisible = false">OK</el-button>
                <el-button @click="dialogTableVisible = false">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { selectSearch, VTable, Upload, timeSelection } from '@/components/index';
    import product from '@/views/product/addProduct';
    export default {
        name:'createInquiry',
        data() {
            return {
                radio: 'From New Search',
                dialogTableVisible: false,
                dialogFormVisible: false,
                tabColumn: '',
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
            'v-table': VTable,
            'v-product': product,
            'v-up-load': Upload,
            'time-selection': timeSelection
        },
        created() {
            // this.ajax({
            //     url: '/tableProductInfo',
            //     method: 'get'
            // }).then(res => {
            //     this.tabData = res.content;
            //     this.tabColumn =  'negotiation.tableProductInfo';
            // });
        },
        methods: {
           fromChange(val) {
               console.log(val)
           }
        }
    }
</script>
<style lang="less" scoped>
    .create-inquiry {
        position: relative;
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
            .select-item {
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
            background:#fff;
            position:fixed;
            left:0;
            bottom:0;
            z-index:9;
            width:100%;
            padding: 10px 200px 10px;
            box-shadow: 0 -1px 5px #ccc;
        }
        .bom-btn-wrap-station {
            height: 52px;
            width:100%;
        }
    }
</style>

