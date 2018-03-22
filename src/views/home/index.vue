<template>
  <div>
    <!--{{$tc('page.workbench')}}-->
    <v-complex-table></v-complex-table>
    <v-simple-table></v-simple-table>
  </div>
</template>

<script>
  import { VSimpleTable, VComplexTable } from '@/components/index';

  export default {
    name: 'home',
    components: {
      VSimpleTable,
      VComplexTable
    },
    data() {
      return {
        url: '',
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
