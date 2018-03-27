<template>
    <div class="place-logistic-plan">
        <div class="hd-top">Place New Logistic Order</div>
        <div class="hd">Basic Information</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>logistics plan No</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Est depature date</span>
                    <el-select v-model="depature" placeholder="请选择">
                        <el-option
                        v-for="item in depatureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>预计出运日期</span>
                    <el-date-picker
                    v-model="date"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions" />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>集装箱类型2</span>
                    <el-select v-model="Container" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Shipping method</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Carrier</span>
                    <el-select v-model="Carrier" placeholder="请选择">
                        <el-option
                        v-for="item in CarrierOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>预计到港日期</span>
                    <el-date-picker
                    v-model="DateOfArrival"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="CarrierOptions" />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>集装箱数量</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>    
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Est departure port</span>
                    <el-select v-model="departure" placeholder="请选择">
                        <el-option
                        v-for="item in departureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Bill type</span>
                    <el-select v-model="BillType" placeholder="请选择">
                        <el-option
                        v-for="item in BillTypeOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Container type 1</span>
                    <el-select v-model="Container1" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions1"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>集装箱类型3</span>
                    <el-select v-model="Container3" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions3"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Commodit Inspectioy</span>
                    <el-date-picker
                    v-model="CommoditInspectioy"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="CarrierOptions" />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Incoterm</span>
                    <el-select v-model="Incoterm" placeholder="请选择">
                        <el-option
                        v-for="item in IncotermOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>集装箱数量1</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>  
             <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>集装箱数量3</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>  
        </el-row>
        <div class="hd">Container Information</div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            height="200"
            show-summary
            :summary-method="getSummaries"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column label="集装箱号" prop="ContainerNumber" />
            <el-table-column prop="sealNo" label="铅封号" />
            <el-table-column prop="weight" label="集装箱重量" show-overflow-tooltip />
            <el-table-column prop="type" label="货柜类型" />
            <el-table-column prop="VGM" label="VGM" />
            <el-table-column prop="number" label="产品数量" />
            <el-table-column prop="volume" label="体积" />
            <el-table-column prop="NetWeight" label="净重" />
            <el-table-column prop="theNumber" label="箱数" />
            <el-table-column prop="value" label="货值" />
            <el-table-column prop="Total" label="总报关合计" />
        </el-table>
        <div class="hd">费用</div>
        <div class="cost-wrap">
            <div class="thead">
                <div class="td">拖柜费</div>
                <div class="td">拖柜费币种</div>
                <div class="td">代理费美元</div>
                <div class="td">代理费美元</div>
                <div class="td">代理费币种</div>
                <div class="td">港杂费</div>
                <div class="td">港杂费币种</div>
                <div class="td">海运费</div>
                <div class="td">海运费币种</div>
                <div class="td">保险费</div>
                <div class="td">保险费币种</div>
                <div class="td">其他费用1</div>
                <div class="td">其他费用1币种</div>
                <div class="td">其他费用1汇率</div>
                <div class="td">其他费用2</div>
                <div class="td">其他费用2币种2</div>
                <div class="td">其他费用2备注</div>
                <div class="td">佣金</div>
            </div>
            <div class="tbody">
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
                <div class="td"><el-input placeholder="please input"></el-input></div>
            </div>
        </div>
        <div class="hd">Payment</div>
        <div class="Payment-hd">
            <span>货物付款</span>
            <el-button type="primary">申请付款</el-button>
        </div>
        <el-table
            :data="PaymentData"
            style="width: 100%">
            <el-table-column prop="index" label="#" width="180" />
            <el-table-column prop="number" label="编号" width="180" />
            <el-table-column prop="date" label="日期" />
            <el-table-column prop="type" label="款项类型" />
            <el-table-column prop="money" label="付款金额" />
            <el-table-column prop="Receivables" label="收款金额" />
            <el-table-column prop="ToBePaid" label="待付金额" />
            <el-table-column prop="Collect" label="待收金额" />
        </el-table>
        <div class="hd">Ship Information</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>运输公司</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>航船次号</span>
                    <el-select v-model="ShipNumber" placeholder="请选择">
                        <el-option
                        v-for="item in ShipNumberOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Country of origin</span>
                    <el-select v-model="CountryOfOrigin" placeholder="请选择">
                        <el-option
                        v-for="item in CountryOfOriginOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>DestinationCountry</span>
                    <el-select v-model="DestinationCountry" placeholder="请选择">
                        <el-option
                        v-for="item in DestinationCountryOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>出运口岸</span>
                    <el-select v-model="shipment" placeholder="请选择">
                        <el-option
                        v-for="item in shipmentOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>目的口岸</span>
                    <el-select v-model="destination" placeholder="请选择">
                        <el-option
                        v-for="item in destinationOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <div class="hd">Product Information</div>
        <div class="btn-wrap">
            <div>
                <el-button type="primary">Add product</el-button>
                <el-button>Remove</el-button>
            </div>
            <i class="el-icon-setting"></i>
        </div>
        <!--from-->
        <div class="fix-btn">
            <el-button type="primary">Modify</el-button>
            <el-button type="primary">Accept</el-button>
            <el-button type="primary">Copy</el-button>    
            <el-button>Cancle Order</el-button>    
            <el-button>Delete</el-button>
        </div>
        <div class="fix-btn-station"></div>
    </div>
</template>
<script>
    export default {
        name: 'placeLogisticPlan',
        data() {
            return {
                data:[],
                date:'',
                columns:'',
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
                DateOfArrival:'',
                depatureOptions: [{
                    id:'1',
                    label:'dadada'
                }],
                ContainerOptions: [],
                CarrierOptions: [],
                departureOptions: [],
                BillTypeOptions: [],
                ContainerOptions1: [],
                ContainerOptions3:[],
                IncotermOptions:[],
                ShipNumberOptions:[],
                CountryOfOriginOptions:[],
                DestinationCountryOptions:[],
                shipmentOptions:[],
                destinationOptions:[],
                destination:'',
                shipment:'',
                DestinationCountry:'',
                CountryOfOrigin:'',
                ShipNumber:'',
                Incoterm:'',
                CommoditInspectioy:'',
                Container3:'',
                Container1:'',
                BillType:'',
                Carrier:'',
                Container: '',
                depature:'',
                departure:'',
                Cost: [
                    {
                        
                    }
                ],
                tableData: [{
                    ContainerNumber: 'YUWEIE',
                    sealNo: 'REWQIO',
                    weight: '21345',
                    type: '',
                    VGM: '12590.85',
                    number: '282480',
                    volume: '66.099',
                    NetWeight: '11827.6',
                    theNumber: '2',
                    value: '354198.8',
                    Total: '354198.8'
                },
                {
                    ContainerNumber: 'YUWEIE',
                    sealNo: 'REWQIO',
                    weight: '21345',
                    type: '',
                    VGM: '12590.85',
                    number: '282480',
                    volume: '66.099',
                    NetWeight: '11827.6',
                    theNumber: '2',
                    value: '354198.8',
                    Total: '354198.8'
                },
                {
                    ContainerNumber: 'YUWEIE',
                    sealNo: 'REWQIO',
                    weight: '21345',
                    type: '',
                    VGM: '12590.85',
                    number: '282480',
                    volume: '66.099',
                    NetWeight: '11827.6',
                    theNumber: '2',
                    value: '354198.8',
                    Total: '354198.8'
                },
                {
                    ContainerNumber: 'YUWEIE',
                    sealNo: 'REWQIO',
                    weight: '21345',
                    type: '',
                    VGM: '12590.85',
                    number: '282480',
                    volume: '66.099',
                    NetWeight: '11827.6',
                    theNumber: '2',
                    value: '354198.8',
                    Total: '354198.8'
                }],
                PaymentData: [{
                    index:'1',
                    number: '2134',
                    date: '2018-10-22',
                    type: '预付款',
                    money: '1,992',
                    Receivables: '',
                    ToBePaid: '',
                    Collect: ''
                }]
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.data = val;
                let params = {
                    columns: this.columns,
                    data: val
                }
                this.getSummaries(params);
            },
            getSummaries(param) {
                this.columns = param.columns;
                const sums = [];
                this.columns.forEach((column, index) => {
                    if (index === 0) return sums[index] = '总计';
                    const values = this.data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                        }, 0);
                        sums[index];
                    } else {
                        sums[index] = '';
                    }
                });

                return sums;
            }
        }
    }
</script>
<style lang="less" scoped>
    .place-logistic-plan {
        position: relative;
        .hd-top {
            font-size: 18px;
            color:#666;
            height: 50px;
            line-height:50px;
            border-bottom:1px solid #ccc;
            padding:0 15px;
        }
        .Payment-hd {
            padding:10px;
            span {
                font-weight: bold;
            }
        }
        .hd {
            height: 40px;
            line-height:40px;
            border-bottom:1px solid #ccc;
            padding:0 15px;
        }   
        .cost-wrap {
            width:100%;
            overflow-x: auto;
            .thead, .tbody {
                display:flex;
                .td {
                    padding:10px 5px;
                    border-bottom:1px solid #ccc;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 40px;
                    flex-shrink: 0;
                    width: 80px;
                    font-size:12px;
                    line-height:20px;
                }
            }
        }
        .input-item {
            display:flex;
            align-items: center;
            padding:10px 0;
            span {
                width: 120px;
                white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
                display:inline-block;
                font-size:12px;
                text-align: right;
                padding-right:10px;
                box-sizing: border-box;
            }
            .el-select, .el-input {
                flex:1;
            }
        }
        .btn-wrap {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:10px 0;
            i {
                font-size:24px;
                color:#999;
            }
        }
        .fix-btn {
            position: fixed;
            z-index:9;
            left:220px;
            bottom:0;
            background:#fff;
            width: 100%;
            padding:10px;
            box-sizing: border-box;
            border-top:1px solid #cdcc;
        }
        .fix-btn-station {
            width: 100%;
            height: 53px;
        }
    }
</style>
