<template>
    <section class="forget-password">
        <div class="container">
            <v-header />
            <router-view />
        </div>
    </section>
</template>
<script>
    import header from './children/header';
    export default {
        name:'forgetPassword',
        components: {
            'v-header':header
        }
    }   
</script>
<style lang="less" scoped>
    .forget-password {
        position: relative;
        background:#f4f4f4;
        height: 100vh;
        .container {
            position: absolute;
            left:0;
            top:0;
            bottom:0;
            right:0;
            margin:auto;
            display:flex;
            flex-direction: column;
            width: 80vw;
            height: 80vh;
            min-width:500px;
            min-height:600px;
            background:#fff;
            padding:20px;
            box-sizing: border-box;
        }
    }
</style>
