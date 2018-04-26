<template>
  <div>
    <div>
      <el-button type="primary" size="mini">{{ $i.addProduct }}</el-button>
      <el-button type="danger" size="mini">{{ $i.remove }}</el-button>
      <v-table :data="tableData" @action="action"/>
    </div>
  </div>
</template>
<script>
import { VTable } from '@/components/index';

export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    VTable
  },
  methods: {
    action () {
      console.log(123)
    }
  }
}
</script>
<style lang="less" scoped>
  
</style>
