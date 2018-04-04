<template>
    <div class="compare-overview">
        <h3 class="hd">{{ $t('negotiation.text.compare') }}</h3>
        <div class="fn">
            <div class="box-l">
                <el-button type="primary" @click="windowOpen('/order/creatOrder')">{{ $t('negotiation.btn.createOrder') }}</el-button>
                <el-button type="primary">{{ $t('negotiation.btn.accept') }}</el-button>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label="$t('negotiation.text.hideTheSame')"></el-checkbox>
                    <el-checkbox :label="$t('negotiation.text.highlightTheDifferent')"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
                <span>{{ $t('negotiation.text.compareBy') }}：</span>
                <el-button :type="this.compareBy === $t('negotiation.btn.inquiry') ? 'primary' : ''" @click="compareByChange($t('negotiation.btn.inquiry'))">{{ $t('negotiation.btn.inquiry') }}</el-button>
                <el-button :type="this.compareBy === $t('negotiation.btn.SKU') ? 'primary' : ''"  @click="compareByChange($t('negotiation.btn.SKU'))">{{ $t('negotiation.btn.SKU') }}</el-button>
            </div>
            <div class="filedSelect">
                <span>Set Filed</span>
                <el-select v-model="Filed" placeholder="Please select">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id" />
                </el-select>
            </div>
            <!-- <el-button type="text">Compare History</el-button> -->
        </div>
        <v-simple-table :column="tabColumn" :data.sync="tabData" />
    </div>
</template>
<script>
    import { VSimpleTable } from '@/components/index';
    export default {
        name:'compareOverview',
        data() {
            return {
                tabColumn: [],
                tabData: [],
                checkList: [],
                options:[{
                    label:'wwww.baidu.com',
                    id:'1'
                }],
                Filed:'',
                compareBy: ""
            }
        },
        components: {
            "v-simple-table": VSimpleTable
        },
        created() {
            this.compareBy = 'Inquiry'
        },
        watch: {
            compareBy (newVal, oldVal) {
                this.compareByChildren(newVal);
            }
        },
        methods: {
            compareByChange(str) {
                this.compareBy = str;
            },
            compareByChildren(str) {
                this.ajax({
                    url: '/Compare',
                    method: 'get'
                }).then(res => {
                    if(str === 'Inquiry') {
                        this.tabData = res.Inquiry;
                        this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareByInquiry', { width:200 });
                    } else {
                        this.tabData = res.SKU;
                        this.tabColumn = this.$getTableColumn(this.tabData, 'negotiation.tableCompareBySKU', { width:200 });
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .compare-overview {
        .hd {
            height:50px;
            line-height:50px;
            color:#666;
            padding:0 20px;
        }
        .fn {
            display:flex;
            flex-wrap:wrap;
            align-items: center;
            justify-content:space-between;
            padding:0 20px;
            .box-l {
                display:flex;
                align-items: center;
                margin:10px 0;
                button {
                    margin-right:10px;
                }
                .el-checkbox__label {
                    font-size:12px;
                }
                .el-checkbox+.el-checkbox {
                    margin-left:15px;
                }
            }
            span {
                font-size:12px;
                color:#999;
            }
            button {
                padding:5px 5px !important;
            }
            .filedSelect {
                margin-left:10px;
            }
        }
    }
</style>
