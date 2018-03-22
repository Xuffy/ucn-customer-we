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
                                <img src="../../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../../assets/images/login-back.jpg" alt="">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-img">
                                <img src="../../../assets/images/login-back.jpg" alt="">
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
                <div class="btns" v-if="notEdit">
                    <Button type="primary">Create Inquiry</Button>
                    <Button type="primary">Create Order</Button>
                    <Button type="primary">Add to Compare</Button>
                    <Button @click="edit" shape="circle">Edit</Button>
                    <Button shape="circle">Remove</Button>
                </div>
            </div>
        </div>
        <div class="body">
            <Tabs value="name1" type="card" :animated="false">
                <TabPane label="Basic Info" name="name1">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>产品条码 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>英文品名 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                        <div>
                            <div>产品英文描述 : </div>
                            <div class="large">
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>客户语言品名 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>客户货号 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                        <div>
                            <div>客户语言描述 : </div>
                            <div class="large">
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>供应商编号 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>供应商简称 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>供应商货号 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>计量单位 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>产品组成 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>英文材质 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>英文颜色 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>起订量 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>交货期 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>产品设计 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>一级分类名称 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>二级分类名称 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>三级分类名称 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>四级分类名称 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>FOB币种 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>FOB单价 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>EXW单价 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>EXW币种 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>不可销售国家 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>适用年龄 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>保质期 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        <div>
                            <div>保质期单位 : </div>
                            <div>
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
                        </Col>
                        <Col class="list" :xs="24" :sm="24" :md="24" :lg="24">
                        <div>
                            <div>说明 : </div>
                            <div class="large">
                                <span v-if="notEdit">asfXXXXXXX</span>
                                <Input v-else v-model="value2" placeholder="small size"></Input>
                            </div>
                        </div>
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
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
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
                    <br>
                    <Page :total="100" show-elevator show-sizer show-total></Page>
                </TabPane>
                <TabPane label="Packing Info" name="name4">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        重量单位 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        长度单位 : XXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        体积单位 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品长 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品宽 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品高 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品净重 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品体积 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品包装方式CN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品包装方式EN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包单位 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包商品数 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包长 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包宽 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包高 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包净重 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包毛重 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包体积 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包描述 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包包装方式CN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        中包包装方式EN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱单位 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱描述 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱中包数 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱商品数 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱长 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱宽 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱高 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱净重 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱毛重 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外箱体积 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外包装方式CN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        外包装方式EN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        可否贴牌 : XXXXXX
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="Logistic" name="name5">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        20GP产品数量 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        40GP产品数量 : XXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        40HQ产品数量 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        托盘尺寸 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        每托盘产品数量 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        特殊运输要求 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        库存成本计算方式 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        默认仓库 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        库存数量 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        安全库存 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        最低库存量 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        最大批次量 : XXXXXX
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="Other Info" name="name6">
                    <Row>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        主销国家 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        主销区域 : XXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        开发时间 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        质量标准 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        上市年份 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        是否展示盒包装 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        展示盒内产品数 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        展示盒长宽高 : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        其他包装信息CN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        其他包装信息EN : XXXXXX
                        </Col>
                        <Col class="list" :xs="24" :sm="12" :md="12" :lg="12">
                        产品或包装可否调整 : XXXXXX
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="Attachment" name="name7">
                    <Button v-if="!notEdit" type="primary">Add</Button>
                </TabPane>
                <TabPane label="History" name="name8">
                    <Table border :columns="columnsHistory" :data="dataPrice"></Table>
                    <br>
                    <Page :total="100" show-elevator show-sizer show-total></Page>
                </TabPane>
                <TabPane label="Remark" name="name9">
                    <add-table></add-table>
                </TabPane>
            </Tabs>
            <div class="finish" v-if="!notEdit">
                <Button @click="finishEdit" type="primary">Finish</Button>
            </div>
        </div>
    </div>
</template>

<script>

    import addTable from '../addlineTable'

    export default {
        name: "detail",
        components:{
            addTable
        },
        data(){
            return{
                value1: 0,
                value2:1,
                columnsPrice: [
                    {
                        title: 'FOB币种',
                        key: 'ax',
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
                columnsHistory:[
                    {
                        title: '客户询价单号',
                        key: 'InquiryNo',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '客户合同号',
                        key: 'InquiryCreateDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '供应商合同号',
                        key: 'InquiryNo',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '合同日期',
                        key: 'Quantity',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '价格条款',
                        key: 'Qty',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '价格条款区域',
                        key: 'InquiryConfrimDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '采购币种',
                        key: 'price',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '采购单价',
                        key: 'PONo',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '采购总价',
                        key: 'POCreateDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '总数量',
                        key: 'Quantity',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '交货日期',
                        key: 'POConfirmDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '验货日期',
                        key: 'POConfirmDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '发运日期',
                        key: 'POConfirmDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '发运数量',
                        key: 'POConfirmDate',
                        width:150,
                        align:'center',
                    },
                    {
                        title: '合同数量',
                        key: 'POConfirmDate',
                        width:150,
                        align:'center',
                    },

                ],
                dataPrice:[
                    {
                        ax: 'John Brown',
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
                ],
                notEdit:true,                   //是否是编辑状态，默认为false
            }
        },
        methods:{
            //编辑书签内容
            edit(){
                this.notEdit=false;
            },

            //完成编辑
            finishEdit(){
                this.notEdit=true;
            },
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
        padding-bottom: 15px;
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
        padding: 15px 0 0 0;
    }
    .Details .head .detail .btns>Button{
        margin-right: 10px;
    }

    .Details .body{
        margin-top: 10px;
        background-color: #FFFFFF;
        margin-bottom: 10px;
    }
    .Details .body .list{
        line-height: 2.8;
        font-size: 13px;
    }
    .Details .body .list>div{
        display: flex;
    }
    .Details .body .list .large{
        flex:1;
    }
    .Details .body .finish{
        margin-top: 10px;
        text-align: center;
    }
</style>