<template>
  <div>
    <div class="btn-wraps">
      <el-button type="primary" size="mini">{{ $i.logistic.containerInfo.add }}</el-button>
      <el-button type="danger" size="mini">{{ $i.logistic.containerInfo.delete }}</el-button>
    </div>
    <v-simple-table/>
  </div>
</template>
<script>
import { VSimpleTable } from '@/components/index'

export default {
  components: {
    VSimpleTable
  }
}
</script>
<style lang="less" scoped>
  .btn-wraps {
    padding: 10px 0;
  }
</style>
