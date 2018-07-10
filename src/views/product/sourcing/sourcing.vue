<template>
    <div>
        <!--<product-->
                <!--:title="title"-->
                <!--:type="type"></product>-->
        <overviewPage
                :title="title"
                :label-width="labelWidth"
                :form-column="formDatabase"
                :tableData="productData"
                :pageData="pageData"
                :tableButtons="[{label: 'Detail', type: 1}]"
                :hideBtns="false"
                :loadingTable="loadingTable"
                tableCode="udata_purchase_sku_overview"
                @search="getData"
                @tableBtnClick="btnClick"
                @change-sort="changeSort"
                @change-checked="changeChecked">
            <template slot="btns">
                <el-button
                        @click="download"
                        v-authorize="'PRODUCT:OVERVIEW:DOWNLOAD'"
                        :disabled="disabledDownload">
                    {{$i.product.download}}</el-button>
            </template>
            <template slot="footerBtn">
                <el-button
                        type="primary"
                        @click="post">
                    {{$i.product.sure}}</el-button>
            </template>
            <v-pagination slot="pagination"
                          :page-sizes="[50,100,200,500]"
                          :page-data="pageData"></v-pagination>
        </overviewPage>
    </div>
</template>
<script>
    import product from '../addProduct'
    import {overviewPage,VPagination} from '@/components/index'
    export default {
        name:"sourcing",
        components:{
            product,
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

                /**
                 * 按钮状态
                 * */
                disabledDownload:true,


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
                if(query){
                    query.country=query.country.join(',');
                }else{
                    query={pn:1,ps:50};
                }
                this.loadingTable=true;
                this.$ajax.post(this.$apis.get_buyerProductList, query).then(res => {
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
            post(){
                console.log(this.selectList,'select')
            },

            /**
             * 按钮事件
             * */
            download(){
                console.log(1)
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
        mounted(){

        },
    }
</script>
<style scoped>

</style>