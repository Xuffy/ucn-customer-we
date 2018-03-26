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
                        />
                </div>
                <div class="select-item">
                    <span>Inquiry Sequance：</span>
                    <el-input
                        placeholder="input here"
                        v-model="InquirySequance1"
                        clearable
                        :disabled="true"
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
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * @param shippingOptions -Shipping method 原始数据 Array
     * @param shipping -Shipping method 选中数据 
     * @param PaymentOptions - Payment Term 原始数据 Array
     * @param Payment -Payment Term 选中数据
     * @param departureOptions - Departure Country 原始数据 Array
     * @param departure - Departure Country 选中数据
     * @param portOptions - Departure Port 原始数据 Array
     * @param port - Departure Port 选中数据
     * @param incotermOptions -Incoterm  原始数据 Array
     * @param incoterm - Incoterm 选中数据
     * @param currencyOptions - currency 原始数据 Array
     * @param currency - currency 选中数据
     * @param inquiryDataOptions - inquiryData 原始数据 Array
     * @param inquiryDatas - inquiryData 选中数据
     * @param InquiryStatusOptions - InquiryStatus 原始数据 Array
     * @param InquiryStatus - InquiryStatusOptions 选中数据
     * @param InquirySequance -Inquiry Sequance
     * @param InquirySequance1 - Inquiry Sequance 2
     * @param destinationCountryOptions - destinationCountry 原始数据 Array
     * @param destinationCountry        
    */
    export default {
        name:'createInquiry',
        data() {
            return {
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
    }
</style>

