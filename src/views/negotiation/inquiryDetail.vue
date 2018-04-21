<template>
    <div class="inquiryDetail">
        <div class="hd">
            <h4 class="title">{{ $i.inquiry.inquiryDetailTitle }} {{ tabData[0] ? tabData[0].inquiryNo.value : '' }}</h4>
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
                            :data.sync="newTabData" 
                            :selection="false" 
                            :buttons="basicInfoBtn"
                            :height="200"
                            :loading="tableLoad"
                            :rowspan="2"
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
                            <el-button type="danger" :disabled="checkedAll && checkedAll.length && statusModify ? false : true" @click="removeProduct()">f{{ $i.baseText.remove }} <span>({{checkedAll.length - submitData.deleteDetailIds.length}})</span></el-button>
                        </div>
                        <select-search :options="options" />
                    </div>
                    <v-table 
                        :data.sync="newProductTabData"
                        :buttons="productInfoBtn"
                        :loading="tableLoad"
                        @action="producInfoAction"
                        @change-checked="changeChecked"
                        :rowspan="2"
                    />
                    <div class="bom-btn-wrap" v-show="!statusModify">
                        <el-button @click="ajaxInqueryAction('accept')">{{ $i.baseText.accept }}</el-button>
                        <el-button @click="windowOpen('/order/creatOrder')">{{ $i.baseText.createOrder }}</el-button>
                        <el-button @click="addToCompare">{{ $i.baseText.addToCompare }}</el-button>
                        <el-button @click="modifyAction">{{ $i.baseText.modify }}</el-button>
                        <el-button @click="toCreateInquire" :disabled="checkedAll && checkedAll.length ? false : true">{{ $i.baseText.createInquiry }}<span>({{checkedAll.length}})</span></el-button>
                        <el-button type="info" @click="ajaxInqueryAction('cancel')">{{ $i.baseText.cancel }}</el-button>
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
        <v-compare-list :data="compareConfig" @clearData="clerCompare" @closeTag="handleClose" @startCompare="startCompare" />
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
        <!-- <v-history 
            :oSwitch.sync="oSwitch" 
            :list.sync="historyData" 
            :tableColumn="tableColumn"
            :title="msgTitle"
            :column="historyColumn"
            :msgTableType="msgTableType"
            @isModify="isModify"
        /> -->
        <v-history-modify 
                :visible.sync="oSwitch" 
                :data="historyData" 
                @save="save"
            >
        </v-history-modify>
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
    import { messageBoard, selectSearch, VTable, compareList, VHistory, dropDownSingle, VHistoryModify } from '@/components/index';
    import { getData } from '@/service/base';
    import product from '@/views/product/addProduct';
    export default {
        name:'inquiryDetail',
        data() {
            return {
                tabData: [],
                productTabData: [],
                newTabData: [],
                newProductTabData: [],
                tableLoad: true,
                checkedAll: '',
                msgTableType: false,
                historyColumn: {},
                msgTitle: '',
                historyData: [],
                radio: 'From New Search',
                oSwitch: false, //VHistory 组件开关状态
                statusModify: false,
                newSearchDialogVisible:false,
                compareConfig:[],
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
                tableColumn: '',
                submitData: {
                    deleteDetailIds: []
                },
                id_type: ''
            }
        },
        components: {
            'message-board':messageBoard,
            'select-search':selectSearch,
            'v-table': VTable,
            'v-product': product,
            'v-compare-list': compareList,
            'v-history': VHistory,
            'drop-down-single': dropDownSingle,
            VHistoryModify
        },
        created() {
            this.getInquiryDetail();
            this.submitData.id = this.$route.query.id;
            
            if(this.$localStore.get('$inquiryCompare')) {
                this.compareConfig = this.$localStore.get('$inquiryCompare');
            }
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
            save(data) { //modify 编辑完成反填数据
                //console.log(data, '====')
                if(this.id_type === 'basicInfo') { //反填 basicInfo
                    this.newTabData.forEach((item, index) => {
                        if(item.id && item.id.value) { //反填最新订单数据
                            for(let k in item) {
                                item[k] = data[0][k]
                            }
                        } else if(item._id && item._id.value) { //反填最新remark数据
                            for(let k in item) {
                                item[k] = data[1][k] ? data[1][k] : item[k];
                            }
                        }
                    }); 
                } else if(this.id_type === 'producInfo') { // 反填 productTabData
                    this.newProductTabData.forEach((item, index) => {
                        if(item.id && item.id.value) { //反填最新订单数据
                            // item[index].rm = data[0];
                            console.log()
                            for(let k in item) {
                                item[k] = data[0][k]
                            }
                        } else if(item._id && item._id.value) { //反填最新remark数据
                            // item[index].rm = data[1];
                            for(let k in item) {
                                item[k] = data[1][k] ? data[1][k] : item[k];
                            }
                        }
                    }); 
                }
            },
            startCompare() { //前往比较
                let arr = [];
                this.compareConfig.forEach(item => {
                    arr.push(item.id);
                });
                this.$sessionStore.set('$compareType', 'new')
                this.$router.push({
                    path: '/negotiation/compareDetail',
                    query: {
                        id: arr.join(',')
                    }
                });
            },
            clerCompare() {   //clear
                this.compareConfig = [];
                this.$localStore.remove('$inquiryCompare');
            },
            handleClose(item) { //删除
                this.compareConfig.forEach((items, index) => {
                    if(items.id === item.id) this.compareConfig.splice(index, 1)
                });
                this.$localStore.set('$inquiryCompare', this.compareConfig);
            },
            addToCompare() { //添加对比
                if(!this.tabData[0]) return this.$message({
                    message: '请加载完毕再操作',
                    type: 'warning'
                });
                let config = {
                    name: this.tabData[0].inquiryNo.value,
                    id: this.tabData[0].id.value
                };

                for(let i = 0; i < this.compareConfig.length; i++) {
                    if(this.compareConfig[i].id === config.id) return this.$message({
                        message: '这个订单已经添加到对比',
                        type: 'warning'
                    });
                }
                this.compareConfig.push(config);
                this.$message('添加对比成功！');
                this.$localStore.set('$inquiryCompare', this.compareConfig);
            },
            getInquiryDetail() { //获取 Inquiry detail 数据
                if(!this.$route.query.id) return this.$message('地址错误');
                this.$ajax.get(`${this.$apis.GET_INQIIRY_DETAIL}/{id}`, {
                    id: this.$route.query.id
                })
                .then(res => {
                    //Basic Info
                    this.tableLoad = false;
                    this.tabData = this.$getDB(this.$db.inquiryOverview.basicInfo, this.$filterRemark(res, 'fieldRemark'));
                    this.newTabData = this.$getDB(this.$db.inquiryOverview.basicInfo, this.$filterRemark(res, 'fieldRemark'));
                    //Product Info
                    this.productTabData = this.$getDB(this.$db.inquiryOverview.productInfo, this.$filterRemark(res.details, 'fieldRemark'));
                    this.newProductTabData = this.$getDB(this.$db.inquiryOverview.productInfo, this.$filterRemark(res.details, 'fieldRemark'));
                })
                .catch(err => {
                    this.tableLoad = false;
                });
            },
            submit(str) { //留言板发布
                let json = {};
                json.time = getData(new Date(), 6);
                json.name = '罗涛';
                json.content = str;
                this.list.push(json);
            },
            boardSwitch() { //留言板开关
                this.switchStatus = !this.switchStatus;
            },
            basicInfoBtn(item) { //Basic info 按钮创建
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
            productInfoBtn (item) { //Product info 按钮创建
                if(this.statusModify && !item._disabled) return [{label: 'Modify', type: 'modify'}, {label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
                if(!item._disabled) return [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
            },
            fromChange(val) {
               console.log(val)
            },
            modifyAction() { //打开页面编辑状态
                this.statusModify = true;
            },
            fnBasicInfoHistoty(item, type) { //Basic info 历史记录
                if(type) {
                    this.msgTableType = true;
                } else {
                    this.msgTableType = false;
                }
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                    id: item.id.value
                })
                .then(res => {
                    this.historyData = res;
                    this.oSwitch = true;
                });
           },
           basicInfoAction(data, type) { // basic info 按钮操作 
                this.id_type = 'basicInfo';
                this.historyColumn = this.$db.inquiryOverview.basicInfo;
                switch(type) {
                        case 'histoty':
                            //this.msgTitle = 'Histoty';
                            this.fnBasicInfoHistoty(data);
                            break;
                        case 'modify':
                            //this.msgTitle = 'Modify';
                            this.fnBasicInfoHistoty(data);
                            this.oSwitch = true;
                            break;
                }
           },
           producInfoAction(data, type) { //Produc info 按钮操作
                this.id_type = 'producInfo';
                this.historyColumn = this.$db.inquiryOverview.productInf;
                switch(type) {
                        case 'histoty':
                            //this.msgTitle = 'Histoty';
                            this.producInfoHistoty(data);
                            break;
                        case 'modify':
                            //this.msgTitle = 'Modify';
                            this.oSwitch = true;
                            this.producInfoHistoty(data);
                            break;
                }
           },
           producInfoHistoty(item) { //Produc info 历史记获取
            //    if(item.histoty) {
            //         this.oSwitch = true;
            //         this.historyData = item.histoty;
            //         return false;
            //     };
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                    id: item.id.value
                })
                .then(res => {
                    item.histoty = res;
                    this.historyData = res;
                    this.oSwitch = true;
                });
           },
           changeChecked(item) { //获取选中的单 集合
               this.checkedAll = item;
           },
            toCreateInquire() { //创建单
                let arr = [];
                this.checkedAll.forEach(item => {
                    arr.push(item.id.value);
                });
                this.$router.push({
                    path: '/negotiation/createInquiry',
                    query: {
                        id :arr.join(',')
                    }
                });
            },
            ajaxInqueryAction(type) { //接受单
                const argId = [];
                argId.push(this.$route.query.id);
                this.$ajax.post(this.$apis.POST_INQUIRY_ACTION, {
                    action: type,
                    ids:argId
                })
                .then(res => {
                    console.log(res)
                });
            },
            removeProduct() { //删除product 某个单
                this.newProductTabData.forEach((item, index) => {
                    if(item._checked) {
                        item._disabled = true;
                        this.$set(this.newProductTabData, index, item);
                    };
                });
            },
            modifyCancel() { //页面编辑取消
                this.newTabDat = this.tabData;
                this.newProductTabData = this.productTabData;
                this.productCancel();
                this.statusModify = false;
            },
            modify() { //页面编辑提交
                this.tabData = this.newTabData;
                this.productTabData = this.newProductTabData;
                this.productModify();
                this.statusModify = false;
            },
            productCancel() { //  取消 product 编辑 
                this.newProductTabData.forEach((item, index) => {
                    if(!item._remove && item._disabled) {
                        item._disabled = false;
                        item._remove = false;
                    };
                    this.$set(this.newProductTabData, index, item);
                });
            },
            productModify() { //  提交 product 编辑 
                this.newProductTabData.forEach((item, index) => {
                    if(!item._remove && item._disabled) {
                        item._remove = true;
                        this.submitData.deleteDetailIds.push(item);
                    };
                    this.$set(this.newProductTabData, index, item);
                });
            },
            // isModify(data) {
            //     if(this._id.type === 'producInfo') {
            //         let ptd = [];

            //         let hDB=this.$getDB(this.$db.inquiryOverview.productInf,[data.history]);

            //         let rDB=this.$getDB(this.$db.inquiryOverview.productInf,[data.remark]);

            //         _.map(this.newProductTabData, item=>{
            //             if(item.id && item.id.value === this._id.id && !_.isEmpty(rDB)){
            //                 ptd.push(_.extend(item, rDB[0]));
            //             }
            //             if(item._id && item._id.value === this._id.id && !_.isEmpty(hDB)){
            //                 ptd.push(_.extend(item, hDB[0]));
            //             }
            //         });
            //     } else {
            //         let ptd = [];
            //         let hDB=this.$getDB(this.$db.inquiryOverview.basicInfo, [data.history]);

            //         let rDB=this.$getDB(this.$db.inquiryOverview.basicInfo, [data.remark]);

            //         _.map(this.newTabData, item=>{
            //             if(item.id && item.id.value === this._id.id && !_.isEmpty(rDB)){
            //                 ptd.push(_.extend(item, rDB[0]));
            //             }
            //             if(item._id && item._id.value === this._id.id && !_.isEmpty(hDB)){
            //                 ptd.push(_.extend(item, hDB[0]));
            //             }
            //         });
            //     }
            // }
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
