<template>
    <div class="inquiryOverview">
        <h3 class="hd"> {{ $t('negotiation.text.inquiryOverview') }}</h3>
        <div class="status">
            <div style="margin-top: 20px">
                <span>{{ $t('negotiation.status.index') }}</span>
                <el-radio-group v-model="params.status"  size="mini">
                    <el-radio-button :label="0">{{$t('negotiation.status.TBCByCustomer')}}</el-radio-button>
                    <el-radio-button :label="1" >{{$t('negotiation.status.TBCBySupplier')}}</el-radio-button>
                    <el-radio-button :label="2">{{$t('negotiation.status.finish')}}</el-radio-button>
                    <el-radio-button :label="3">{{$t('negotiation.status.cancel')}}</el-radio-button>
                </el-radio-group>
            </div>
            <select-search :options="options" @selectChange="selectChange" @inputEnter="inputEnter" />
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button  @click="windowOpen('/negotiation/compare')">{{ $t('negotiation.btn.Compare')  }}</el-button>
                <el-button  @click="windowOpen('/negotiation/createInquiry')">{{ $t('negotiation.btn.createNewInquiry')  }}</el-button>
                <el-button @click="cancelInquiry">{{ $t('negotiation.btn.cancelTheInquiry')  }}</el-button>
                <el-button @click="deleteInquiry" type="danger">{{ $t('negotiation.btn.Delete')  }}</el-button>
            </div>
            <div class="viewBy">
                <span>{{ $t('negotiation.viewBy.index')  }}&nbsp;</span>
                <el-radio-group v-model="viewByStatus"  size="mini">
                    <el-radio-button :label="$t('negotiation.viewBy.inquiry')"></el-radio-button>
                    <el-radio-button :label="$t('negotiation.viewBy.SKU')" ></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <v-table :data="tabData" :data-key="tabColumn"></v-table>
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据 
     * @param value 下拉框 选中值
    */
    import { selectSearch, VTable } from '@/components/index';
    export default {
        name:'',
        data() {
            return {
                value:'',
                keyWord:'',
                options: [{
                    id: '1',
                    label: '时间段'
                }, {
                    id: '2',
                    label: '询价单号（系统）'
                }, {
                    id: '3',
                    label: '询价单号（供应商自有）'
                }, {
                    id: '4',
                    label: '询价单号（客户）'
                }],
                tabColumn:'',
                tabData: [],
                viewByStatus: '',
                keyType: '',
                params: {
                    status: '',
                    keyType: '',
                    key: '',
                    ps: 10,
                    pn: 1
                }
            }
        },
        components: {
            'select-search': selectSearch,
            'v-table': VTable
        },
        created() {
            this.viewByStatus = this.$t('negotiation.viewBy.inquiry');
        },
        watch: {
            viewByStatus() {
                this.gettabData();
            },
            params: {
                handler(val, oldVal) {
                    this.gettabData();
                },
                deep: true
            }
        },
        methods: {
            selectChange(val) {
                this.keyType = val;
            },
            inputEnter(val) {
                if(!val) return this.$message('搜索内容不能为空');
                this.params.keyType = this.keyType;
                this.params.key = val;
            },
            gettabData() {
                let url = null,
                    tabColumn = null;
                if(this.viewByStatus === 'Inquiry') {
                    url = this.$apis.inquiry_list;
                    tabColumn = 'negotiation.tableViewByInquiry';
                } else {
                    url = this.$apis.inquiry_list_sku
                    tabColumn = 'negotiation.tableViewBySKU';
                };
                this.$ajax.get(url, this.params)
                .then(res => {
                    this.tabColumn = tabColumn;
                    // this.tabData = res;
                    this.tabData = [
                                    {
                                        "id": 0,
                                        "tenantId": 0,
                                        "orderNo": "string",
                                        "quotationNo": "string",
                                        "isDraft": 0,
                                        "isRecycleCustomer": 0,
                                        "isRecycleSupplier": 0,
                                        "status": 0,
                                        "supplierId": 0,
                                        "supplierType": 0,
                                        "supplierName": "string",
                                        "skuQty": 0,
                                        "inquiryAmount": 0,
                                        "discountRate": 0,
                                        "currency": 0,
                                        "payment": 0,
                                        "incoterm": "string",
                                        "transport": 0,
                                        "destinationCountry": "string",
                                        "destinationPort": "string",
                                        "departureCountry": "string",
                                        "departurePort": "string",
                                        "exportLicense": "string",
                                        "remark": "string",
                                        "entryId": 0,
                                        "entryName": "string",
                                        "entryDt": 0,
                                        "updateId": 0,
                                        "updateName": "string",
                                        "updateDt": 0
                                    }
                                    ]
                });
            },
            cancelInquiry() { //取消询价单
                this.$ajax.post(this.$apis.inquiry_cancel, {

                })
                .then(res => {
                    
                });
            },
            deleteInquiry() { //取消询价单
                this.$ajax.post(this.$apis.inquiry_delete, {

                })
                .then(res => {
                    
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .inquiryOverview {
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #ccc;
        }
        .status {
            display:flex;
            height: 60px;
            align-items: center;
            justify-content:space-between;
            padding:0 15px;
            box-sizing: border-box;
            span {
                padding-right:5px;
            }
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                }
                button {
                    padding:2px 5px;
                }
            }
            .select-wrap {
                display:flex;
                align-items:center;
                .select {
                    width: 110px;
                    margin-right:5px;
                    input {}
                }
            }
        }
        .fn {
            display:flex;
            justify-content:space-between;
            padding:10px 15px;
            box-sizing: border-box;
            .viewBy {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                    color:#666;
                }
                button {
                    cursor: pointer;
                    padding:2px 5px;
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
    }
</style>
