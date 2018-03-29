<template>
    <div class="inquiryDetail">
        <div class="hd">
            <h4 class="title">{{ $t('negotiation.title.inquiryDetail') }}</h4>
            <el-checkbox-group v-model="checkList">
                <el-checkbox :label="$t('negotiation.basicInfo.hideTheSame')"></el-checkbox>
                <el-checkbox :label="$t('negotiation.basicInfo.highlightTheDifferent')"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="container">
            <div class="table-wrap">
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{ $t('negotiation.basicInfo.index') }}</h5>
                        <el-checkbox-group v-model="ChildrenCheckList">
                            <el-checkbox :label="$t('negotiation.basicInfo.hideTheSame')"></el-checkbox>
                            <el-checkbox :label="$t('negotiation.basicInfo.highlightTheDifferent')"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--form-->
                    <div class="form-wrap"></div>
                </div>
                <div class="basic-info">
                    <div class="basesic-hd">
                        <h5>{{$t('negotiation.basicInfo.productInfo')}}</h5>
                        <el-checkbox-group v-model="ProductCheckList">
                            <el-checkbox :label="$t('negotiation.basicInfo.hideTheSame')"></el-checkbox>
                            <el-checkbox :label="$t('negotiation.basicInfo.highlightTheDifferent')"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="status">
                        <div class="btn-wrap">
                            <el-button type="info">{{$t('negotiation.btn.addProduct')}}</el-button>
                            <el-button type="info">{{$t('negotiation.btn.remove')}}</el-button>
                        </div>
                        <select-search :options="options" />
                    </div>
                    <!--form-->
                    <div class="form-wrap"></div>
                    <div class="bom-btn-wrap">
                        <el-button type="primary">{{$t('negotiation.btn.accept')}}</el-button>
                        <el-button type="primary">{{$t('negotiation.btn.createOrder')}}</el-button>
                        <el-button type="primary">{{$t('negotiation.btn.addToCompare')}}</el-button>
                        <el-button type="primary">{{$t('negotiation.btn.copy')}}</el-button>
                        <el-button type="primary">{{$t('negotiation.btn.modify')}}</el-button>
                        <el-button type="primary">{{$t('negotiation.btn.createInquiry')}}</el-button>
                        <el-button>{{$t('negotiation.btn.cancel')}}</el-button>
                    </div>
                </div>
            </div>
            <div class="message-board-wrap" :class="{'active':switchStatus}">
                <div class="con"><message-board :list="list" @sub="submit" /></div>
                <div class="switch-btn" @click="boardSwitch">
                    {{$t('negotiation.basicInfo.messageBoard')}}
                    <i :class="switchStatus ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * @param checkList Inquiry No.1273 多选框选中值
     * @param ChildrenCheckList Basic Info 多选框选中值
     * @param ProductCheckList Product Info 多选框选中值
     * @param keyWord search框 值
     * @param value 下拉框选中的值
     * @param options 下拉框原始数据 
     * @param list 留言板list
     * @param submit 留言 Events
     * @param switchStatus 留言板状态
     * @param boardSwitch 留言板开关 Events
    */
    import { messageBoard, selectSearch } from '@/components/index';
    import { getData } from '@/service/base';
    export default {
        name:'inquiryDetail',
        data() {
            return {
                checkList:[],
                ChildrenCheckList:[],
                ProductCheckList:[],
                keyWord:'',
                value:'',
                switchStatus:false,
                options: [{
                    id: '1',
                    label: 'SKU code'
                }, {
                    id: '2',
                    label: 'SKU Name'
                }, {
                    id: '3',
                    label: 'SKU description'
                }, {
                    id: '4',
                    label: 'Vendor SKU code'
                }, {
                    id: '5',
                    label: 'Vendor SKU name'
                }, {
                    id: '6',
                    label: 'Vendor SKU description'
                }],
                list:[]
            }
        },
        components: {
            'message-board':messageBoard,
            'select-search':selectSearch
        },
        methods: {
            selectChange(val) {
                console.log(val)
            },
            submit(str) {
                let json = {};
                json.time = getData(new Date(), 6);
                json.name = '罗涛';
                json.content = str;
                this.list.push(json);
            },
            boardSwitch() {
                this.switchStatus = !this.switchStatus;
            }
        }
    }
</script>
<style scoped>
    .inquiryDetail >>> .el-checkbox-group .el-checkbox__label {
        font-size:12px;
    }
</style>

<style lang="less" scoped>
    .inquiryDetail {
        .hd {
            display:flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            border-bottom:1px solid #999;
            padding-right:50px;
            .title {
                padding-left:15px;
                color:#666;
                font-size:18px;
            }
        }
        .container {
            display:flex;
            .table-wrap {
                flex:1;
                .basic-info {
                    width:100%;
                    padding:0 10px;
                    box-sizing: border-box;
                    .basesic-hd {
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        box-sizing: border-box;
                        height: 50px;
                        align-items: center;
                        padding-right:30px;
                        padding-left:15px;
                        box-sizing: border-box;
                        h5 {
                            font-size:14px;
                        }
                    }
                    .status {
                        display:flex;
                        height: 60px;
                        box-sizing: border-box;
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
                    .form-wrap {
                        overflow-x: auto;
                    }
                    .bom-btn-wrap {
                        padding-top:20px;
                        button {
                            margin-bottom:10px;
                        }
                    }
                }
            }
            .message-board-wrap {
                position:relative;
                max-width:302px;
                transition: max-width .5s cubic-bezier(.445,.05,.55,.95);
                &.active {
                    max-width:0;
                }
                .con {
                    overflow: hidden;
                }
                .switch-btn {
                    width: 30px;
                    position:absolute;
                    left:-30px;
                    top:0;
                    writing-mode:tb-rl;
                    transform: rotate(180deg);
                    cursor: pointer;
                    background:#f2f2f2;
                    line-height:30px;
                    height: 240px;
                    text-align: right;
                    font-size:12px;
                    color:#333;
                    font-weight: bold;
                    padding-bottom: 10px;
                    border-radius: 0 5px 0 0;
                    i {
                        transition: all .5s ease;
                        position:absolute;
                        left:50%;
                        top:50%;
                        transform:translate(-50%, -50%);
                        font-size:16px;
                        font-weight: bold;
                        color:#c0c0c0;
                    }
                }
            }
        }
    }
</style>
