<template>
  <el-row>
    <div class="select-search-wrap">
      <select-search :options="options"/>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="30"></el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.x }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.negotiate" align="center">
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
