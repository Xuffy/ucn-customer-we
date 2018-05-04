<template>
  <el-row>
    <div class="select-search-wrap">
      <select-search :options="options"/>
    </div>
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
      <el-table-column type="selection" width="30"></el-table-column>
      <el-table-column :label="$i.logistic.skuCode" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.skuNameEn" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.skuNameCn" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.productDescription" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.blSkuName" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.customsDeclarationNameCn" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.customsDeclarationNameEn" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.hsCode" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.reportElements" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.supplierName" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.supplierNo" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.customerSkuCode" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.factorySkuCode" width="160"align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.unit" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.exportUnitPrice " width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.totalPriceOfExport" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.currency" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.skuQuantityOfOuterCarton" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonLength" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonWidth" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonHeight" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonNetWeight" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonGrossWeight" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonVolume" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.shippingMarks" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonBarCode" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.logistic.outerCartonSkuCode" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="active" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">{{ $i.logistic.detail }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
import { selectSearch } from '@/components/index'

export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return [{x: 1}]
      }
    }
  },
  components: {
    selectSearch
  },
  data () {
    return {
      options: [
        {
          id: '1',
          label: 'logistic Plan No'
        },
        {
          id: '2',
          label: 'SKU Code'
        },
        {
          id: '3',
          label: 'Order No.'
        }
      ]
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      row.index = rowIndex
    },
    handleSelectionChange (val) {
      console.log(val.map(a => a.index))
    }
  }
}
</script>
<style lang="less" scoped>
.select-wrap {
  display:flex;
  align-items:center;
  .select {
    width: 110px;
    margin-right:5px;
    input {}
  }
}
</style>
