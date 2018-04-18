<template>
    <div class="logistic-plan-overview">
        <div class="status">
            <div></div>
            <!-- <div class="btn-wrap">
                <span>{{ $i.baseText.logisticsPlanOverview }}:</span>
                <el-radio-group v-model="radioStatus" size="mini">
                    <el-radio-button :label="$t('logistic.status.TBCByCustomer')"></el-radio-button>
                    <el-radio-button :label="$t('logistic.status.finish')"></el-radio-button>
                    <el-radio-button :label="$t('logistic.status.canceled')"></el-radio-button>
                </el-radio-group>
            </div> -->
            <div class="select-search-wrap">
                <select-search :options="options" />
            </div>
        </div>
        <div class="btn-wrap">
            <div class="fn btn">
                <el-button>{{ $i.baseText.downloadSelected }}</el-button>
                <el-button>{{ $i.baseText.sentAsOrder }}</el-button>
                <el-button type="danger">{{ $i.baseText.delete }}</el-button>
            </div>
            <div class="view-by-btn">
                <span>{{ $i.baseText.viewBy }}&nbsp;</span>
                <el-radio-group v-model="viewBy" size="mini">
                    <el-radio-button 
                        v-for="item in $db.logistic.overviewBtn" 
                        :key="item.index"
                        :label="item.index"
                    >
                        {{ item.label }}
                    </el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <v-table 
            :data="tabData" 
            :buttons="[{label: 'detail', type: 'detail'}]" 
            @action="action" 
            @change-checked="changeChecked"
            :loading="tabLoad" 
            ref="tab"
        />
    </div>
</template>
<script>
    import { selectSearch, VTable } from '@/components/index';
    export default {
        name:'logisticPlanOverview',
        data() {
            return {
                tabLoad: true,
                radioStatus: '',
                tabColumn: [],
                tabData: [],
                viewBy: 0,
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
            'v-table': VTable
        },
        created() {
            this.viewByChange(this.viewBy);
        },
        watch: {
            viewBy (newVal, oldVal) {
                console.log(newVal)
                this.viewByChange(newVal);
            }
        },
        methods: {
            changeChecked() {

            },
            action() {

            },
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
