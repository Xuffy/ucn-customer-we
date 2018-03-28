<template>
    <div class="inquiryOverview">
        <h3 class="hd"> {{ $t('NEGOTIATION.INQUIRYOVERVIEW.INDEX') }}</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.STATUS.INDEX') }}:</span>
                <el-button type="primary">{{ $t('NEGOTIATION.INQUIRYOVERVIEW.STATUS.TBCBYCUSTOMER') }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.STATUS.TBCBYSUPPLIER') }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.STATUS.FINISH') }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.STATUS.CANCEL') }}</el-button>
            </div>
            <select-search :options="options" :setting="false" />
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button type="primary">{{ $t('NEGOTIATION.INQUIRYOVERVIEW.BTN.COMPARE')  }}</el-button>
                <el-button type="primary">{{ $t('NEGOTIATION.INQUIRYOVERVIEW.BTN.CREATENEWINQUIRY')  }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.BTN.CANCELTHEINQUIRY')  }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.BTN.DELETE')  }}</el-button>
            </div>
            <div class="viewBy">
                <span>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.VIEWBY.INDEX')  }}:</span>
                <el-button type="primary">{{ $t('NEGOTIATION.INQUIRYOVERVIEW.VIEWBY.INQUIRY') }}</el-button>
                <el-button>{{ $t('NEGOTIATION.INQUIRYOVERVIEW.VIEWBY.SKU') }}</el-button>
                <div class="set">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
        </div>
        <!--form-->
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据 
     * @param value 下拉框 选中值
    */
    import { selectSearch } from '@/components/index';
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
                }]
            }
        },
        components: {
            'select-search': selectSearch
        },
        methods: {
            selectChange(val) {
                console.log(val)
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
