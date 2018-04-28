<template>
  <el-row v-if="list.length">
    <el-col :xs="raster" :sm="raster" :md="raster" :lg="raster" :xl="raster" v-for="(a, i) of list" :key="'list-' + i">
      <div class="right">
        <span>{{ `${ title }(${ a.text })`}}</span>
        <el-input :placeholder="a.placeholder" v-model="a.value" v-if="edit"></el-input>
        <p v-else>{{ a.value }}</p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    title: String,
    raster: {
      type: Number,
      default: 4
    },
    list: {
      type: Array,
      default: []
    },
    edit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
.right {
  display:flex;
  align-items: center;
  padding:10px 0;
  span {
    width: 140px;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    display:inline-block;
    font-size:12px;
    text-align: right;
    padding-right:10px;
    box-sizing: border-box;
  }
  .el-select, .el-input {
    flex:1;
  }
}
</style>
