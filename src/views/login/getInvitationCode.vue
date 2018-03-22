<template>
    <section class="get-invitation-code">
        <div class="contianer">
            <div class="hd">
                <h4>Request to Get Invitation Code</h4>
                <p>Please submit your company infomation, and we will contact you soon, if you have any question, feel free to contact us：email-xxx@xxx.com; tel-123456789</p>
            </div>
            <div class="form-box">
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
                <div class="btn-wrap">
                    <Button type="primary">Submit</Button>
                    <Button>Cancel</Button>
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
        .contianer {
            padding:40px;
            flex:1;
            background:#fff;
            display:flex;
            flex-direction:column;
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
