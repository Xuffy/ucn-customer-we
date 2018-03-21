<template>
  <div>
    <!--{{$tc('page.workbench')}}-->
    <v-complex-table></v-complex-table>
    <v-simple-table></v-simple-table>
  </div>
</template>

<script>
  import {VSimpleTable, VComplexTable} from '@/components/index';

  export default {
    name: 'home',
    components: {
      VSimpleTable,
      VComplexTable
    },
    data() {
      return {
        url: ''
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
