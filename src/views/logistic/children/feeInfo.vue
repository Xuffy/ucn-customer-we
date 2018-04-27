<template>
  <div>
    <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
      <el-table-column
      :label="$i.fclTransportCharge"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.fclTransportCharge" v-if="edit"></el-input>
          <span v-else>{{ scope.row.fclTransportCharge }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.fclTransportChargeCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.fclTransportChargeCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.fclTransportChargeCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.handlingCharges"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.handlingCharges" v-if="edit"></el-input>
          <span v-else>{{ scope.row.handlingCharges }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.handlingChargesCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.handlingChargesCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.handlingChargesCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherPortCharges"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherPortCharges" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherPortCharges }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherPortChargesCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherPortChargesCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherPortChargesCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.oceanFreight"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.oceanFreight" v-if="edit"></el-input>
          <span v-else>{{ scope.row.oceanFreight }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.oceanFreightCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.oceanFreightCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.oceanFreightCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.insuranceCharges"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.insuranceCharges" v-if="edit"></el-input>
          <span v-else>{{ scope.row.insuranceCharges }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.insuranceChargesCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.insuranceChargesCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.insuranceChargesCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherCharges"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherCharges" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherCharges }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherChargesCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherChargesCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherChargesCurrency }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherChargesExchangeRate"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherChargesExchangeRate" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherChargesExchangeRate }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.otherChargesRemark"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.otherChargesRemark" v-if="edit"></el-input>
          <span v-else>{{ scope.row.otherChargesRemark }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.commissionCharges"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.commissionCharges" v-if="edit"></el-input>
          <span v-else>{{ scope.row.commissionCharges }}</span>
        </template>
      </el-table-column>
      <el-table-column
      :label="$i.commissionChargesCurrency"
      align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.commissionChargesCurrency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.commissionChargesCurrency }}</span>
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
    edit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  
</style>
