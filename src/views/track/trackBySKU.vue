<template>
    <div class="track">
        <div class="title">
            trackBySKU
            <!-- {{$t('track.page.trackBySKU')}} -->
        </div>
        <div class="body">
            <!--<v-table :data="dataList"></v-table>-->
        </div>
    </div>
</template>

<script>
  import { VTable } from '@/components/index'

    export default {
        name: "track-track",
        components:{
          VTable
        },
        data(){
            return{
                dataList: [],
                params:{
                    pn: 1,
                    ps: 10,
                    skuNo: '',
                }
            }
        },
        methods:{
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },
            getList() {
              this.$ajax.post(this.$apis.get_track_getTrackInfoByPage,this.params).then(res=>{
                  console.log(res)
              }).catch(err=>{
                console.log(err)
              });
            }
        },
        created(){
            this.getList();
        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
</style>
