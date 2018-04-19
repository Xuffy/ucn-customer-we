<template>
  <div class="peosonalSetting">
    <el-form label-width="190px" ref="form" :model="form" >
        <el-row>
            <el-col :span="12">
                <el-form-item :label="$i.personalInfo.email">                          
                    <el-input style="max-width:120px;vertical-align: middle" v-model="form.email"></el-input>
                    <el-button style=" vertical-align: middle" @click="dialogVisibleO = true">Replace</el-button>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item :label="$i.personalInfo.userName">                          
                    <el-input style="max-width:200px" v-model="form.userName"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item  label="Password">                          
                    <el-input style="max-width:130px;vertical-align: middle" ></el-input>
                    <el-button style=" vertical-align: middle" @click="dialogVisible = true">Replace</el-button>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item  :label="$i.personalInfo.tel">                          
                    <el-input style="max-width:200px" v-model="form.tel"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item :label="$i.personalInfo.birthday">
                    <div style="display: flex;max-width:213px;">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday"  style="max-width:300px;"></el-date-picker>
                    </div>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="department" :label="$i.personalInfo.department">
                     <el-select v-model="form.deptName" placeholder="请选择" >
                        <el-option
                                v-for="item in departmentsOptions"
                                :key="item.deptId"
                                :label="item.deptName"
                                :value="item.deptName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="language" :label="$i.personalInfo.language">
                    <el-select v-model="form.lang" placeholder="请选择">
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
                <el-form-item prop="role" :label="$i.personalInfo.role">
                    <el-select v-model="form.role" placeholder="请选择" >
                        <el-option
                                v-for="item in roleOptions"
                                :key="item.roleId"
                                :label="item.roleName"
                                :value="item.roleName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="gender" :label="$i.personalInfo.gender">
                    <el-select v-model="form.gender" placeholder="please input" >
                        <el-option
                                v-for="item in genderOptions"
                                :key="item.key"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <div class="button_div">
        <el-button @click="putUserProfile">{{$i.baseText.modify}}</el-button>
        <el-button  type="danger">{{$i.baseText.cancel}}</el-button>
    </div>
    <el-dialog
        class="speDialog"
        :visible.sync="dialogVisibleO"
        width="30%"
        :before-close="handleClose">
        <el-form :model="form">
        <el-form-item label=" Old Email" :label-width="formLabelWidth">
            <el-input auto-complete="off" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="New Email" :label-width="formLabelWidth">
            <el-input auto-complete="off" v-model="modifyEmail.newEmail"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" >{{$i.baseText.ok}}</el-button>
            <el-button @click="dialogVisibleO = false">{{$i.baseText.cancel}}</el-button>
        </span>
    </el-dialog>
 </div>
</template>

<script>
  export default {
    name: 'peosonalSetting',
    data() {
      return {
          form:{
              email:'',
              userName:'',
              password:'',
              tel:'',
              gender:'', //0：男，1：女，2：未知性
              birthday:'',
              lang:'',
              deptName:'',
              roleName:'',
          },
          modifyPass:{
              password:'',
              newPassword:'',
              comfirmNewPassword:''
          },
          modifyEmail:{
             newEmail:''

          },
          genderOptions:[{
            value: '男',
            label: 'Man',
            key: 0
            }, {
            value: '女',
            label: 'Woman',
            key: 1
            }, {
            value: '未知',
            label: 'Unknown',
            key: 2 
          }],
        dialogVisible: false,
        dialogVisibleO:false,
        formLabelWidth: '140px',
        departmentsOptions:[],
        roleOptions:[]
      }
    },
    methods: {
        //获取角色 部门
        getDepartment(){
            this.$ajax.get(this.$apis.get_department)
            .then(res => {
                this.departmentsOptions = res.content
            });
        },
        getRole(){
            this.$ajax.get(this.$apis.get_role)
            .then(res => {
                this.roleOptions = res.content
            });
        },
        getUserProfile(){
            this.$ajax.get(this.$apis.get_userProfile)
            .then(res => {
                this.peosonalForm = res.content
            });
        },
        putUserProfile(){
            const params = {
                "userName": this.form.userName,
                "tel": this.form.tel,
                "gender": this.form.gender,
                "birthday": this.form.birthday,
                "lang": this.form.lang,
                "deptId": this.form.deptId,
                "roleId": this.form.roleId
            }
            this.$ajax.put(this.$apis.put_userProfile,params)
            .then(res => {
                this.form = res.content
            });
        },
        putUserPassword(){
            const params = this.modifyPass
            this.$ajax.put(this.$apis.put_userProfilePassword,params)
            .then(res => {
               if(res.status = 'SUCCESS'){
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
               }
            });
        },
        putUserEmail(){
            const params = this.modifyEmail
            this.$ajax.put(this.$apis.put_userProfileEmail,params)
            .then(res => {
                if(res.status = 'SUCCESS'){
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                }
            });
        },
        handleClose(){

        }
    },
    created(){
        // this.getUserProfile()
        this.getDepartment();
        // this.getRole()
    }
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
    .el-input--small {
        font-size: 0;
    }   
</style>