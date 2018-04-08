<template>
    <div class="place-logistic-plan">
        <div class="hd-top">{{ $t('logistic.text.placeNewLogisticPlan') }}</div>
        <div class="hd">{{ $t('logistic.text.basicInfo') }}</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.invoiceNumber') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.logisticsID') }}</span>
                    <el-select v-model="depature" placeholder="请选择">
                        <el-option
                        v-for="item in depatureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.shipmentStatus') }}</span>
                    <el-date-picker
                    v-model="date"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions" />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.billDate') }}</span>
                    <el-select v-model="Container" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.declareType') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
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
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.declareDate') }}</span>
                    <el-date-picker
                    v-model="DateOfArrival"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="CarrierOptions" />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.bookingDate') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>    
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.containerStuffingDate') }}</span>
                    <el-select v-model="departure" placeholder="请选择">
                        <el-option
                        v-for="item in departureOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.customsCleanceDate') }}</span>
                    <el-select v-model="BillType" placeholder="请选择">
                        <el-option
                        v-for="item in BillTypeOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.sailDate') }}</span>
                    <el-select v-model="Container1" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions1"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.arrivalDate') }}</span>
                    <el-select v-model="Container3" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions3"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.releaseDate') }}</span>
                    <el-date-picker
                    v-model="CommoditInspectioy"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="CarrierOptions" />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.companyName') }}</span>
                    <el-select v-model="Incoterm" placeholder="请选择">
                        <el-option
                        v-for="item in IncotermOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.customerShortName') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>  
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.receiptCompany') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>  
        </el-row>
        <div class="hd">{{ $t('logistic.shipInfo.index') }}</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.transportCompany') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.vesselName') }}</span>
                    <el-select v-model="ShipNumber" placeholder="请选择">
                        <el-option
                        v-for="item in ShipNumberOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.departCountry') }}</span>
                    <el-select v-model="CountryOfOrigin" placeholder="请选择">
                        <el-option
                        v-for="item in CountryOfOriginOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.departPort') }}</span>
                    <el-select v-model="DestinationCountry" placeholder="请选择">
                        <el-option
                        v-for="item in DestinationCountryOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.destinationCountry') }}</span>
                    <el-select v-model="shipment" placeholder="请选择">
                        <el-option
                        v-for="item in shipmentOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.destinationPort') }}</span>
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
        <div class="hd">{{ $t('logistic.text.containerInfo') }}</div>
        <v-container-info 
            :tableData="tableData" 
            @tabAppend="tabAppend" 
            @tailBtnCancel="tailBtnCancel"
            @tailBtnOk="tailBtnOk"
            @tabSplite="tabSplite"
        />
        
        <div class="hd">{{ $t('logistic.text.productInfo') }}</div>
        <div class="btn-wrap">
            <div>
                <el-button type="primary" @click="newSearchDialogVisible = true">{{ $t('logistic.btn.addProduct') }}</el-button>
                <el-button>{{ $t('logistic.btn.remove') }}</el-button>
            </div>
        </div>
        <v-simple-table :column="tabColumn" :data.sync="tabData" />
        <div class="fix-btn">
            <el-button type="primary">{{ $t('logistic.btn.save') }}</el-button>
            <el-button type="primary">{{ $t('logistic.btn.sentAsOrder') }}</el-button>
            <el-button>{{ $t('logistic.btn.delete') }}</el-button>
        </div>
        <div class="fix-btn-station"></div>
        <el-dialog
                title="Add Product"
                :visible.sync="newSearchDialogVisible"
                width="80%"
                lock-scroll>
            <v-select-search :options="['1', 0]" />
            <v-simple-table :column="tabColumn" :data.sync="tabData" />
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="newSearchDialogVisible = false">OK</el-button>
                <el-button @click="newSearchDialogVisible = false">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { VSimpleTable, containerInfo, selectSearch } from '@/components/index';
    export default {
        name: 'placeLogisticPlan',
        data() {
            return {
                tabColumn: [],
                tabData: [],
                newSearchDialogVisible:false,
                date:'',
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
                tableData: [{
                    Product: "Product",
                    containerAmount: "Container Amount"
                }]
            }
        },
        created() {
            this.ajax({
                url: '/viewByInquiry',
                method: 'get'
            }).then(res => {
                this.tabData = res.inquiry;
                this.tabColumn = this.$getTableColumn(res.inquiry, 'negotiation.tableViewByInquiry');
            });
        },
        components: {
            "v-simple-table": VSimpleTable,
            "v-container-info": containerInfo,
            "v-select-search": selectSearch
        },
        methods: {
            tabAppend() {
                this.tableData.push({})
            },
            tailBtnCancel() {
                this.tableData.pop();
            },
            tailBtnOk(item) {
                this.tableData.pop();
                this.tableData.push(item);
            },
            tabSplite(item) {
                _.map(item, (list) => {
                    this.tableData.splice(list.index, 1);
                });
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
        .hd {
            height: 40px;
            line-height:40px;
            border-bottom:1px solid #ccc;
            padding:0 15px;
        }   
        .input-item {
            display:flex;
            align-items: center;
            padding:10px 0;
            span {
                width: 180px;
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
            left:220px;
            bottom:0;
            background:#fff;
            width: 100%;
            padding:10px;
            box-sizing: border-box;
            border-top:1px solid #cdcc;
            z-index:11;
        }
        .fix-btn-station {
            width: 100%;
            height: 53px;
        }
    }
</style>
