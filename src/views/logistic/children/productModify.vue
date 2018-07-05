<template>
  <v-table code="ulogistics_PlanDetail" :selection="false" :data="tableData"></v-table>
</template>
<script>
import table from '@/components/common/table/index'

export default {
  props: {
    containerType:[Object,Array],
    productInfoModifyStatus: {
      type: Number,
      default: 0
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "v-table":table
  },
  data () {
    return {
      modify: true,
      modifyArray: [],
      productModifyObj:{}
    }
  },
  watch:{
    tableData(){
      this.createModifyData()
    }
  },
  mounted(){
    this.createModifyData()
  },
  methods: {
    currentChange(key,v){
      this.productModifyObj[key] = v;
      this.$emit('productModifyfun',this.productModifyObj);
    },
    createModifyData () {
      if (!this.tableData.length) return
      let flag = false;
      if (this.productInfoModifyStatus === 1) {
        flag = true;
      }else{
        flag = false;
      }
      _.mapObject(this.tableData[0], (value, key) => {
        key === 'toShipCartonQty' && (value.edit = flag)
        key === 'toShipQty' && (value.edit = flag)
        return value
      })
    }
  },
  // methods: {
  //   createModifyData () {
  //     // this.modifyArray = JSON.parse(JSON.stringify(this.tableData))
  //     if (this.productInfoModifyStatus === 1) {
  //       const copyTableData = JSON.parse(JSON.stringify(this.tableData))
  //       _.mapObject(copyTableData[0], (value, key) => {
  //         key === 'toShipCartonQty' && (value.edit = true)
  //         key === 'toShipQty' && (value.edit = true)
  //         return value
  //       })
  //       this.modifyArray = copyTableData
  //     } else {
  //       this.modifyArray = this.tableData
  //     }
  //   }
  // }
}
</script>
<style lang="less">
.table {
  height: 400px;
  overflow-y: auto;
}
.filter {
  float: right;
}
</style>
