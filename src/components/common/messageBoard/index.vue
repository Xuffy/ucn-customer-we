<template>
  <div class="messagelist">
     <div class="list">
        <div class="list_item" v-for="item in list" :key="item.id">
            <p class="list_item_title">
             <span>{{item.name}}</span>
             <span>{{item.time}}</span>
            </p>
            <p>
                {{item.content}}
                <img :src="item.src" v-if="item.src">
            </p>          
        </div>     
     </div>
     <div class="form">       
             <textarea              
                  class="text_enter"             
                  v-model="textarea">
            </textarea>
            <div class="upload_div">
                 <el-upload
                  :action="action"               
                  :accept="accept"
                  :maxsize='maxsize'  
                  :disabled='disabled'
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :before-upload="beforeAvatarUpload"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess"
                  multiple
                  >
                  <i class="el-icon-plus" style='fontSize:16px;'></i>
                </el-upload>
<!--
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
-->
            </div>
                  
     </div>
      <el-button type="primary" @click='sub'>submit</el-button>  
  </div>
</template>

<script>
    /*
                        具体后台返回数据，等结构出来再做更改
                                */
    import VUpload from '../upload/upload.vue'
    export default {
        name: 'messagelist',
        components: {
            VUpload
        },
        //传送的数据
        props: {
            list: {
                type: Array,
                default: function() {
                    return []
                }
            },
            // 文件地址
            action: {
                type: String,
                default: 'https://jsonplaceholder.typicode.com/posts/'
            },
            //默认大小2048
            maxsize: {
                type: Number,
                default: 2048
            },
            accept: {
                type: String,
                default: 'image/jpeg,image/jpg,image/png'
            },
            //禁止上传状态
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                textarea: '',
                isuploadsuccess: false, //upload拿到的上传成功值
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        watch: {

        },
        created() {

        },
        methods: {
            //提交 
            sub() {


            },
            //移除文件的钩子函数
            handleRemove(file, fileList) {
                //               console.log(file, fileList);
            },
            //上传文件之前的校验文件类型
            beforeAvatarUpload(file) {
                const isType = this.accept.indexOf(file.type) != -1;
                const isSize = file.size / 1024 / 1024 < this.maxsize;
                if (!isType) {
                    console.log('in')
                    this.$message.error('上传格式不对!');
                }
                if (!isSize) {
                    this.$message.error('上传头像图片大小不能超过 !' + this.maxsize);
                }
                return isType && isSize;
            },
            //上传成功的钩子函数
            handleSuccess(response, file, fileList) {
                //                console.log(response)
            },
            //点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
            handlePictureCardPreview(file) {

            }
        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .messagelist {
        border: 1px solid #BEBEBE;
        height: 100%;
        width: 100%;
        padding: 10px 0;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center
    }

    .list {
        height: 360px;
        width: 100%;
        font-size: 12PX;
        overflow: auto;
    }

    .list_item {
        padding: 10px
    }

    .list_item_title {
        display: flex;
        justify-content: space-between;
        color: #BEBEBE;
        font-size: 12px;
    }

    .list p {
        word-wrap: break-word;
        word-break: break-all;
    }

    .form {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        margin-top: 10px;
        border: 1px solid #BEBEBE;
    }

    .text_enter {
        width: 90%;
        height: 60px;
        border: 0;
        overflow: hidden;
        resize: none;
        margin: auto;
        margin-top: 10px;
    }

    .upload_div {
        margin-bottom: 10px;
        width: 90%;
    }

    .text_enter::-webkit-input-placeholder {
        padding-left: 10px;
        color: #BEBEBE
    }

    button {
        width: 40%;
        margin: auto;
        margin-top: 10px;
    }

    .messagelist_upload {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        margin-right: 5%;
    }

    >>>.el-upload--picture-card {
        width: 38px;
        height: 38px;
        line-height: 38px;
    }

    >>>.el-upload {
        width: 38px;
        height: 38px;
    }

    >>>.el-upload-list__item {
        width: 38px;
        height: 38px;
    }

    >>>.el-upload-list--picture-card .el-upload-list__item-actions span+span {
        margin-left: 0;

    }

    >>>.el-icon-zoom-in {
        display: none
    }

    >>>.el-icon-delete {}

</style>
