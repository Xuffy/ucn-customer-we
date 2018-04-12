<template>
    <div class="Details">
        <div class="head">
            <div class="title">
                {{productForm.nameCn}}   (采购商显示英文，供应商显示中文)
            </div>
            <div class="detail">
                <el-row>
                    <el-col :span="6">
                        <el-carousel class="banner" :autoplay="false" indicator-position="none" arrow="always" trigger="click" height="150px">
                            <el-carousel-item v-for="item in 3" :key="item">
                                <img src="../../assets/images/login-back.jpg" style="width: 100%" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                    <el-col :span="18">
                        <el-form :modal="productForm" ref="sourcingDetail" label-width="190px">
                            <el-row>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.skuNameCN')+' :'">
                                        {{productForm.nameCn}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.skuSaleStatus')+' :'">
                                        {{productForm.status===0?'下架':'上架'}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.skuCode')+' :'">
                                        {{productForm.code}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.colourCN')+' :'">
                                        {{productForm.colourCn}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.incoterm')+' :'">
                                        {{productForm.colourCn}}******
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.incotermArea')+' :'">
                                        {{productForm.colourCn}}*******
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.incotermPrice')+' :'">
                                        {{productForm.colourCn}}*******
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.unit')+' :'">
                                        {{productForm.unit}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.supplierName')+' :'">
                                        {{productForm.supplierName}}
                                    </el-form-item>
                                </el-col>
                                <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item prop="categoryId" :label="$t('productSeller.page.skuDescriptionCN')+' :'">
                                        {{productForm.descCn}}
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-col>
                </el-row>
                <div class="btns">
                    <el-button @click="editProduct">{{$t('productSeller.page.edit')}}</el-button>
                    <el-button :loading="disabledSetupBtn" @click="setUp">{{$t('productSeller.page.setUp')}}</el-button>
                    <el-button @click="addNewProduct">{{$t('productSeller.page.addNewProduct')}}</el-button>
                    <el-button :loading="disabledDeleteBtn" type="danger" @click="deleteProduct">{{$t('productSeller.page.delete')}}</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="border-card" @tab-click="handleClick">
                <el-tab-pane :label="$t('productSeller.page.basicInformation')" name="Basic Info">
                    <el-form class="speForm" label-width="300px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuSaleStatus')+' :'">
                                    {{productForm.status}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuCode')+' :'">
                                    {{productForm.code}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuNameCN')+' :'">
                                    {{productForm.nameCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuDescriptionCN')+' :'">
                                    {{productForm.descCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.skuNameEN')+' :'">
                                    {{productForm.nameEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.skuDescriptionEN')+' :'">
                                    {{productForm.descEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuNameInCustomerLanguage')+' :'">
                                    {{productForm.nameCustomer}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuDescriptionInCustomerLanguage')+' :'">
                                    {{productForm.descCustomer}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.customerSkuCode')+' :'">
                                    {{productForm.customerSkuCode}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.supplierName')+' :'">
                                    {{productForm.supplierName}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.supplierCode')+' :'">
                                    {{productForm.supplierCode}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unit')+' :'">
                                    {{productForm.unit}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.productFormation')+' :'">
                                    {{productForm.formation}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.martialEN')+' :'">
                                    {{productForm.materialEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.martialCN')+' :'">
                                    {{productForm.materialCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.colourEN')+' :'">
                                    {{productForm.colourEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.colourCN')+' :'">
                                    {{productForm.colourCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.minimumOrderQuantity')+' :'">
                                    {{productForm.minOrderQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.deliveryDays')+' :'">
                                    {{productForm.deliveryDates}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.productDesign')+' :'">
                                    {{productForm.design}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.categoryLevel1')+' :'">
                                    <span style="color:red">暂未处理</span>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.categoryLevel2')+' :'">
                                    <span style="color:red">暂未处理</span>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.barCode')+' :'">
                                    {{productForm.barcode}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.readilyAvailable')+' :'">
                                    {{productForm.readilyAvailable}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuAvailable')+' :'">
                                    {{productForm.availableQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.restrictedSellingCountry')+' :'">
                                    {{productForm.noneSellCountry}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.applicableAge')+' :'">
                                    {{productForm.applicableAge}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.expirationDate')+' :'">
                                    {{productForm.expireDates}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.expirationDateUnit')+' :'">
                                    {{productForm.expireUnit}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.explain')+' :'">
                                    {{productForm.comments}}
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.customInformation')" name="Customer Info">
                    <el-form class="speForm" label-width="290px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.rateOfValueAddedTax')+':'">
                                    {{productForm.rateValueAddedTax}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.taxRefundRate')+':'">
                                    {{productForm.taxRefundRate}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.hsCode')+':'">
                                    {{productForm.customsCode}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.customsDeclarationNameCN')+':'">
                                    {{productForm.customsNameCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.customsDeclarationNameEN')+':'">
                                    {{productForm.customsNameEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.chineseTradeMark')+':'">
                                    {{productForm.tradeMarkCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.englishTradeMark')+':'">
                                    {{productForm.tradeMarkEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.commodityInspectionChineseName')+':'">
                                    {{productForm.commodityInspectionCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.commodityInspectionEnglishName')+':'">
                                    {{productForm.commodityInspectionEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.declareElements')+':'">
                                    {{productForm.declareElement}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.origin')+':'">
                                    {{productForm.origin}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.inspectionAndQuarantineCategory')+':'">
                                    {{productForm.inspectQuarantineCategory}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.brand')+':'">
                                    {{productForm.brand}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.brandRemark')+':'">
                                    {{productForm.brandRemark}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.relatedBrand')+':'">
                                    {{productForm.brandRelated}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.certificat')+':'">
                                    {{productForm.certificat}}
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.priceInfo')" name="Price Info">

                    <v-table :data="productForm.price" data-key="productSeller.tableData"></v-table>

                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.packingInfo')" name="Packing Info">
                    <el-form class="speForm" label-width="300px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unitOfWeight')+':'">
                                    {{productForm.unitWeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unitOfLength')+':'">
                                    {{productForm.unitLength}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unitOfVolume')+':'">
                                    {{productForm.unitVolume}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuLength')+':'">
                                    {{productForm.length}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuBreadth')+':'">
                                    {{productForm.width}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuHeight')+':'">
                                    {{productForm.height}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuNetWeight')+':'">
                                    {{productForm.netWeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuVolume')+':'">
                                    {{productForm.volume}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodCN')+':'">
                                    {{productForm.methodPkgCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodEN')+':'">
                                    {{productForm.methodPkgEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unitOfInnerCarton')+':'">
                                    {{productForm.innerCartonUnit}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuQuantityOfInnerCarton')+':'">
                                    {{productForm.innerCartonQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.lengthOfInnerCarton')+':'">
                                    {{productForm.innerCartonLength}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.breadthOfInnerCarton')+':'">
                                    {{productForm.innerCartonWidth}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.heightOfInnerCarton')+':'">
                                    {{productForm.innerCartonHeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.netWeightOfInnerCarton')+':'">
                                    {{productForm.innerCartonWeightNet}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.grossWeightOfInnerCarton')+':'">
                                    {{productForm.innerCartonRoughWeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.volumeOfInnerCarton')+':'">
                                    {{productForm.innerCartonVolume}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.descriptionOfInnerCarton')+':'">
                                    {{productForm.innerCartonDesc}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodOfInnerCartonCN')+':'">
                                    {{productForm.innerCartonMethodCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodOfInnerCartonEN')+':'">
                                    {{productForm.innerCartonMethodEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.unitOfOuterCarton')+':'">
                                    {{productForm.outerCartonUnit}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.descriptionOfOuterCarton')+':'">
                                    {{productForm.outerCartonDesc}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.quantityOfInnerBoxInOuterCarton')+':'">
                                    {{productForm.innerCartonOuterNum}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuQuantityOfOuterCarton')+':'">
                                    {{productForm.outerCartonQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.lengthOfOuterCarton')+':'">
                                    {{productForm.outerCartonLength}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.breadthOfOuterCarton')+':'">
                                    {{productForm.outerCartonWidth}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.heightOfOuterCarton')+':'">
                                    {{productForm.outerCartonHeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.netWeightOfOuterCarton')+':'">
                                    {{productForm.outerCartonNetWeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.grossWeightOfOuterCarton')+':'">
                                    {{productForm.outerCartonRoughWeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.volumeOfOuterCarton')+':'">
                                    {{productForm.outerCartonVolume}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodOfOuterCartonCN')+':'">
                                    {{productForm.outerCartonMethodCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.packingMethodOfOuterCartonEN')+':'">
                                    {{productForm.outerCartonMethodEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.oem')+':'">
                                    {{productForm.oem}}
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.logisticInfo')" name="Logistic">
                    <el-form class="speForm" label-width="260px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'20'+$t('productSeller.page.gpSKUQuantity20')+':'">
                                    {{productForm.gp20SkuQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'40'+$t('productSeller.page.gpSKUQuantity40')+':'">
                                    {{productForm.gp40SkuQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'40'+$t('productSeller.page.hqSKUQuantity40')+':'">
                                    {{productForm.hq40SkuQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.trayDimension')+':'">
                                    {{productForm.tryDimension}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuQuantityPerTray')+':'">
                                    {{productForm.skuQtyPerTray}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.specialTransportRequirements')+':'">
                                    {{productForm.specialTransportRequire}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.inventoryCostCalculationMethod')+':'">
                                    {{productForm.inventoryCostMethod}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.defaultWarehouse')+':'">
                                    {{productForm.warehourceDefault}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.supplierInventoryQuantity')+':'">
                                    {{productForm.inventory}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.supplierSafeInventoryQuantity')+':'">
                                    {{productForm.safeInventory}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.supplierMinimumInventory')+':'">
                                    {{productForm.minInventory}}
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.otherInfo')" name="Other Info">
                    <el-form class="speForm" label-width="250px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.mainSaleCountry')+':'">
                                    {{productForm.mainSaleCountry}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.mainSaleArea')+':'">
                                    {{productForm.mainSaleArea}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.productionDays')+':'">
                                    {{productForm.productionDates}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.qualityStander')+':'">
                                    {{productForm.qualityStander}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.yearOfListed')+':'">
                                    {{productForm.yearListed}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.useDisplayBoxOrNot')+':'">
                                    {{productForm.useDisplayBox}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.skuQuantityInDisplayBox')+':'">
                                    {{productForm.displayBoxQty}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.lengthBreadthAndHeight')+':'">
                                    {{productForm.lengthWidthHeight}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.otherPackingInformationCN')+':'">
                                    {{productForm.otherPackInfoCn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('productSeller.page.otherPackingInformationEN')+':'">
                                    {{productForm.otherPackInfoEn}}
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('productSeller.page.adjustSKUAndPackageOrNot')+':'">
                                    {{productForm.adjustPackage}}
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.attachment')" name="Attachment">

                </el-tab-pane>
                <el-tab-pane :label="$t('productSeller.page.tradeHistory')" name="History">
                    <span style="color:red">暂时接口还没做</span>
                </el-tab-pane>
                <!--<el-tab-pane :label="$t('productSeller.page.remark')" name="Remark">-->
                    <!--<span style="color:red">暂时接口还没做</span>-->
                    <!--<add-table></add-table>-->
                <!--</el-tab-pane>-->
            </el-tabs>
        </div>


    </div>
</template>

<script>
    import VTable from '@/components/common/table/index'
    import addTable from '../product/addlineTable'

    export default {
        name: "detail",
        components:{
            addTable,
            VTable
        },
        data(){
            return{
                value1: 0,
                tabName:'Basic Info',
                labelPosition:'left',               //文字靠边参数，left或者right
                //页面数据
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

                //btn禁用状态组
                disabledDeleteBtn:false,
                disabledSetupBtn:false,

                currentPage1:1,

                //compareList配置
                compareConfig:{
                    showCompareList:false,      //是否显示比较列表
                },
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(){
                //切换tab页
            },

            //获取产品详情
            getGoodsData(){
                this.$ajax.get(this.$apis.get_productDetail,{id:'1'}).then(res=>{
                    this.productForm=res;
                }).catch(err=>{
                    console.log(err)
                });
            },

            //编辑产品
            editProduct(){
                this.windowOpen('/sellerProduct/addNewProduct',{id:1});
            },

            //设为上架
            setUp(){
                this.$confirm('确定上架该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.disabledSetupBtn=true;
                    this.$ajax.post(this.$apis.change_productStatus,{
                        id:this.productForm.id,
                        status:false
                    }).then(res=>{
                        this.disabledSetupBtn=false;
                        this.$message({
                            message: '上架成功',
                            type: 'success'
                        });
                    }).catch(err=>{
                        this.disabledSetupBtn=false;
                    });
                }).catch(() => {

                });
            },

            //添加新产品
            addNewProduct(){
                this.windowOpen('/sellerProduct/addNewProduct');
            },

            //删除产品
            deleteProduct(){
                this.$confirm('是否确认删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.disabledDeleteBtn=true;
                    this.$ajax.post(this.$apis.delete_product,{id:this.productForm.id}).then(res=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.$router.push('/sellerProduct/overview');
                        this.disabledDeleteBtn=false;
                    }).catch(err=>{
                        this.disabledDeleteBtn=false;
                    });
                }).catch(() => {

                });
            },
        },
        created(){
            this.getGoodsData();
        },
    }
</script>

<style scoped>
    >>> .el-form-item__content{
        word-wrap: break-word;
    }


    .Details{
        background-color: #f4f4f4;
    }
    .Details .head{
        background-color: #FFFFFF;
        padding:0 20px;

    }
    .Details .head .title{
        position: relative;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
        color:#666666;
    }

    .Details .head .title .btn{
        position: absolute;
        right: 10px;
        top:4px;
    }
    .Details .head .detail{
        margin-top: 8px;
    }
    .Details .head .detail .carousel-img{
        height: 170px;
    }
    .Details .head .detail .carousel-img img{
        width: 100%;
        height: 100%;
    }
    .Details .head .detail .right{
        /*padding-top: 10px;*/
    }
    .Details .head .detail .list{
        /*padding-left: 30px;*/
        /*font-size: 14px;*/
        /*line-height: 2.5;*/
        /*border-bottom: 1px dotted #e0e0e0;*/
    }
    .Details .head .detail .list >>> .el-form-item.el-form-item--small{
        margin-bottom: 6px;
    }
    .Details .head .detail .btns{
        text-align: center;
        padding: 15px 0;
    }
    .Details .head .detail .btns>Button{
        margin-right: 10px;
    }

    .Details .body{
        margin-top: 10px;
        margin-bottom: 35px;
        background-color: #FFFFFF;
    }
    .Details .body .list{
        line-height: 35px;
        font-size: 13px;
        height: 35px;
    }
    .Details .body .list >>> label{
        /*text-align: right;*/
    }

    .speForm .el-form-item--small.el-form-item{
        margin-bottom: 0;
    }
    .speForm .el-row .list .el-input{
        width: 80%;
    }
</style>