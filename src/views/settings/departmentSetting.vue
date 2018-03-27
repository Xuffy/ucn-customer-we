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
                                    <el-button size="small" type="primary">Edit</el-button>
                                </el-col>
                                <el-col :span="16">
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
                                    :data="data4"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :render-content="renderContent">
                            </el-tree>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    111
                </el-col>
                <el-col :span="7">
                    111
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "department-setting",
        data() {
            const data = [{
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
            }];
            return {
                data4: JSON.parse(JSON.stringify(data)),

                value1: '',

                defaultProps: {
                    children: 'children',
                    label: 'id'
                },

            }

        },
        methods: {
            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                <span>
                <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                </span>
                </span>);
            }
        }
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
        height: 400px;
        border:1px solid #e0e0e0;
        border-radius: 5px;
        box-shadow:0 0 3px #e0e0e0;
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
        height: 306px;
        overflow-y: scroll;
    }
</style>