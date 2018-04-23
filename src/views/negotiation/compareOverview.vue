<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $i.baseText.compareOverview }}</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button>{{ $i.baseText.downloadSelectedCompare }}</el-button>
                <el-button type="danger" @click="compareDelete" :disabled="checkedArg.length <= 0">{{ $i.baseText.delete }}</el-button>
            </div>
            <select-search :options="options" @inputChange="searchEnter" />
        </div>
        <v-table 
            :data="tabData" 
            :loading="tabLoad"
            :buttons="[{label: 'Modify', type: 'modify'}, {label: 'Detail', type: 'detail'}]" 
            @action="action"
            @change-checked="changeChecked"
        />
    </div>
</template>
<script>
    import { VTable, selectSearch } from '@/components/index';
    export default {
        name:'',
        data() {
            return {
                checkedArg: [],
                tabData: [],
                options:[{
                    id:'1',
                    label:'Compare Name'
                }, {
                    id: '2',
                    label: 'Compare Item'
                }],
                bodyData: {
                    key: '',
                    keyType: '',
                    // operatorFilters: { //筛选条件
                    //     columnName: '',
                    //     operator: '',
                    //     property: '',
                    //     resultMapId: '',
                    //     value: {}
                    // },
                    ps: 10,
                    pn: 1,
                    recycle: 0,
                    // sorts: [
                    //     {
                    //         nativeSql: true,
                    //         orderBy: "string",
                    //         orderType: "string",
                    //         resultMapId: "string"
                    //     }
                    // ]
                },
                tabLoad: false
            }
        },
        components: {
            'select-search':selectSearch,
            'v-table': VTable
        },
        methods: {
            getList() { //获取Compare 列表
                this.tabLoad = true;
                this.$ajax.post(this.$apis.POST_INQIIRY_COMPARE_LIST, this.bodyData)
                .then(res => {
                    let data = res.datas;
                    this.tabLoad = false;
                    data.forEach(item => {
                        item.updateDt ? item.updateDt = this.$dateFormat(data.updateDt, 'yyyy-mm-dd') : '';
                    });
                    this.tabData = this.$getDB(this.$db.inquiryOverview.compare, data);
                });
            },
            searchEnter(item) { // 搜索框
                this.bodyData.key = item.key;
                this.bodyData.keyType = item.keyType;
            },
            action(item, type) { //操作表单 action
                if(type === 'detail') {
                    this.$sessionStore.set('$compareType', 'only');
                } else {
                    this.$sessionStore.set('$compareType', 'modify');
                }
                this.$sessionStore.remove('$compare_id');
                this.$router.push({
                    path: '/negotiation/compareDetail',
                    query: {
                        compareId: item.id.value
                    }
                });
            },
            changeChecked(item) { //选中的compare
                let arr = [];
                item.forEach(item => {
                    arr.push(item.id.value);
                });
                this.checkedArg = arr;
            },
            compareDelete() { //删除compare
                let arr = [24, 25];
                
                this.tabData.forEach(item => {
                    console.log(item)
                }); 
                return;
                this.$ajax.post(this.$apis.POST_INQUIRY_COMPARE_DELETE, this.checkedArg)
                .then(res => {
                    
                })
            }
        },
        watch: {
            bodyData: {
                handler(val) {
                    this.getList();
                },
                deep: true
            }
        },
        created() {
            this.getList();
        }
    }
</script>
<style lang="less" scoped>
    .compare-overview{
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
        }
         .status {
            display:flex;
            height: 60px;
            box-sizing: border-box;
            padding-left:25px;
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
        }
    }
</style>
