<template>
  <div class='upload'>
    <Upload action=""
            :max-size="maxsize"  
            :format="format"
            :on-exceeded-size="handleMaxSize"
            :on-format-error="handleFormatError"
            :on-success="handleSuccess"
            :show-upload-list="uploadList"
            :on-progress='handleProgress'
            :on-error='handleError'
            :before-upload='handelBefore'
            >
        <Button type="ghost" icon="android-upload"  :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Upload files' }}</Button>
    </Upload>  
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
            //格式
            format: {
                type: [Array, String]
            },
            //文件地址
            action: {
                type: String,
                default: '//jsonplaceholder.typicode.com/posts/'
            }
        },
        components: {

        },
        data() {
            return {
                uploadList: false,
                loadingStatus: false,
                fileName: ''
            }
        },
        created() {

        },
        methods: {
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than ' + this.maxsize
                });
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleSuccess() {
                this.$Notice.success({
                    title: 'success',
                    desc: 'File format of ' + this.fileName + ' is success'
                });
                this.loadingStatus = false
            },
            handleProgress(file) {
                this.loadingStatus = true;
            },
            handelBefore(file) {
                this.fileName = file.name
            },
            handleError(file) {
                this.$Notice.warning({
                    title: 'failed',
                    desc: 'File format of ' + this.fileName + ' is failed'
                });
                this.loadingStatus = false
            },
        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
