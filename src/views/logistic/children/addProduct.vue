<template>
  <el-row>
    <div class="select-search-wrap">
      <select-search :options="options"/>
    </div>
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
      <el-table-column type="selection" width="30"></el-table-column>
      <el-table-column :label="$i.skuCode" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuNameEn" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuNameCn" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.productDescription" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.blSkuName" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customsDeclarationNameCn" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customsDeclarationNameEn" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.hsCode" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.reportElements" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.supplierName" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.supplierNo" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.customerSkuCode" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.factorySkuCode" width="160"align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.unit" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.exportUnitPrice " width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.totalPriceOfExport" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.currency" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.skuQuantityOfOuterCarton" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonLength" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonWidth" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonHeight" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonNetWeight" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonGrossWeight" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonVolume" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.shippingMarks" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonBarCode" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.outerCartonSkuCode" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="active" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">{{ $i.detail }}</el-button>
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
      row.index = rowIndex;
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
