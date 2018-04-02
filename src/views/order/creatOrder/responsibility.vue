<template>
    <div class="responsibility">
         <div>
              <div class="r_title">
                  Responsibility 
              </div>
              <div class="r_table">
                   <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="item"
                        label="item"
                        width="140">
                      </el-table-column>
                      <el-table-column
                        prop="item1"
                        label="NeedLabel/Design Info Date"
                        width="200">
                      </el-table-column>
                      <el-table-column
                        prop="item2"
                        label="Lable/Design Date"
                         width="200"
                        >
                      </el-table-column>
                       <el-table-column
                        prop="item3"
                        label="Design Need Confirm Date"
                        width="200">
                      </el-table-column>
                       <el-table-column
                        prop="item4"
                        label="Receive Sample Date"
                        width="200">
                      </el-table-column>
                      <el-table-column
                        prop="item5"
                        label="SampleNeedConfirmDate"
                        width="200">
                      </el-table-column>
                      <el-table-column
                        prop="item6"
                        label="OtherDate"
                        width="200">
                      </el-table-column>
                    </el-table>
              </div>
         </div>
    </div>
</template>
<script>
    export default {
        name:'responsibility',
        components: {

        },
        data(){
            return {
               tableData: [{
                    item: 'Me',
                    item1: '',
                    item2: '',
                    item3:'',
                    item4:'',
                    item5:'',
                    item6:'',
                  },{
                    item: 'Supplier',
                    item1: '',
                    item2: '',
                    item3:'',
                    item4:'',
                    item5:'',
                    item6:'',
                  },{
                    item: 'Remark',
                    item1: '',
                    item2: '',
                    item3:'',
                    item4:'',
                    item5:'',
                    item6:'',
                  },{
                    item: 'Actual Date',
                    item1: '',
                    item2: '',
                    item3:'',
                    item4:'',
                    item5:'',
                    item6:'',
                  }]
            }
        }
    }
</script>
<style scoped>
     .r_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom:1px solid #ccc;
         padding: 0 15px;
    }

</style>