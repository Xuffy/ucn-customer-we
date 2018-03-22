<template>
    <div>
        <div>
            <Button type="primary" @click="modal = true">新增</Button>
        </div>
        <br>
        <Table border :columns="columns" :data="data"></Table>
        <br>
        <Page :total="100" show-elevator show-sizer show-total></Page>


        <Modal
                v-model="modal"
                title="新增备注"
                :loading="loading"
                ok-text="提交"
                cancel-text="取消"
                @on-ok="asyncOK">
            <Row>
                <Col :span="2">
                    备注:
                </Col>
                <Col :span="22">
                <Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                </Col>
            </Row>
        </Modal>

    </div>
</template>

<script>
    export default {
        name: "addline-table",
        data(){
            return{
                columns:[
                    {
                        title: '备注',
                        key: 'remark',
                        align:'center',
                    },
                    {
                        title: '操作人',
                        key: 'submiter',
                        align:'center',
                    },
                    {
                        title: '操作时间',
                        key: 'time',
                        align:'center',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align:'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '删除')
                            ]);
                        }
                    }

                ],
                data:[
                    {
                        remark: '只有充钱你才能变得更强',
                        submiter: '麻花藤',
                        time: '2012-02-02',
                    },
                    {
                        remark: '我从不卖假货',
                        submiter: '强东',
                        time: '2013-03-03',
                    },
                ],

                modal:false,    //显示隐藏弹出框
                loading:true,
                value:'',       //输入框内容

            }
        },
        methods:{
            asyncOK () {
                setTimeout(() => {
                    this.modal = false;
                }, 2000);
            }
        }
    }
</script>

<style scoped>

</style>