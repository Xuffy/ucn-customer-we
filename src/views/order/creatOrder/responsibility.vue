<template>
    <div class="responsibility">
         <div>
              <div class="r_title">
                 {{$i.responsibility}}
              </div>
              <div class="r_table">
   <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="type"
        label="Type"
        width="240">
      </el-table-column>
<!--
<el-table-column prop="item1"  :label="$i.NeedLabelDesignInfoDate"  width="240"> 
         <template slot-scope="scope"  >
               <el-date-picker
                  v-model="scope.row.item1"
                  type="datetime"
                  placeholder=" "
                  v-if='scope.$index!=2'   
                  :disabled="scope.$index==1||disabled"                               
                  >    
                </el-date-picker>
                <el-input v-model="scope.row.item1" v-else :disabled='disabled' >
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item2" :label="$i.LableDesignDate" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item2"
                  type="datetime"
                  placeholder=""
                  v-if='scope.$index!=2'
                 :disabled='scope.$index==1||scope.$index==0||disabled'
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item2" v-else :disabled='disabled' >
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item3" :label="$i.DesignNeedConfirmDate" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item3"
                  type="datetime"
                  placeholder=""
                  v-if='scope.$index!=2' 
                  :disabled='scope.$index==1||disabled'                        
                  >              
                </el-date-picker>
                <el-input v-model="scope.row.item3"  :disabled='disabled' v-else>
               
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item4" :label="$i.ReceiveSampleDate" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item4"
                  type="datetime"
                  placeholder=""
                  v-if='scope.$index!=2'
                :disabled='scope.$index==1||scope.$index==0||disabled'
                  
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item4" v-else :disabled='disabled'>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item5" :label="$i.SampleNeedConfirmDate" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item5"
                  type="datetime"
                  placeholder=""
                  v-if='scope.$index!=2'
                 :disabled='scope.$index==1||disabled'
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item5" :disabled='disabled'  v-else>
                </el-input>
        </template>
</el-table-column>
<el-table-column prop="item6" :label="$i.OtherDate" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.item6"
                  type="datetime"
                  placeholder=""
                  v-if='scope.$index!=2'
                 :disabled='scope.$index==1||disabled'
                  >
                </el-date-picker>
                <el-input v-model="scope.row.item6" :disabled='disabled' v-else>
                </el-input>
        </template>
</el-table-column>
-->
<el-table-column prop="customer" label="Me" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.customer.value"
                  type="datetime"
                  placeholder=" "                                 :disabled="scope.$index==1||scope.$index==3||disabled||scope.row.customer.edit===false"                           
                  >    
                </el-date-picker>
                
        </template>
</el-table-column>
<el-table-column prop="supplier" label="Supplier" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.supplier.value"
                  type="datetime"
                  placeholder=""             
                   :disabled=true  
                  >
                </el-date-picker>
               
        </template>
</el-table-column>
<el-table-column prop="remark" label="Remark" width="240">
    <template slot-scope="scope">
            <el-input
                  v-model="scope.row.remark.value"               :disabled='disabled||scope.row.customer.edit===false'           
            ></el-input>
        </template>
</el-table-column>
<el-table-column prop="actualDt" label="Actual Date" width="240">
    <template slot-scope="scope">
               <el-date-picker
                  v-model="scope.row.actualDt.value"
                  type="datetime"
                  placeholder=""                 :disabled='disabled||scope.row.customer.edit===false'             
                  >
                </el-date-picker>
               
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
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tableData: [{
                    type: 'NeedLabelDesignInfoDate',
                    customer: {
                        value: '1',
                        edit: false
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },

                    actualDt: {
                        value: '',
                        edit: true
                    },
                }, {
                    type: 'LableDesignDate',
                    customer: {
                        value: '',
                        edit: true
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },

                    actualDt: {
                        value: '',
                        edit: true
                    },

                }, {
                    type: 'DesignNeedConfirmDate',
                    customer: {
                        value: '',
                        edit: true
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },

                    actualDt: {
                        value: '',
                        edit: true
                    },

                }, {
                    type: 'ReceiveSampleDate',
                    customer: {
                        value: '',
                        edit: true
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },

                    actualDt: {
                        value: '',
                        edit: true
                    },

                }, {
                    type: 'SampleNeedConfirmDate',
                    customer: {
                        value: '',
                        edit: true
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },

                    actualDt: {
                        value: '',
                        edit: true
                    },

                }, {
                    type: 'OtherDate',
                    customer: {
                        value: '',
                        edit: true
                    },
                    supplier: {
                        value: '',
                        edit: true
                    },

                    remark: {
                        value: '',
                        edit: true
                    },
                    actualDt: {
                        value: '',
                        edit: true
                    },
                }],
            }
        },
        methods: {

        },
        　watch: {　　　　　　　},
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

    .r_table {
        width: 100%;
        overflow: auto;
    }

</style>
