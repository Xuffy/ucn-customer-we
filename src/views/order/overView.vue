<template>
    <div class="orderOverview">
        <h3 class="hd">{{$i.order.orderOverview}}</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>{{$i.order.status}}</span>
                <el-radio-group style="margin-left: 10px" v-model="params.status" size="mini" @change='changeStatus'>
                    <el-radio-button label="">{{($i.order.all)}}</el-radio-button>
                    <el-radio-button
                            v-for="v in orderStatusOption"
                            :key="v.id"
                            :label="v.code">
                        {{v.name}}
                    </el-radio-button>
                </el-radio-group>
            </div>
            <div class="select-wrap">
                <selectSearch
                        :options=options
                        v-model='selectSearch'
                        @inputEnter="inputEnter">
                </selectSearch>
            </div>
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <!--<el-button @click='download' v-authorize="'ORDER:OVERVIEW:DOWNLOAD'">{{($i.common.download)}}({{selectedList.length}})</el-button>-->
                <el-button @click='createOrder' v-authorize="'ORDER:OVERVIEW:CREATE'">{{($i.order.createOrder)}}</el-button>
                <el-button :disabled='disableFinish' @click='finish'>{{$i.order.finish}}</el-button>
                <!--                <el-button type='danger' :disabled='!(selectedList.length>0)' @click='deleteOrder' v-authorize="'ORDER:OVERVIEW:DELETE'">{{($i.common.delete)}}</el-button>-->
            </div>
            <div class="viewBy">
                <span>{{$i.order.viewBy}}</span>
                <el-radio-group style="margin-left: 10px" v-model="params.view" size="mini" @change='changeView'>
                    <el-radio-button label='1'>{{($i.order.order)}}</el-radio-button>
                    <el-radio-button label='2'>{{($i.order.sku)}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <!--form-->
        <v-table
                ref='vtable'
                :data="tabData"
                :buttons="[{label: 'Detail', type: 1}]"
                @action="onAction"
                :loading='loading'
                :pageTotal='pageTotal'
                @change-checked='checked'
                :height="500"
                style='marginTop:10px'>
        </v-table>
        <page
                @size-change="changeSize"
                @change="changePage"
                :page-sizes="[50,100,200]"
                :page-data="pageData"></page>
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据
     * @param value 下拉框 选中值
     */
    import {mapActions} from 'vuex'
    import {
        dropDown,
        selectSearch,
        VPagination
    } from '@/components/index'
    import {
        VTable
    } from '@/components/index';

    export default {
        name: 'orderOverview',
        components: {
            dropDown,
            VTable,
            selectSearch,
            page: VPagination,
        },
        data() {
            return {
                /**
                 * 页面基本data
                 * */
                pageData: {},
                value: '',
                keyWord: '',
                disabled: false, //delete的状态
                disableFinish: true, // finish的状态
                tabData: [],
                loading: false,
                selectSearch: 1,
                pageTotal: 1,
                rowspan: 1,
                options: [{
                    id: 1,
                    label: 'Order No'
                }, {
                    id: 2,
                    label: 'Sku Code'
                }],
                keyType: '',
                params: {
                    orderNo: '',
                    skuCode: '',
                    status: '',
                    view: '1', //view by的按钮组
                    ps: 50,
                    pn: 1,
                },
                selectedList: [],
                selectedNumber: [],

                /**
                 * 字典
                 * */
                orderStatusOption: [],
            }
        },
        methods: {
            ...mapActions([
                'setRecycleBin', 'setDraft'
            ]),
            onAction(item) {
                this.$windowOpen({
                    url: '/order/detail',
                    params: {
                        orderId: item.id.value
                    }
                });
            },
            createOrder() {
                this.$windowOpen({
                    url: '/order/create'
                });
            },
            selectChange(val) {
                this.keyType = val;
            },
            checked(item) {
                this.selectedList = item;
            },
            changeStatus() {
                console.log(this.params)
                if (this.params.view === '1') {
                    this.getData(this.$db.order.overviewByOrder);
                } else {
                    this.getData(this.$db.order.overviewBysku);
                }
            },
            changeView() {
                console.log(this.params)
                if (this.params.view === '1') {
                    this.getData(this.$db.order.overviewByOrder)
                } else {
                    this.getData(this.$db.order.overviewBysku)
                }
            },
            inputEnter(val) {
                if (!val.keyType) return this.$message(this.$i.order.pleaseChooseType);
                if (val.keyType === 1) {
                    this.params.orderNo = val.key;
                    this.params.skuCode = '';
                    if (this.params.view === '1') {
                        this.getData(this.$db.order.overviewByOrder)
                    } else {
                        this.getData(this.$db.order.overviewBysku)
                    }
                } else {
                    this.params.orderNo = '';
                    this.params.skuCode = val.key;
                    if (this.params.view === '1') {
                        this.getData(this.$db.order.overviewByOrder)
                    } else {
                        this.getData(this.$db.order.overviewBysku)
                    }
                }
            },
            finish() {
                this.$ajax.post(this.$apis.post_finishPost, {
                    ids: this.selectedNumber
                })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((res) => {
                        console.log(res)
                    });
            },
            download() {
                this.$ajax.post(this.$apis.download_order, {
                    ids: this.selectedNumber
                })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((res) => {
                        console.log(res)
                    });
            },
            deleteOrder() {
                this.$ajax.post(this.$apis.delete_order, {
                    ids: this.selectedNumber
                })
                    .then((res) => {
                        if (this.params.view == 1) {
                            this.getdata(this.$db.order.overviewByOrder)
                        } else {
                            this.getdata(this.$db.order.overviewBysku)
                        }
                    })
                    .catch((res) => {
                        console.log(res)
                    });
            },
            //get_orderlist数据
            getData(query) {
                this.loading = true
                this.$ajax.post(this.$apis.get_orderList, this.params)
                    .then((res) => {
                        this.loading = false;
                        this.tabData = this.$getDB(query, res.datas);
                        this.pageData = res;
                    })
                    .catch((res) => {
                        this.loading = false
                    });
            },

            //获取字典
            getUnit() {
                // this.$ajax.get(this.$apis.get_allUnit).then(res=>{
                //     console.log(res)
                // });

                this.$ajax.post(this.$apis.get_partUnit, ['ORDER_STATUS', 'AE_IS'], {_cache: true}).then(res => {
                    res.forEach(v => {
                        if (v.code === 'ORDER_STATUS') {
                            this.orderStatusOption = v.codes;
                        }
                    });
                    this.getData(this.$db.order.overviewByOrder);
                })
            },

            /**
             * 分页操作
             * */
            changePage(e) {
                this.params.pn = e;
                this.getData();
            },
            changeSize(e) {
                this.params.ps = e;
                this.getData();
            }
        },
        created() {
            this.getUnit();
            this.setRecycleBin({
                name: 'orderRecycleBin',
                show: true
            });
            this.setDraft({
                name: 'orderDraft',
                show: true
            });
        },
        mounted() {
            this.loading = false
        },
        watch: {
            selectedList(n){
                if(n.length>0 && this.params.status==='3' && this.params.view==='1'){
                    this.disableFinish=false;
                }else{
                    this.disableFinish=true;
                }
            },
        }
    }

</script>
<style scoped>
    >>> .el-input-group__append {
        padding: 0 !important;
    }

</style>
<style lang="less" scoped>
    .orderOverview {
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
            justify-content: space-between;
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
                    input {
                    }
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

                .set {
                    cursor: pointer;
                    padding-left: 40px;
                    /*                    color: #999;*/
                    i {
                        font-size: 25px;
                    }
                    .speDropdown {
                        position: absolute;
                        right: 40px;
                        background-color: #ffffff;
                        z-index: 2000;
                        display: none
                    }
                    .speDropdownshow {
                        position: absolute;
                        right: 40px;
                        background-color: #ffffff;
                        z-index: 2000;

                    }
                }
            }
        }

    }

</style>
