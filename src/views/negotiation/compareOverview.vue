<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $t('negotiation.text.compareOverview') }}</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button>{{ $t('negotiation.text.downloadSelectedCompare') }}</el-button>
                <el-button type="danger">{{ $t('negotiation.text.delete') }}</el-button>
            </div>
            <select-search :options="options" />
        </div>
        <v-table 
            :data="tabData" 
            :data-key="tabColumn"
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
                    label:'dada'
                }]
            }
        },
        components: {
            'select-search':selectSearch,
            'v-table': VTable
        },
        methods: {
            
        },
        created() {
            this.ajax({
                url: '/tableCompareOverview',
                method: 'get'
            }).then(res => {
                this.tabData = res;
                this.tabColumn = 'negotiation.tableCompareOverview';
            });
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
