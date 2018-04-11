<template>
    <div class="add-product">
        <div class="title">
            <span>{{$t('productSeller.page.addNewProduct')}}</span>
        </div>

        <div class="title">
            {{$t('productSeller.page.basicInformation')}}
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
        <el-form :model="productForm" ref="productForm1" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuSaleStatus')+':'">
                        <el-select size="mini" v-model="productForm.status" placeholder="请选择">
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
                    <el-form-item :label="$t('productSeller.page.skuCode')+':'">
                        <el-input
                                :disabled="true"
                                size="mini"
                                placeholder="系统生成"
                                v-model="productForm.code">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuNameCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.nameCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('productSeller.page.skuDescriptionCN')+':'">
                        <el-input
                                size="mini"
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="productForm.descCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuNameEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.nameEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('productSeller.page.skuDescriptionEN')+':'">
                        <el-input
                                size="mini"
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="productForm.descEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuNameInCustomerLanguage')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.nameCustomer"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuDescriptionInCustomerLanguage')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.descCustomer"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.customerSkuCode')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.customerSkuCode"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.supplierName')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.supplierName"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.supplierCode')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.supplierCode"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unit')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.unit"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.productFormation')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.formation"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.martialEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.materialEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.martialCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.materialCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.colourEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.colourEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.colourCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.colourCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.minimumOrderQuantity')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.minOrderQty"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.deliveryDays')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.deliveryDates"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.productDesign')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.design"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.categoryLevel')+':'">
                        <drop-down class="dropdown" :list="dropData" :defaultProps="defaultProps" ref="dropDown"></drop-down>
                        <!--<el-select-->
                                <!--size="mini"-->
                                <!--v-model="productForm.categoryId"-->
                                <!--placeholder="请选择">-->
                            <!--<el-option-->
                                    <!--v-for="item in options"-->
                                    <!--:key="item.value"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.value">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.barCode')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.barcode"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.readilyAvailable')+':'">
                        <el-select
                                size="mini"
                                v-model="productForm.readilyAvailable"
                                placeholder="请选择">
                            <el-option
                                    v-for="item in isReadilyAvailable"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuAvailable')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.availableQty"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.restrictedSellingCountry')+':'">
                        <el-select
                                size="mini"
                                v-model="productForm.noneSellCountry"
                                placeholder="请选择">
                            <el-option
                                    v-for="item in countryList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.applicableAge')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.applicableAge"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.expirationDate')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.expireDates"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.expirationDateUnit')+':'">
                        <el-select
                                size="mini"
                                v-model="productForm.expireUnit"
                                placeholder="请选择">
                            <el-option
                                    v-for="item in expireUnitList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('productSeller.page.explain')+':'">
                        <el-input
                                size="mini"
                                type="textarea"
                                placeholder="请输入内容"
                                v-model="productForm.comments"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$t('productSeller.page.customInformation')}}
        </div>
        <el-form :model="productForm" ref="productForm2" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.rateOfValueAddedTax')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.rateValueAddedTax"
                                :min="0"
                                :max="100"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.taxRefundRate')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.taxRefundRate"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.hsCode')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.customsCode"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.customsDeclarationNameCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.customsNameCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.customsDeclarationNameEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.customsNameEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.chineseTradeMark')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.tradeMarkCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.englishTradeMark')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.tradeMarkEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.commodityInspectionChineseName')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.commodityInspectionCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.commodityInspectionEnglishName')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.commodityInspectionEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.DeclareElements')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.declareElement"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.origin')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.origin"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.inspectionAndQuarantineCategory')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.inspectQuarantineCategory"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.brand')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.brand"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.brandRemark')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.brandRemark"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.relatedBrand')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.brandRelated"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.certificat')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.certificat"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$t('productSeller.page.priceInfo')}}
        </div>
        <el-form :model="productForm" ref="productForm3" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-table
                    :data="productForm.price"
                    border
                    style="width: 100%">
                <el-table-column
                        align="center"
                        width="180">
                    <template slot-scope="scope">
                        <div v-if="scope.$index===0">
                            {{$t('productSeller.tableData.costPrice')}}
                        </div>
                        <div v-if="scope.$index===1">
                            {{$t('productSeller.tableData.quotedPrice')}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="fobCurrency"
                        align="center"
                        :label="$t('productSeller.tableData.fobCurrency')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-select v-model="scope.row.fobCurrency" placeholder="请选择">
                                <el-option
                                        v-for="item in fobUnit"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="fobPrice"
                        align="center"
                        :label="$t('productSeller.tableData.fobPrice')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-input-number
                                    v-model="scope.row.fobPrice"
                                    :controls="false"
                                    :min="0"
                                    label="描述文字"></el-input-number>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="fobPort"
                        align="center"
                        :label="$t('productSeller.tableData.fobPort')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-input
                                    v-model="scope.row.fobPort"
                                    clearable
                                    placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="exwPrice"
                        align="center"
                        :label="$t('productSeller.tableData.exwPrice')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-input-number
                                    v-model="scope.row.exwPrice"
                                    :controls="false"
                                    :min="0"
                                    label="描述文字"></el-input-number>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="exwCurrency"
                        align="center"
                        :label="$t('productSeller.tableData.exwCurrency')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-select v-model="scope.row.exwCurrency" placeholder="请选择">
                                <el-option
                                        v-for="item in fobUnit"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncoterm"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncoterm')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-select v-model="scope.row.otherIncoterm" placeholder="请选择">
                                <el-option
                                        v-for="item in otherIncotermUnit"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermPrice"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermPrice')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-input-number
                                    v-model="scope.row.otherIncotermPrice"
                                    :controls="false"
                                    :min="0"
                                    label="描述文字"></el-input-number>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermArea"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermArea')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-input
                                    v-model="scope.row.otherIncotermArea"
                                    clearable
                                    placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermCurrency"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermCurrency')"
                        width="180">
                    <template slot-scope="scope">
                        <el-form-item class="tableList">
                            <el-select v-model="scope.row.otherIncotermCurrency" placeholder="请选择">
                                <el-option
                                        v-for="item in fobUnit"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>


        <div class="title">
            {{$t('productSeller.page.packingInfo')}}
        </div>
        <el-form :model="productForm" ref="productForm4" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unitOfWeight')+':'">
                        <el-select size="mini" v-model="productForm.unitWeight" placeholder="请选择">
                            <el-option
                                    v-for="item in weightUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unitOfLength')+':'">
                        <el-select size="mini" v-model="productForm.unitLength" placeholder="请选择">
                            <el-option
                                    v-for="item in lengthUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unitOfVolume')+':'">
                        <el-select size="mini" v-model="productForm.unitVolume" placeholder="请选择">
                            <el-option
                                    size="mini"
                                    v-for="item in volumeUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuLength')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.length"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuBreadth')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.width"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuHeight')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.height"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuNetWeight')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.netWeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuVolume')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.volume"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.methodPkgCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.methodPkgEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unitOfInnerCarton')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.innerCartonUnit"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuQuantityOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonQty"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.lengthOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonLength"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.breadthOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonWidth"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.heightOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonHeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.netWeightOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonWeightNet"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.grossWeightOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonRoughWeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.volumeOfInnerCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonVolume"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.descriptionOfInnerCarton')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.innerCartonDesc"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodOfInnerCartonCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.innerCartonMethodCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodOfInnerCartonEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.innerCartonMethodEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.unitOfOuterCarton')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.outerCartonUnit"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.descriptionOfOuterCarton')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.outerCartonDesc"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.quantityOfInnerBoxInOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.innerCartonOuterNum"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuQuantityOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonQty"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.lengthOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonLength"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.breadthOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonWidth"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.heightOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonHeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.netWeightOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonNetWeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.grossWeightOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonRoughWeight"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.volumeOfOuterCarton')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.outerCartonVolume"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodOfOuterCartonCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.outerCartonMethodCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.packingMethodOfOuterCartonEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.outerCartonMethodEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.oem')+':'">
                        <el-select v-model="productForm.oem" placeholder="请选择">
                            <el-option
                                    v-for="item in isOem"
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
            {{$t('productSeller.page.logisticInfo')}}
        </div>
        <el-form :model="productForm" ref="productForm5" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.gpSKUQuantity20')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.gp20SkuQty"
                                :min="0"
                                :max="100"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.gpSKUQuantity40')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.gp40SkuQty"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.hqSKUQuantity40')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.hq40SkuQty"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.trayDimension')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.tryDimension"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuQuantityPerTray')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.skuQtyPerTray"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.specialTransportRequirements')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.specialTransportRequire"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.inventoryCostCalculationMethod')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.inventoryCostMethod"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.defaultWarehouse')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.warehourceDefault"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.supplierInventoryQuantity')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.inventory"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.supplierSafeInventoryQuantity')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.safeInventory"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.supplierMinimumInventory')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.minInventory"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$t('productSeller.page.otherInfo')}}
        </div>
        <el-form :model="productForm" ref="productForm6" class="speForm" label-width="290px" :label-position="labelPosition">
            <el-row>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.mainSaleCountry')+':'">
                        <el-select size="mini" v-model="productForm.mainSaleCountry" placeholder="请选择">
                            <el-option
                                    v-for="item in countryList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.mainSaleArea')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.mainSaleArea"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.productionDays')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.productionDates"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.qualityStander')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.qualityStander"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.yearOfListed')+':'">
                        <el-date-picker
                                size="mini"
                                v-model="productForm.yearListed"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.useDisplayBoxOrNot')+':'">
                        <el-select size="mini" v-model="productForm.useDisplayBox" placeholder="请选择">
                            <el-option
                                    v-for="item in isUseDisplayBox"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.skuQuantityInDisplayBox')+':'">
                        <el-input-number
                                size="mini"
                                :controls="false"
                                v-model="productForm.displayBoxQty"
                                :min="0"
                                :max="100"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.lengthBreadthAndHeight')+':'">

                        <el-input-number
                                class="speNum"
                                size="mini"
                                :controls="false"
                                v-model="boxSize.length"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                        <div class="speIcon">*</div>
                        <el-input-number
                                class="speNum"
                                size="mini"
                                :controls="false"
                                v-model="boxSize.width"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                        <div class="speIcon">*</div>
                        <el-input-number
                                class="speNum"
                                size="mini"
                                :controls="false"
                                v-model="boxSize.height"
                                :min="0"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.otherPackingInformationCN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.otherPackInfoCn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.otherPackingInformationEN')+':'">
                        <el-input
                                size="mini"
                                placeholder="请输入内容"
                                v-model="productForm.otherPackInfoEn"
                                clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col class="list number" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('productSeller.page.adjustSKUAndPackageOrNot')+':'">
                        <el-select size="mini" v-model="productForm.adjustPackage" placeholder="请选择">
                            <el-option
                                    v-for="item in isUseDisplayBox"
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
            {{$t('productSeller.page.attachment')}}
        </div>
        <div>

        </div>


        <input style="display: none" id="pic" name="file" type="file" accept="image/*" @change="uploadPic">

        <div class="footBtn">
            <el-button @click="finish" :loading="disabledSubmit" type="primary">{{$t('product.page.finish')}}</el-button>
        </div>
    </div>
</template>



<script>
    import upLoad from '@/components/common/upload/upload'
    import imgHandler from '../product/bookmark/imgHandler'
    import {dropDownSingle} from '@/components/index'

    export default {
        name: "addNewProduct",
        components:{
            imgHandler,
            upLoad,
            dropDown:dropDownSingle
        },
        data(){
            return{
                labelPosition:'left',
                disabledSubmit:false,               //防止用户多次提及表单
                imgGroup:[],
                productForm:{
                    id: '',                         //新增传空
                    pic: "thisIsAPicture",
                    status: 0,                      //0下架 1上架
                    nameEn: "",
                    barcode: "",                    //产品条码
                    nameCn: "",
                    descEn: "",
                    descCn: "",
                    descCustomer: "",
                    nameCustomer: "",
                    customerSkuCode: "",
                    supplierCode: "",
                    supplierName: "",
                    code: "",                       //新增时系统生成，传空
                    unit: "2",
                    formation: "",
                    materialEn: "",
                    materialCn: "",
                    colourEn: "",
                    colourCn: "",
                    minOrderQty: 1,
                    deliveryDates: 1,               //交期(做完需要多少天)
                    design: "",
                    noneSellCountry: 1,             //禁售国家，暂时传1
                    applicableAge: 1,
                    expireDates: 1,
                    expireUnit: 1,                  //保质期单位，暂时传1
                    comments: "",
                    readilyAvailable: 1,
                    availableQty: 1,
                    mainSaleCountry: 1,
                    mainSaleArea: "",
                    productionDates: 1,             //开发时间
                    qualityStander: "",
                    yearListed: "2018-02-23",
                    useDisplayBox: 1,
                    displayBoxQty: 0,
                    otherPackInfoCn: "",
                    otherPackInfoEn: "",
                    adjustPackage: 2,
                    lengthWidthHeight: "",
                    recycle: 2,
                    categoryId: '',                      //类型id
                    rateValueAddedTax: 1,               //增值税率
                    taxRefundRate: 1,
                    customsCode: "",
                    customsNameCn: "",
                    customsNameEn: "",
                    tradeMarkCn: "",
                    tradeMarkEn: "",
                    commodityInspectionCn: "",
                    commodityInspectionEn: "",
                    declareElement: "",
                    origin: "",
                    inspectQuarantineCategory: "",      //检疫类别
                    brand: "",
                    brandRemark: "",
                    brandRelated: "",
                    certificat: "",
                    gp20SkuQty: 0,
                    gp40SkuQty: 0,
                    hq40SkuQty: 0,
                    tryDimension: 1,                    //托盘尺寸？？？
                    skuQtyPerTray: 0,
                    specialTransportRequire: "",
                    inventoryCostMethod: "",
                    warehourceDefault: "",
                    inventory: 0,
                    safeInventory: 0,
                    minInventory: 0,
                    unitWeight: 1,                      //重量单位,暂时传1
                    unitLength: 1,                      //长度单位,暂时传1
                    unitVolume: 1,                      //提及单位，暂时传1
                    length: 0,
                    width: 0,
                    height: 0,
                    netWeight: 0,
                    volume: 0,
                    methodPkgCn: "",
                    methodPkgEn: "",
                    innerCartonUnit: "",                //中包单位
                    innerCartonQty: 0,
                    innerCartonLength: 0,
                    innerCartonWidth: 0,
                    innerCartonHeight: 0,
                    innerCartonWeightNet: 0,
                    innerCartonRoughWeight: 0,
                    innerCartonVolume: 0,
                    innerCartonDesc: "",
                    innerCartonMethodCn: "",
                    innerCartonMethodEn: "",
                    outerCartonUnit: "",                //外箱单位
                    outerCartonDesc: "",
                    innerCartonOuterNum: 0,
                    outerCartonQty: 0,
                    outerCartonLength: 0,
                    outerCartonWidth: 0,
                    outerCartonHeight: 0,
                    outerCartonNetWeight: 0,
                    outerCartonRoughWeight: 0,
                    outerCartonVolume: 0,
                    outerCartonMethodCn: "",
                    outerCartonMethodEn: "",
                    oem: 1,
                    logisticId: 1,
                    version: 1,
                    pkgId: 1,
                    price: [
                        {
                            fobCurrency: 1,
                            fobPrice: 1,                    //价格起始是多少
                            fobPort: "",
                            exwPrice: 1,                    //价格起始是多少
                            exwCurrency: 1,
                            otherIncoterm: 1,
                            otherIncotermPrice: 1,
                            otherIncotermArea: '',
                            otherIncotermCurrency: 1,
                            status: 1                       //1成本价，2基础报价
                        },
                        {
                            fobCurrency: 1,
                            fobPrice: 1,
                            fobPort: "",
                            exwPrice: 1,
                            exwCurrency: 1,
                            otherIncoterm: 1,
                            otherIncotermPrice: 1,
                            otherIncotermArea: '',
                            otherIncotermCurrency: 1,
                            status: 2
                        },
                    ]
                },
                //上下架状态
                skuStatusOption:[
                    {
                        label: '上架',
                        value: 1
                    },
                    {
                        label: '下架',
                        value: 0
                    }
                ],
                //是否现货
                isReadilyAvailable:[
                    {
                        label:'是',
                        value:1
                    },
                    {
                        label:'否',
                        value:0
                    }
                ],
                //国家列表
                countryList:[
                    {
                        label:'中国',
                        value:1
                    },
                    {
                        label:'美国',
                        value:2
                    },
                    {
                        label:'日本',
                        value:3
                    }
                ],
                //保质期单位
                expireUnitList:[
                    {
                        label:'小时',
                        value:1
                    },
                    {
                        label:'日',
                        value:2
                    },
                    {
                        label:'月',
                        value:3
                    },
                    {
                        label:'年',
                        value:4
                    },
                ],
                //fob单位
                fobUnit:[
                    {
                        label:'USD',
                        value:1
                    },
                    {
                        label:'CNY',
                        value:2
                    },
                    {
                        label:'EUR',
                        value:3
                    },
                ],
                //otherIncoterm单位
                otherIncotermUnit:[
                    {
                        label:'CIF',
                        value:1
                    },
                    {
                        label:'DDU',
                        value:2
                    },
                ],
                //weight单位
                weightUnit:[
                    {
                        label:'t',
                        value:1
                    },
                    {
                        label:'kg',
                        value:2
                    },
                    {
                        label:'lb',
                        value:3
                    },
                    {
                        label:'sh.ton',
                        value:4
                    },
                    {
                        label:'long ton',
                        value:5
                    },
                    {
                        label:'oz',
                        value:6
                    },
                    {
                        label:'g',
                        value:7
                    },
                ],
                //length单位
                lengthUnit:[
                    {
                        label:'km',
                        value:1
                    },
                    {
                        label:'mile',
                        value:2
                    },
                    {
                        label:'m',
                        value:3
                    },
                    {
                        label:'ft',
                        value:4
                    },
                    {
                        label:'yd',
                        value:5
                    },
                    {
                        label:'cm',
                        value:6
                    },
                    {
                        label:'in',
                        value:7
                    },
                    {
                        label:'mm',
                        value:8
                    },
                ],
                //volume单位
                volumeUnit:[
                    {
                        label:'m3',
                        value:1
                    },
                    {
                        label:'liter',
                        value:2
                    },
                    {
                        label:'ft3',
                        value:3
                    },
                    {
                        label:'mcf',
                        value:4
                    },
                    {
                        label:'in3',
                        value:5
                    },
                    {
                        label:'cm3',
                        value:6
                    },
                    {
                        label:'bbl',
                        value:7
                    },
                    {
                        label:'gal',
                        value:8
                    },
                    {
                        label:'qt',
                        value:9
                    },
                    {
                        label:'pt',
                        value:10
                    },
                    {
                        label:'gi',
                        value:11
                    },
                ],
                //可否贴牌
                isOem:[
                    {
                        label:'是',
                        value:1
                    },
                    {
                        label:'否',
                        value:0
                    }
                ],
                //日期组件配置
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                //是否展示box
                isUseDisplayBox:[
                    {
                        label:'是',
                        value:1
                    },
                    {
                        label:'否',
                        value:0
                    }
                ],
                //产品或包装可否调整
                isAdjustSku:[
                    {
                        label:'是',
                        value:1
                    },
                    {
                        label:'否',
                        value:0
                    },
                ],
                //展示盒的长宽高
                boxSize:{
                    length:0,
                    width:0,
                    height:0
                },

                //dropDown Data
                dropData:[
                    {
                        id: 1,
                        label: '一级 1',
                        children: [{
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                id: 9,
                                label: '三级 1-1-1'
                                }, {
                                id: 10,
                                label: '三级 1-1-2'
                                }
                            ]
                        }]
                    },
                    {
                        id: 2,
                        label: '一级 2',
                        children: [{
                            id: 5,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            label: '二级 2-2'
                        }]
                    },
                    {
                        id: 3,
                        label: '一级 3',
                        children: [{
                            id: 7,
                            label: '二级 3-1'
                        }, {
                            id: 8,
                            label: '二级 3-2'
                        }]
                    }],
                defaultProps:{
                    label:'name',
                    children:'children'
                },



                options: [
                    {
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


            getCategoryId(){
                this.$ajax.get(this.$apis.getCategory,{}).then(res=>{
                    console.log(res)
                    this.dropData=res;
                }).catch(err=>{
                    console.log(err)
                });
            },

            finish(){
                let size=this.boxSize.length+'*'+this.boxSize.width+'*'+this.boxSize.height;
                this.$set(this.productForm,'lengthWidthHeight',size);
                this.$set(this.productForm,'categoryId',this.$refs.dropDown.selectedList.id);
                this.disabledSubmit=true;
                this.$ajax.post(this.$apis.add_newSKU,this.productForm).then(res=>{
                    this.$message({
                        message: '新增成功',
                        type: 'success'
                    });
                    this.disabledSubmit=false;
                    this.$router.push('/sellerProduct/overview');
                }).catch(err=>{
                    this.disabledSubmit=false;
                });
            },
        },
        created(){
            this.getCategoryId();
        },
    }
</script>

<style scoped>
    .manually-add{
        position: relative;
    }
    .number{
        height: 33px;
    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
        margin-top: 10px;
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

    .tableList >>> .el-form-item__content{
        margin-left: 0!important;
    }

    .speNum{
        width: 60px;
    }
    .speIcon{
        display: inline-block;
        height: 28px;
        line-height: 28px;
    }
    .dropdown{
        height: 32px;
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