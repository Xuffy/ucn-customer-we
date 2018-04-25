<template>
  <div class="ucn-message-board">
    <div>

    </div>

    <div class="message-box list">
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
    <div class="form-box">
      <div class="form">
        <el-input type="textarea" v-model="textarea"></el-input>
        <br/>
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
      <div class="btn-box">
        <el-button type="primary" @click='sub'>submit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  /*
                      具体后台返回数据，等结构出来再做更改
                              */
  import VUpload from '../upload/upload.vue'

  export default {
    name: 'VMessageBoard',
    components: {
      VUpload
    },
    //传送的数据
    props: {
      list: {
        type: Array,
        default: function () {
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
    watch: {},
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
  .ucn-message-board {
    /*border: 1px solid #BEBEBE;*/
    height: 100%;
    width: 100%;
    padding: 10px;
    /*border-radius: 5px;*/
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message-box {
    height: 75%;
    width: 100%;
    overflow: auto;
    background-color: rgba(245, 245, 245, .3);
  }

  .form-box {
    width: 100%;
  }

  .btn-box {
    width: 100%;
    text-align: right;
  }

  .list {
    font-size: 12PX;
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

  .form-box .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-top: 10px;
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
    width: 100%;
  }

  .text_enter::-webkit-input-placeholder {
    padding-left: 10px;
    color: #BEBEBE
  }

 /* button {
    width: 40%;
    margin: auto;
    margin-top: 10px;
  }*/

  .messagelist_upload {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 5%;
  }


</style>
<style>
  .ucn-message-board .el-upload--picture-card {
    width: 38px;
    height: 38px;
    line-height: 38px;
  }

  .ucn-message-board .el-upload {
    width: 38px;
    height: 38px;
  }

  .ucn-message-board .el-upload-list__item {
    width: 38px;
    height: 38px;
  }

  .ucn-message-board .el-upload-list--picture-card .el-upload-list__item-actions span + span {
    margin-left: 0;

  }

  .ucn-message-board .el-icon-zoom-in {
    display: none
  }

  .ucn-message-board .el-icon-delete {
  }

  .ucn-message-board textarea {
    resize: none;
    min-height: 100px !important;
    transition: all .5s;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    border: 1px solid rgba(220, 220, 220, .3);
  }

  .ucn-message-board textarea:focus {
    border: 1px solid rgba(220, 220, 220, 1);
  }
</style>
