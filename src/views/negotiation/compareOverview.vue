<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $i.baseText.compareOverview }}</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button>{{ $i.baseText.downloadSelectedCompare }}</el-button>
                <el-button type="danger">{{ $i.baseText.delete }}</el-button>
            </div>
            <select-search :options="options" @inputChange="searchEnter" />
        </div>
        <v-table 
            :data="tabData" 
            :data-key="tabColumn"
            :loading="tabLoad" 
        />
    </div>
</template>
<script>
    import { VTable, selectSearch } from '@/components/index';
    export default {
        name:'',
        data() {
            return {
                tabColumn: '',
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
                    sorts: [
                        {
                            nativeSql: true,
                            orderBy: "string",
                            orderType: "string",
                            resultMapId: "string"
                        }
                    ]
                },
                tabLoad: false
            }
        },
        components: {
            'select-search':selectSearch,
            'v-table': VTable
        },
        methods: {
            getList() {
                this.tabLoad = true;
                this.$ajax.post(this.$apis.POST_INQIIRY_COMPARE_LIST, this.bodyData)
                .then(res => {
                    this.tabLoad = false;
                    console.log(res)
                });
            },
            searchEnter(item) {
                this.bodyData.key = item.key;
                this.bodyData.keyType = item.keyType;
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
