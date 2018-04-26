<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $i._baseText.compare }}</h3>
        <div>
            <el-form :inline="true" class="demo-form-inline" style="padding:0 0 0 20px;">
                <el-form-item label="Compare Name">
                    <el-input v-model="compareName" size="mini" :disabled="compareType  === 'only'"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="fn">
            <div class="box-l">
                <el-button type="primary" @click="compareType  = 'modify'" v-show="compareType  === 'only'">{{ $i._baseText.modify }}</el-button>
                <el-button @click="addNewCopare" v-if="compareType  !== 'only'">{{ $i._baseText.addNew }}</el-button>
                <el-button type="danger" v-if="compareType  !== 'only'" @click="deleteCompare" :disabled="(tabData.length - checkedArg.length < 2) || checkedArg.length <= 0">{{ `${$i._baseText.delete}(${checkedArg.length})` }}</el-button>
                <el-checkbox-group v-model="ChildrenCheckList" size="mini">
                    <el-checkbox :label="0">{{ $i._baseText.hideTheSame }}</el-checkbox>
                    <el-checkbox :label="1">{{ $i._baseText.highlightTheDifferent }}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
                <span>{{ $i._baseText.compareBy }}&nbsp;</span>
                <el-radio-group v-model="compareBy"  size="mini">
                    <el-radio-button label="0">{{$i._baseText.inquiry}}</el-radio-button>
                    <el-radio-button label="1" >{{$i._baseText.SKU}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <v-table 
            :data="tabData" 
            :loading="tabLoad"
            @change-checked="changeChecked"
            :buttons="[{label: 'detail', type: 'detail'}]" 
            @action="action" 
        />
        <el-button style="margin-top:10px;" type="primary" @click="onSubmit" v-show="compareType === 'new'">{{ $i._baseText.saveTheCompare }}</el-button>
        <el-button style="margin-top:10px;" type="danger" @click="deleteCompare('all')" v-show="compareType === 'only'">{{ $i._baseText.deleteTheCompare }}</el-button>
        <el-button style="margin-top:10px;" type="primary" @click="onSubmit('save')" v-show="compareType === 'modify'">{{ $i._baseText.save }}</el-button>
        <el-button style="margin-top:10px;" type="info" @click="cancel" v-show="compareType === 'modify'">{{ $i._baseText.cancel }}</el-button>
        <add-new-inqury v-model="addNew" @addInquiry="addCopare" :arg-disabled="argDisabled" :compareId="params.id || null" :disableds="disableds" />
    </div>
</template>
<script>
    import { VTable, dropDownSingle, addNewInqury } from '@/components/index';
    export default {
        name:'compareOverview',
        data() {
            return {
                addNew: false,
                compareName: '',
                tabLoad: false,
                tabData: [],
                options:[{
                    label:'wwww.baidu.com',
                    id:'1'
                }],
                Filed:'',
                compareBy: "",
                ChildrenCheckList: '',
                checkedArg: [],
                compareType: '',
                params: {
                    ps: 10,
                    pn: 1,
                    recycleCustomer: 0
                },
                argDisabled: [],
                disableds: []
            }
        },
        components: {
            "v-table": VTable,
            "add-new-inqury": addNewInqury,
            dropDownSingle
        },
        created() {
            this.compareBy = 0;
            if(this.$route.query.ids) {
                this.params.ids = this.$route.query.ids.split(',');
            } else if(this.$route.query.id) {
                this.params.id = this.$route.query.id;
            };
            this.$route.params.type ? this.compareType = this.$route.params.type : '';
            this.$nextTick(() => {
                this.$windowOpen({
                    url: '/negotiation/compareDetail/{type}',
                    params: {
                        type: 'only',
                        id: '666',
                        cd: '777'
                    }
                })
            })
        },
        watch: {
            compareBy () {
                this.upData();
            },
            params(val) {
                this.upData();
            }
        },
        methods: {
            compareByChange(str) {
                this.compareBy = str;
            },
            upData() {
                if(this.$route.query.ids) {
                    this.getNewList();
                } else {
                    this.getCompareList();
                }
            },
            cancel() {
                this.tabData.forEach((items, index) => {
                    delete items._disabled;
                    this.$set(this.tabData, index, items);
                });
                this.compareType = 'only';
            },
            onSubmit(type) { //保存Compare 
                let arr = [];
                this.tabData.forEach(item => {
                    if(!item._disabled) arr.push(_.findWhere(item, {'key': 'id'}).value)
                });

                if(!this.compareName) return this.$message({
                    message: '请填写Name',
                    type: 'warning'
                });
                
                this.$confirm('此操作将会保存编辑是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$ajax.post(this.$apis.POST_INQUIRY_COMPARE_RS, {
                        inquiryIds: arr,
                        id:this.$route.query.id,
                        compareName: this.compareName
                    })
                    .then(res => {
                        if(type === 'save') return this.compareType = 'only';
                        this.$router.push({
                            name: 'inquiryCompareDetail',
                            params: {
                                type: 'only'
                            },
                            query: {
                                id: res.id
                            }
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
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
                        id: _.findWhere(item, { 'key': 'id' }).value
                    }
                });
            },
            getCompareList() {
                let url, column;
                this.tabLoad = true;
                if(this.compareBy + '' === '0') {
                    url = this.$apis.POST_INQUIRY_COMPARE;
                    column = this.$db.inquiryOverview.viewByInqury;
                } else {
                    url = this.$apis.POST_INQUIRY_SKU;
                    column = this.$db.inquiryOverview.viewBySKU;
                };

                this.$ajax.post(url, this.params)
                .then(res => {
                    this.compareName = res.appendant.compareName;
                    this.tabData = this.$getDB(column, res.datas);
                    this.tabLoad = false;
                })
            },
            getNewList() {
                let url, column;
                this.tabLoad = true;
                if(this.compareBy + '' === '0') {
                    url = this.$apis.POST_INQIIRY_LIST;
                    column = this.$db.inquiryOverview.viewByInqury;
                } else {
                    url = this.$apis.POST_INQIIRY_LIST_SKU;
                    column = this.$db.inquiryOverview.viewBySKU;
                };
                this.$ajax.post(url, this.params)
                .then(res => {
                    this.pageTotal = res.tc;
                    this.tabData = this.$getDB(column, res.datas);
                    this.tabLoad = false;   
                    this.searchLoad = false; 
                })
                .catch(() => {
                    this.searchLoad = false; 
                    this.tabLoad = false;
                })
            },
            changeChecked(item) {
                let arr = [];
                item.forEach(item => {
                    if(!item._disabled) arr.push(_.findWhere(item, {'key': 'id'}));
                });
                this.checkedArg = arr;
            },
            addNewCopare() {
                this.addNew = true;
                this.argDisabled = this.mapTabData(true);
                this.disableds = this.mapTabData(false);
            },
            deleteCompare(type) { //删除
                if(type === 'all') {
                    this.$confirm('此操作将删除对比, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$ajax.post(this.$apis.POST_INQUIRY_COMPARE_DELETE, [this.$route.query.id])
                        .then(res => {
                            this.$router.push('/negotiation/compare')
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                } else {
                    _.map(this.tabData, (items, index) => {
                        if(items._checked) {
                            items._disabled = true;
                            this.$set(this.tabData, index, items);
                        }
                    });
                    this.checkedArg = [];
                };
            },
            mapTabData(type) {
                let arr = [];
                _.map(this.tabData, item => {
                    if(type) {
                        if(!item._disabled) arr.push(_.findWhere(item, {'key': 'id'}).value);
                    } else {
                        if(item._disabled) arr.push(_.findWhere(item, {'key': 'id'}).value);
                    }
                });
                return arr;
            },
            addCopare(arg) { //add new compare
                if(!arg.length) return this.$message('请先选择inquiry');
                this.$ajax.post(this.$apis.POST_INQIIRY_LIST, {
                    recycleCustomer:0,
                    ids: arg
                })
                .then(res => {
                    let data = this.$getDB(this.$db.inquiryOverview.viewByInqury, res.datas);
                    data = data.concat(this.tabData);
                    this.tabData = data;
                    this.addNew = false;
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .compare-overview {
        .hd {
            height:50px;
            line-height:50px;
            color:#666;
            padding:0 20px;
        }
        .fn {
            display:flex;
            flex-wrap:wrap;
            align-items: center;
            justify-content:space-between;
            padding:0 20px;
            .box-l {
                display:flex;
                align-items: center;
                margin:10px 0;
            }
            span {
                font-size:12px;
                color:#999;
            }
            .filedSelect {
                margin-left:10px;
            }
        }
    }
</style>
