<template>
  <div class="create-inquiry">
    <h3 class="hd">{{ showInquiryNo ? `${$i.inquiry.inquiryNo}${fromArg.inquiryNo}` : $i.common.createInquiry }}</h3>
    <div class="select-wrap">
      <h4 class="content-hd">{{ $i.inquiry.basicInfo }}</h4>
      <el-form ref="ruleform" :model="fromArg">
        <el-row :gutter="10">
          <el-col
            v-for="(item, index) in $db.inquiry.basicInfo"
            :key="index"
            :xs="item.xs || 8"
            :sm="item.sm || 8"
            :md="item.md || 8"
            :lg="item.lg || 8"
            v-if="!item._inquiryHide && !item._hide">
            <el-form-item
              :label="item.label"
              :prop="item.key"
              :rules="item.rules"
              :label-width="item.width || '150px'">
              <el-input
                v-model="fromArg[item.key]"
                :size="item.size || 'mini'"
                :placeholder="item.placeholder"
                v-if="item.type === 'String' && !item._hide && item.types !== 'textarea'"
                :disabled="item.disabled"/>
              <el-select
                v-model="fromArg[item.key]"
                value-key="id"
                :size="item.size || 'mini'"
                :placeholder="item.placeholder"
                v-if="item.key === 'destinationCountry' || item.key === 'departureCountry'"
                style="width:100%;">
                <el-option
                  v-for="items in selectAll[item.key]"
                  :key="items.id"
                  :label="items.name"
                  :value="items.code"
                  :id="items.id"/>
              </el-select>

              <el-select
                v-model="fromArg[item.key]"
                value-key="id"
                :size="item.size || 'mini'"
                :placeholder="item.placeholder"
                v-if="item.type === 'Select' && item.key !== 'destinationCountry' && item.key != 'departureCountry'"
                style="width:100%;">
                <el-option
                  v-for="items in selectAll[item.key]"
                  :key="items.id"
                  :label="items.name"
                  :value="items.code"
                  :id="items.id"/>
              </el-select>
              <el-select
                style="width:100%;"
                v-if="item.type === 'manySelect'"
                v-model="fromArg.suppliers"
                multiple
                filterable
                remote
                reserve-keyword
                value-key="id"
                :size="item.size || 'mini'"
                :placeholder="$i.common.pleaseEnterTheKeyWords"
                :remote-method="remoteMethod"
                :loading="loading">
                <el-option
                  v-for="items in selectAll[item.key]"
                  :key="items.id"
                  :label="items.name"
                  :value="items"
                  :id="items.id"/>
              </el-select>
              <el-input
                type="textarea"
                v-model="fromArg[item.key]"
                :rows="item.rows || 4"
                :size="item.size || 'mini'"
                :placeholder="item.placeholder"
                v-if="item.types === 'textarea'"
                resize="none"
                :disabled="item.disabled"/>
              <span v-if="item.type === 'Number'" style="display:flxe;">
                <el-input-number v-model="fromArg[item.key]" :min="0" :max="100"
                    controls-position="right" size="mini" :controls="false"
                    style="width:100%; padding-right:10px;"/>
                <i style="position:absolute; right:5px; top:50%;transform: translate(0, -50%); font-size:12px;">%</i>
              </span>
              <v-upload v-if="item.type === 'attachment' || item.type === 'upData'" :list="fromArg[item.key]" ref="UPLOAD"></v-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <h4 class="content-hd">{{ $i.common.productInfo }}</h4>
    <div class="status">
      <div class="btn-wrap">
        <el-button @click="addProduct">{{ $i.common.addProduct }}</el-button>
        <el-button type="danger" :disabled="checkedAll.length <= 0" @click="removeList">{{
          `${$i.common.remove}(${checkedAll.length})` }}
        </el-button>
      </div>
      <!-- <select-search :options="[]" @inputEnter="inputEnter" /> -->
    </div>
    <v-table
      :data.sync="tabData"
      :buttons="productInfoBtn"
      :loading="tableLoad"
      :height="450"
      @action="producInfoAction"
      @change-checked="changeChecked"
      :parId="'skuId'"
      :rowspan="2"
      :hideFilterColumn="true"/>
    <div class="bom-btn-wrap">
      <el-button @click="submitForm()">{{ $i.common.submit }}</el-button>
      <el-button @click="submitForm('draft')">{{ $i.common.saveAsDraft }}</el-button>
    </div>
    <div class="bom-btn-wrap-station"></div>
    <el-dialog
      title="Add Product"
      :visible.sync="dialogTableVisible"
      width="80%"
      lock-scroll>
      <el-radio-group v-model="radio" @change="fromChange">
        <el-radio-button label="product">{{$i.common.fromNewSearch}}</el-radio-button>
        <el-radio-button label="bookmark">{{$i.common.FromMyBookmark}}</el-radio-button>
      </el-radio-group>
      <v-product
        :hideBtns="true"
        :hideBtn="true"
        :disabledLine="disabledLine"
        @handleOK="getList"
        @handleCancel="handleCancel"
        :forceUpdateNumber="trig"
        :type="radio"
        :isInquiry="true"></v-product>
    </el-dialog>
    <v-history-modify @save="save" ref="HM"/>
  </div>
</template>
<script>
import {selectSearch, VTable, VUpload, VHistoryModify} from '@/components/index';
import product from '@/views/product/addProduct';
import {mapActions} from 'vuex';

export default {
  name: 'createInquiry',
  data() {
    return {
      showInquiryNo: false,
      disabledLine: [],
      checkedAll: [],
      trig: 0,
      tableLoad: false,
      selectAll: {
        paymentMethod: [],
        transport: [],
        incoterm: [],
        currency: [],
        supplierName: [],
        exportLicense: [],
        destinationCountry: [],
        departureCountry: []
      },
      loading: false,
      fromArg: {
        paymentTerm: 0,
        timeZone: 1,
        inquiryAmount: 1,
        skuQty: 1
      },
      radio: 'product',   //Add Product status
      dialogTableVisible: false, //Add Product switch

      tabColumn: '', //tab top
      tabData: [], //tab Data
      textarea: ''
    }
  },
  components: {
    'select-search': selectSearch,
    'v-table': VTable,
    'v-product': product,
    VUpload,
    VHistoryModify
  },
  created() {
    this.getDictionaries();
    this.remoteMethod('');
    this.setDraft({name: 'negotiationDraft', params: {type: 'inquiry'}, show: true});
    this.setRecycleBin({name: 'negotiationRecycleBin', params: {type: 'inquiry'}, show: false});

    let query = this.$route.query, regex = (/^\d+(,\d+)?$/);
    if (query.id && !isNaN(query.id)) {
      this.getFefault(query.id);
      if (!query.from || query.from !== 'copy') {
        this.showInquiryNo = true;
      }
    } else if (query.skus && regex.test(query.skus)) {
      this.getList(query.skus.split(','));
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setDraft',
      'setRecycleBin'
    ]),
    getFefault(id) {
      this.$ajax.get(`${this.$apis.GET_INQIIRY_DETAIL}/{id}`, {id}).then(res => {
        res.exportLicense = res.exportLicense ? 1 : 0;
        if (res.suppliers && res.suppliers.length && _.isObject(res.suppliers)) {
          res.suppliers.forEach(items => {
            _.mapObject(items, (val, k) => {
              if (/^supplier/.test(k)) items[k.substring(8, k.length).toLowerCase()] = val;
            });
          });
        } else {
          res.suppliers = [];
        }
        if (!this.showInquiryNo) {
          delete res.id;
          delete res.orderNo;
          delete res.tenantId;
          delete res.companyId;
          delete res.inquiryNo;
          delete res.quotationNo;
        }
        this.fromArg = res;
        this.tabData = this.$getDB(this.$db.inquiry.productInfo, this.$refs.HM.getFilterData(res.details, 'skuId'), item => {
          this.$filterDic(item);
          _.map(item, val => {
            val.defaultData = _.isUndefined(val.dataBase) ? val.value : val.dataBase;
          });
        });
      });
    },
    handleCancel() {
      this.dialogTableVisible = false;
    },
    addProduct() {
      let arr = [];
      _.map(this.tabData, item => {
        if (!item._disabled) arr.push(item);
      });
      this.disabledLine = arr;
      this.trig = new Date().getTime();
      this.dialogTableVisible = true;
    },
    removeList() {
      let arr = [];
      _.map(this.tabData, (item, index) => {
        if (_.indexOf(_.pluck(_.pluck(this.checkedAll, 'skuId'), 'value'), Number(item.skuId.value)) !== -1) arr.push(item);
      });
      this.tabData = _.difference(this.tabData, arr);
      this.checkedAll = [];
    },
    inputEnter(val) {

    },
    save(data) { // modify 编辑完成反填数据
      let items = _.map(data, item => {
        _.map(item, (o, field) => {
          if (['fieldDisplay', 'status', 'entryDt', 'updateDt'].indexOf(field) > -1) {
            return;
          }
          if (typeof o.defaultData !== 'undefined' && o.value !== o.defaultData) {
            o._color = 'blue';
          }
        });
        return item;
      });
      this.tabData = _.map(this.tabData, oldItem => {
        let tmp = _.filter(items, item => _.findWhere(oldItem, {'key': 'skuId'}).value === _.findWhere(item, {'key': 'skuId'}).value && !!oldItem._remark === !!item._remark);
        return tmp[0] || oldItem;
      });
    },
    getDictionaries() {
      this.$ajax.post(this.$apis.POST_CODE_PART, ['PMT', 'ITM', 'EL_IS', 'MD_TN'], {cache: true})
        .then(res => {
          this.selectAll.paymentMethod = _.findWhere(res, {'code': 'PMT'}).codes;
          this.selectAll.transport = _.findWhere(res, {'code': 'MD_TN'}).codes;
          this.selectAll.incoterm = _.findWhere(res, {'code': 'ITM'}).codes;
          this.selectAll.exportLicense = _.map(_.findWhere(res, {'code': 'EL_IS'}).codes, item => {
            item.code = Number(item.code);
            return item;
          });
        });
      this.$ajax.get(this.$apis.GET_CURRENCY_ALL)
        .then(res => {
          this.selectAll.currency = res;
        });

      this.$ajax.get(this.$apis.GET_COUNTRY_ALL, '', {cache: true})
        .then(res => {
          this.selectAll.destinationCountry = res;
          this.selectAll.departureCountry = res;
        });

    },
    getProduct() {

    },
    fromChange(val) {
      this.trig = new Date().getTime();
    },
    submitForm(type) { // 提交
      let files = this.$refs.UPLOAD[0].getFiles();
      this.fromArg.draft = type && type === 'draft' ? 1 : 0;
      this.$refs.ruleform.validate((valid) => {
        if (!valid) {
          this.$message({message: this.$i.common.pleaseCompleteTheCompletion, type: 'warning'});
        }
      });
      let arr = [];
      _.map(this.fromArg.suppliers, item => {
        let json = {};
        _.mapObject(item, (val, k) => {
          if (!(/^supplier/).test(k)) json[`supplier${k.substring(0, 1).toUpperCase()}${k.substring(1, k.length)}`] = val;
        });
        arr.push(json);
      });
      let upData = _.clone(this.fromArg);
      if (arr.length) upData.suppliers = arr;
      upData.details = this.dataFilter(this.tabData);
      upData.attachment = files && files.length > 0 ? files.join(',') : null;

      this.$ajax.post(this.$apis.POST_INQUIRY_SAVE, this.$filterModify(upData)).then(() => {
        if (!this.fromArg.draft) {
          this.$router.push('/negotiation/inquiry')
        } else {
          this.$router.push({
            name: 'negotiationDraft',
            params: {
              type: 'inquiry'
            }
          });
        }
      });
    },
    dataFilter(data) {
      let excludeColumns = '$changedFields,$pageState,entryDt,updateDt,status';
      let arr = [], remark = {}, json = {};
      data.forEach(item => {
        remark = {};
        if (item._remark) {
          // 拼装remark 数据
          for (let field in item) {
            let value = item[field].value;
            if (value && value.length > 0) {
              remark[field] = value;
            }
          }
          json.fieldRemark = remark;
        } else {
          json = {};
          for (let k in item) {
            if (excludeColumns.indexOf(k) > -1) continue;
            if (k === 'fieldRemark') {
              json[k] = remark;
            } else if (k === 'fieldDisplay') {
              json[k] = {};
              if (item.$changedFields) {
                for (let f in item.$changedFields) {
                  if (item.$changedFields.hasOwnProperty(f)) {
                    json[k][f] = item.$changedFields[f];
                  }
                }
              }
            } else {
              if (item[k].dataType && item[k].dataType === 'boolean' && typeof item[k].value === 'string') {
                json[k] = item[k].value === '1' || item[k].value === 'true';
              } else {
                json[k] = item[k].value;
              }
            }
          }
          arr.push(json);
        }
      });
      return arr;
    },
    changeChecked(item) {
      this.checkedAll = item;
    },
    getList(ids) {
      this.$ajax.post(this.$apis.POST_INQUIRY_SKUS, ids)
        .then(res => {
          let arr = this.$getDB(this.$db.inquiry.productInfo, this.$refs.HM.getFilterData(res, 'skuId'), (item) => {
            this.$filterDic(item);
          });
          this.tabData = arr.concat(this.tabData);
          this.dialogTableVisible = false;
        });
    },
    productInfoBtn(item) { // Product info 按钮创建
      return [{label: this.$i.common.negotiate, type: 'modify'}, {label: this.$i.common.detail, type: 'detail'}];
    },
    fnBasicInfoHistoty(item, type) { // 查看历史记录
      let arr = [];
      _.map(this.tabData, o => {
        if (_.findWhere(o, {'key': 'skuId'}).value.toString() === item.skuId.value.toString() && !o._disabled) arr.push(o);
      });
      if (this.fromArg.quotationNo) {
        this.$ajax.get(this.$apis.GET_INQUIRY_SKU_HISTORY + `?quotationNo=${this.fromArg.quotationNo}&skuCode=${item.skuCode.value}`).then(res => {
          this.$refs.HM.init(arr, this.$getDB(this.$db.inquiry.productInfo, this.$refs.HM.getFilterData(res, 'skuCode')), type === 'modify');
        });
      } else if (type === 'modify') {
        this.$refs.HM.init(arr, [], true);
      }
    },
    producInfoAction(data, type) { // Produc info 按钮操作
      switch (type) {
        case 'histoty':
          this.fnBasicInfoHistoty(data, type);
          break;
        case 'modify':
          this.oSwitch = true;
          this.fnBasicInfoHistoty(data, type);
          break;
        case 'detail':
          this.$router.push({
            path: '/product/sourcingDetail',
            query: {
              id: data.skuId.value
            }
          });
          break;
      }
    },
    remoteMethod(keyWord) {
      this.$ajax.get(`${this.$apis.PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME}?name=${keyWord}`).then(res => {
        this.selectAll.supplierName = res;

        let suppliers = [];
        let query = this.$route.query, regex = (/^\d+(,\d+)?$/);
        if (query.supplierCompanies && regex.test(query.supplierCompanies)) {
          let supplierCompanies = query.supplierCompanies.split(',');
          if (supplierCompanies.length > 0) {
            _.map(res, item => {
              for (let companyId of supplierCompanies) {
                if (companyId === item.companyId.toString()) {
                  suppliers.push(item);
                }
              }
            });
          }
        }
        if (suppliers.length > 0) {
          this.fromArg.suppliers = suppliers;
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
  .create-inquiry {
    position: relative;

  .hd {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    color: #666;
    border-bottom: 1px solid #ccc;
  }

  .content-hd {
    font-size: 14px;
    line-height: 40px;
    padding-left: 20px;
  }

  .status {
    display: flex;
    height: 60px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
    justify-content: space-between;

  .btn-wrap {
    display: flex;
    align-items: center;

  span {
    font-size: 14px;
  }

  }
  .select-wrap {
    display: flex;
    align-items: center;

  .select {
    width: 110px;
    margin-right: 5px;
  }

  .set {
    cursor: pointer;
    padding-left: 18px;
    color: #999;

  i {
    font-size: 25px;
  }

  }
  }
  }
  .bom-btn-wrap {
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    padding: 10px 200px 10px;
    box-shadow: 0 -1px 5px #ccc;
  }

  .bom-btn-wrap-station {
    height: 52px;
    width: 100%;
  }

  }
</style>
<style scoped>
  .select-wrap .el-form {
    padding: 10px;
  }

  .select-wrap .el-form-item > > > .el-form-item__label {
    display: flex;
    justify-content: flex-end;
    text-align: left;
  }
</style>

