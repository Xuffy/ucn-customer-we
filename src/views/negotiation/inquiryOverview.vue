<template>
    <div class="inquiryOverview">
        <h3 class="hd"> {{ $t('negotiation.text.inquiryOverview') }}</h3>
        <div class="status">
            <div style="margin-top: 20px">
                <span>{{ $t('negotiation.status.index') }}</span>
                <el-radio-group v-model="status"  size="mini">
                    <el-radio-button :label="$t('negotiation.status.TBCByCustomer')"></el-radio-button>
                    <el-radio-button :label="$t('negotiation.status.TBCBySupplier')" ></el-radio-button>
                    <el-radio-button :label="$t('negotiation.status.finish')"></el-radio-button>
                    <el-radio-button :label="$t('negotiation.status.cancel')"></el-radio-button>
                </el-radio-group>
            </div>
            <select-search :options="options" :setting="false" />
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button  @click="windowOpen('/negotiation/compare')">{{ $t('negotiation.btn.Compare')  }}</el-button>
                <el-button  @click="windowOpen('/negotiation/createInquiry')">{{ $t('negotiation.btn.createNewInquiry')  }}</el-button>
                <el-button>{{ $t('negotiation.btn.cancelTheInquiry')  }}</el-button>
                <el-button type="danger">{{ $t('negotiation.btn.Delete')  }}</el-button>
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
                status:''
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
            viewByStatus (newVal, oldVal) {
                this.getViewBy(newVal);
            }
        },
        methods: {
            selectChange(val) {
                console.log(val)
            },
            getViewBy(val) {
                this.ajax({
                    url: '/viewByInquiry',
                    method: 'get',
                    params: {
                        type: val
                    }
                }).then(res => {
                    if(val === 'Inquiry') {
                        this.tabData = res.inquiry;
                        this.tabColumn = 'negotiation.tableViewByInquiry';
                    } else {
                        this.tabData = res.SKU;
                        this.tabColumn = 'negotiation.tableViewBySKU';
                    }
                })
            },
            windowOpen(str) {
                const url = `${window.location.origin}/#${str}`;
                window.open(url);
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
