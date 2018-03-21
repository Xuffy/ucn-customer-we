<template>
    <div class="log-message">
        <div class="log-head">
            <Button v-if="btnInfo" type="primary" @click="handleClick">{{btnInfo}}</Button>
            <Input class="log-input"
                   v-model="value"
                   icon="search"
                   placeholder="Please input key word to search."
                   @on-click="search"
                   @on-enter="search"
                   style="width: 250px"></Input>
            <div style="clear:both;"></div>
        </div>
        <div class="log-body">
            <div>
                <Table ref="selection"
                       :columns="head"
                       :data="data"
                       @on-select="select"
                       @on-select-all="select"
                       @on-select-cancel="select"></Table>
                <br>
                <Page :total="100" show-sizer show-elevator></Page>
            </div>
        </div>
    </div>
</template>

<script>
    /** logMessage
     *  author LiuSx
     *  Time 2018-03-20
     *  @param { btnInfo }  -按钮文字信息
     *  @param { value }  -搜索框搜索内容
     *  @param { head }  -外部传入的表格头部文字显示
     *  @param { data }  -外部传入的表格
     *  @param { columnsConfig }  -最终表格头部显示配置
     *  @param { selectGroup }  -表格中选中的项数组(如果有多选)
     *  @param { @handleClick }  -按钮点击事件
     *  @param { @search }  -搜索框模糊查询方法，点击右侧图标或者回车触发
     *
     *
     *  <v-logs :head="headConfig"
     *       :data="dataList"
     *       :btnInfo="btnInfo"
     *       @btnClick="mark"
     *       @search="handleSearch"></v-logs>
     *
     *  @param { head }  -表格头部文字配置
     *  @param { data }  -表格展示数据
     *  @param { btnInfo }  -按钮显示文字，不需要按钮则不传或者传空或者不写
     *  @param { @btnClick }  -按钮点击事件，没有按钮可以不写
     *  @param { @search }  -模糊查询事件
     *
     *
     *
     *  headConfig=[
             {
                 title:'Message Type',
                 key:'messageType',
                 align: 'center'
             },
             {
                 title:'Notification Method',
                 key:'notificationMethod',
                 align: 'center',
                 render:(h, params) => {
                     return h('div', [
                         h('Checkbox',{
                             props:{
                                 value:params.row.isSelected
                             },
                             on:{
                                 input:()=>{
                                     console.log(params.row,"????")
                                 }
                             }
                         },'Email'),
                         h('Checkbox',{
                             props:{
                                 disabled:true,
                                 value:true
                             },
                             on: {
                                 input:function (val) {
                                     //val为当前checkbox的值
                                     // console.log(params,"????")
                                     console.log(val,'xxxxx')
                                 }
                             },

                         },'Platform')
                     ]);
                 }
             },
         ];
     *
     *
     *
     *
     *
     *
     *
     * */

    export default {
        name: "log-message",
        props:{
            head:{
                type:Array,
                default(){
                    return [];
                }
            },
            data:{
                type:Array,
                default(){
                    return [];
                }
            },
            hasSelectAll:{
                type:Boolean,

            },
            btnInfo:{
                type:String,
                default:''
            }

        },
        data(){
            return{
                value:'',
                columnsConfig: [
                    // {
                    //     type: 'selection',
                    //     width: 60,
                    //     align: 'center'
                    // },
                    // {
                    //     title: 'Name',
                    //     key: 'name'
                    // },
                    // {
                    //     title: 'Age',
                    //     key: 'age'
                    // },
                    // {
                    //     title: 'Address',
                    //     key: 'address'
                    // },
                    // {
                    //     title: 'TestRender',
                    //     key: 'testRender',
                    //     render:(h, params) => {
                    //         return h('div', [
                    //             h('Checkbox',{
                    //                 props:{
                    //
                    //                 },
                    //                 on:{
                    //                     input:()=>{
                    //                         console.log(params.row,"????")
                    //                     }
                    //                 }
                    //             },'Email'),
                    //             h('Checkbox',{
                    //                 props:{
                    //                     // disabled:true,
                    //                 },
                    //                 on: {
                    //                     input:function (val) {
                    //                         //val为当前checkbox的值
                    //                         // console.log(params,"????")
                    //                         console.log(val,'xxxxx')
                    //                     }
                    //                 }
                    //             },'Platform')
                    //         ]);
                    //     }
                    // },
                ],
                selectGroup:[]
            }
        },
        methods:{
            //input框模糊查询
            search(){
                this.$emit('search');
            },

            //按钮点击事件处理(如果有按钮的话)
            handleClick(){
                this.$emit('btnClick',this.selectGroup);
            },

            //单选，多选，取消选择
            select(selection){
                this.selectGroup=selection;
            },
        },
        created(){
            const me=this;
            /*
            *  生成head
            * */
            // if(me.hasSelectAll){
            //     me.columnsConfig.push({
            //         type: 'selection',
            //         width: 60,
            //         align: 'center'
            //     });
            // }

            _.map(me.head,v=>{
                me.columnsConfig.push({
                    title:v,
                    key:v
                });
            });

        },
        watch:{
            hasSelectAll(n){
                console.log(n)
                if(n){
                    this.columnsConfig.unshift({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    });
                }else{
                    this.columnsConfig.shift(1);
                }
            },
            head(n){
                this.columnsConfig=[];
                _.map(n,v=>{
                    this.columnsConfig.push({
                        title:v,
                        key:v
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .log-message{
        padding: 5px 12px;
    }
    .log-input{
        float: right;
    }
    .log-body{
        margin-top: 15px;
    }
</style>