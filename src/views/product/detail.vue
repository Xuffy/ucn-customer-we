<template>
    <div class="Details">
        <div class="head">
            <div class="title">
                Workbenchware（SKU name)
            </div>

            <div class="detail">
                <Row>
                    <Col span="6" class="left">
                    <Carousel autoplay :autoplay-speed="2500" arrow="always" v-model="value1" loop>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                    </Carousel>
                    </Col>
                    <Col span="18" class="right">
                        <Row>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                品名：xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                工厂货号 :xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                颜色: xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                价格: xxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                价格条款: xxxxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                价格条款区域: xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="24" :md="24" :lg="8">
                                数量单位: lorem
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                MOQ :xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="8">
                                供应商名称: xxxx
                            </Col>
                            <Col class="list" :xs="24" :sm="12" :md="8" :lg="24">
                                描述: xxxxx
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div class="btns">
                    <Button type="primary">Create Inquiry</Button>
                    <Button type="primary">Create Order</Button>
                    <Button type="primary">Add to Compare</Button>
                    <Button shape="circle">Add to Bookmark</Button>
                </div>
            </div>
        </div>
        <div class="body">
            <Tabs value="name1" type="card">
                <TabPane label="Basic Info" name="name1">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            产品条码 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            英文品名 : XXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                            产品英文描述 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            客户语言品名 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            客户货号 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                            客户语言描述 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            供应商编号 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            供应商简称 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            供应商货号 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            计量单位 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            产品组成 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            英文材质 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            英文颜色 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            起订量 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            交货期 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            产品设计 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            一级分类名称 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            二级分类名称 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            三级分类名称 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            四级分类名称 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            FOB币种 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            FOB单价 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            EXW单价 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            EXW币种 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            不可销售国家 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            适用年龄 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            保质期 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                            保质期单位 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                            说明 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="Customer Info" name="name2">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        增值税率% : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        退税率% : XXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                        海关编码 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        报关中文品名 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        报关英文品名 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                        中文商标 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        英文商标 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        商检中文品名 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        商检英文品名 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        申报要素 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        原产地 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        检验检疫类别 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        品牌 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        品牌备注 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        相关品牌 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        认证 : XXXXXX
                        </Col>
                    </Row>






                </TabPane>
                <TabPane label="Price Info" name="name3">
                    <Table border :columns="columnsPrice" :data="dataPrice"></Table>
                </TabPane>
                <TabPane label="PackingInfo" name="name4">标签一的内容</TabPane>
                <TabPane label="Logistic" name="name5">标签二的内容</TabPane>
                <TabPane label="Other Info" name="name6">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                value1: 0,
                columnsPrice: [
                    {
                        title: 'FOB币种',
                        key: 'FOB币种',
                        sortable: true
                    },
                    {
                        title: 'FOB单价',
                        key: 'FOB单价'
                    },
                    {
                        title: 'FOB港口',
                        key: 'FOB港口',
                        sortable: true
                    },
                    {
                        title: 'EXW单价',
                        key: 'EXW单价'
                    },
                    {
                        title: 'EXW币种',
                        key: 'EXW币种'
                    },
                    {
                        title: '其他价格条款',
                        key: '其他价格条款'
                    },
                    {
                        title: '其他价格条款单价',
                        key: '其他价格条款单价'
                    },
                    {
                        title: '其他价格条款区域',
                        key: '其他价格条款区域'
                    },
                    {
                        title: '其他价格条款币种',
                        key: '其他价格条款币种'
                    },
                ],
                dataPrice:[
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

        }
    }
</script>

<style scoped>
    .Details{
        background-color: #f4f4f4;
    }
    .Details .head{
        background-color: #FFFFFF;
        padding:0 20px;

    }
    .Details .head .title{
        position: relative;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
    }

    .Details .head .title .btn{
        position: absolute;
        right: 10px;
        top:4px;
    }
    .Details .head .detail{
        margin-top: 8px;
    }
    .Details .head .detail .carousel-img{
        height: 170px;
    }
    .Details .head .detail .carousel-img img{
        width: 100%;
        height: 100%;
    }
    .Details .head .detail .right{
        padding-top: 10px;
    }
    .Details .head .detail .list{
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        border-bottom: 1px dotted #e0e0e0;
    }
    .Details .head .detail .btns{
        text-align: center;
        padding: 15px 0;
    }
    .Details .head .detail .btns>Button{
        margin-right: 10px;
    }

    .Details .body{
        margin-top: 10px;
        background-color: #FFFFFF;
    }
    .Details .body .list{
        line-height: 30px;
        font-size: 13px;
    }
</style>