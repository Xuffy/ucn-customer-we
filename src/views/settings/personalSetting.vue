<template>
  <div class='peosonalSetting'>
      <el-form :model="peosonalForm" label-width="190px" class='peosonalForm'>
                <el-row class="speZone">
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="email" :label="$t('setting.personal.email')">                          
                            <el-input size="mini" v-model="peosonalForm.email"></el-input>
                        </el-form-item>
                    </el-col>
                   <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="username" :label="$t('setting.personal.username')">
                            <el-input size="mini" v-model="peosonalForm.username"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="password" :label="$t('setting.personal.password')">
                            <el-input size="mini" v-model="peosonalForm.password"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="tel" :label="$t('setting.personal.tel')">
                            <el-input size="mini" v-model="peosonalForm.tel"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="gender":label="$t('setting.personal.gender')">
                            <el-select size="mini" v-model="peosonalForm.gender" placeholder="请选择">
<!--
                                <el-option
                                        v-for="item in readilyAvailableOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
-->
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="birthday":label="$t('setting.personal.birthday')">                          
                                <el-date-picker
                                      v-model="value1"
                                      type="date"
                                      placeholder="选择日期">
                                    </el-date-picker>                          
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="language":label="$t('setting.personal.language')">
                            <el-select size="mini" v-model="peosonalForm.language" placeholder="请选择">
<!--
                                <el-option
                                        v-for="item in readilyAvailableOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
-->
                            </el-select>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="department":label="$t('setting.personal.department')">
                            <el-select size="mini" v-model="peosonalForm.department" placeholder="请选择">
<!--
                                <el-option
                                        v-for="item in readilyAvailableOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
-->
                            </el-select>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item prop="role":label="$t('setting.personal.role')">
                            <el-select size="mini" v-model="peosonalForm.role" placeholder="请选择">
<!--
                                <el-option
                                        v-for="item in readilyAvailableOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
-->
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
     <div class="button_div">
          <el-button >Modify</el-button>
          <el-button  type="danger">Cancel</el-button>
     </div>
      
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
          }

      }
    },
    created() {
    },
    methods: {

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
</style>