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
                        <el-select
                                size="mini"
                                v-model="productForm.categoryId"
                                placeholder="请选择">
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
            <el-button @click="finish" type="primary">{{$t('product.page.finish')}}</el-button>
        </div>
    </div>
</template>



<script>
    import upLoad from '@/components/common/upload/upload'
    import imgHandler from '../product/bookmark/imgHandler'

    export default {
        name: "addNewProduct",
        components:{
            imgHandler,
            upLoad
        },
        data(){
            return{
                labelPosition:'left',
                imgGroup:[],

                //???code没找到
                productForm:{
                    id: '',                         //新增传空
                    pic: "thisIsAPicture",
                    status: 2,
                    nameEn: "2",
                    barcode: "2",
                    nameCn: "2",
                    descEn: "2",
                    descCn: "2",
                    descCustomer: "2",
                    nameCustomer: "2",
                    customerSkuCode: "2",
                    supplierCode: "2",
                    supplierName: "2",
                    code: "2",
                    unit: "2",
                    formation: "2",
                    materialEn: "2",
                    materialCn: "2",
                    colourEn: "2",
                    colourCn: "2",
                    minOrderQty: 2,
                    deliveryDates: 2,
                    design: "2",
                    noneSellCountry: 2,
                    applicableAge: 2,
                    expireDates: 2,
                    expireUnit: "2",
                    comments: "2",
                    readilyAvailable: 2,
                    availableQty: 2,
                    mainSaleCountry: 2,
                    mainSaleArea: "2",
                    productionDates: 2,
                    qualityStander: "2",
                    yearListed: "2018-02-23",
                    useDisplayBox: 2,
                    displayBoxQty: 2,
                    otherPackInfoCn: "2",
                    otherPackInfoEn: "2",
                    adjustPackage: 2,
                    lengthWidthHeight: "2",
                    recycle: 2,
                    categoryId: 2,
                    rateValueAddedTax: 2,
                    taxRefundRate: 2,
                    customsCode: "2",
                    customsNameCn: "2",
                    customsNameEn: "2",
                    tradeMarkCn: "2",
                    tradeMarkEn: "2",
                    commodityInspectionCn: "2",
                    commodityInspectionEn: "2",
                    declareElement: "2",
                    origin: "2",
                    inspectQuarantineCategory: "2",
                    brand: "2",
                    brandRemark: "2",
                    brandRelated: "2",
                    certificat: "2",
                    gp20SkuQty: 2,
                    gp40SkuQty: 2,
                    hq40SkuQty: 2,
                    tryDimension: 2,
                    skuQtyPerTray: 2,
                    specialTransportRequire: "2",
                    inventoryCostMethod: "2",
                    warehourceDefault: "2",
                    inventory: 2,
                    safeInventory: 2,
                    minInventory: 2,
                    unitWeight: 2,
                    unitLength: 2,
                    unitVolume: 2,
                    length: 2,
                    width: 2,
                    height: 2,
                    netWeight: 2,
                    volume: 2,
                    methodPkgCn: "2",
                    methodPkgEn: "2",
                    innerCartonUnit: "2",
                    innerCartonQty: 2,
                    innerCartonLength: 2,
                    innerCartonWidth: 2,
                    innerCartonHeight: 2,
                    innerCartonWeightNet: 2,
                    innerCartonRoughWeight: 2,
                    innerCartonVolume: 2,
                    innerCartonDesc: "2",
                    innerCartonMethodCn: "2",
                    innerCartonMethodEn: "2",
                    outerCartonUnit: "2",
                    outerCartonDesc: "2",
                    innerCartonOuterNum: 2,
                    outerCartonQty: 2,
                    outerCartonLength: 2,
                    outerCartonWidth: 2,
                    outerCartonHeight: 2,
                    outerCartonNetWeight: 2,
                    outerCartonRoughWeight: 2,
                    outerCartonVolume: 2,
                    outerCartonMethodCn: "2",
                    outerCartonMethodEn: "2",
                    oem: 2,
                    logisticId: 2,
                    version: 2,
                    pkgId: 2,
                    price: [
                        {
                            fobCurrency: 2,
                            fobPrice: 2,
                            fobPort: "2",
                            exwPrice: 2,
                            exwCurrency: 2,
                            otherIncoterm: 2,
                            otherIncotermPrice: 2,
                            otherIncotermArea: 2,
                            otherIncotermCurrency: 2,
                            status: 2
                        },
                        {
                            fobCurrency: 2,
                            fobPrice: 2,
                            fobPort: "2",
                            exwPrice: 2,
                            exwCurrency: 2,
                            otherIncoterm: 2,
                            otherIncotermPrice: 2,
                            otherIncotermArea: 2,
                            otherIncotermCurrency: 2,
                            status: 2
                        },
                    ]
                },
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
                        value:'China'
                    },
                    {
                        label:'美国',
                        value:'America'
                    },
                    {
                        label:'日本',
                        value:'Japan'
                    }
                ],
                //保质期单位
                expireUnitList:[
                    {
                        label:'小时',
                        value:'hour'
                    },
                    {
                        label:'日',
                        value:'day'
                    },
                    {
                        label:'月',
                        value:'month'
                    },
                    {
                        label:'年',
                        value:'year'
                    },
                ],
                //fob单位
                fobUnit:[
                    {
                        label:'USD',
                        value:'USD'
                    },
                    {
                        label:'CNY',
                        value:'CNY'
                    },
                    {
                        label:'EUR',
                        value:'EUR'
                    },
                ],
                //otherIncoterm单位
                otherIncotermUnit:[
                    {
                        label:'CIF',
                        value:'CIF'
                    },
                ],
                //weight单位
                weightUnit:[
                    {
                        label:'t',
                        value:'t'
                    },
                    {
                        label:'kg',
                        value:'kg'
                    },
                    {
                        label:'lb',
                        value:'lb'
                    },
                    {
                        label:'sh.ton',
                        value:'sh.ton'
                    },
                    {
                        label:'long ton',
                        value:'long ton'
                    },
                    {
                        label:'oz',
                        value:'oz'
                    },
                    {
                        label:'g',
                        value:'g'
                    },
                ],
                //length单位
                lengthUnit:[
                    {
                        label:'km',
                        value:'km'
                    },
                    {
                        label:'mile',
                        value:'mile'
                    },
                    {
                        label:'m',
                        value:'m'
                    },
                    {
                        label:'ft',
                        value:'ft'
                    },
                    {
                        label:'yd',
                        value:'yd'
                    },
                    {
                        label:'cm',
                        value:'cm'
                    },
                    {
                        label:'in',
                        value:'in'
                    },
                    {
                        label:'mm',
                        value:'mm'
                    },
                ],
                //volume单位
                volumeUnit:[
                    {
                        label:'m3',
                        value:'m3'
                    },
                    {
                        label:'liter',
                        value:'liter'
                    },
                    {
                        label:'ft3',
                        value:'ft3'
                    },
                    {
                        label:'mcf',
                        value:'mcf'
                    },
                    {
                        label:'in3',
                        value:'in3'
                    },
                    {
                        label:'cm3',
                        value:'cm3'
                    },
                    {
                        label:'bbl',
                        value:'bbl'
                    },
                    {
                        label:'gal',
                        value:'gal'
                    },
                    {
                        label:'qt',
                        value:'qt'
                    },
                    {
                        label:'pt',
                        value:'pt'
                    },
                    {
                        label:'gi',
                        value:'gi'
                    },
                ],
                //可否贴牌
                isOem:[
                    {
                        label:'是',
                        value:'1'
                    },
                    {
                        label:'否',
                        value:'2'
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


            finish(){
                let size=this.boxSize.length+'*'+this.boxSize.width+'*'+this.boxSize.height;
                this.$set(this.productForm,'lengthWidthHeight',size);

                this.ajax.post('/',{

                }).then().catch();

                console.log(this.productForm,'???')
            },
        }
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