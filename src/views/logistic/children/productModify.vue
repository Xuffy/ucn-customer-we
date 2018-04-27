<template>
  <el-dialog title="收货地址" :visible.sync="showDialog">
    <v-table :data="productList" @action="action"
      @tabSplite="tabSplite" @tabAppend="tabAppend" :buttons="productbButtons">
    </v-table>
    <div slot="footer" class="dialog-footer">
      <el-button @click="showDialog = false">取 消</el-button>
      <el-button type="primary" @click="showDialog = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { VTable } from '@/components/index'

export default {
  components: {
    VTable
  },
  data () {
    return {
      showDialog: true
    }
  },
  methods: {
    openModify (param) {
      this.showDialog = true
    }
  }
}
</script>
<style lang="less">
  .modify {
    background-color: #ccc;
    position: fixed;
    // z-index: 100;
    top: 30%;
    left: 25%;
    width: 50%;
    height: 40%;
  }
</style>
