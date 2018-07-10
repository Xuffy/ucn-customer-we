<template>
    <div class="overview">
        <div class="title">
            <span>{{title}}</span>
            <el-button class="title-btn"
                       v-if="showAdvancedBtn"
                       @click="hideBody = !hideBody"
                       type="text">{{hideBody?$i.product.advanced:$i.product.hideTheAdvanced}}
            </el-button>
        </div>
        <div class="search-option">
            <el-form label-width="190px">
                <el-row>
                    <el-col v-for="v in formColumn" :key="v.key" v-if="v._isDefaultShow"  :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <div v-if="v.type==='dropdown'">
                                <drop-down-single
                                        class="speLine"
                                        v-model="formData[v.key]"
                                        :list="v._list"
                                        :defaultProps="v._defaultProps"
                                        :expandOnClickNode="false">
                                </drop-down-single>
                            </div>
                            <div v-else-if="v.type==='select'">
                                <el-select class="speLine"
                                           v-model="formData[v.key]"
                                           :placeholder="$i.product.pleaseChoose">
                                    <el-option
                                            v-for="item in v._options"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else>
                                <el-input
                                        class="speLine"
                                        v-model="formData[v.key]"
                                        :placeholder="$i.product.pleaseInput"></el-input>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-form class="body" :class="{hide:hideBody}" label-width="190px">
                <el-row>
                    <el-col v-for="v in formColumn" :key="v.key" v-if="!v._isDefaultShow"  :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <div v-if="v.type==='dropdown'">
                                <drop-down-single
                                        class="speLine"
                                        v-model="formData[v.key]"
                                        :list="v._list"
                                        :defaultProps="v._defaultProps"
                                        :expandOnClickNode="false">
                                </drop-down-single>
                            </div>
                            <div v-else-if="v.type==='select'">
                                <el-select class="speLine"
                                           v-model="formData[v.key]"
                                           :placeholder="$i.product.pleaseChoose">
                                    <el-option
                                            v-for="item in v._options"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.type==='between'">
                                <between class="speLine"
                                         :form="formData"
                                         :between-key="v.betweenKey"></between>
                            </div>
                            <div v-else>
                                <el-input
                                        class="speLine"
                                        v-model="formData[v.key]"
                                        :placeholder="$i.product.pleaseInput"></el-input>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="search-btn">
            <el-button @click="search">搜索</el-button>
        </div>
    </div>
</template>

<script>
    import dropDownSingle from '../fnCompon/dropDownSingle'
    import between from './betweenNumber'

    import {VPagination} from '@/components/index'

    export default {
        name: "overview",
        components:{
            dropDownSingle,
            between
        },
        props:{
            title:{
                type:String,
            },
            formColumn:{
                type:Object,
            },
        },
        data(){
            return{
                hideBody:true,
                formData:{},
                dictionary:[],
                showAdvancedBtn:false,      //是否要显示高级按钮
            }
        },
        methods:{
            init(){
                //处理初始化数据
                let queryCode=[];
                _.map(this.formColumn,v=>{
                    if(v.selectCode){
                        queryCode.push(v.selectCode);
                    }
                    if(v._isDefaultShow){
                        this.showAdvancedBtn=true;
                    }
                });
                this.getUnit(queryCode).then(res=>{
                    console.log(res,'一个单位')
                    let dictionary=res;
                    _.map(this.formColumn,v=>{
                        if(v.type==='dropdown'){
                            if(v.dropDownType==='category'){
                                let list=[
                                    {
                                        id: 5125125,
                                        name: this.$i.product.myCategory,
                                        children: [],
                                        _disableClick:true,
                                    },
                                    {
                                        id: 12312512,
                                        name: this.$i.product.sysCategory,
                                        children: [],
                                        _disableClick:true,
                                    },
                                ];
                                this.getCategory().then(res=>{
                                    list[0].children=res[0];
                                    list[1].children=res[1];
                                    v._list=list;
                                });
                            }
                        }else if(v.type==='select'){
                            v._options=_.findWhere(dictionary,{code:v.selectCode}).codes;
                        }
                    })

                }).catch(()=>{

                });




            },

            getCategory(){
                const myCategory=this.$ajax.get(this.$apis.get_buyer_sys_category, {});
                const sysCategory=this.$ajax.get(this.$apis.get_buyer_my_category, {});
                return this.$ajax.all([myCategory,sysCategory]).then(res=>{
                    return res;
                }).catch(err=>{

                })
            },
            getUnit(codes){
                this.$ajax.get(this.$apis.get_allUnit).then(res=>{
                    console.log(res,'单位')
                });
                return this.$ajax.post(this.$apis.get_partUnit,codes,{cache:true});
            },


            /**
             *  一些事件
             * */
            search(){
                console.log(this.formData,'formData')
            },


        },
        created(){
            this.init();
        },
        mounted(){
            // console.log(this.formColumn,'formColumn')
        }
    };
</script>

<style scoped>
    .title {
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color: #666666;
        margin-bottom: 5px;
    }
    .title-btn {
        float: right;
        margin-right: 5px;
    }
    .body {
        overflow: hidden;
        max-height: 320px;
        display: block;
        transition: max-height .5s cubic-bezier(.445, .05, .55, .95);
    }
    .hide {
        max-height: 0;
    }
    .speLine{
        width: 80% !important;
    }

    .search-btn{
        text-align: center;
    }
</style>