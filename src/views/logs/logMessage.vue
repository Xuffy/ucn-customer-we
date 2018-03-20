<template>
    <div class="log-message">
        <div class="log-head">
            <Button type="primary">Down the logs</Button>
            <Button type="primary">Mark as Read</Button>
            <Input class="log-input"
                   v-model="value"
                   icon="ios-clock-outline"
                   placeholder="Please input key word to search."
                   @on-click="search"
                   @on-enter="search"
                   style="width: 200px"></Input>
        </div>
        <div class="log-body">
            <div>
                <Table ref="selection" :columns="columnsConfig" :data="data1"></Table>
                <Button @click="handleSelectAll(true)">Set all selected</Button>
                <Button @click="handleSelectAll(false)">Cancel all selected</Button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log-message",
        props:['columnConfig'],
        data(){
            return{
                value:'',

                columnsConfig: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'TestRender',
                        key: 'testRender',
                        render:(h, params) => {
                            return h('div', [
                                h('Checkbox'),{

                                }
                            ]);
                        }
                    },
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods:{
            search(){
                console.log(111)
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>

<style scoped>
    .log-message{
        padding: 5px 12px;
    }
    .log-input{
        float: right;
    }
    .log-body{
        margin-top: 15px;
    }
</style>