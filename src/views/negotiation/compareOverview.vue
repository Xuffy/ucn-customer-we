<template>
    <div class="compare-overview">
        <h3 class="hd">Compare Overview</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button type="primary">Download Selected Compare</el-button>
                <el-button type="info">Delete</el-button>
            </div>
            <select-search :options="options" />
        </div>
        <!--from-->
    </div>
</template>
<script>
    import { selectSearch } from '@/components/index';
    export default {
        name:'',
        data() {
            return {
                options:[{
                    id:'1',
                    label:'dada'
                }]
            }
        },
        components: {
            'select-search':selectSearch
        },
        methods: {
            
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
