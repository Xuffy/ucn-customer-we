<template>
  <div>
		<v-drop-down></v-drop-down>
    {{$tc('page.workbench')}}
    <v-table></v-table>
  </div>
</template>

<script>
  import VTable from 'components/common/table/table';
	import { DropDown } from '@/components/index';
  export default {
    name: 'home',
    components:{
			VTable,
			'v-drop-down':DropDown
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
