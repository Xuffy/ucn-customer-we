<template>
    <div class="logistic-plan-overview">
        <div class="hd">
            <div class="select-search-wrap">
                <select-search :options="options" />
            </div>
        </div>
        <div class="btn-wrap">
            <div class="fn btn">
                <el-button type="primary">Download Selected</el-button>
                <el-button type="primary">Sent as Order</el-button>
                <el-button>Delete</el-button>
            </div>
            <div class="view-by-btn">
                <span>View By：</span>
                <el-button type="primary">Plan</el-button>
                <el-button>Transportation unit</el-button>
                <el-button>SKU</el-button>
            </div>
        </div>
        <!--form-->
    </div>
</template>
<script>
    import { selectSearch } from '@/components/index';
    export default {
        name:'logisticPlanOverview',
        data() {
            return {
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
            'select-search': selectSearch
        }
    }
</script>
<style lang="less" scoped>
    .logistic-plan-overview {
        .hd {
            display:flex;
            justify-content: flex-end;
            padding:20px;
            .select-search-wrap {
                width: 260px;
            }
        }
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
    }
</style>
