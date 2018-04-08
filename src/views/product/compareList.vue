<template>
    <div class="compare-zone" v-if="config.showCompareList">
        <div class="compare-list" :class="{show:change}">
            <el-button @click="startCompare" class="btn" type="primary" size="mini">Go Compare</el-button>
            <el-tag
                    class="tag"
                    v-for="tag in tags"
                    :key="tag.name"
                    closable
                    :type="tag.type"
                    @close="handleClose(tag)">
                {{tag.name}}
            </el-tag>
            <!--<el-button @click="startCompare" class="btn" type="primary" size="mini">Go Compare</el-button>-->
        </div>
        <i @click="hideList" class="el-icon-d-arrow-right" :class="{iconShow:change}"></i>
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
                ],

                change:false,
            }
        },
        methods:{
            hideList(){
                // this.config.showCompareList=false;
                this.change=!this.change;
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
    .compare-zone{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2000;
        height: 40px;
        line-height: 40px;
        background: rgba(0, 0, 0, 0.6);
        padding-left: 40px;
        transition: all linear .3s;
    }
    .compare-list{
        transition: all linear .3s;
    }
    .show{
        transform: translateX(100%);
        transition: all linear .3s;
    }
    i{
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        bottom: 10px;
        right: 20px;
        transition: all linear .3s;
        cursor: pointer;
    }
    .iconShow{
        transform: rotate(180deg);
        transition: all linear .3s;
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
        float: left;
        margin-top: 6px;
        margin-right: 20px;
    }
    .compare-list .el-tag{
        background-color: #ffffff;
        color: #666666;
        border:1px solid #f4f4f4;
        margin-left: 10px;
    }
</style>