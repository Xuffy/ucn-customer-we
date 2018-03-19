<template>
    <div class="log-message">
        <div class="log-head">
            <Button type="primary">Down the logs</Button>
            <Button type="primary">Mark as Read</Button>
            <Input class="log-input"
                   v-model="value"
                   icon="ios-clock-outline"
                   placeholder="Please input key word to search."
                   @on-click="search"
                   @on-enter="search"
                   style="width: 200px"></Input>
        </div>
        <div class="log-body">

        </div>
    </div>
</template>

<script>
    export default {
        name: "log-message",
        data(){
            return{
                value:''
            }
        },
        methods:{
            search(){
                console.log(111)
            }
        }
    }
</script>

<style scoped>
    .log-message{
        padding: 5px 12px;
    }
    .log-input{
        float: right;
    }
</style>