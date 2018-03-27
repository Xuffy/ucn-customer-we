<template>
    <div class="logistic-plan-overview">
        <div class="status">
            <div class="btn-wrap">
                <span>Status:</span>
                <button>TBC by Customer</button>
                <button>TBC by Supplier</button>
                <button>Finish</button>
                <button>Canceled</button>
            </div>
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
                }
                button {
                    padding:2px 5px;
                    cursor: pointer;
                    border:1px solid #108ee9;
                    background-color:#fff;
                    margin-left:10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    &:hover, &.active {
                        background-color:#108ee9;
                        color:#fff;
                    }
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
