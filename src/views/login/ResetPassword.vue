<template>
    <div class="input-email">
        <div class="inputBox center">
            <div class="form-input">
                <label for="Email：">New password:</label><Input v-model="oldPass" placeholder="please input" clearable style="width: 200px" type="password" />
            </div>
            <div class="form-input">
                <label for="Email：">Repeat the password：</label><Input v-model="newPass" placeholder="please input" clearable style="width: 200px" type="password" />
            </div>
        </div>
        <div class="inputBox btn">
            <Button type="primary" @click="Next">Submit</Button>
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
                const msg = this.$Message.loading({
                    content: 'Mail delivery...',
                    duration: 0
                });
                setTimeout(() => {
                    setTimeout(msg, 30);
                    this.$router.push('Finish')
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

