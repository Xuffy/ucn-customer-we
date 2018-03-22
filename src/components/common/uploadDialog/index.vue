<template>
  <div class='uploadDialog'>  
     <div class='address'>
         Address&nbsp :&nbsp 
         <upload></upload>
     </div>   
     <download class='download'></download>
     <div class="uploadDialog_text">
         <p>Operating Instructions:</p>
         <p>1.Please upload this files with the same format with our template.</p>
         <p>2.if you don't know what kind of files are acceptable,please download our template to instruct yourself.</p>
     </div>
  </div>
</template>

<script>
    import upload from '../upload/upload.vue'
    import download from './download.vue'
    export default {
        name: 'uploadDialog',
        components: {
            upload,
            download
        },
        data() {
            return {}
        },
        watch: {},
        created() {},
        methods: {}
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .uploadDialog {
        width: 400px;
        word-wrap: break-word;
        font-size: 13px;

    }

    .uploadDialog_text {
        margin-top: 20px;
    }

    .download {
        margin-top: 6px;
    }

    .address {
        display: flex;
        justify-content: flex-start;
        align-items: center
    }

</style>
