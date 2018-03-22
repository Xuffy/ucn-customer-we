<template>
    <section class="signUp">
        <div class="container">
            <div class="form-box active">
                <h4 class="hd">User Information</h4>
                <div class="form-wrap">
                    <div class="form item heavy">
                        <label for="Invitation code">Invitation code</label>
                        <div class="ivu-input-wrapper ivu-input-type"> 
                            <input autocomplete="off" spellcheck="false" type="number" placeholder="Please input your Invitation code" class="ivu-input">
                        </div>
                    </div>
                    <div class="form item">
                        <router-link to="/getInvitationCode">Go Submit a Request>></router-link>
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">User Name</label>
                        <Input type="text" placeholder="Input your username" clearable />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Email</label>
                        <Input type="email" placeholder="xxxx@xxx.com" clearable />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Password</label>
                        <Input type="password" placeholder="Input your password" clearable />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">tel</label>
                        <div class="ivu-input-wrapper ivu-input-type">
                            <input autocomplete="off" spellcheck="false" type="number" placeholder="Please input your contact number" class="ivu-input">
                        </div>
                    </div>
                    <div class="form item">
                        <label for="Invitation code"></label>
                        <Input type="password" placeholder="Input your password again" clearable />
                    </div>
                </div>
            </div>
            <div class="form-box">
                <h4 class="hd">Company  Information</h4>
                <div class="form-wrap">
                    <div class="form item heavy">
                        <label for="Invitation code">Company Name</label>
                        <Input type="text" placeholder="Input company name" clearable />
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Company Type</label>
                        <Select v-model="company" clearable placeholder="Please select">
                            <Option v-for="item in SiteSelection" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="form item">
                        <label for="Invitation code">Website</label>
                        <Input type="url" placeholder="Input company website" clearable />
                    </div>
                    <div class="form item">
                        <label for="Invitation code">Country</label>
                        <Select v-model="Country" clearable placeholder="Please select">
                            <Option v-for="item in TypeOfCompany" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="form item heavy">
                        <label for="Invitation code">Contact Number</label>
                        <div class="ivu-input-wrapper ivu-input-type">
                            <input autocomplete="off" spellcheck="false" type="number" placeholder="Input company name" class="ivu-input">
                        </div>
                    </div>
                    <div class="form item">
                        <label for="Invitation code">Adderss</label>
                        <Cascader :data="AdderssData" style="width:100%;" placeholder="Please select"></Cascader>
                    </div>
                </div>
            </div>
            <div class="bottom-btn">
                <div class="choice">
                    <Checkbox v-model="single">I have readed "xxx"</Checkbox>
                </div>
                <div class="btn-wrap">
                    <Button type="primary">ok</Button>
                    <Button>Cancel</Button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
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
            }
        },
        name:'signUp'
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
