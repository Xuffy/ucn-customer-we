<template>
  <div class="place-logistic-plan">
    <div class="hd-top" v-if="planId">{{ $i.logisticPlan + 'HDAMC18005' }}</div>
    <div class="hd-top" v-else>{{ $i.placeNewLogisticPlan }}</div>
    <form-list :showHd="false" :edit="edit" :listData="basicInfoArr" :selectArr="selectArr" :title="$i.basicInfoTitle"/>
    <el-row :gutter="10">
       <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="input-item">
          <span>{{ $i.remark }}</span>
          <el-input class="el-input" type="textarea" resize="none" :autosize="{ minRows: 3 }" placeholder="请输入内容"v-model="remark" v-if="edit"></el-input>
          <p v-else>{{ remark }}</p>
        </div>
      </el-col>
      <attachment accept="all" ref="attachment" :title="$i.attachment"/>
      <one-line :edit="edit" :list="exchangeRateList" :title="$i.exchangeRate"/>
    </el-row>
    <form-list :listData="transportInfoArr" :edit="edit" :title="$i.transportInfoTitle"/>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.containerInfoTitle }}</div>
      <container-info :tableData.sync="tableData" @arrayAppend="arrayAppend" @handleSelectionChange="handleSelectionContainer" @deleteContainer="deleteContainer" :edit="edit" :containerType="containerType"/>
    </div>

    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.feeInfoTitle }}</div>
      <fee-info :edit="edit" :tableData.sync="feeList"></fee-info>
    </div>

    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.paymentTitle }}</div>
      <payment :tableData.sync="paymentList" :edit="edit" :paymentSum="paymentSum"/>
    </div>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.productInfoTitle }}</div>
      <v-table :data.sync="productList" @action="action" :buttons="productbButtons">
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
    <btns :edit="edit" @switchEdit="switchEdit" @toExit="toExit" @savePlan="savePlan"/>
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

import { basicInfoObj } from '@/database/logistic/plan/staticData'

export default {
  name: 'logisticPlanDetail',
  data() {
    return {
      remark: '',
      showProductDialog: false,
      showAddProductDialog: false,
      selectionContainer: [],
      productInfoModifyStatus: 0,
      edit: false,
      basicInfoObj,
      transportInfoObj: {
        transportCompany: "",
        vesselName: "",
        vesselNo: "",
        departureCountry: "",
        departurePort: "",
        destinationCountry: "",
        destinationPort: ""
      },
      transportInfoArr: [],
      basicInfoArr: [],
      containerType: [],
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
        // {
        //   text: '￥-$',
        //   value: 0
        // },
        // {
        //   text: '$-￥',
        //   value: 0
        // },
        // {
        //   text: '￥-€',
        //   value: 0
        // },
        // {
        //   text: '€-￥',
        //   value: 0
        // },
        // {
        //   text: '$-€',
        //   value: 0
        // },
        // {
        //   text: '€-$',
        //   value: 0
        // }
      ],
      feeList: [
        // {
        //   "fclTransportCharge": "FCL Transport Charge",
        //   "fclTransportChargeCurrency": "FCL Transport Charge Currency",
        //   "handlingCharges": "Handling Charges",
        //   "handlingChargesCurrency": "Handling Charges Currency",
        //   "otherPortCharges": "Other Port Charges",
        //   "otherPortChargesCurrency": "Other Port Charges Currency",
        //   "oceanFreight": "Ocean Freight",
        //   "oceanFreightCurrency": "Ocean Freight Currency",
        //   "insuranceCharges": "Insurance Charges",
        //   "insuranceChargesCurrency": "Insurance Charges Currency",
        //   "otherCharges": "Other Charges",
        //   "otherChargesCurrency": "Other Charges Currency",
        //   "otherChargesExchangeRate": "Other Charges Exchange Rate",
        //   "otherChargesRemark": "Other Charges Remark",
        //   "commissionCharges": "Commission Charges",
        //   "commissionChargesCurrency": "Commission Charges Currency"
        // }
      ],
      productList: [
        // {
        //   "orderNo": "orderNo",
        //   "quantityOfOuterCartonsToBeShipped": "quantityOfOuterCartonsToBeShipped",
        //   "goodsToBeShipped": "goodsToBeShipped",
        //   "skuCode": "SKU Code",
        //   "skuNameEn": "SKU Name (EN)",
        //   "skuNameCN": "SKU Name (CN)",
        //   "productDescription": "Product Description",
        //   "blSkuName": "B/L SKU Name",
        //   "customsDeclarationNameCn": "Customs Declaration Name(CN)",
        //   "customsDeclarationNameEn": "Customs Declaration Name(EN)",
        //   "hsCode": "HS Code",
        //   "reportElements": "Report Elements",
        //   "supplierName": "Supplier Name",
        //   "supplierNo": "Supplier No",
        //   "customerSkuCode": "Customer SKU Code",
        //   "factorySKUCode": "Factory SKU Code",
        //   "unit": "Unit",
        //   "exportUnitPrice": "Export Unit Price",
        //   "totalPriceOfExport": "Total Price Of Export",
        //   "currency": "Currency",
        //   "skuQuantityOfOuterCarton": "SKU Quantity Of Outer Carton",
        //   "outerCartonLength": "Outer Carton Length",
        //   "outerCartonWidth": "Outer Carton Width",
        //   "outerCartonHeight": "Outer Carton Height",
        //   "outerCartonNetWeight": "Outer Carton Net Weight",
        //   "outerCartonGrossWeight": "Outer Carton Gross Weight",
        //   "outerCartonVolume": "Outer Carton Volume",
        //   "shippingMarks": "Shipping Marks",
        //   "outerCartonBarCode": "Outer Carton Bar-Code",
        //   "outerCartonSkuCode": "Outer Carton SKU Code"
        // }
      ],
      productModifyList: [
        // {
        //   "orderNo": "orderNo",
        //   "quantityOfOuterCartonsToBeShipped": "quantityOfOuterCartonsToBeShipped",
        //   "goodsToBeShipped": "goodsToBeShipped",
        //   "skuCode": "SKU Code",
        //   "skuNameEn": "SKU Name (EN)",
        //   "skuNameCN": "SKU Name (CN)",
        //   "productDescription": "Product Description",
        //   "blSkuName": "B/L SKU Name",
        //   "customsDeclarationNameCn": "Customs Declaration Name(CN)",
        //   "customsDeclarationNameEn": "Customs Declaration Name(EN)",
        //   "hsCode": "HS Code",
        //   "reportElements": "Report Elements",
        //   "supplierName": "Supplier Name",
        //   "supplierNo": "Supplier No",
        //   "customerSkuCode": "Customer SKU Code",
        //   "factorySKUCode": "Factory SKU Code",
        //   "unit": "Unit",
        //   "exportUnitPrice": "Export Unit Price",
        //   "totalPriceOfExport": "Total Price Of Export",
        //   "currency": "Currency",
        //   "skuQuantityOfOuterCarton": "SKU Quantity Of Outer Carton",
        //   "outerCartonLength": "Outer Carton Length",
        //   "outerCartonWidth": "Outer Carton Width",
        //   "outerCartonHeight": "Outer Carton Height",
        //   "outerCartonNetWeight": "Outer Carton Net Weight",
        //   "outerCartonGrossWeight": "Outer Carton Gross Weight",
        //   "outerCartonVolume": "Outer Carton Volume",
        //   "shippingMarks": "Shipping Marks",
        //   "outerCartonBarCode": "Outer Carton Bar-Code",
        //   "outerCartonSkuCode": "Outer Carton SKU Code"
        // }
      ],
      paymentList: [
        // {
        //   "paymentNumber": "casd122",
        //   "paymentItem": "Payment Item",
        //   "estPayDate": "Est. Pay Date",
        //   "estAmount": "123",
        //   "actPayDate": "Act. Pay Date",
        //   "actAmount": "44",
        //   "currency": "Currency",
        //   "avilable": "Avilable",
        //   "operation": "Operation"
        // }
      ],
      tableData: [
        // {
        //   "containerNo": 1,
        //   "sealNumber": 2,
        //   "containerWeight": "3",
        //   "containerType": "4",
        //   "vgm": "22",
        //   "totalQuantityInContainer": "13",
        //   "totalVolumeInContainer": "3",
        //   "totalNetWeightInContainer": "12",
        //   "totalQuantityOfOuterCartonsInContainer": "43",
        //   "totalSkuPriceInContainer": "45",
        //   "exchangeCurrency": "Exchange Currency"
        // },
        // {
        //   "containerNo": 1,
        //   "sealNumber": 2,
        //   "containerWeight": "3",
        //   "containerType": "4",
        //   "vgm": "11",
        //   "totalQuantityInContainer": "22",
        //   "totalVolumeInContainer": "12",
        //   "totalNetWeightInContainer": "1",
        //   "totalQuantityOfOuterCartonsInContainer": "12",
        //   "totalSkuPriceInContainer": "33",
        //   "exchangeCurrency": "Exchange Currency"
        // }
      ],
      paymentSum: {},
      selectArr: {
        permitedForTransportation: [
          {
            code: '1',
            name: this.$i.yes
          },
          {
            code: '0',
            name: this.$i.no
          }
        ]
      }
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
  watch: {
    edit (newValue) {
      if (newValue) return
      this.tableData.forEach((a, i) => {
        !Object.keys(a).length && this.arraySplite(this.tableData, i)
      })
    }
  },
  computed: {
    planId () {
      return this.$route.query.id
    }
  },
  mounted () {
    this.getDictionary()
    this.basicInfoArr = _.map(this.basicInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i[key],
        key,
        value
      }
    })
    this.transportInfoArr = _.map(this.transportInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i[key],
        key,
        value
      }
    })

    // this.productModifyList = this.$getDB(this.$db.logistic.productInfo, this.productModifyList)
    if (this.planId) {
      this.getDetails()
    } else {
      this.edit = true
      this.getNewLogisticsNo()
    }
  },
  methods: {
    getDetails () {
      this.$ajax.get(`${this.$apis.get_plan_details}${this.planId}`).then(res => {
        this.basicInfoArr.forEach(a => {
          a.value = res[a.key]
        })
        this.transportInfoArr.forEach(a => {
          a.value = res[a.key]
        })
        this.exchangeRateList = res.currencyExchangeRate
        this.remark = res.remark
        this.tableData = res.containerDetail
        this.feeList = [res.fee]
        this.productList = this.$getDB(this.$db.logistic.productInfo, res.product)
        this.productModifyList = this.$getDB(this.$db.logistic.productInfo, res.product)
        this.$ajax.post(`${this.$apis.get_payment_list}${res.logisticsNo}/30`).then(res => {
          this.paymentList = res.datas
          this.paymentSum = res.statisticsDatas[0]
        })
      })
    },
    getNewLogisticsNo () {
      this.$ajax.post(this.$apis.get_new_logistics_no).then(res => {
        this.basicInfoArr.find(a => {
          if (a.key === 'logisticsNo') return a
        }).value = res
      })
    },
    getDictionary () {
      this.$ajax.get(this.$apis.get_currency).then(res => {
        this.selectArr.exchangeCurrency = res
      })
      this.$ajax.get(this.$apis.get_container_type, '_cache').then(res => {
        this.containerType = res
      })
      this.getDictionaryPart(['PMT', 'MD_TN', 'BL_TYPE', 'AVL'], ['avl', 'blType', 'transportationWay', 'payment'])
      // this.getDictionaryPart([], 'transportationWay')
      // this.getDictionaryPart([], 'blType')
    },
    getDictionaryPart (keyCode, keys) {
      this.$ajax.post(this.$apis.get_dictionary, keyCode, '_cache').then(res => {
        keys.forEach((a, i) => {
          this.selectArr[a] = res[i].codes
        })
      })
    },
    handleSelectionContainer (selectArray) {
      this.selectionContainer = selectArray
    },
    deleteContainer () {
      if (!this.selectionContainer.length) return
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.selectionContainer.forEach(i => this.arraySplite(this.tableData, i))
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    },
    computeType (key) {
      return basicInfoInput.includes(key) ? 'input' : basicInfoDate.includes(key) ? 'date' : 'selector'
    },
    arrayAppend(arrKey) {
      this[arrKey].push({})
    },
    tailBtnCance () {
      this.tableData.pop();
    },
    tailBtnOk (item) {
      this.tableData.pop();
      this.tableData.push(item);
    },
    arraySplite (array, index) {
      array.splice(index, 1);
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
    },
    switchEdit () {
      this.edit = !this.edit
    },
    toExit () {
      this.planId ? (this.edit = !this.edit) : this.$router.go(-1)
    },
    savePlan () {
      this.basicInfoArr.forEach(a => {
        this.basicInfoObj = a.value
      })
      if (!this.basicInfoObj.payment) return this.$message({
        type: 'error',
        message: '付款方式为必填!'
      })
      console.log(this.basicInfoObj)
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
