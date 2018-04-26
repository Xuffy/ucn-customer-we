<template>
  <el-row class="btns" :style="{ width: hideMune ? '1856px' : '1726px' }">
    <el-button size="mini" type="primary">{{ $i.modify }}</el-button>
    <el-button size="mini" type="primary">{{ $i.confirm }}</el-button>
    <el-button size="mini" type="primary">{{ $i.cancel }}</el-button>
    <el-button size="mini" type="primary">{{ $i.copy }}</el-button>
    <el-button size="mini" type="primary">{{ $i.placeLogisticsPlan }}</el-button>
    <el-button size="mini" type="primary">{{ $i.download }}</el-button>
    <el-button size="mini" type="danger">{{ $i.delete }}</el-button>
  </el-row>
</template>
<script>
export default {
  computed: {
    hideMune () {
      return this.$store.state.layout.hideMenu
    }
  }
}
</script>
<style lang="less" scoped>
  .btns {
    transition: width .5s;
    border-top: 1px solid #ccc;
    padding: 15px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;
  }
</style>
