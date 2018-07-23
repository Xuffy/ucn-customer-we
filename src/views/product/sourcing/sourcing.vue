<template>
    <div>
        <!--<product-->
        <!--:title="title"-->
        <!--:type="type"></product>-->
        <overview-page
                ref="page"
                :title="title"
                :label-width="labelWidth"
                :form-column="$db.product.overview"
                :tableData="productData"
                :pageData="pageData"
                :tableButtons="[{label: $i.product.detailBig, type: 1}]"
                :loadingTable="loadingTable"
                tableCode="udata_purchase_sku_overview"
                @search="getData"
                @tableBtnClick="btnClick"
                @change-sort="val=>{getData(val)}"
                @change-checked="changeChecked">
            <template slot="btns">
                <el-button
                        v-authorize="'PRODUCT:OVERVIEW:CREATE_INQUIRY'"
                        @click="createInquiry">
                    {{`${$i.product.createInquiry}(${selectList.length})`}}
                </el-button>
                <el-button
                        v-authorize="'PRODUCT:OVERVIEW:CREATE_ORDER'"
                        @click="createOrder">
                    {{`${$i.product.createOrder}(${selectList.length})`}}
                </el-button>
                <el-button
                        v-authorize="'PRODUCT:OVERVIEW:COMPARE'"
                        @click="compareProducts"
                        :disabled="selectList.length<2">
                    {{`${$i.product.compare}(${selectList.length})`}}
                </el-button>
                <el-button
                        v-authorize="'PRODUCT:OVERVIEW:ADD_BOOKMARK'"
                        @click="addToBookmark"
                        :loading="loadingAddBookmark"
                        :disabled="selectList.length===0">
                    {{`${$i.product.addToBookmark}(${selectList.length})`}}
                </el-button>
                <el-button v-authorize="'PRODUCT:OVERVIEW:DOWNLOAD'"
                           @click="download"
                           :disabled="selectList.length===0">{{`${$i.product.download}(${selectList.length})`}}
                </el-button>
            </template>
            <v-pagination slot="pagination"
                          @change="val=>{getData({pn:val})}"
                          @size-change="val=>{getData({ps:val})}"
                          :page-sizes="[50,100,200,500]"
                          :page-data="pageData"></v-pagination>
        </overview-page>
    </div>
</template>
<script>
    import { overviewPage, VPagination } from "@/components/index";
    import { mapActions } from "vuex";

    export default {
        name: "sourcing",
        components: {
            overviewPage,
            VPagination
        },
        data() {
            return {
                title: this.$i.product.title,
                type: "product",
                formDatabase: this.$db.product.overview,
                labelWidth: 220,
                productData: [],
                pageData: {},            //分页配置
                selectList: [],
                loadingTable: false,
                queryConfig: {
                    pn: 1,
                    ps: 50
                },

                /**
                 * 按钮状态
                 * */
                disabledDownload: true,
                loadingAddBookmark: false,


                /**
                 * 字典配置
                 * */
                statusOption: [],
                weightOption: [],
                dateOption: [],
                volumeOption: [],
                lengthOption: [],
                skuUnitOption: [],
                quarantineTypeOption: []
            };
        },
        methods: {
            ...mapActions(["setMenuLink"]),
            /**
             * 表格事件
             * */
            getData(query) {
                if (query && !query.categoryId) {
                    query.categoryId = null;
                }
                Object.assign(this.queryConfig, query);
                let params = this.$depthClone(this.queryConfig);
                if (_.isArray(params.country)) {
                    params.country = params.country.join(",");
                }
                if (this.$route.params.supplierName) {
                    params.supplierNameLike = this.$route.params.supplierName;
                }
                this.loadingTable = true;
                this.$ajax.post(this.$apis.get_buyerProductList, params).then(res => {
                    this.productData = this.$getDB(this.$db.product.indexTable, res.datas, (e) => {
                        let noneSellCountry = "";
                        e.noneSellCountry.value.split(",").forEach(v => {
                            this.countryOption.forEach(m => {
                                if (m.code === v) {
                                    noneSellCountry += (m.name + ",");
                                }
                            });
                        });
                        noneSellCountry = noneSellCountry.slice(0, noneSellCountry.length - 1);
                        e.noneSellCountry.value = noneSellCountry;

                        e.status.value = this.$change(this.statusOption, "status", e, true).name;
                        e.expireUnit.value = this.$change(this.dateOption, "expireUnit", e, true).name;
                        e.unit.value = this.$change(this.skuUnitOption, "unit", e, true).name;
                        e.unitLength.value = this.$change(this.lengthOption, "unitLength", e, true).name;
                        e.unitVolume.value = this.$change(this.volumeOption, "unitVolume", e, true).name;
                        e.unitWeight.value = this.$change(this.weightOption, "unitWeight", e, true).name;
                        e.yearListed.value = this.$dateFormat(e.yearListed.value, "yyyy-mm");
                        e.inspectQuarantineCategory._value = (_.findWhere(this.quarantineTypeOption, e.inspectQuarantineCategory.value) || {}).name;

                        if (this.disableBookmarkChoose && e.bookmarkId.value) {
                            this.$set(e, "_disabled", true);
                        }
                        return e;
                    });
                    this.pageData = res;
                    this.selectList = [];
                }).finally(err => {
                    this.loadingTable = false;
                });
            },
            btnClick(e) {
                if (e.bookmarkId.value) {
                    this.$windowOpen({
                        url: "/product/bookmarkDetail",
                        params: {
                            id: e.id.value,
                            bookmarkId: e.bookmarkId.value
                        }
                    });
                } else {
                    this.$windowOpen({
                        url: "/product/sourcingDetail",
                        params: {
                            id: e.id.value
                        }
                    });
                }
            },
            changeSort(e) {
                console.log(e, "val");
            },
            changeChecked(e) {
                this.selectList = e;
            },

            /**
             * 按钮事件
             * */
            createInquiry() {
                if (this.selectList.length === 0) {
                    this.$windowOpen({
                        url: "/negotiation/createInquiry"
                    });
                } else {
                    let skus = _.pluck(_.pluck(this.selectList, "id"), "value").join(",");
                    let supplierCodes = _.pluck(_.pluck(this.selectList, "supplierCode"), "value").join(",");
                    this.$windowOpen({
                        url: "/negotiation/createInquiry",
                        params: {
                            skus: skus,
                            supplierCodes: supplierCodes
                        }
                    });
                }
            },
            createOrder() {
                if (this.selectList.length === 0) {
                    this.$windowOpen({
                        url: "/order/create"
                    });
                } else {
                    let supplierList = _.uniq(_.pluck(_.pluck(this.selectList, "supplierCode"), "value"));
                    if (supplierList.length > 1) {
                        return this.$message({
                            message: this.$i.product.notAddDifferentSupplierProduct,
                            type: "warning"
                        });
                    }
                    let ids = _.pluck(_.pluck(this.selectList, "id"), "value").join(",");
                    this.$windowOpen({
                        url: "/order/create",
                        params: {
                            type: "product",
                            ids: ids,
                            supplierCode: supplierList[0]
                        }
                    });
                }
            },
            compareProducts() {
                if (this.selectList.length > 100) {
                    return this.$message({
                        message: this.$i.product.compareRecordMustLessThan100,
                        type: "success"
                    });
                }
                let id = _.pluck(_.pluck(this.selectList, "id"), "value").join(",");
                this.$windowOpen({
                    url: "/product/compareDetail/new",
                    params: {
                        id: id
                    }
                });
            },
            addToBookmark() {
                let id = _.pluck(_.pluck(this.selectList, "id"), "value");
                this.loadingAddBookmark = true;
                this.$ajax.post(this.$apis.add_buyerBookmark, id).then(res => {
                    this.$message({
                        message: this.$i.product.successfullyAdd,
                        type: "success"
                    });
                    this.getData();
                }).finally(() => {
                    this.loadingAddBookmark = false;
                });
            },
            download() {
                let ids = _.pluck(_.pluck(this.selectList, "id"), "value");
                this.$fetch.export_task("SKU_PURCHASE_EXPORT_IDS", { ids: ids });
            },
            getUnit() {
                this.$ajax.post(this.$apis.get_partUnit, ["SKU_SALE_STATUS", "WT_UNIT", "ED_UNIT", "VE_UNIT", "LH_UNIT", "SKU_UNIT", "QUARANTINE_TYPE"], { cache: true }).then(res => {
                    console.log(res, "res");
                    res.forEach(v => {
                        if (v.code === "SKU_SALE_STATUS") {
                            this.statusOption = v.codes;
                        } else if (v.code === "WT_UNIT") {
                            this.weightOption = v.codes;
                        } else if (v.code === "ED_UNIT") {
                            this.dateOption = v.codes;
                        } else if (v.code === "VE_UNIT") {
                            this.volumeOption = v.codes;
                        } else if (v.code === "LH_UNIT") {
                            this.lengthOption = v.codes;
                        } else if (v.code === "SKU_UNIT") {
                            this.skuUnitOption = v.codes;
                        } else if (v.code === "QUARANTINE_TYPE") {
                            this.quarantineTypeOption = v.codes;
                        }
                    });
                    //国家
                    this.$ajax.get(this.$apis.get_country, {}, { cache: true }).then(res => {
                        this.countryOption = res;
                        this.getData();
                    }).catch(err => {

                    });
                }).catch(err => {
                    this.loadingTable = false;
                });
            }
        },
        created() {
            this.getUnit();
        },
        mounted() {
            if (this.$route.params.supplierName) {
                this.$refs.page.init({
                    supplierNameLike: this.$route.params.supplierName
                });
            }

            this.setMenuLink({
                path: "/logs/index",
                query: { code: "PRODUCT" },
                type: 10,
                auth: "PRODUCT:LOG",
                label: this.$i.common.log
            });
        }
    };
</script>
<style scoped>

</style>
