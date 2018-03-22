<template>
    <div>
        <drop-down :list="dropData" />
    </div>
</template>
<script>
    import { dropDown } from '@/components/index';
    export default {
        data(){
            return {
                dropData:[
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
        components: {
            'drop-down':dropDown
        }
    }
</script>
