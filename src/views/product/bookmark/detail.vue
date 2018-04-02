<template>
    <div class="Details">
        <div class="head">
            <div class="title">
                {{$t('product.page.workbenchware')}}（SKU name)
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
                <div class="btns" v-if="noEdit">
                    <el-button type="primary">{{$t('product.page.createInquiry')}}</el-button>
                    <el-button type="primary">{{$t('product.page.createOrder')}}</el-button>
                    <el-button @click="addCompare" type="primary">{{$t('product.page.addToCompare')}}</el-button>
                    <el-button class="roundBtn" @click="editBookmark" round> Edit </el-button>
                    <el-button @click="removeBookmark" class="roundBtn" round> Remove </el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">Finish</el-button>
                    <el-button @click="cancelEdit" type="info">Cancel</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
                <el-tab-pane :label="$t('product.page.basicInformation')" name="Basic Info">
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
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuNameInCustomerLanguage')+':'">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input size="mini" v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.skuEnglishDescription')+':'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.skuDescriptionInCustomerLanguage')+':'">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input size="mini" v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuCode')+':'">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input size="mini" v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.vendorSkuCode')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.supplierName')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.supplierCode')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitofMeasurement')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.productFormation')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.textureEnglish')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.colourEnglish')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.minimumOrderQuantity')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.deliveryDate')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.productDesign')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel1')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel2')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel3')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel4')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.readilyAvailable')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuAvailable')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.restrictedSellingCountry')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.applicableAge')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.expirationDate')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unexpirationDate')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.explain')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.customInformation')" name="Customer Info">
                    <el-form class="speForm" label-width="290px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.rateOfValueAddedTax')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.taxRefundRate')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.customsCode')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.customsDeclarationNameInChinese')+':'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.customsDeclarationNameInEnglish')+':'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.chineseTradeMark')+':'">
                                    asfsaf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.englishTradeMark')+':'">
                                    asfasgqewtq
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.commodityInspectionChineseName')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.commodityInspectionEnglishName')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.declareElements')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.origin')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.inspectionAndQuarantineCategory')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.brand')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.related')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.brandRemark')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.certificat')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
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
                    <el-form class="speForm" label-width="300px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitOfWeight')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitOfLength')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitOfVolume')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuLength')+':'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuBreadth')+':'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuHeight')+':'">
                                    asfsaf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuNetWeight')+':'">
                                    asfasgqewtq
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuVolume')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.packingMethodCN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.packingMethodEN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuQuantityOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.lengthOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.breadthOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.heightOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.netWeightOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.roughWeightOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.volumeOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.descriptionOfMediumPackage')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.packingMethodOfMediumPackageCN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.packingMethodOfMediumPackageEN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.descriptionOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.mediumPackageOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuQuantityOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.lengthOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.breadthOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.heightOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.netWeightOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.roughWeightOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.volumeOfOuterBox')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.outerPackingMethodCN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.outerPackingMethodEN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.oem')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.logisticInfo')" name="Logistic">
                    <el-form class="speForm" label-width="260px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'20'+$t('product.page.gpSKUQuantity')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'40'+$t('product.page.gpSKUQuantity')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="'40'+$t('product.page.hqSKUQuantity')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.trayDimension')+':'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuQuantityPerTray')+':'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.inventoryCostCalculationMethod')+':'">
                                    asfsaf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.specialTransportRequirements')+':'">
                                    asfasgqewtq
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.defaultWarehouse')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.warehouseQuantity')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.safeStock')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.minimumStock')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.maximumBatch')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="$t('product.page.otherInfo')" name="Other Info">
                    <el-form class="speForm" label-width="250px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.mainSaleCountry')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.mainSaleArea')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.productionTime')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.qualityStander')+':'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.yearOfListed')+':'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.useDisplayBoxOrNot')+':'">
                                    asfsaf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuQuantityInDisplayBox')+':'">
                                    asfasgqewtq
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.lengthWidthAndHeight')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.otherPackingInformationCN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.otherPackingInformationEN')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.adjustSKUAndPackageOrNot')+':'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
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
                noEdit:true,                //是否处在非编辑状态

                labelPosition:'left',
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

            //编辑bookmark
            editBookmark(){
                this.noEdit=false;
                this.tabName='Basic Info';
            },

            //完成编辑
            finishEdit(){
                this.noEdit=true;
            },

            //取消编辑
            cancelEdit(){
                this.noEdit=true;
            },

            //添加比较
            addCompare(){
                this.compareConfig.showCompareList=true;
            },


            //移除bookmark
            removeBookmark(){
                this.$confirm('是否确认删除该bookmark？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Successfully Remove！'
                    });
                    this.$router.push('/product/bookmark');
                }).catch(() => {

                });
            },

        },

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

    .Details .head .title .title-btn{
        float: right;
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
    .Details .head .detail .btns .roundBtn{
        padding: 9px 25px;
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

    .speForm .el-form-item--small.el-form-item{
        margin-bottom: 0;
    }
    .speForm .el-row .list .el-input{
        width: 80%;
    }
</style>