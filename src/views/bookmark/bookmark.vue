<template>
    <div class="bookmark">
        <div class="title">
            Supplier Bookmark
            <Button @click="switchDisplay" class="title-btn" type="text">Hide the Advanced</Button>
        </div>
        <div class="body" :class="{hide:hideBody}">
            <Form :model="formItem" :label-width="180">
                <Row>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Category">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Name">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Readily Available">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="SKU Description">
                            <InputNumber :max="10" :min="1" v-model="value"></InputNumber>
                            ~
                            <InputNumber :max="10" :min="1" v-model="value"></InputNumber>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Code">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Name">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Vendor SKU Description">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Country">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                        <FormItem class="form-list" label="Product Package Type">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Category">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="SKU Code">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="SKU Name">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="SKU Description">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Vendor SKU Code">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Vendor SKU Name">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Vendor SKU Description">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Country">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                    <Col :xs="24" :sm="12" :md="8" :lg="8">
                    <FormItem class="form-list" label="Product Package Type">
                        <Input v-model="value" placeholder="Enter something..."></Input>
                    </FormItem>
                    </Col>
                </Row>
            </Form>
        </div>
        <div class="btn-group">
            <Button type="primary" class="search">Search</Button>
            <Button>Clear</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bookmark",
        props:{

        },
        data(){
            return{
                value:1,
                hideBody:true,            //是否显示body
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                },

            }
        },
        methods:{
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },


            //切换body的收缩展开状态
            switchDisplay(){
                this.hideBody=!this.hideBody;
            }
        },
        created(){

        },
    }
</script>

<style scoped>
    .bookmark{
        padding-right: 20px;
    }

    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
    }
    .title-btn{
        float: right;
        margin-right: 5px;
    }
    .title-btn >>> span{
        color:#118ee9;
    }

    .body{
        margin-top: 10px;
        overflow: hidden;
        max-height: 1400px;
        transition: max-height .5s cubic-bezier(.445,.05,.55,.95);
        display: block;
    }
    .hide{
        max-height: 43px;
    }
    /*.show{*/
        /*height: auto;*/
    /*}*/
    .form-list{
        margin-bottom: 10px;
    }

    .btn-group{
        text-align: center;
        margin-top: 10px;
    }
    .btn-group .search{
        margin-right: 30px;
    }
</style>