<template>
     <div class="qc_order">
             <div class="pro_title">
                {{title}}
             </div>
             <div class="QC_file">
                  <div class="QC_file_item">
                      <i class="el-icon-document" style='font-size:40px;line-height:60px;'></i>
                      <span>QC Order No123</span>
                  </div>
                  <div class="QC_file_item">
                      <i class="el-icon-document" style='font-size:40px;line-height:60px;'></i>
                      <span>QC Order No123</span>
                  </div>
             </div>
         </div>
</template>
<script>
    export default {
        name: 'qcOrder',
        props: {
            list: {
                type: Array,
                default: function() {
                    return [{

                    }]
                }
            },
            title: {
                type: String,
                default: this.$t('order.qcorder.qcOrder')
            }
        },
        data() {
            return {

            }
        }
    }

</script>
<style scoped="true">
    .pro_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
    }

    .QC_file {
        height: 100px;
        width: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
    }

    .QC_file_item {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }

</style>
