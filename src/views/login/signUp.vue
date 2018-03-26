<template>
    <section class="signUp">
        <div class="container">
            <div class="form-box active">
                <h4 class="hd">User Information</h4>
                <div class="form-wrap">
                    <div class="form item heavy">
                        <label for="Invitation code">Invitation code</label>
                        <el-input placeholder="Please input your Invitation code" type="number" style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <router-link to="/getInvitationCode">Go Submit a Request>></router-link>
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">User Name</label>
                        <el-input placeholder="nput your username" type="text" clearable style="max-width:200px" />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Email</label>
                        <el-input placeholder="xxxx@xxx.com" type="email" clearable style="max-width:200px" />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Password</label>
                        <el-input placeholder="Input your password" type="password" clearable style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">tel</label>
                        <el-input placeholder="IPlease input your contact number" type="number" style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code"></label>
                        <el-input placeholder="Input your password again" type="password" clearable style="max-width:200px" />
                    </div>
                </div>
            </div>
            <div class="form-box">
                <h4 class="hd">Company  Information</h4>
                <div class="form-wrap">
                    <div class="form item heavy">
                        <label for="Invitation code">Company Name</label>
                        <el-input placeholder="Input company name" type="text" clearable style="max-width:200px" />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Company Type</label>
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
                        <label for="Invitation code">Website</label>
                        <el-input placeholder="Input company website" type="url" clearable style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">Country</label>
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
                        <label for="Invitation code">Contact Number</label>
                        <el-input placeholder="Input company name" type="number" style="max-width:200px" />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">Adderss</label>
                        <el-cascader
                            :options="AdderssData"
                            v-model="selectedOptions"
                            @change="handleChange"
                            />
                    </div>
                </div>
            </div>
            <div class="bottom-btn">
                <div class="choice">
                    <el-checkbox v-model="single">I have readed "xxx"</el-checkbox>
                </div>
                <div class="btn-wrap">
                    <el-button type="primary">ok</el-button>
                    <el-button>Cancel</el-button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name:'signUp',
        data() {
            return {
                company:'',
                Country:'',
                single:false,
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
                selectedOptions: []
            }
        },
        methods: {
            handleChange() {

            }
        }
    }
</script>
<style lang="less" scoped>
    .signUp {
        padding:20px;
        background:#f4f4f4;
        width:100%;
        min-height:100vh;
        box-sizing: border-box;
        .container {
            min-height:100%;
            width:100%;
            background: #fff;
            border-radius: 5px;
            padding:10px 40px;
            .form-box {
                padding-bottom:50px;
                &.active {
                    padding-bottom:100px;
                }
                .hd {
                    font-weight: normal;
                    font-size:15px;
                    height: 40px;
                    line-height:40px;
                    border-bottom:1px solid #efefef;
                }
                .form-wrap {
                    display:flex;
                    flex-wrap:wrap;
                    .form {
                        width:50%;
                        margin-top:20px;
                        display:flex;
                        align-items: center;
                        a {
                            color:#3182bd;
                            &:hover {
                                opacity: .8;
                            }
                        }
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
                border-top:1px solid #f4f4f4;
                .choice {
                    padding:0 100px;
                    height: 80px;
                    display:flex;
                    align-items: center;
                }
                .btn-wrap {
                    width: 300px;
                    padding-bottom:20px;
                    margin:0 auto;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
