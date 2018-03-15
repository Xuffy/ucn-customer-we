import Vue from 'vue'
import Router from 'vue-router'
import config from 'service/config';
import Layout from 'components/Layout/index.vue'
import {localStore, sessionStore} from 'service/store';

Vue.use(Router);


export const routerMap = [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Home',
      hidden: true, // 在侧边栏中不显示该菜单
      children: [{
        path: 'home',
        component: resolve => {
          require(['../views/home/index.vue'], resolve)
        }
      }]
    },
    {
      path: '/login',
      hidden: true,
      component: resolve => {
        require(['../views/login/index.vue'], resolve)
      }
    },

    {
      path: '/workbench',
      component: Layout,
      redirect: '/workbench',
      name: 'Workbench',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/workbench/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/product',
      component: Layout,
      redirect: '/product',
      name: 'Product',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/product/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      redirect: '/supplier/picture',
      name: 'Supplier',
      children: [
        {
          path: 'sourcing',
          name: 'Sourcing',
          component: resolve => {
            require(['../views/supplier/sourcing.vue'], resolve)
          }
        },
        {
          path: 'bookmark',
          name: 'Bookmark',
          component: resolve => {
            require(['../views/supplier/bookmark.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/negotiation',
      component: Layout,
      redirect: '/negotiation',
      name: 'Negotiation',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/negotiation/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order',
      name: 'Order',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/order/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/warehouse',
      component: Layout,
      redirect: '/warehouse',
      name: 'Warehouse',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/warehouse/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/logistic',
      component: Layout,
      redirect: '/logistic',
      name: 'Logistic',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/logistic/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/payment',
      component: Layout,
      redirect: '/payment',
      name: 'Payment',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/payment/index.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/settings',
      component: Layout,
      redirect: '/settings',
      name: 'Settings',
      noDropdown: true,
      children: [
        {
          path: 'index',
          component: resolve => {
            require(['../views/settings/index.vue'], resolve)
          }
        }
      ]
    }
  ]
;


let router = new Router({
  routes: routerMap
});
router.beforeResolve((to, from, next) => {
  let ts = localStore.get('ticket')
    , cacheParam = sessionStore.get('cache_router_param') || []
    , cp = _.findWhere(cacheParam, {path: to.path}) // 从缓存中获取对应路由参数
    , version;


  if (to.path !== '/login' || from.path === '/login') {
    version = localStore.get('version');

    if (version !== config.VERSION) { // 版本控制
      // return next({path: '/login'});
    } else if (_.isEmpty(ts)) { // 登录验证
      // return next({path: '/login'});
    }
  }


  // 判断路由是否必须带入参数 todo 跳转之前页面地址没有带上参数
  if (to.meta.needParam) {
    if (_.isEmpty(to.params) && _.isEmpty(to.query)) {
      if (!_.isEmpty(cp)) {
        _.map(cp.query, (val, key) => {
          to.query[key] = val;
        });

        _.map(cp.params, (val, key) => {
          to.params[key] = val;
        });
      } else {
        return to.matched.length ? next({path: to.matched[1] ? to.matched[1].redirect : to.matched[0].redirect}) : next({path: '/'});
      }
    }
    if (!_.isEmpty(cp)) {
      cacheParam = _.filter(cacheParam, val => {
        return val.path !== to.path;
      });
    }

    cacheParam.push(_.pick(to, 'path', 'params', 'query'));
    sessionStore.set('cache_router_param', cacheParam);

  }

  next();
});

export default router
