<template>
    <div class="inquiryDetail">
        <div class="hd">
            <h4 class="title">{{ $lang.inquiry.inquiryDetailTitle }}</h4>
        </div>
        <div class="container" :class="{'active':switchStatus}">
            <div class="table-wrap">
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{ $lang.baseText.basicInfo }}</h5>
                        <el-checkbox-group v-model="ChildrenCheckList">
                            <el-checkbox :label="0">{{ $lang.baseText.hideTheSame }}</el-checkbox>
                            <el-checkbox :label="1">{{ $lang.baseText.highlightTheDifferent }}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="tab-msg-wrap">
                        <v-table 
                            :data="tabData" 
                            :selection="false" 
                            :buttons="basicInfoBtn"
                            :height="120"
                            @action="basicInfoAction"
                            data-key="negotiation.tableBasicInfo"
                        />
                    </div>
                </div>
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{ $lang.baseText.productInfo }}</h5>
                        <el-checkbox-group v-model="ProductCheckList">
                            <el-checkbox :label="0">{{ $lang.baseText.hideTheSame }}</el-checkbox>
                            <el-checkbox :label="0">{{ $lang.baseText.highlightTheDifferent }}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="status">
                        <div class="btn-wrap">
                            <el-button @click="newSearchDialogVisible = true">{{ $lang.baseText.addProduct }}</el-button>
                            <el-button type="danger">{{ $lang.baseText.remove }}</el-button>
                        </div>
                        <select-search :options="options" />
                    </div>
                    <v-table 
                        :data="tabData"
                        :buttons="productInfoBtn" 
                        data-key="negotiation.tableProductInfo"
                    />
                    <div class="bom-btn-wrap" v-show="!statusModify">
                        <el-button>{{ $lang.baseText.accept }}</el-button>
                        <el-button @click="windowOpen('/order/creatOrder')">{{ $lang.baseText.createOrder }}</el-button>
                        <el-button @click="compareConfig.showCompareList = true;">{{ $lang.baseText.addToCompare }}</el-button>
                        <el-button @click="modifyAction">{{ $lang.baseText.modify }}</el-button>
                        <el-button @click="windowOpen('/negotiation/createInquiry')">{{ $lang.baseText.createInquiry }}</el-button>
                        <el-button type="info">{{ $lang.baseText.cancel }}</el-button>
                    </div>
                    <div class="bom-btn-wrap" v-show="statusModify">
                        <el-button @click="modify">{{ $lang.baseText.submit }}</el-button>
                        <el-button type="info" @click="modifyCancel">{{ $lang.baseText.cancel }}</el-button>
                    </div>
                    <div class="bom-btn-wrap-box"></div>
                </div>
            </div>
            <div class="message-board-wrap">
                <div class="con"><message-board :list="list" @sub="submit" /></div>
                <div class="switch-btn" @click="boardSwitch">
                    {{ $lang.baseText.messageBoard }}
                    <i :class="switchStatus ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                </div>
            </div>
        </div>
        <v-compare-list :config="compareConfig" />
        <el-dialog
                :title="$lang.baseText.addProduct"
                :visible.sync="newSearchDialogVisible"
                width="70%"
                lock-scroll
            >
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="0">{{ $lang.baseText.fromNewSearch }}</el-radio-button>
                <el-radio-button label="1">{{ $lang.baseText.FromMyBookmark }}</el-radio-button>
            </el-radio-group>
            <v-product :hideBtns="true"></v-product>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="newSearchDialogVisible = false">{{ $lang.baseText.ok }}</el-button>
                <el-button @click="newSearchDialogVisible = false">{{ $lang.baseText.cancel }}</el-button>
            </span>
        </el-dialog>
        <v-history 
            :oSwitch.sync="oSwitch" 
            :tableData="HistotyData" 
            :tableColumn="tableColumn" 
        />
    </div>
</template>
<script>
    /**
     * @param ChildrenCheckList Basic Info 多选框选中值
     * @param ProductCheckList Product Info 多选框选中值
     * @param keyWord search框 值
     * @param value 下拉框选中的值
     * @param options 下拉框原始数据 
     * @param list 留言板list
     * @param submit 留言 Events
     * @param switchStatus 留言板状态
     * @param boardSwitch 留言板开关 Events
    */
    import { messageBoard, selectSearch, VTable, compareList, VHistory } from '@/components/index';
    import { getData } from '@/service/base';
    import product from '@/views/product/addProduct';
    export default {
        name:'inquiryDetail',
        data() {
            return {
                tableColumn: 'negotiation.tableBasicInfo',
                HistotyData: [],
                basicInfoBtn: [{label: 'Histoty', type: 'histoty'}],
                productInfoBtn: [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}],
                basicInfoBtns: [{label: 'Histoty', type: 'histoty'}],
                productInfoBtns: [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}],
                basicInfoBtnModify: [{label: 'Histoty', type: 'histoty'}, {label: 'Modify', type: 'modify'}],
                productInfoBtnModify: [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}, {label: 'Modify', type: 'modify'}],
                radio: 'From New Search',
                oSwitch: false, //VHistory 组件开关状态
                statusModify: false,
                newSearchDialogVisible:false,
                tabColumn: '',
                tabData: [],
                compareConfig:{
                    showCompareList:false,      //是否显示比较列表
                },
                ChildrenCheckList:[],
                ProductCheckList:[],
                keyWord:'',
                value:'',
                switchStatus:false,
                options: [{
                    id: '1',
                    label: 'SKU code'
                }, {
                    id: '2',
                    label: 'SKU Name'
                }, {
                    id: '3',
                    label: 'SKU description'
                }, {
                    id: '4',
                    label: 'Vendor SKU code'
                }, {
                    id: '5',
                    label: 'Vendor SKU name'
                }, {
                    id: '6',
                    label: 'Vendor SKU description'
                }],
                list:[]
            }
        },
        components: {
            'message-board':messageBoard,
            'select-search':selectSearch,
            'v-table': VTable,
            'v-product': product,
            'v-compare-list': compareList,
            'v-history': VHistory
        },
        created() {
            this.getInquiryDetail();
        },
        watch: {
            ChildrenCheckList(val, oldVal) {
                console.log(val);
            }
        },
        methods: {
            getInquiryDetail() {
                if(!this.$route.query.id) return this.$message('地址错误');
                this.tabData = [
                    {
                        id: 0,
                        tenantId: 0,
                        inquiryNo: 0,
                        quotationNo: 0,
                        time: 0,
                        shippingMethod: 0
                    },
                    {
                        id: 1,
                        tenantId: 1,
                        inquiryNo: 0,
                        quotationNo: 0,
                        time: 0,
                        shippingMethod: 0
                    }
                ]
                return false;
                this.$ajax.get(`${this.$apis.inquiry_detail}/{id}`, {
                    id: this.$route.query.id
                })
            },
            selectChange(val) {
                console.log(val)
            },
            submit(str) {
                let json = {};
                json.time = getData(new Date(), 6);
                json.name = '罗涛';
                json.content = str;
                this.list.push(json);
            },
            boardSwitch() {
                this.switchStatus = !this.switchStatus;
            },
            modifyCancel() {
                this.basicInfoBtn = this.basicInfoBtns;
                this.productInfoBtn = this.productInfoBtns;
                this.statusModify = false;
            },
            modify() {
                this.statusModify = false;
                this.basicInfoBtn = this.basicInfoBtns;
                this.productInfoBtn = this.productInfoBtns;
            },
            fromChange(val) {
               console.log(val)
           },
           modifyAction() {
                this.basicInfoBtn = this.basicInfoBtnModify;
                this.productInfoBtn = this.productInfoBtnModify;
                this.statusModify = true;
           },
           fnHistoty(item) {
               this.oSwitch = true;
                return this.HistotyData = [
                    {
                        id: 0,
                        tenantId: 0,
                        inquiryNo: 1,
                        quotationNo: 2,
                        time: 4,
                        shippingMethod: 5
                    },
                    {
                        id: 1,
                        tenantId: 1,
                        inquiryNo: 0,
                        quotationNo: 0,
                        time: 0,
                        shippingMethod: 0
                    }
                ]
                this.HistotyData = this.item;
           },
           basicInfoAction(data, type) {
               switch(type) {
                    case 'histoty':
                        this.fnHistoty(data);
                        break;
               }
           }
        }
    }
</script>
<style scoped>
    .inquiryDetail >>> .el-checkbox-group .el-checkbox__label {
        font-size:12px;
    }
</style>

<style lang="less" scoped>
    .inquiryDetail {
        .hd {
            display:flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            border-bottom:1px solid #999;
            padding-right:50px;
            .title {
                padding-left:15px;
                color:#666;
                font-size:18px;
            }
        }
        .container {
            display:flex;
            &.active {
                .table-wrap {
                    width: 100%;
                }
                .message-board-wrap {
                    width: 0;
                }
            }
            .table-wrap {
                width:80%;
                .basic-info {
                    width:100%;
                    padding:0 10px;
                    box-sizing: border-box;
                    .tab-msg-wrap {
                        padding-right:25px;
                    }
                    .basesic-hd {
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        box-sizing: border-box;
                        height: 50px;
                        align-items: center;
                        padding-right:30px;
                        padding-left:15px;
                        box-sizing: border-box;
                        h5 {
                            font-size:14px;
                        }
                    }
                    .status {
                        display:flex;
                        height: 60px;
                        box-sizing: border-box;
                        padding-right:25px;
                        align-items: center;
                        justify-content:space-between;
                        .btn-wrap {
                            display:flex;
                            align-items: center;
                            span {
                                font-size:14px;
                            }
                        }
                        .select-wrap {
                            display:flex;
                            align-items:center;
                            .select {
                                width: 110px;
                                margin-right:5px;
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
                    .bom-btn-wrap {
                        padding-top:20px;
                        padding-left:10px;
                        position: fixed;
                        left:180px;
                        bottom:0;
                        background:#fff;
                        z-index:99;
                        width: 100%;
                        box-shadow: 0 -1px 5px #ccc;
                        button {
                            margin-bottom:10px;
                        }
                    }
                    .bom-btn-wrap-box {
                        width: 100%;
                        height: 62px;
                    }
                }
            }
            .message-board-wrap {
                position:relative;
                width:300px;
                height:100%;
                margin-top:1px;
                background:#fff;
                z-index:11;
                .con {
                    width: 100%;
                    overflow: hidden;
                }
                .switch-btn {
                    width: 30px;
                    position:absolute;
                    left:-30px;
                    top:0;
                    writing-mode:tb-rl;
                    transform: rotate(180deg);
                    cursor: pointer;
                    background:#f2f2f2;
                    line-height:30px;
                    height: 240px;
                    text-align: right;
                    font-size:12px;
                    color:#333;
                    font-weight: bold;
                    padding-bottom: 10px;
                    border-radius: 0 5px 0 0;
                    z-index:11;
                    i {
                        transition: all .5s ease;
                        position:absolute;
                        left:50%;
                        top:50%;
                        transform:translate(-50%, -50%);
                        font-size:16px;
                        font-weight: bold;
                        color:#c0c0c0;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1023px) {
        .inquiryDetail .container .table-wrap {
             width:100%;
         }
       .inquiryDetail .container .message-board-wrap {
           position: fixed;
           right:0;
           top:100px;
           z-index:999;
           width:0;
           &.active {
                width:300px;
            }
        } 
    }
</style>
