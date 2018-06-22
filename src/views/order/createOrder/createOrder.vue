<template>
    <div class="create-order" v-loading="loadingPage">
        <div class="title">
            {{$i.order.basicInfo}}
        </div>
        <el-form ref="basicInfo" class="speForm" label-width="250px" :label-position="labelPosition">
            <el-row>
                <el-col :class="{speCol:v.type!=='textarea' && v.type!=='attachment'}" v-for="v in $db.order.orderDetail" v-if="v.belong==='basicInfo' && !v.createHide" :key="v.key" :xs="24" :sm="v.fullLine?24:12" :md="v.fullLine?24:12" :lg="v.fullLine?24:8" :xl="v.fullLine?24:8">
                    <el-form-item :label="v.label" :required="v._rules?v._rules.required:false">
                        <div v-if="v.type==='input'">
                            <div v-if="v.key==='lcNo'">
                                <el-input
                                        :placeholder="v.isQuotationNo?$i.order.pleaseCreate:$i.order.pleaseInput"
                                        class="speInput"
                                        :disabled="v.disabled || disabledLcNo"
                                        v-model="orderForm[v.key]"></el-input>
                            </div>
                            <div v-else>
                                <el-input
                                        :placeholder="v.isQuotationNo?$i.order.pleaseCreate:$i.order.pleaseInput"
                                        class="speInput"
                                        :disabled="v.disabled"
                                        v-model="orderForm[v.key]"></el-input>
                            </div>
                        </div>
                        <div v-else-if="v.type==='date'">
                            <el-date-picker
                                    :disabled="v.disabled"
                                    v-model="orderForm[v.key]"
                                    :editable="false"
                                    :placeholder="$i.order.pleaseChoose"
                                    class="speInput"
                                    align="right"
                                    type="date">
                            </el-date-picker>
                        </div>
                        <div v-else-if="v.type==='select'">
                            <div v-if="v.isSupplier">
                                <el-select
                                        class="speInput"
                                        filterable
                                        v-model="orderForm[v.key]"
                                        @change="handleChangeSupplier(orderForm[v.key])"
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in supplierOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isIncoterm">
                                <el-select
                                        class="speInput"
                                        v-model="orderForm[v.key]"
                                        filterable
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in incotermOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isCurrency">
                                <el-select
                                        class="speInput"
                                        v-model="orderForm[v.key]"
                                        filterable
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in currencyOption"
                                            :key="item.id"
                                            :label="item.code"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isPayment">
                                <el-select
                                        class="speInput"
                                        @change="changePayment"
                                        v-model="orderForm[v.key]"
                                        filterable
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in paymentOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isCountry">
                                <el-select
                                        class="speInput"
                                        v-model="orderForm[v.key]"
                                        filterable
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in countryOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else-if="v.isTransport">
                                <el-select
                                        class="speInput"
                                        v-model="orderForm[v.key]"
                                        filterable
                                        :disabled="v.disabled"
                                        :placeholder="$i.order.pleaseChoose">
                                    <el-option
                                            v-for="item in transportOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else>
                                <el-select
                                        :placeholder="$i.order.pleaseChoose"
                                        :disabled="v.disabled"
                                        class="speInput"
                                        v-model="orderForm[v.key]">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div v-else-if="v.type==='number'">
                            <el-input-number
                                    :placeholder="$i.order.pleaseInput"
                                    :disabled="v.disabled"
                                    class="speInput speNumber"
                                    v-model="orderForm[v.key]"
                                    :controls="false">

                            </el-input-number>
                        </div>
                        <div v-else-if="v.type==='textarea'">
                            <el-input
                                    :disabled="v.disabled"
                                    class="speInput"
                                    type="textarea"
                                    :autosize="{ minRows: 2}"
                                    :placeholder="$i.order.pleaseInput"
                                    v-model="orderForm[v.key]">
                            </el-input>
                        </div>
                        <div v-else-if="v.type==='attachment'">
                            <v-upload
                                    ref="upload"
                                    :list="orderForm.attachments"
                                    :limit="20"></v-upload>
                        </div>
                        <div v-else-if="v.type==='supplierNo'">
                            <el-input
                                    :placeholder="$i.order.baseSupplierName"
                                    class="speInput"
                                    :disabled="true"
                                    v-model="supplierNo"></el-input>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="title">
            {{$i.order.exchangeRate}}
        </div>
        <el-form :modal="orderForm" ref="basicInfo" class="speForm" label-width="250px" :label-position="labelPosition">
            <el-row>
                <el-col class="speCol" v-for="v in orderForm.exchangeRateList" :key="v.currency" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <el-form-item :label="$i.order[v.currency]">
                        <el-input-number
                                :disabled="true"
                                :placeholder="$i.order.pleaseInput"
                                class="speInput speNumber"
                                v-model="v.exchangeRate"
                                :controls="false">
                        </el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="title">
            {{$i.order.responsibility}}
        </div>
        <el-table
                :data="orderForm.responsibilityList"
                style="width: 100%">
            <el-table-column
                    prop="type"
                    label="Type">
                <template slot-scope="scope">
                    <span v-if="scope.row.type==='0' || scope.row.type===0">{{$i.order.needLabelDesignInfoDate}}</span>
                    <span v-if="scope.row.type==='1' || scope.row.type===1">{{$i.order.labelDesignDate}}</span>
                    <span v-if="scope.row.type==='2' || scope.row.type===2">{{$i.order.designNeedConfirmDate}}</span>
                    <span v-if="scope.row.type==='3' || scope.row.type===3">{{$i.order.receiveSampleDate}}</span>
                    <span v-if="scope.row.type==='4' || scope.row.type===4">{{$i.order.sampleNeedConfirmDate}}</span>
                    <span v-if="scope.row.type==='5' || scope.row.type===5">{{$i.order.otherResponsibility}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="customer"
                    align="center"
                    label="Me">
                <template slot-scope="scope">
                    <el-date-picker
                            v-model="scope.row.customer"
                            :editable="false"
                            align="right"
                            type="date"
                            :disabled="true"
                            :placeholder="$i.order.pleaseChoose"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </template>
            </el-table-column>
            <el-table-column
                    prop="supplier"
                    align="center"
                    label="Supplier">
                <template slot-scope="scope">
                    <el-date-picker
                            v-model="scope.row.supplier"
                            align="right"
                            :editable="false"
                            type="date"
                            :disabled="true"
                            :placeholder="$i.order.pleaseChoose"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </template>
            </el-table-column>
            <el-table-column
                    prop="Remark"
                    align="center"
                    label="Remark">
                <template slot-scope="scope">
                    <el-input
                            :disabled="true"
                            :placeholder="$i.order.pleaseInput"
                            v-model="scope.row.remark"
                            clearable>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="actualDate"
                    align="center"
                    label="Actual Date">
                <template slot-scope="scope">
                    <el-date-picker
                            v-model="scope.row.actualDt"
                            align="right"
                            type="date"
                            :editable="false"
                            :disabled="true"
                            :placeholder="$i.order.pleaseChoose"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </template>
            </el-table-column>
        </el-table>

        <div class="title">
            {{$i.order.productInfoBig}}
        </div>
        <v-table
                :height="500"
                :data.sync="productTableData"
                :buttons="productInfoBtn"
                @action="productInfoAction"
                :loading='loadingProductTable'
                @change-checked="changeProductChecked"
                :rowspan="2"
                :total-row="tableTotal">
            <template slot="header">
                <div class="btns">
                    <el-button @click="addProduct">{{$i.order.addProduct}}</el-button>
                    <el-button @click="removeProduct" :disabled="selectProductInfoTable.length===0" type="danger">{{$i.order.remove}}</el-button>
                </div>
            </template>
        </v-table>

        <div class="summary">
            <div class="second-title">
                {{$i.order.summary}}
            </div>
            <el-form label-width="280px">
                <el-row class="speZone">
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalQty">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalQty"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.skuQtys">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.skuQty"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalSkuPrice">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalSkuPrice"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalOuterCartonQty">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalOuterCartonQty"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalGrossWeight">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalGrossWeight"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalNetWeight">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalNetWeight"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.totalVolume">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.totalVolume"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.paidAmount">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.paidAmount"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :label="$i.order.unpaidAmount">
                            <el-input
                                    class="summaryInput"
                                    size="mini"
                                    v-model="orderForm.unpaidAmount"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>

        <div class="footBtn">
            <el-button :disabled="loadingPage" :loading="disableClickSend" @click="send" type="primary">{{$i.order.send}}</el-button>
            <el-button :disabled="loadingPage" :loading="disableClickSaveDraft" @click="saveAsDraft" type="primary">{{$i.order.saveAsDraft}}</el-button>
            <el-button :disabled="loadingPage" type="primary" @click="quickCreate">{{$i.order.quickCreate}}</el-button>
        </div>

        <el-dialog
            title=""
            :visible.sync="quickCreateDialogVisible"
            width="70%">
            <v-table
                    :height="400"
                    :loading="loadingTable"
                    :data="tableDataList"
                    :buttons="[{label: this.$i.order.createOrder, type: 1}]"
                    @change-checked="changeChecked"
                    @action="btnClick">
                <template slot="header">
                    <select-search
                            :width="300"
                            class="search"
                            @inputEnter="searchInquiry"
                            v-model="searchId"
                            :options="searchOptions"></select-search>
                    <!--<div class="btns">-->
                    <!--<el-button>{{$i.warehouse.download}}({{selectList.length?selectList.length:'All'}})</el-button>-->
                    <!--</div>-->
                </template>
            </v-table>
            <page
                    @size-change="changeSize"
                    @change="changePage"
                    :pageSizes="[50,100,200]"
                    :page-data="pageData"></page>
        </el-dialog>

        <el-dialog
                :title="$i.order.addProduct"
                :visible.sync="productTableDialogVisible"
                width="70%">
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
                <el-tab-pane :label="$i.order.fromNewSearch" name="product">
                    <v-product
                            :disabledLine="disabledProductLine"
                            :forceUpdateNumber="updateProduct"
                            :hideBtn="true"
                            :isInModify="true"
                            :type="type1"
                            @handleOK="handleProductOk"
                            @handleCancel="handleCancel"></v-product>
                </el-tab-pane>
                <el-tab-pane :label="$i.order.fromBookmark" name="bookmark">
                    <v-product
                            :disablePostCustomerCreate="true"
                            :disabledLine="disabledProductLine"
                            :forceUpdateNumber="updateBookmark"
                            :hideBtn="true"
                            :isInModify="true"
                            @handleOK="handleProductOk"
                            @handleCancel="handleCancel"
                            :type="type2"></v-product>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>

        <v-history-modify
                @save="saveNegotiate"
                ref="HM">
            <!--<div slot="skuPic" slot-scope="{data}">-->
            <!--<v-upload :limit="20" readonly></v-upload>-->
            <!--</div>-->
            <el-select
                    slot="skuFobCurrency"
                    v-model="data.value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in currencyOption"
                        :key="item.id"
                        :label="item.code"
                        :value="item.code">
                </el-option>
            </el-select>
            <el-select
                    slot="skuExwCurrency"
                    v-model="data.value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in currencyOption"
                        :key="item.id"
                        :label="item.code"
                        :value="item.code">
                </el-option>
            </el-select>
            <el-select
                    slot="skuCifCurrency"
                    v-model="data.value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in currencyOption"
                        :key="item.id"
                        :label="item.code"
                        :value="item.code">
                </el-option>
            </el-select>
            <el-select
                    slot="skuDduCurrency"
                    v-model="data.value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in currencyOption"
                        :key="item.id"
                        :label="item.code"
                        :value="item.code">
                </el-option>
            </el-select>
            <el-select
                    slot="skuUnit"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in skuUnitOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuUnitWeight"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in weightOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuUnitLength"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in lengthOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuUnitVolume"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in volumeOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuExpireUnit"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in expirationDateOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuSample"
                    v-model="data._value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in isNeedSampleOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                </el-option>
            </el-select>
            <el-select
                    slot="skuInspectQuarantineCategory"
                    v-model="data.value"
                    slot-scope="{data}"
                    clearable
                    :placeholder="$i.order.pleaseChoose">
                <el-option
                        v-for="item in quarantineTypeOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                </el-option>
            </el-select>
            <!--<el-select-->
                    <!--slot="skuStatus"-->
                    <!--v-model="data._value"-->
                    <!--slot-scope="{data}"-->
                    <!--clearable-->
                    <!--:placeholder="$i.order.pleaseChoose">-->
                <!--<el-option-->
                        <!--v-for="item in skuStatusOption"-->
                        <!--:key="item.id"-->
                        <!--:label="item.name"-->
                        <!--:value="item.name">-->
                <!--</el-option>-->
            <!--</el-select>-->
、

            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuFobPrice"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuExwPrice"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuCifPrice"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuDduPrice"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuQty"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    class="speNumber spx"
                    :controls="false"
                    slot="skuPrice"
                    :disabled="true"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    :max="100"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuRateValueAddedTax"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    :max="100"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuTaxRefundRate"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuLength"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuWidth"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuHeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuNetWeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuVolume"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonQty"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonLength"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonWidth"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonHeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonWeightNet"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonRoughWeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonVolume"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuInnerCartonOuterNum"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonQty"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonLength"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonWidth"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonHeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonNetWeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonRoughWeight"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuOuterCartonVolume"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuApplicableAge"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuExpireDates"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuSampleQty"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuSamplePrice"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>
            <el-input-number
                    :min="0"
                    class="speNumber spx"
                    :controls="false"
                    slot="skuDeliveryDates"
                    slot-scope="{data}"
                    v-model="data.value"></el-input-number>

            <!--<el-date-picker-->
            <!--class="spx"-->
            <!--slot="skuDeliveryDates"-->
            <!--slot-scope="{data}"-->
            <!--v-model="data.value"-->
            <!--align="right"-->
            <!--type="date"-->
            <!--:placeholder="$i.order.pleaseChoose"-->
            <!--:picker-options="pickerOptions1">-->
            <!--</el-date-picker>-->

            <div slot="skuPictures" slot-scope="{data}">
                <v-upload ref="uploadSkuPictures" :list="data.value" :onlyImage="true" :limit="20"></v-upload>
            </div>
            <div slot="skuLabelPic" slot-scope="{data}">
                <v-upload ref="uploadSkuLabelPic" :list="data.value" :onlyImage="true" :limit="20"></v-upload>
            </div>
            <div slot="skuPkgMethodPic" slot-scope="{data}">
                <v-upload ref="uploadSkuPkgMethodPic" :limit="20"></v-upload>
            </div>
            <div slot="skuInnerCartonPic" slot-scope="{data}">
                <v-upload ref="uploadSkuInnerCartonPic" :limit="20"></v-upload>
            </div>
            <div slot="skuOuterCartonPic" slot-scope="{data}">
                <v-upload ref="uploadSkuOuterCartonPic" :limit="20"></v-upload>
            </div>
            <div slot="skuAdditionalOne" slot-scope="{data}">
                <v-upload ref="uploadSkuAdditionalOne" :limit="20"></v-upload>
            </div>
            <div slot="skuAdditionalTwo" slot-scope="{data}">
                <v-upload ref="uploadSkuAdditionalTwo" :limit="20"></v-upload>
            </div>
            <div slot="skuAdditionalThree" slot-scope="{data}">
                <v-upload ref="uploadSkuAdditionalThree" :limit="20"></v-upload>
            </div>
            <div slot="skuAdditionalFour" slot-scope="{data}">
                <v-upload ref="uploadSkuAdditionalFour" :limit="20"></v-upload>
            </div>

        </v-history-modify>
    </div>
</template>

<script>

    import {VTable,VPagination,selectSearch,VUpload,VHistoryModify} from '@/components/index'
    import VProduct from '@/views/product/addProduct';
    import { mapActions } from 'vuex'

    export default {
        name: "createOrder",
        components:{
            VTable,
            page:VPagination,
            selectSearch,
            VUpload,
            VProduct,
            VHistoryModify
        },
        data(){
            return{
                options:[],
                /**
                 * 字典配置
                 * */
                currencyOption:[],
                supplierOption:[],
                incotermOption:[],
                paymentOption:[],
                paymentStatusOption:[],
                transportOption:[],
                skuUnitOption:[],
                lengthOption:[],
                weightOption:[],
                volumeOption:[],
                expirationDateOption:[],
                isNeedSampleOption:[],
                countryOption:[],
                quarantineTypeOption:[],
                skuStatusOption:[],
                skuSaleStatusOption:[],
                inquiryStatusOption:[],

                /**
                 * 页面基础配置
                 * */
                supplierNo:'',
                rules:{},
                disabledLcNo:true,
                allowQuery:0,
                loadingPage:false,
                disableClickSend:false,
                disableClickSaveDraft:false,
                labelPosition:'right',
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                },
                quickCreateDialogVisible:false,
                tableData:[],
                selectSearch:'',
                productInfoBtn:[
                    {
                        label: 'Negotiate',
                        type: 'negotiate'
                    },
                    {
                        label: 'Detail',
                        type: 'detail'
                    }
                ],
                loadingProductTable:false,
                tableTotal:[],
                activeTab:'product',
                selectProductInfoTable:[],
                disabledProductLine:[],
                queryNo:0,
                category:[],
                inquiryId:'',           //存储选择的入库单id

                /**
                 * 弹出框data配置
                 * */
                pageData:{},
                loadingTable:false,
                tableDataList:[],
                searchOptions:[
                    {
                        label:'inquiryNo',
                        id:1
                    },
                ],
                searchId:1,
                inquiryConfig:{
                    inquiryNo: '',
                    operatorFilters: [],
                    pn: 1,
                    ps: 50,
                    sorts: [],
                    // status:99
                },

                /**
                 * 选择产品弹出框data
                 * */
                productTableDialogVisible:false,
                type1:'product',
                type2:'bookmark',
                updateProduct:0,
                updateBookmark:0,
                productTableData:[],

                /**
                 * 提交的数据
                 * */
                orderForm:{
                    supplierCompanyId:'',
                    actDeliveryDt: "",
                    attachments: [],
                    basicFlag:false,     //basicInfo是否修改
                    currency: "",
                    customerAgreementDt: "",
                    customerAgreementNo: "",
                    // customerName: "string",
                    // customerNo: "string",
                    customerOrderNo: "",
                    deliveredQty: 0,
                    deliveryDt: "",
                    departureCountry: "",
                    departurePort: "",
                    destCountry: "",
                    destPort: "",
                    draftCustomer: false,       //saveAsDraft的时候为true
                    // draftSupplier: true,
                    // entryDt: "2018-06-01T01:37:58.742Z",
                    exchangeRateList: [
                        {
                            currency: "CNYUSD",
                            // exchangeRate: '124'
                        },
                        {
                            currency: "CNYEUR",
                            // exchangeRate: ''
                        },
                        {
                            currency: "USDEUR",
                            // exchangeRate: ''
                        },
                        {
                            currency: "USDCNY",
                            // exchangeRate: ''
                        },
                        {
                            currency: "EURCNY",
                            // exchangeRate: ''
                        },
                        {
                            currency: "EURUSD",
                            // exchangeRate: ''
                        }
                    ],
                    fieldRemark: {
                        // additionalProp1: "string",
                        // additionalProp2: "string",
                        // additionalProp3: "string"
                    },
                    fieldUpdate: {
                        // additionalProp1: "string",
                        // additionalProp2: "string",
                        // additionalProp3: "string"
                    },
                    // importantCustomer: true,
                    // importantSupplier: true,
                    incoterm: '',
                    incotermArea: "",
                    lcNo: "",
                    orderNo: "",
                    payment: "",
                    paymentDays: 0,
                    productFlag:false,
                    // paymentRemark: "",
                    // paymentStatus: "",
                    quotationNo: "",
                    remark: "",
                    responsibilityFlag:false,
                    responsibilityList: [
                        {
                            type: '0',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                        {
                            type: '1',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                        {
                            type: '2',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                        {
                            type: '3',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                        {
                            type: '4',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                        {
                            type: '5',
                            customer: '',
                            supplier: '',
                            remark: '',
                            actualDt: '',
                            orderNo:''
                        },
                    ],
                    skuList: [],
                    // skuQty: 0,
                    // skuSupplierName: "",
                    // status: "",
                    supplierCode: "",
                    supplierId: 0,
                    supplierName: "",
                    supplierOrderNo: "",
                    // timeZone: "",
                    transport: '1',
                },
            }
        },
        methods:{
            ...mapActions(['setLog','setRecycleBin','setDraft']),
            //就是保存
            send(){
                if(this.$validateForm(this.orderForm, this.$db.order.orderDetail)){
                    return;
                }
                let params=Object.assign({},this.orderForm);
                _.map(this.supplierOption,v=>{
                    if(params.supplierName===v.id){
                        params.supplierName=v.name;
                        params.supplierCode=v.code;
                        params.supplierId=v.id;
                        params.supplierCompanyId=v.companyId;
                    }
                });
                params.skuList=this.dataFilter(this.productTableData);
                let rightCode=true;
                _.map(params.skuList,v=>{
                    if(v.skuSupplierCode!==params.supplierCode){
                        rightCode=false;
                    }
                    if(v.skuSample==='1'){
                        v.skuSample=true;
                    }else if(v.skuSample==='0'){
                        v.skuSample=false;
                    }

                    if(_.isArray(v.skuLabelPic)){
                        v.skuLabelPic=(v.skuLabelPic[0]?v.skuLabelPic[0]:null);
                    }
                });

                //如果选的产品和上面选的供应商不一致，要给出提示
                if(!rightCode){
                    return this.$message({
                        message: this.$i.order.supplierNotTheSame,
                        type: 'warning'
                    });
                }
                params.attachments=this.$refs.upload[0].getFiles();
                _.map(params.skuList,v=>{
                    v.skuStatus=1;
                });
                this.disableClickSend=true;
                this.$ajax.post(this.$apis.ORDER_SAVE,params).then(res=>{
                    console.log(res)
                    this.$router.push('/order/overview');
                }).finally(err=>{
                    this.disableClickSend=false;
                });
            },
            saveAsDraft(){
                let params=Object.assign({},this.orderForm);
                _.map(this.supplierOption,v=>{
                    if(params.supplierName===v.id){
                        params.supplierName=v.name;
                        params.supplierCode=v.code;
                        params.supplierId=v.id;
                        params.supplierCompanyId=v.companyId;
                    }
                });
                params.skuList=this.dataFilter(this.productTableData);
                let rightCode=true;
                _.map(params.skuList,v=>{
                    if(v.skuSample==='1'){
                        v.skuSample=true;
                    }else if(v.skuSample==='0'){
                        v.skuSample=false;
                    }
                    if(v.skuSupplierCode!==params.supplierCode){
                        rightCode=false;
                    }
                    if(_.isArray(v.skuLabelPic)){
                        v.skuLabelPic=(v.skuLabelPic[0]?v.skuLabelPic[0]:null);
                    }
                });
                //如果选的产品和上面选的供应商不一致，要给出提示
                if(!rightCode){
                    return this.$message({
                        message: this.$i.order.supplierNotTheSame,
                        type: 'warning'
                    });
                }
                params.attachments=this.$refs.upload[0].getFiles();
                params.draftCustomer=true;
                this.disableClickSaveDraft=true;
                this.$ajax.post(this.$apis.ORDER_SAVE_DRAFT,params).then(res=>{
                    this.$router.push('/order/draft');
                }).finally(err=>{
                    this.disableClickSaveDraft=false;
                });
            },

            getDetail(e){
                this.loadingPage=true;
                this.$ajax.post(this.$apis.ORDER_DETAIL,{
                    orderId:this.$route.query.orderId,
                }).then(res=>{
                    this.orderForm=res;
                    _.map(this.supplierOption,v=>{
                        if(v.code===res.supplierCode){
                            this.orderForm.supplierName=v.id;
                        }
                    });
                    this.changePayment(res.payment);
                    let data=this.$getDB(this.$db.order.productInfoTableCreate,this.$refs.HM.getFilterData(res.skuList, 'skuSysCode'),item=>{
                        if(item._remark){
                            item.label.value=this.$i.order.remarks;
                            item.skuPic._image=false;
                        }
                    });
                    this.productTableData=[];
                    _.map(data,v=>{
                        this.productTableData.push(v);
                    });

                    this.markImportant=this.orderForm.importantCustomer;
                    //判断底部按钮能不能点
                    if(res.status!=='2' && res.status!=='3' && res.status!=='4'){
                        this.disableModify=true;
                    }else{
                        this.disableModify=false;
                    }
                    if(res.status!=='2'){
                        this.disableConfirm=true;
                    }else{
                        this.disableConfirm=false;
                    }
                    if(res.status==='5'){
                        this.hasCancelOrder=true;
                    }else{
                        this.hasCancelOrder=false;
                    }

                }).finally(err=>{
                    this.loadingPage=false;
                    this.disableClickCancelModify=false;
                    if(e){
                        this.isModify=false;
                    }
                });
            },

            //获取订单号(先手动生成一个)
            getOrderNo(){
                //带了id表示是从draft页面过来的
                if(this.$route.query.orderId){
                    // this.orderForm.orderNo=this.$route.query.orderId;
                    this.getSupplier();
                }else{

                    // this.orderForm.orderNo='1241241245125125152135';
                    // this.getSupplier();

                    this.$ajax.post(this.$apis.ORDER_GETORDERNO).then(res=>{
                        this.orderForm.orderNo=res;
                        this.getSupplier();
                    }).catch(err=>{
                        this.loadingPage=false;
                    });
                }
            },
            changePayment(e){
                let name=_.findWhere(this.paymentOption,{code:e}).name;
                if(name!=='L/C'){
                    this.disabledLcNo=true;
                    this.orderForm.lcNo='';
                }else{
                    this.disabledLcNo=false;
                }
            },

            //获取供应商
            getSupplier(){
                this.loadingPage=true;
                this.$ajax.get(this.$apis.PURCHASE_SUPPLIER_LIST_SUPPLIER_BY_NAME,{
                    name:''
                }).then(res=>{
                    this.supplierOption=res;
                    if(this.$route.query.supplierCode){
                        _.map(this.supplierOption,v=>{
                            if(v.code===this.$route.query.supplierCode){
                                this.orderForm.supplierName=v.id;
                            }
                        });
                    }
                    this.getUnit();
                    }).catch(err=>{
                        this.loadingPage=false;
                    })
            },
            quickCreate(){
                this.quickCreateDialogVisible=true;
                this.getInquiryData();
            },
            getInquiryData(){
                this.loadingTable=true;
                this.$ajax.post(this.$apis.INQUIERY_LIST,this.inquiryConfig).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.order.inquiryOverview, res.datas,item=>{

                        item.incoterm.value=this.$change(this.incotermOption,'incoterm',item).name;
                        item.status.value=this.$change(this.inquiryStatusOption,'status',item,true).name;
                        if(item.id.value===this.inquiryId){
                            this.$set(item,'_disabled',true)
                        }
                    });
                    this.pageData=res;
                }).finally(err=>{
                    this.loadingTable=false;
                });
            },
            handleChangeSupplier(data){
                this.supplierNo=_.findWhere(this.supplierOption,{id:data}).code;
            },

            /**
             * product info事件
             * */
            productInfoAction(e,type){
                if(type==='negotiate'){
                    let arr=[];
                    _.map(this.productTableData,v=>{
                        if(Number(v.skuSysCode.value)===Number(e.skuSysCode.value)){
                            arr.push(v);
                        }
                    });
                    this.$refs.HM.init(arr,[]);
                }else if(type==='detail'){
                    this.$windowOpen({
                        url:'/product/sourcingDetail',
                        params:{
                            id:e.skuId.value
                        }
                    })
                }
            },
            changeProductChecked(e){
                this.selectProductInfoTable=e;
            },
            addProduct(){
                this.disabledProductLine=this.$copyArr(this.productTableData);
                // this.disabledProductLine=_.uniq(_.pluck(_.pluck(this.productTableData, 'skuId'), 'value'));
                this.productTableDialogVisible=true;
                this.activeTab='product';
                this.updateProduct=Math.random();
            },
            removeProduct(){
                this.$confirm(this.$i.order.sureDelete, this.$i.order.prompt, {
                    confirmButtonText: this.$i.order.sure,
                    cancelButtonText: this.$i.order.cancel,
                    type: 'warning'
                }).then(() => {
                    let sysCodes=_.uniq(_.pluck(_.pluck(this.selectProductInfoTable, 'skuSysCode'), 'value'));
                    console.log(this.selectProductInfoTable,'this.selectProductInfoTable')
                    let arr=[];
                    _.map(this.productTableData,v=>{
                        _.map(sysCodes,m=>{
                            if(v.skuSysCode.value===m){
                                arr.push(v);
                            }
                        });
                    });
                    this.productTableData=_.difference(this.productTableData, arr);
                    this.selectProductInfoTable=[];
                    this.$message({
                        type: 'success',
                        message: this.$i.order.deleteSuccess
                    });
                }).catch(() => {

                });
            },
            handleClick(tab){
                if(tab.index==='0'){
                    this.updateProduct=Math.random();
                }else if(tab.index==='1'){
                    this.updateBookmark=Math.random();
                }
            },
            handleProductOk(e){
                this.loadingProductTable=true;
                this.productTableDialogVisible=false;
                this.$ajax.post(this.$apis.ORDER_SKUS,e).then(res=>{
                    let data=this.$getDB(this.$db.order.productInfoTableCreate,this.$refs.HM.getFilterData(res, 'skuSysCode'),item=>{
                        if(item._remark){
                            item.label.value=this.$i.order.remarks;
                            item.skuPictures._image=false;
                            item.skuLabelPic._image=false;
                            item.skuPkgMethodPic._image=false;
                            item.skuInnerCartonPic._image=false;
                            item.skuOuterCartonPic._image=false;
                            item.skuAdditionalOne._image=false;
                            item.skuAdditionalTwo._image=false;
                            item.skuAdditionalThree._image=false;
                            item.skuAdditionalFour._image=false;
                        }
                        else{
                            item.label.value=this.$dateFormat(item.entryDt.value,'yyyy-mm-dd');
                            item.skuSample._value=item.skuSample.value?'YES':'NO';
                            item.skuSample.value=item.skuSample.value?'1':'0';
                            item.skuUnit._value=this.$change(this.skuUnitOption,'skuUnit',item,true).name;
                            item.skuUnitWeight._value=this.$change(this.weightOption,'skuUnitWeight',item,true).name;
                            item.skuUnitLength._value=this.$change(this.lengthOption,'skuUnitLength',item,true).name;
                            item.skuExpireUnit._value=this.$change(this.expirationDateOption,'skuExpireUnit',item,true).name;
                            item.skuStatus._value=this.$change(this.skuStatusOption,'skuStatus',item,true).name;
                            item.skuUnitVolume._value=this.$change(this.volumeOption,'skuUnitVolume',item,true).name;
                            item.skuSaleStatus._value=this.$change(this.skuSaleStatusOption,'skuSaleStatus',item,true).name;
                            if(item.skuCategoryId.value){
                                item.skuCategoryId._value=_.findWhere(this.category,{id:item.skuCategoryId.value}).name;
                            }
                        }
                    });
                    _.map(data,v=>{
                        this.productTableData.push(v);
                    });
                    this.orderForm.totalQty=0;
                    this.orderForm.skuQty=0;
                    this.orderForm.totalSkuPrice=0;
                    this.orderForm.totalOuterCartonQty=0;
                    this.orderForm.totalGrossWeight=0;
                    this.orderForm.totalNetWeight=0;
                    this.orderForm.totalVolume=0;
                    _.map(this.productTableData,v=>{
                        if(!v._remark){
                            this.orderForm.totalQty+=v.skuQty.value;
                            this.orderForm.skuQty++;
                            this.orderForm.totalSkuPrice+=v.skuPrice.value;
                            if(v.skuOuterCartonQty.value!==null && v.skuQty.value!==null){
                                this.orderForm.totalOuterCartonQty+=Math.floor(v.skuQty.value/v.skuOuterCartonQty.value);
                            }
                            this.orderForm.totalGrossWeight+=v.skuOuterCartonRoughWeight.value;
                            this.orderForm.totalNetWeight+=v.skuOuterCartonNetWeight.value;
                            this.orderForm.totalVolume+=v.skuOuterCartonVolume.value;
                        }
                    })

                }).finally(err=>{
                    this.loadingProductTable=false;
                });
            },
            handleCancel(){
                this.productTableDialogVisible=false;
            },
            saveNegotiate(e){
                _.map(this.productTableData,(v,k)=>{
                    _.map(e,m=>{
                        if(m.skuSysCode.value===v.skuSysCode.value && m.label.value===v.label.value){
                            this.productTableData.splice(k,1,m)
                        }
                    })
                });
                this.productTableData[0].skuLabelPic.value=this.$refs.uploadSkuLabelPic.getFiles();

            },
            dataFilter(data) {
                let arr = [],
                    jsons = {},
                    json = {};
                data.forEach(item => {
                    jsons = {};
                    if (item._remark) { //拼装remark 数据
                        for (let k in item) {
                            jsons[k] = item[k].value;
                        }
                        json.fieldRemark = jsons;
                    } else {
                        json = {};
                        for (let k in item) {
                            if (json[k] === 'fieldRemark') {
                                json[k] = jsons;
                            } else {
                                if(item[k]._value){
                                    if(item[k].key==='skuUnit'){
                                        json[k]=_.findWhere(this.skuUnitOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuUnitWeight'){
                                        json[k]=_.findWhere(this.weightOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuUnitLength'){
                                        json[k]=_.findWhere(this.lengthOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuUnitVolume'){
                                        json[k]=_.findWhere(this.volumeOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuExpireUnit'){
                                        json[k]=_.findWhere(this.expirationDateOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuStatus'){
                                        json[k]=_.findWhere(this.skuStatusOption,{name:item[k]._value}).code;
                                    }
                                    else if(item[k].key==='skuSample'){
                                        json[k]=_.findWhere(this.isNeedSampleOption,{name:item[k]._value}).code;
                                    }else{
                                        json[k] = item[k].value;
                                    }
                                }else{
                                    json[k] = item[k].value;
                                }
                            }
                        };
                        arr.push(json);
                    }
                });
                return arr;
            },

            /**
             * quick create弹出框事件
             * */
            searchInquiry(e){
                console.log(e)
                if(!e.keyType){return this.$message({
                    message: this.$i.order.pleaseChooseType,
                    type: 'warning'
                });}
                this.inquiryConfig.inquiryNo=e.key;
                this.getInquiryData();
            },
            changeChecked(){
                console.log(1)
            },
            btnClick(e){
                this.inquiryId=e.id.value;
                this.quickCreateDialogVisible=false;
                this.loadingProductTable=true;
                this.loadingPage=true;
                this.$ajax.get(this.$apis.INQUIRY_ID,{
                    id:e.id.value
                }).then(res=>{
                    //带入inquiry信息
                    this.orderForm.quotationNo=res.quotationNo;
                    this.orderForm.supplierName=res.supplierId;
                    this.orderForm.incoterm=res.incoterm;
                    this.orderForm.payment=res.paymentMethod;
                    this.changePayment(this.orderForm.payment);
                    this.orderForm.departureCountry=res.departureCountry;
                    this.orderForm.departurePort=res.departurePort;
                    this.orderForm.destinationCountry=res.destinationCountry;
                    this.orderForm.destinationPort=res.destinationPort;
                    this.orderForm.remark=res.remark;
                    this.orderForm.currency=res.currency;
                    this.orderForm.destCountry=res.destinationCountry;
                    this.orderForm.destPort=res.destinationPort;

                    this.supplierNo=_.findWhere(this.supplierOption,{id:res.supplierId}).code;

                    this.productTableData=[];
                    let arr=[];
                    _.map(res.details,v=>{
                        let obj={
                            bookmarkId: '',
                            companyId: null,
                            entryDt: '',
                            entryId: null,
                            entryName: '',
                            fieldRemark: {},
                            fieldUpdate: {},
                            fieldsRemark: '',
                            fieldsUpdate: '',
                            id: null,
                            orderId: null,
                            orderNo: '',
                            ownerId: null,
                            skuAdditionalFour: '',
                            skuAdditionalOne: '',
                            skuAdditionalThree: '',
                            skuAdditionalTwo: '',
                            skuAdjustPackage: true,
                            skuApplicableAge: null,
                            skuAvailableQty: null,
                            skuBarCode: '',
                            skuBrand: '',
                            skuBrandRelated: '',
                            skuBrandRemark: '',
                            skuCategoryFour: '',
                            skuCategoryId: null,
                            skuCategoryOne: '',
                            skuCategoryThree: '',
                            skuCategoryTwo: '',
                            skuCertificat: '',
                            skuCifCurrency: '',
                            skuCifPort: '',
                            skuCifPrice: null,
                            skuCode: '',
                            skuColourCn: '',
                            skuColourEn: '',
                            skuComments: '',
                            skuCommodityInspectionCn: '',
                            skuCommodityInspectionEn: '',
                            skuCustomerCreate: true,
                            skuCustomerSkuCode: '',
                            skuCustomsCode: '',
                            skuCustomsNameCn: '',
                            skuCustomsNameEn: '',
                            skuDduCurrency: '',
                            skuDduPort: '',
                            skuDduPrice: null,
                            skuDeclareElement: '',
                            skuDeliveredQty: null,
                            skuDeliveryDates: null,
                            skuDepartureDt: null,
                            skuDescCn: '',
                            skuDescCustomer: '',
                            skuDescEn: '',
                            skuDesign: '',
                            skuDisplayBoxQty: null,
                            skuExpireDates: null,
                            skuExpireUnit: null,
                            skuExwCurrency: '',
                            skuExwPrice: null,
                            skuFobCurrency: '',
                            skuFobPort: '',
                            skuFobPrice: null,
                            skuFormation: '',
                            skuGp20SkuQty: null,
                            skuGp40SkuQty: null,
                            skuGrossWeight: null,
                            skuHeight: null,
                            skuHq40SkuQty: null,
                            skuId: null,
                            skuInboundQty: null,
                            skuIncoterm: '',
                            skuIncotermArea: '',
                            skuInnerCartonDesc: '',
                            skuInnerCartonHeight: null,
                            skuInnerCartonLength: null,
                            skuInnerCartonMethodCn: '',
                            skuInnerCartonMethodEn: '',
                            skuInnerCartonOuterNum: null,
                            skuInnerCartonPic: '',
                            skuInnerCartonQty: null,
                            skuInnerCartonRoughWeight: null,
                            skuInnerCartonUnit: '',
                            skuInnerCartonVolume: null,
                            skuInnerCartonWeightNet: null,
                            skuInnerCartonWidth: null,
                            skuInnerPackBarCode: '',
                            skuInnerPackCode: '',
                            skuInnerPackLabel: '',
                            skuInspectQuarantineCategory: '',
                            skuInventory: null,
                            skuInventoryCostMethod: '',
                            skuLabel: '',
                            skuLabelDesc: '',
                            skuLabelPic: '',
                            skuLength: null,
                            skuLengthWidthHeight: '',
                            skuMainSaleArea: '',
                            skuMainSaleCountry: '',
                            skuMaterialCn: '',
                            skuMaterialEn: '',
                            skuMethodPkgCn: '',
                            skuMethodPkgEn: '',
                            skuMinInventory: null,
                            skuMinOrderQty: null,
                            skuModifyStatus: null,
                            skuNameCn: '',
                            skuNameCustomer: '',
                            skuNameEn: '',
                            skuNetWeight: null,
                            skuNoneSellCountry: '',
                            skuOem: true,
                            skuOrigin: '',
                            skuOtherPackInfoCn: '',
                            skuOtherPackInfoEn: '',
                            skuOuterCartonBarCode: '',
                            skuOuterCartonCode: '',
                            skuOuterCartonDesc: '',
                            skuOuterCartonHeight: null,
                            skuOuterCartonLength: null,
                            skuOuterCartonMethodCn: '',
                            skuOuterCartonMethodEn: '',
                            skuOuterCartonNetWeight: null,
                            skuOuterCartonPic: '',
                            skuOuterCartonQty: null,
                            skuOuterCartonRoughWeight: null,
                            skuOuterCartonUnit: '',
                            skuOuterCartonVolume: null,
                            skuOuterCartonWidth: null,
                            skuPic: '',
                            skuPkgMethodPic: '',
                            skuPrice: null,
                            skuProductionDates: null,
                            skuQty: null,
                            skuQtyPerTray: null,
                            skuQualifiedQty: null,
                            skuQualityStander: '',
                            skuQuotationNo: '',
                            skuRateValueAddedTax: null,
                            skuReadilyAvailable: true,
                            skuRecycle: true,
                            skuRefunQty: null,
                            skuRemarkOne: '',
                            skuRemarkThree: '',
                            skuRemarkTwo: '',
                            skuSafeInventory: null,
                            skuSaleStatus: null,
                            skuSample: true,
                            skuSamplePrice: null,
                            skuSampleQty: null,
                            skuShippingMarks: '',
                            skuSpecialTransportRequire: '',
                            skuStatus: '',
                            skuSupplierCode: '',
                            skuSupplierCompanyId: null,
                            skuSupplierId: null,
                            skuSupplierName: '',
                            skuSupplierTenantId: null,
                            skuSysCode: '',
                            skuTaxRefundRate: null,
                            skuTradeMarkCn: '',
                            skuTradeMarkEn: '',
                            skuTryDimension: null,
                            skuUndeliveredQty: null,
                            skuUnit: null,
                            skuUnitLength: null,
                            skuUnitVolume: null,
                            skuUnitWeight: null,
                            skuUntestedQty: null,
                            skuUseDisplayBox: true,
                            skuVolume: null,
                            skuWarehourceDefault: '',
                            skuWidth: null,
                            skuYearListed: '',
                            tenantId: null,
                            timeZone: '',
                            updateDt: '',
                            updateId: null,
                            updateName: '',
                            version: null,
                        };
                        obj.skuId=v.skuId;
                        obj.skuPic=v.skuPic;
                        obj.skuNameEn=v.skuNameEn;
                        obj.skuNameCn=v.skuNameCn;
                        obj.skuDescCn =v.skuDescCn;
                        obj.skuDescEn=v.skuDescEn;
                        obj.skuDescCustomer=v.skuDescCustomer;
                        obj.skuNameCustomer=v.skuNameCustomer;
                        obj.skuCustomerSkuCode=v.skuCustomerSkuCode;
                        obj.skuCode=v.skuCode;
                        obj.skuSupplierName=v.skuSupplierName;
                        obj.skuSupplierCode=v.skuSupplierCode;
                        obj.skuFobCurrency=v.skuFobCurrency;
                        obj.skuFobPrice=v.skuFobPrice;
                        obj.skuFobPort=v.skuFobPort;
                        obj.skuExwCurrency=v.skuExwCurrency;
                        obj.skuExwPrice=v.skuExwPrice;
                        obj.skuCifCurrency=v.skuCifCurrency;
                        obj.skuCifPrice=v.skuCifPrice;
                        obj.skuCifPort=v.skuCifArea;
                        obj.skuDduCurrency=v.skuDduCurrency;
                        obj.skuDduPrice=v.skuDduPrice;
                        obj.skuDduPort=v.skuDduArea;
                        obj.skuUnit=v.skuUnit;
                        obj.skuMaterialCn=v.skuMaterialCn;
                        obj.skuMaterialEn=v.skuMaterialEn;
                        obj.skuRateValueAddedTax=v.skuRateValueAddedTax;
                        obj.skuTaxRefundRate=v.skuTaxRefundRate;
                        obj.skuColourCn=v.skuColourCn;
                        obj.skuColourEn=v.skuColourEn;
                        obj.skuMinOrderQty=v.skuMinOrderQty;
                        obj.skuDeliveryDates=v.skuDeliveryDates;
                        obj.skuDesign=v.skuDesign;
                        obj.skuCategoryId=v.skuCategoryId;
                        obj.skuCustomsCode=v.skuCustomsCode;
                        obj.skuCustomsNameCn=v.skuCustomsNameCn;
                        obj.skuCustomsNameEn=v.skuCustomsNameEn;
                        obj.skuTradeMarkCn=v.skuTradeMarkCn;
                        obj.skuTradeMarkEn=v.skuTradeMarkEn;
                        obj.skuCommodityInspectionCn=v.skuCommodityInspectionCn;
                        obj.skuCommodityInspectionEn=v.skuCommodityInspectionEn;
                        obj.skuDeclareElement=v.skuDeclareElement;
                        obj.skuOrigin=v.skuOrigin;
                        obj.skuInspectQuarantineCategory=v.skuInspectQuarantineCategory;
                        obj.skuUnitLength=v.skuUnitLength;
                        obj.skuUnitWidth=v.skuUnitWidth;
                        obj.skuUnitVolumn=v.skuUnitVolumn;
                        obj.skuLength=v.skuLength;
                        obj.skuWidth=v.skuWidth;
                        obj.skuHeight=v.skuHeight;
                        obj.skuNetWeight=v.skuNetWeight;
                        obj.skuGrossWeight=v.skuGrossWeight;
                        obj.skuVolume=v.skuVolume;
                        obj.skuMethodPkgCn=v.skuMethodPkgCn;
                        obj.skuMethodPkgEn=v.skuMethodPkgEn;
                        obj.skuInnerCartonUnit=v.skuInnerCartonUnit;
                        obj.skuInnerCartonQty=v.skuInnerCartonQty;
                        obj.skuInnerCartonLength=v.skuInnerCartonLength;
                        obj.skuInnerCartonWidth=v.skuInnerCartonWidth;
                        obj.skuInnerCartonHeight=v.skuInnerCartonHeight;
                        obj.skuInnerCartonWeightNet=v.skuInnerCartonWeightNet;
                        obj.skuInnerCartonRoughWeight=v.skuInnerCartonRoughWeight;
                        obj.skuInnerCartonVolume=v.skuInnerCartonVolume;
                        obj.skuInnerCartonDesc=v.skuInnerCartonDesc;
                        obj.skuInnerCartonMethodCn=v.skuInnerCartonMethodCn;
                        obj.skuInnerCartonMethodEn=v.skuInnerCartonMethodEn;
                        obj.skuOuterCartonUnit=v.skuOuterCartonUnit;
                        obj.skuOuterCartonDesc=v.skuOuterCartonDesc;
                        obj.skuOuterCartonQty=v.skuOuterCartonQty;
                        obj.skuOuterCartonLength=v.skuOuterCartonLength;
                        obj.skuOuterCartonWidth=v.skuOuterCartonWidth;
                        obj.skuOuterCartonHeight=v.skuOuterCartonHeight;
                        obj.skuInnerCartonOuterNum=v.skuInnerCartonOuterNum;
                        obj.skuOuterCartonNetWeight=v.skuOuterCartonNetWeight;
                        obj.skuOuterCartonRoughWeight=v.skuOuterCartonRoughWeight;
                        obj.skuOuterCartonVolume=v.skuOuterCartonVolume;
                        obj.skuOuterCartonMethodCn=v.skuOuterCartonMethodCn;
                        obj.skuOuterCartonMethodEn=v.skuOuterCartonMethodEn;
                        obj.skuBrand=v.skuBrand;
                        obj.skuApplicableAge=v.skuApplicableAge;
                        obj.skuExpireDates=v.skuExpireDates;
                        obj.skuExpireUnit=v.skuExpireUnit;
                        obj.skuComments=v.skuComments;
                        obj.skuBarCode=v.skuBarcode;
                        obj.skuSaleStatus=v.skuStatus;
                        obj.skuStatus=1;
                        obj.skuQuotationNo=v.quotationNo;
                        obj.skuSysCode=v.skuSysCode;
                        arr.push(obj);
                    });
                    let data=this.$getDB(this.$db.order.productInfoTableCreate,this.$refs.HM.getFilterData(arr, 'skuSysCode'),item=>{
                        if(item._remark){
                            item.label.value=this.$i.order.remarks;
                            item.skuPictures._image=false;
                            item.skuLabelPic._image=false;
                            item.skuPkgMethodPic._image=false;
                            item.skuInnerCartonPic._image=false;
                            item.skuOuterCartonPic._image=false;
                            item.skuAdditionalOne._image=false;
                            item.skuAdditionalTwo._image=false;
                            item.skuAdditionalThree._image=false;
                            item.skuAdditionalFour._image=false;
                        }
                        else{
                            item.label.value=this.$dateFormat(item.entryDt.value,'yyyy-mm-dd');
                            item.skuSample._value=item.skuSample.value?'YES':'NO';
                            item.skuSample.value=item.skuSample.value?'1':'0';
                            item.skuUnit._value=this.$change(this.skuUnitOption,'skuUnit',item,true).name;
                            item.skuUnitWeight._value=this.$change(this.weightOption,'skuUnitWeight',item,true).name;
                            item.skuUnitLength._value=this.$change(this.lengthOption,'skuUnitLength',item,true).name;
                            item.skuExpireUnit._value=this.$change(this.expirationDateOption,'skuExpireUnit',item,true).name;
                            item.skuStatus._value=this.$change(this.skuStatusOption,'skuStatus',item,true).name;
                            item.skuUnitVolume._value=this.$change(this.volumeOption,'skuUnitVolume',item,true).name;
                            item.skuSaleStatus._value=this.$change(this.skuSaleStatusOption,'skuSaleStatus',item,true).name;
                            if(item.skuCategoryId.value){
                                item.skuCategoryId._value=_.findWhere(this.category,{id:item.skuCategoryId.value}).name;
                            }
                        }
                    });
                    _.map(data,v=>{
                        this.productTableData.push(v);
                    })
                }).finally(err=>{
                    this.loadingProductTable=false;
                    this.loadingPage=false;
                });
            },
            getUnit(){
                //获取币种
                this.$ajax.get(this.$apis.CURRENCY_ALL,{},{cache:true}).then(res=>{
                        this.currencyOption=res;
                        this.queryNo++;
                    }).finally(err=> {

                    }
                );

                //获取国家
                this.$ajax.get(this.$apis.COUNTRY_ALL,{},{cache:true}).then(res=>{
                    this.countryOption=res;
                    this.queryNo++;
                }).finally(err=>{

                });

                //获取汇率
                this.$ajax.get(this.$apis.CUSTOMERCURRENCYEXCHANGERATE_QUERY,{},{cache:true}).then(res=>{
                    this.queryNo++;
                    _.map(this.orderForm.exchangeRateList,v=>{
                        _.map(res,m=>{
                            if(v.currency===m.symbol){
                                v.exchangeRate=m.price;
                            }
                        })
                    })
                }).finally(err=>{

                });

                this.$ajax.post(this.$apis.get_partUnit,['PMT','ITM','MD_TN','SKU_UNIT','LH_UNIT','VE_UNIT','WT_UNIT','ED_UNIT','NS_IS','QUARANTINE_TYPE','SKU_SALE_STATUS','INQUIRY_STATUS'],{cache:true}).then(res=>{
                    this.queryNo++;
                    res.forEach(v=>{
                        if(v.code==='ITM'){
                            this.incotermOption=v.codes;
                        }else if(v.code==='PMT'){
                            this.paymentOption=v.codes;
                        }else if(v.code==='MD_TN'){
                            this.transportOption=v.codes;
                        }else if(v.code==='SKU_UNIT'){
                            this.skuUnitOption=v.codes;
                        }else if(v.code==='LH_UNIT'){
                            this.lengthOption=v.codes;
                        }else if(v.code==='WT_UNIT'){
                            this.weightOption=v.codes;
                        }else if(v.code==='VE_UNIT'){
                            this.volumeOption=v.codes;
                        }else if(v.code==='ED_UNIT'){
                            this.expirationDateOption=v.codes;
                        }else if(v.code==='NS_IS'){
                            this.isNeedSampleOption=v.codes;
                        }else if(v.code==='QUARANTINE_TYPE'){
                            this.quarantineTypeOption=v.codes;
                        }else if(v.code==='SKU_SALE_STATUS'){
                            this.skuSaleStatusOption=v.codes;
                        }else if(v.code==='INQUIRY_STATUS'){
                            this.inquiryStatusOption=v.codes;
                        }
                    })
                }).finally(err=>{

                });

            },

            /**
             * 搜索框事件
             * */
            inputEnter(e){
                console.log(e)
            },

            /**
             * 分页操作
             * */
            changePage(e){
                this.inquiryConfig.pn=e;
                this.getInquiryData();
            },
            changeSize(e){
                this.inquiryConfig.ps=e;
                this.getInquiryData();
            },
        },
        created(){
            let category=[];
            this.category=[];
            this.loadingPage=true;
            this.$ajax.get(this.$apis.get_buyer_sys_category,{}).then(res=>{
                _.map(res,v=>{
                    category.push(v);
                });
                this.$ajax.get(this.$apis.get_buyer_my_category,{}).then(data=>{
                    _.map(data,v=>{
                        category.push(v);
                    });
                    this.getOrderNo();
                    _.map(category,data=>{
                        _.map(data.children,ele=>{
                            this.category.push(ele);
                        })
                    });
                }).catch(err=>{
                    this.loadingPage=false;
                });
            }).catch(err=>{
                this.loadingPage=false;
            });
        },
        mounted(){
            // this.setLog({query:{code:'BIZ_ORDER'}});
            this.setDraft({
                name: 'orderDraft',
                show: true
            });
        },
        watch:{
            queryNo(n){
                if(n===4){
                    if(this.$route.query.orderId){
                        this.getDetail();
                    }else if(this.$route.query.ids && this.$route.query.ids.length>0){
                        let ids=this.$route.query.ids;
                        ids=ids.slice(0,ids.length-1);
                        this.loadingProductTable=true;
                        this.$ajax.post(this.$apis.ORDER_SKUS,ids.split(',')).then(res=>{
                            let data=this.$getDB(this.$db.order.productInfoTableCreate,this.$refs.HM.getFilterData(res, 'skuSysCode'),item=>{
                                if(item._remark){
                                    item.label.value=this.$i.order.remarks;
                                    item.skuPic._image=false;
                                }
                            });
                            _.map(data,v=>{
                                this.productTableData.push(v);
                            });
                        }).finally(err=>{
                            this.loadingProductTable=false;
                            this.loadingPage=false;
                        });
                    }else{
                        this.loadingPage=false;
                    }
                }
            },
        },
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
        margin-top: 10px;
    }
    .speCol{
        height: 47px;
    }
    .speInput{
        width: 80%;
    }
    .speNumber >>> input{
        text-align: left;
    }
    .spx{
        width: 100%;
    }
    .speSearch{
        float: right;
        margin-right: 70px;
    }
    .summaryInput{
        width: 80%;
    }
    .summaryInput >>> input{
        text-align: left;
    }
    .second-title{
        font-weight: bold;
        font-size: 18px;
        color:#666666;
        padding: 10px 0;
        margin-top: 20px;
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
        text-align: left;
        z-index:2000;
    }
</style>
