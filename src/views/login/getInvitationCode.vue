<template>
    <section class="get-invitation-code">
        <div class="contianer">
            <div class="hd">
                <h4> {{ $t('login.text.RequestToGetInvitationCode') }} </h4>
                <p>Please submit your company infomation, and we will contact you soon, if you have any question, feel free to contact us：email-xxx@xxx.com; tel-123456789</p>
            </div>
            <div class="form-box">
                <div class="form-wrap">
                    <div class="form item heavy">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.companyName') }}</label>
                        <el-input placeholder="Input company name" clearable style="max-width:200px" />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.companyType') }}</label>
                        <el-select v-model="company" placeholder="Please select">
                            <el-option
                                v-for="item in SiteSelection"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                    <div class="form item">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.website') }}</label>
                        <el-input type="url" placeholder="Input company website" clearable style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.country') }}</label>
                        <el-select v-model="Country" placeholder="Please select">
                            <el-option
                                v-for="item in TypeOfCompany"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.contactNumber') }}</label>
                        <el-input placeholder="Input company name" type="number" style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">{{ $t('login.getInvitationCode.address') }}</label>
                        <el-cascader
                            :options="AdderssData"
                            v-model="selectedOptions"
                            @change="handleChange"
                            />
                    </div>
                </div>
            </div>
            <div class="bottom-btn">
                <div class="btn-wrap">
                    <el-button type="primary">{{ $t('login.btn.submit') }}</el-button>
                    <el-button>{{ $t('login.btn.cancel') }}</el-button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name:'',
        data() {
            return {
                company:'',
                Country:'',
                single:false,
                selectedOptions:[],
                AdderssData: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                SiteSelection: [
                    {
                        value: 'www.jd.com',
                        label: '1'
                    },
                    {
                        value: 'www.baidu.com',
                        label: '2'
                    }
                ],
                TypeOfCompany: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    }
                ],
            }
        },
        methods: {
            handleChange() {

            }
        }
    }
</script>
<style lang="less" scoped>
    .get-invitation-code {
        display:flex;
        width:100%;
        min-height:100vh;
        background:#f4f4f4;
        padding:20px;
        box-sizing: border-box;
        .contianer {
            padding:40px;
            flex:1;
            background:#fff;
            display:flex;
            flex-direction:column;
            box-sizing: border-box;
            .hd {
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-bottom:1px solid #f4f4f4;
                text-align: center;
                p, h4 {
                    padding-bottom:15px;
                }
                h4 {
                    font-size:16px;
                    color:#72777e;
                }
                p {
                    font-size:14px;
                    line-height:18px;
                }
            }
            .form-box {
                padding-bottom:50px;
                padding-top:20px;
                flex:2;
                box-sizing: border-box;
                &.active {
                    padding-bottom:100px;
                }
                .form-wrap {
                    display:flex;
                    flex-wrap:wrap;
                    .form {
                        width:50%;
                        margin-top:20px;
                        display:flex;
                        align-items: center;
                        &.heavy {
                            label {
                                position: relative;
                                &::after {
                                    position:absolute;
                                    right:5px;
                                    top:50%;
                                    margin-top:-4px;
                                    content:'*';
                                    color:#f44336;
                                    font-size:15px;
                                }
                            }
                        }
                        label {
                            width: 150px;
                            text-align: right;
                            padding-right:15px;
                            box-sizing: border-box;
                        }
                    }
                }
            }
            .bottom-btn {
                .choice {
                    padding:0 100px;
                    height: 80px;
                    display:flex;
                    align-items: center;
                }
                .btn-wrap {
                    width: 300px;
                    margin:0 auto;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
