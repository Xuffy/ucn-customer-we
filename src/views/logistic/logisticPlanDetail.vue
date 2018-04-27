<template>
  <div class="place-logistic-plan">
    <div class="hd-top">{{ $i.logisticPlan + 'HDAMC18005' }}</div>
    <form-list :showHd="false" :edit="edit" :listData="basicInfoArr" :title="$i.basicInfoTitle"/>
    <el-row :gutter="10">
       <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="input-item">
          <span>{{ $i.remark }}</span>
          <el-input class="el-input" type="textarea" resize="none" :autosize="{ minRows: 3 }" placeholder="请输入内容"v-model="basicInfoObj.remark"></el-input>
        </div>
      </el-col>
      <attachment accept="all" ref="attachment" :title="$i.attachment"/>
      <one-line :list="exchangeRateList" :title="$i.exchangeRate"/>
    </el-row>
    <form-list :listData="transportInfoArr" :edit="edit" :title="$i.transportInfoTitle"/>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.containerInfoTitle }}</div>
      <container-info :tableData.sync="tableData" @tabAppend="tabAppend" @tailBtnCancel="tailBtnCancel"
      @tailBtnOk="tailBtnOk" @tabSplite="tabSplite"/>
    </div>

    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.feeInfoTitle }}</div>
      <fee-info :tableData.sync="feeList"></fee-info>
    </div>

    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.paymentTitle }}</div>
      <payment :tableData.sync="paymentList"/>
    </div>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.productInfoTitle }}</div>
      <v-table :data.sync="productList" @action="action"
      @tabSplite="tabSplite" @tabAppend="tabAppend" :buttons="productbButtons">
        <div slot="header" class="product-header">
          <el-button type="primary" size="mini" @click.stop="showAddProductDialog = true">{{ $i.addProduct }}</el-button>
          <el-button type="danger" size="mini">{{ $i.remove }}</el-button>
        </div>
      </v-table>
    </div>
    <el-dialog :title="$i.negotiate" :visible.sync="showProductDialog" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog">
      <product-modify ref="productModifyComponents" :tableData.sync="productModifyList" :productInfoModifyStatus="productInfoModifyStatus"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showProductDialog = false">{{ $i.cancel }}</el-button>
        <el-button type="primary" @click="showProductDialog = false">{{ $i.confirm }}</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="$i.addProductFromOrder" :visible.sync="showAddProductDialog" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog">
      <add-product/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddProductDialog = false">{{ $i.cancel }}</el-button>
        <el-button type="primary" @click="showAddProductDialog = false">{{ $i.confirm }}</el-button>
      </div>
    </el-dialog>
    <btns/>
  </div>
</template>
<script>
import { VSimpleTable, containerInfo, selectSearch, VTable } from '@/components/index';
import attachment from '@/components/base/attachment'
import formList from '@/views/logistic/children/formList'
import oneLine from '@/views/logistic/children/oneLine'
import feeInfo from '@/views/logistic/children/feeInfo'
import payment from '@/views/logistic/children/payment'
import btns from '@/views/logistic/children/btns'
import productModify from '@/views/logistic/children/productModify'
import addProduct from '@/views/logistic/children/addProduct'

// 测试
import { basicInfoInput, basicInfoSelector, basicInfoDate } from './children/test'

export default {
  name: 'logisticPlanDetail',
  data() {
    return {
      showProductDialog: false,
      showAddProductDialog: false,
      productInfoModifyStatus: 0,
      edit: true,
      basicInfoObj: {
        "logisticsNo": "Logistics No",
        "estContainerStuffingDate": "Est Container Stuffing Date",
        "estCustomsCleanceDate": "Est Customs Cleance Date",
        "estDepartureDate": "Est Departure Date",
        "estArrivalDate": "Est Arrival Date",
        "estReleaseDate": "Est Release Date",
        "estDelivaryDate": "Est Delivary Date",
        "logisticsStatus": "Logistics Status",
        "createDate": "Create Date",
        "declareDate": "Declare Date",
        "bookingDate": "Booking Date",
        "actDeliveryDate": "Act.Delivery Date",
        "actContainerStuffingDate": "Act.Container Stuffing Date",
        "actCustomsCleanceDate": "Act.Customs Cleance Date",
        "actDepartureDate": "Act.Departure Date",
        "actArrivalDate": "Act.Arrival Date",
        "actReleaseDate": "Act.Release Date",
        "shipServiceProvider": "Ship Service Provider",
        "customerName": "Customer Name",
        "receiptCompany": "Receipt Company",
        "shippingAgent": "Shipping Agent",
        "exchangeCurrency": "Exchange Currency",
        "payment": "Payment",
        "paymentTerms": "Payment Terms",
        "transportationWay": "Transportation Way",
        "loadingType": "Loading Type",
        "permitedForTransportation": "Permited for Transportation",
        "blType": "B/L Type",
        "blQuantity": "B/L Quantity",
        "blNumber": "B/L Number",
        "shipper": "Shipper",
        "consignee": "Consignee",
        "notify": "Notify"
      },
      transportInfoObj: {
        "transportCompany": "Transport Company",
        "vesselName": "Vessel Name",
        "vesselNo": "Vessel No",
        "departureCountry": "Departure Country",
        "departurePort": "Departure Port",
        "destinationCountry": "Destination Country",
        "destinationPort": "Destination Port"
      },
      transportInfoArr: [],
      basicInfoArr: [],
      productbButtons: [
        {
          label: 'Negociate',
          type: 1
        },
        {
          label: 'History',
          type: 2
        },
        {
          label: 'Detail',
          type: 3
        }
      ],
      exchangeRateList: [
        {
          text: '￥-$',
          value: 0
        },
        {
          text: '$-￥',
          value: 0
        },
        {
          text: '￥-€',
          value: 0
        },
        {
          text: '€-￥',
          value: 0
        },
        {
          text: '$-€',
          value: 0
        },
        {
          text: '€-$',
          value: 0
        }
      ],
      feeList: [
        {
          "fclTransportCharge": "FCL Transport Charge",
          "fclTransportChargeCurrency": "FCL Transport Charge Currency",
          "handlingCharges": "Handling Charges",
          "handlingChargesCurrency": "Handling Charges Currency",
          "otherPortCharges": "Other Port Charges",
          "otherPortChargesCurrency": "Other Port Charges Currency",
          "oceanFreight": "Ocean Freight",
          "oceanFreightCurrency": "Ocean Freight Currency",
          "insuranceCharges": "Insurance Charges",
          "insuranceChargesCurrency": "Insurance Charges Currency",
          "otherCharges": "Other Charges",
          "otherChargesCurrency": "Other Charges Currency",
          "otherChargesExchangeRate": "Other Charges Exchange Rate",
          "otherChargesRemark": "Other Charges Remark",
          "commissionCharges": "Commission Charges",
          "commissionChargesCurrency": "Commission Charges Currency"
        }
      ],
      productList: [
        {
          "orderNo": "orderNo",
          "quantityOfOuterCartonsToBeShipped": "quantityOfOuterCartonsToBeShipped",
          "goodsToBeShipped": "goodsToBeShipped",
          "skuCode": "SKU Code",
          "skuNameEn": "SKU Name (EN)",
          "skuNameCn": "SKU Name (CN)",
          "productDescription": "Product Description",
          "blSkuName": "B/L SKU Name",
          "customsDeclarationNameCn": "Customs Declaration Name(CN)",
          "customsDeclarationNameEn": "Customs Declaration Name(EN)",
          "hsCode": "HS Code",
          "reportElements": "Report Elements",
          "supplierName": "Supplier Name",
          "supplierNo": "Supplier No",
          "customerSkuCode": "Customer SKU Code",
          "factorySKUCode": "Factory SKU Code",
          "unit": "Unit",
          "exportUnitPrice": "Export Unit Price",
          "totalPriceOfExport": "Total Price Of Export",
          "currency": "Currency",
          "skuQuantityOfOuterCarton": "SKU Quantity Of Outer Carton",
          "outerCartonLength": "Outer Carton Length",
          "outerCartonWidth": "Outer Carton Width",
          "outerCartonHeight": "Outer Carton Height",
          "outerCartonNetWeight": "Outer Carton Net Weight",
          "outerCartonGrossWeight": "Outer Carton Gross Weight",
          "outerCartonVolume": "Outer Carton Volume",
          "shippingMarks": "Shipping Marks",
          "outerCartonBarCode": "Outer Carton Bar-Code",
          "outerCartonSkuCode": "Outer Carton SKU Code"
        }
      ],
      productModifyList: [
        {
          "orderNo": "orderNo",
          "quantityOfOuterCartonsToBeShipped": "quantityOfOuterCartonsToBeShipped",
          "goodsToBeShipped": "goodsToBeShipped",
          "skuCode": "SKU Code",
          "skuNameEn": "SKU Name (EN)",
          "skuNameCn": "SKU Name (CN)",
          "productDescription": "Product Description",
          "blSkuName": "B/L SKU Name",
          "customsDeclarationNameCn": "Customs Declaration Name(CN)",
          "customsDeclarationNameEn": "Customs Declaration Name(EN)",
          "hsCode": "HS Code",
          "reportElements": "Report Elements",
          "supplierName": "Supplier Name",
          "supplierNo": "Supplier No",
          "customerSkuCode": "Customer SKU Code",
          "factorySKUCode": "Factory SKU Code",
          "unit": "Unit",
          "exportUnitPrice": "Export Unit Price",
          "totalPriceOfExport": "Total Price Of Export",
          "currency": "Currency",
          "skuQuantityOfOuterCarton": "SKU Quantity Of Outer Carton",
          "outerCartonLength": "Outer Carton Length",
          "outerCartonWidth": "Outer Carton Width",
          "outerCartonHeight": "Outer Carton Height",
          "outerCartonNetWeight": "Outer Carton Net Weight",
          "outerCartonGrossWeight": "Outer Carton Gross Weight",
          "outerCartonVolume": "Outer Carton Volume",
          "shippingMarks": "Shipping Marks",
          "outerCartonBarCode": "Outer Carton Bar-Code",
          "outerCartonSkuCode": "Outer Carton SKU Code"
        }
      ],
      paymentList: [
        {
          "paymentNumber": "casd122",
          "paymentItem": "Payment Item",
          "estPayDate": "Est. Pay Date",
          "estAmount": "123",
          "actPayDate": "Act. Pay Date",
          "actAmount": "44",
          "currency": "Currency",
          "avilable": "Avilable",
          "operation": "Operation"
        }
      ],
      tableData: [
        {
          "containerNo": 1,
          "sealNumber": 2,
          "containerWeight": "3",
          "containerType": "4",
          "vgm": "22",
          "totalQuantityInContainer": "13",
          "totalVolumeInContainer": "3",
          "totalNetWeightInContainer": "12",
          "totalQuantityOfOuterCartonsInContainer": "43",
          "totalSkuPriceInContainer": "45",
          "exchangeCurrency": "Exchange Currency"
        },
        {
          "containerNo": 1,
          "sealNumber": 2,
          "containerWeight": "3",
          "containerType": "4",
          "vgm": "11",
          "totalQuantityInContainer": "22",
          "totalVolumeInContainer": "12",
          "totalNetWeightInContainer": "1",
          "totalQuantityOfOuterCartonsInContainer": "12",
          "totalSkuPriceInContainer": "33",
          "exchangeCurrency": "Exchange Currency"
        }
      ]
    }
  },
  components: {
    formList,
    containerInfo,
    attachment,
    oneLine,
    VTable,
    feeInfo,
    payment,
    btns,
    productModify,
    addProduct
  },
  // watch: {
  //   showDialog (newValue) {
  //     if (!newValue) this.clearProductInfo()
  //   }
  // },
  mounted () {
    this.productList = this.$getDB(this.$db.logistic.productInfo, this.productList)
    this.productModifyList = this.$getDB(this.$db.logistic.productInfo, this.productModifyList)

    this.basicInfoArr = _.map(this.basicInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i[key],
        value
      }
    })

    this.transportInfoArr = _.map(this.transportInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i[key],
        value
      }
    })
  },
  methods: {
    computeType (key) {
      return basicInfoInput.includes(key) ? 'input' : basicInfoDate.includes(key) ? 'date' : 'selector'
    },
    tabAppend() {
      this.tableData.push({})
    },
    tailBtnCance () {
      this.tableData.pop();
    },
    tailBtnOk (item) {
      this.tableData.pop();
      this.tableData.push(item);
    },
    tabSplite (index) {
      this.tableData.splice(index, 1);
    },
    modify () {
      this.isModify = false;
    },
    tailBtnCancel () {},
    action (e, i) {
      if (i === 3) return
      this.productInfoModifyStatus = i
      this.showProductDialog = true
    },
    closeDialog () {
      console.log(this.$refs.productModifyComponents)
    }
  }
}
</script>
<style lang="less" scoped>
.place-logistic-plan {
  position: relative;
  padding-bottom: 80px;
  .hd-top {
    font-size: 18px;
    color:#666;
    height: 50px;
    line-height:50px;
    border-bottom:1px solid #ccc;
    padding:0 15px;
  }
  .hd {
    height: 40px;
    line-height:40px;
    border-bottom:1px solid #ccc;
    padding:0 15px;
    font-weight: bold;
    &.active {
      border:none;
    }
  }
  .input-item {
    display:flex;
    align-items: center;
    padding:10px 0;
    span {
      width: 200px;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      display:inline-block;
      font-size:12px;
      text-align: right;
      padding-right:10px;
      box-sizing: border-box;
    }
    .el-select, .el-input {
      flex:1;
    }
  }
  .product-header {
    margin-bottom: 20px;
  }
}
</style>
