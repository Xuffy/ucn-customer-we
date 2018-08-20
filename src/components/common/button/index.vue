<template>
    <el-button :disabled="disabled">
        <slot></slot>
    </el-button>
</template>

<script>
    export default {
        name: "dunning-button",
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            moduleCode:{
                type:String,
                default:''
            },
            id:{
                type:String,
                default:''
            },
            version:{
                type:String,
                default:''
            },
        },
        data(){
            return{

            }
        },
        methods:{

        },
    };
</script>

<style scoped>

</style>