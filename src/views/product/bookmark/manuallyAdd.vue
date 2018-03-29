<template>
    <div class="manually-add">
        <div class="title">
            {{$t('product.page.basicInfo')}}
        </div>
        <div class="addPic">
            <div class="name">
                Pic:
            </div>
            <div class="imgGroup">
                <img-handler :data="imgGroup"></img-handler>
            </div>
            <div class="btns">
                <up-load></up-load>
                <!--<el-button @click="addPic">Add</el-button>-->
            </div>
        </div>
        <el-form class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuStatus')+':'">
                        XXXXXX
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuNo')+':'">
                        XXXXXX
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuEnglishName')+':'">
                        XXXXXX
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <input style="display: none" id="pic" name="file" type="file" accept="image/*" @change="uploadPic">
    </div>
</template>

<script>
    import upLoad from '@/components/common/upload/upload'
    import imgHandler from './imgHandler'

    export default {
        name: "manually-add",
        components:{
            imgHandler,
            upLoad
        },
        data(){
            return{
                labelPosition:'left',
                imgGroup:[],
            }
        },
        methods:{
            //上传图片
            uploadPic(e){
                let me=this;
                console.log(e,"????")
                let file=e.target.files[0];
                // let param = new FormData(); //创建form对象
                // param.append('file',file,file.name);//通过append向form对象添加数据
                let reader=new FileReader();
                reader.readAsDataURL(file);
                reader.onload=function (e) {
                    me.imgGroup.push(e.target.result);
                }
            },

            //添加图片到暂存区
            addPic(){
                document.getElementById('pic').click();
            },
        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }

    .addPic{
        height: 50px;
        line-height: 50px;
    }
    .addPic>div{
        float: left;
        height: 50px;
        line-height: 50px;
    }
    .addPic .imgGroup{
        margin-left: 10px;
    }
    .addPic .btns{
        margin-left: 20px;
    }

    .speForm .el-form-item--small.el-form-item{
        margin-bottom: 0;
    }
    .speForm .el-row .list .el-input{
        width: 80%;
    }
</style>