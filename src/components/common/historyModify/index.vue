<template>
  <div class="ucn-history-modify">
    <el-dialog
      title="提示"
      :visible.sync="visible">

      <el-table
        :data="dataList"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>

      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import testData from './test'

  // testData = testData.content.details;

  export default {
    name: 'VHistoryModify',
    components: {},
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      visible: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        dataList: []
      }
    },
    watch: {},
    mounted() {
      this.dataList = testData.content.details;
      console.log(this.dataList)
      console.log(this.$getDB(this.$db.inquiryOverview.productInfo, this.dataList))
    },
    methods: {}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
