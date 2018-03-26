<template>
  <div class="quickLink">
    <h3 class="ucn-content-title" style="display: inline-block">Quick Link</h3>
    <el-button size="mini" type="primary" icon="el-icon-plus"
               style="display: inline-block;margin-left: 30px!important;"
               @click="dialogAdd.show = true"></el-button>
    <br/>
    <el-button plain size="mini">Create Inquiry</el-button>
    <el-button plain size="mini">Create Inquiry</el-button>
    <el-button plain size="mini">Create Inquiry</el-button>
    <el-button plain size="mini">Create Inquiry</el-button>
    <el-button plain size="mini">Create</el-button>
    <el-button size="mini">Create Inquiry</el-button>
    <el-button size="mini">Create Inquiry</el-button>
    <el-button size="mini">Create Inquiry</el-button>

    <el-dialog title="Add Quick Link" :visible.sync="dialogAdd.show">
      <el-checkbox-group v-model="checkedList">
        <el-checkbox v-for="item in dataList" :label="item" :key="item">{{item}}</el-checkbox>
      </el-checkbox-group>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd.show = false">取 消</el-button>
        <el-button type="primary" @click="dialogAdd.show = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'VTableData',
    data() {
      return {
        dialogAdd: {
          show: false,
        },
        checkedList: [],
        dataList: [
          'Create Inquiry1',
          'Create Inquiry2',
          'Create Inquiry3',
          'Create Inquir5',
          'Create Inquiry41',
          'Create Inquiry15',
          'Create Inquiry16',
          'Create Inquiry17',
          'Create Inquiry18',
          'Create Inquiry19',
        ]
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quickLink .el-button {
    margin-top: 10px;
  }
</style>
