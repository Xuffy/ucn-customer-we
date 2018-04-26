<template>
  <div>
    <div class="btn-wraps">
      <el-button type="primary" size="mini" @click="tabAppend">{{ $i.add }}</el-button>
      <el-button type="danger" size="mini">{{ $i.delete }}</el-button>
    </div>
    <div class="tab-wrap">
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px" :row-class-name="tableRowClassName" show-summary tooltip-effect="dark" :sum-text="$i.sum">
        <el-table-column type="selection" width="100" align="center" class-name="checkbox-no-margin"/>
        <el-table-column type="index" width="50" align="center"/>
        <!-- <el-table-column label="#" align="center" width="50">
          <template slot-scope="scope">
            {{scope.row.index + 1}}
          </template>
        </el-table-column> -->
        <el-table-column
        :label="$i.containerNo"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.containerNo }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.sealNumber"
        prop="sealNumber"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.sealNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.containerWeight"
        prop="containerWeight"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.containerWeight }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.containerType"
        align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.containerType" placeholder="请选择" >
              <el-option v-for="item in containerType" :key="item.id" :label="item.label" :value="item.value"/>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.vgm"
        prop="vgm"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.vgm }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.totalQuantityInContainer"
        prop="totalQuantityInContainer"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.totalQuantityInContainer }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.totalVolumeInContainer"
        prop="totalVolumeInContainer"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.totalVolumeInContainer }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.totalNetWeightInContainer"
        prop="totalNetWeightInContainer"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.totalNetWeightInContainer }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.totalQuantityOfOuterCartonsInContainer"
        prop="totalQuantityOfOuterCartonsInContainer"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.totalQuantityOfOuterCartonsInContainer }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.totalSkuPriceInContainer"
        prop="totalSkuPriceInContainer"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.totalSkuPriceInContainer }}</span>
          </template>
        </el-table-column>
        <el-table-column
        :label="$i.exchangeCurrency"
        align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.exchangeCurrency }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      containerNo: '',
      containerSelect: '',
      isActive: false
    }
  },
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    containerType: {
      type: Array,
      default: () => {
        return [
          {
            label: "dada",
            value: "4"
          }
        ]
      }
    }
  },
  created() {
    // this.tabAppend();
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      row.index = rowIndex;
    },
    tabAppend() {
      this.isActive = true;
      this.$emit('tabAppend');
    },
    tailBtn(str) {
      if(str === 'ok') {
        if(!this.containerSelect) return this.$message({
          message: '请选择货柜类型',
          type: 'warning'
        });
        if(!this.containerNo) return this.$message({
          message: '请填写货柜数量',
          type: 'warning'
        });
        this.$emit('tailBtnOk', {
          Product: this.containerSelect,
          containerAmount: this.containerNo
        });
        this.containerSelect = '';
        this.containerNo = '';
      } else {
        this.$emit('tailBtnCancel');
      }
      return this.isActive = false
    },
    tabSplite(index) {
      if(this.tableData.length <= 1) this.tabAppend();
      this.$emit('tabSplite', index)
    }
  }
}
</script>
<style lang="less" scoped>
.btn-wraps {
  padding:10px 0;
}
</style>
