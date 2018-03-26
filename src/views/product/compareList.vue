<template>
    <div v-if="config.showCompareList" class="compare-list">
        <i @click="hideList" class="el-icon-d-arrow-right"></i>
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type"
                @close="handleClose(tag)">
            {{tag.name}}
        </el-tag>
        <el-button @click="startCompare" class="btn" type="primary" size="mini">Go Compare</el-button>
    </div>
</template>

<script>


    /** CompareList
     *  author LiuSx
     *  Time 2018-03-26
     *  @param { config }  -组件配置
     *
     *  {
     *      showCompareList:false,          //是否显示对比列表，默认为false
     *  }
     *
     *  @param { tags }  -对比列表的内容
     *
     * */


    export default {
        name: "compare-list",
        props:{
            config:{
                type:Object,
                default:{
                    showCompareList:false
                }
            }
        },
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
            hideList(){
                this.config.showCompareList=false;
            },

            //前往比较页面开始比较
            startCompare(){
                this.$router.push('/product/compare');
            },

            //删除所选中的项
            handleClose(tag){
                this.tags.splice(this.tags.indexOf(tag), 1);
            },
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
        margin-top: 4px;
        margin-right: 20px;
    }
    .compare-list .el-tag{
        background-color: #f4f4f4;
        color: #666666;
        border:1px solid #f4f4f4;
        margin-left: 10px;
    }
</style>