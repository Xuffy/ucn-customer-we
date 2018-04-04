<template>
    <div class="place-logistic-plan">
        <div class="hd-top">Logistic Plan No.HDAMC18005</div>
        <div class="hd">Basic Information</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>logistics plan No</span>
                    <el-select v-model="logistics" placeholder="请选择">
                        <el-option
                        v-for="item in logisticsOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>Est depature date</span>
                    <el-input placeholder="请输入内容"></el-input>
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
                    <span>Container type2</span>
                    <el-select v-model="Container2" placeholder="请选择">
                        <el-option
                        v-for="item in ContainerOptions2"
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
                    <el-input placeholder="请输入内容"></el-input>
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
                    <el-input placeholder="请输入内容" :disabled="true"></el-input>
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
                    <span>CommoditInspectioy</span>
                    <el-select v-model="CarrierOptions" placeholder="请选择">
                        <el-option
                        v-for="item in CarrierOptionsOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
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
        <div class="hd">Ship Information</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>运输公司</span>
                    <el-select v-model="company" placeholder="请选择">
                        <el-option
                            v-for="item in companyOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id" />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>航船次号</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div class="input-item">
                    <span>起运国</span>
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
                    <span>目的国</span>
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
        <div class="hd">{{ $t('logistic.text.containerInfo') }}</div>
        <v-container-info 
            :tableData="tableData" 
            @tabAppend="tabAppend" 
            @tailBtnCancel="tailBtnCancel"
            @tailBtnOk="tailBtnOk"
            @tabSplite="tabSplite"
        />

        <div class="hd">Product Info</div>
        <div class="btn-wrap">
            <div>
                <el-button type="primary" @click="newSearchDialogVisible = true">Add product</el-button>
                <el-button>Remove</el-button>
            </div>
        </div>
        <v-simple-table :column="tabColumn" :data.sync="tabData" />
        <div class="fix-btn">
            <el-button type="primary">Modify</el-button>
            <el-button type="primary">Sent as Order</el-button>
            <el-button>Delete</el-button>
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
                date:'',
                newSearchDialogVisible:false,
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
                logisticsOptions: [{
                    id:'1',
                    label:'OKAMC18009'
                }],
                logistics: '',
                date: '',
                ContainerOptions2:[],
                Container2:'',
                DateOfArrival: '',
                departureOptions: [],
                departure: '',
                ContainerOptions1: [],
                Container1: '',
                ContainerOptions3: [],
                Container3: '',
                CarrierOptionsOptions: [],
                CarrierOptions: '',
                IncotermOptions: [],
                Incoterm: '',
                companyOptions: [],
                company: '',
                CountryOfOriginOptions: [],
                CountryOfOrigin: '',
                DestinationCountryOptions: [],
                DestinationCountry: '',
                shipmentOptions: [],
                shipment: '',
                destinationOptions: [],
                destination: '',
                tableData: [{
                    Product: "Product",
                    containerAmount: "Container Amount"
                },{
                    Product: "Product",
                    containerAmount: "Container Amount"
                }]
            }
        },
        components: {
            "v-simple-table": VSimpleTable,
            "v-container-info": containerInfo,
            "v-select-search": selectSearch
        },
        created() {
            this.ajax({
                url: '/Compare',
                method: 'get'
            }).then(res => {
                this.tabData = res.Inquiry;
                this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareByInquiry', { width:200 });
            });
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
