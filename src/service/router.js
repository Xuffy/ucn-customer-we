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
        component: () => import('../views/home/index.vue')
      }]
    },
    {
      path:'/dome',
      hidden: true,
      component: () => import('../views/dome')
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('../views/login/index.vue')
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
          component: () => import('../views/workbench/index.vue')
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
          path: '',
          component: () => import('../views/product/sourcing/sourcing'),
          name:'sourcing',
        },
        {
          path:'detail',
          component: () => import('../views/product/sourcing/detail'),
          name:'detail'
        },
        {
          path:'bookmark',
          component: () => import('../views/product/bookmark/bookmark'),
          name:'bookmark'
        },
        {
          path:'bookmarkDetail',
          component: () => import('../views/product/bookmark/detail.vue'),
          name:'bookmarkDetail'
        },
        {
          path:'compareOverview',
          component: () => import('../views/product/compare/overview.vue'),
          name:'compareOverview'
        },
        {
          path:'compare',
          component: () => import('../views/product/compare/compare.vue'),
          name:'compare'
        },
        {
          path:'message',
          component: () => import('../views/message/message.vue'),
          name:'message'
        },
        {
          path:'messageManagement',
          component: () => import('../views/message/messageManagement.vue'),
          name:'messageManagement'
        },


        // {
        //   path:'bookmark',
        //   component: () => import('../views/product/bookmark/index.vue'),
        //   name:'bookmark',
        //   children:[
        //         {
        //             path:'',
        //             component: () => import('../views/product/bookmark/bookmark.vue'),
        //             name:'',
        //         },
        //         {
        //             path:'detail',
        //             component: () => import('../views/product/bookmark/detail.vue'),
        //             name:'detail',
        //         },
        //     ]
        // },
      ]
    },
    {
        path: '/supplier',
        component: Layout,
        redirect: '/supplier/picture',
        name: 'Supplier',
        noDropdown: true,
        children: [
            {
                path: 'sourcing',
                name: 'Sourcing',
                component: () =>import ('../views/supplier/sourcing/sourcing.vue'),

        },
            {
                path: 'bookmark',
                name: 'Bookmark',
                component: () =>
                    import ('../views/supplier/bookmark/bookmark.vue')
        },
            {
                path: 'bookmarkDetail',
                name: 'bookmarkDetail',
                component: () =>import ('../views/supplier/bookmark/bookmarkDetail.vue')
        },
            {
                path: 'sourcingDetail',
                name: 'sourcingDetail',
                component: () =>import ('../views/supplier/sourcing/sourcingDetail.vue')
        },
               {
                path: 'Compare',
                name: 'Compare',
                component: () =>import ('../views/supplier/Compare/Compare.vue')
        },
                {
                path: 'CompareOverview',
                name: 'CompareOverview',
                component: () =>import ('../views/supplier/Compare/Overview.vue')
        }
      ]
    },
    {
      path: '/negotiation',
      component: Layout,
      redirect: '/negotiation/inquiryOverview',
      name: 'negotiation',
      noDropdown: true,
      children: [
        {
          path: 'inquiryOverview',
          name:'inquiryOverview',
          component: () => import('../views/negotiation/inquiryOverview')
        },
        {
          path: 'inquiryDetail',
          name: 'inquiryDetail',
          component: () => import('../views/negotiation/inquiryDetail')
        },
        {
          path: 'createInquiry',
          name: 'createInquiry',
          component: () => import('../views/negotiation/createInquiry')
        },
        {
          path: 'compareOverview',
          name: 'compareOverview',
          component: () => import('../views/negotiation/compareOverview')
        },
        {
          path: 'compare',
          name: 'compare',
          component: () => import('../views/negotiation/compare')
        }
      ]
    },
    {
      path: '/logistic',
      name: 'logistic',
      component: Layout,
      redirect: '/logistic/logisticPlanOverview',
      children: [
        {
          path: 'logisticPlanOverview',
          name: 'logisticPlanOverview',
          component: () => import('../views/logistic/logisticPlanOverview')
        },
        {
          path: 'placeLogisticPlan',
          name: 'placeLogisticPlan',
          component: () => import('../views/logistic/placeLogisticPlan')
        },
        {
          path: 'logisticPlanDetail',
          name: 'logisticPlanDetail',
          component: () => import('../views/logistic/logisticPlanDetail')
        },
        {
          path: 'logisticOrderOverview',
          name: 'logisticOrderOverview',
          component: () => import('../views/logistic/logisticOrderOverview')
        },
        {
          path: 'placeLogisticOrder',
          name: 'placeLogisticOrder',
          component: () => import('../views/logistic/placeLogisticOrder')
        },
        {
          path: 'logisticOrderDetail',
          name: 'logisticOrderDetail',
          component: () => import('../views/logistic/logisticOrderDetail')
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
                path: 'overView',
                component: () =>import('../views/order/overView.vue')
        },
            {
                path: 'creatOrder',
                component: () =>import('../views/order/creatOrder/index.vue')
        }, {
                path: 'poDetail',
                component: () =>import('../views/order/poDetail/index.vue')
        }, {
                path: 'draftOverview',
                component: () =>import('../views/order/draftOverview.vue')
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
          component: () => import('../views/warehouse/warehouseOverview.vue')
        },
        {
          path: 'qcDetail',
          component: () => import('../views/warehouse/qcDetail.vue')
        },
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
          component: () => import('../views/payment/index.vue')
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
          path: 'departmentSetting',
          component: () => import('../views/settings/departmentSetting.vue')
        }
      ]
    },
    {
      path: '/forgetPassword',
      name:'forgetPassword',
      hidden: true,
      component: () => import('../views/login/forgetPassword'),
      redirect: '/forgetPassword/inputEmail',
      children: [
        {
          path:'inputEmail',
          name:'inputEmail',
          hidden: true,
          component: () => import('../views/login/inputEmail')
        },
        {
          path:'Identify',
          name:'Identify',
          hidden: true,
          component: () => import('../views/login/Identify')
        },
        {
          path:'ResetPassword',
          name:'ResetPassword',
          hidden: true,
          component: () => import('../views/login/ResetPassword')
        },
        {
          path:'Finish',
          name:'Finish',
          hidden: true,
          component: () => import('../views/login/Identify')
        }
      ]
    },
    {
      path: '/signUp',
      name:'signUp',
      hidden: true,
      component: () => import('../views/login/signUp')
    },
    {
      path:'/getInvitationCode',
      name:'getInvitationCode',
      hidden: true,
      component: () => import('../views/login/getInvitationCode')
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
