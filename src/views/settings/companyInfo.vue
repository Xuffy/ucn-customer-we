<template>
    <div class="company-info">
        <div class="title">
            <span><span style="color:red;font-weight: bold">供应商!!! </span>{{$lang.setting.companyInfo}}</span>
        </div>
        <div class="summary">
            <el-form ref="summary" :model="companyInfo" :rules="companyInfoRules" label-width="190px">
                <el-row class="speZone">
                    <el-col v-for="v in $db.setting.sellerBasic" :key="v.key" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <el-form-item :prop="v.key" :label="v.label">
                            <!--<drop-down v-model="productForm[v.key]" v-if="v.showType==='dropdown'" :list="dropData" ref="dropDown"></drop-down>-->
                            <!--<el-input v-if="v.showType==='input'" size="mini" v-model="productForm[v.key]"></el-input>-->
                            <!--<el-select class="speSelect" v-if="v.showType==='select'" size="mini" v-model="productForm[v.key]" placeholder="不限">-->
                                <!--<el-option-->
                                        <!--v-for="item in readilyAvailableOptions"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "companyInfo",
        data(){
            return{
                companyInfo:{
                    code:'',            //供应商编号
                    name:'',            //供应商名称
                    type:'',            //供应商类别
                    country:'',         //国家
                    city:'',
                    incoterm:'',
                    exportLicense:'',   //出口资质
                    currency:'',        //币种
                    payment:'',         //付款方式
                    shortName:'',       //简称
                    desc:'',            //供应商描述
                },
                companyInfoRules:{

                }
            }
        },
        methods:{
            getWholeData(){
                this.$ajax.get(this.$apis.get_supplierWhole,{}).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                });
            },
        },
        created(){
            this.getWholeData();
            console.log(this.$db,'db')
        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
</style>