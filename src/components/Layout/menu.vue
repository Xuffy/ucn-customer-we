<template>
  <div class="menu ucn-menu" :class="{hideMenu:hideMenu}">
    <div class="fold-box" @click="changeHideMenu">
      <Icon type="chevron-left" v-show="!hideMenu"></Icon>
      <Icon type="chevron-right" v-show="hideMenu"></Icon>
    </div>

    <Menu theme="dark">
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        Quick Link
      </MenuItem>
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        Order OverviewOrder OverviewOrder Overview
      </MenuItem>
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        Pages
      </MenuItem>
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        Actions
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
  import {routerMap} from 'service/router'

  export default {
    name: 'VMenu',
    data() {
      return {
        routerList: [],
        activeName: null,
        activeOpen: [],
        hideMenu: false
      }
    },
    mounted() {
      routerMap.forEach(value => {
        // 判断路由是否显示
        if (!value.hidden) {
          this.routerList.push(value)
        }
      });

      this.updateMenuActive()
    },
    methods: {
      updateMenuActive() {
        this.activeOpen = [];
        this.activeName = '';
        _.map(this.routerList, (val, index) => {
          if (val.name === this.$route.matched[0].name) {
            this.activeOpen.push(index.toString());
            _.map(val.children, (cVal, cIndex) => {
              if (this.$route.name === cVal.name || this.$route.path === cVal.redirect) {
                this.activeName = `${index}-${cIndex}`;
              }
            });
            if (!this.activeName) {
              _.map(val.children, (cVal, cIndex) => {
                if (this.$route.matched[1].name === cVal.name) {
                  this.activeName = `${index}-${cIndex}`;
                }
              });
            }
          }
        });
      },
      checkAuth(param) {
        let user = this.$localStore.get('user') || {userType: 1};

        if (_.isEmpty(param)) {
          return true;
        }

        return _.indexOf(param, user.userType) !== -1;
      },
      changeHideMenu() {
        this.$parent.$emit('full-box', !this.hideMenu);
        this.hideMenu = !this.hideMenu;
      }
    },
    watch: {
      $route() {
        this.updateMenuActive()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/style/base.less";

  .menu {
    position: fixed;
    height: 100%;
    margin-top: 70px;
    top: 0;
    left: 0;
    background-color: @menu-back;
    z-index: 910;
    transform: translate(0, 0);
    transition: all .4s;
  }

  .menu .ivu-menu {
    background-color: @menu-back;
    transition: all .3s;
    max-width: 220px;
  }

  .menu .ivu-menu-item {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ivu-menu-dark {
    background-color: #333333;
  }

  .fold-box {
    position: absolute;
    right: 0;
    top: 40%;
    z-index: 911;
    height: 60px;
    background-color: #3f3f3f;
    width: 20px;
    cursor: pointer;
    line-height: 60px;
    text-align: center;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    transition: all .5s;
    opacity: 0;
    transform: translate(0, 0);
  }

  .menu.hideMenu .fold-box,
  .menu:hover .fold-box {
    transform: translate(20px);
    opacity: 1;
  }

  .fold-box i {
    color: rgba(255, 255, 255, .7);;
    font-size: 18px;
    margin-left: -2px;
    margin-top: 2px;
  }

  .fold-box:hover i {
    color: #FFFFFF;
  }

  .menu.hideMenu {
    transform: translate(-100%, 0);
  }
</style>
<style>
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background-color: #262626 !important;
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background-color: #292929;
    /*background-color: #333333;*/
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    background: #333333;
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background-color: #1f1f1f !important;
    position: relative;
  }

  .menu .router-link-active li {
    color: #fff !important;
    background-color: #262626 !important;
    border: none !important;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    color: rgba(255, 255, 255, .7);
    border: none;
    background-color: #3f3f3f;
  }
</style>
