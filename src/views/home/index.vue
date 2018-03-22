<template>
  <div>
    <dropDown :list="data" />
    <!--{{$tc('page.workbench')}}-->
    <v-complex-table></v-complex-table>
    <v-simple-table></v-simple-table>
  </div>
</template>

<script>
  import { VSimpleTable, VComplexTable, dropDown } from '@/components/index';

  export default {
    name: 'home',
    components: {
      VSimpleTable,
      VComplexTable,
      dropDown
    },
    data() {
      return {
        url: '',
        data:[
          {
              title: 'parent 1',
              expand: true,
              selected: true,
              children: [
                  {
                      title: 'parent 1-1',
                      expand: true,
                      children: [
                          {
                              title: 'leaf 1-1-1',
                              isActive:true,
                              disabled: false
                          },
                          {
                              title: 'leaf 1-1-2',
                              isActive:true,
                              disabled: false
                          }
                      ]
                  },
                  {
                      title: 'parent 1-2',
                      expand: true,
                      children: [
                          {
                              title: 'leaf 1-2-1',
                              isActive:true,
                              checked: false
                          },
                          {
                              isActive:true,
                              title: 'leaf 1-2-2'
                          }
                      ]
                  }
              ]
          }
      ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
