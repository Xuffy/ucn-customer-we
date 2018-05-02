<template>
  <div class="logistic-plan-overview">
    <div class="hd-top">{{ $i.logisticsPlanOverview }}</div>
    <div class="status">
      <div class="btn-wrap">
        <span>{{ $i.status}}:</span>
        <el-checkbox-group v-model="fillterArr" size="mini" @change="handleCheckedLabelChange">
          <el-checkbox-button :label="+a.code" v-for="a of ls_plan" :key="'status-' + a.code">{{a.name}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="select-search-wrap">
        <select-search :options="options" />
      </div>
    </div>
    <div class="btn-wrap">
      <div class="fn btn">
        <el-button>{{ $i.download }}({{ selectCount.length || $i.all }})</el-button>
        <el-button @click.stop="addNew">{{ $i.placeLogisticPlan }}</el-button>
        <el-button type="danger" :disabled="true">{{ $i.delete }}</el-button>
      </div>
      <div class="view-by-btn">
        <span>{{ $i.viewBy }}&nbsp;</span>
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
    :loading="tableLoading"
    ref="tab"
    />
    <v-pagination :page-data="pageObj" @page-size-change="sizeChange" @page-change="pageChange"/>
</div>
</template>
<script>
import { selectSearch, VTable, VPagination } from '@/components/index';
export default {
  name:'logisticPlanOverview',
  data () {
    return {
      pageObj: {},
      tableLoading: true,
      ls_plan: [],
      pageParams: {
        pn: 1,
        ps: 10
      },
      totalCount: 0,
      selectCount: [],
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
  computed: {
    pageName () {
      return this.$route.meta.name
    }
  },
  components: {
    selectSearch,
    VTable,
    VPagination
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
      this.viewByChange(this.viewBy)
    },
    changeChecked (arr) {
      this.selectCount = arr
    },
    action () {
      console.log(123)
    },
    sizeChange (e) {
      console.log(e)
    },
    pageChange (e) {
      console.log(e)
    },
    addNew () {
      this.$router.push({path: '/logistic/planDetail', query: {x: 1}})
    },
    viewByChange (viewId) {
      viewId === 0 ? this.getPlanList() : viewId === 1 ? this.getTransportationList() : this.getSKUList()
    },
    getDictionary () {
      this.$ajax.post(this.$apis.get_dictionary, ['LS_PLAN'], '_cache').then(res => {
        this.ls_plan = res[0].codes
      })
    },
    getPlanList () {
      this.tableLoading = true
      this.$ajax.post(this.$apis.gei_plan_list, {lgStatus: this.fillterArr, ...this.pageParams}).then(res => {
        this.totalCount = res.tc
        this.tabData = this.$getDB(this.$db.logistic.planList, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
        this.pageObj = res
        this.tableLoading = false
      })
    },
    getTransportationList () {
      this.tableLoading = true
      this.$ajax.post(this.$apis.get_transportation_list, {lgStatus: this.fillterArr, ...this.pageParams}).then(res => {
        this.totalCount = res.tc
        this.tabData = this.$getDB(this.$db.logistic.transportationList, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
        this.pageObj = res
        this.tableLoading = false
      })
    },
    getSKUList () {
      this.tableLoading = true
      this.$ajax.post(this.$apis.get_SKU_list, {lgStatus: this.fillterArr, ...this.pageParams}).then(res => {
        this.totalCount = res.tc
        this.tabData = this.$getDB(this.$db.logistic.sku, res.datas, item => {
          _.mapObject(item, val => {
            val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
            return val
          })
        })
        this.pageObj = res
        this.tableLoading = false
      })
    }
  }
}
</script>
<style lang="less" scoped>
.logistic-plan-overview {
  .hd-top {
    font-size: 18px;
    color: #666;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;
  }
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
