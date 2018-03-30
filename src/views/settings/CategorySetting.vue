<template>
    <div class="category-setting">
        <div class="hd">Category Setting</div>
        <div class="category-wrap">
            
            <div class="maping-relation">
                <h5>Maping Relation</h5>
                <div class="category">
                    <div class="hd">
                        <span class="text">
                            <b>My Category</b>  （Genera Category）（Tags）
                        </span>
                        <el-input placeholder="input key word to search" v-model="mapingCategoryKeyWord" suffix-icon="el-icon-search" />
                    </div>
                    <el-tree
                    class="filter-tree"
                    :data="myCategoryData"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree2">
                    </el-tree>
                </div>
            </div>
            <div class="my-category">
                <h5>My Category</h5>
                <div class="category">
                    <el-input placeholder="input key word to search" v-model="myCategoryKeyWord" suffix-icon="el-icon-search" />
                    <el-tree
                    class="filter-tree"
                    :data="myCategoryData"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    :render-content="renderContent"
                    :expand-on-click-node="false"
                    ref="tree">
                    </el-tree>
                </div>
            </div>
            <div class="mapping">
                <span>Mapping</span><i></i>
            </div>
            <div class="general-category">
                <h5>General Category</h5>
                <div class="category">
                    <el-input placeholder="input key word to search" v-model="generalCategoryKeyWord" suffix-icon="el-icon-search" />
                    <el-tree
                    :data="mgeneralCategoryData"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    ref="tree1"
                    :expand-on-click-node="false"
                    highlight-current
                    :filter-node-method="filterNode"
                    :props="defaultProps" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CategorySetting',
        data() {
            return {
                myCategoryKeyWord:'',
                generalCategoryKeyWord:'',
                mapingCategoryKeyWord:'',
                myCategoryData: [{
                    id: 1,
                    label: '一级 1',
                    isActive: false,
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        isActive: false,
                        children: [{
                            id: 9,
                            label: '三级 1-1-1',
                            isActive: false
                        }, {
                            id: 10,
                            label: '三级 1-1-2',
                            isActive: false,
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
                mgeneralCategoryData: [{
                    id: 1,
                    label: '一级 1',
                    isActive: false,
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        isActive: false,
                        children: [{
                            id: 9,
                            label: '三级 1-1-1',
                            isActive: false
                        }, {
                            id: 10,
                            label: '三级 1-1-2',
                            isActive: false,
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
                }
            }
        },
        created() {
            
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            renderContent(h, { node, data, store }) {
                return (
                <span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span class="icon-wrap" on-click={ (ev) => { ev.cancelBubble = true } }>
                        <i class="el-icon-edit" on-click={ () => this.edit(data) }></i>
                        <i class="el-icon-remove-outline" on-click={ () => this.remove(node, data) }></i>
                        <i class="el-icon-circle-plus-outline" on-click={ () => this.add(data) }></i>
                    </span>
                </span>);
            },
            remove(node, data) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    const parent = node.parent;
                    const children = parent.data.children || parent.data;
                    const index = children.findIndex(d => d.id === data.id);
                    children.splice(index, 1);
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
            add(data) {
                this.$prompt('添加分类', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    if(!value) return this.$message({
                        message: '分类名不能为空',
                        type: 'warning'
                    });
                    const newChild = { id: 6, label: value, children: [] };
                    if (!data.children) this.$set(data, 'children', []);
                    data.children.push(newChild);

                    this.$message({
                        type: 'success',
                        message: `分类添加成功`
                    });
                }).catch(() => {
                           
                });
            },
            edit(data) {
                this.$prompt('请编辑', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue: data.label
                }).then(({ value }) => {
                    if(!value) return this.$message({
                        message: '不能为空',
                        type: 'warning'
                    });
                    data.label = value;
                    // this.$message({
                    //     type: 'success',
                    //     message: `编辑成功`
                    // });
                }).catch(() => {
                           
                });
            }
        },
        watch: {
            myCategoryKeyWord(val) {
                this.$refs.tree.filter(val);
            },
            generalCategoryKeyWord(val) {
                this.$refs.tree1.filter(val);
            },
            mapingCategoryKeyWord(val) {
                this.$refs.tree2.filter(val);
            }
        },
    }
</script>
<style scoped>
    >>> .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

    >>> .custom-tree-node .el-icon-edit {
        display:inline-block;
    }

    >>> .custom-tree-node .el-icon-edit,
    >>> .custom-tree-node .el-icon-circle-plus-outline,
    >>> .custom-tree-node .el-icon-remove-outline {
        display:none;
        margin-right:5px;
    }
    
     >>> .custom-tree-node .icon-wrap {
        width: 100px;
        text-align:right;
    }

    >>> .custom-tree-node:hover .el-icon-edit,
    >>> .custom-tree-node:hover .el-icon-circle-plus-outline,
    >>> .custom-tree-node:hover .el-icon-remove-outline,
    >>> .custom-tree-node:active .el-icon-edit,
    >>> .custom-tree-node:active .el-icon-circle-plus-outline,
    >>> .custom-tree-node:active .el-icon-remove-outline  {
        display:inline-block;
    }
</style>

<style lang="less" scoped>
    .category-setting {
        .hd {
            height: 40px;
            line-height: 40px;
            border-bottom:1px solid #ccc;
            font-weight: bold;
            font-size:16px;
        }
        
        .category-wrap {
            display:flex;
            padding:20px;
            overflow-x: auto;
            .mapping {
                width: 50px;
                height: 30px;
                line-height: 30px;
                background:#d7d7d7;
                padding:0 10px;
                color:#fff;
                position: relative;
                margin-top:245px;
                margin-right:30px;
                i {
                    z-index: 0;
                    height: 21px;
                    width: 21px;
                    background:#d7d7d7;
                    position: absolute;
                    right:-11px;
                    top:50%;
                    margin-top:-10px;
                    transform: rotate(45deg)
                }
                span {
                    position:absolute;
                    left:10px;
                    line-height: 30px;
                    z-index:1;
                }
            }
            h5 {
                font-weight: normal;
                font-size:20px;
                color:#666;
                padding:15px 0;
            }
            .my-category, .general-category {
                margin-right:15px;
                min-width:260px;
                .category {
                    background:#f2f2f2;
                    padding:10px;
                    border-radius: 5px;
                    height: 60vh;
                    min-width:200px;
                    overflow-y: auto;
                    .el-input.el-input--small {
                        margin-bottom:10px;
                    }
                    .el-tree {
                        background:#f2f2f2;
                    }
                }
            }
            .general-category {
                padding-right:30px;
            }
            .maping-relation {
                padding-right:30px;
                min-width:300px;
                .hd {
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    .text {
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        color:#666;
                        font-size:12px;
                        white-space:nowrap;
                        b {
                            font-size:12px;
                            white-space:nowrap;
                            color:#ccc;
                        }
                    }
                }
            }
        }
    }
</style>
