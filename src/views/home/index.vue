<template>
  <div>
    {{$tc('page.workbench')}}
    <v-table></v-table>
  </div>
</template>

<script>
	import { VTable } from '@/components/index';

  export default {
    name: 'home',
    components:{
			VTable
    },
    data () {
      return {
        url: ''
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
