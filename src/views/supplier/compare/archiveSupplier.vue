<template>
  <div class="compare-overview">
    <h3 class="hd">{{$i.supplier.compareOverview}}</h3>
    <div class="status">
      <div class="btn-wrap">
        <el-button @click="postSupplierRecoverCompare" :disabled="!selectedNumber.length>0"
          v-authorize="'SUPPLIER:COMPARE_ARCHIVE:RECOVER'">{{$i.button.recover}}</el-button>
        <el-button
          @click='download'
          v-authorize="'SUPPLIER:COMPARE_OVERVIEW:DOWNLOAD'"
        >{{$i.common.download}} ({{selectedNumber.length ===0 ? $i.product.all : selectedNumber.length}})</el-button>
      </div>
      <div class="select-wrap">
        <selectSearch :options='options' @inputEnter='inputEnter'
                      v-model='selectSearch'
        ></selectSearch>
        <div>

        </div>
      </div>
    </div>
    <!--from-->
    <!--        表格-->
    <v-table
      :height=500
      :loading='loading'
      :data="tabData"
      :buttons="[{label: 'Detail', type: 2}]"
      @action="detail"
      @change-checked='checked'
      style='marginTop:10px'/>
    <page
      :page-data="pageData"
      @change="handleSizeChange"
      :page-sizes="[50,100,200]"
      @size-change="pageSizeChange"></page>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import {
    dropDown,
    selectSearch,
    VPagination
  } from '@/components/index'
  import {
    VTable
  } from '@/components/index';
  export default {
    name: '',
    data() {
      return {
        selectSearch: '1',
        loading:false,
        options: [{
          id: '1',
          label: this.$i.supplier.compareName
        }, {
          id: '2',
          label: this.$i.supplier.compareItem
        }],
        params: {
          id: '',
          name: "",
          productName: '',  //sku name EN
          recycle: true,
          pn: 1,
          ps: 50,
        },
        tabData: [],
        selectedData: [],
        selectedNumber: [],
        pageData:{},
      }
    },
    components: {
      dropDown,
      VTable,
      selectSearch,
      page:VPagination
    },
    methods: {
      ...mapActions([
        'setMenuLink'
      ]),
      inputEnter(keyWord) {
        if (!keyWord.id) return this.$message({
          message: 'please choose a type',
          type: 'warning'
        });
        if (keyWord.id == 1) {
          this.params.name = keyWord.value
          this.get_data()
        } else {
          this.params.productName = keyWord.value
          this.get_data()
        }
      },
      checked(item) {
        this.selectedData = item
        let number = []
        this.selectedData.forEach(item => {
          number.push(item.id.value);
        });
        this.selectedNumber = number
      },
      detail(e, type) {
        if (type === 1) {
          //modify
          this.$windowOpen({
            url: '/supplier/compareDetail/{type}',
            params: {
              type: 'modify',
              isModify: true,
              id: e.id.value,
              compareName: e.name.value
            },
          });
        } else if (type === 2) {
          //Detail
          this.$windowOpen({
            url: '/supplier/compareDetail/{type}',
            params: {
              type: 'archive',
              id: e.id.value,
              compareName: e.name.value
            },

          });
        }

      },
      get_data() {
        this.loading = true;
        this.$ajax.post(this.$apis.post_supplier_listCompare, this.params)
          .then(res => {
            this.loading = false;
            this.tabData = this.$getDB(this.$db.supplier.compareView, res.datas,item=>{
              _.mapObject(item, val => {
                val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'));
                if(item.productName.value.length >= 1000){
                  item.productName.value.substring(0,1000)+'...'
                }
                return val
              })
            });
            this.pageData=res;
          })
          .catch((res) => {
            this.loading = false;
          })
      },
      postSupplierRecoverCompare(){
        this.$confirm(this.$i.common.sureRecover, this.$i.common.prompt, {
          confirmButtonText: this.$i.common.confirm,
          cancelButtonText: this.$i.common.cancel,
          type: 'warning'
        }).then(() => {
          this.$ajax.post(this.$apis.post_supplier_recoverCompare, this.selectedNumber)
            .then(res => {
              this.selectedNumber = [];
              this.$message({
                type: 'success',
                message: this.$i.common.recoverSuccess
              });
              this.get_data();
            })
        })
      },
      download(){
        let ids=_.pluck(_.pluck(this.selectedData,"id"),'value');
        if(ids.length>0){
          this.$fetch.export_task('UDATA_PURCHASE_EXPORT_SUPPLIER_COMPARE_IDS',{ids:ids});
        }else{
          let params=this.$depthClone(this.params);
          this.$fetch.export_task('UDATA_PURCHASE_EXPORT_SUPPLIER_COMPARE_PARAMS',params);
        }
      },
      handleSizeChange(val) {
        this.params.pn = val;
        this.get_data();
      },
      pageSizeChange(val) {
        this.params.ps = val;
        this.get_data();
      },
    },
    created() {
      this.get_data();
    },
    mounted() {
      this.setMenuLink([
        {
          path: '',
          query: {code: 'PRUCHASE_SUPPLIER'},
          type: 10,
          label: this.$i.common.log
        },
        {
          path: 'compareArchive',
          type: 20,
          label: this.$i.common.archiveSupplier
        },
      ]);
    }
  }

</script>
<style lang="less" scoped>
  .compare-overview {
  .hd {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    color: #666;
  }
  .status {
    display: flex;
    height: 60px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
    justify-content: space-between;
  .btn-wrap {
    display: flex;
    align-items: center;
  span {
    font-size: 14px;
  }
  }
  }
  .select-wrap {
    display: flex;
    align-items: center;
  .select {
    width: 110px;
    margin-right: 5px;
  }
  .el-icon-setting {
    padding-left: 30px;
    font-size: 26px;
    /*                line-height: 60px;*/
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

</style>
