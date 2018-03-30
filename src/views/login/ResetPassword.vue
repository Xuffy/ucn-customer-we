<template>
    <div class="input-email">
        <div class="inputBox center">
            <div class="form-input">
                <label for="Email：">{{ $t('login.text.newPassword') }}:</label>
                <el-input v-model="oldPass" type="password" style="width:200px;" placeholder="please input"></el-input>
            </div>
            <div class="form-input">
                <label for="Email：">{{ $t('login.text.repeatThePassword') }}：</label>
                <el-input v-model="newPass" type="password" style="width:200px;" placeholder="please input"></el-input>
            </div>
        </div>
        <div class="inputBox btn">
            <el-button type="primary" @click="Next">{{ $t('login.btn.submit') }}</el-button>
        </div>
    </div>
</template>
<script>
    let bFlage = true;
    export default {
        name: 'inputEmail',
        data() {
            return {
                oldPass:'',
                newPass:''
            }
        },
        methods: {
            Next() {
                if(!bFlage) return;
                bFlage = false;
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$router.push('Finish')
                    bFlage = true;
                }, 2000);
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
            padding:40px 0;
            &.center {
                height:50%;
            }
            .form-input {
                width:100%;
                display:flex;
                align-items: center;
                margin-top:30px;
            }
            &.btn {
                text-align: center;
                padding:0;
            }
            label {
                width: 40%;
                text-align: right;
                padding-right:15px;
            }
        }
    }
</style>

