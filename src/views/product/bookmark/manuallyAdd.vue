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
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuNo')+':'">
                        系统生成
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuEnglishName')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuNameInCustomerLanguage')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.skuEnglishDescription')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.skuDescriptionInCustomerLanguage')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuCode')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.vendorSkuCode')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.supplierName')+':'">
                        系统带入
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.supplierCode')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.unitofMeasurement')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.productFormation')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.textureEnglish')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.colourEnglish')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.minimumOrderQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1" :max="10"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.deliveryDate')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1" :max="10"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.productDesign')+':'">
                        <el-input
                                placeholder="请输入内容"
                                v-model="skuEnglishName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.categoryLevel1')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.categoryLevel2')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.categoryLevel3')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.categoryLevel4')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.readilyAvailable')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuAvailable')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1" :max="10"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.restrictedSellingCountry')+':'">
                        <el-select v-model="value5" multiple placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.applicableAge')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1" :max="10"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.expirationDate')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1" :max="10"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.unexpirationDate')+':'">
                        <el-select v-model="skuStatus" placeholder="请选择">
                            <el-option
                                    v-for="item in skuStatusOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.explain')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
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

                skuStatusOption:[
                    {
                        value: '选项1',
                        label: '上架'
                    },
                    {
                        value: '选项2',
                        label: '下架'
                    }
                ],
                skuStatus:'',                   //skuStatus
                skuEnglishName:'',              //skuEnglishName

                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],

                value5: [],




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