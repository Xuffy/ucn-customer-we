<template>
    <div class="draftOverview">
        <h3 class="hd">{{$t('order.buttonname.draftOview')}}</h3>

        <div class="fn">
            <div class="btn-wrap">
                <el-button >{{$t('order.buttonname.downloadSelected')}}</el-button>
                <el-button >{{$t('order.buttonname.send')}}</el-button>
                <el-button type="danger">{{$t('order.buttonname.delete')}}</el-button>
            </div>
           <selectSearch></selectSearch>
        </div>
        <!--form-->
          <!--        表格-->
            <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据 
     * @param value 下拉框 选中值
     */
    import {
        VTable,
        selectSearch
    } from '@/components/index';
    export default {
        name: 'draftOverview',
        data() {
            return {
                value: '',
                keyWord: '',
                options: [{
                    id: '1',
                    label: this.$t('order.buttonname.orderNo')
                }, {
                    id: '2',
                    label: this.$t('order.buttonname.skuCode')
                }, ],
                tabColumn: [],
                tabData: []
            }
        },
        components: {
            VTable,
            selectSearch
        },
        methods: {
            selectChange(val) {
                console.log(val)
            },
            updata(){
                 this.ajax.get(this.$apis.supplier_overview, {
                    params: {}
                })
                .then(res => {
                    this.tabData = res

                })
                .catch((res) => {
                    console.log(res);
                });
            }
        },
        created() {
//             this.updata()
        },
    }

</script>
<style lang="less" scoped>
    .draftOverview {
        .hd {
            height: 50px;
            line-height: 50px;
            color: #666;
            border-bottom: 1px solid #ccc;
            font-size: 18px;
            color: #666666;
        }
        .status {
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: flex-end;
            padding: 0 15px;
            box-sizing: border-box;
            .btn-wrap {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                }
                button {
                    padding: 2px 5px;
                    cursor: pointer;
                    border: 1px solid #108ee9;
                    background-color: #fff;
                    margin-left: 10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    &:hover,
                    &.active {
                        background-color: #108ee9;
                        color: #fff;
                    }
                }
            }
            .select-wrap {
                display: flex;
                align-items: center;
                .select {
                    width: 110px;
                    margin-right: 5px;
                    input {}
                }
            }
        }
        .fn {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            box-sizing: border-box;
            .viewBy {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                    color: #666;
                }
                button {
                    cursor: pointer;
                    border: 1px solid #108ee9;
                    background-color: #fff;
                    margin-left: 10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    padding: 2px 5px;
                    &:hover,
                    &.active {
                        background-color: #108ee9;
                        color: #fff;
                    }
                }
                .set {
                    cursor: pointer;
                    padding-left: 18px;
                    color: #999;
                    i {
                        font-size: 25px;
                    }
                }
            }
        }
    }

</style>