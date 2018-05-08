<template>
  <div class='ucn-upload'>
    <input type="file" ref="upload"/>
    <el-button type="primary" @click="uploadFile">主要按钮</el-button>
  </div>
</template>

<script>
  import OSS from 'ali-oss';
  import co from 'co';

  /*const urllib = aliOSS.urllib;
  const OSS = aliOSS.Wrapper;
  const STS = OSS.STS;*/

  export default {
    name: 'VUpload',
    props: {},
    components: {},
    data() {
      return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {
      clickUpload() {
        this.applyTokenDo();
      },
      uploadFile() {
        this.$ajax.get(this.$apis.OSS_TOKEN).then(data => {
          let client = this.signature(data)
            , files = this.$refs.upload.files;

          client.multipartUpload(files[0].name, files[0], {
            progress: (p) => {
              console.log('进度：', p)
            }
          }).then(function (result) {
            console.log(result.name);
            let signUrl = client.signatureUrl(result.name);
            console.log(signUrl)
          }).catch(function (err) {
            console.log(err);
          });

        });
        /*co(function* () {
          let result = yield client.multipartUpload('upload-file', files[0], {
            progress: (p) => {
              console.log('进度：', p)
            }
          })/!*.then(function (res) {
            console.log('upload success: %j', res);
            // return listFiles(client);
          })*!/

          console.log(result);
        }).catch(function (err) {
          console.log(err);
        });
      });
*/

        /*let client = this.signature()
          , file = null;

        if (!client) {
          return false;
        }
        console.log(client);
        console.log(this.$refs.upload.files);
        file = this.$refs.upload.files[0];
*/
        /*return client.multipartUpload('1', file, {
          progress(p){
            console.log('进度：',p)
          }
        }).then(function (res) {
          console.log('upload success: %j', res);
          // return listFiles(client);
        });*/
        /*return client.multipartUpload('1', file, {
          progress(p) {
            console.log('进度：', p)
          }
        }).then(function (res) {
          console.log('upload success: %j', res);
          // return listFiles(client);
        });*/
        /*
        let file = document.getElementById('file').files[0];
        let key = document.getElementById('object-key-file').value.trim() || 'object';
        console.log(file.name + ' => ' + key);
        return client.multipartUpload(key, file, {
          progress: progress
        }).then(function (res) {
          console.log('upload success: %j', res);
          return listFiles(client);
        });*/
      },
      signature(params) {
        /*return new OSS({
          region: 'oss-cn-hangzhou' || params.ossEndpoint,
          accessKeyId: '123' || params.accessKeyId,
          accessKeySecret: '123' || params.accessKeySecret,
          stsToken: '123' || params.securityToken,
          bucket: '123' || 'ucn-oss-dev'
        });*/
        return new OSS.Wrapper({
          region: 'oss-cn-hangzhou' || params.ossEndpoint,
          accessKeyId: params.accessKeyId,
          accessKeySecret: params.accessKeySecret,
          stsToken: params.securityToken,
          bucket: 'ucn-oss-dev'
        });

        /*return OSS.urllib.request(params.ossEndpoint, {
          method: 'GET'
        }).then(function (result) {
          let creds = JSON.parse(result.data);
          let client = new OSS({
            region: region,
            accessKeyId: creds.AccessKeyId,
            accessKeySecret: creds.AccessKeySecret,
            stsToken: creds.SecurityToken,
            bucket: bucket
          });
          return func(client);
        });*/
      }
    },
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
