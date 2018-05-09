<template>
  <div class="place-logistic-plan">
    <div class="hd-top" v-if="planId">{{ $i.logistic.logisticPlan + '    ' + logisticsNo}}</div>
    <div class="hd-top" v-else>{{ $i.logistic.placeNewLogisticPlan }}</div>
    <form-list :showHd="false" :edit="edit" :listData="basicInfoArr" :selectArr="selectArr" :title="$i.logistic.basicInfoTitle"/>
    <el-row :gutter="10">
       <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"> -->
        <div class="input-item">
          <span>{{ $i.logistic.remark }}</span>
          <el-input class="el-input" type="textarea" resize="none" :autosize="{ minRows: 3 }" placeholder="请输入内容"v-model="remark" v-if="edit"></el-input>
          <p v-else>{{ remark }}</p>
        </div>
      <!-- </el-col> -->
      <attachment accept="all" ref="attachment" :title="$i.logistic.attachment" :edit="edit"/>
      <one-line :edit="edit" :list="exchangeRateList" :title="$i.logistic.exchangeRate"/>
    </el-row>
    <form-list :listData="transportInfoArr" :edit="edit" :title="$i.logistic.transportInfoTitle"/>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.containerInfoTitle }}</div>
      <container-info :tableData.sync="containerInfo" @arrayAppend="arrayAppend" @handleSelectionChange="handleSelectionContainer" @deleteContainer="deleteContainer" :edit="edit" :containerType="selectArr.containerType"/>
    </div>

    <div v-if="planId && feeList">
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.feeInfoTitle }}</div>
      <fee-info :edit="edit" :tableData.sync="feeList"></fee-info>
    </div>

    <div v-if="planId">
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.paymentTitle }}</div>
      <payment :tableData.sync="paymentList" :edit="edit" :paymentSum="paymentSum" @addPayment="addPayment" @savePayment="savePayment" :selectArr="selectArr" @updatePaymentWithView="updatePaymentWithView" :currencyCode="oldPlanObject.currency"/>
    </div>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.productInfoTitle }}</div>
      <v-table :data.sync="productList" @action="action" :buttons="productbButtons" @change-checked="selectProduct">
        <div slot="header" class="product-header" v-if="edit">
          <el-button type="primary" size="mini" @click.stop="showAddProductDialog = true">{{ $i.logistic.addProduct }}</el-button>
          <el-button type="danger" size="mini" @click.stop="removeProduct">{{ $i.logistic.remove }}</el-button>
        </div>
      </v-table>
    </div>
    <el-dialog :title="$i.logistic.negotiate" :visible.sync="showProductDialog" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog">
      <product-modify ref="productModifyComponents" :tableData.sync="productModifyList" :productInfoModifyStatus="productInfoModifyStatus" :productId="selectProductId"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showProductDialog = false">{{ $i.logistic.cancel }}</el-button>
        <el-button type="primary" @click="showProductDialog = false">{{ $i.logistic.confirm }}</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="$i.logistic.addProductFromOrder" :visible.sync="showAddProductDialog" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog">
      <add-product :tableData="orderList" ref="addProduct"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAddProduct(0)">{{ $i.logistic.cancel }}</el-button>
        <el-button type="primary" @click="closeAddProduct(1)">{{ $i.logistic.confirm }}</el-button>
      </div>
    </el-dialog>
    <btns :edit="edit" @switchEdit="switchEdit" @toExit="toExit" @sendData="sendData" :planId="planId" @createdPlanData="createdPlanData" @createdPaymentData="createdPaymentData"/>
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

import { basicInfoInput, basicInfoSelector, basicInfoDate, basicInfoObj, transportInfoObj } from '@/database/logistic/plan/staticData'

export default {
  name: 'logisticPlanDetail',
  data() {
    return {
      logisticsNo: '',
      remark: '',
      selectProductId: 0,
      showProductDialog: false,
      showAddProductDialog: false,
      selectionContainer: [],
      productInfoModifyStatus: 0,
      edit: false,
      oldPlanObject: {},
      oldPaymentObject: {},
      basicInfoObj,
      transportInfoObj,
      transportInfoArr: [],
      basicInfoArr: [],
      modifyProductArray: [],
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
      exchangeRateList: [],
      feeList: [],
      productList: [],
      removeProductList: [],
      productModifyList: [],
      paymentList: [],
      containerInfo: [],
      paymentSum: {},
      orderList: [],
      selectArr: {
        containerType: [],
        permitedForTransportation: [
          {
            code: '1',
            name: this.$i.logistic.yes
          },
          {
            code: '0',
            name: this.$i.logistic.no
          }
        ]
      },
      pageParams: {
        pn: 1,
        ps: 10
      },
      dictionaryPart: {
        avl: 'AVL',
        blType: 'BL_TYPE',
        logisticsStatus: 'LS_STATUS',
        transportationWay: 'MD_TN',
        payment: 'PMT'
      },
      configUrl: {
        placeLogisticPlan: {
          saveAsDraft: this.$apis.save_draft_logistic_plan,
          send: this.$apis.send_logistic_plan
        },
        planDetail: {
          send: this.$apis.update_logistic_plan
        },
        planDraftDetail: {
          saveAsDraft: this.$apis.save_draft_logistic_plan,
          send: this.$apis.send_draft_logistic_plan
        }
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
    selectProductId (newValue) {
      newValue && this.getProductHistory(newValue)
    },
    productInfoModifyStatus () {
      this.getProductHistory(this.selectProductId)
    }
  },
  computed: {
    planId () {
      return this.$route.query.id
    },
    pageName () {
      const arr = this.$route.fullPath.split('/')
      return arr[arr.length - 1].split('?')[0]
    }
  },
  mounted () {
    this.registerRoutes()
    this.getDictionary()
    this.getOrderList()
    this.basicInfoArr = _.map(this.basicInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i.logistic[key],
        key,
        value
      }
    })

    this.transportInfoArr = _.map(this.transportInfoObj, (value, key) => {
      return {
        type: this.computeType(key),
        label: this.$i.logistic[key],
        key,
        value
      }
    })

    if (this.planId) {
      this.getDetails()
    } else {
      this.edit = true
      this.getNewLogisticsNo()
    }
  },
  methods: {
    registerRoutes () {
      this.$store.commit('SETDRAFT', {
        name: 'overviewDraft',
        show: true
      })
      this.$store.commit('SETRECYCLEBIN', {
        name: 'overviewArchive',
        show: true
      })
    },
    getDetails () {
      this.$ajax.get(`${this.$apis.get_plan_details}${this.planId}`).then(res => {
        this.createdPlanData(res)
        this.$ajax.post(`${this.$apis.get_payment_list}${res.logisticsNo}/30`).then(res => {
          this.createdPaymentData(res)
        })
        this.getSupplier(res.logisticsNo)
      })
    },
    getSupplier (logisticsNo) {
      this.$ajax.get(`${this.$apis.get_supplier}?logisticsNo=${logisticsNo}`).then(res => {
        this.selectArr.supplier = res
      })
    },
    createdPlanData (res = this.oldPlanObject) {
      this.oldPlanObject = JSON.parse(JSON.stringify(res))
      const stringArray = [
        'payment',
        'permitedForTransportation',
        'blType'
      ]
      this.basicInfoArr.forEach(a => {
        a.value = stringArray.includes(a.key) ? '' + res[a.key] : res[a.key]
      })
      this.transportInfoArr.forEach(a => {
        a.value = res[a.key]
      })
      this.exchangeRateList = res.currencyExchangeRate || []
      this.remark = res.remark
      this.logisticsNo = res.logisticsNo
      this.containerInfo = res.containerDetail || []
      this.feeList = res.fee ? [res.fee] : null
      this.productList = this.$getDB(this.$db.logistic.productInfo, res.product)
    },
    createdPaymentData (res = this.oldPaymentObject) {
      this.oldPaymentObject = JSON.parse(JSON.stringify(res))
      this.paymentList = res.datas
      this.paymentSum = res.statisticsDatas[0]
    },
    getNewLogisticsNo () {
      this.$ajax.post(this.$apis.get_new_logistics_no).then(res => {
        this.basicInfoArr.find(a => a.key === 'logisticsNo').value = res
        this.getSupplier(res)
      })
    },
    getDictionary () {
      this.$ajax.get(this.$apis.get_currency).then(res => {
        this.$set(this.selectArr, 'exchangeCurrency', res)
      })
      this.$ajax.get(this.$apis.get_container_type).then(res => {
        this.$set(this.selectArr, 'containerType', res)
      })
      this.getDictionaryPart()
    },
    getDictionaryPart () {
      const params = _.map(this.dictionaryPart, v => v)
      this.$ajax.post(this.$apis.get_dictionary, params).then(res => {
        _.mapObject(this.dictionaryPart, (v, k) => {
          this.$set(this.selectArr, k, res.find(a => a.code === v).codes)
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
        this.selectionContainer.forEach(i => this.arraySplite(this.containerInfo, i))
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
    arraySplite (array, index) {
      array.splice(index, 1);
    },
    action (e, i) {
      if (i === 3) return
      this.selectProductId = e.id.value
      this.productInfoModifyStatus = i
      this.showProductDialog = true
    },
    getProductHistory (productId) {
      const modifyObj = this.modifyProductArray.find(a => a.id === this.selectProductId)

      this.productModifyList = this.$getDB(this.$db.logistic.productInfo, modifyObj ? [ modifyObj ] : [])
      this.$ajax.get(`${this.$apis.get_product_history}?productId=${productId}`).then(res => {
        this.productModifyList = [...this.productModifyList, ...this.$getDB(this.$db.logistic.productInfo, res.history)]
      })
    },
    addPayment () {
      const obj = this.basicInfoArr.find(a => a.key === 'exchangeCurrency')

      this.$ajax.post(this.$apis.get_payment_no).then(res => this.paymentList.push({
        edit: true,
        no: res,
        status: 20,
        currencyCode: obj.value || null
      }))
    },
    savePayment (i) {
      const currencyCode = this.paymentList[i].currencyCode
      const payToId = this.paymentList[i].payToId
      const skuSupplierObj = this.selectArr.supplier.find(a => a.skuSupplierId === payToId)

      const paymentData = {
        ...this.paymentList[i],
        currency: this.selectArr.exchangeCurrency.find(a => a.code === currencyCode).id,
        currencyCode,
        orderNo: this.oldPlanObject.logisticsNo,
        orderType: 30,
        payToId,
        payToName: skuSupplierObj ? skuSupplierObj.skuSupplierName : null,
        type: 10
      }

      const url = paymentData.id ? this.$apis.update_plan_payment : this.$apis.save_plan_payment
      this.$ajax.post(url, paymentData).then(res => {
        this.paymentList[i] = res
        this.updatePaymentWithView({i, edit: false})
      })
    },
    updatePaymentWithView ({ i, edit, status }) {
      const obj = {
        ...this.paymentList[i],
        edit,
        status: status || this.paymentList[i].status
      }
      this.$set(this.paymentList, i, obj)
    },
    getOrderList () {
      this.$ajax.post(this.$apis.get_order_list_with_page, this.pageParams).then(res => {
        // this.orderList = res.datas.map(a => {
        //   let aa = _.mapObject(a, item => {
        //     item = 1
        //     return item
        //   })
        //   return aa
        // })
        this.orderList = res.datas
      })
    },
    closeAddProduct (status) {
      this.showAddProductDialog = false
      const selectArrData = this.$refs.addProduct.selectArrData
      if (!status || !selectArrData.length) return this.$refs.addProduct.$refs.multipleTable.clearSelection()
      selectArrData.forEach(a => {
        a.blSkuName = ''
        a.hsCode = ''
        a.currency = ''
        !this.modifyProductArray.includes(a) && this.modifyProductArray.push(a)
      })

      this.productList = [...this.$getDB(this.$db.logistic.productInfo, selectArrData), ...this.productList]
      // console.log(selectArrData)
      // TODO
    },
    selectProduct (arr) {
      this.selectProductArr = arr
    },
    removeProduct () {
      this.selectProductArr.forEach(a => {
        const index = this.productList.indexOf(a)
        this.removeProductList.push(this.productList[index])
        this.$delete(this.productList, index)
      })
    },
    closeDialog () {
      this.productModifyList = []
      // console.log(this.$refs.productModifyComponents)
    },
    switchEdit () {
      this.edit = !this.edit
    },
    toExit () {
      if (!this.planId) return this.$router.go(-1)
      this.edit = !this.edit
      this.createdPlanData()
      this.createdPaymentData()
    },
    sendData (keyString) {
      const url = this.configUrl[this.pageName][keyString]

      this.basicInfoArr.forEach(a => {
        this.$set(this.basicInfoObj, a.key, a.value instanceof Date ? +a.value : a.value)
      })

      this.transportInfoArr.forEach(a => {
        this.$set(this.transportInfoObj, a.key, a.value)
      })

      this.basicInfoObj.remark = this.remark
      if (!this.basicInfoObj.payment) return this.$message({
        type: 'error',
        message: '付款方式为必填!'
      })

      _.mapObject(this.basicInfoObj, (value, key) => {
        this.oldPlanObject[key] = value
      })
      _.mapObject(this.transportInfoObj, (value, key) => {
        this.oldPlanObject[key] = value
      })
      this.oldPlanObject.containerDetail = this.containerInfo
      this.fee = this.feeList
      this.oldPlanObject.product = this.modifyProductArray
      this.oldPlanObject.rmProduct = this.removeProductList.map(a => {
        const obj = {}
        _.mapObject(a, (value, key) => {
          obj[key] = value.value
        })
        return obj
      })
      this.$ajax.post(url, this.oldPlanObject).then(res => {
        this.$message({
          message: '发送成功',
          type: 'success'
        })
        this.edit = false
      })
    }
  }
}
</script>
<style lang="less" scoped>
.place-logistic-plan {
  margin-top: 20px;
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
    // .el-select, .el-input {
    //   flex:1;
    // }
  }
  .product-header {
    margin-bottom: 20px;
  }
}
</style>
