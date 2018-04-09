<template>
   <div>
        <div class="attchment_title">{{$t('order.basicinfo.attachment')}}                 
        </div>
         <Upload class='upload' @getres='getres' :disabled='disabled'></Upload> 
            <div class="Vattchment" >   
                 <div class="attchment_content">
                    <span class='attchment_item'>
                        <span class="attchment_item_name">
                             <i class="el-icon-document" style='color:#BEBEBE'></i>
                             <p>123456111111111111118</p>
                        </span>   
                          <button  class='el_delete' :disabled='disabled' @click='deleteFile'>     
                                 <i class="el-icon-circle-close" style='color:#f56c6c;fontSize:16px'></i>
                           </button> 
                    </span> 
                       
                </div>      
            </div>
            
            
    </div>
</template>
<script>
    import {
        Upload
    } from '@/components/index';
    export default {
        name: "attchment",
        props: {
            //....attchment的数据
            list: {
                type: Array,
                default: function() {
                    return []
                }
            },
            disabled: {
                type: Boolean,
                default: true
            }
        },
        components: {
            Upload
        },
        data() {
            return {

            }
        },
        methods: {
            deleteFile() {},
            //上传成功一层一层通知父组件 //
            getres(data) {
                this.$emit('getres', data)
            },

        }
    }

</script>
<style scoped="true">
    .Vattchment {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }

    .upload {
        margin-top: 10px;
    }


    .attchment_content {
        width: 100%;
        height: ;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .el-icon-document {
        font-size: 40px;
    }

    .attchment_item {
        height: 40px;
        display: flex;
        justify-content: flex-start;
        padding: 4px;
        margin-right: 10px;
    }

    .attchment_item_name {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        width: 150px;
    }

    .attchment_item_name p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .attchment_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;

    }

    .el_delete {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center
    }

</style>
