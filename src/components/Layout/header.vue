<template>
  <div class="header-box ucn-header">
    <div class="header">
      <img class="c5-icon logo" src="../../assets/images/logo.png" @click="$router.push('/')">

      <div class="ucn-header-menu" v-if="routerList.length">
        <Menu theme="dark" mode="horizontal" :active-name="activeName" :open-names="activeOpen"
              :accordion="true">
          <template v-for="(item,index) in routerList">

            <router-link v-if="item.children.length&&item.noDropdown&&!item.hidden&&checkAuth(item.auth)"
                         :to="item.path+'/'+item.children[0].path">
              <MenuItem :name="index + ''">
                {{item.name}}
              </MenuItem>
            </router-link>


            <Submenu v-if="!item.noDropdown&&!item.hidden&&checkAuth(item.auth)" :key="index" :name="index + ''">
              <template slot="title">
                <span v-text="item.name"></span>
              </template>

              <template v-if="item.children.length&&!item.noDropdown&&!item.hidden"
                        v-for="(cItem,cIndex) in item.children">
                <router-link :to="item.path+'/'+cItem.path" v-if="!cItem.hidden&&checkAuth(cItem.auth)">
                  <MenuItem :key="cIndex" :name="index +'-'+cIndex">
                    {{cItem.name}}
                  </MenuItem>
                </router-link>
              </template>
            </Submenu>
          </template>
        </Menu>
      </div>

      <div class="header-right">
        <Dropdown trigger="click" class="mobile-hide-lg">

          <a href="javascript:void(0)">
            {{username || '管理员'}}&nbsp;&nbsp;|&nbsp;&nbsp;
          </a>
          <a href="javascript:void(0)" @click="logout">
            Sign out
          </a>
        </Dropdown>

        <Dropdown class="mobile-show-lg user-box">
          <a href="javascript:void(0)">
            <Icon type="person"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>User name</DropdownItem>
            <DropdownItem divided>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import {routerMap} from 'service/router'

  export default {
    name: 'VHeader',
    data() {
      return {
        username: 'User Name',
        userType: ['店长', '设计师', '管理员'],
        routerList: [],
        activeName: null,
        activeOpen: []
      }
    },
    created() {
      let user = this.$localStore.get('user');
      if (!_.isEmpty(user)) {
        this.username = user.nickName;
        this.userType = this.userType[user.userType - 1];
      } else {
        this.userType = this.userType[0];
      }

      routerMap.forEach(value => {
        // 判断路由是否显示
        if (!value.hidden) {
          this.routerList.push(value)
        }
      });

      this.updateMenuActive()
    },
    methods: {
      logout() {
        this.$Modal.confirm({
          title: '系统提示',
          content: '是否确认退出登录',
          onOk: () => {
            this.$localStore.clearAll();
            this.$localStore.clearAll();
            this.$router.push('/login');
          }
        });
      },
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
  @import '../../assets/style/base.less';

  .header-box {
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 910;
  }

  .header {
    height: 100%;
    line-height: 70px;
    background-color: @header-back;
  }

  .logo {
    width: 90px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    vertical-align: middle;
  }

  .title {
    font-size: 24px;
    color: #ffffff;
    font-weight: 400;
    cursor: pointer;
  }

  .ivu-dropdown-rel a {
    color: #ffffff;
    font-size: 14px;
  }

  .ivu-dropdown {
    margin-left: 30px;
  }

  .ivu-dropdown-menu {
    text-align: left;
  }

  .ucn-header-menu {
    display: inline-block;
    line-height: 70px;
    vertical-align: middle;
  }

  .ucn-header-menu .ivu-menu {
    background: none;
  }

  .header-right {
    /*text-align: right;*/
    /*padding-right: 20px;*/
    position: absolute;
    right: 20px;
    top: 0;
  }
  .user-box{
    vertical-align: middle;
  }
  .user-box .ivu-icon-person{
    font-size: 20px;
  }
</style>
<style>

  .ucn-header-menu .ivu-menu-submenu-title {
    /*color: #FFFFFF!important;*/
  }

  .ucn-header-menu:after {
    content: none !important;
  }

  .ucn-header-menu .ivu-menu-horizontal .ivu-menu-item,
  .ucn-header-menu .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0;
    padding-left: 3vw;
  }
</style>
