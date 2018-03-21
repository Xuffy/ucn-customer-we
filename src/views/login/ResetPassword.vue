<template>
    <div class="input-email">
        <div class="inputBox center">
            <div class="form-input">
                <label for="Email：">New password:</label><Input v-model="oldPass" placeholder="Please input the email" clearable style="width: 200px" type="password" />
            </div>
            <div class="form-input">
                <label for="Email：">Repeat the password：</label><Input v-model="newPass" placeholder="Please input the email" clearable style="width: 200px" type="password" />
            </div>
        </div>
        <div class="inputBox btn">
            <Button type="primary" @click="Next">submit</Button>
        </div>
    </div>
</template>
<script>
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
            padding:40px 0;
            &.center {
                height:50%;
            }
            .form-input {
                width:100%;
                display:flex;
                align-items: center;
                margin-top:10px;
            }
            &.btn {
                text-align: center;
            }
            label {
                width: 40%;
                text-align: right;
                padding-right:15px;
            }
        }
    }
</style>

