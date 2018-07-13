<template>
  <el-row class="btns" :style="{ width: '100%', paddingLeft: hideMune ? '65px' : '195px' }">
    <div v-if="!edit">
      <el-button size="mini" v-authorize="auth[pageTypeCurr].MODIFY||''" type="primary" v-if="pageTypeCurr!='loadingListDetail'&&(logisticsStatus==2||logisticsStatus==3)" @click.stop="$emit('switchEdit','edit')">{{ $i.logistic.modify }}</el-button>
      <el-button size="mini" v-if="pageTypeCurr!='loadingListDetail'&&pageTypeCurr!='logisticDraftDetail'&&(logisticsStatus==2)" @click.stop="$emit('switchEdit','confirm')">{{ $i.logistic.confirm }}</el-button>
      <el-button size="mini" v-authorize="auth[pageTypeCurr].COPY||''" type="primary" v-if="pageTypeCurr!='loadingListDetail'" @click.stop="$emit('switchEdit','copy')">{{ $i.logistic.copy }}</el-button>
      <el-button size="mini" type="primary" v-if="pageTypeCurr!='loadingListDetail'" @click.stop="$emit('switchEdit','placeLogisticsPlan')">{{ $i.logistic.placeLogisticsPlan }}</el-button>
      <el-button size="mini" v-authorize="auth[pageTypeCurr].READ||''" type="primary" v-if="pageTypeCurr=='loadingListDetail'&&fieldDisplay" @click.stop="$emit('switchEdit','read')">{{ $i.logistic.read }}</el-button>
      <el-button size="mini" v-authorize="auth[pageTypeCurr].CANCEL_LOADINGLIST||''" type="primary" v-if="pageTypeCurr=='loadingListDetail'&&logisticsStatus!=4" @click.stop="$emit('switchEdit','cancelLoadingList')">{{ $i.logistic.cancelLoadingList}}</el-button>
      <el-button size="mini" v-authorize="auth[pageTypeCurr].DOWNLOAD||''" type="primary" @click.stop="$emit('switchEdit','download')">{{ $i.logistic.download }}</el-button>
      <el-button size="mini" v-authorize="auth[pageTypeCurr].CANCEL||''" type="primary" v-if="pageTypeCurr!='loadingListDetail'&&logisticsStatus!=5" @click.stop="$emit('switchEdit','cancel')">{{ $i.logistic.cancel }}</el-button>
    </div>
    <div v-else>
      <el-button size="mini" type="primary" v-authorize="auth[pageTypeCurr].DRAFT||''" v-if="pageTypeCurr=='placeLogisticPlan'||pageTypeCurr=='logisticDraftDetail'" @click.stop="$emit('sendData', 'saveAsDraft')">{{ $i.logistic.saveAsDraft }}</el-button>
      <el-button size="mini" type="primary" @click.stop="$emit('sendData', 'send')">{{ $i.logistic.send }}</el-button>
      <el-button size="mini" type="danger" @click.stop="$emit('toExit')">{{ $i.logistic.exit }}</el-button>
    </div>
  </el-row>
</template>
<script>
export default {
  props: {
    fieldDisplay:[String,Object],
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
      scale: 1,
      auth:{
        logisticPlanDetail: {
          DRAFT:'LOGISTICS:PLAN_DETAIL:DRAFT',
          MODIFY:'LOGISTICS:PLAN_DETAIL:MODIFY',
          DOWNLOAD:'LOGISTICS:PLAN_DETAIL:DOWNLOAD',
          CANCEL:'LOGISTICS:PLAN_DETAIL:CANCEL',
          COPY:'LOGISTICS:PLAN_DETAIL:COPY'
        },
        loadingListDetail: {
          READ:'LOADING_LIST:DETAIL:READ',
          DOWNLOAD:'LOADING_LIST:DETAIL:DOWNLOAD',
          CANCEL_LOADINGLIST:'LOADING_LIST:DETAIL:CANCEL'
        },
        logisticDraftDetail: {

        },
        placeLogisticPlan: {

        }
      },
    }
  },
  computed: {
    pageTypeCurr(){
      return this.$route.name;
    },
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
