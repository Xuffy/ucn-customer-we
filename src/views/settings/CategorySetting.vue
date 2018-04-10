<template>
    <div class="category-setting">
        <div class="hd">{{ $t('setting.page.categorySetting') }}</div>
        <div class="category-wrap">
            <div class="maping-relation">
                <h5>{{ $t('setting.page.mappingRelation') }}</h5>
                <div class="category">
                    <div class="hd input-hd">
                        <span class="text">
                            <b>{{ $t('setting.page.myCategory') }}</b>  （{{ $t('setting.page.generalCategory') }}）（{{ $t('setting.page.tags') }}）
                        </span>
                        <el-input placeholder="input key word to search" v-model="mapingCategoryKeyWord" suffix-icon="el-icon-search" />
                    </div>
                    <el-tree
                        class="filter-tree"
                        :data="mappingRelationData"
                        :props="defaultProps"
                        :filter-node-method="filterNode"
                        ref="tree2"
                        v-show="mappingRelationData.length >= 1"
                    />
                </div>
            </div>
            <div class="my-category">
                <h5>{{ $t('setting.page.myCategory') }}</h5>
                <div class="category">
                    <div class="input-hd">
                        <el-button size="mini" @click="add(myCategoryData)">{{ $t('setting.page.add') }}</el-button><el-input placeholder="input key word to search" v-model="myCategoryKeyWord" suffix-icon="el-icon-search" />
                    </div>
                    <el-tree
                        class="filter-tree"
                        :data="myCategoryData"
                        :props="defaultProps"
                        default-expand-all
                        highlight-current
                        :filter-node-method="filterNode"
                        :render-content="renderContent"
                        :expand-on-click-node="false"
                        ref="tree"
                        @node-click="myCategoryChange"
                    />
                </div>
            </div>
            <div class="mapping">
                <span>{{ $t('setting.page.mapping') }}</span><i></i>
            </div>
            <div class="general-category">
                <h5>{{ $t('setting.page.generalCategory') }}</h5>
                <div class="category">
                    <div class="input-hd">
                        <el-input placeholder="input key word to search" v-model="generalCategoryKeyWord" suffix-icon="el-icon-search" />
                    </div>
                    <el-tree
                        :data="mgeneralCategoryData"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree1"
                        :expand-on-click-node="false"
                        highlight-current
                        :filter-node-method="filterNode"
                        :props="defaultProps" 
                        @check-change="generalCategoryChange"
                    />
                    <div class="btn-wrap">
                        <el-button type="primary">{{ $t('setting.page.save') }}</el-button>
                    </div>
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
                selectedNodes: [],
                myCategoryKeyWord:'',
                generalCategoryKeyWord:'',
                mapingCategoryKeyWord:'',
                myCategoryData: [],
                mgeneralCategoryData:[],
                mappingRelationData: [],
                defaultProps: {
                    children: 'children',
                    label: 'name',
                    id: 'id'
                }
            }
        },
        created() {
            this.getMgeneralCategoryData();
            this.getMyCategoryData();
            this.getMappingCategory();
        },
        methods: {
            getMgeneralCategoryData() {
                this.ajax({
                    url: this.$apis.sys_category,
                    method: 'get'
                })
                .then(res => {
                    this.mgeneralCategoryData = res;
                });
            },
            getMyCategoryData() {
                this.ajax({
                    url: this.$apis.category,
                    method: 'get'
                })
                .then(res => {
                    this.myCategoryData = res;
                })
            },
            getMappingCategory() {
                this.ajax({
                    url: this.$apis.category,
                    method: 'get'
                })
                .then(res => {
                    this.mappingRelationData = res;
                })
            },
            addData(id, data, name) {
                const newChild = { id: id, name: name, parentId:data.id, isActive:false, children: [] };
                if (!data.children && data.length) this.$set(data, 'children', []);
                this.mappingRelationDataForEach(this.mappingRelationData, data.id, 'add', newChild);
                if(!data.length) {
                    data.children.push(newChild);
                } else {
                    data.push(newChild);
                };
            },
            addNewCategory(data, name) {
                const params = {
                    parentId: data.id || 0,
                    name: name
                };
                this.ajax.post(this.$apis.category, params)
                .then(res => {
                    this.addData(res, data, name);
                });
            },
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
                    </span>
                );
            },
            mappingRelationDataForEach(list, id, type, val){
                list.forEach((res, index) => {
                    if(res.id === id) {
                        switch(type) {
                            case 'delete':
                                list.splice(index, 1);
                                break;
                            case 'add':
                                list[index].children.push(val);
                                console.log(this.mappingRelationData)
                                break;
                            case 'edit':
                                res.name = val;
                                break;
                        };
                    };
                    if(res.children && res.children.length) this.mappingRelationDataForEach(res.children, id, type);
                });
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
                    const id = children[index].id;
                    this.ajax.get(`${this.$apis.delete_category + id}`)
                    .then(res => {
                        this.mappingRelationDataForEach(this.mappingRelationData, id, 'delete');
                        children.splice(index, 1);
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
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
                    this.addNewCategory(data, value)
                }).catch(() => {
                           
                });
            },
            edit(data) {
                this.$prompt('请编辑', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue: data.name
                }).then(({ value }) => {
                    if(!value) return this.$message({
                        message: '不能为空',
                        type: 'warning'
                    });
                    if(data.name === value) return this.$message({
                        type: 'info',
                        message: '不修改和以前同'
                    });  
                    this.ajax.post(this.$apis.category, {
                        id: data.id,
                        name: value
                    })
                    .then(res => {
                        data.name = value;
                    });
                    this.mappingRelationDataForEach(this.mappingRelationData, data.id, 'edit', value);
                }).catch(() => {
                           
                });
            },
            myCategoryChange() {
                // this.ajax({
                //     url:"/sys/category",
                //     method: "get",
                //     params: {}
                // });
            },
            generalCategoryChange(data) {
                if(!data.children) this.selectedNodes.push(data.id);
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
    >>> .custom-tree-node:hover .el-icon-remove-outline {
        display:inline-block;
    }
</style>

<style lang="less" scoped>
    .category-setting {
        .hd {
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
                padding:0 10px;
                background:#fff;
                color:#000;
                position: relative;
                margin-top:245px;
                margin-right:30px;
                &::after {
                    content: ' ';
                    position: absolute;
                    left:0;
                    top:0;
                    width:100%;
                    height: 1px;
                    background:#d7d7d7;
                }
                &::before {
                    content: ' ';
                    position: absolute;
                    left:0;
                    bottom:0;
                    width:100%;
                    height: 1px;
                    background:#d7d7d7;
                }
                i {
                    z-index: 0;
                    height: 100%;
                    width: 20px;
                    position: absolute;
                    right:0;
                    top:0;
                    &::after {
                        content: ' ';
                        position: absolute;
                        left:0;
                        top:0;
                        width:40px;
                        height: 1px;
                        background:#d7d7d7;
                        transform: rotate(45deg);
                    }
                    &::before {
                        content: ' ';
                        position: absolute;
                        left:0;
                        bottom:0;
                        width:40px;
                        height: 1px;
                        background:#d7d7d7;
                        transform: rotate(-45deg);
                    }
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
                padding:15px 15px;
                border-bottom: 1px solid #e0e0e0;
            }
            .my-category, .general-category, .maping-relation {
                .btn-wrap {
                    padding:10px;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }
                margin-right:15px;
                min-width:260px;
                background:#fff;
                border:1px solid #e0e0e0;
                box-shadow: 0 0 30px #e0e0e0;
                border-radius: 5px;
                .category {
                    .input-hd {
                        display:flex;
                        height:32px;
                        padding:10px 15px;
                        border-bottom:1px solid #e0e0e0;
                    }
                    .el-tree {
                        overflow-y: auto;
                        height: 50vh;
                        min-width:200px;
                    }
                }
            }
            .maping-relation {
                .el-tree {
                    max-height:60vh;
                    overflow-y: auto;
                }
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
