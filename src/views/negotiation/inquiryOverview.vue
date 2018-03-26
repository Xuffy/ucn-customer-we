<template>
    <div class="inquiryOverview">
        <h3 class="hd">inquiry Overview</h3>
        <div class="select">
            <div class="btn-wrap">
                <span>Status:</span>
                <button>TBC by Customer</button>
                <button>TBC by Supplier</button>
                <button>Finish</button>
                <button>Canceled</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:''
    }
</script>
<style lang="less" scoped>
    .inquiryOverview {
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #666;
        }
    }
</style>
