<template>
    <div class="responsibility">
         <div>
              <div class="r_title">
                 {{$t('order.responsibility.responsibility')}}
              </div>
              <div class="r_table">
   <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="item"
        label="item"
        width="140">
      </el-table-column>
   <el-table-column prop="item1" :label="$t('order.responsibility.NeedLabelDesignInfoDate')" width="240"> 
         <template slot-scope="scope" >
               <el-date-picker
                  v-model="scope.row.item1"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2'
                  :disabled='scope.row.item1||disabled'
                  
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item1"  :disabled='scope.row.item1||disabled' v-else>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item2" :label="$t('order.responsibility.LableDesignDate')" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item2"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2'
                  :disabled=true
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item2" v-else :disabled=true>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item3" :label="$t('order.responsibility.DesignNeedConfirmDate')" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item3"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2' 
                   :disabled='scope.row.item3||disabled'              
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item3"   :disabled='scope.row.item3||disabled' v-else>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item4" :label="$t('order.responsibility.ReceiveSampleDate')" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item4"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2'
                  :disabled=true
                  
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item4" v-else :disabled=true>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item5" :label="$t('order.responsibility.SampleNeedConfirmDate')" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item5"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2'
                 :disabled='scope.row.item5||disabled'
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item5" :disabled='scope.row.item5||disabled' v-else>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item6" :label="$t('order.responsibility.OtherDate')" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item6"
                  type="datetime"
                  placeholder="选择日期时间"
                  v-if='scope.$index!=2'
                  :disabled='scope.row.item6||disabled'
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item6" :disabled='scope.row.item6||disabled' v-else>
                </el-input>
        </template>
</el-table-column>
</el-table>
</div>
</div>
</div>
</template>
<script>
    export default {
        name: 'responsibility',
        components: {

        },
        props:{
            disabled:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                tableData: [{
                    item: 'Me',
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                }, {
                    item: 'Supplier',
                    item1: '',
                    item2: '',
                    item3: '1',
                    item4: '',
                    item5: '',
                    item6: '',
                }, {
                    item: 'Remark',
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                }, {
                    item: 'Actual Date',
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                }],
                value1: '',
            }
        },
        methods: {

        },
       　watch:{
　
　　　　　　},
    }

</script>

<style scoped>
    .r_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;
    }

    .el-date-picker {
        width: 220px;
    }

</style>
