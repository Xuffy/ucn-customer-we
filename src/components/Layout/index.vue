<template>
  <div class="app-wrapper">
    <v-header></v-header>
    <v-menu></v-menu>
    <div class="main-container" :class="{fullBox:fullBox}">
      <nav-bar></nav-bar>
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <div style="background-color: #FFFFFF;height: 100%;padding: 10px;border-radius: 5px">
            <router-view :key="key"></router-view>
          </div>
        </transition>
      </section>
    </div>


  </div>
</template>

<script>
  import VHeader from './Header'
  import VMenu from './Menu'
  import NavBar from './navBar'

  export default {
    name: 'layout',
    components: {
      VHeader,
      VMenu,
      NavBar
    },
    data() {
      return {
        fullBox: false
      }
    },
    mounted() {
      this.$on('full-box', (type) => {
        this.fullBox = type;
      });
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
      },
    },
    methods: {}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main-container {
    width: 100%;
    padding-left: 220px;
    padding-top: 70px;
    /*padding-bottom: 50px;*/
    transition: all .4s;
    box-sizing: border-box;
  }

  .app-main {
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
  }

  .main-container.fullBox {
    padding-left: 0 !important;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    height: 40px;
    line-height: 40px;
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

</style>
