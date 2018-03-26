<template>
    <div class="compare-overview">
        <div class="title">
            Compare
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
            <!--<Button  class="title-btn" type="text">{{btnInfo}}</Button>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "compare",
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