<template>
    <div>
        <!--<product-->
                <!--:title="title"-->
                <!--:type="type"></product>-->

        <overviewPage
                ref="HOME"
                :title="title"
                :form-column="formDatabase"></overviewPage>
    </div>
</template>
<script>
    import product from '../addProduct'
    import {overviewPage} from '@/components/index'
    export default {
        name:"sourcing",
        components:{
            product,
            overviewPage
        },
        data(){
            return{
                title:this.$i.product.title,
                type:'product',
                formDatabase:this.$db.product.overview
            }
        },
        methods:{

        },
        created(){

        },
        mounted(){

        },
    }
</script>
<style scoped>

</style>