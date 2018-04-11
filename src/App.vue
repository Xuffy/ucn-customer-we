<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {},
    watch: {
      $route(val) {
        this.$store.state.quickLink.draft = val.meta.draft;
        this.$store.state.quickLink.log = val.meta.log;
        this.$store.state.quickLink.recycleBin = val.meta.recycleBin;
      }
    },
  }
</script>


<style lang="less">

  #app {
  }
</style>
