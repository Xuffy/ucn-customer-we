<template>
    <div class="compare-overview">
        <h3 class="hd">Compare</h3>
        <div class="fn">
            <div class="box-l">
                <el-button type="primary">Create Order</el-button>
                 <el-button type="primary">Accept</el-button>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Hide the Same"></el-checkbox>
                    <el-checkbox label="Highlight the Different"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
                <span>Compare by：</span>
                <el-button type="primary">Inquiry</el-button>
                <el-button type="primary">SKU</el-button>
            </div>
            <div class="filedSelect">
                <span>Set Filed</span>
                <el-select v-model="Filed" placeholder="Please select">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id" />
                </el-select>
            </div>
            <el-button type="text">Compare History</el-button>
        </div>
        <!--from-->
    </div>
</template>
<script>
    export default {
        name:'compareOverview',
        data() {
            return {
                checkList: [],
                options:[{
                    label:'wwww.baidu.com',
                    id:'1'
                }],
                Filed:''
            }
        }
    }
</script>
<style lang="less" scoped>
    .compare-overview {
        .hd {
            height:50px;
            line-height:50px;
            color:#666;
            padding:0 20px;
        }
        .fn {
            display:flex;
            flex-wrap:wrap;
            align-items: center;
            justify-content:space-between;
            padding:0 20px;
            .box-l {
                display:flex;
                align-items: center;
                margin:10px 0;
                button {
                    margin-right:10px;
                }
                .el-checkbox__label {
                    font-size:12px;
                }
                .el-checkbox+.el-checkbox {
                    margin-left:15px;
                }
            }
            span {
                font-size:12px;
                color:#999;
            }
            button {
                padding:5px 5px !important;
            }
            .filedSelect {
                margin-left:10px;
            }
        }
    }
</style>