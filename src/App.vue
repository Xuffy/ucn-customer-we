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

        this.$store.state.messageBoard.show = !!val.meta.messageBoard;
        this.$store.state.messageBoard.code = val.meta.messageBoard;
      }
    },
  }
</script>


<style lang="less">

  #app {
  }
</style>
