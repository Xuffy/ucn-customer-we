<template>
    <div class="department-setting">
        <div class="title">
            Department Setting
        </div>
        <div class="body">
            <el-row>
                <el-col :offset="1" :span="7">
                    <div class="card">
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
                            <el-tree
                                    class="speTree"
                                    ref="departmentTree"
                                    :data="departmentData"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :default-checked-keys="[1]"
                                    :render-content="renderDepartment"
                                    :filter-node-method="filterDepartment"
                                    @node-click="departmentClick"
                                    >
                            </el-tree>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="card">
                        <div class="title">Role</div>
                        <div class="handler">
                            <el-row>
                                <el-col :span="8">
                                    <el-button @click="addRole" size="small" type="primary">Add</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-input
                                            size="small"
                                            placeholder="请输入"
                                            v-model="searchRole">
                                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="list">
                            <el-tree
                                    class="speTree"
                                    ref="roleTree"
                                    :data="roleData"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :render-content="renderRole"
                                    :filter-node-method="filterRole"
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
                                            v-model="value1">
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
                <el-form ref="form" :model="form" label-width="100px">
                    <el-row>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item label="User Name">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item label="Email">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item label="Tel">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                            <el-form-item label="Gender">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="btn">
                    <el-button class="serachBtn" type="primary">查询</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "department-setting",
        data() {
            const department = [
                {
                    id: 1,
                    label: '全部',
                    children: [
                        {
                            id: 1,
                            label: 'Department1',
                        },
                        {
                            id: 2,
                            label: 'Department2',
                        },
                        {
                            id: 3,
                            label: 'Department3',
                        },
                        {
                            id: 4,
                            label: 'Department4',
                        },
                        {
                            id: 5,
                            label: 'Department5',
                        },
                        {
                            id: 6,
                            label: 'Department6',
                        },
                        {
                            id: 7,
                            label: 'Department7',
                        },
                        {
                            id: 8,
                            label: 'Department8',
                        },
                        {
                            id: 9,
                            label: 'Department8',
                        },
                        {
                            id: 10,
                            label: 'Department8',
                        },
                    ]
                },
            ];
            const role=[
                {
                    id: 1,
                    label: '全部',
                    children: [
                        {
                            id: 1,
                            label: 'Role1',
                        },
                        {
                            id: 2,
                            label: 'Role2',
                            isActive:true
                        },
                        {
                            id: 3,
                            label: 'Role3',
                        },
                        {
                            id: 4,
                            label: 'Role4',
                        },
                    ]
                },
            ];
            return {
                departmentData: JSON.parse(JSON.stringify(department)),
                roleData:JSON.parse(JSON.stringify(role)),
                value1: '',
                searchDepartment:'',            //搜索的部门名称
                searchRole:'',                  //搜索的role名称

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
            }
        },
        methods: {
            //render按钮
            renderDepartment(h, { node, data, store }) {
                if(!data.children){
                    return (
                        <span class="custom-tree-node">
                            <span>{node.label}</span>
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
                            <span>{node.label}</span>
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

            //department节点点击事件
            departmentClick(data,node,com){
                if(data.children){
                    return;
                }
                this.$refs.departmentTree.setChecked(data,!node.checked,false)
            },

            //Role节点点击事件
            roleClick(data,node,com){
                if(data.children){
                    return;
                }
                this.$refs.roleTree.setChecked(data,!node.checked,false)
            },

            //新增department
            addDepartment(){
                this.$prompt('请输入Department名称', 'Add Department', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator:(data)=>{
                        if(!data || data==''){
                            return '请输入';
                        }
                    }
                }).then(({ value }) => {
                    let id=this.departmentData[0].children+1;

                    // this.$refs.departmentTree.insertBefore({
                    //     id:id,
                    //     label:value,
                    // },1);

                    this.departmentData[0].children.unshift({
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
            //新增role
            addRole(){
                this.$prompt('请输入Role', 'Add Role', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator:(data)=>{
                        if(!data || data==''){
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

            //筛选department
            filterDepartment(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },

            //筛选role
            filterRole(value, data){
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },

            //修改编辑部门名称
            modifyDepartment(e,node){
                node.checked=!node.checked;     //不让编辑或者删除改变选中状态
                this.$prompt('请输入Department', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:e.label
                }).then(({ value }) => {
                    e.label=value;
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

            //修改role名称
            modifyRole(e,node){
                node.checked=!node.checked;     //不让编辑或者删除改变选中状态
                this.$prompt('请输入Role', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:e.label
                }).then(({ value }) => {
                    e.label=value;
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

            //删除部门
            deleteDepartment(e,node){
                node.checked=!node.checked;       //不让编辑或者删除改变选中状态
                this.$confirm('确定删除该部门?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$refs.departmentTree.remove(e);
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

            //删除role
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
        },
        mounted(){
            //加载完成后选中数据中isActive的项
            _.map(this.roleData[0].children,e=>{
                if(e.isActive){
                    this.$refs.roleTree.setChecked(e,true,false)
                }
            });
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