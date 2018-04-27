<template>
  <div>
    <el-row class="btns" :style="{ width: hideMune ? '1856px' : '1726px' }">
      <div v-if="!edit">
        <el-button size="mini" type="primary" @click.stop="toModify">{{ $i.modify }}</el-button>
        <el-button size="mini" type="primary">{{ $i.confirm }}</el-button>
        <el-button size="mini" type="primary">{{ $i.cancel }}</el-button>
        <el-button size="mini" type="primary">{{ $i.copy }}</el-button>
        <el-button size="mini" type="primary">{{ $i.placeLogisticsPlan }}</el-button>
        <el-button size="mini" type="primary">{{ $i.download }}</el-button>
        <el-button size="mini" type="danger">{{ $i.delete }}</el-button>
      </div>
      <div v-else>
        <el-button size="mini" type="primary">{{ $i.send }}</el-button>
        <el-button size="mini" type="danger" @click.stop="toExit">{{ $i.exit }}</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hideMune () {
      return this.$store.state.layout.hideMenu
    }
  },
  methods: {
    toModify () {
      console.log('toModify')
      this.$emit('switchEdit')
    },
    toExit () {
      console.log('toExit')
      this.$emit('switchEdit')
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
