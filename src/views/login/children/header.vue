<template>
    <header>
        <div v-for="(item, index) in list" :key="item.id" :class="{'active':$route.name === item.name}">
            <span>{{index + 1}}</span>{{item.text}}
        </div>
    </header>
</template>
<script>
    export default {
        name: 'vheader',
        data() {
            return {

            }
        },
        props: {
            list: {
                type:Array,
                default:() => [{
                    text:'Input email',
                    name: 'inputEmail'
                },{
                    text:'Identify',
                    name: 'Identify'
                },{
                    text: 'Reset password',
                    name: 'ResetPassword'
                },{
                    text:'Finish',
                    name: 'Finish'
                }]
            }
        },
        created() {
            
        }
    }
</script>
<style lang="less" scoped>
    header {
        display:flex;
        justify-content: space-between;
        height: 50px;
        box-sizing: border-box;
        padding:10px;
        border-bottom:2px solid #ebebeb;
        div {
            position:relative;
            margin:0 10px;
            padding:0 10px;
            color:#999;
            display: flex;
            align-items: center;
            font-size:16px;
            &::after {
                position: absolute;
                left:0;
                bottom:-12px;
                content:' ';
                width:100%;
                height: 2px;
            }
            &.active {
                color:#108ee9;
                span {
                    background:#108ee9;
                }
                &::after {
                    background:#108ee9;
                }
            }
            span {
                display:flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;
                background:#999;
                color:#fff;
                border-radius: 50%;
                margin-right:10px;
                font-size:16px;
            }   
        }
    }
</style>

