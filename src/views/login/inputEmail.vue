<template>
    <div class="input-email">
        <div class="inputBox center">
            <label for="Email：">{{ $t('login.userInformation.email') }}：</label>
            <el-input v-model="val" type="email" placeholder="Please input the email" style="width: 200px"></el-input>
        </div>
        <div class="inputBox">
            <el-button type="primary" @click="Next">{{ $t('login.btn.submit') }}</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'inputEmail',
        data() {
            return {
                val:''
            }
        },
        methods: {
            Next() {
                this.$router.push('Identify')
            }
        }
    }
</script>
<style lang="less" scoped>
    .input-email {
        flex:1;
        display:flex;
        flex-direction: column;
        .inputBox {
            display:flex;
            align-items: center;
            justify-content: center;
            &.center {
                height:50%;
            }
        }
    }
</style>

