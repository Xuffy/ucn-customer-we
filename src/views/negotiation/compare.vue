<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $i.baseText.compare }}</h3>
        <div class="fn">
            <div class="box-l">
                <el-button @click="windowOpen('/order/creatOrder')">{{ $i.baseText.createOrder }}</el-button>
                <el-button>{{ $i.baseText.accept }}</el-button>
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
        />
        <div style="display:flex; justify-content: center; padding:10px 0;">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="Compare Name">
                    <el-input v-model="compareName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{ $i.baseText.saveTheCompare }}</el-button>
                    <!--deleteTheCompare-->
                </el-form-item>
            </el-form>
        </div>
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
                ChildrenCheckList: ''
            }
        },
        components: {
            "v-table": VTable
        },
        created() {
            this.compareBy = 0;
            
        },
        watch: {
            compareBy (newVal, oldVal) {
                this.getList(newVal);
            }
        },
        methods: {
            compareByChange(str) {
                this.compareBy = str;
            },
            onSubmit() {
                
            },
            getList(val) {
                let url, column;
                this.tabLoad = true;
                if(val + '' === '0') {
                    url = this.$apis.POST_INQIIRY_LIST;
                    column = this.$db.inquiryOverview.viewByInqury;
                } else {
                    url = this.$apis.POST_INQIIRY_LIST_SKU;
                    column = this.$db.inquiryOverview.viewBySKU;
                };
                this.$ajax.post(url, {
                    ids: this.$route.query.id.split(',')
                })
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
