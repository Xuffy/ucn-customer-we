<template>
  <div>
    <el-button type="primary" size="mini" @click.stop="$emit('addPayment')">{{ $i.logistic.applyForPayment }}</el-button>
    <el-table :data="tableData" border style="width: 100%; margin-top: 20px" show-summary :sum-text="$i.logistic.sum" :summary-method="summaryMethod">
      <el-table-column type="index" width="50" align="center"/>
      <el-table-column :label="$i.logistic.paymentNo" align="center" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.no }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.paymentItem" align="center" width="140">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.name" v-if="scope.row.edit"></el-input>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.supplierName" align="center" width="140">
        <template slot-scope="scope">
          <el-select v-model="scope.row.payToId" placeholder="请输入内容" :clearable="true" v-if="scope.row.edit">
            <el-option :label="item.skuSupplierName" :value="item.skuSupplierId" v-for="item of selectArr.supplier" :key="'supplier-arr-' + item.supplierId" v-if="selectArr.supplier"/>
          </el-select>
          <span v-else>{{ computedCurrency('supplier', 'skuSupplierId', 'skuSupplierName', scope.row.payToId) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.estPayDate" align="center" width="260">
        <template slot-scope="scope">
          <!-- <el-input placeholder="请输入内容" v-model="scope.row.planPayDt" v-if="edit"></el-input> -->
          <el-date-picker v-if="scope.row.edit" v-model="scope.row.planPayDt" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
          <span v-else>{{ scope.row.planPayDt ? $dateFormat(scope.row.planPayDt, 'yyyy-mm-dd') : null }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.estAmount" align="center" width="180">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.planPayAmount" v-if="scope.row.edit"></el-input>
          <span v-else>{{ scope.row.planPayAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.actPayDate" align="center" width="260">
        <template slot-scope="scope">
          <el-date-picker v-if="scope.row.edit" v-model="scope.row.actualPayDt" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>
          <!-- <el-input placeholder="请输入内容" v-model="scope.row.actPayDate" v-if="edit"></el-input> -->
          <span v-else>{{ scope.row.actualPayDt ? $dateFormat(scope.row.actualPayDt, 'yyyy-mm-dd') : null }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.actAmount" align="center" width="180">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.actualPayAmount" v-if="scope.row.edit"></el-input>
          <span v-else>{{ scope.row.actualPayAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.currency" align="center" width="180">
        <template slot-scope="scope">
          <!-- <el-input placeholder="请输入内容" v-model="scope.row.currencyCode" v-if="scope.row.edit"></el-input> -->
          <!-- <span v-else>{{ scope.row.currencyCode }}</span> -->
          <span>{{ computedCurrency('exchangeCurrency', 'code', 'name', scope.row.currencyCode)}}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.avilable" align="center" width="140">
        <template slot-scope="scope">
          <span>{{ paymentDec.find(a => a.code === scope.row.status).name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.operation" align="center" width="200" fixed="right">
        <template slot-scope="scope">
          <!-- <div v-if="!scope.row.edit">
            <el-button size="mini" type="primary" @click.stop="$emit('savePayment', scope.$index)">保存</el-button>
            <el-button size="mini" type="primary" @click.stop="$emit('deletePaymentList', scope.$index)">取消</el-button>
          </div> -->
          <div v-if="scope.row.status === -1">
            <el-button size="mini" type="primary">恢复</el-button>
          </div>
          <div v-if="(scope.row.status === 20) || (scope.row.status === 40)">
            <div v-if="scope.row.edit">
              <el-button size="mini" type="primary" @click.stop="$emit('savePayment', scope.$index)">保存</el-button>
              <el-button size="mini" type="primary" @click.stop="cancelPaymentModify(scope.$index)">取消</el-button>
            </div>
            <div v-else>
              <el-button size="mini" type="primary" @click.stop="switchModify(scope.$index)">修改</el-button>
              <el-button size="mini" type="primary">作废</el-button>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    currencyCode: String,
    selectArr: {
      type: Object,
      default: () => {}
    },
    paymentSum: {
      type: Object,
      default: () => {}
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      copyPaymentObj: {},
      paymentDec: [
        {
          code: -1,
          name: '作废'
        },
        {
          code: 10,
          name: '待采购商确认'
        },
        {
          code: 20,
          name: '待供应商确认'
        },
        {
          code: 30,
          name: '待服务商确认'
        },
        {
          code: 40,
          name: '已确认'
        }
      ],
      pickerOptions: {
        // disabledDate(time) {
        //   return time.getTime() > Date.now();
        // },
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
      }
    }
  },
  methods: {
    summaryMethod () {
      let SumArr = [this.$i.logistic.sum]
      if (!this.paymentSum) return SumArr

      SumArr[5] = this.paymentSum.planPayAmount
      SumArr[7] = this.paymentSum.actualPayAmount
      SumArr[8] = this.computedCurrency('exchangeCurrency', 'code', 'name', this.paymentSum.currencyCode)
      return SumArr
    },
    computedCurrency (key, findKey, returnKey,currencyCode) {
      if (!this.selectArr[key]) return null
      const obj = this.selectArr[key].find(a => a[findKey] === currencyCode)
      return obj ? obj[returnKey] : null
    },
    switchModify (i) {
      this.copyPaymentObj = this.tableData[i]
      this.$emit('updatePaymentWithView', {i, bool: true})
    },
    cancelPaymentModify (i) {
      if (!this.tableData[i].id) return this.tableData.splice(i, 1)
      this.$emit('updatePaymentWithView', {i, bool: false})
    }
  }
}
</script>
<style lang="less" scoped>
  
</style>
