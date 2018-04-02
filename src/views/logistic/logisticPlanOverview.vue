<template>
    <div class="logistic-plan-overview">
        <div class="status">
            <div class="btn-wrap">
                <span>{{ $t('logistic.status.index') }}:</span>
                <el-button typenis="primary">{{ $t('logistic.status.TBCByCustomer') }}</el-button>
                <el-button>{{ $t('logistic.status.finish') }}</el-button>
                <el-button>{{ $t('logistic.status.canceled') }}</el-button>
            </div>
            <div class="select-search-wrap">
                <select-search :options="options" />
            </div>
        </div>
        <div class="btn-wrap">
            <div class="fn btn">
                <el-button type="primary">{{ $t('logistic.btn.downloadSelected') }}</el-button>
                <el-button type="primary">{{ $t('logistic.btn.sentAsOrder') }}</el-button>
                <el-button>{{ $t('logistic.btn.delete') }}</el-button>
            </div>
            <div class="view-by-btn">
                <span>{{ $t('logistic.viewBy.index') }}：</span>
                <el-button :type="$t('logistic.viewBy.plan') === viewBy ? 'primary' : ''" @click="viewBy = $t('logistic.viewBy.plan')">{{ $t('logistic.viewBy.plan') }}</el-button>
                <el-button :type="$t('logistic.viewBy.transportationUnit') === viewBy ? 'primary' : ''" @click="viewBy = $t('logistic.viewBy.transportationUnit')">{{ $t('logistic.viewBy.transportationUnit') }}</el-button>
                <el-button :type="$t('logistic.viewBy.SKU') === viewBy ? 'primary' : ''" @click="viewBy = $t('logistic.viewBy.SKU')">{{ $t('logistic.viewBy.SKU') }}</el-button>
            </div>
        </div>
        <v-simple-table :column="tabColumn" :data.sync="tabData" />
    </div>
</template>
<script>
    import { selectSearch, VSimpleTable } from '@/components/index';
    export default {
        name:'logisticPlanOverview',
        data() {
            return {
                tabColumn: [],
                tabData: [],
                viewBy: '',
                options: [
                    {
                        id: '1',
                        label: 'logistic Plan No'
                    },
                    {
                        id: '2',
                        label: 'SKU Code'
                    },
                    {
                        id: '3',
                        label: 'Order No.'
                    }
                ]
            }
        },
        components: {
            'select-search': selectSearch,
            "v-simple-table": VSimpleTable
        },
        created() {
            this.viewBy = 'Plan';
        },
        watch: {
            viewBy (newVal, oldVal) {
                this.viewByChange(newVal);
            }
        },
        methods: {
            viewByChange(str) {
                this.ajax({
                    url: '/Compare',
                    method: 'get'
                }).then(res => {
                    if(str === 'Plan') {
                        this.tabData = res.Inquiry;
                        this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareByInquiry', { width:200 });
                    } else {
                        this.tabData = res.SKU;
                        this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareBySKU', { width:200 });
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .logistic-plan-overview {
        .btn-wrap {
            padding:10px;
            display:flex;
            justify-content: space-between;
            .view-by-btn {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                    color:#999;
                }
                button {
                    padding:3px 5px;
                }
            }
        }
        .status {
            display:flex;
            height: 60px;
            align-items: center;
            justify-content:space-between;
            padding:0 15px;
            box-sizing: border-box;
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                    margin-right:10px;
                }
                button {
                    padding:2px 5px;
                    cursor: pointer;
                    transition: all .5s ease;
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
    }
</style>
