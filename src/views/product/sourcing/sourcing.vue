<template>
    <div>
        <product
                :title="title"
                :type="type"
                :hideBtn="false"
                :disabledLine="disabledLine"
                @handleOK="getList"
                @handleCancel="handleCancel"></product>
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
                title:this.$i.product.title,
                type:'product',
                disabledLine:[3]
            }
        },
        methods:{
            getList(e){
                console.log(e)
            },
            handleCancel(){
                console.log(1)
            },
        }
    }
</script>
<style scoped>

</style>