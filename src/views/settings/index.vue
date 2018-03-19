<template>
  <div>
    <!--settings page-->
      <v-logs></v-logs>
  </div>
</template>

<script>

    import VLogs from '../logs/logMessage'

  export default {
    name: 'settings',
      components:{
          VLogs
      },
    data() {
      return {}
    },
    created() {
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
