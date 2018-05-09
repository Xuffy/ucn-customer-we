<template>
  <div class='ucn-upload'>
    <p class="upload-btn">
      <i class="el-icon-plus"></i>
      <input class="upload-file" type="file" multiple="multiple" ref="upload" @change="uploadFile"/>
    </p>
    <!--<el-button type="primary" @click="uploadFile">主要按钮</el-button>-->
    <ul class="upload-list">
      <li v-for="item in fileList">
        <template v-if="!item.isImage">
          <label v-text="item.showType"></label>
          <span v-text="item.showName"></span>
        </template>
        <div v-else-if="item.url" class="img-box"
             :style="{'background-image': 'url('+ item.url +')'}">
        </div>
        <div :class="{close:!item.progress || item.progress === 1}" class="progress"
             :style="{width: (item.progress * 100) + '%'}">
          <!--<h6 v-text="parseInt(item.progress * 100) + '%'"></h6>-->
        </div>
        <!--<el-progress :text-inside="true" :stroke-width="18" :percentage="item.progress*100"></el-progress>-->
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
        _this.$set(_this.fileList, uid, _.extend({
          fileName: files.name,
          progress: 0,
          id: uid
        }, this.filterType(files.name)));

        co(function* () {
          yield client.multipartUpload(`${uid}/${files.name}`, files, {
            progress: p => {
              return done => {
                if (_this.fileList[uid]) {
                  _this.fileList[uid].progress = p;
                }
                done();
              }
            }
          }).then(result => {
            // let signatureUrl = client.signatureUrl(result.name);
            // let obj = _this.fileList[uid];
            // obj.url = client.signatureUrl(result.name);
            _this.$set(_this.fileList[uid], 'url', client.signatureUrl(result.name));
            // console.log(signatureUrl)
          });
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

      },
      filterType(name) {
        let ns = name.split('.')
          , param = {}
          , types = ['JPG', 'PNG'];

        if (ns.length > 1) {
          param.showType = ns.pop().toLocaleUpperCase();
          param.showName = ns.join('');
        } else {
          param.showName = ns[0];
        }

        if (_.indexOf(types, param.showType) !== -1) {
          param.isImage = true;
        }

        return param;
      }
    },
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .upload-btn {
    width: 100px;
    height: 100px;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    line-height: 146px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }

  .upload-btn > i {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 24px;
    color: #8c939d;
    transform: translate(-50%, -50%);
  }

  .upload-file {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .upload-list {
    vertical-align: middle;
    display: inline-block;
  }

  .upload-list > li {
    width: 100px;
    height: 100px;
    display: inline-block;
    background-color: #fbfdff;
    word-wrap: break-word;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    margin-left: 10px;
    position: relative;
    vertical-align: middle;
  }

  .progress {
    position: absolute;
    height: 100%;
    width: 0;
    background-color: rgba(0, 0, 0, .5);
    /*border-radius: 6px;*/
    bottom: 0;
    left: 0;
    z-index: 2;
    opacity: 1;
    transition: all 1s;
  }

  .progress.close {
    opacity: 0;
    z-index: -10;
    transition: all 1s;
    transition-delay: 1s;
  }

  .progress h6 {
    color: #ffffff;
    width: 100%;
    line-height: 20px;
    text-align: center;
    transition-delay: 1s;
  }

  .upload-list > li label {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;
    text-shadow: 1px 1px #eaeaea, -1px -1px #8a8a8a;
    color: #C8C8C8;
    font-size: 20px;
  }

  .upload-list > li span {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 3px 3px 20px 3px;
    box-sizing: border-box;
    color: #606266;
  }

  .img-box {
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-size: cover;
    transition-delay: 1s;
  }
</style>
