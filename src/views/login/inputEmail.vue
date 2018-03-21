<template>
    <div class="input-email">
        <div class="inputBox center">
            <label for="Email：">Email：</label><Input v-model="val" type="email" placeholder="Please input the email" clearable style="width: 200px" />
        </div>
        <div class="inputBox">
            <Button type="primary" @click="Next">submit</Button>
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

