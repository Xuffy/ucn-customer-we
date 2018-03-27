<template>
  <div class="tableData">
    <h3 class="ucn-content-title">Pending Task</h3>
    <v-simple-table></v-simple-table>
  </div>
</template>

<script>
  import { VSimpleTable} from '@/components/index';

  export default {
    name: 'VTableData',
    components: {
      VSimpleTable
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
