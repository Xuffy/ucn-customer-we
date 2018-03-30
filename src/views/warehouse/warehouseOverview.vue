<template>
    <div class="warehouse">
        <div class="title">
            {{$t('product.page.warehouseOverview')}}
        </div>
        <el-button @click="toDetail" type="primary">QC Order Detail</el-button>
        <el-button @click="$router.push('/warehouse/createQc')" type="primary">Create Qc Order</el-button>
    </div>
</template>
<script>
    export default {
        name:'warehouse',
        data(){
            return{

            }
        },
        methods:{
            toDetail(){
                window.open('http://192.168.51.229:8080/#/warehouse/qcDetail');
            },
        }
    }
</script>
<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
</style>