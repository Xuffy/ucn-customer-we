<template>
  <div class="orderOverview">
    <h3 class="hd">Order Overview</h3>
    <div class="status">
      <div class="btn-wrap">
        <span>Status&nbsp</span>
        <el-radio-group v-model="params.status" size="mini" @change='changeStatus'>
          <!--<el-radio-button label=" ">{{($i._baseText.all)}}</el-radio-button>-->
          <el-radio-button label="1"> {{ $i._baseText.waitingQC }}</el-radio-button>
          <el-radio-button label="2">{{($i._baseText.applyRework)}}</el-radio-button>
          <el-radio-button label="3">{{($i._baseText.confirmedRework)}}</el-radio-button>
          <el-radio-button label="4">{{($i._baseText.applyReturn)}}</el-radio-button>
          <el-radio-button label="5">{{($i._baseText.confirmedReturn)}}</el-radio-button>
          <el-radio-button label="6">{{($i._baseText.confirmed)}}</el-radio-button>
        </el-radio-group>
      </div>
      <div class="select-wrap">
        <selectSearch
          :options=options
          @selectChange="selectChange"
          @inputChange="inputEnter"
        ></selectSearch>
      </div>
    </div>
    <div class="fn">
      <div class="btn-wrap">
        <el-button @click='download'>{{($i._baseText.download)}}({{selectedDate.length}})</el-button>
      </div>
    </div>
    <!--form-->
    <v-table
      ref='vtable'
      :data="tabData"
      :buttons="[{label: 'detail', type: 1}]"
      @action="onAction"
      :loading='loading'
      :pageTotal='pageTotal'
      @change-checked='checked'
      @page-size-change(size)='pagesizechange'
      @page-change(page)='pagechange'
      style='marginTop:10px'/>
  </div>
</template>
<script>
  /**
   * @param selectChange 下拉框 值发生变更触发
   * @param keyWord search框 值
   * @param options 下拉框 原始数据
   * @param value 下拉框 选中值
   */

  import {
    dropDown,
    selectSearch
  } from '@/components/index'
  import {
    VTable
  } from '@/components/index';
  export default {
    name: 'orderOverview',
    components: {
      dropDown,
      VTable,
      selectSearch
    },
    data() {
      return {
        value: '',
        keyWord: '',
        tabData: [],
        loading: false,
        pageTotal: 1,
        rowspan: 1,
        options: [{
          id: '1',
          label: 'Order No'
        }, {
          id: '2',
          label: 'Sku Code',
        },{
          id:'3',
          label: 'Inbound No'
        }],
        keyType: '',
        params: {
          "companyId": 0,
          "inboundNo": "",
          "orderNo": "",
          "outboundNo": "",
          "ownerIds": [
            0
          ],
          "pn": 10,
          "ps": 1,
          "qcOrderNo": "",
          "skuCode": "",
          "skuInventoryStatusDictCode": 0,
          "sorts": [
            {
              "nativeSql": true,
              "orderBy": "",
              "orderType": "",
              "resultMapId": ""
            }
          ],
          "tenantId": ''
        },
        selectedDate: [],
        selectedNumber: []
      }
    },
    methods: {
      onAction(item, type) {
      //点击后跳转到此SKU的产品详情页
        this.$windowOpen({
          url: '',
          params: {
            // orderId: item.id.value
          }
        });
      },
      pagesizechange() {

      },
      pagechange() {

      },
      selectChange(val) {
        this.keyType = val;
      },
      checked(item) {
        this.selectedDate = item
        var obj=[]
        this.selectedDate.forEach(item => {
          obj.push(item.id.value);
        });
        this.selectedNumber=obj
      },
      changeStatus() {
        if(this.params.view==1){
          this.getdata(this.$db.order.overview)
        }else{
          this.getdata(this.$db.order.overviewBysku)
        }
      },
      changeView() {
        if(this.params.view==1){
          this.getdata(this.$db.order.overview)
        }else{
          this.getdata(this.$db.order.overviewBysku)
        }
      },
      inputEnter(val) {
        if (!val.keyType) return this.$message('请选中搜索类型');
        if (!val.key) return this.$message('搜索内容不能为空');
        if (val.keyType == '1') {
          this.params.orderNo = val.key
          if(this.params.view==1){
            this.getdata(this.$db.order.overview)
          }else{
            this.getdata(this.$db.order.overviewBysku)
          }
        } else {
          this.params.skuCode = val.key
          if(this.params.view==1){
            this.getdata(this.$db.order.overview)
          }else{
            this.getdata(this.$db.order.overviewBysku)
          }
        }
        this.getdata()
      },
      download() {
        this.$ajax.post(this.$apis.download_order, {ids:this.selectedNumber})
          .then((res) => {
            console.log(res)
          })
          .catch((res) => {
            console.log(res)
          });
      },
      //get_orderlist数据
      getdata() {
        this.loading = true
        this.$ajax.post(this.$apis.post_warehouse_page, this.params)
          .then((res) => {
            this.tabData = this.$getDB(this.$db.warehouseTable, res.datas);
            this.loading = false
          })
          .catch((res) => {
            this.loading = false
          });
      }
    },
    computed: {

    },
    created() {
      this.getdata()
    },
    mounted() {
      this.loading = false
    },
    updated() {

    },
    watch: {

    }
  }

</script>
<style scoped>
  >>>.el-input-group__append {
    padding: 0 !important;
  }

</style>
<style lang="less" scoped>
  .orderOverview {
  .hd {
    height: 50px;
    line-height: 50px;
    color: #666;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    color: #666666;
  }
  .status {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
  .btn-wrap {
    display: flex;
    align-items: center;
  span {
    font-size: 14px;
  }
  button {
    padding: 2px 5px;
    cursor: pointer;
    border: 1px solid #108ee9;
    background-color: #fff;
    margin-left: 10px;
    border-radius: 5px;
    transition: all .5s ease;
  &:hover,
  &.active {
     background-color: #108ee9;
     color: #fff;
   }
  }
  }
  .select-wrap {
    display: flex;
    align-items: center;
  .select {
    width: 110px;
    margin-right: 5px;
  input {}
  }
  }

  }
  .fn {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    box-sizing: border-box;
  .viewBy {
    display: flex;
    align-items: center;
  span {
    font-size: 14px;
    color: #666;
  }

  .set {
    cursor: pointer;
    padding-left: 40px;
  /*                    color: #999;*/
  i {
    font-size: 25px;
  }
  .speDropdown {
    position: absolute;
    right: 40px;
    background-color: #ffffff;
    z-index: 2000;
    display: none
  }
  .speDropdownshow {
    position: absolute;
    right: 40px;
    background-color: #ffffff;
    z-index: 2000;

  }
  }
  }
  }

  }

</style>
