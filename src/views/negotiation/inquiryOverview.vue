<template>
    <div class="inquiryOverview">
        <h3 class="hd"> {{ $lang.inquiry.inquiryOverviewTitle }}</h3>
        <div class="status">
            <div class="state">
                <span>{{ $lang.baseText.state }}</span>
                <el-checkbox-group v-model="params.status">
                    <el-checkbox-button 
                            v-for="item in $db.inquiryOverview.overoiewState"
                            :label="item.id"
                            :key="item.id"
                        >
                        {{ $lang.baseText.TBCByCustomer }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <select-search :options="options" :search-load="searchLoad" @selectChange="selectChange" @inputEnter="inputEnter" />
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button  @click="toCompare">{{ $lang.baseText.compare }}</el-button>
                <el-button  @click="windowOpen('/negotiation/createInquiry')">{{ $lang.baseText.createNewInquiry }}</el-button>
                <el-button @click="cancelInquiry">{{ $lang.baseText.cancelTheInquiry }}</el-button>
                <el-button @click="deleteInquiry" type="danger">{{ $lang.baseText.delete }}</el-button>
            </div>
            <div class="viewBy">
                <span>{{ $lang.baseText.viewBy }}&nbsp;</span>
                <el-radio-group v-model="viewByStatus"  size="mini">
                    <el-radio-button label="0">{{$lang.baseText.inquiry}}</el-radio-button>
                    <el-radio-button label="1" >{{$lang.baseText.SKU}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <v-table :data="tabData" :data-key="tabColumn" :buttons="[{label: 'detail', type: 'detail'}]" @action="action" @page-change="pageChange" :loading="tabLoad" ref="tab"></v-table>
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param options 下拉框 原始数据 
    */
    import { selectSearch, VTable, dropDownSingle } from '@/components/index';
    export default {
        name:'',
        data() {
            return {
                searchLoad: false,
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
                }],
                tabColumn:'',
                tabData: [],
                viewByStatus: '',
                keyType: '',
                params: {
                    status: [],
                    keyType: '',
                    key: '',
                    ps: 10,
                    pn: 1
                },
                tabLoad:false
            }
        },
        components: {
            'select-search': selectSearch,
            'v-table': VTable,
            'drop-down-single': dropDownSingle
        },
        created() {
            this.viewByStatus = 0;
        },
        watch: {
            viewByStatus() {
                this.gettabData();
            },
            params: {
                handler(val, oldVal) {
                    this.gettabData();
                },
                deep: true
            }
        },
        methods: {
            selectChange(val) {
                this.keyType = val;
            },
            inputEnter(val) {
                if(!this.keyType) return this.$message('请选中搜索类型');
                if(!val) return this.$message('搜索内容不能为空');
                this.params.keyType = this.keyType;
                this.params.key = val;
                this.searchLoad = true;
            },
            gettabData() {
                let url = null,
                    tabColumn = null;
                this.tabLoad = true;
                if(this.viewByStatus + '' === '0') {
                    url = this.$apis.inquiry_list;
                    tabColumn = 'negotiation.tableViewByInquiry';
                } else {
                    url = this.$apis.inquiry_list_sku
                    tabColumn = 'negotiation.tableViewBySKU';
                };
                this.tabColumn = tabColumn;
                return this.tabData = [
                    {
                        "inquiryNo": 0,
                        "quotationNo": 0,
                        "sequence": 2,
                        "id": 2
                    },
                    {
                        "inquiryNo": 0,
                        "quotationNo": 0,
                        "sequence": 2,
                        "id": 3
                    }
                ]
                this.$ajax.get(url, this.params)
                .then(res => {
                    this.tabColumn = tabColumn;
                    this.tabData = res;
                    this.tabLoad = false;   
                    this.searchLoad = false; 
                });
            },
            cancelInquiry() { //取消询价单
                const argId = this.getChildrenTab('id');
                if(argId <= 0) return this.$message('请勾选询价单');
                this.$ajax.post(this.$apis.inquiry_cancel, {
                    id:argId
                })
                .then(res => {
                    
                });
            },
            deleteInquiry() { //删除询价单
                const argId = this.getChildrenTab('id');
                if(argId <= 0) return this.$message('请勾选询价单');
                this.$ajax.post(this.$apis.inquiry_delete, {
                    id: argId
                })
                .then(res => {
                    
                });
            },
            action(item, type) {
                switch(type) {
                    case 'detail':
                        this.detail(item);
                        break;
                }
            },
            detail(item) {
                this.$router.push({
                    path: '/negotiation/inquiryDetail',
                    query: {
                        id: item.id
                    }
                });
            },
            getChildrenTab(key) {
                let arr = [];
                this.$refs.tab.dataList.forEach(item => {
                    if(item._checked) arr.push(item[key]);
                });
                return arr;
            },
            toCompare() {
                let argId = this.getChildrenTab('id');
                if(argId.length < 2) return this.$message('请至少勾选两个以上');
                this.$router.push({
                    path: '/negotiation/compare',
                    query: {
                        id: argId
                    }
                })
            },
            pageChange(No) {
                console.log(No)
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
            .state {
                display:flex;
                align-items: center;
                font-size:16px;
                color:#666;
            }
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
