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
                    <el-form-item :label="'*'+$t('product.page.skuStatus')+':'">
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
                    <el-form-item :label="'*'+$t('product.page.skuNo')+':'">
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
                    <el-form-item :label="'*'+$t('product.page.vendorSkuCode')+':'">
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
                    <el-form-item :label="'*'+$t('product.page.categoryLevel1')+':'">
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

        <div class="title">
            {{$t('product.page.customInfo')}}
        </div>
        <el-form class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.rateOfValueAddedTax')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.taxRefundRate')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.customsCode')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.customsDeclarationNameInChinese')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.customsDeclarationNameInEnglish')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.chineseTradeMark')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.englishTradeMark')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.commodityInspectionChineseName')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.commodityInspectionEnglishName')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.declareElements')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.origin')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.inspectionAndQuarantineCategory')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.brand')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.related')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.brandRemark')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.certificat')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$t('product.page.priceInfo')}}
        </div>
        <el-form class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.fobCurrency')+':'">
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
                    <el-form-item :label="$t('product.page.fobPrice')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.fobPort')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.exwPrice')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.exwCurrency')+':'">
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
                    <el-form-item :label="$t('product.page.otherIncoterm')+':'">
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
                    <el-form-item :label="$t('product.page.otherIncotermPrice')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.otherIncotermArea')+':'">
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
                    <el-form-item :label="$t('product.page.otherIncotermCurrency')+':'">
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
            </el-row>
        </el-form>

        <div class="title">
            {{$t('product.page.packingInfo')}}
        </div>
        <el-form class="speForm" label-width="300px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.unitOfWeight')+':'">
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
                    <el-form-item :label="$t('product.page.unitOfLength')+':'">
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
                    <el-form-item :label="$t('product.page.unitOfVolume')+':'">
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
                    <el-form-item :label="$t('product.page.skuLength')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuBreadth')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuHeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuNetWeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuVolume')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.packingMethodCN')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.packingMethodEN')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.unitOfMediumPackage')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuQuantityOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.breadthOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.heightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.netWeightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.roughWeightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.volumeOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.descriptionOfMediumPackage')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.packingMethodOfMediumPackageCN')+':'">
                        <el-input
                                clearable
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.packingMethodOfMediumPackageEN')+':'">
                        <el-input
                                clearable
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.unitOfOuterBox')+':'">
                        <el-input
                                clearable
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.descriptionOfOuterBox')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.mediumPackageOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuQuantityOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.breadthOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.heightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.netWeightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.roughWeightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.volumeOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.outerPackingMethodCN')+':'">
                        <el-input
                                clearable
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.outerPackingMethodEN')+':'">
                        <el-input
                                clearable
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.oem')+':'">
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
            </el-row>
        </el-form>

        <div class="title">
            {{$t('product.page.logisticInfo')}}
        </div>
        <el-form class="speForm" label-width="260px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="'20'+$t('product.page.gpSKUQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="'40'+$t('product.page.gpSKUQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="'40'+$t('product.page.hqSKUQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.trayDimension')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuQuantityPerTray')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.inventoryCostCalculationMethod')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.specialTransportRequirements')+':'">
                        <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.defaultWarehouse')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.warehouseQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.safeStock')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.minimumStock')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.maximumBatch')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$t('product.page.otherInfo')}}
        </div>
        <el-form class="speForm" label-width="250px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.mainSaleCountry')+':'">
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
                    <el-form-item :label="$t('product.page.mainSaleArea')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.productionTime')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.qualityStander')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.yearOfListed')+':'">
                        <el-date-picker
                                v-model="month"
                                type="month"
                                placeholder="选择月">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.useDisplayBoxOrNot')+':'">
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
                    <el-form-item :label="$t('product.page.skuQuantityInDisplayBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthWidthAndHeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="1"
                                :controls="false"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.otherPackingInformationCN')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.otherPackingInformationEN')+':'">
                        <el-input
                                placeholder="请输入内容"
                                clearable
                                v-model="skuEnglishName">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.adjustSKUAndPackageOrNot')+':'">
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
            </el-row>
        </el-form>

        <div class="title">
            {{$t('product.page.attachment')}}
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem, earum eligendi expedita explicabo fuga fugit iste laudantium nostrum numquam optio praesentium quasi, qui, quidem saepe sit totam voluptate voluptatum.



        <input style="display: none" id="pic" name="file" type="file" accept="image/*" @change="uploadPic">

        <div class="footBtn">
            <el-button type="primary">{{$t('product.page.finish')}}</el-button>
        </div>
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
                month:'',                       //月份选择
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
    .manually-add{
        position: relative;
    }
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

    .footBtn{
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
</style>