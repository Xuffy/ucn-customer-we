<template>
    <div class="inquiryOverview">
        <h3 class="hd"> {{ $t('negotiation.title.inquiryOverview') }}</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>{{ $t('negotiation.status.index') }}:</span>
                <el-button type="primary">{{ $t('negotiation.status.TBCByCustomer') }}</el-button>
                <el-button>{{ $t('negotiation.status.TBCBySupplier') }}</el-button>
                <el-button>{{ $t('negotiation.status.finish') }}</el-button>
                <el-button>{{ $t('negotiation.status.cancel') }}</el-button>
            </div>
            <select-search :options="options" :setting="false" />
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button type="primary">{{ $t('negotiation.btn.Compare')  }}</el-button>
                <el-button type="primary">{{ $t('negotiation.btn.createNewInquiry')  }}</el-button>
                <el-button>{{ $t('negotiation.btn.cancelTheInquiry')  }}</el-button>
                <el-button>{{ $t('negotiation.btn.Delete')  }}</el-button>
            </div>
            <div class="viewBy">
                <span>{{ $t('negotiation.viewBy.index')  }}:</span>
                <el-button type="primary">{{ $t('negotiation.viewBy.inquiry') }}</el-button>
                <el-button>{{ $t('negotiation.viewBy.SKU') }}</el-button>
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
