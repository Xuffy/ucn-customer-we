<template>
    <div class="compare-overview">
        <div class="title">
            {{$t('product.page.compareOverview')}}
            <el-button type="primary" @click="$router.push('/product/compare/detail')">Compare</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "compareOverview",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .compare-overview{

    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .title-btn{
        float: right;
        margin-right: 5px;
    }
</style>