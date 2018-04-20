<template>
    <div class="compare-zone" :class="{isTransparent:change}">
        <div class="compare-list" :class="{show:change}">
            <el-button :disabled="disabledBtn" @click="startCompare" class="btn" type="primary" size="mini">Go Compare ({{data.length}})</el-button>
            <el-tag
                    class="tag"
                    v-for="tag in data"
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
     *
     *  @param { tags }  -对比列表的内容
     *
     * */


    export default {
        name: "compare-list",
        props:{
            data:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                show:true,
                tags: [],
                change:false,
                disabledBtn:true,              //是否能点击compare按钮
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
                this.$emit('closeTag',tag);
            },
        },
        created(){
            if(this.data.length>=2){
                this.disabledBtn=false;
            }else{
                this.disabledBtn=true;
            }
        },
        watch:{
            data(n){
                if(n.length>=2){
                    this.disabledBtn=false;
                }else{
                    this.disabledBtn=true;
                }
            }
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
        transition: all linear .3s;
        background: rgba(0, 0, 0, 0.6);
    }
    .isTransparent{
        background: transparent !important;
    }
    .compare-list{
        margin-left: 40px;
        transition: all linear .3s;
    }
    .show{
        transform: translateX(110%);
        transition: all linear .3s;
        /*background: red;*/
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
        color:#636363;
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