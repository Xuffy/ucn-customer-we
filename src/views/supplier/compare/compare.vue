<template>
    <div class="compare">
        <h3 class="hd">compareDetail</h3>
        <div class="fn">
            <div class="box-l">
                <el-button >{{$i._baseText.creatInquiry}}</el-button>
                 <el-button >{{$i._baseText.creatOrder}}</el-button>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label='$i._baseText.hideTheSame'></el-checkbox>
                    <el-checkbox :label='$i._baseText.highLightTheDifferent'></el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
            </div>    
        </div>
        <!--from-->
        <v-table  :data="tabData"  style='marginTop:10px'/>
    </div>
</template>
<script>
    import {
        dropDown
    } from '@/components/index'
    import {
        VTable
    } from '@/components/index';
    export default {
        name: 'compare',
        components: {
            dropDown,
            VTable
        },
        data() {
            return {
                checkList: '',
                tabData: [],
                params: {
                    "id": this.$route.query.id,
                    "name": this.$route.query.name,
                    //                      "operatorFilters": [
                    //                        {
                    //                          "columnName": "string",
                    //                          "operator": "string",
                    //                          "property": "string",
                    //                          "resultMapId": "string",
                    //                          "value": {}
                    //                        }
                    //                      ],
                    "pn": 1,
                    "ps": 10,
                    //                      "recycle": true,
                    //                      "sorts": [
                    //                        {
                    //                          "nativeSql": true,
                    //                          "orderBy": "string",
                    //                          "orderType": "string",
                    //                          "resultMapId": "string"
                    //                        }
                    //                      ]
                }
            }
        },
        methods: {
            //get_orderlist数据
            getdata() {
                this.loading = true
                this.$ajax.post(this.$apis.post_supplier_listCompareDetails, this.params)
                    .then((res) => {
                        console.log(res)
                        this.tabData = this.$getDB(this.$db.supplier.compareDetail, res.datas);

                    })
                    .catch((res) => {
                        console.log(res);
                    });
            }
        },
        created() {
            this.getdata()
        },
    }

</script>
<style lang="less" scoped>
    .compare {
        .hd {
            height: 50px;
            line-height: 50px;
            color: #666;
            padding: 0 20px;
            font-size: 18px;
        }
        .fn {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            .box-l {
                display: flex;
                align-items: center;
                margin: 10px 0;
                button {
                    margin-right: 10px;
                }
                .el-checkbox__label {
                    font-size: 12px;
                }
                .el-checkbox+.el-checkbox {
                    margin-left: 15px;
                }
            }
            .el-icon-setting {
                font-size: 26px;
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
            span {
                font-size: 12px;
                color: #999;
            }
            button {
                padding: 5px 5px !important;
            }
            .filedSelect {
                margin-left: 10px;
            }
        }
    }

</style>
