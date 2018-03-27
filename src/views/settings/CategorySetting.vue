<template>
    <div class="category-setting">
        <div class="hd">Category Setting</div>
        <div class="category-wrap">
            <div class="my-category">
                <h5>My Category</h5>
                <div class="category">
                    <el-input placeholder="输入关键字进行过滤" v-model="myCategoryKeyWord" />

                    <el-tree
                    class="filter-tree"
                    :data="myCategoryData"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    :render-content="renderContent"
                    ref="tree">
                    </el-tree>
                </div>
            </div>
            div.
            <div class="general-category">
                <h5>General Category</h5>
                
            </div>
            <div class="maping-relation">
                <h5>Maping Relation</h5>
                
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
                myCategoryData: [{
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
                }
            }
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            renderContent(h, { node, data, store }) {
                return (
                `<span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span>
                    <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                    <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                    </span>
                </span>`);
            }
        },
    }
</script>
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
            h5 {
                font-weight: normal;
                font-size:20px;
                color:#666;
                padding:15px 0;
            }
        }
    }
</style>
