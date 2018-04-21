<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $i.baseText.compare }}</h3>
        
        <div>
            <el-form :inline="true" class="demo-form-inline" style="padding:0 0 0 20px;">
                <el-form-item label="Compare Name">
                    <el-input v-model="compareName" size="mini" :disabled="compareType === 'only'"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="fn">
            <div class="box-l">
                <el-button @click="addNewCopare">{{ $i.baseText.addNew }}</el-button>
                <el-button type="danger" @click="deleteCompare" :disabled="(tabData.length - checkedArg.length < 2) || checkedArg.length <= 0">{{ $i.baseText.delete }}</el-button>
                <el-checkbox-group v-model="ChildrenCheckList" size="mini">
                    <el-checkbox :label="0">{{ $i.baseText.hideTheSame }}</el-checkbox>
                    <el-checkbox :label="1">{{ $i.baseText.highlightTheDifferent }}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
                <span>{{ $i.baseText.compareBy }}&nbsp;</span>
                <el-radio-group v-model="compareBy"  size="mini">
                    <el-radio-button label="0">{{$i.baseText.inquiry}}</el-radio-button>
                    <el-radio-button label="1" >{{$i.baseText.SKU}}</el-radio-button>
                </el-radio-group>
            </div>
            <el-button type="text">Compare History</el-button>
        </div>
        <v-table 
            :data="tabData" 
            :data-key="tabColumn"
            :loading="tabLoad"
            @change-checked="changeChecked"
        />
        <el-button style="margin-top:10px;" type="primary" @click="onSubmit" v-show="compareType === 'new'">{{ $i.baseText.saveTheCompare }}</el-button>
        <el-button style="margin-top:10px;" type="danger" @click="onSubmit" v-show="compareType === 'only'">{{ $i.baseText.deleteTheCompare }}</el-button>
        <el-button style="margin-top:10px;" type="primary" @click="onSubmit" v-show="compareType === 'modify'">{{ $i.baseText.save }}</el-button>
        <el-button style="margin-top:10px;" type="info" @click="onSubmit" v-show="compareType === 'modify'">{{ $i.baseText.cancel }}</el-button>
    </div>
</template>
<script>
    import { VTable } from '@/components/index';
    export default {
        name:'compareOverview',
        data() {
            return {
                compareName: '',
                tabLoad: false,
                tabColumn: '',
                tabData: [],
                checkList: [],
                options:[{
                    label:'wwww.baidu.com',
                    id:'1'
                }],
                Filed:'',
                compareBy: "",
                ChildrenCheckList: '',
                checkedArg: [],
                compareType: '',
                compareId: '',
                params: {
                    ids: [],
                    ps: 10,
                    pn: 1
                }
            }
        },
        components: {
            "v-table": VTable
        },
        created() {
            this.compareBy = 0;
            if(this.$route.query.id) {
                this.params.ids = this.$route.query.id.split(',');
            }
            
            if(this.$sessionStore.get('$compare_id')) {
                this.compareId = this.$sessionStore.get('$compare_id');
            } else {
                this.compareId = this.$route.query.companyId;
            };
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
                if(this.$sessionStore.get('$compareType')) this.compareType = this.$sessionStore.get('$compareType');
                if(this.$sessionStore.get('$compareType') === 'new') {
                    this.getNewList();
                } else {
                    this.getCompareList();
                }
            },
            onSubmit() {
                let arr = [];
                this.tabData.forEach(item => {
                    arr.push(item.id.value)
                });
                if(!this.compareName) return this.$message({
                    message: '请填写Name',
                    type: 'warning'
                });
                this.$ajax.post(this.$apis.POST_INQUIRY_COMPARE, {
                    inquiryIds: arr,
                    compareName: this.compareName
                })
                .then(res => {
                    this.compareType = 'only';
                    this.$sessionStore.set('$compareType', 'only');
                    this.$sessionStore.set('$compare_id', res.id);
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
                this.$ajax.post(url, {
                    id: this.compareId
                })
                .then(res => {
                    this.tabData = this.$getDB(column, res.datas);
                    this.tabLoad = false;
                })
            },
            getNewList() {
                console.log(222, '222')
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
                    arr.push(item.id.value);
                });
                this.checkedArg = arr;
            },
            addNewCopare() {
                console.log(1)
            },
            deleteCompare() {
                if(this.compareType === 'new') {
                    this.checkedArg.forEach((item) => {
                        this.tabData.forEach((items, index) => {
                            if(item.value === items.id.value) this.tabData.splice(1, index);
                        });
                    });
                    return;
                }
                this.$ajax.delete(this.$apis.POST_INQUIRY_COMPARE, this.checkedArg)
                .then(res => {
                    console.log(res)
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
