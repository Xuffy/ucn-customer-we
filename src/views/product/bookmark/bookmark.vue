<template>
    <div>
        <overview-page
                :title="$i.product.bookmark"
                :label-width="labelWidth"
                :form-column="$db.product.overview"
                :tableData="productData"
                :pageData="pageData"
                :tableButtons="[{label: $i.product.detail, type: 1}]"
                :loadingTable="loadingTable"
                tableCode="udata_purchase_sku_overview"
                @search="getData"
                @tableBtnClick="btnClick"
                @change-sort="val=>{getData(val)}"
                @change-checked="changeChecked">
            <template slot="btns">
                <el-button
                        @click="createInquiry"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:CREATE_INQUIRY'">
                    {{$i.product.createInquiry}}({{selectList.length}})</el-button>
                <el-button
                        @click="createOrder"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:CREATE_ORDER'">
                    {{$i.product.createOrder}}({{selectList.length}})</el-button>
                <el-button
                        @click="compareProducts" :disabled="disabledCompare"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:COMPARE'">
                    {{$i.product.compare}}({{selectList.length}})</el-button>
                <el-button
                        @click="addProduct"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:ADD_PRODUCT'">
                    {{$i.product.addNewProductEn}}</el-button>
                <el-button @click="manuallyAddProduct"
                           v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:MANUALLY_ADD'">
                    {{$i.product.manuallyAdd}}</el-button>
                <el-button
                        @click="()=>$refs.importCategory.show()"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:UPLOAD'">
                    {{$i.button.upload}}</el-button>
                <el-button
                        @click="download"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:DOWNLOAD'">
                    {{$i.button.download}}({{selectList.length===0?$i.product.all:selectList.length}})</el-button>
                <el-button
                        type="danger"
                        :disabled="selectList.length<1"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:RECYCLE_BIN'" @click="deleteBookmark">
                    {{$i.button.remove}}</el-button>
            </template>
            <v-pagination slot="pagination"
                          @change="val=>{getData({pn:val})}"
                          @size-change="val=>{getData({ps:val})}"
                          :page-sizes="[50,100,200,500]"
                          :page-data="pageData"></v-pagination>
        </overview-page>

        <el-dialog :title="$i.product.followingProductCantAddOrder" :visible.sync="dialogFormVisible" width="50%">
            <el-table
                    :data="disabledOrderList"
                    border
                    style="width: 100%">
                <el-table-column
                        label="#"
                        width="180">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$i.product.skuNameEn"
                        width="180">
                    <template slot-scope="scope">
                        {{scope.row.nameEn.value}}
                    </template>
                </el-table-column>
                <el-table-column
                        :label="$i.product.skuCode">
                    <template slot-scope="scope">
                        {{scope.row.code.value}}
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {overviewPage,VPagination} from '@/components/index'
    export default {
        name:"sourcing",
        components:{
            overviewPage,
            VPagination
        },
        data(){
            return{
                title:this.$i.product.title,
                type:'product',
                formDatabase:this.$db.product.overview,
                labelWidth:220,
                productData:[],
                pageData:{},            //分页配置
                selectList:[],
                loadingTable:false,
                queryConfig:{
                    pn:1,
                    ps:50,
                    recycle: false,
                },
                disabledCompare:true,
                disabledOrderList:[],
                dialogFormVisible:false,

                /**
                 * 按钮状态
                 * */
                disabledDownload:true,
                loadingAddBookmark:false,


                /**
                 * 字典配置
                 * */
                statusOption:[],
                weightOption:[],
                dateOption:[],
                volumeOption:[],
                lengthOption:[],
                skuUnitOption:[],

            }
        },
        methods:{
            /**
             * 表格事件
             * */
            getData(query){
                Object.assign(this.queryConfig,query);
                let params=this.$depthClone(this.queryConfig);
                if(_.isArray(params.country)){
                    params.country=params.country.join(',');
                }
                this.loadingTable=true;
                this.$ajax.post(this.$apis.get_buyerBookmarkList, params).then(res => {
                    this.productData=this.$getDB(this.$db.product.indexTable, res.datas, (e) => {
                        let noneSellCountry = '';
                        e.noneSellCountry.value.split(',').forEach(v => {
                            this.countryOption.forEach(m => {
                                if (m.code === v) {
                                    noneSellCountry += (m.name + ',');
                                }
                            })
                        });
                        noneSellCountry = noneSellCountry.slice(0, noneSellCountry.length - 1);
                        e.noneSellCountry.value = noneSellCountry;

                        e.status.value = this.$change(this.statusOption, 'status', e, true).name;
                        e.expireUnit.value = this.$change(this.dateOption, 'expireUnit', e, true).name;
                        e.unit.value = this.$change(this.skuUnitOption, 'unit', e, true).name;
                        e.unitLength.value = this.$change(this.lengthOption, 'unitLength', e, true).name;
                        e.unitVolume.value = this.$change(this.volumeOption, 'unitVolume', e, true).name;
                        e.unitWeight.value = this.$change(this.weightOption, 'unitWeight', e, true).name;
                        e.yearListed.value=this.$dateFormat(e.yearListed.value,'yyyy-mm');

                        if(this.disableBookmarkChoose && e.bookmarkId.value){
                            this.$set(e,'_disabled',true);
                        }
                        return e;
                    });
                    this.pageData=res;
                    this.selectList=[];
                }).finally(err => {
                    this.loadingTable=false;
                });
            },
            btnClick(e){
                console.log(e,'eee')
            },
            changeSort(e){
                console.log(e,'val')
            },
            changeChecked(e){
                this.selectList=e;
            },

            /**
             * 按钮事件
             * */
            createInquiry(){
                if (this.selectList.length === 0) {
                    this.$windowOpen({
                        url: '/negotiation/createInquiry',
                    })
                } else {
                    let skus=_.pluck(_.pluck(this.selectList, "skuId"), "value").join(',');
                    let supplierCodes=_.pluck(_.pluck(this.selectList, "supplierCode"), "value").join(',');
                    this.$windowOpen({
                        url: '/negotiation/createInquiry',
                        params: {
                            skus: skus,
                            supplierCodes: supplierCodes
                        }
                    })
                }
            },
            createOrder(){
                if (this.selectList.length === 0) {
                    this.$windowOpen({
                        url: '/order/create',
                    })
                } else {
                    this.disabledOrderList=[];
                    _.map(this.selectList,v=>{
                        if(v.customerCreate.value){
                            this.disabledOrderList.push(v);
                        }
                    });
                    if(this.disabledOrderList.length>0){
                        return this.dialogFormVisible=true;
                    }

                    let supplierList =_.uniq( _.pluck(_.pluck(this.selectList,'supplierCode'),'value'));
                    if (supplierList.length > 1) {
                        return this.$message({
                            message: this.$i.product.notAddDifferentSupplierProduct,
                            type: 'warning'
                        });
                    }
                    let ids = _.pluck(_.pluck(this.selectList,'id'),'value').join(',');
                    this.$windowOpen({
                        url: '/order/create',
                        params: {
                            type: 'product',
                            ids: ids,
                            supplierCode: supplierList[0]
                        },
                    })
                }
            },
            compareProducts(){
                if(this.selectList.length>100){
                    return this.$message({
                        message: this.$i.product.compareRecordMustLessThan100,
                        type: 'success'
                    });
                }
                let id = _.pluck(_.pluck(this.selectList,'skuId'),'value').join(',');
                this.$windowOpen({
                    url: 'product/compareDetail/new',
                    params: {
                        id: id,
                    }
                });
            },
            addProduct(){},
            manuallyAddProduct(){
                this.$windowOpen({
                    url:'/product/bookmarkManuallyAdd'
                });
            },
            download(){
                let ids=_.pluck(_.pluck(this.selectList,"skuId"),'value');
                if(ids.length>0){
                    this.$fetch.export_task('SKU_PURCHASE_EXPORT_IDS',{ids:ids});
                }else{
                    let params=this.$depthClone(this.queryConfig);
                    console.log(params)
                    if(_.isArray(params.country)){
                        params.country=params.country.join(',');
                    }
                  console.log(params)
                    this.$fetch.export_task('SKU_PURCHASE_EXPORT_BOOKMARK_PARAMS',params);
                }
            },
            deleteBookmark(){
                this.$confirm(this.$i.product.sureDelete, this.$i.product.prompt, {
                    confirmButtonText: this.$i.product.sure,
                    cancelButtonText: this.$i.product.cancel,
                    type: 'warning'
                }).then(() => {
                    this.loadingTable=true;
                    let id=_.pluck(_.pluck(this.selectList,'id'),'value');
                    this.$ajax.post(this.$apis.delete_buyerProductBookmark,id).then(res=>{
                        this.selectList=[];
                        this.$message({
                            type: 'success',
                            message: this.$i.product.deleteSuccess
                        });
                        this.getData();
                    });

                }).finally(() => {

                });
            },

            getUnit(){
                this.$ajax.post(this.$apis.get_partUnit, ['SKU_SALE_STATUS', 'WT_UNIT', 'ED_UNIT', 'VE_UNIT', 'LH_UNIT', 'SKU_UNIT'], {cache: true}).then(res => {
                    res.forEach(v => {
                        if (v.code === 'SKU_SALE_STATUS') {
                            this.statusOption = v.codes;
                        } else if (v.code === 'WT_UNIT') {
                            this.weightOption = v.codes;
                        } else if (v.code === 'ED_UNIT') {
                            this.dateOption = v.codes;
                        } else if (v.code === 'VE_UNIT') {
                            this.volumeOption = v.codes;
                        } else if (v.code === 'LH_UNIT') {
                            this.lengthOption = v.codes;
                        } else if (v.code === 'SKU_UNIT') {
                            this.skuUnitOption = v.codes;
                        }
                    });
                    if (this.$route.params.supplierName) {
                        this.productForm.supplierNameLike = this.$route.params.supplierName;
                    }
                    //国家
                    this.$ajax.get(this.$apis.get_country, {}, {cache: true}).then(res => {
                        this.countryOption = res;
                        this.getData();
                    }).catch(err => {

                    });
                }).catch(err => {
                    this.loadingTable = false;
                });
            },
        },
        created(){
            this.getUnit();
        },
        watch:{
            selectList(){

            },
        },
    }
</script>
<style scoped>

</style>
