<template>
  <div>
		<v-drop-down :list="data"></v-drop-down>
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
				url: '',
				data: [
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
																title: 'leaf 1-2-1'
														}
												]
										}
								]
						}
				]
      }
		},
		methods: {
			
		},
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
