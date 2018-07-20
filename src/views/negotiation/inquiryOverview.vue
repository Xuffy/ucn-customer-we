<template>
    <div class="inquiry">
        <h3 class="hd"> {{ $i.inquiry.inquiryTitle }}</h3>
        <div class="status">
            <div class="state">
                <span>{{ $i.common.Status }}</span>
                <el-radio-group v-model="params.status" @change="gettabData" size="mini">
                    <el-radio-button :label="null">{{$i.common.all}}</el-radio-button>
                    <el-radio-button
                        v-for="item in $db.inquiry.overoiewState"
                        :label="item.id"
                        :key="item.id">
                      {{ $i.inquiry[item.text] }}
                    </el-radio-button>
                </el-radio-group>
            </div>
            <select-search
                :options="options"
                @inputEnter="inputEnter"
                :searchLoad="searchLoad"/>
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button @click="toCompare" :class="{'is-disabled':checkedIds.length < 2}" v-authorize="'INQUIRY:OVERVIEW:COMPARE'">{{ $i.common.compare }}<span>({{ checkedIds.length }})</span></el-button>
                <el-button @click="$windowOpen({url:'/negotiation/createInquiry'})" v-authorize="'INQUIRY:OVERVIEW:CREATE_INQUIRY'">{{ $i.common.createNewInquiry }}</el-button>
                <el-button @click="cancelInquiry" v-authorize="'INQUIRY:OVERVIEW:CANCEL_INQUIRY'" :disabled="!checkedData.length||params.status+'' === '1'||params.status+'' === '99'||params.status === null">{{ $i.common.cancelTheInquiry }}<span>({{ checkedIds.length }})</span></el-button>
                <el-button @click="deleteInquiry" type="danger" v-authorize="'INQUIRY:OVERVIEW:DELETE'" :disabled="!checkedData.length||params.status+'' === '21'||params.status+'' === '22'||params.status === null">{{ $i.common.archive }}<span>({{ checkedIds.length }})</span></el-button>
                <el-button @click="exportDatas" :disabled="!tabData.length" v-authorize="'INQUIRY:OVERVIEW:DOWNLOAD'">{{ `${$i.common.download}(${checkedIds.length >= 1 ? checkedIds.length : 'all'})` }}</el-button>
            </div>
            <div class="viewBy">
                <span>{{ $i.common.viewBy }}&nbsp;</span>
                <el-radio-group v-model="viewByStatus" @change="viewByChange"  size="mini">
                    <el-radio-button :label="0">{{$i.common.inquiry}}</el-radio-button>
                    <el-radio-button :label="1" >{{$i.common.SKU}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <v-table
            :code="viewByStatus ? 'inquiry_sku_list': 'inquiry_list'"
            hide-filter-value
            :data="tabData"
            :buttons="[{label: $i.common.detail, type: 'detail'}]"
            :height="450"
            @action="action"
            @change-checked="changeChecked"
            @change-sort="onListSortChange"
            :loading="tabLoad"
            ref="tab"
        />
        <v-pagination
            :page-data.sync="params"
            @change="handleSizeChange"
            @size-change="pageSizeChange"
        />
    </div>
</template>
<script>
/**
 * @param selectChange 下拉框 值发生变更触发
 * @param options 下拉框 原始数据
*/
import { selectSearch, VTable, VPagination } from '@/components/index';
import { mapActions } from 'vuex';
import codeUtils from '@/lib/code-utils';

export default {
  name: '',
  data() {
    return {
      checkedData: [],
      pazeSize: [50, 100, 200],
      searchLoad: false,
      options: [{
        id: 'supplierName',
        label: this.$i.inquiry.supplierName,
        operator: 'like'
      }, {
        id: 'inquiryNo',
        label: this.$i.inquiry.InquiryNo,
        operator: 'like'
      }, {
        id: 'quotationNo',
        label: this.$i.inquiry.quotationNo,
        operator: 'like'
      }],
      tabData: [],
      viewByStatus: 0,
      params: {
        status: null,
        ps: 50,
        pn: 1,
        tc: 0,
        draft: 0,
        recycleCustomer: false,
        operatorFilters: []
        // recycleSupplier
      },
      tabLoad: false
    };
  },
  components: {
    'select-search': selectSearch,
    'v-table': VTable,
    'v-pagination': VPagination
  },
  computed: {
    checkedIds() {
      return Array.from(new Set(this.checkedData.map(i => i[i.inquiryId ? 'inquiryId' : 'id'].value)));
    }
  },
  created() {
    this.setMenuLink({path: '/negotiation/draft/inquiry', label: this.$i.common.draft});
    this.setMenuLink({path: '/negotiation/recycleBin/inquiry', label: this.$i.common.archive});
    this.setMenuLink({path: '/logs/index', query: {code: 'inquiry'}, label: this.$i.common.log});
    this.getBaseData().then(this.gettabData, this.gettabData);
  },
  methods: {
    ...mapActions(['setMenuLink', 'setDic']),
    inputEnter(val, operatorFilters) {
      this.params.operatorFilters = operatorFilters;
      this.searchLoad = true;
      this.gettabData();
    },
    getBaseData() {
      const postCodes = this.$ajax.post(this.$apis.POST_CODE_PART, ['INQUIRY_STATUS', 'ITM'], { cache: true });
      const getCurrencies = this.$ajax.get(this.$apis.GET_CURRENCY_ALL, '', {cache: false});
      return this.$ajax.all([postCodes, getCurrencies]).then(res => {
        let data = res[0];

        res[1].forEach(item => item.name = item.code);
        data.push({
          code: 'CY_UNIT',
          name: 'CY_UNIT(币种)',
          codes: res[1]
        });
        this.setDic(codeUtils.convertDicValueType(data));
      });
    },
    gettabData() {
      let url, column;
      this.tabLoad = true;
      if (this.viewByStatus === 0) {
        url = this.$apis.POST_INQIIRY_LIST;
        column = this.$db.inquiry.viewByInqury;
      } else {
        url = this.$apis.POST_INQIIRY_LIST_SKU;
        column = this.$db.inquiry.viewBySKU;
      }
      this.$ajax.post(url, this.params).then(res => {
        this.checkedData = [];
        this.params.tc = res.tc;
        this.tabData = this.$getDB(column, res.datas, (item) => {
          this.$filterDic(item);
        });
        this.tabLoad = false;
        this.searchLoad = false;
      }, () => {
        this.searchLoad = false;
        this.tabLoad = false;
      });
    },
    viewByChange() {
      this.params.sorts = null;
      this.gettabData();
    },
    onListSortChange(args) {
      this.params.sorts = args.sorts;
      this.gettabData();
    },
    exportDatas() {
      let params = this.$depthClone(this.params);
      if (this.checkedIds.length) {
        params.ids = this.checkedIds;
      } else {
        delete params.ids;
      }
      this.$fetch.export_task('INQUIRY_ORDER', params);
    },
    cancelInquiry() { // 取消询价单
      this.ajaxInqueryAction('cancel');
    },
    deleteInquiry() { // 删除询价单
      this.$confirm(this.$i.common.confirmDeletion, this.$i.common.prompt, {
        confirmButtonText: this.$i.common.confirm,
        cancelButtonText: this.$i.common.cancel,
        type: 'warning'
      }).then(() => {
        this.ajaxInqueryAction('delete');
      });
    },
    ajaxInqueryAction(type) {
      this.$ajax.post(this.$apis.POST_INQUIRY_ACTION, {
        action: type,
        ids: this.checkedIds
      })
        .then(res => {
          this.gettabData();
          this.checkedData = [];
        });
    },
    action(item, type) {
      switch (type) {
        case 'detail':
          this.detail(item);
          break;
      }
    },
    detail(item) {
      let id = item.inquiryId ? item.inquiryId.value : item.id.value;
      this.$router.push({
        path: '/negotiation/inquiryDetail',
        query: {id}
      });
    },
    toCompare() {
      if(this.checkedData.length>=100){
        this.$message({
          message: 'No more than a hundred!',
          type: 'warning'
        })
        return;
      }
      if (this.checkedIds.length>=2) {
        this.$windowOpen({
          url: '/negotiation/compareDetail/new',
          params: {
            type: 'new',
            ids: this.checkedIds.join(',')
          }
        });
      }else{
         this.$message({
          message: 'please choose at least two inquiries!',
          type: 'warning'
        })
      }
    },
    handleSizeChange(val) {
      this.params.pn = val;
      this.gettabData();
    },
    pageSizeChange(val) {
      this.params.pn = 1;
      this.params.ps = val;
      this.gettabData();
    },
    changeChecked(item) { // tab 勾选
      this.checkedData = item;
    }
  }
};
</script>
<style lang="less" scoped>
    .inquiry {
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #ccc;
        }
        .status {
            display:flex;
            height: 60px;
            align-items: center;
            justify-content:space-between;
            padding:0 15px;
            box-sizing: border-box;
            .state {
                display:flex;
                align-items: center;
                font-size:16px;
                color:#666;
            }
            span {
                padding-right:5px;
            }
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                }
                button {
                    padding:2px 5px;
                }
            }
            .select-wrap {
                display:flex;
                align-items:center;
                .select {
                    width: 110px;
                    margin-right:5px;
                }
            }
        }
        .fn {
            display:flex;
            justify-content:space-between;
            padding:10px 15px;
            box-sizing: border-box;
            .viewBy {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                    color:#666;
                }
                button {
                    cursor: pointer;
                    padding:2px 5px;
                }
                .set {
                    cursor: pointer;
                    padding-left:18px;
                    color:#999;
                    i {
                        font-size:25px;
                    }
                }
            }
        }
    }
</style>
