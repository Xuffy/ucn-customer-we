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
                            <el-button size="small" type="primary">Edit</el-button>
                            <el-input
                                    size="small"
                                    class="speInput"
                                    placeholder="请输入"
                                    v-model="value1">
                                <i slot="suffix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                        <div class="list">

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
        data(){
            return{
                value1:'',

            }
        },
        methods:{

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