<template>
    <div class="Details">
        <div class="head">
            <div class="title">
                {{$t('product.title.Workbenchware')}}（SKU name)
            </div>
            <div class="detail">
                <el-row>
                    <el-col :span="6">
                        <el-carousel trigger="click" height="200px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <img src="../../../assets/images/login-back.jpg" style="width: 100%" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                    <el-col :span="18">
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.skuEnglishName')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.skuStatus')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.vendorSKUCode')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.color')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.incoterm')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.incotermArea')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.incotermPrice')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.unitofMeasurement')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('product.page.supplierName')}} : xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                {{$t('product.page.skuEnglishDescription')}} : xxxx
                            </el-col>
                        </el-row>

                    </el-col>
                </el-row>
                <div class="btns">
                    <el-button type="primary">{{$t('product.btn.createInquiry')}}</el-button>
                    <el-button type="primary">{{$t('product.btn.createOrder')}}</el-button>
                    <el-button @click="addCompare" type="primary">{{$t('product.btn.addToCompare')}}</el-button>
                    <el-button round>{{$t('product.btn.addToBookmark')}}</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
                <el-tab-pane :label="$t('product.page.basicInformation')" name="Basic Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuStatus')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuNo')}} : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuEnglishName')}} : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuNameInCustomerLanguage')}} : XXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuEnglishDescription')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('product.page.skuDescriptionInCustomerLanguage')}} : XXXXXX
                        </el-col>

                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuCode')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.vendorSkuCode')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.supplierName')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.supplierCode')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitofMeasurement')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.productFormation')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.textureEnglish')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.colourEnglish')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.minimumOrderQuantity')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.deliveryDate')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.productDesign')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.categoryLevel1')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.categoryLevel2')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.categoryLevel3')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.categoryLevel4')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.readilyAvailable')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuAvailable')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.restrictedSellingCountry')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.applicableAge')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.expirationDate')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unexpirationDate')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('product.page.explain')}} : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.customInformation')" name="Customer Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.rateOfValueAddedTax')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.taxRefundRate')}} : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.customsCode')}} : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.customsDeclarationNameInChinese')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.customsDeclarationNameInEnglish')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.chineseTradeMark')}} : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.englishTradeMark')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.commodityInspectionChineseName')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.commodityInspectionEnglishName')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.declareElements')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.origin')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.inspectionAndQuarantineCategory')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.brand')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.related')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('product.page.brandRemark')}} : XXXXXX
                        </el-col>

                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.certificat')}} : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.price')" name="Price Info">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                :label="$t('product.tableData.fobCurrency')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                :label="$t('product.tableData.fobPrice')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.fobPort')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.exwPrice')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.exwCurrency')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.otherIncoterm')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.otherIncotermPrice')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.otherIncotermArea')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.otherIncotermCurrency')"
                                width="180px">
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage1"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.packingInfo')" name="Packing Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitOfWeight')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitOfLength')}} : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitOfVolume')}} : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuLength')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuBreadth')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuHeight')}} : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuNetWeight')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuVolume')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.packingMethodCN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.packingMethodEN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuQuantityOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.lengthOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.breadthOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.heightOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.netWeightOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.roughWeightOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.volumeOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.descriptionOfMediumPackage')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.packingMethodOfMediumPackageCN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.packingMethodOfMediumPackageEN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.unitOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.descriptionOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.mediumPackageOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuQuantityOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.lengthOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.breadthOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.heightOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.netWeightOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.roughWeightOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.volumeOfOuterBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.outerPackingMethodCN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.outerPackingMethodEN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.oem')}} : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.logisticInfo')" name="Logistic">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            20{{$t('product.page.gpSKUQuantity')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            40{{$t('product.page.gpSKUQuantity')}} : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            40{{$t('product.page.hqSKUQuantity')}} : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.trayDimension')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuQuantityPerTray')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.inventoryCostCalculationMethod')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('product.page.specialTransportRequirements')}} : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>

                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.defaultWarehouse')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.warehouseQuantity')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.safeStock')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.minimumStock')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.maximumBatch')}} : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.otherInfo')" name="Other Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.mainSaleCountry')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.mainSaleArea')}} : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.productionTime')}} : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.qualityStander')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.yearOfListed')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.useDisplayBoxOrNot')}} : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.skuQuantityInDisplayBox')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.lengthWidthAndHeight')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.otherPackingInformationCN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.otherPackingInformationEN')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('product.page.adjustSKUAndPackageOrNot')}} : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.attachment')" name="Attachment">

                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.tradeHistory')" name="History">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                :label="$t('product.tableData.inquiryNo')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                :label="$t('product.tableData.orderNo')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.orderDate')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.incoterm')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.incotermArea')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.purchaseCurrency')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.purchasePrice')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.orderPrice')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.totalQuantity')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.deliverDate')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.qcDate')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.logisticDate')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.logisticQuantity')"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                :label="$t('product.tableData.orderSkuQuantity')"
                                width="180px">
                        </el-table-column>
                        <!--<el-table-column-->
                                <!--prop="address"-->
                                <!--:label="$t('product.tableData.inquiryNo')"-->
                                <!--width="180px">-->
                        <!--</el-table-column>-->
                    </el-table>
                    <br>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage1"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.remark')" name="Remark">
                    <add-table></add-table>
                </el-tab-pane>
            </el-tabs>
        </div>

        <compare-list :config="compareConfig"></compare-list>

    </div>
</template>

<script>

    import addTable from '../addlineTable'
    import compareList from '../compareList'

    export default {
        name: "detail",
        components:{
            addTable,
            compareList
        },
        data(){
            return{
                value1: 0,
                tabName:'Basic Info',

                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
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

            //添加比较
            addCompare(){
                this.compareConfig.showCompareList=true;
            },
        }
    }
</script>

<style scoped>
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
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        border-bottom: 1px dotted #e0e0e0;
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
        line-height: 30px;
        font-size: 13px;
    }
</style>