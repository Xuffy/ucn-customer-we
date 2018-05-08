<template>
  <div class='ucn-upload'>
    <input type="file" multiple="multiple" ref="upload" @change="uploadFile"/>
    <!--<el-button type="primary" @click="uploadFile">主要按钮</el-button>-->
    <ul>
      <li v-for="item in fileList">
        <span v-text="item.fileName"></span>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="item.progress*100"></el-progress>
      </li>
    </ul>
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
      return {

        fileList: {},
      }
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
            , files = this.$refs.upload.files
            , fileNames = _.pluck(_.values(this.fileList), 'fileName');

          _.map(files, val => {
            _.indexOf(fileNames, val.name) === -1 && this.startUpload(client, val);
          });

        });
      },
      startUpload(client, files) {
        let _this = this
          , uid = _this.$getUUID();
        _this.fileList[uid] = {fileName: files.name, progress: 0, id: uid};

        co(function* () {
          yield client.multipartUpload(`${uid}/${files.name}`, files, {
            progress: p => {
              return done => {
                if (_this.fileList[uid]){
                  _this.fileList[uid].progress=p;
                }
                /*_this.fileList = _.map(_this.fileList, val => {
                  console.log(files.name, val.fileName, p);
                  if (files.name === val.fileName) {
                    val.progress = p;
                  }
                  return val;
                });*/
                done();
              }
            }
          }).then(result => {
            let signUrl = client.signatureUrl(result.name);
            // console.log(_this.fileList);
            // console.log(result);
            // console.log(signUrl)
            console.log('2-------');
          });
          // let head = yield client.head(files[0].name);
        }).catch(function (err) {
          console.log(err);
        });
      },
      signature(params) {
        return new OSS.Wrapper({
          region: 'oss-cn-hangzhou' || params.ossEndpoint,
          accessKeyId: params.accessKeyId,
          accessKeySecret: params.accessKeySecret,
          stsToken: params.securityToken,
          bucket: 'ucn-oss-dev'
        });

      }
    },
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
