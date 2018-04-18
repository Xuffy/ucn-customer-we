<template>
  <div class='peosonalSetting'>
    <el-form :model="peosonalForm" label-width="190px" class='peosonalForm'>
        <el-row>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="email" label="email">                          
                    <el-input style="max-width:130px;vertical-align: middle"></el-input>
                    <el-button style=" vertical-align: middle" @click="dialogVisible = true">Replace</el-button>
                </el-form-item>
             </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="email" label="User Name">                          
                    <el-input style="max-width:200px"></el-input>
                </el-form-item>
             </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="email" label="Password">                          
                    <el-input style="max-width:130px;vertical-align: middle"></el-input>
                    <el-button style=" vertical-align: middle" @click="dialogVisible = true">Replace</el-button>
                </el-form-item>
             </el-col>
             <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="email" label="Tel">                          
                    <el-input style="max-width:200px"></el-input>
                </el-form-item>
             </el-col>
           
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                 <el-form-item label="活动时间">
                    <div style="display: flex;max-width:200px;">
                        <el-date-picker type="date" placeholder="选择日期" style="max-width:300px;"></el-date-picker>
                    </div>
                 </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="language" label="language">
                    <el-select v-model="peosonalForm.language" placeholder="请选择">
                        <!-- <el-option
                                v-for="item in readilyAvailableOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option> -->
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="department" label="department">
                    <el-select  v-model="peosonalForm.department" placeholder="请选择">
                        <!-- <el-option
                                v-for="item in readilyAvailableOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option> -->
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="role" label="role">
                    <el-select  v-model="peosonalForm.role" placeholder="请选择">
                        <!-- <el-option
                                v-for="item in readilyAvailableOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option> -->
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item prop="gender" label="gender">
                    <el-select v-model="peosonalForm.gender" placeholder="请选择" >
                        <!-- <el-option
                                v-for="item in readilyAvailableOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option> -->
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>       
    </el-form>
     <div class="button_div">
          <el-button >Modify</el-button>
          <el-button  type="danger">Cancel</el-button>
     </div>
    <el-dialog
            class="speDialog"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
         <el-form :model="form">
           <el-form-item label="Old Password" :label-width="formLabelWidth">
               <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="New Password" :label-width="formLabelWidth">
               <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm password" :label-width="formLabelWidth">
               <el-input auto-complete="off"></el-input>
            </el-form-item>
         </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">OK</el-button>
            <el-button @click="dialogVisible = false">Cancel</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'peosonalSetting',
    data() {
      return {
          peosonalForm:{
              email:'',
              username:'',
              password:'',
              tel:'',
              gender:'',
              birthday:'',
              language:'',
              department:'',
              role:'',
          },
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '140px'
      }
    },
    created() {
    },
    methods: {
        getUserProfile(){
            this.$ajax.get(this.$apis.get_userProfile)
            .then(res => {
                this.peosonalForm = res.content
            });
        }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button_div{
        display: flex;
        justify-content: center;
        margin-top: 60px;
        margin-bottom: 80px;
    }
    .peosonalForm{
      
    }
    .peosonalSetting{      
        padding-top: 20px;
    }
    .el-input{
        max-width: 400px;
    }
    .el-input--small {
        font-size: 0;
    }   
</style>