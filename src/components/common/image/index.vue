<template>
  <div class="ucn-image"
       :style="{height:height, width:width}">
    <!--, backgroundImage:'url('+ src +')'-->
    <img style="width: 100px;height: 100px" :src="src" onerror="this.src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527578482&di=b0fbda4d9a1d6c30fc7bfec6da62fcb7&src=http://img.zcool.cn/community/01767058be2833a801219c77c0b81a.png@1280w_1l_2o_100sh.png';this.onerror=null"/>
  </div>
</template>

<script>
  export default {
    name: 'VImage',
    props: {
      src: {
        type: String,
        default: '',
      },
      height: {
        type: String,
        default: '80px',
      },
      width: {
        type: String,
        default: '80px',
      },
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .ucn-image {
    background-size: cover;
    background-position: center;
  }
</style>
