<template>
  <div class="place-logistic-plan">
    {{pageName}}
    <div class="hd-top" v-if="$route.name=='logisticPlanDetail'">{{ $i.logistic.logisticPlan + ' ' + logisticsNo}}</div>
    <div class="hd-top" v-if="$route.name=='placeLogisticPlan'">{{ $i.logistic.placeNewLogisticPlan }}</div>
    <div class="hd-top" v-if="$route.name=='loadingListDetail'">{{ $i.logistic.loadingList + ' ' + logisticsNo}}</div>
    <div class="hd-top" v-if="$route.name=='logisticDraftDetail'">{{ $i.logistic.logisticDraftDetail + ' ' + logisticsNo}}</div>
    <form-list :DeliveredEdit="deliveredEdit" name="BasicInfo" :fieldDisplay="fieldDisplay" :showHd="false" @selectChange="formListSelectChange"
      @hightLightModifyFun="hightLightModifyFun" :edit="edit" :listData.sync="basicInfoArr" :selectArr="selectArr" :title="$i.logistic.basicInfoTitle"
    />
    <el-row :gutter="10">
      <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"> -->
      <div class="input-item">
        <span>{{ $i.logistic.remark }}:</span>
        <el-input @change="hightLightModifyFun({remark:remark},'remark')" :class="[{definedStyleClass : fieldDisplay&&fieldDisplay.hasOwnProperty('remark')},'el-input']"
          type="textarea" resize="none" :autosize="{ minRows: 3 }" placeholder="请输入内容" v-model="remark" v-if="edit"></el-input>
        <p v-else :style="fieldDisplay&&fieldDisplay.hasOwnProperty('remark') ? {
            'background': 'yellow',
            'padding':'5px'
          } : ''">{{ remark }}</p>
      </div>
      <!-- </el-col> -->
      <div class="input-item">
        <span>{{ $i.logistic.attachment }}:</span>
        <attachment ref="attachment" :readonly="attachmentReadonly" :list="attachmentList" :limit="20" />
      </div>
      <!-- <one-line :edit="edit" :list="exchangeRateList" :title="$i.logistic.exchangeRate"/> -->
    </el-row>
    <form-list :DeliveredEdit="deliveredEdit" :listData="ExchangeRateInfoArr" :edit="edit" :title="$i.logistic.ExchangeRateInfoTitle"
    />
    <form-list :DeliveredEdit="deliveredEdit" name="TransportInfo" :fieldDisplay="fieldDisplay" @hightLightModifyFun="hightLightModifyFun"
      :listData="transportInfoArr" :edit="edit" :title="$i.logistic.transportInfoTitle" :selectArr="selectArr"/>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.containerInfoTitle }}</div>
      <container-info :matchData="containerinfoMatch" :tableData="containerInfo" :ExchangeRateInfoArr="ExchangeRateInfoArr" @arrayAppend="arrayAppend" @handleSelectionChange="handleSelectionContainer"
        @deleteContainer="deleteContainer" :edit="edit" :containerType="selectArr.containerType" :currencyCode="oldPlanObject.currency"
        @ContainerInfoLight="ContainerInfoLight"
      />
    </div>

    <!-- <div v-if="planId && feeList"> -->
    <div v-if="pageTypeCurr.slice(-6) == 'Detail'">
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.feeInfoTitle }}</div>
      <fee-info :edit="edit" :tableData.sync="feeList"></fee-info>
    </div>

    <div v-if="pageTypeCurr.slice(-6) == 'Detail'">
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.paymentTitle }}</div>
      <payment ref="payment" v-authorize="auth[pageTypeCurr]&&(auth[pageTypeCurr].payment||'')" :tableData.sync="paymentList" :ExchangeRateInfoArr="ExchangeRateInfoArr" :edit="edit" :paymentSum="paymentSum"
        @addPayment="addPayment" @savePayment="savePayment" :selectArr="selectArr" @updatePaymentWithView="updatePaymentWithView"
        :currencyCode="oldPlanObject.currency" />
    </div>
    <div>
      <div class="hd"></div>
      <div class="hd active">{{ $i.logistic.productInfoTitle }}</div>
      <v-table ref="productInfo" :code="configUrl[pageName]&&configUrl[pageName].setTheField" :totalRow="productListTotal" :data.sync="productList" @action="action" :buttons="productbButtons"
        @change-checked="selectProduct"
        native-sort="orderNo"
        @change-sort="$refs.productInfo.setSort(productList)"
        >
        <div slot="header" class="product-header" v-if="edit">
          <el-button v-authorize="auth[pageTypeCurr]&&(auth[pageTypeCurr].PRODUCT_INFO_ADD||'')" type="primary" size="mini" @click.stop="getSupplierIds(0)">{{ $i.logistic.addProduct }}</el-button>
          <el-button v-authorize="auth[pageTypeCurr]&&(auth[pageTypeCurr].PRODUCT_INFO_DELETE||'')" type="danger" size="mini" @click.stop="removeProduct">{{ $i.logistic.remove }}</el-button>
        </div>
      </v-table>
    </div>
    <el-dialog width="70%" :visible.sync="showAddProductDialog" :close-on-click-modal="false"
      :close-on-press-escape="false">
      <overviewPage
        :title="$i.logistic.addProductFromOrder"
        :tableData="ProductFromOrder"
        :form-column="$db.logistic.addProductFromOrderFilter"
        :tableButtons="[{label: 'Detail', type: 1}]"
        @change-checked="changeChecked"
        @tableBtnClick="ProductFromOrderDetail"
        @search="getSupplierIds"
        :tableCode="configUrl[pageName]&&configUrl[pageName].setTheField"
        @change-sort="changeSort"
      >
        <v-pagination slot="pagination" :page-data="pageParams"/>
        <div slot=footerBtn>
          <el-button @click="showAddProductDialog = false">{{ $i.logistic.cancel }}</el-button>
          <el-button type="primary" @click="closeAddProduct">{{ $i.logistic.confirm }}</el-button>
        </div>
      </overviewPage>
    </el-dialog>
    <messageBoard v-if="!isCopy&&pageTypeCurr.slice(-6) == 'Detail'" module="logistic" :code="pageTypeCurr" :id="logisticsNo"></messageBoard>
    <btns :fieldDisplay="fieldDisplay" :DeliveredEdit="deliveredEdit" :edit="edit" @switchEdit="switchEdit" @toExit="toExit"
      :logisticsStatus="logisticsStatus" @sendData="sendData" :isCopy="isCopy"/>
    <v-history-modify ref="HM" disabled-remark :beforeSave="closeModify" @save="closeModifyNext"
      :code="configUrl[pageName]&&configUrl[pageName].setTheField"
      @closed="$refs.productInfo.update()"
    ></v-history-modify>
  </div>
</template>
<script>
  import {
    containerInfo,
    selectSearch,
    VTable,
    VHistoryModify,
    overviewPage,
    VPagination
  } from '@/components/index';
  import {
    mapActions,
    mapState
  } from 'vuex';
  import attachment from '@/components/common/upload/index';
  import messageBoard from '@/components/common/messageBoard/index';
  import formList from '@/views/logistic/children/formList'
  import feeInfo from '@/views/logistic/children/feeInfo'
  import payment from '@/views/logistic/children/payment'
  import btns from '@/views/logistic/children/btns'

  export default {
    name: 'logisticPlanDetail',
    data() {
      return {
        planId: '',
        fieldDisplay: null,
        pageParams: {          
          pn: 1,
          ps: 10,
          skuSupplierIds:[]
        },
        deliveredEdit: false,
        negotiate: '',
        fieldDisplay: {},
        hightLightObj: {},
        attachmentList: [],
        modefiyProductIndex: 0,
        modefiyProductIndexArr: [],
        logisticsStatus: null,
        logisticsNo: '',
        remark: '',
        showProductDialog: false,
        showAddProductDialog: false,
        selectionContainer: [],
        productInfoModifyStatus: 0,
        edit: false,
        oldPlanObject: {},
        oldPaymentObject: {},
        basicInfoObj: {},
        transportInfoObj: {},
        ExchangeRateInfoArr: [],
        transportInfoArr: [],
        basicInfoArr: [],
        modifyProductArray: [],
        exchangeRateList: [],
        feeList: [],
        sendfee: {},
        productList: [],
        removeProductList: [],
        productModifyList: [],
        paymentList: [],
        containerInfo: [],
        containerinfoMatch: [],
        paymentSum: {},
        selectArr: {
          containerType: [],
          permitedForTransportation: [{
              code: '1',
              name: this.$i.logistic.yes
            },
            {
              code: '0',
              name: this.$i.logistic.no
            }
          ]
        },
        dictionaryPart: {
          avl: 'AVL',
          blType: 'BL_TYPE',
          logisticsStatus: 'LS_PLAN',
          transportationWay: 'MD_TN',
          payment: 'PMT',
          skuIncoterm: 'ITM',
          ShipmentStatus: 'SKU_LOGISTICS_STATUS'
        },
        auth:{
          logisticPlanDetail: {
            payment:'LOGISTICS:PLAN_DETAIL:PAYMENT',
            PRODUCT_INFO_ADD:'LOGISTICS:PLAN_DETAIL:PRODUCT_INFO_ADD',
            PRODUCT_INFO_DELETE:'LOGISTICS:PLAN_DETAIL:PRODUCT_INFO_DELETE'
          },
          loadingListDetail: {
            payment:'LOADING_LIST:DETAIL:PAYMENT'
          }
        },
        configUrl: {
          placeLogisticPlan: {
            saveAsDraft: {
              api: this.$apis.save_draft_logistic_plan,
              path: '/draft'
            },
            send: {
              api: this.$apis.send_logistic_plan,
              path: '/plan'
            },
            setTheField: 'ulogistics_PlanDetail'
          },
          planDetail: {
            saveAsDraft: {
              api: this.$apis.save_draft_logistic_plan,
              path: '/draft'
            },
            send: {
              api: this.$apis.update_logistic_plan,
              path: '/plan'
            },
            setTheField: 'ulogistics_PlanDetail'
          },
          planDraftDetail: {
            saveAsDraft: {
              api: this.$apis.save_draft_logistic_plan,
              path: '/draft'
            },
            send: {
              api: this.$apis.send_draft_logistic_plan,
              path: '/plan'
            },
            setTheField: 'ulogistics_PlanDetail'
          },
          loadingListDetail: {
            send: this.$apis.update_logistic_plan,
            setTheField: 'ulogistics_OrderDetail'
          }
        },
        pageName: '',
        prodFieldDisplay: {},
        CustomerName: '',
        ProductFromOrder:[],
        ProductFromOrderRes:[],
        planStatus:2,
        initData:null
      }
    },
    components: {
      formList,
      containerInfo,
      attachment,
      VTable,
      feeInfo,
      payment,
      btns,
      messageBoard,
      VHistoryModify,
      overviewPage,
      VPagination
    },
    computed: {
      productListTotal() {
        let obj = {};
        if (this.productList.length <= 0) {
          return
        }
        this.productList.forEach((item, i) => {
          _.mapObject(item, (v, k) => {
            if (v._important) {
              obj[k] = {
                value: Number(v.value)  + (Number(obj[k] ? obj[k].value : 0) || 0)
              };
            } else {
              obj[k] = {
                value: '--'
              };
            }
          })
        });
        return [obj];
      },
      attachmentReadonly() {
        return !this.edit;
      },
      pageTypeCurr() {
        return this.$route.name;
      },
      isParams() {
        return _.isEmpty(this.$route.query)
      },
      isCopy() {
        return this.$route.query.copy
      },
      productbButtons() {
        let aArr = [{
            label: 'Negociate',
            type: 1,
            disabled: !this.edit
          },
          {
            label: 'Detail',
            type: 3
          }
        ]
        this.$route.name == 'placeLogisticPlan' ? aArr : aArr.splice(1, 0, {
          label: 'History',
          type: 2,
          disabled: !this.edit
        })
        return aArr;
      }
    },
    mounted() {
      let menuList = [{
        path: '',
        query: {code: this.pageType&&this.pageType=="loadingList" ? 'BIZ_LOGISTIC_ORDER' : 'BIZ_LOGISTIC_PLAN'},
        type: 100,
        auth: (()=>{ 
          let code = null;
          if(this.pageTypeCurr=="logisticPlanDetail"){
            code = 'LOGISTICS:LOG';
          }else if(this.pageTypeCurr=="loadingListDetail"){
            code = 'LOADING_LIST:LOG';
          }else if(this.pageTypeCurr=="loadingListDetail"){
            code = 'LOGISTICS:LOG';
          }
          return code
        })(),
        label: this.$i.common.log
      }];
      if(this.pageTypeCurr=="logisticPlanDetail"){
        menuList.push(
          {
            path: '/logistic/archivePlan',
            auth: 'LOGISTICS:PLAN_DETAIL:ARCHIVE',
            label: this.$i.logistic.archivePlan
          }
        )
      }else if(this.pageTypeCurr=="loadingListDetail"){
        menuList.push(
          {
            path: '/logistic/archiveLoadingList',
            auth: 'LOADING_LIST:DETAIL:ARCHIVE',
            label: this.$i.logistic.archiveLoadingList
          }
        )
      }else if(this.pageTypeCurr=="logisticDraftDetail"){
        menuList.push(
          {
            path: '/logistic/archiveDraft',
            auth: 'LOGISTICS:PLAN_DETAIL:ARCHIVE',
            label: this.$i.logistic.archiveDraft
          }
        )
      }
      this.setMenuLink(menuList);
      const arr = this.$route.fullPath.split('/')
      this.pageName = arr[arr.length - 1].split('?')[0]
      this.getDictionary()
      this.basicInfoArr = _.map(this.$depthClone(this.$db.logistic.basicInfoObj), (value, key) => {
        return value;
      })
      this.ExchangeRateInfoArr = _.map(this.$db.logistic.ExchangeRateInfo, (value, key) => {
        return value;
      })
      this.transportInfoArr = _.map(this.$db.logistic.transportInfoObj, (value, key) => {
        return value;
      })
      if(this.pageTypeCurr == 'logisticDraftDetail'){
        this.edit = true;
      }
    },
    methods: {
      ...mapActions(['setMenuLink']),
      //初始化页面数据
      pageInit(){
        if (this.pageTypeCurr.slice(-6) == 'Detail') {
          this.getDetails();
        } else {
          this.edit = true
          this.basicInfoArr.forEach((item) => {
            this.$set(item, 'value', item.defaultVal);
          })
          this.transportInfoArr.forEach((item) => {
            this.$set(item, 'value', item.defaultVal);
          })
          if (this.isCopy) {
            this.getDetails();
          } else {
            this.getCustomer();
          }
          this.getNewLogisticsNo()
          this.getRate();
        }
      },
      //获取customerName
      getCustomer() {
        this.$ajax.get(`${this.$apis.get_Customer}`).then(res => {
          this.basicInfoArr.find(a => a.key === 'customerName').value = res.customerCompanyName;
        })
      },
      getRate() {
        this.$ajax.post(`${this.$apis.get_plan_rate}`).then(res => {
          this.matchRate(res);
        }).catch(err => {
          this.matchRate(null);
        })
      },
      //汇率与后台传入做 对应匹配
      matchRate(res) {
        this.ExchangeRateInfoArr.forEach((item) => {
          if (!res) {
            this.$set(item, 'value', '')
          } else {
            res.forEach((_item) => {
              if (item.key == _item.symbol) {
                _.map(_item, (v, k) => {
                  this.$set(item, k == 'price' ? 'value' : k, v)
                })
              }
            })
          }
        })
      },
      changeSort(arr){
        this.$set(this.pageParams,'sorts',arr.sorts);
        this.getSupplierIds();
      },
      getSupplierIds(arg) {
        this.pageParams = {...this.pageParams, ...arg}
        let url = this.$route.name == 'loadingListDetail' ? 'logistics_order_getSupplierIds' : 'logistics_plan_getSupplierIds';
        this.$ajax.get(this.$apis[url],{logisticsNo:this.basicInfoArr[0].value}).then(res => {
          this.pageParams.skuSupplierIds = res.supplierIds;
          this.pageParams.customerId = res.customerId;
          this.addProductFromOrder();
        })
      },

      ProductFromOrderDetail(e){
        this.$windowOpen({url:'/product/sourcingDetail',params:{id:e.skuId.value}})
      },
      addProductFromOrder(){
        this.$ajax.post(this.$apis.get_order_list_with_page, this.pageParams).then(res=>{
          this.showAddProductDialog = true;
          this.ProductFromOrderRes = res.datas;
          this.ProductFromOrder = this.$getDB(this.$db.logistic.dbBasicInfoObj,res.datas);
          this.$nextTick(()=>{
            this.$set(this.pageParams,'pn',res.pn);
            this.$set(this.pageParams,'ps',res.ps);
            this.$set(this.pageParams,'tc',res.tc);
          })
        })
      },
      getDetails() {
        let url = this.pageTypeCurr == "loadingListDetail" ? this.$apis.get_order_details : this.$apis.get_plan_details
        this.$ajax.get(`${url}?id=${this.$route.query.id || ''}&logisticsNo=${this.$route.query.code || '' }`).then(res => {
          this.planId = res.id;
          this.planStatus = res.planStatus;
          if (!this.isCopy) {
            this.fieldDisplay = res.fieldDisplay;
          }
          this.createdPlanData(res)
          this.initData = res; //用来初始化数据
          this.logisticsStatus = res.logisticsStatus;
          this.matchRate(res.currencyExchangeRate);
          this.attachmentList = res.attachment;
          this.getPaymentList(res.logisticsNo);
          this.getSupplier(res.logisticsNo)
        })
      },
      getPaymentList(logisticsNo) {
        this.$ajax.post(`${this.$apis.get_payment_list}${logisticsNo}/30`).then(res => {
          this.createdPaymentData(res)
        })
      },
      getSupplier(logisticsNo) {
        let url = this.pageTypeCurr == "loadingListDetail" ? this.$apis.get_order_supplier : this.$apis.get_plan_supplier
        this.$ajax.get(`${url}?logisticsNo=${logisticsNo}`).then(res => {
          this.selectArr.supplier = res && res.map((item) => {
            item.value = item.skuSupplierName;
            return item;
          });
        })
      },
      //获取国家信息
      countryAll(){
        this.$ajax.get(`${this.$apis.country_all}`).then(res => {
          this.$set(this.selectArr,'country',res);
        })
      },
      createdPlanData(res = this.initData) {
        this.oldPlanObject = JSON.parse(JSON.stringify(res))
        const stringArray = [
          'payment',
          'permitedForTransportation',
          'blType'
        ]
        this.basicInfoArr.forEach(a => {
          if (this.isCopy && a.key == 'logisticsNo') {
            a.value = this.logisticsNo;
          } else {
            a.value = stringArray.includes(a.key) ? res[a.key] : res[a.key]
          }
        })
        this.transportInfoArr.forEach(a => {
          a.value = res[a.key]
        })
        this.exchangeRateList = res.currencyExchangeRate || []
        this.remark = res.remark
        if (!this.isCopy) {
          this.logisticsNo = res.logisticsNo
        }
        this.containerInfo = (res.containerDetail || []).map(el=>{el.isModify=false;return el});
        this.containerinfoMatch = this.$depthClone(res.containerDetail || []).map(el=>{el.isModify=false;return el});
        let feeListb = false;
        _.mapObject(res.fee, (v, k) => {
          if (v != null) {
            feeListb = true;
            return;
          }
        })
        this.feeList = feeListb ? [res.fee] : null;
        this.sendfee = feeListb ? res.fee : null;
        res.product = res.product.map((item, i) => {
          item.vId = i;
          return item;
        });
        this.productList = this.$getDB(this.$db.logistic.productInfo, res.product.map(el => {
          let ShipmentStatusItem = this.selectArr.ShipmentStatus && this.selectArr.ShipmentStatus.find(item =>
            item.code == el.shipmentStatus)
          el.shipmentStatus = ShipmentStatusItem ? ShipmentStatusItem.name : '';
          return el;
        }));
        this.productList.forEach((item) => {
          if(!this.isCopy){
            if (item.fieldDisplay.value) {
              _.mapObject(item.fieldDisplay.value, (v, k) => {
                this.$set(item[k], '_style', {
                  background:'yellow'
                })
              })
              item.fieldDisplay.value = null;
            }
          }
        })
        this.countryAll();
      },
      createdPaymentData(res = this.oldPaymentObject) {
        this.oldPaymentObject = JSON.parse(JSON.stringify(res))
        this.paymentList = res.datas
        this.paymentSum = res.statisticsDatas[0]
      },
      getNewLogisticsNo() {
        this.$ajax.post(this.$apis.get_new_logistics_no).then(res => {
          this.basicInfoArr.find(a => a.key === 'logisticsNo').value = res
          if (this.isCopy) {
            this.logisticsNo = res;
          }
          this.getSupplier(res)
        })
      },
      getDictionary() {
        this.$ajax.get(this.$apis.get_currency).then(res => {
          this.$set(this.selectArr, 'exchangeCurrency', res)
        })
        this.$ajax.get(this.$apis.get_container_type).then(res => {
          this.$set(this.selectArr, 'containerType', res)
        })
        this.getDictionaryPart()
      },
      getDictionaryPart() {
        this.$set(this.dictionaryPart, 'logisticsStatus', this.pageTypeCurr == "loadingListDetail" ? 'LS_STATUS' :
          'LS_PLAN')
        const params = _.map(this.dictionaryPart, v => v)
        this.$ajax.post(this.$apis.get_dictionary, params).then(res => {
          _.mapObject(this.dictionaryPart, (v, k) => {
            this.$set(this.selectArr, k, res.find(a => a.code === v).codes)
            if (k == "ShipmentStatus") {
              this.selectArr[k].unshift({
                code: "0",
                defaultCode: 0,
                id: 0,
                name: " ",
                remark: "",
                seqNum: "",
                typeCode: "SKU_LOGISTICS_STATUS",
                value: "0"
              })
            }
          })
          this.pageInit();
        }).catch(()=>{
          this.pageInit();
        })
      },
      handleSelectionContainer(selectArray) {
        this.selectionContainer = selectArray
      },
      deleteContainer() {
        if (!this.selectionContainer.length) return
        this.$confirm(this.$i.logistic.isConfirmPeration, this.$i.logistic.tips, {
          confirmButtonText: this.$i.logistic.confirm,
          cancelButtonText: this.$i.logistic.cancel,
          type: 'warning'
        }).then(() => {
          this.oldPlanObject.rmContainerDetail = this.selectionContainer.map((item) => {
            return item.id;
          })
          this.containerInfo = _.difference(this.containerInfo, this.selectionContainer);
          this.$message({
            type: 'success',
            message: this.$i.logistic.operationSuccess
          })
        })
      },
      computeType(key) {
        return basicInfoInput.includes(key) ? 'input' : basicInfoDate.includes(key) ? 'date' : 'selector'
      },
      arrayAppend() {
        this.containerInfo.push({
          exchangeCurrency: this.basicInfoArr.find(a => a.key === 'exchangeCurrency').value,
          containerNo: "",
          containerType: null,
          containerWeight: 0,
          index: 0,
          totalContainerNetWeight: 0,
          totalContainerOuterCartonsQty: 0,
          totalContainerQty:0,
          totalContainerSkuPrice: 0,
          totalContainerVolume: 0,
          vgm: 0
        })
      },
      arraySplite(array, index) {
        array.splice(index, 1);
      },
      action(e, status, i) {
        if (status == 3) {
          return this.$windowOpen({url:'/product/sourcingDetail',params:{id:e.skuId.value}})
        }
        this.negotiate = this.productbButtons[status - 1].label;
        this.productInfoModifyStatus = status
        this.showProductDialog = true
        this.modefiyProductIndex = i
        this.modefiyProductIndexArr[i]=i;
        this.getProductHistory(e.id ? (e.argID ? e.argID.value : e.id.value) : null, status, i)
      },
      getProductHistory(productId, status, i) {
        let currentProduct = JSON.parse(JSON.stringify(this.productList[i]))
        let url = this.pageTypeCurr == 'loadingListDetail' ? 'get_product_order_history' : 'get_product_history';
        if(productId){
          if(status==1){
            this.productModifyList = [currentProduct];
            this.$refs.HM.init(this.productModifyList,[]);
          }else{
            this.$ajax.get(`${this.$apis[url]}?productId=${productId}`).then(res => {
              this.productModifyList = this.$getDB(this.$db.logistic.productModify,res.history.map(el => {
                let ShipmentStatusItem = this.selectArr.ShipmentStatus && this.selectArr.ShipmentStatus.find(item => item.code == el.shipmentStatus)
                el.shipmentStatus = ShipmentStatusItem ? ShipmentStatusItem.name : '';
                el.entryDt = this.$dateFormat(el.entryDt, 'yyyy-mm-dd hh:mm');
                return el;
              }));
              this.$refs.HM.init(this.productModifyList,[],false);
            })
          }
        }else{
          this.productModifyList = [currentProduct]
          this.$refs.HM.init(this.productModifyList, []);
        }
      },
      addPayment() {
        const obj = this.basicInfoArr.find(a => a.key === 'exchangeCurrency')
        this.$ajax.post(this.$apis.get_payment_no).then(res => this.paymentList.push({
          edit: true,
          no: res,
          status: 20,
          currencyCode: obj.value || null
        }))
      },
      savePayment(i) {
        const currencyCode = this.paymentList[i].currencyCode
        const payToCompanyId = this.paymentList[i].payToCompanyId;
        const skuSupplierObj = this.selectArr.supplier.find(a => a.companyId === payToCompanyId)
        const paymentData = {
          ..._.extend({
            name: null,
            actualPayAmount: null,
            planPayAmount: null,
            actualPayDt: null,
            planPayDt: null,
          }, this.paymentList[i]),
          // ...this.paymentList[i],
          currency: this.selectArr.exchangeCurrency.find(a => a.code === currencyCode).id,
          currencyCode,
          orderNo: this.oldPlanObject.logisticsNo,
          orderType: 30,
          payToCompanyId,
          payToCompanyName: skuSupplierObj ? skuSupplierObj.skuSupplierName : null,
          type: 10
        }
        const url = paymentData.id ? this.$apis.update_plan_payment : this.$apis.save_plan_payment;
        if (this.$validateForm(paymentData, this.$db.logistic.payMentInfo)) {
          return;
        }
        this.$ajax.post(url, paymentData).then(res => {
          this.paymentList[i] = res
          this.$refs.payment.addPaymentBtn = false;
          this.updatePaymentWithView({
            i,
            edit: false,
            res
          })
        })
      },
      updatePaymentWithView({
        i,
        edit,
        status,
        res
      }) {
        const obj = {
          ...this.paymentList[i],
          edit,
          status: status || this.paymentList[i].status
        }
        this.$set(this.paymentList, i, obj);
        if (res) {
          this.getPaymentList(res.orderNo);
        }
      },
      changeChecked(arr){
        this.ProductFromOrderChecked = arr;
      },
      closeAddProduct() {
        let CheckedIdArr =  this.ProductFromOrderChecked.map(el => {
          return el.id.value;
        })
        let arr = CheckedIdArr.map(el=>{
          return _.findWhere(this.ProductFromOrderRes,{id:el})
        });
        this.showAddProductDialog = false
        const selectArrData = this.$depthClone(arr);
        if (!arr.length || !selectArrData.length) return
        selectArrData.forEach(a => {
          let sliceStr = this.selectArr.skuIncoterm.find(item => item.code == a.skuIncoterm).name;
          sliceStr = sliceStr.slice(0, 1) + sliceStr.slice(1 - sliceStr.length).toLowerCase();
          a.id = null
          a.vId = +new Date()
          a.blSkuName = null
          a.hsCode = null
          a.currency = null
          a.toShipCartonQty = null
          a.toShipQty = null
          a.reportElement = null
          a.factorySkuCode = null
          a.unitExportPrice = a['sku' + sliceStr + 'Price']
          a.totalExportPrice = a.skuPrice || 0;
          a.currency = a['sku' + sliceStr + 'Currency'];
          a.containerNo = null
          a.containerType = null
          a.containerId = null
          a.fieldDisplay = null;
          a.totalContainerQty = null
          a.totalContainerVolume = null
          a.totalContainerNetWeight = null
          a.totalContainerOuterCartonsQty = null
          a.shipmentStatus = null
          !this.modifyProductArray.includes(a) && this.modifyProductArray.push(a)
        })
        this.productList = [...this.$getDB(this.$db.logistic.productInfo, selectArrData), ...this.productList]
      },

      selectProduct(arr) {
        this.selectProductArr = arr
      },
      removeProduct() {
        this.selectProductArr.forEach(a => {
          this.productList.forEach((item, index) => {
            if (item.vId.value == a.vId.value) {
              this.removeProductList.push(this.productList[index])
              this.productList.splice(index, 1);
            }
          })
        })
      },
      closeModify(data) {
        if (!data.length) {
          this.productModifyList = [];
          this.showProductDialog = false;
          return
        };
        const currrentProduct = data[0]
        let obj = _.mapObject(currrentProduct, v => Number(v.value) || v.value)
        if (this.$validateForm(obj, this.$db.logistic.dbProductInfo)) {
          return false;
        }
      },
      closeModifyNext(data){
        if (!data.length) {
          this.productModifyList = [];
          this.showProductDialog = false;
          return
        };
        const currrentProduct = data[0]
        this.$set(this.productList, this.modefiyProductIndex, currrentProduct)
        this.productList.forEach(item => {
          this.$set(item.fieldDisplay, 'value', null);
        })
        this.modefiyProductIndexArr.forEach((item) => {
          let fieldDisplayObj = {};
          _.mapObject(data[0],(v,k)=>{
            if(v._isModified&&v.key!='skuPictures'){
              fieldDisplayObj[v.key] = v.value;
            }
          })
          this.$set(this.productList[item].fieldDisplay,'value',fieldDisplayObj);
        })
        const id = currrentProduct.id.value
        const vId = +new Date();
        const index = this.modifyProductArray.indexOf(this.modifyProductArray.find(a => a.id === (id || vId)))
        index === -1 ? this.modifyProductArray.push(this.restoreObj(currrentProduct)) : (this.modifyProductArray[index] =
          this.restoreObj(currrentProduct))
      },
      switchEdit(arg) {
        switch (arg) {
          case 'edit':
            this.edit = !this.edit;
            break;
          case 'DeliveredEdit':
            this.deliveredEdit = true;
            break;
          case 'DeliveredEditExit':
            this.deliveredEdit = false;
            break;
          case 'confirm':
          case 'read':
            this.conformPlan();
            break;
          case 'cancel':
            this.$confirm(this.$i.logistic.isConfirmPeration, this.$i.logistic.tips, {
              confirmButtonText: this.$i.logistic.confirm,
              cancelButtonText: this.$i.logistic.cancel,
              type: 'warning'
            }).then(() => {
              this.cancelPlan();
            })
            break;
          case 'copy':
            this.copyPlan();
            break;
          case 'placeLogisticsPlan':
            this.$router.push('/logistic/placeLogisticPlan');
            break;
          case 'cancelLoadingList':
            this.$confirm(this.$i.logistic.isConfirmPeration, this.$i.logistic.tips, {
              confirmButtonText: this.$i.logistic.confirm,
              cancelButtonText: this.$i.logistic.cancel,
              type: 'warning'
            }).then(() => {
              this.cancelLoadingList();
            })
            break;
          case 'download':
            this.download();
            break;
          default:
            break;
        }
      },
      conformPlan() {
        let url = this.$route.name == 'loadingListDetail' ? 'logistics_order_confirm' : 'logistics_plan_confirm';
        this.$ajax.post(this.$apis[url], {
          id: this.planId
        }).then(res => {
          this.getDetails();
        })
      },
      cancelPlan() {
        this.$ajax.post(this.$apis.logistics_plan_cancel, {
          id: this.planId
        }).then(res => {
          this.$message({
            message: this.$i.logistic.operationSuccess,
            type: 'success',
            duration: 3000,
            onClose: () => {
              this.$router.push('/logistic/' + (this.pageTypeCurr == "loadingListDetail" ? 'loadingList' : (this.pageTypeCurr == "logisticDraftDetail" ? 'draft' : '')));
            }
          })
        })
      },
      copyPlan() {
        this.$windowOpen({url:'/logistic/placeLogisticPlan',params:{id:this.planId,copy:'copy'}})
      },
      cancelLoadingList() {
        this.$ajax.post(this.$apis.logistics_order_cancelByIds, {
          ids: [this.planId]
        }).then(res => {
          this.$message({
            message: this.$i.logistic.jumping,
            type: 'success',
            duration: 3000,
            onClose: () => {
              this.$router.push('/logistic/' + (this.pageTypeCurr == "loadingListDetail" ? 'loadingList' : ''));
            }
          })
        })
      },
      toExit() {
        if (this.pageTypeCurr == 'placeLogisticPlan'||this.pageTypeCurr == 'logisticDraftDetail') {
          if (this.isCopy) {
            this.$router.push('/logistic/plan')
          } else {
            this.$router.go(-1)
          }
        } else {
          this.edit = !this.edit
          this.createdPlanData()
          this.createdPaymentData()
        }
      },
      download(){
        let code;
        if(this.pageTypeCurr=="loadingListDetail"){
          code = 'LOGISTICS_ORDER';         
        }else{
          code = 'LOGISTICS_PLAN';
        }
        this.$fetch.export_task(code,{ids:[this.planId],planStatus:this.planStatus})
      },
      restoreObj(obj) {
        return _.mapObject(obj, v => (v = v.value))
      },
      restoreArr(arr) {
        return arr.map(a => {
          return _.mapObject(a, v => (v = v.value))
          // const obj = {}
          // _.mapObject(a, (value, key) => {
          //   obj[key] = value.value
          // })
          // return obj
        })
      },
      hightLightModifyFun(v, name) {
        this.hightLightObj[name] = v;
        let obj = {};
        _.mapObject(this.hightLightObj, (v, k) => {
          Object.assign(obj, v);
        })
        this.oldPlanObject.fieldDisplay = obj;
      },
      ContainerInfoLight(data){
        this.oldPlanObject.containerDetail = data;
      },
      sendData(keyString) {
        let url = this.configUrl[this.pageName][keyString].api;
        this.basicInfoArr.forEach(a => {
          this.$set(this.basicInfoObj, a.key, a.value);
        })

        this.transportInfoArr.forEach(a => {
          this.$set(this.transportInfoObj, a.key, a.value)
        })

        this.oldPlanObject.containerDetail =  this.oldPlanObject.containerDetail&&this.$depthClone(this.oldPlanObject.containerDetail).map(el=>{
          if(!el.isModify&&'fieldDisplay' in el){
            el.fieldDisplay = {};
          }
          return el;
        });

        this.basicInfoObj.remark = this.remark
        _.mapObject(this.basicInfoObj, (value, key) => {
          this.oldPlanObject[key] = value
        })
        _.mapObject(this.transportInfoObj, (value, key) => {
          this.oldPlanObject[key] = value
        })
        this.oldPlanObject.attachment = this.$refs.attachment.getFiles();
        this.oldPlanObject.fee = this.feeList && this.feeList.length > 0 ? this.sendfee : null;
        // this.oldPlanObject.product = this.modifyProductArray 原版;
        this.oldPlanObject.currencyExchangeRate = _.map(this.$depthClone(this.ExchangeRateInfoArr), (item) => {
          item['price'] = item['value'];
          delete item['value'];
          delete item['key'];
          delete item['label'];
          return item;
        });
        this.oldPlanObject.rmProduct = this.removeProductList.map(a => {
          const obj = {}
          _.mapObject(a, (value, key) => {
            obj[key] = value.value
          })
          return obj
        })
        // this.oldPlanObject.product = this.restoreArr(this.removeProductList)
        this.oldPlanObject.product = this.productList.map((item, i) => {
          return _.mapObject(item, (v, k) => {
            if (v.typeSlef == 'text') {
              return v.value;
            } else {
              return null;
            }
          })
        });
        let obj = null;
        if (this.isCopy) {
          this.oldPlanObject.planNo = this.logisticsNo;
          obj = this.restIdNull(this.oldPlanObject, ['id', 'unId']);
          obj.product.forEach(item => {
            this.$set(item, 'fieldDisplay', null);
          })
        }
        if (this.isParams) {
          this.oldPlanObject.fieldDisplay = null;
        }
        if (this.$validateForm(obj || this.oldPlanObject, this.$db.logistic.basicInfoObj)) {
          return;
        }
        if (this.$validateForm(obj || this.oldPlanObject, this.$db.logistic.transportInfoObj)) {
          return;
        }
        if(this.oldPlanObject.containerDetail&&this.oldPlanObject.containerDetail.map(el => {
          return this.$validateForm(el, this.$db.logistic.dbcontainerInfo);
        }).some(el=> el)){
          return
        }
        this.$ajax.post(url, obj || this.oldPlanObject).then(res => {
          this.$message({
            message: this.$i.logistic.jumping,
            type: 'success',
            duration: 3000,
            onClose: () => {
              this.$router.push('/logistic' + this.configUrl[this.pageName][keyString].path);
            }
          })
        })
      },
      //递归重置 copy
      //arg 传入的对象
      //restArr 要重置字段集合数组
      restIdNull(arg, restArr) {
        restArr = restArr || [];
        let args = _.omit(arg, ...restArr);
        return _.mapObject(args, (v, k) => {
          if (Array.isArray(v)) {
            return _.map(v, (val, key) => {
              if (typeof val == 'object') {
                return _.omit(val, ...restArr);
              } else {
                return val
              }
            })
          } else {
            return v;
          }
        })
      },
      formListSelectChange(v) {
        this.$set(this.oldPlanObject, 'currency', v);
      }
    },
    watch:{
      containerinfoMatch:{
        handler: function (val) {
          val.forEach(el=>{
            this.productList = this.productList.map(item=>{
              if(el.id==item.containerId.value){
                item.containerType.value = el.containerType;
              }
              return item
            })
          })
        },
        deep: true
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
      color: #666;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      padding: 0 15px;
    }
    .hd {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      padding: 0 15px;
      font-weight: bold;
      &.active {
        border: none;
      }
    }
    .input-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      span {
        width: 180px;
        display: inline-block;
        font-size: 12px;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
      }
    }
    .product-header {
      margin-bottom: 20px;
    }
    /deep/.definedStyleClass textarea {
      background:yellow;
    }
  }
</style>
