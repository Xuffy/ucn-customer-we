<template>
  <div v-if="list.length">
    <el-col >
      <div class="right">
        <span>￥-$</span>
        <el-input :placeholder="a.placeholder" v-model="a.value"></el-input>
      </div>
    </el-col>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                exchangeRateList: [{
                    "entryId": 1,
                    "entryDt": 1524711629694,
                    "entryName": "1",
                    "updateId": 1,
                    "updateDt": 1524711629694,
                    "updateName": "1",
                    "id": null,
                    "ownerId": 1,
                    "companyId": 1,
                    "tenantId": 1,
                    "orderId": 1,
                    "orderNo": "",
                    "sourceCurrency": "u",
                    "targetCurrency": "c",
                    "exchangeRate": 1,
                    "timeZone": "0",
                    "version": 0
                }],
            }
        }
    }

</script>
<style lang="less" scoped>
    .right {
        display: flex;
        align-items: center;
        padding: 10px 0;
        span {
            width: 140px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            font-size: 12px;
            text-align: right;
            padding-right: 10px;
            box-sizing: border-box;
        }
        .el-select,
        .el-input {
            flex: 1;
        }
    }

</style>
