<template>
    <div>
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
            <el-input v-model="keyWord" clearable prefix-icon="el-icon-search" placeholder="search" style="max-width:150px;" @change="inputChange" @keyup="inputEnter"
            @keyup.enter.native="inputEnter" />
            <div class="set">
                <i class="el-icon-setting"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'selectSearch',
        data() {
            return {
                value:'',
                keyWord:''
            }
        },
        props: {
            options: {
                type: Array,
                default: []
            }
        },
        methods: {
            selectChange() {
                this.$emit('selectChange', this.value);
            },
            inputChange() {
                this.$emit('inputChange', this.keyWord);
            },
            inputEnter() {
                alert(1)
            }
        }
    }
</script>
<style lang="less" scoped>
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
</style>
