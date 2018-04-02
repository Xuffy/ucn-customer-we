<template>
    <div class="attchment">
    <div class="attchment_content">
        <span class='attchment_item'>
            <span class="attchment_item_name">
                 <i class="el-icon-document"></i>
                 <p>1234568</p>
            </span>       
             <i class="el-icon-remove" @click='deleteFile'></i>
        </span>      
    </div>
     <upload class='upload' @uploadsuccess='uploadsuccess'></upload>
    </div>
</template>
<script>
    import upload from '@/components/common/upload/upload.vue'
    export default {
        name: "attchment",
        props: {
            //....attchment的数据
            list: {
                type: Array,
                default: function(){
                    return []
                }
            }
        },
        components:{
            upload
        },
        data(){
            return{

            }
        },
        methods:{
            deleteFile(){
                
            },
            uploadsuccess(data){
              this.$emit('uploadsuccess',data)  //上传成功一层一层通知父组件
            }
        }
    }
</script>
<style scoped="true">
    .attchment{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 500px;
    }
    .attchment_content{
        width: 450px;
        height:86px;
        border: 1px solid #BEBEBE;
        overflow:auto;
        display: flex;
        flex-wrap: wrap;
    }
    .el-icon-document{
      font-size: 40px;
    }
    .attchment_item{
        height:40px;
        display: flex;
        justify-content: flex-start;
        padding: 4px;
        margin-right: 10px;
    }
    .attchment_item_name{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .upload{
        margin-left: 10px;
    }
</style>