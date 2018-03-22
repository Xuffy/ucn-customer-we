<template>
    <div class="input-email">
        <div class="inputBox center">
            <label for="icon"><Icon type="checkmark-circled"></Icon></label>Dear xxxxx，<span v-if="$route.name === 'Identify'">we ahave sent you an email , pleasr follow the instruction to reset your password</span><span v-else>you have reset your password, please remember your new password</span>
        </div>
        <div class="inputBox">
            <button @click="sendOut" v-if="$route.name === 'Identify'">Re - send mail</button>
            <router-link to="/login" v-else>Go sign in now>></router-link>
        </div>
    </div>
</template>
<script>
    let bFlage = true;
    export default {
        name: 'inputEmail',
        data() {
            return {
                val:''
            }
        },
        methods: {
            sendOut() {
                if(!bFlage) return;
                bFlage = false;
                const msg = this.$Message.loading({
                    content: 'Mail delivery...',
                    duration: 0
                });
                setTimeout(() => {
                    this.$Message.success('Verification success!');
                    setTimeout(msg, 30);
                    this.$router.push('ResetPassword');
                    bFlage = true;
                }, 3000)
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
            label {
                padding-right:10px;
                i {
                    color:#2d8cf0;
                    font-size:25px;
                }
            }
            button {
                border:none;
                background:none;
                color:#2d8cf0;
                font-size:14px;
                cursor: pointer;
                &:hover {
                    opacity: .8;
                }
            }
        }
    }
</style>

