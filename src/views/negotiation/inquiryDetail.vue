<template>
    <div class="inquiryDetail">
        <drop-down-single v-model="a" :list="ss" />
        <div class="hd">
            <h4 class="title">{{ $i.inquiry.inquiryDetailTitle }}</h4>
        </div>
        <div class="container" :class="{'active':switchStatus}">
            <div class="table-wrap">
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{ $i.baseText.basicInfo }}</h5>
                        <el-checkbox-group v-model="ChildrenCheckList">
                            <el-checkbox :label="0">{{ $i.baseText.hideTheSame }}</el-checkbox>
                            <el-checkbox :label="1">{{ $i.baseText.highlightTheDifferent }}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="tab-msg-wrap">
                        <v-table 
                            :data="tabData" 
                            :selection="false" 
                            :buttons="basicInfoBtn"
                            :height="200"
                            @action="basicInfoAction"
                        />
                    </div>
                </div>
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{ $i.baseText.productInfo }}</h5>
                        <el-checkbox-group v-model="ProductCheckList">
                            <el-checkbox :label="1">{{ $i.baseText.highlightTheDifferent }}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="status">
                        <div class="btn-wrap">
                            <el-button @click="newSearchDialogVisible = true">{{ $i.baseText.addProduct }}</el-button>
                            <el-button type="danger" :disabled="checkedAll && checkedAll.length ? false : true">{{ $i.baseText.remove }} <span>({{checkedAll.length}})</span></el-button>
                        </div>
                        <select-search :options="options" />
                    </div>
                    <v-table 
                        :data="productTabData"
                        :buttons="productInfoBtn" 
                        @action="producInfoAction"
                        @change-checked="changeChecked"
                    />
                    <div class="bom-btn-wrap" v-show="!statusModify">
                        <el-button>{{ $i.baseText.accept }}</el-button>
                        <el-button @click="windowOpen('/order/creatOrder')">{{ $i.baseText.createOrder }}</el-button>
                        <el-button @click="compareConfig.showCompareList = true;">{{ $i.baseText.addToCompare }}</el-button>
                        <el-button @click="modifyAction">{{ $i.baseText.modify }}</el-button>
                        <el-button @click="windowOpen('/negotiation/createInquiry')">{{ $i.baseText.createInquiry }}</el-button>
                        <el-button type="info">{{ $i.baseText.cancel }}</el-button>
                    </div>
                    <div class="bom-btn-wrap" v-show="statusModify">
                        <el-button @click="modify">{{ $i.baseText.submit }}</el-button>
                        <el-button type="info" @click="modifyCancel">{{ $i.baseText.cancel }}</el-button>
                    </div>
                    <div class="bom-btn-wrap-box"></div>
                </div>
            </div>
            <div class="message-board-wrap">
                <div class="con"><message-board :list="list" @sub="submit" /></div>
                <div class="switch-btn" @click="boardSwitch">
                    {{ $i.baseText.messageBoard }}
                    <i :class="switchStatus ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                </div>
            </div>
        </div>
        <v-compare-list :config="compareConfig" />
        <el-dialog
                :title="$i.baseText.addProduct"
                :visible.sync="newSearchDialogVisible"
                width="70%"
                lock-scroll
            >
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="0">{{ $i.baseText.fromNewSearch }}</el-radio-button>
                <el-radio-button label="1">{{ $i.baseText.FromMyBookmark }}</el-radio-button>
            </el-radio-group>
            <v-product :hideBtns="true"></v-product>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="newSearchDialogVisible = false">{{ $i.baseText.ok }}</el-button>
                <el-button @click="newSearchDialogVisible = false">{{ $i.baseText.cancel }}</el-button>
            </span>
        </el-dialog>
        <v-history 
            :oSwitch.sync="oSwitch" 
            :list.sync="historyData" 
            :tableColumn="tableColumn"
            :title="msgTitle"
            :column="historyColumn"
            :msgTableType="msgTableType"
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
    import { messageBoard, selectSearch, VTable, compareList, VHistory, dropDownSingle } from '@/components/index';
    import { getData } from '@/service/base';
    import product from '@/views/product/addProduct';
    export default {
        name:'inquiryDetail',
        data() {
            return {
                a:3,
                ss: [{children:[{label: '22', id: 2, children: [{label: '44', id: 4}]}], label:'333', id: 3}],
                checkedAll: '',
                msgTableType: false,
                historyColumn: {},
                msgTitle: '',
                historyData: [],
                productTabData: [],
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
                list:[],
                tableColumn: ''
            }
        },
        components: {
            'message-board':messageBoard,
            'select-search':selectSearch,
            'v-table': VTable,
            'v-product': product,
            'v-compare-list': compareList,
            'v-history': VHistory,
            'drop-down-single': dropDownSingle
        },
        created() {
            this.getInquiryDetail();
        },
        watch: {
            ChildrenCheckList(val, oldVal) {
                console.log(val);
            },
            ProductCheckList(val, oldVal) {
                console.log(val);
            }
        },
        methods: {
            getInquiryDetail() {
                if(!this.$route.query.id) return this.$message('地址错误');
                this.$ajax.get(`${this.$apis.GET_INQIIRY_DETAIL}/{id}`, {
                    id: this.$route.query.id
                })
                .then(res => {
                    let json = {}, data = [];
                    for(let k in res) {
                        for(let key in res.fieldRemark) {
                            if(k === key) {
                                json[k] = res.fieldRemark[key];
                            } else {
                                json[k] = null;
                            }
                        }
                    };
                    data.push(res);
                    data.push(json);
                    this.tabData = this.$getDB(this.$db.inquiryOverview.basicInfo, data);
                    this.productTabData = this.$getDB(this.$db.inquiryOverview.basicInfo, res.details);
                });
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
                this.statusModify = false;
            },
            basicInfoBtn(item) {
                if(item.id.value && this.statusModify) return [{
                    label: 'Modify',
                    type: 'modify'
                }, { 
                    label: 'Histoty',
                    type: 'histoty'
                }];

                if(item.id.value) return [{ 
                    label: 'Histoty',
                    type: 'histoty'
                }];
            }, 
            productInfoBtn (item) {
                if(this.statusModify) return [{label: 'Modify', type: 'modify'}, {label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
                return [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
            },
            modify() {
                this.statusModify = false;
            },
            fromChange(val) {
               console.log(val)
            },
            modifyAction() {
                    this.statusModify = true;
            },
            fnBasicInfoHistoty(item, type) {
                if(type) {
                    this.msgTableType = true;
                } else {
                    this.msgTableType = false;
                }
                if(item.histoty) {
                    this.oSwitch = true;
                    this.historyData = item.histoty;
                    return false;
                };
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                    id: item.id.value
                })
                .then(res => {
                    item.histoty = res;
                    this.historyData = res;
                    this.oSwitch = true;
                });
           },
           basicInfoAction(data, type) {
                this.historyColumn = this.$db.inquiryOverview.basicInfo;
                switch(type) {
                        case 'histoty':
                            this.msgTitle = 'Histoty';
                            this.fnBasicInfoHistoty(data);
                            break;
                        case 'modify':
                            this.msgTitle = 'Modify';
                            this.fnBasicInfoHistoty(data, 'modify');
                            break;
                }
           },
           producInfoAction(data, type) {
                this.historyColumn = this.$db.inquiryOverview.basicInfo;
                switch(type) {
                        case 'histoty':
                            this.msgTitle = 'Histoty';
                            this.producInfoHistoty(data);
                            break;
                        case 'modify':
                            this.msgTitle = 'Modify';
                            this.producInfoHistoty(data, 'modify');
                            break;
                }
           },
           producInfoHistoty(item) {
               if(item.histoty) {
                    this.oSwitch = true;
                    this.historyData = item.histoty;
                    return false;
                };
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                    id: item.id.value
                })
                .then(res => {
                    item.histoty = res;
                    this.historyData = res;
                    this.oSwitch = true;
                });
           },
           changeChecked(item) {
               this.checkedAll = item;
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
