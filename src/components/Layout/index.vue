<template>
  <div class="app-wrapper">
    <v-header></v-header>
    <v-menu></v-menu>
    <div class="main-container" :class="{fullBox:$store.state.layout.hideMenu}">
      <nav-bar></nav-bar>

      <section class="app-main" :class="{'show-right-menu':showRightMenu}">
        <div class="content">
          <transition name="el-zoom-in-top">
            <router-view :key="key"></router-view>
          </transition>
        </div>
        <div class="right-menu">
          <div class="title-box">
            <h3 class="ucn-content-title inline">Message Board</h3>
            <i class="el-icon-d-arrow-right" @click="showRightMenu = !showRightMenu"></i>
          </div>
          <v-message-board></v-message-board>
        </div>
      </section>
    </div>

    <v-add-quick-link></v-add-quick-link>


  </div>
</template>

<script>
  import VHeader from './Header'
  import VMenu from './Menu'
  import NavBar from './navBar'
  import {VAddQuickLink, VMessageBoard} from '@/components/index'

  export default {
    name: 'layout',
    components: {
      VHeader,
      VMenu,
      NavBar,
      VAddQuickLink,
      VMessageBoard,
    },
    data() {
      return {
        showRightMenu: true,
      }
    },
    watch: {},
    mounted() {
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
    padding-left: 180px;
    padding-top: 60px;
    /*padding-bottom: 50px;*/
    transition: all .4s;
    box-sizing: border-box;
    /*min-width: 1186px;*/
    /*overflow: auto;*/
  }

  .app-main {
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    position: relative;
    transition: all .5s;
  }

  .app-main .content {
    background-color: #FFFFFF;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    min-height: 80vh;
  }

  .main-container.fullBox {
    padding-left: 50px !important;
  }

  .app-main .right-menu {
    width: 350px;
    position: fixed;
    right: 0;
    top: 0;
    padding-top: 140px;
    height: 100%;
    z-index: 99;
    box-sizing: border-box;
    background-color: #FFFFFF;
    transition: all .5s;
    transform: translate(100%, 0);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .right-menu .title-box {
    width: 50%;
    padding: 5px 10px 0 10px;
    top: 100px;
    left: 0;
    line-height: 30px;
    position: absolute;
    transition: all .5s;
    transition-delay: .4s;
    transform: translate(-100%, 0);
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .right-menu .title-box * {
    color: #999999;
  }

  .right-menu .title-box i {
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    transition: all .5s;
    transform: rotate(180deg);
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
    width: 0;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .show-right-menu.app-main {
    padding-right: 370px;
  }

  .show-right-menu .right-menu {
    transform: translate(0, 0);
  }

  .show-right-menu .title-box {
    transform: translate(0, 0);
  }

  .show-right-menu .right-menu .title-box {
    box-shadow: none;
    transition-delay: 0s;
    width: 100%;
  }

  .show-right-menu .right-menu .title-box i {
    transform: rotate(0);
    transition-delay: .5s;
  }
</style>
