<template>
  <div class="place-logistic-plan">
    <div class="hd-top">{{ $i.logistic.logisticPlan + 'HDAMC18005' }}</div>
    <div class="hd active">{{ $i.inquiry.basicInfo }}</div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.logisticsNo }}</span>
          <el-input placeholder="请输入内容" disabled v-model="detailObj.logisticsNo"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.logisticsStatus }}</span>
          <el-select v-model="detailObj.logisticsStatus" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.createDate }}</span>
          <el-input suffix-icon="el-icon-date" v-model="detailObj.createDate" :disabled="true"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.declareDate }}</span>
          <el-date-picker v-model="detailObj.declareDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.bookingDate }}</span>
          <el-date-picker v-model="detailObj.bookingDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estContainerStuffingDate }}</span>
          <el-date-picker v-model="detailObj.estContainerStuffingDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estCustomsCleanceDate }}</span>
          <el-date-picker v-model="detailObj.estCustomsCleanceDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estDepartureDate }}</span>
          <el-date-picker v-model="detailObj.estDepartureDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estArrivalDate }}</span>
          <el-date-picker v-model="detailObj.estArrivalDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estReleaseDate }}</span>
          <el-date-picker v-model="detailObj.estReleaseDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.estDelivaryDate }}</span>
          <el-date-picker v-model="detailObj.estDelivaryDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actDeliveryDate }}</span>
          <el-date-picker v-model="detailObj.actDeliveryDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actContainerStuffingDate }}</span>
          <el-date-picker v-model="detailObj.actContainerStuffingDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actCustomsCleanceDate }}</span>
          <el-date-picker v-model="detailObj.actCustomsCleanceDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actDepartureDate }}</span>
          <el-date-picker v-model="detailObj.actDepartureDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actArrivalDate }}</span>
          <el-date-picker v-model="detailObj.actArrivalDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.actReleaseDate }}</span>
          <el-date-picker v-model="detailObj.actReleaseDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.shipServiceProvider }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.shipServiceProvider"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.customerName }}</span>
          <el-input placeholder="请输入内容" disabled v-model="detailObj.customerName"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.receiptCompany }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.receiptCompany"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.shippingAgent }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.shippingAgent"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.exchangeCurrency }}</span>
          <el-select v-model="detailObj.exchangeCurrency" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.payment }}</span>
          <el-select v-model="detailObj.payment" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.paymentTerms }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.paymentTerms"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.transportationWay }}</span>
          <el-input placeholder="请输入内容" disabled v-model="detailObj.transportationWay"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.loadingType }}</span>
          <el-select v-model="detailObj.loadingType" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.permitedForTransportation }}</span>
          <el-select v-model="detailObj.permitedForTransportation" slot="prepend" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.blType }}</span>
          <el-select v-model="detailObj.blType" slot="prepend" placeholder="请选择">
            <el-option label="电放" value="1"></el-option>
            <el-option label="正本" value="2"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.blQuantity }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.blQuantity"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.blNumber }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.blNumber"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.shipper }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.shipper"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.consignee }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.consignee"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.notify }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.notify"></el-input>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="input-item">
          <span>{{ $i.logistic.basicInfo.remark }}</span>
          <!-- <el-input placeholder="请输入内容" v-model="detailObj.remark"></el-input> -->
          <el-input class="el-input" type="textarea" resize="none" :autosize="{ minRows: 3 }" placeholder="请输入内容"v-model="detailObj.remark"></el-input>
        </div>
      </el-col>
      <attachment accept="all" ref="attachment"/>
      <one-line :list="exchangeRateList"/>
    </el-row>
    <div class="hd"></div>
    <div class="hd active">{{ $i.logistic.transportInfoTitle }}</div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.transportCompany }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.transportCompany"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.vesselName }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.vesselName"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.vesselNo }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.vesselNo"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.departureCountry }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.departureCountry"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.departurePort }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.departurePort"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.destinationCountry }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.destinationCountry"></el-input>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="input-item">
          <span>{{ $i.logistic.transportInfo.destinationPort }}</span>
          <el-input placeholder="请输入内容" v-model="detailObj.destinationPort"></el-input>
        </div>
      </el-col>
    </el-row>
    <div class="hd"></div>
    <div class="hd active">{{ $i.logistic.containerInfoTitle }}</div>
    <containerTable/>
    <!-- <v-container-info
      :tableData="tableData"
      @tabAppend="tabAppend"
      @tailBtnCancel="tailBtnCancel"
      @tailBtnOk="tailBtnOk"
      @tabSplite="tabSplite"
    /> -->

    <!-- <div class="hd">{{ 'logistic.text.productInfo' }}</div> -->
    <!-- <div class="btn-wrap">
      <div>
        <el-button @click="newSearchDialogVisible = true">{{ 'logistic.btn.addProduct' }}</el-button>
        <el-button>{{ 'logistic.btn.remove' }}</el-button>
      </div>
    </div>
    <v-simple-table :column="tabColumn" :data.sync="tabData" />
    <div class="fix-btn" v-show="!isModify">
      <el-button @click="isModify = true">{{ 'logistic.btn.modify' }}</el-button>
      <el-button>{{ 'logistic.btn.sentAsOrder' }}</el-button>
      <el-button type="danger">{{ 'logistic.btn.delete' }}</el-button>
    </div>
    <div class="fix-btn" v-show="isModify">
      <el-button @click="modify">{{ 'logistic.btn.save' }}</el-button>
      <el-button @click="isModify = false" type="info">{{ 'logistic.btn.cancel' }}</el-button>
    </div>
    <div class="fix-btn-station"></div>
    <el-dialog
      title="Add Product"
      :visible.sync="newSearchDialogVisible"
      width="80%"
      lock-scroll>
      <v-select-search :options="['1', 0]" />
      <v-simple-table :column="tabColumn" :data.sync="tabData" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="newSearchDialogVisible = false">{{ 'logistic.btn.ok' }}</el-button>
        <el-button @click="newSearchDialogVisible = false">{{ 'logistic.btn.cancel' }}</el-button>
      </span>
    </el-dialog> -->
</div>
</template>
<script>
import { VSimpleTable, selectSearch } from '@/components/index';
import attachment from '@/components/base/attachment'
import oneLine from '@/components/base/oneLine'
import containerTable from '@/views/logistic/children/containerTable'

export default {
  name: 'placeLogisticPlan',
  data() {
    return {
      detailObj: {},
      isModify:false,
      exchangeRateList: [
        {
          text: 'exchangeRate(￥-$)',
          value: 0,
          placeholder: 'Please enter content'
        },
        {
          text: 'exchangeRate($-￥)',
          value: 0,
          placeholder: 'Please enter content'
        },
        {
          text: 'exchangeRate(￥-€)',
          value: 0,
          placeholder: 'Please enter content'
        },
        {
          text: 'exchangeRate(€-￥)',
          value: 0,
          placeholder: 'Please enter content'
        },
        {
          text: 'exchangeRate($-€)',
          value: 0,
          placeholder: 'Please enter content'
        },
        {
          text: 'exchangeRate(€-$)',
          value: 0,
          placeholder: 'Please enter content'
        }
      ],
      createDate:'2018-09-08',
      tabColumn: [],
      tabData: [],
      fileList: [],
      date:'',
      newSearchDialogVisible:false,
      pickerOptions:{
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      date: '',
      departureOptions: [],
      departure: '',
      tableData: []
    }
  },
  components: {
    "v-simple-table": VSimpleTable,
    // "v-container-info": containerInfo,
    "v-select-search": selectSearch,
    attachment,
    oneLine,
    containerTable
  },
  mounted () {
    // console.log(this.$i)
  },
  created() {
    // this.ajax({
    //     url: '/Compare',
    //     method: 'get'
    // }).then(res => {
    //     this.tabData = res.Inquiry;
    //     this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareByInquiry', { width:200 });
    // });
  },
  methods: {
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
    tailBtnCancel () {}
  }
}
</script>
<style lang="less" scoped>
.place-logistic-plan {
  position: relative;
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
  .btn-wrap {
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    i {
      font-size:24px;
      color:#999;
    }
  }
  .fix-btn {
    position: fixed;
    left:220px;
    bottom:0;
    background:#fff;
    width: 100%;
    padding:10px;
    box-sizing: border-box;
    border-top:1px solid #cdcc;
    z-index:11;
  }
  .fix-btn-station {
    width: 100%;
    height: 53px;
  }
}
</style>
