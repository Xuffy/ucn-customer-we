<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $t('negotiation.text.inquiryDetail') }}</h3>
        <!-- <time-selection v-model="dateTime" /> -->
        
        <div class="select-wrap">
            <h4 class="content-hd">{{ $t('negotiation.text.basicInfo') }}</h4>
            <div class="select-main">
                <el-form ref="ruleform" >
                    <el-row :gutter="10">                    
                        <el-col v-for="(item, index) in basicInfoForm" :key="index" :xs="item.xs || 8" :sm="item.sm || 8" :md="item.md || 8" :lg="item.lg || 8">
                            <el-form-item  :label="item.label" :prop="item.label" :rules="item.rules" :label-width="item.width">
                                <el-input v-model="item.value" :placeholder="item.placeholder" v-if="item.type === 'text'" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
        <h4 class="content-hd">{{ $t('negotiation.text.productInfo') }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button @click="dialogTableVisible = true">{{ $t('negotiation.btn.addProduct') }}</el-button>
                <el-button type="danger">{{ $t('negotiation.btn.remove') }}</el-button>
            </div>
            <select-search :options="[]" />
        </div>
        <v-table :data="tabData" :data-key="tabColumn"></v-table>
        <div class="bom-btn-wrap">
            <el-button @click="$router.push('/negotiation/inquiryDetail')">{{ $t('negotiation.btn.submit') }}</el-button>
            <el-button @click="$router.push('/negotiation/inquiryDetail')">{{ $t('negotiation.btn.saveAsDraft') }}</el-button>
        </div>
        <div class="bom-btn-wrap-station"></div>
        <el-dialog
                title="Add Product"
                :visible.sync="dialogTableVisible"
                width="80%"
                lock-scroll>
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="From New Search"></el-radio-button>
                <el-radio-button label="From my bookmark"></el-radio-button>
            </el-radio-group>
            <v-product :hideBtns="true"></v-product>
             <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableVisible = false">OK</el-button>
                <el-button @click="dialogTableVisible = false">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { selectSearch, VTable, Upload } from '@/components/index';
    import product from '@/views/product/addProduct';
    export default {
        name:'createInquiry',
        data() {
            return {
                radio: 'From New Search',   //Add Product status
                dialogTableVisible: false, //Add Product switch

                basicInfoForm: [ //Basic Info
                    {
                        label: `${this.$t('negotiation.basicInfo.shippingMethod')}`,
                        placeholder: 'Please select',
                        value: '',
                        rules: [
                            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                        ],
                        width: '150px',
                        type: 'text',
                        state: 0
                    },
                    {
                        label: `${this.$t('negotiation.basicInfo.time')}`,
                        placeholder: 'Please select',
                        value: '',
                        rules: [],
                        width: '150px',
                        type: 'date',
                        state: 0
                    }
                ], 
                
                tabColumn: '', //tab top
                tabData: [], //tab Data
                
                textarea: '', //Remarks

                pickerOptions:{
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                    },
                    shortcuts: [{
                        text: 'Today',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: 'Yesterday',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: 'A week ago',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                }
            }
        },
        components: {
            'select-search': selectSearch,
            'v-table': VTable,
            'v-product': product,
            'v-up-load': Upload
        },
        created() {
            // this.ajax({
            //     url: '/tableProductInfo',
            //     method: 'get'
            // }).then(res => {
            //     this.tabData = res.content;
            //     this.tabColumn =  'negotiation.tableProductInfo';
            // });
        },
        methods: {
            fromChange(val) {
                console.log(val)
            },
            submitForm(ruleform) {
                this.$refs.ruleform.validate((valid) => {
                    if (valid === false) {
                        return false
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .create-inquiry {
        position: relative;
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #ccc;
        }
        .content-hd {
            font-size:14px;
            line-height:40px;
            padding-left:20px;
        }
        .status {
            display:flex;
            height: 60px;
            box-sizing: border-box;
            padding-left:25px;
            padding-right:25px;
            align-items: center;
            justify-content:space-between;
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                }
            }
            .select-wrap {
                display:flex;
                align-items:center;
                .select {
                    width: 110px;
                    margin-right:5px;
                }
                .set {
                    cursor: pointer;
                    padding-left:18px;
                    color:#999;
                    i {
                        font-size:25px;
                    }
                }
            }
        }
        .bom-btn-wrap {
            background:#fff;
            position:fixed;
            left:0;
            bottom:0;
            z-index:9;
            width:100%;
            padding: 10px 200px 10px;
            box-shadow: 0 -1px 5px #ccc;
        }
        .bom-btn-wrap-station {
            height: 52px;
            width:100%;
        }
    }
</style>

