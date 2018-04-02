<template>
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
    </div>
</template>
<script>
    /**
     * @param selectChange - select 改变事件
     * @param inputChange - 搜索框 Change事件
     * @param inputEnter - 搜索框 enter 事件
     * @param iconClick - set 按钮点击事件
    */
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
                this.$emit('inputEnter', this.keyWord);
            },
            iconClick() {
                this.$emit('iconClick');
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
