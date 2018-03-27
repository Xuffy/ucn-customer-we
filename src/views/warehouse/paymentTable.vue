<template>
    <div class="paymentTable">
        <el-table
                :data="tableData6"
                border
                height="200"
                :summary-method="getSummaries"
                show-summary
                style="width: 100%; margin-top: 20px">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="amount1"
                    label="数值 1（元）">
            </el-table-column>
            <el-table-column
                    prop="amount2"
                    label="数值 2（元）">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    label="数值 3（元）">
            </el-table-column>
        </el-table>
        <br>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "payment-table",
        data(){
            return{
                tableData6: [
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                ],
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>