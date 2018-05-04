<template>
  <el-row>
    <v-table-filter :hideFilterValue="true" class="filter"/>
    <el-table :data="modifyArray" style="width: 100%">
      <el-table-column :label="$i.negotiate" width="100" align="center">
        <template slot-scope="scope">
          <span>123</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.orderNo" width="100" align="center" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.orderNo.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.quantityOfOuterCartonsToBeShipped" width="300" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.quantityOfOuterCartonsToBeShipped.value" v-if="scope.row.quantityOfOuterCartonsToBeShipped.edit"></el-input>
          <span v-else>{{ scope.row.quantityOfOuterCartonsToBeShipped.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.goodsToBeShipped" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.goodsToBeShipped.value" v-if="scope.row.goodsToBeShipped.edit"></el-input>
          <span v-else>{{ scope.row.goodsToBeShipped.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuCode" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuCode.value" v-if="scope.row.skuCode.edit"></el-input>
          <span v-else>{{ scope.row.skuCode.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuNameEn" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuNameEn.value" v-if="scope.row.skuNameEn.edit"></el-input>
          <span v-else>{{ scope.row.skuNameEn.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuNameCN" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuNameCN.value" v-if="scope.row.skuNameCN.edit"></el-input>
          <span v-else>{{ scope.row.skuNameCN.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.productDescription" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.productDescription.value" v-if="scope.row.productDescription.edit"></el-input>
          <span v-else>{{ scope.row.productDescription.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.blSkuName" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.blSkuName.value" v-if="scope.row.blSkuName.edit"></el-input>
          <span v-else>{{ scope.row.blSkuName.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customsDeclarationNameCn" width="240" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.customsDeclarationNameCn.value" v-if="scope.row.customsDeclarationNameCn.edit"></el-input>
          <span v-else>{{ scope.row.customsDeclarationNameCn.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customsDeclarationNameEn" width="240" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.customsDeclarationNameEn.value" v-if="scope.row.customsDeclarationNameEn.edit"></el-input>
          <span v-else>{{ scope.row.customsDeclarationNameEn.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.hsCode" align="center" width="100" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.hsCode.value" v-if="scope.row.hsCode.edit"></el-input>
          <span v-else>{{ scope.row.hsCode.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.reportElements" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.reportElements.value" v-if="scope.row.reportElements.edit"></el-input>
          <span v-else>{{ scope.row.reportElements.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.supplierName" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.supplierName.value" v-if="scope.row.supplierName.edit"></el-input>
          <span v-else>{{ scope.row.supplierName.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.supplierNo" width="120" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.supplierNo.value" v-if="scope.row.supplierNo.edit"></el-input>
          <span v-else>{{ scope.row.supplierNo.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customerSkuCode" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.customerSkuCode.value" v-if="scope.row.customerSkuCode.edit"></el-input>
          <span v-else>{{ scope.row.customerSkuCode.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.factorySKUCode" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.factorySKUCode.value" v-if="scope.row.factorySKUCode.edit"></el-input>
          <span v-else>{{ scope.row.factorySKUCode.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.unit" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.unit.value" v-if="scope.row.unit.edit"></el-input>
          <span v-else>{{ scope.row.unit.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.exportUnitPrice" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.exportUnitPrice.value" v-if="scope.row.exportUnitPrice.edit"></el-input>
          <span v-else>{{ scope.row.exportUnitPrice.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.totalPriceOfExport" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.totalPriceOfExport.value" v-if="scope.row.totalPriceOfExport.edit"></el-input>
          <span v-else>{{ scope.row.totalPriceOfExport.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.currency" width="100" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.currency.value" v-if="scope.row.currency.edit"></el-input>
          <span v-else>{{ scope.row.currency.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuQuantityOfOuterCarton" width="220" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuQuantityOfOuterCarton.value" v-if="scope.row.skuQuantityOfOuterCarton.edit"></el-input>
          <span v-else>{{ scope.row.skuQuantityOfOuterCarton.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonLength" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonLength.value" v-if="scope.row.outerCartonLength.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonLength.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonWidth" width="180" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonWidth.value" v-if="scope.row.outerCartonWidth.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonWidth.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonHeight" width="160" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonHeight.value" v-if="scope.row.outerCartonHeight.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonHeight.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonNetWeight" width="200" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonNetWeight.value" v-if="scope.row.outerCartonNetWeight.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonNetWeight.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonGrossWeight" width="200" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonGrossWeight.value" v-if="scope.row.outerCartonGrossWeight.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonGrossWeight.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonVolume" width="180" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonVolume.value" v-if="scope.row.outerCartonVolume.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonVolume.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.shippingMarks" width="140" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.shippingMarks.value" v-if="scope.row.shippingMarks.edit"></el-input>
          <span v-else>{{ scope.row.shippingMarks.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonBarCode" width="180" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonBarCode.value" v-if="scope.row.outerCartonBarCode.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonBarCode.value }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonSkuCode" width="180" align="center" sortable>
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.outerCartonSkuCode.value" v-if="scope.row.outerCartonSkuCode.edit"></el-input>
          <span v-else>{{ scope.row.outerCartonSkuCode.value }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
import VTableFilter from '@/components/common/table/filter'

export default {
  props: {
    productInfoModifyStatus: {
      type: Number,
      default: 0
    },
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
  },
  components: {
    VTableFilter
  },
  data () {
    return {
      modify: true,
      modifyArray: [],
      modifyObj: {}
    }
  },
  mounted () {
    this.createModifyData()
  },
  // watch: {
  //   tableData (newVal) {
  //     console.log(newVal)
  //     newVal.length && this.createModifyData()
  //   }
  // },
  methods: {
    createModifyData () {
      console.log(this.tableData.length)
      if (!this.tableData.length) return
      if (this.productInfoModifyStatus === 1) {
        this.modifyObj = JSON.parse(JSON.stringify(this.tableData[0]))
        _.mapObject(this.modifyObj, (value, key) => {
          key === 'skuCode' && (value.edit = true)
          key === 'hsCode' && (value.edit = true)
          return value
        })

        this.modifyArray = [this.modifyObj, ...this.tableData]
      } else {
        this.modifyArray = this.tableData
      }
    }
  }
}
</script>
<style lang="less">
.filter {
  float: right;
}
</style>
