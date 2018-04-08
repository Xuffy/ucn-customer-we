<template>
    <div class="place-logistic-plan">
        <div class="hd-top">{{ $t('logistic.text.logisticPlanNoHDAMC18005') }}</div>
        <div class="hd">{{ $t('logistic.text.basicInfo') }}</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.shippmentInvoiceNo') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.logisticsID') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.logisticsStatus') }}</span>
                    <el-input placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.createDate') }}</span>
                    <el-input
                        suffix-icon="el-icon-date"
                        v-model="createDate"
                        :disabled="true"
                    />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.declareDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.bookingDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.containerStuffingDate') }}</span>
                    <el-input
                        suffix-icon="el-icon-date"
                        v-model="createDate"
                        :disabled="true"
                    />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.customsCleanceDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>    
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.dispatchDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.arrivalDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.releaseDate') }}</span>
                    <el-date-picker
                        v-model="date"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions" 
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.shipServiceProvider') }}</span>
                    <el-input
                        placeholder="弹窗"
                        :disabled="true"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.customerName') }}</span>
                    <el-input
                        v-model="createDate"
                        :disabled="true"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.receiptCompany') }}</span>
                    <el-input v-model="createDate" />
                </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.shippingAgent') }}</span>
                    <el-input
                        placeholder="弹窗"
                        :disabled="true"
                    />
                </div>
            </el-col>  
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.Incoterm') }}</span>
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
                    <span>{{ $t('logistic.basicInfo.currency') }}</span>
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
                    <span>{{ $t('logistic.basicInfo.payment') }}</span>
                    <el-select v-model="departure" placeholder="请选择">
                        <el-option
                            v-for="item in departureOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id" 
                        />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.paymentTerms') }}</span>
                    <el-input
                        v-model="createDate"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.transportationWay') }}</span>
                    <el-input
                        v-model="createDate"
                        :disabled="true"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.loadingType') }}</span>
                    <el-input
                        v-model="createDate"
                        :disabled="true"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.permitedForTransportation') }}</span>
                    <el-select v-model="departure" placeholder="请选择">
                        <el-option
                            v-for="item in departureOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id" 
                        />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.BLType') }}</span>
                    <el-select v-model="departure" placeholder="请选择">
                        <el-option
                            v-for="item in departureOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id" 
                        />
                    </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.BLQuantity') }}</span>
                    <el-input
                        v-model="createDate"
                        type="number"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.BLNumber') }}</span>
                    <el-input
                        v-model="createDate"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.shipper') }}</span>
                    <el-input
                        v-model="createDate"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.consignee') }}</span>
                    <el-input
                        v-model="createDate"
                    />
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.basicInfo.notify') }}</span>
                    <el-input
                        v-model="createDate"
                    />
                </div>
            </el-col>
        </el-row>
        <div class="hd">{{ $t('logistic.shipInfo.index') }}</div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.transportCompany') }}</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.vesselName') }}</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.vesselNo') }}</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.departCountry') }}</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.departPort') }}</span>
                    <el-input placeholder="请输入"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
                <div class="input-item">
                    <span>{{ $t('logistic.shipInfo.destinationCountry') }}</span>
                    <el-input placeholder="请输入"/>
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
        <div class="fix-btn" v-show="!isModify">
            <el-button type="primary" @click="isModify = true">{{ $t('logistic.btn.modify') }}</el-button>
            <el-button type="primary">{{ $t('logistic.btn.sentAsOrder') }}</el-button>
            <el-button>{{ $t('logistic.btn.delete') }}</el-button>
        </div>
        <div class="fix-btn" v-show="isModify">
            <el-button type="primary" @click="modify">{{ $t('logistic.btn.save') }}</el-button>
            <el-button @click="isModify = false">{{ $t('logistic.btn.cancel') }}</el-button>
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
                <el-button type="primary" @click="newSearchDialogVisible = false">{{ $t('logistic.btn.ok') }}</el-button>
                <el-button @click="newSearchDialogVisible = false">{{ $t('logistic.btn.cancel') }}</el-button>
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
                isModify:false,
                createDate:'2018-09-08',
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
                date: '',
                departureOptions: [],
                departure: '',
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
            },
            modify() {
                this.isModify = false;
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
                width: 200px;
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
