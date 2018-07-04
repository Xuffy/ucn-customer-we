<template>
  <div class="create-qc" v-loading="loadingData">
    <div class="title">
      <span>{{$i.warehouse.createQcOrder}}</span>
    </div>
    <div class="second-title">
      {{$i.warehouse.basicInfo}}
    </div>
    <div>
      <el-form label-width="190px">
        <el-row class="speZone">
          <el-col v-for="v in $db.warehouse.qcOrderDetailBasicInfo" :key="v.key" class="speCol" :xs="24"
                  :sm="v.fullLine?24:12" :md="v.fullLine?24:12" :lg="v.fullLine?24:8" :xl="v.fullLine?24:8">
            <el-form-item :label="$i.warehouse[v.key]"
                          :required="v.isServiceName?true:(v._rules?v._rules.required:false)">
              <div v-if="v.type==='input'">
                <el-input
                  :disabled="v.isSysGen || v.isServiceFill"
                  :placeholder="v.isSysGen?$i.warehouse.systemGeneration:(v.isServiceFill?$i.warehouse.serviceFill:$i.warehouse.pleaseInput)"
                  v-model="qcOrderConfig[v.key]">
                </el-input>
              </div>
              <div v-else-if="v.type==='select'">
                <div v-if="v.isQcStatus">
                  <el-select
                    class="speInput"
                    v-model="qcStatusCode"
                    :disabled="true">
                    <el-option
                      v-for="item in qcStatusOption"
                      :key="item.id"
                      :label="item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </div>
                <div v-else-if="v.isServiceName">
                  <el-select
                    clearable
                    class="speInput"
                    size="mini"
                    v-model="serviceId"
                    filterable
                    :placeholder="$i.warehouse.pleaseInputOrChoose"
                    :remote-method="remoteMethod"
                    :loading="loading">
                    <el-option
                      v-for="item in serviceList"
                      :key="item.companyId"
                      :label="item.name"
                      :value="item.companyId">
                    </el-option>
                  </el-select>
                </div>
                <div v-else>
                  <el-select
                    class="speInput"
                    v-model="qcOrderConfig[v.key]"
                    clearable
                    :disabled="v.isServiceFill"
                    :placeholder="v.isServiceFill?$i.warehouse.serviceFill:$i.warehouse.pleaseChoose">
                    <div v-if="v.isQcType">
                      <el-option
                        v-for="item in qcTypeOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                    </div>
                    <!--<div v-else-if="v.isQcStatus">-->
                    <!--<el-option-->
                    <!--v-for="item in qcStatusOption"-->
                    <!--:key="item.id"-->
                    <!--:label="item.name"-->
                    <!--:value="item.code">-->
                    <!--</el-option>-->
                    <!--</div>-->
                    <div v-else-if="v.isQcMethod">
                      <el-option
                        v-for="item in qcMethodOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                    </div>
                    <div v-else-if="v.isSurveyor">
                      <el-option
                        v-for="item in surveyorOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                    </div>
                    <div v-else-if="v.isCurrency">
                      <el-option
                        v-for="item in currencyOptions"
                        :key="item.id"
                        :label="item.code"
                        :value="item.code">
                      </el-option>
                    </div>
                  </el-select>
                </div>
              </div>
              <div v-else-if="v.type==='date'">
                <el-date-picker
                  class="speInput"
                  v-model="qcOrderConfig[v.key]"
                  align="right"
                  type="date"
                  :disabled="v.isServiceFill"
                  :placeholder="v.isServiceFill?$i.warehouse.serviceFill:$i.warehouse.pleaseChoose"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </div>
              <div v-else-if="v.type==='number'">
                <el-input-number
                  :controls="false"
                  v-model="qcOrderConfig[v.key]"
                  :disabled="v.isServiceFill"
                  class="speInput speNumber"></el-input-number>
              </div>
              <div v-else-if="v.type==='textarea'">
                <el-input

                  type="textarea"
                  :autosize="{ minRows: 2}"
                  :placeholder="$i.warehouse.pleaseInput"
                  v-model="qcOrderConfig[v.key]">
                </el-input>
              </div>
              <div v-else-if="v.type==='attachment'">
                <v-upload :limit="20" ref="upload"></v-upload>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="second-title">
      {{$i.warehouse.productInfo}}
    </div>
    <div class="product-info">
      <div class="btns">
        <el-button type="primary" @click="addProduct">{{$i.warehouse.addProduct}}</el-button>
        <el-button type="danger" :disabled="disableRemoveProduct" @click="removeProduct">{{$i.warehouse.remove}}
        </el-button>
      </div>

      <el-table
        v-loading="loadingProductTable"
        class="product-table"
        :data="productTableData"
        border
        show-summary
        @selection-change="handleProductTableChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          align="center"
          class="table-checkbox"
          width="55">
        </el-table-column>
        <el-table-column
          v-for="v in $db.warehouse.createQcProductTable"
          :key="v.key"
          :label="v.key"
          align="center"
          width="180">
          <template slot-scope="scope">
            <div v-if="v.showType==='qc'">
              {{v.value}}
            </div>
            <div v-else-if="v.fromService"></div>
            <div v-else-if="v.showType==='number'">
              <el-input-number
                v-model="scope.row[v.key]"
                :min="0"
                :controls="false"
                label="please input"></el-input-number>
            </div>
            <div v-else-if="v.showType==='input'">
              <el-input
                placeholder="please input"
                v-model="scope.row[v.key]"
                clearable>
              </el-input>
            </div>
            <div v-else-if="v.showType==='date'">
              {{scope.row[v.key]?$dateFormat(scope.row[v.key],'yyyy-mm-dd'):''}}
            </div>
            <div v-else>
              {{scope.row[v.key]}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          label="Action"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">Detail</el-button>
          </template>
        </el-table-column>
      </el-table>


    </div>

    <div class="summary">
      <div class="second-title">
        {{$i.warehouse.summary}}
      </div>
      <el-form label-width="280px">
        <el-row class="speZone">
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.cartonOfQualifiedProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.quantityOfQualifiedProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.volumeOfQualifiedProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.netWeightOfQualifiedProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.grossWeightOfQualifiedProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.quantityOfSubQualityProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.cartonOfSubQualityProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.netWeightOfSubQualityProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.volumeOfSubQualityProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.grossWeightOfSubQualityProducts">
              <el-input
                class="speInput"
                size="mini"
                v-model="value"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item :label="$i.warehouse.skuQuantity">
              <el-input
                class="summaryInput"
                size="mini"
                v-model="summaryData.skuQuantity"
                :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="footBtn">
      <el-button @click="submit" :loading="disableClickSubmit" :disabled="disableSubmit" type="primary">
        {{$i.warehouse.submit}}
      </el-button>
      <el-button @click="cancel" type="danger">{{$i.warehouse.cancel}}</el-button>
    </div>

    <el-dialog width="70%" :title="$i.warehouse.addProduct" :visible.sync="productDialogVisible"
               custom-class="ucn-dialog-center">
      <el-form ref="qcOrder" :model="productDialogConfig" label-width="120px">
        <el-row class="speZone">
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item prop="orderNo" label="Order No">
              <el-input
                class="dialogInput"
                size="mini"
                placeholder="please input"
                v-model="productDialogConfig.orderNo">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item prop="skuCode" label="SKU Code">
              <el-input
                class="dialogInput"
                size="mini"
                placeholder="please input"
                v-model="productDialogConfig.skuCode">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item prop="skuBarCode" label="SKU Bar Code">
              <el-input
                class="dialogInput"
                size="mini"
                placeholder="please input"
                v-model="productDialogConfig.skuBarCode">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="speCol" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-form-item prop="skuNameEn" label="SKU Name EN">
              <el-input
                class="dialogInput"
                size="mini"
                placeholder="please input"
                v-model="productDialogConfig.skuNameEn">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="btn-group">
        <el-button type="primary" @click="search" :loading="loadingProductDialogTable"
                   :disabled="loadingProductDialogTable">Search
        </el-button>
        <el-button @click="clear" :disabled="loadingProductDialogTable">Clear</el-button>
      </div>
      <v-table
        code="uwarehouse_qc_order_detail"
        v-loading="loadingProductDialogTable"
        :data="productDialogTableData"
        :buttons="[{label: 'Detail', type: 1}]"
        @action="btnClick"
        @change-checked="changeProductDialogChecked"></v-table>
      <!--<page-->
      <!--@size-change="changeSize"-->
      <!--@change="changePage"-->
      <!--:page-sizes="[50,100,200,500]"-->
      <!--:page-data="pageData"></page>-->

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :disabled="loadingProductDialogTable" @click="postProduct">OK</el-button>
        <el-button :disabled="loadingProductDialogTable" @click="productDialogVisible = false">Cancel</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

  import {VTimeZone, VPagination, VUpload, VTable} from '@/components/index'

  export default {
    name: 'createQc',
    components: {
      VTable,
      VTimeZone,
      page: VPagination,
      VUpload
    },
    data() {
      return {
        value: '',
        options: [],
        pageData: {},
        tableDataList: [],
        loadingTable: false,
        /**
         * service provider数据处理
         * */
        serviceId: '',
        serviceList: [],         //用于展现的数组
        serviceMainList: [],     //用于存储总数据的数组
        loading: false,
        /**
         * 页面基本配置
         * */
        loadingData: false,
        disableRemoveProduct: true,
        disableClickSubmit: false,
        loadingProductTable: false,
        disableSubmit: false,
        serviceDialogVisible: false,
        radio: '',
        currencyOptions: [],
        qcStatusCode: 'WAITING_QC',
        qcStatusOption: [],
        selectProductTableData: [],      //页面上选中的table data
        productTableData: [],
        productConfig: {
          ids: [],
          pn: 1,
          ps: 50,
          orderNo: '',
          // sorts: [
          //     {
          //         orderBy: "",
          //         orderType: "",
          //     }
          // ],
        },
        qcOrderConfig: {
          attachments: [],
          exchangeCurrencyDictCode: 'CNY',
          exchangeCurrencyDictId: '',
          factoryAddress: "",
          factoryContactPhone: "",
          qcOrderDetailCreateParams: [
            // {
            //     expectQcQty: 0,
            //     inboundSkuId: 0,
            //     samplingRate: "",
            //     unqualifiedProcessingMode: ""
            // }
          ],
          remark: "",
          serviceName: "",
          serviceProviderId: 0,
          serviceProviderNo: "",

        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() + 3600 * 1000 * 24 < Date.now();
          },
        },

        /**
         * 弹出框配置
         * */
        dialogRules: {
          orderNo: [
            {
              required: true
            }
          ]
        },
        loadingProductDialogTable: false,
        productDialogTableData: [],
        selectProductList: [],
        productDialogVisible: false,
        productDialogConfig: {
          ids: [],
          orderNo: "",
          pn: 1,
          ps: 200,
          skuBarCode: "",
          skuCode: "",
          skuNameEn: "",
          // sorts: [
          //     {
          //         orderBy: "",
          //         orderType: "",
          //     }
          // ],
        },
        qcOrderBasic: {},

        /**
         * 总计data
         * */
        summaryData: {
          skuQuantity: ''
        },


        /**
         * 字典数据
         * */
        qcTypeOption: [],
        qcMethodOption: [],
        surveyorOption: [],
        qcResultOption: [],
        barCodeResult: [],
        skuUnitOption: [],       //计量单位
        lengthOption: [],
        volumeOption: [],
        weightOption: [],
      }
    },
    methods: {
      changeChecked() {

      },
      submit() {
        if (this.$validateForm(this.qcOrderConfig, this.$db.warehouse.qcOrderDetailBasicInfo)) {
          return;
        }
        if (!this.serviceId) {
          return this.$message({
            message: this.$i.warehouse.pleaseChooseService,
            type: 'warning'
          });
        }
        this.serviceMainList.forEach(v => {
          if (v.companyId === this.serviceId) {
            this.qcOrderConfig.serviceName = v.name;
            this.qcOrderConfig.serviceProviderId = v.companyId;
            this.qcOrderConfig.serviceProviderNo = v.code;
          }
        });
        this.currencyOptions.forEach(v => {
          if (v.id === this.qcOrderConfig.exchangeCurrencyDictId) {
            this.qcOrderConfig.exchangeCurrencyDictCode = v.code;
          }
        });
        this.qcOrderConfig.qcOrderDetailCreateParams = [];

        if (_.isEmpty(this.productTableData)) {
          return this.$message({
            message: this.$i.warehouse.pleaseAddProduct,
            type: 'warning'
          });
        }

        this.productTableData.forEach(v => {
          if (v.id !== 0) {
            this.qcOrderConfig.qcOrderDetailCreateParams.push({
              expectQcQty: v.expectQcQty ? v.expectQcQty : 0,
              inboundSkuId: v.id,
              samplingRate: v.samplingRate,
              unqualifiedProcessingMode: v.unqualifiedProcessingMode
            });
          }
        });
        this.qcOrderConfig.attachments = this.$refs.upload[0].getFiles();

        this.disableClickSubmit = true;
        this.$ajax.post(this.$apis.add_buyerQcOrder, this.qcOrderConfig).then(res => {
          this.$message({
            message: this.$i.warehouse.createSuccess,
            type: 'success'
          });
          this.$router.push('/warehouse/qcOverview');
          this.disableClickSubmit = false;
        }).catch(err => {
          this.disableClickSubmit = false;
        });
      },

      cancel() {
        window.close();
      },

      /**
       * 选择服务商的方法
       * */
      getService(name) {
        this.serviceList = [];
        this.serviceMainList = [];
        this.disableSubmit = true;
        if (!name) {
          name = '';
        }
        this.$ajax.get(`${this.$apis.get_supplyProviders}?name=${name}`).then(res => {
          res.forEach(v => {
            this.serviceList.push(v);
          });
          this.$ajax.get(`${this.$apis.get_serviceProviders}?name=${name}`).then(res => {
            res.forEach(v => {
              this.serviceList.push(v);
            });
            this.serviceMainList = this.$copyArr(this.serviceList);
            this.disableSubmit = false;
          }).catch(err => {
            this.disableSubmit = false;
          });
        }).catch(err => {
          this.disableSubmit = false;
        });
      },
      remoteMethod(query) {
        if (query !== '') {
          this.serviceList = this.serviceMainList.filter(item => {
            return item.name.indexOf(query) > -1;
          });
        } else {
          this.serviceList = this.$copyArr(this.serviceMainList);
        }
      },

      /**
       * 弹出框事件
       * */
      search() {
        this.$refs.qcOrder.validate((valid) => {
          if (valid) {
            this.loadingProductDialogTable = true;
            this.$ajax.post(this.$apis.get_qcProductData, this.productDialogConfig).then(res => {
              this.productDialogTableData = this.$getDB(this.$db.warehouse.createQcProductDialog, res, e => {
                if (!e.canCreateQc.value) {
                  this.$set(e, '_disabled', true);
                }
              });
              this.pageData = res;
              this.productTableData.forEach(v => {
                this.productDialogTableData.forEach(m => {
                  if (v.id === m.id.value) {
                    this.$set(m, '_checked', true);
                    this.$set(m, '_disabled', true);
                  }
                })
              });
              this.productDialogTableData.forEach(v => {
                if (v.id.value === 0) {
                  this.$set(v, '_disabled', true);
                }
              });
              this.loadingProductDialogTable = false;
              this.selectProductList = [];
            }).catch(err => {
              this.loadingProductDialogTable = false;
            });
          }
        });
      },
      clear() {
        this.productDialogConfig.orderNo = '';
        this.productDialogConfig.skuBarCode = '';
        this.productDialogConfig.skuCode = '';
        this.productDialogConfig.skuNameEn = '';
      },
      changeProductDialogChecked(e) {
        this.selectProductList = e;
      },
      btnClick(e) {
        this.$windowOpen({
          url: '/product/sourcingDetail',
          params: {
            id: e.skuId.value
          }
        })
      },
      postProduct() {
        this.productConfig.ids = [];

        _.map(this.selectProductList, v => {
          this.productConfig.ids.push(v.id.value);
        });

        this.productDialogVisible = false;
        if (this.productConfig.ids.length !== 0) {
          this.productConfig.orderNo = this.productDialogTableData[0].orderNo.value;
          this.loadingProductTable = true;
          this.$ajax.post(this.$apis.get_qcProductData, this.productConfig).then(res => {
            this.loadingProductTable = false;
            _.map(res, v => {
              if (v.id !== 0) {
                let suo = _.findWhere(this.skuUnitOption, {code: v.skuUnitDictCode}) || {}
                  , vo = _.findWhere(this.volumeOption, {code: v.volumeUnitDictCode}) || {}
                  , wo = _.findWhere(this.weightOption, {code: v.weightUnitDictCode}) || {}
                  , lo = _.findWhere(this.lengthOption, {code: v.lengthUnitDictCode}) || {};
                v.skuUnitDictCode = suo.name || '';
                v.volumeUnitDictCode = vo.name||'';
                v.weightUnitDictCode = wo.name || '';
                v.lengthUnitDictCode = lo.name || '';
                this.productTableData.push(v);
              }
            });
          }).catch(err => this.loadingProductTable = false)
        }
      },

      /**
       * 页面操作事件
       * */
      addProduct() {
        this.productDialogTableData = [];
        this.productDialogVisible = true;
        // this.loadingProductDialogTable=true;
        // this.$ajax.post(this.$apis.get_qcProductData,this.productDialogConfig).then(res=>{
        //     this.productDialogTableData = this.$getDB(this.$db.warehouse.createQcProductDialog, res);
        //     this.productTableData.forEach(v=>{
        //         this.productDialogTableData.forEach(m=>{
        //             if(v.id===m.id.value){
        //                 this.$set(m,'_checked',true);
        //                 this.$set(m,'_disabled',true);
        //             }
        //         })
        //     });
        //     this.productDialogTableData.forEach(v=>{
        //         if(v.id.value===0){
        //             this.$set(v,'_disabled',true);
        //         }
        //     });
        //     console.log(this.productDialogTableData,'this.productDialogTableData')
        //     this.loadingProductDialogTable=false;
        // }).catch(err=>{
        //     this.loadingProductDialogTable=false;
        // });
      },
      removeProduct() {
        this.$confirm('Sure Delete?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.productTableData = _.difference(this.productTableData, this.selectProductTableData);
          this.selectProductTableData = [];
          this.$message({
            type: 'success',
            message: 'Delete Success!'
          });
        }).catch(() => {

        });
      },
      handleProductTableChange(e) {
        this.selectProductTableData = e;
      },
      handleClick(e) {
        this.$windowOpen({
          url: '/product/sourcingDetail',
          params: {
            id: e.skuId
          }
        });
      },

      /**
       * 分页操作
       * */
      changePage(e) {
        console.log(e)
      },
      changeSize(e) {
        // this.warehouseConfig.ps=e;
        // this.getWarehouseData();
      },

      /**
       * 获取单位
       * */
      getUnit() {
        this.loadingData = true;
        this.$ajax.post(this.$apis.get_partUnit, ['QC_TYPE', 'QC_MD', 'SKU_QC_RS', 'PB_CODE', 'QC_STATUS', 'SKU_UNIT', 'LH_UNIT', 'VE_UNIT', 'WT_UNIT'], {cache: true}).then(res => {
          res.forEach(v => {
            if (v.code === 'QC_TYPE') {
              this.qcTypeOption = v.codes;
            } else if (v.code === 'QC_MD') {
              this.qcMethodOption = v.codes;
            } else if (v.code === 'SKU_QC_RS') {
              v.codes = _.filter(v.codes, e => {
                return e.code !== 'WAIT_FOR_QC' && e.code !== 'CONFIRMED';
              });
              this.qcResultOption = v.codes;
            } else if (v.code === 'PB_CODE') {
              this.barCodeResult = v.codes;
            } else if (v.code === 'QC_STATUS') {
              this.qcStatusOption = v.codes;
            } else if (v.code === 'SKU_UNIT') {
              this.skuUnitOption = v.codes;
            } else if (v.code === 'LH_UNIT') {
              this.lengthOption = v.codes;
            } else if (v.code === 'VE_UNIT') {
              this.volumeOption = v.codes;
            } else if (v.code === 'WT_UNIT') {
              this.weightOption = v.codes;
            }
          })
        }).finally(() => {
          this.loadingData = false;
        });


        this.$ajax.get(this.$apis.get_currencyUnit, {}, {cache: true}).then(res => {
          this.currencyOptions = res;
          this.loadingData = false;
        }).catch(err => {
          this.loadingData = false;
        });

      },
    },
    created() {
      this.getService();
      this.getUnit();
      if (this.$route.query.ids) {
        this.productConfig.orderNo = this.$route.query.orderNo;
        this.productConfig.ids = this.$route.query.ids.split(',');
        this.loadingProductTable = true;
        this.$ajax.post(this.$apis.get_qcProductData, this.productConfig).then(res => {
          console.log(res)
          res.forEach(v => {
            if (v.id !== 0) {
              this.productTableData.push(v);
            }
          });
        }).finally(err => {
          this.loadingProductTable = false;
        })
      }
    },
    mounted() {
      this.loadingData = true;
    },
    watch: {
      selectProductTableData(n) {
        if (n.length > 0) {
          this.disableRemoveProduct = false;
        } else {
          this.disableRemoveProduct = true;
        }
      },
      productDialogVisible(n) {
        if (!n) {
          this.clear();
          setTimeout(() => {
            this.$refs.qcOrder.clearValidate();
          }, 0);

        }
      },
      productTableData(n) {
        if (n.length > 0) {
          let diffData = [];
          n.forEach(v => {
            diffData.push(v.skuId + v.orderNo);
          });
          this.summaryData.skuQuantity = _.uniq(diffData).length;
        }
      },
    },
  }
</script>
<style scoped>
  .title {
    font-weight: bold;
    font-size: 18px;
    height: 32px;
    line-height: 32px;
    color: #666666;
  }

  .second-title {
    font-size: 16px;
    color: #999999;
    padding: 10px 0;
  }

  .speCol {
    min-height: 51px;
  }

  .speInput {
    width: 80%;
  }

  .radios {
    margin-bottom: 10px;
  }

  .btn-group {
    text-align: center;
  }

  .dialogInput {
    width: 100%;
  }

  .dialog-footer {
    text-align: center;
  }

  .footBtn {
    border-top: 1px solid #e0e0e0;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: left;
    z-index: 5;
  }

  .speInput {
    width: 100%;
  }

  .speTimezone {
    max-width: 1000px !important;
    width: 80%;
  }

  .speTimezone > > > .el-select {
    display: block;
  }

  .product-table {
    margin-top: 10px;
  }

  .product-table > > > .el-checkbox {
    margin: 0;
  }

  .summary {
    margin-top: 50px;
  }

  .summaryInput {
    width: 80%;
  }

  .summaryInput > > > input {
    text-align: center;
  }
</style>
