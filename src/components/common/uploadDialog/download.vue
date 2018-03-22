<template>
  <div class='download'>   
     <div>
         Template : 
         <span class="filename">我是文件格式的名字哈</span>
         <Icon type="ios-cloud-download" size='24' @click='download'></Icon>
     </div>
  </div>
</template>

<script>
    import upload from '../upload/upload.vue'
    export default {
        name: 'download',
        data() {
            return {

            }
        },
        watch: {

        },
        created() {

        },
        methods: {
            download() {}
        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .filename {
        text-decoration: underline;
        margin-right: 5px;
    }

</style>
