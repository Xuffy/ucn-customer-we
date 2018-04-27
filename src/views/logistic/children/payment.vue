<template>
  <div>
    <el-button type="primary" size="mini">{{ $i.applyForPayment }}</el-button>
    <el-table :data="tableData" border style="width: 100%; margin-top: 20px" show-summary :sum-text="$i.sum">
      <el-table-column type="index" width="50" align="center"/>
      <el-table-column :label="$i.paymentNumber" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.paymentNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.paymentItem" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.paymentItem" v-if="edit"></el-input>
          <span v-else>{{ scope.row.paymentItem }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.estPayDate" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.estPayDate" v-if="edit"></el-input>
          <span v-else>{{ scope.row.estPayDate }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.estAmount" prop="estAmount" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.estAmount" v-if="edit"></el-input>
          <span v-else>{{ scope.row.estAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.actPayDate" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.actPayDate" v-if="edit"></el-input>
          <span v-else>{{ scope.row.actPayDate }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.actAmount" prop="actAmount" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.actAmount" v-if="edit"></el-input>
          <span v-else>{{ scope.row.actAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.currency" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.currency" v-if="edit"></el-input>
          <span v-else>{{ scope.row.currency }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.avilable" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.avilable" v-if="edit"></el-input>
          <span v-else>{{ scope.row.avilable }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$i.operation" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">修改</el-button>
          <el-button size="mini" type="warning">恢复</el-button>
          <el-button size="mini" type="success">确认</el-button>
          <el-button size="mini" type="danger">作废</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    edit: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
  
</style>
