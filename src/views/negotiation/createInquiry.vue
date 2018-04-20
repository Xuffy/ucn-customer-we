<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $i.inquiry.inquiryNo }}</h3>
        <!-- <time-selection v-model="dateTime" /> -->
        <div class="select-wrap">
            <h4 class="content-hd">{{ $i.inquiry.basicInfo }}</h4>
            <el-form ref="ruleform" :model="fromArg">
                <el-row :gutter="10">                    
                    <el-col 
                            v-for="(item, index) in $db.inquiryOverview.basicInfo" 
                            :key="index" 
                            :xs="item.xs || 8" 
                            :sm="item.sm || 8" 
                            :md="item.md || 8" 
                            :lg="item.lg || 8"
                            v-if="!item._hide"
                        >
                        <el-form-item  
                                :label="item.label" 
                                :prop="item.key" 
                                :rules="item.rules" 
                                :label-width="item.width || '150px'"
                            >
                            <el-input 
                                v-model="fromArg[item.key]" 
                                :size="item.size || 'mini'"
                                :placeholder="item.placeholder" 
                                v-if="item.type === 'text'" 
                                :disabled="item.disabled"
                            />

                            <el-select
                                    v-model="fromArg[item.key]" 
                                    :size="item.size || 'mini'"
                                    :placeholder="item.placeholder" 
                                    v-if="item.type === 'select'"
                                    style="width:100%;"
                                >
                                <el-option
                                    v-for="nodes in []"
                                    :key="nodes.value"
                                    :label="nodes.label"
                                    :value="nodes.value"
                                />
                            </el-select>
                            <el-input
                                type="textarea"
                                v-model="fromArg[item.key]"
                                :rows="item.rows || 4"
                                :size="item.size || 'mini'"
                                :placeholder="item.placeholder"
                                v-if="item.type === 'attachment' || item.type === 'textarea'"
                                resize="none"
                                :disabled="item.disabled"
                            />
                            <el-date-picker
                                style="width:100%;"
                                v-model="fromArg[item.key]"
                                type="datetime"
                                :placeholder="item.placeholder"
                                v-if="item.type === 'dateTime'"
                            />
                            <v-up-load v-if="item.type === 'remark' || item.type === 'upData'"/>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <h4 class="content-hd">{{ $i.baseText.productInfo }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button @click="dialogTableVisible = true">{{ $i.baseText.addProduct }}</el-button>
                <el-button type="danger">{{ $i.baseText.remove }}</el-button>
            </div>
            <select-search :options="[]" />
        </div>
        <v-table 
            :data="tabData"
            :buttons="['detail']" 
            @action="action"
            @change-checked="changeChecked"
        />
        <div class="bom-btn-wrap">
            <el-button @click="submitForm('draft')">{{ $i.baseText.submit }}</el-button>
            <el-button @click="submitForm('draft')">{{ $i.baseText.saveAsDraft }}</el-button>
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
            <v-product 
                :hideBtns="true"
                :hideBtn="true"
                @handleOK="getList"
            ></v-product>
             <!-- <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableVisible = false">OK</el-button>
                <el-button @click="dialogTableVisible = false">Cancel</el-button>
            </span> -->
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
                
                tabColumn: '', //tab top
                tabData: [], //tab Data
                textarea:'',
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
            
        },
        computed: {
            fromArg() {
                let json = {};
                for(let key in this.$db.inquiryOverview.createbBasicInfo) {
                    json[key] = '';
                };
                return json;
            }
        },
        methods: {
            getProduct() {

            },
            fromChange(val) {
                console.log(val)
            },
            submitForm(type) {
                if(type === 'draft') {
                    
                } else {

                }
                //this.$router.push('/negotiation/inquiryDetail');
                this.$refs.ruleform.validate((valid) => {
                    if(!valid) return this.$message({
                        message: '请完成填写',
                        type: 'warning'
                    });
                });
            },
            action(data, type) {
                
            },
            changeChecked(item) {
               this.checkedAll = item;
           },
           getList(item) {
               let tabData = [];
               item.forEach(items => {
                   items._checked = false;
                   tabData.push(Object.assign({},items))
               });
               this.tabData = tabData;
               this.dialogTableVisible = false;
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

