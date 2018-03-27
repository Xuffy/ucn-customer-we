<template>
  <div class='upload'>
    <el-upload 
             :action="action" 
             :accept="accept"
             :maxsize='maxsize'  
             :on-progress='handleProgress'
             :on-success="handleSuccess"
             :on-error='handleError'
             :show-file-list="uploadList"              
             :before-upload='handelBefore'
            >
        <el-button size="small" type="primary" :loading="loadingStatus">
        <i class="el-icon-upload2"></i>{{ loadingStatus ? 'Uploading' : 'Upload files' }}</el-button>
    </el-upload>  
  </div>
</template>

<script>
    export default {
        name: 'upload',
        props: {
            //默认大小2048
            maxsize: {
                type: Number,
                default: 2048
            },
            //格式 (application/vnd.openxmlformats-officedocument.spreadsheetml.sheet xlsl,image/jpeg img)
            accept: {
                type: String,
                default: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, image/jpeg'
            },
            // 文件地址
            action: {
                type: String,
                default: 'https://jsonplaceholder.typicode.com/posts/'
            },
        },
        components: {

        },
        data() {
            return {
                uploadList: false,
                loadingStatus: false,
                fileName: '',
                isuploadsuccess: false //是否上传成功
            }
        },
        created() {

        },
        methods: {
            handelBefore(file) {
                this.fileName = file.name
                const isType = this.accept.indexOf(file.type) != -1;
                const isSize = file.size / 1024 / 1024 < this.maxsize;
                if (!isType) {
                    this.$message.error('上传格式不对!');
                }
                if (!isSize) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isType && isSize;
            },
            handleSuccess() {
                this.$notify.success({
                    title: 'success',
                    message: 'File format of ' + this.fileName + ' is success',
                    duration: 1000
                });
                this.loadingStatus = false
                this.$refs.isuploadsuccess.value = true
            },
            handleProgress(file) {
                this.loadingStatus = true;
            },
            handleError(file) {
                this.$notify.warning({
                    title: 'failed',
                    message: 'File format of ' + this.fileName + ' is failed',
                    duration: 1000
                });
                this.loadingStatus = false
            },
        },
        mounted() {},
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
