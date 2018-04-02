<template>
    <div>
        <product :hideBtns="true" :showRecover="true"></product>
    </div>
</template>

<script>

    import product from '../../../views/product/addProduct'

    export default {
        name: "recycle-bin",
        components:{
            product
        },
        data(){
            return{

            }
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>