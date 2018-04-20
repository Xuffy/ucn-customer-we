<template>
    <div class="department-setting">
        <div class="title">
            Department Setting
        </div>
        <div class="body">
            <el-row>
                <el-col :offset="1" :span="7">
                    <div class="card department">
                        <div class="title">Department</div>
                        <div class="handler">
                            <el-row>
                                <el-col :span="8">
                                    <el-button @click="addDepartment" size="small" type="primary">Add</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-input
                                            size="small"
                                            placeholder="请输入"
                                            v-model="searchDepartment"
                                            clearable>
                                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="list">
                            <div class="list-title">All <span>({{departmentUserTotal}}人)</span></div>
                            <el-tree
                                    class="departmentTree"
                                    ref="departmentTree"
                                    :data="departmentData"
                                    :props="departmentProps"
                                    node-key="deptId"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :render-content="renderDepartment"
                                    :filter-node-method="filterDepartment"
                                    @node-click="departmentClick"
                                    >
                            </el-tree>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="card role">
                        <div class="title">Role</div>
                        <div class="handler">
                            <el-row>
                                <el-col :span="8">
                                    <el-button :disabled="!userData.deptId" @click="addRole" size="small" type="primary">Add</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-input
                                            size="small"
                                            placeholder="请输入"
                                            v-model="searchRole"
                                            clearable>
                                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="list">
                            <div class="list-title">All <span>({{roleUserTotal}}人)</span></div>
                            <el-tree
                                    class="speTree"
                                    ref="roleTree"
                                    :data="roleData"
                                    :props="roleProps"
                                    show-checkbox
                                    node-key="roleId"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :render-content="renderRole"
                                    :filter-node-method="filterRole"
                                    @check="roleCheckClick"
                                    @node-click="roleClick">
                            </el-tree>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="card">
                        <div class="title">Privs</div>
                        <div class="handler">
                            <el-row>
                                <el-col :span="24">
                                    <el-input
                                            size="small"
                                            placeholder="请输入"
                                            v-model="searchPrivs">
                                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="list">
                            <el-tree
                                    :data="data2"
                                    show-checkbox
                                    node-key="id"
                                    :default-expand-all="true"
                                    :props="defaultProps">
                            </el-tree>

                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="footer">
            <div class="title">Belonging Users</div>
            <div class="content">
                <el-form ref="userData" :model="userData" label-width="100px">
                    <el-row>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item prop="email" :label="$i.departmentSetting.email">
                                <el-input size="mini" v-model="userData.email"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item prop="userName" :label="$i.departmentSetting.userName">
                                <el-input size="mini" v-model="userData.userName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item prop="gender" :label="$i.departmentSetting.gender">
                                <el-select size="mini" v-model="userData.gender" placeholder="请选择">
                                    <el-option
                                            v-for="item in genderOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item prop="status" :label="$i.departmentSetting.status">
                                <el-select size="mini" v-model="userData.status" placeholder="请选择">
                                    <el-option
                                            v-for="item in statusOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="btn">
                    <el-button @click="searchUser" :loading="disabledSearch" class="serachBtn" type="primary">{{$i.departmentSetting.search}}</el-button>
                </div>


                <v-table
                        class="speTable"
                        ref="vTable"
                        :data="tableDataList"
                        :buttons="setButton"
                        @change-checked="changeChecked"
                        @action="btnClick"></v-table>


            </div>
        </div>

        <el-dialog
                class="speDialog"
                title="修改"
                :visible.sync="editUserVisible"
                width="30%">
            <el-form :model="editUser">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="editUser.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="editUser.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editUserVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUserVisible = false">确 定</el-button>
            </div>
            <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="editUserVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="editUserVisible = false">下架产品</el-button>-->
            <!--</span>-->
        </el-dialog>
    </div>
</template>

<script>

    import VTable from '@/components/common/table/index'
    import axios from 'axios'

    export default {
        name: "department-setting",
        components:{
            VTable
        },
        data() {
            return {
                //基础配置
                disabledSearch:false,
                editUserVisible:false,
                formLabelWidth:'100px',
                allowRoleGetData:false,             //是否允许切换role的选中状态来获取数据
                /**
                 * Department data定义
                 * */
                departmentData: [],
                departmentProps:{
                    label:'deptName',
                },
                departmentUserTotal:0,          //department总人数

                /**
                 * Role data定义
                 * */
                roleData:[
                    {
                        id:1,
                        roleName:'全部',
                        children:[]
                    }
                ],
                roleProps:{
                    label:'roleName'
                },
                roleUserTotal:0,                //role总人数

                /**
                 * 搜索内容
                 * */
                searchDepartment:'',            //搜索的部门名称
                searchRole:'',                  //搜索的role名称
                searchPrivs: '',                //搜索的priv的名称

                /**
                 * 底部user数据绑定
                 * */
                userData:{
                    email:'',
                    userName:'',
                    gender:null,
                    status:null,
                    ps:50,
                    pn:1,
                    deptId:null,
                    roleIds:null
                },
                tableDataList:[],
                editUser:{
                    id: 0,
                    deptId: 0,
                    roleIds: 0,
                    userName: "string",
                    lang: "string",
                    email: "string",
                    tel: "string",
                    gender: 0,
                    birthday: "string",
                    remark: "string"
                },
                /**
                 * 人造字典表
                 * */
                genderOptions:[
                    {
                        label:'男',
                        value:0,
                    },
                    {
                        label:'女',
                        value:1,
                    },
                    {
                        label:'未知性别',
                        value:2,
                    },
                ],
                statusOptions:[
                    {
                        label:'未激活',
                        value:0,
                    },
                    {
                        label:'已激活',
                        value:1,
                    },
                    {
                        label:'禁用',
                        value:2,
                    },
                ],

                data2: [
                    {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],

                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            }
        },
        methods: {
            /**
             * render按钮生成
             * */
            renderDepartment(h, { node, data, store }) {
                if(!data.children){
                    return (
                        <span class="custom-tree-node">
                            <span>{`${node.label} (${node.data.deptUserCount}人)`}</span>
                            <span>
                                <el-button
                                    class="treeBtn"
                                    type="text"
                                    icon="el-icon-edit"
                                    on-click={ () => this.modifyDepartment(data,node) }></el-button>
                                <el-button
                                    class="treeBtn"
                                    type="text"
                                    icon="el-icon-delete"
                                    on-click={ () => this.deleteDepartment(data,node) }></el-button>
                            </span>
                        </span>
                    );
                }else{
                    return (
                        <span class="custom-tree-node">
                            <span>{node.label}</span>
                        </span>
                    );
                }
            },
            renderRole(h, { node, data, store }) {
                if(!data.children){
                    return (
                        <span class="custom-tree-node">
                            <span>{`${node.label} (${node.data.roleUserCount}人)`}</span>
                            <span>
                                <el-button
                                    class="treeBtn"
                                    type="text"
                                    icon="el-icon-edit"
                                    on-click={ () => this.modifyRole(data,node) }></el-button>
                                <el-button
                                    class="treeBtn"
                                    type="text"
                                    icon="el-icon-delete"
                                    on-click={ () => this.deleteRole(data,node) }></el-button>
                            </span>
                        </span>
                    );
                }else{
                    return (
                        <span class="custom-tree-node">
                            <span>{node.label}</span>
                        </span>
                    );
                }
            },

            /**
             * 获取页面数据
             * */
            getDepartmentData(){
                this.$ajax.get(this.$apis.get_departmentOverview).then(res=>{
                    this.departmentData=res;
                    this.departmentData.forEach(v=>{
                        this.departmentUserTotal+=v.deptUserCount;
                    });
                });
            },
            getDepartmentUser(){
                this.$ajax.post(this.$apis.get_departmentUser,{
                    ps: 50,
                    pn: 1,
                    deptId: null,
                    roleIds: null,
                    userName: '',
                    email: '',
                    gender:null,
                    status:null
                }).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.setting.department, res.datas);
                }).catch(err=>{

                });
            },
            setButton(e){
                // console.log(e,'????')
                return [
                    {label:'Edit',type:1},
                    {label:e.tel.value==='13158687582'?'Enable':'Disabled',type:2}
                ]
            },

            /**
             * tree节点点击事件
             * */
            departmentClick(data,node,com){
                //选中部门就让他为false，避免触发全选时的多次重复事件
                this.allowRoleGetData=false;
                this.userData.deptId=data.deptId;
                //清空底部搜索条件
                this.userData.roleIds=null;
                this.userData.pn=1;
                this.userData.email='';
                this.userData.userName='';
                this.userData.gender=null;
                this.userData.status=null;
                this.roleData[0].children=this.$copyArr(data.deptRoles);
                this.roleUserTotal=0;
                this.departmentData.forEach(v=>{
                    if(this.userData.deptId===v.deptId){
                        v.deptRoles.forEach(m=>{
                            this.roleUserTotal+=m.roleUserCount;
                        })
                    }
                });
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(255, 255, 255, 0.7)',
                    target:'.role'
                });
                this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.setting.department, res.datas);
                    this.$nextTick(()=>{
                        this.roleData[0].children.forEach(v=>{
                            this.$refs.roleTree.setChecked(v,true,false)
                        });
                        loading.close();
                    });
                }).catch(err=>{

                });
            },
            roleCheckClick(){
                let checkedNode=this.$refs.roleTree.getCheckedNodes(true);
                let id=[];
                checkedNode.forEach(v=>{
                    if(!v.children){
                        id.push(v.roleId);
                    }
                })
                if(id.length){
                    this.userData.roleIds=id;
                }else{
                    this.userData.roleIds=[];
                }
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(255, 255, 255, 0.7)',
                    target:'.speTable'
                });
                this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(res=>{
                    this.tableDataList = this.$getDB(this.$db.setting.department, res.datas);
                    loading.close();
                }).catch(err=>{

                });




                // if(e.children){
                //     //表示点的是全选
                //
                //     let id=[];
                //     checkedNode.forEach(v=>{
                //         id.push(v.roleId)
                //     });
                //     if(id.length){
                //         this.userData.roleIds=id;
                //     }else{
                //         this.userData.roleIds=null;
                //     }
                //     console.log(this.userData)
                // }else{
                //     //表示点的单选
                //     console.log('单选')
                // }
            },
            roleClick(data,node,com){
                // console.log(data)
                // let me=this;
                // let id='';
                // if(data.children){
                //     return;
                // }
                // me.$refs.roleTree.setChecked(data,!node.checked,false)
                // setTimeout(()=>{
                //     let checkedNodes=me.$refs.roleTree.getCheckedNodes(true);
                //     checkedNodes.forEach(v=>{
                //         id=v.roleId;
                //     })
                //     console.log(id,'id')
                //
                //     me.userData.roleId=id;
                //     // console.log(me.userData,"????")
                // },0)
            },

            /**
             * add事件
             * */
            addDepartment(){
                this.$prompt('请输入Department名称', 'Add Department', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    closeOnHashChange:false,
                    inputValidator:(data)=>{
                        if(!data || data===''){
                            return '请输入';
                        }
                    }
                }).then(({ value }) => {
                    let repeat=false;
                    this.departmentData.forEach(v=>{
                        if(v.deptName===value){
                            repeat=true;
                        }
                    });
                    if(repeat){
                        this.$message({
                            message: '部门名称不能重复',
                            type: 'warning'
                        });
                    }else{
                        const loading = this.$loading({
                            lock: true,
                            text: 'Loading',
                            background: 'rgba(255, 255, 255, 0.7)',
                            target:'.department'
                        });
                        this.$ajax.post(this.$apis.get_department,{
                            deptName:value
                        }).then(res=>{
                            this.$message({
                                message: '新增成功',
                                type: 'success'
                            });
                            this.$ajax.get(this.$apis.get_departmentOverview).then(res=>{
                                this.departmentUserTotal=0;
                                this.departmentData=res;
                                this.departmentData.forEach(v=>{
                                    this.departmentUserTotal+=v.deptUserCount;
                                });
                                loading.close();
                            }).catch(err=>{

                            });
                        }).catch(err=>{

                        });
                    }
                }).catch(() => {

                });
            },
            addRole(){
                this.$prompt('请输入Role', 'Add Role', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator:(data)=>{
                        if(!data || data===''){
                            return '请输入';
                        }
                    }
                }).then(({ value }) => {
                    let id=this.roleData[0].children+1;

                    // this.$refs.departmentTree.insertBefore({
                    //     id:id,
                    //     label:value,
                    // },1);

                    this.roleData[0].children.unshift({
                        id:id,
                        label:value,
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },

            /**
             * 筛选事件
             * */
            filterDepartment(value, data) {
                if (!value) return true;
                return data.deptName.indexOf(value) !== -1;
            },
            filterRole(value, data){
                if (!value) return true;
                return data.roleName.indexOf(value) !== -1;
            },

            /**
             * 编辑事件
             * */
            modifyDepartment(e,node){
                this.$prompt('请输入Department', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:e.deptName,
                }).then(({ value }) => {
                    let repeat=false;
                    this.departmentData.forEach(v=>{
                        if(v.deptName===value){
                            repeat=true;
                        }
                    });
                    if(repeat){
                        this.$message({
                            message: '部门名称不能重复',
                            type: 'warning'
                        });
                    }else{
                        const loading = this.$loading({
                            lock: true,
                            text: 'Loading',
                            background: 'rgba(255, 255, 255, 0.7)',
                            target:'.department'
                        });


                        this.$ajax.put(this.$apis.get_department,{
                            deptId:e.deptId,
                            deptName:value
                        }).then(res=>{

                        }).catch(err=>{
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                            this.$ajax.get(this.$apis.get_departmentOverview).then(res=>{
                                this.departmentUserTotal=0;
                                this.departmentData=res;
                                this.departmentData.forEach(v=>{
                                    this.departmentUserTotal+=v.deptUserCount;
                                });
                                loading.close();
                            }).catch(err=>{

                            });
                        });
                    }
                }).catch(() => {

                });
            },
            modifyRole(e,node){
                node.checked=!node.checked;     //不让编辑或者删除改变选中状态
                this.$prompt('请输入Role', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:e.label
                }).then(({ value }) => {
                    console.log(value,'???')
                    // this.$message({
                    //     type: 'success',
                    //     message: '你的邮箱是: ' + value
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },

            /**
             * 删除事件
             * */
            deleteDepartment(e,node){
                this.$confirm('确定删除该部门?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(e)
                    if(e.deptRoles.length!==0){
                        this.$message({
                            message: '请先移除本部门下的角色和用户',
                            type: 'warning'
                        });
                    }else{

                        this.$ajax.delete(this.$apis.delete_department,{
                            deptId:e.deptId
                        }).then(res=>{

                        }).catch(err=>{
                            const loading = this.$loading({
                                lock: true,
                                text: 'Loading',
                                background: 'rgba(255, 255, 255, 0.7)',
                                target:'.department'
                            });

                            this.$ajax.get(this.$apis.get_departmentOverview).then(res=>{
                                this.departmentUserTotal=0;
                                this.departmentData=res;
                                this.departmentData.forEach(v=>{
                                    this.departmentUserTotal+=v.deptUserCount;
                                });
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                loading.close();
                            }).catch(err=>{

                            });
                        });
                    }

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            deleteRole(e,node){
                node.checked=!node.checked;       //不让编辑或者删除改变选中状态
                this.$confirm('确定删除该Role?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$refs.roleTree.remove(e);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            /**
             * 底部user部分事件
             * */
            changeChecked(e){
                console.log(e)
            },
            btnClick(e,type){
                if(type===1){
                    //edit
                    console.log(e)
                    this.editUserVisible=true;
                }else{
                    //enable/disabled
                }
            },

            searchUser(){
                let checkedNode=this.$refs.roleTree.getCheckedNodes(true);
                if(checkedNode.length===0 && this.userData.deptId){
                    console.log('不调接口');
                }else{
                    this.disabledSearch=true;
                    this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(res=>{
                        this.tableDataList = this.$getDB(this.$db.setting.department, res.datas);
                        this.disabledSearch=false;
                    }).catch(err=>{
                        console.log(err)
                        this.disabledSearch=false;
                    });
                }
            },


        },
        created(){
            this.getDepartmentData();
            this.getDepartmentUser();
        },
        mounted(){
            //加载完成后选中数据中isActive的项
            // _.map(this.roleData[0].children,e=>{
            //     if(e.isActive){
            //         this.$refs.roleTree.setChecked(e,true,false)
            //     }
            // });
        },
        watch:{
            searchDepartment(val){
                this.$refs.departmentTree.filter(val);
            },
            searchRole(val){
                this.$refs.roleTree.filter(val);
            },
        },
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .body{
        margin-top: 5px;
    }
    .body .card{
        height: 430px;
        border:1px solid #e0e0e0;
        border-radius: 5px;
        box-shadow:0 0 30px #e0e0e0;
    }
    .body .card .title{
        font-weight: normal;
        font-size: 14px;
        padding:5px 10px;
        border-bottom: 1px solid #f3f3f3;
    }
    .body .card .handler{
        padding: 10px;
        border-bottom: 1px solid #f3f3f3;
    }
    .body .card .handler .speInput{
        width: auto;
        float: right;
    }
    .body .card .list{
        height: 320px;
        overflow-y: scroll;
    }
    .body .card .list .list-title{
        font-weight: bold;
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        font-size: 18px;
    }
    .body .card .list .list-title span{
        font-weight: normal;
        font-size: 14px;
        margin-left: 10px;
    }


    /*tree样式调整*/
    .departmentTree{

    }
    /*.departmentTree >>> .el-tree-node{*/
        /*height: 40px;*/
    /*}*/
    .departmentTree >>> .el-tree-node .el-tree-node__content{
        height: 40px;
        border-bottom: 1px solid #e0e0e0;
    }

    >>> .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
    >>> .custom-tree-node .el-button--small{
        font-size: 17px;
    }
    >>> .treeBtn{
        visibility: hidden;
    }
    >>> .el-tree-node__content:hover .treeBtn{
        visibility: visible;
    }


    >>> .speTree .el-tree-node__children .el-tree-node{
        height: 50px;
    }
    >>> .speTree .el-tree-node__children .el-tree-node .el-tree-node__content{
        height: 50px;
        border-bottom: 1px solid #e0e0e0;
    }

    .footer{
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .footer .content{
        margin-top: 10px;
    }
    .footer .btn{
        text-align: center;
    }
    .footer .btn button{
        padding: 9px 25px !important;
    }
</style>