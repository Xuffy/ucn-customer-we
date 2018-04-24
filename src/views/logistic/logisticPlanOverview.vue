<template>
  <div class="logistic-plan-overview">
    <div class="status">
      <div class="btn-wrap">
        <span>{{ $i.baseText.Status }}:</span>
        <el-checkbox-group v-model="fillterArr" size="mini" @change="handleCheckedLabelChange">
          <el-checkbox-button :label="a.mark" v-for="a of $i.checkboxStatus" :key="'status-' + a.text">{{a.text}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="select-search-wrap">
        <select-search :options="options" />
      </div>
    </div>
    <div class="btn-wrap">
      <div class="fn btn">
        <el-button>{{ $i.baseText.downloadSelected }}</el-button>
        <el-button>{{ $i.placeLogisticPlan }}</el-button>
        <el-button type="danger" :disabled="true">{{ $i.baseText.delete }}</el-button>
      </div>
      <div class="view-by-btn">
        <span>{{ $i.baseText.viewBy }}&nbsp;</span>
        <el-radio-group v-model="viewBy" size="mini">
          <el-radio-button 
            v-for="item in $db.logistic.overviewBtn"
            :key="item.index"
            :label="item.index"
            >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <v-table
    :data="tabData"
    :buttons="[{label: 'detail', type: 'detail'}]"
    @action="action"
    @change-checked="changeChecked"
    @page-change="pageChange"
    :loading="!tabData || !tabData.length"
    ref="tab"
    />
</div>
</template>
<script>
import { selectSearch, VTable } from '@/components/index';
export default {
  name:'logisticPlanOverview',
  data () {
    return {
      // tabLoad: false,
      fillterArr: [],
      tabColumn: [],
      tabData: [],
      viewBy: 0,
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
  components: {
    selectSearch,
    VTable
  },
  mounted () {
    this.getDictionary()
    this.viewByChange(this.viewBy)
  },
  watch: {
    viewBy (newVal) {
      this.viewByChange(newVal)
    }
  },
  methods: {
    handleCheckedLabelChange () {
      console.log(this.fillterArr)
    },
    changeChecked () {
      // console.log('aaa')
    },
    action () {
      console.log(123)
    },
    pageChange (e) {
      console.log(e)
    },
    viewByChange (viewId) {
      viewId === 0 ? this.getPlanList() : viewId === 1 ? this.getTransportationList() : this.getSKUList()
    },
    getDictionary () {
      this.$ajax.get(this.$apis.get_container_type).then(res => {
        console.log(res)
      })
    },
    getPlanList () {
      this.$ajax.post(this.$apis.gei_plan_list, {pn: 1, ps: 10}).then(res => {
        this.tabData = this.$getDB(this.$db.logistic.planList, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
      })
    },
    getTransportationList () {
      this.$ajax.post(this.$apis.get_transportation_list, {pn: 1, ps: 10}).then(res => {
        this.tabData = this.$getDB(this.$db.logistic.planList, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
      })
    },
    getSKUList () {
      this.$ajax.post(this.$apis.get_SKU_list, {pn: 1, ps: 10}).then(res => {
        this.tabData = this.$getDB(this.$db.logistic.planList, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.logistic-plan-overview {
  .btn-wrap {
    padding:10px;
    display:flex;
    justify-content: space-between;
    .view-by-btn {
      display:flex;
      align-items: center;
      span {
        font-size:14px;
        color:#999;
      }
      button {
        padding:3px 5px;
      }
    }
  }
  .status {
    display:flex;
    height: 60px;
    align-items: center;
    justify-content:space-between;
    padding:0 15px;
    box-sizing: border-box;
    .btn-wrap {
      display:flex;
      align-items: center;
      span {
        font-size:14px;
        margin-right:10px;
      }
      button {
        padding:2px 5px;
        cursor: pointer;
        transition: all .5s ease;
      }
    }
    .select-wrap {
      display:flex;
      align-items:center;
      .select {
        width: 110px;
        margin-right:5px;
        input {}
      }
    }
  }
}
</style>
