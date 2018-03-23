<template>
    <div class="compare-list">
        <Icon class="icon" type="chevron-right"></Icon>
        <Tag class="tag" v-if="show" closable >标签三</Tag>
        <Tag class="tag" v-if="show" closable >标签三</Tag>
        <Button class="btn" type="primary" size="small">Go Compare</Button>
        <!--<i class="ivu-icon ivu-icon-checkmark"></i>-->
    </div>
</template>

<script>
    export default {
        name: "compare-list",
        data(){
            return{
                show:true,
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .compare-list{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2000;
        height: 35px;
        line-height: 35px;
        background: rgba(153, 153, 153, 0.447058823529412);
        padding-left: 50px;
    }
    .compare-list .icon{
        color:#999999;
        font-weight: bold;
        position: absolute;
        left: 20px;
        top:10px;
    }
    .compare-list .tag{
        margin-right: 20px;
    }
    .compare-list .btn{
        position: absolute;
        right: 0;
        top:5px;
    }
</style>