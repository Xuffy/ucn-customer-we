<template>
    <div class="orderOverview">
        <h3 class="hd">Order Overview</h3>
        <div class="status">
            <div class="btn-wrap">
                <span>Status&nbsp</span>
                      <el-radio-group v-model="status_buttons" size="mini">
                            <el-radio-button label="TBCByCustomer"> {{ $lang.baseText.TBCByCustomer }}</el-radio-button>
                            <el-radio-button label="TBCBySupplier">{{($lang.baseText.TBCBySupplier)}}</el-radio-button>
                            <el-radio-button label="process">{{($lang.baseText.process)}}</el-radio-button>
                            <el-radio-button label="finish">{{($lang.baseText.finish)}}</el-radio-button>
                            <el-radio-button label="cancel">{{($lang.baseText.cancel)}}</el-radio-button>
                    </el-radio-group>
            </div>
            <div class="select-wrap">
<!--
                <div class="select">
                    <el-select v-model="value" placeholder="select" @change="selectChange">
                        <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                 <el-input v-model="keyWord" style="width:250px;">
                     <el-button slot="append" icon="el-icon-search" style='width:20px;'></el-button>              
                 </el-input>
-->
               <selectSearch></selectSearch>
            </div>
        </div>
        <div class="fn">
            <div class="btn-wrap">
                <el-button >{{($lang.baseText.downloadSelected)}}</el-button>
                <el-button >{{($lang.baseText.accept)}}</el-button>
<!--                <el-button>{{($lang.baseText.copy)}}</el-button>-->
                <el-button>{{($lang.baseText.cancel)}}</el-button>
                <el-button type='danger'>{{($lang.baseText.delete)}}</el-button>
            </div>
            <div class="viewBy">
                <span>View by&nbsp</span>
                   <el-radio-group v-model="viewBy_buttons" size="mini">
                            <el-radio-button label="Inquiry">{{($lang.baseText.order)}}</el-radio-button>
                            <el-radio-button label="SKU">{{($lang.baseText.SKU)}}</el-radio-button>
                    </el-radio-group>
                <div class="set">
                </div>
            </div>
        </div>
        <!--form-->
          <v-table  
          ref='vtable'
          :data="tabData" 
          data-key="supplier.tableData" 
          :buttons="[{label: 'detail', type: 1}]" 
           @action="onAction"
          :loading='loading'
           style='marginTop:10px'/>
       
    </div>
</template>
<script>
    /**
     * @param selectChange 下拉框 值发生变更触发
     * @param keyWord search框 值
     * @param options 下拉框 原始数据 
     * @param value 下拉框 选中值
     */

    import {
        dropDown,
        selectSearch
    } from '@/components/index'
    import {
        VTable
    } from '@/components/index';
    export default {
        name: 'orderOverview',
        components: {
            dropDown,
            VTable,
            selectSearch
        },
        data() {
            return {
                value: '',
                keyWord: '',
                status_buttons: '', //status的按钮组
                viewBy_buttons: 'SKU', //status的按钮组
                tabData: [],
                loading: false,
                selected:[]
            }
        },
        methods: {
            //下拉框值
            selectChange(val) {
                console.log(val)
            },
            onAction(item, type) {
               console.log(item)
            },
        },
        computed:{
 
        },
        created() {
            this.loading = true
            this.$ajax.get(this.$apis.supplier_overview, {})
                .then((res) => {
                    this.tabData = res
                })
                .catch((res) => {
                    console.log(res);
                });
            
        },
        mounted() {
            this.loading = false
        },
        updated(){
             
        },
        watch:{
        
        }
    }

</script>
<style scoped>
    >>>.el-input-group__append {
        padding: 0 !important;
    }

</style>
<style lang="less" scoped>
    .orderOverview {
        .hd {
            height: 50px;
            line-height: 50px;
            color: #666;
            border-bottom: 1px solid #ccc;
            font-size: 18px;
            color: #666666;
        }
        .status {
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            box-sizing: border-box;
            .btn-wrap {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                }
                button {
                    padding: 2px 5px;
                    cursor: pointer;
                    border: 1px solid #108ee9;
                    background-color: #fff;
                    margin-left: 10px;
                    border-radius: 5px;
                    transition: all .5s ease;
                    &:hover,
                    &.active {
                        background-color: #108ee9;
                        color: #fff;
                    }
                }
            }
            .select-wrap {
                display: flex;
                align-items: center;
                .select {
                    width: 110px;
                    margin-right: 5px;
                    input {}
                }
            }

        }
        .fn {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            box-sizing: border-box;
            .viewBy {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                    color: #666;
                }

                .set {
                    cursor: pointer;
                    padding-left: 40px;
                    /*                    color: #999;*/
                    i {
                        font-size: 25px;
                    }
                    .speDropdown {
                        position: absolute;
                        right: 40px;
                        background-color: #ffffff;
                        z-index: 2000;
                        display: none
                    }
                    .speDropdownshow {
                        position: absolute;
                        right: 40px;
                        background-color: #ffffff;
                        z-index: 2000;

                    }
                }
            }
        }

    }

</style>
