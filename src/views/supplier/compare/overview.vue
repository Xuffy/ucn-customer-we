<template>
    <div class="compare-overview">
        <h3 class="hd">Compare Overview</h3>
        <div class="status">
            <div class="btn-wrap">
                <el-button type="primary">Download Selected Compare</el-button>
                <el-button type="info">Delete</el-button>
            </div>
<!--            <select-search :options="options" />-->
       <div class="select-wrap">
                <div class="select">
                    <el-select v-model="value" placeholder="select" @change="selectChange">
                        <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id" />
                    </el-select>
                </div>
                <el-input v-model="keyWord" clearable prefix-icon="el-icon-search" placeholder="search" style="width:150px;"></el-input>
                <i class="el-icon-setting"></i>
            </div>
        </div>
        <!--from-->
    </div>
</template>
<script>
    import {
        selectSearch
    } from '@/components/index';
    export default {
        name: '',
        data() {
            return {
                options: [{
                    id: '1',
                    label: 'dada'
                }]
            }
        },
        components: {
            'select-search': selectSearch
        },
        methods: {
            selectChange() {

            }
        }
    }

</script>
<style lang="less" scoped>
    .compare-overview {
        .hd {
            font-size: 18px;
            height: 50px;
            line-height: 50px;
            color: #666;
        }
        .status {
            display: flex;
            height: 60px;
            box-sizing: border-box;
            padding-left: 25px;
            padding-right: 25px;
            align-items: center;
            justify-content: space-between;
            .btn-wrap {
                display: flex;
                align-items: center;
                span {
                    font-size: 14px;
                }
            }
        }
        .select-wrap {
            display: flex;
            align-items: center;
            .select {
                width: 110px;
                margin-right: 5px;
            }
            .el-icon-setting {
                cursor: pointer;
                padding-left: 18px;
                color: #999;
                font-size: 25px;

            }
        }
    }

</style>
