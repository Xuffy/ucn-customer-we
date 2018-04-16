<template>
    <div>
        <product :title="title"></product>
    </div>
</template>
<script>

    import product from '../addProduct'
    console.log('sourcing')
    export default {
        name:"sourcing",
        components:{
            product
        },
        data(){
            return{
                title:'哇哈哈'
            }
        },
        methods:{

        }
    }
</script>
<style scoped>

</style>