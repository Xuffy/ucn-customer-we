<template>
    <div class="track">
        <div class="title">
            trackBySKU
            <!-- {{$t('track.page.trackBySKU')}} -->
        </div>
        <div class="body">
          <div class="search">
            <select-search
              v-model="searchId"
              class="search"
              :options=options
              @inputEnter="inputEnter"
              :searchLoad="searchLoad">
            </select-search>
          </div>
          </div>
            <v-table :data="dataList" :height="500"></v-table>
        </div>
    </div>
</template>

<script>
  import { VTable,selectSearch } from '@/components/index'

    export default {
        name: "track-track",
        components:{
          selectSearch,
          VTable
        },
        data(){
            return{
                dataList: [],
                searchLoad: false,
                searchId:'1',
                params:{
                    pn: 1,
                    ps: 10,
                    skuCode:'',
                },
              options: [{
                id: '1',
                label: 'skuCode'
              }],
            }
        },
        methods:{
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },
            inputEnter(val) {
              console.log(val)
              if (!val.keyType) return this.$message('请选中搜索类型');
              if (!val.key) return this.$message('搜索内容不能为空');
              if (val.keyType == '1') {
                this.params.skuCode= val.key
              }
              this.getList()
            },
            getList() {
              this.$ajax.post(this.$apis.get_track_getTrackInfoByPage,this.params).then(res=>{
                  console.log(res)
                this.dataList = this.$getDB(this.$db.track.track, res.datas,item=>{
                  // _.mapObject(item, val => {
                  //   val.type === 'textDate' && val.value && (val.value = this.$dateFormat(val.value, 'yyyy-mm-dd'))
                  //   return val
                  // })

                  return item;
                });
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
