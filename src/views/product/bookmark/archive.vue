<template>
    <div>
        <overview-page
                :title="$i.product.bookmarkArchive"
                :label-width="labelWidth"
                :form-column="$db.product.overview"
                :tableData="productData"
                :pageData="pageData"
                :tableButtons="null"
                :loadingTable="loadingTable"
                tableCode="udata_purchase_sku_overview"
                @search="getData"
                @tableBtnClick="btnClick"
                @change-sort="val=>{getData(val)}"
                @change-checked="changeChecked">
            <template slot="btns">
                <el-button
                        @click="recover"
                        :loading="isRecovering"
                        :disabled="selectList.length===0"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:COMPARE'">
                    {{$i.product.recover}}({{selectList.length}})</el-button>
                <el-button
                        @click="download"
                        v-authorize="'PRODUCT:BOOKMARK_OVERVIEW:DOWNLOAD'">
                    {{$i.button.download}}({{selectList.length===0?$i.product.all:selectList.length}})</el-button>
            </template>
            <v-pagination slot="pagination"
                          @change="val=>{getData({pn:val})}"
                          @size-change="val=>{getData({ps:val})}"
                          :page-sizes="[50,100,200,500]"
                          :page-data="pageData"></v-pagination>
        </overview-page>

        <el-dialog :title="$i.product.addProduct" :visible.sync="addProductDialogVisible" width="75%">
            <v-product
                    ref="addProduct"
                    queryType="product"
                    :form-column="$db.product.overview"
                    :disabledLine="disableProductLine"
                    @sure="handleSure"
                    @cancel="handleCancel"></v-product>
        </el-dialog>

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

        <v-import-template ref="importCategory" code="PRODUCT_PURCHASE" biz-code="PRODUCT_PURCHASE"></v-import-template>
    </div>
</template>
<script>
    import {overviewPage,VPagination,VProduct,VImportTemplate} from '@/components/index'
    import {mapActions} from 'vuex'

    export default {
        name:"archive",
        components:{
            overviewPage,
            VPagination,
            VProduct,
            VImportTemplate
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
                    recycle: true,
                },
                disabledCompare:true,
                disabledOrderList:[],
                dialogFormVisible:false,
                addProductDialogVisible:false,
                disableProductLine:[],

                /**
                 * 按钮状态
                 * */
                disabledDownload:true,
                loadingAddBookmark:false,
                isRecovering:false,


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
            ...mapActions(['setMenuLink']),
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
                if(!e._disabled){
                    this.$windowOpen({
                        url:'/product/bookmarkDetail',
                        params:{
                            id:e.skuId.value,
                            bookmarkId:e.id.value
                        }
                    })
                }
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
            recover(){
                let params=[];
                _.map(this.selectList,v=>{
                    params.push({
                        id:v.id.value,
                        name:v.nameEn.value
                    })
                })
                // let ids=_.pluck(_.pluck(this.selectList,'id'),'value');
                this.isRecovering=true;
                this.$ajax.post(this.$apis.recover_buyerProductBookmark,params).then(res=>{
                    this.getData();
                    this.$message({
                        message: this.$i.product.recoverSuccess,
                        type: 'success'
                    });
                }).finally(()=>{
                    this.isRecovering=false;
                });
            },
            download(){
                let ids=_.pluck(_.pluck(this.selectList,"skuId"),'value');
                if(ids.length>0){
                    this.$fetch.export_task('SKU_PURCHASE_EXPORT_IDS',{ids:ids});
                }else{
                    let params=this.$depthClone(this.queryConfig);
                    if(_.isArray(params.country)){
                        params.country=params.country.join(',');
                    }
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

            /**
             * add Product弹出框事件
             * */
            handleSure(e){
                this.addProductDialogVisible=false;
                this.loadingTable=true;
                let id = _.pluck(_.pluck(e,'id'),'value');
                this.$ajax.post(this.$apis.add_buyerBookmark, id).then(res => {
                    this.$message({
                        message: this.$i.product.successfullyAdd,
                        type: 'success'
                    });
                    this.getData();
                }).finally(() => {

                });
            },
            handleCancel(){
                this.addProductDialogVisible=false;
            },
        },
        created(){
            this.getUnit();
        },
        mounted(){
            this.setMenuLink({
                path: '/logs/index',
                query: {code: 'PRODUCT'},
                type: 10,
                label: this.$i.common.log
            });
        },
        watch:{
            selectList(){

            },
        },
    }
</script>
<style scoped>

</style>
