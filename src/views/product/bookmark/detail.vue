<template>
    <div class="Details">
        <div class="head">
            <div class="title">
                Workbenchware（SKU name)
            </div>
            <div class="detail">
                <el-row>
                    <el-col :span="6">
                        <el-carousel trigger="click" height="200px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <img src="../../../assets/images/login-back.jpg" style="width: 100%" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                    <el-col :span="18">
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                品名：xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                工厂货号 :xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                颜色: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                价格: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                价格条款: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                价格条款区域: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                数量单位: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                MOQ: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                供应商名称: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                描述: xxxx
                            </el-col>
                        </el-row>

                    </el-col>
                </el-row>
                <div class="btns" v-if="noEdit">
                    <el-button type="primary">Create Inquiry</el-button>
                    <el-button type="primary">Create Order</el-button>
                    <el-button @click="addCompare" type="primary">Add to Compare</el-button>
                    <el-button class="roundBtn" @click="editBookmark" round> Edit </el-button>
                    <el-button class="roundBtn" round> Remove </el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">Finish</el-button>
                    <el-button @click="cancelEdit" type="info">Cancel</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
                <el-tab-pane label="Basic Info" name="Basic Info">
                    <el-form class="speForm" label-width="100px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="产品条码:">
                                    <!--<el-input ></el-input>-->
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <!--英文品名 : XXXXXXXXX-->
                                <el-form-item label="英文品名:">
                                    <!--<el-input ></el-input>-->
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <!--产品英文描述 : XXXXXXXXXXXXXXXXXXXXXXXX-->
                                <el-form-item label="产品英文描述:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="客户语言品名:">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="客户货号:">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item label="客户语言描述:">
                                    <span v-if="noEdit">XXXXXXX</span>
                                    <el-input v-else></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="供应商编号:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="供应商简称:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="供应商货号:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="计量单位:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="产品组成:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="英文材质:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="英文颜色:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="起订量:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="交货期:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="产品设计:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="一级分类名称:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="二级分类名称:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="三级分类名称:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="四级分类名称:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="FOB币种:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="FOB单价:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="FOB港口:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="EXW单价:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="EXW币种:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="不可销售国家:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="适用年龄:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="保质期:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                <el-form-item label="保质期单位:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item label="说明:">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Customer Info" name="Customer Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            增值税率% : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            退税率% : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            海关编码 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            报关中文品名 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            报关英文品名 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中文商标 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            英文商标 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            商检中文品名 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            商检英文品名 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            申报要素 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            原产地 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            检验检疫类别 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            品牌 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            品牌备注 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            相关品牌 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            认证 : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="Price Info" name="Price Info">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="FOB币种"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="FOB单价"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="FOB港口"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="EXW单价"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="EXW币种"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="其他价格条款"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="其他价格条款单价"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="其他价格条款区域"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="其他价格条款币种"
                                width="180px">
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage1"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="Packing Info" name="Packing Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            重量单位 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            长度单位 : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            体积单位 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品长 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品宽 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品高 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品净重 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品体积 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品包装方式CN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品包装方式EN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包单位 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包商品数 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包长 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包宽 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包高 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包净重 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包毛重 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包体积 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包描述 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包包装方式CN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            中包包装方式EN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱单位 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱描述 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱中包数 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱商品数 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱长 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱宽 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱高 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱净重 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱毛重 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外箱体积 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外包装方式CN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            外包装方式EN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            可否贴牌 : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="Logistic" name="Logistic">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            20GP产品数量 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            40GP产品数量 : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            40HQ产品数量 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            托盘尺寸 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            每托盘产品数量 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            特殊运输要求 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            库存成本计算方式 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            默认仓库 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            库存数量 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            安全库存 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            最低库存量 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            最大批次量 : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="Other Info" name="Other Info">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            主销国家 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            主销区域 : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            开发时间 : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            质量标准 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            上市年份 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            是否展示盒包装 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            展示盒内产品数 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            展示盒长宽高 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            其他包装信息CN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            其他包装信息EN : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            产品或包装可否调整 : XXXXXX
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="Attachment" name="Attachment">

                </el-tab-pane>
                <el-tab-pane label="History" name="History">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="客户询价单号"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="客户合同号"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="供应商合同号"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="合同日期"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="价格条款"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="价格条款区域"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="采购币种"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="采购单价"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="采购总价"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="总数量"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="交货日期"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="验货日期"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="发运日期"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="发运数量"
                                width="180px">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="合同数量"
                                width="180px">
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage1"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="Remark" name="Remark">
                    <add-table></add-table>
                </el-tab-pane>
            </el-tabs>
        </div>

        <compare-list :config="compareConfig"></compare-list>

    </div>
</template>

<script>

    import addTable from '../addlineTable'
    import compareList from '../compareList'

    export default {
        name: "detail",
        components:{
            addTable,
            compareList
        },
        data(){
            return{
                value1: 0,
                tabName:'Basic Info',

                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
                currentPage1:1,
                noEdit:true,                //是否处在非编辑状态

                labelPosition:'left',
                compareConfig:{
                    showCompareList:false,      //是否显示比较列表
                },
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(){
                //切换tab页
            },

            //编辑bookmark
            editBookmark(){
                this.noEdit=false;
                this.tabName='Basic Info';
            },

            //完成编辑
            finishEdit(){
                this.noEdit=true;
            },

            //取消编辑
            cancelEdit(){
                this.noEdit=true;
            },

            //添加比较
            addCompare(){
                this.compareConfig.showCompareList=true;
            },
        },

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
        color:#666666;
    }

    .Details .head .title .title-btn{
        float: right;
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
        /*padding-top: 10px;*/
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
    .Details .head .detail .btns .roundBtn{
        padding: 9px 25px;
    }

    .Details .body{
        margin-top: 10px;
        margin-bottom: 35px;
        background-color: #FFFFFF;
    }
    .Details .body .list{
        line-height: 30px;
        font-size: 13px;
    }

    .speForm .el-form-item--small.el-form-item{
        margin-bottom: 0;
    }
    .speForm .el-row .list .el-input{
        width: 80%;
    }
</style>