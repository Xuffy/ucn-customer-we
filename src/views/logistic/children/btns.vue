<template>
  <el-row class="btns" :style="{ width: '100%', paddingLeft: hideMune ? '65px' : '195px' }">
    <div v-if="!edit">
      <el-button size="mini" type="primary" v-if="$route.query.loadingList!='loadingList'&&logisticsStatus!=5" :disabled="logisticsStatus==1||logisticsStatus==4" @click.stop="$emit('switchEdit','edit')">{{ $i.logistic.modify }}</el-button>
      <el-button size="mini" type="primary" v-if="($route.query.loadingList!='loadingList'&&$route.name!='logisticDraftDetail')&&logisticsStatus!=5" :disabled="logisticsStatus==1||logisticsStatus==4" @click.stop="$emit('switchEdit','confirm')">{{ $i.logistic.confirm }}</el-button>
      <el-button size="mini" type="primary" v-if="$route.query.loadingList!='loadingList'&&logisticsStatus!=5" :disabled="logisticsStatus==1||logisticsStatus==4" @click.stop="$emit('switchEdit','cancel')">{{ $i.logistic.cancel }}</el-button>
      <el-button size="mini" type="primary" v-if="$route.query.loadingList!='loadingList'" @click.stop="$emit('switchEdit','copy')">{{ $i.logistic.copy }}</el-button>
      <el-button size="mini" type="primary" v-if="$route.query.loadingList!='loadingList'" @click.stop="$emit('switchEdit','placeLogisticsPlan')">{{ $i.logistic.placeLogisticsPlan }}</el-button>
      <el-button size="mini" type="primary" v-if="$route.query.loadingList=='loadingList'">{{ $i.logistic.download }}</el-button>
      <el-button size="mini" type="primary" v-if="$route.query.loadingList=='loadingList'" :disabled="logisticsStatus==4 || logisticsStatus==5" @click.stop="$emit('switchEdit','cancelLoadingList')">{{ $i.logistic.cancelLoadingList}}</el-button>
    </div>
    <div v-else>
      <!-- <el-button size="mini" type="primary" v-if="($route.query.id&&$route.query.copy)||(!$route.query.id&&!$route.query.copy)" @click.stop="$emit('sendData', 'saveAsDraft')">{{ $i.logistic.saveAsDraft }}</el-button> -->
      <el-button size="mini" type="primary" @click.stop="$emit('sendData', 'saveAsDraft')">{{ $i.logistic.saveAsDraft }}</el-button>
      <el-button size="mini" type="primary" @click.stop="$emit('sendData', 'send')">{{ $i.logistic.send }}</el-button>
      <el-button size="mini" type="danger" @click.stop="$emit('toExit')">{{ $i.logistic.exit }}</el-button>
    </div>
  </el-row>
</template>
<script>
export default {
  props: {
    planId: [String, Number],
    isCopy: [String, Number],
    logisticsStatus: [String, Number],
    DeliveredEdit:[Boolean],
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      btnWidth: 0,
      scale: 1
    }
  },
  computed: {
    hideMune () {
      return this.$store.state.layout.hideMenu
    },
  }
}
</script>
<style lang="less" scoped>
  .btns {
    transition: padding-left .5s;
    border-top: 1px solid #ccc;
    padding: 15px 0;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
</style>
