<template>
    <div>
        <div style="width:300px;">
            <drop-down :list="dropData" ref="dropDown"  />
        </div>
        <div style="width:300px;">
            <drop-down-single :list="dropData" ref="dropDown" />
        </div>
    </div>
</template>
<script>
    import { 
        VSimpleTable, 
        VComplexTable, 
        dropDown, 
        Expand, 
        FilterColumn, 
        FilterValue, 
        Upload,
        UploadDialog,
        Download,
        Layout,
        dropDownSingle
    } from '@/components/index';
    export default {
        components: {
            'v-simple-table':VSimpleTable,
            'v-complex-table':VComplexTable,
            'drop-down':dropDown,
            'expand':Expand,
            'filter-column':FilterColumn,
            'filter-value':FilterValue,
            'upload':Upload,
            'download':Download,
            'layout':Layout,
            "drop-down-single" :dropDownSingle
        },
        data(){
            return {
                dropData:[{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                    id: 9,
                    label: '三级 1-1-1'
                    }, {
                    id: 10,
                    label: '三级 1-1-2'
                    }]
                }]
                }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
                }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
                }],
            }
        }
    }
</script>
