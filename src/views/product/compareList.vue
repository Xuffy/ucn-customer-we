<template>
    <div class="compare-list">
        <i class="el-icon-d-arrow-right"></i>
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
            {{tag.name}}
        </el-tag>
        <el-button class="btn" type="primary" size="mini">Go Compare</el-button>
        <!--<Button class="btn" type="primary" size="small">Go Compare</Button>-->
        <!--<i class="ivu-icon ivu-icon-checkmark"></i>-->
    </div>
</template>

<script>
    export default {
        name: "compare-list",
        data(){
            return{
                show:true,
                tags: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: '' },
                    { name: '标签三', type: '' },
                    { name: '标签四', type: '' },
                    { name: '标签五', type: '' }
                ]
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
    /*.compare-list .icon{*/
        /*color:#999999;*/
        /*font-weight: bold;*/
        /*position: absolute;*/
        /*left: 20px;*/
        /*top:10px;*/
    /*}*/
    /*.compare-list .tag{*/
        /*margin-right: 20px;*/
    /*}*/
    .compare-list .btn{
        float: right;
        margin-top: 3px;
        margin-right: 20px;
    }
    .compare-list .el-tag{
        background-color: #f4f4f4;
        color: #666666;
        border:1px solid #f4f4f4;
        margin-left: 10px;
    }
</style>