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
                        <el-form-item>
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
                        <el-input-number
                                v-model="scope.row.fobPrice"
                                :controls="false"
                                :min="0"
                                label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="fobPort"
                        align="center"
                        :label="$t('productSeller.tableData.fobPort')"
                        width="180">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.fobPort"
                                clearable
                                placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="exwPrice"
                        align="center"
                        :label="$t('productSeller.tableData.exwPrice')"
                        width="180">
                    <template slot-scope="scope">
                        <el-input-number
                                v-model="scope.row.exwPrice"
                                :controls="false"
                                :min="0"
                                label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="exwCurrency"
                        align="center"
                        :label="$t('productSeller.tableData.exwCurrency')"
                        width="180">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.exwCurrency" placeholder="请选择">
                            <el-option
                                    v-for="item in fobUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncoterm"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncoterm')"
                        width="180">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.otherIncoterm" placeholder="请选择">
                            <el-option
                                    v-for="item in otherIncotermUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermPrice"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermPrice')"
                        width="180">
                    <template slot-scope="scope">
                        <el-input-number
                                v-model="scope.row.otherIncotermPrice"
                                :controls="false"
                                :min="0"
                                label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermArea"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermArea')"
                        width="180">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.otherIncotermArea"
                                clearable
                                placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="otherIncotermCurrency"
                        align="center"
                        :label="$t('productSeller.tableData.otherIncotermCurrency')"
                        width="180">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.otherIncotermCurrency" placeholder="请选择">
                            <el-option
                                    v-for="item in fobUnit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>


        <div class="title">
            {{$t('productSeller.page.packingInfo')}}
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
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuBreadth')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuHeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuNetWeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuVolume')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.breadthOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item :label="$t('product.page.heightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.netWeightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.roughWeightOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.volumeOfMediumPackage')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuQuantityOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.breadthOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.heightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.netWeightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.roughWeightOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :max="100"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.volumeOfOuterBox')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="'40'+$t('product.page.gpSKUQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="'40'+$t('product.page.hqSKUQuantity')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.trayDimension')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.skuQuantityPerTray')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.safeStock')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.minimumStock')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
                                :controls="false"
                                label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.maximumBatch')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                                :min="0"
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
                                :min="0"
                                :controls="false"
                                label="描述文字">
                        </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-form-item :label="$t('product.page.lengthWidthAndHeight')+':'">
                        <el-input-number
                                v-model="skuEnglishName"
                                :min="0"
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
                    status: 0,
                    nameEn: "",
                    barcode: "",
                    nameCn: "",
                    descEn: "",
                    descCn: "",
                    descCustomer: "",
                    nameCustomer: "",
                    customerSkuCode: "",
                    supplierCode: "",
                    supplierName: "",
                    code: "",
                    unit: "",
                    formation: "",
                    materialEn: "",
                    materialCn: "",
                    colourEn: "",
                    colourCn: "",
                    minOrderQty: 0,
                    deliveryDates: 0,
                    design: "string",
                    noneSellCountry: 0,
                    applicableAge: 0,
                    expireDates: 0,
                    expireUnit: "",
                    comments: "",
                    readilyAvailable: true,
                    availableQty: 0,
                    mainSaleCountry: 0,
                    mainSaleArea: "",
                    productionDates: 0,
                    qualityStander: "",
                    yearListed: "2018-04-09T03:45:23.312Z",
                    useDisplayBox: true,
                    displayBoxQty: 0,
                    otherPackInfoCn: "",
                    otherPackInfoEn: "",
                    adjustPackage: true,
                    lengthWidthHeight: "",
                    recycle: true,
                    categoryId: 0,
                    rateValueAddedTax: 0,
                    taxRefundRate: 0,
                    customsCode: "",
                    customsNameCn: "",
                    customsNameEn: "",
                    tradeMarkCn: "",
                    tradeMarkEn: "",
                    commodityInspectionCn: "",
                    commodityInspectionEn: "",
                    declareElement: "",
                    origin: "",
                    inspectQuarantineCategory: "",
                    brand: "",
                    brandRemark: "",
                    brandRelated: "",
                    certificat: "",
                    gp20SkuQty: 0,
                    gp40SkuQty: 0,
                    hq40SkuQty: 0,
                    tryDimension: 0,
                    skuQtyPerTray: 0,
                    specialTransportRequire: "",
                    inventoryCostMethod: "",
                    warehourceDefault: "",
                    inventory: 0,
                    safeInventory: 0,
                    minInventory: 0,
                    unitWeight: 0,
                    unitLength: 0,
                    unitVolume: 0,
                    length: 0,
                    width: 0,
                    height: 0,
                    netWeight: 0,
                    volume: 0,
                    methodPkgCn: "",
                    methodPkgEn: "",
                    innerCartonUnit: "",
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
                    outerCartonUnit: "",
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
                    oem: true,
                    logisticId: 0,
                    version: 0,
                    pkgId: 0,
                    price: [
                        {
                            fobCurrency: 2,
                            fobPrice: 0,
                            fobPort: "string",
                            exwPrice: 0,
                            exwCurrency: 0,
                            otherIncoterm: 0,
                            otherIncotermPrice: 0,
                            otherIncotermArea: 0,
                            otherIncotermCurrency: 0,
                            status: 1
                        },
                        {
                            fobCurrency: 0,
                            fobPrice: 0,
                            fobPort: "string",
                            exwPrice: 0,
                            exwCurrency: 0,
                            otherIncoterm: 0,
                            otherIncotermPrice: 0,
                            otherIncotermArea: 0,
                            otherIncotermCurrency: 0,
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