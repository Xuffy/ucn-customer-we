<template>
  <div class="quickLink">
    <h3 class="ucn-content-title inline">Quick Link</h3>
    <el-button size="mini" type="primary" icon="el-icon-plus"
               style="display: inline-block;margin-left: 30px!important;"
               @click="$store.state.quickLink.show = true"></el-button>
    <br/>
    <el-button size="mini" v-for="item in $store.state.quickLink.list" :key="item.id">
      {{item.label}}
    </el-button>

  </div>
</template>

<script>

  export default {
    name: 'VQuickLink',
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quickLink .el-button {
    margin-top: 10px;
  }
</style>
