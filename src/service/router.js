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
      path:'/demo',
      hidden: true,
      component: () => import('../views/demo')
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
      redirect: '/product/sourcing',
      name: 'Product',
      children: [
        {
          path: 'sourcing',
          name:'sourcing',
          component: () => import('../views/product/sourcing/index'),
          children:[
              {
                  path:'',
                  component: () => import('../views/product/sourcing/sourcing'),
              },
              {
                  path:'detail',
                  component: () => import('../views/product/sourcing/detail'),
                  name:'detail'
              },
          ]
        },
        {
          path:'logs',
          component: () => import('../views/product/sourcing/logs'),
          name:'logs'
        },
        {
          path:'bookmark',
          component: () => import('../views/product/bookmark/index'),
          name:'bookmark',
          children:[
              {
                  path:'',
                  component: () => import('../views/product/bookmark/bookmark'),
              },
              {
                  path:'detail',
                  component: () => import('../views/product/bookmark/detail'),
                  name:'bookmarkDetail'
              },
              {
                  path:'manuallyAdd',
                  component: () => import('../views/product/bookmark/manuallyAdd'),
                  name:'manuallyAdd',
              },
              {
                  path:'recycleBin',
                  component: () => import('../views/product/bookmark/recycleBin'),
                  name:'recycleBin',
              }
          ]
        },
        {
          path:'compare',
          component:() => import('../views/product/compare/index'),
          name:'compare',
          children:[
              {
                  path:'',
                  component: () => import('../views/product/compare/overview'),
                  name:'compare overview',
              },
              {
                  path:'detail',
                  component: () => import('../views/product/compare/compare'),
                  name:'compareDetail',
              },
          ]
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
      ]
    },
    {
        path: '/supplier',
        component: Layout,
        redirect: '/supplier/picture',
        name: 'Supplier',
        children: [
            {
                path: 'SupplierSourcing',
                name: 'SupplierSourcing',
                component: () =>import ('../views/supplier/sourcing/sourcing.vue'),

        },
            {
                path: 'SupplierBookmark',
                name: 'SupplierBookmark',
                component: () =>
                    import ('../views/supplier/bookmark/bookmark.vue')
        },
            {
                path: 'SupplierBookmarkDetail',
                name: 'SupplierBookmarkDetail',
                component: () =>import ('../views/supplier/bookmark/bookmarkDetail.vue')
        },
            {
                path: 'SupplierSourcingDetail',
                name: 'SupplierSourcingDetail',
                component: () =>import ('../views/supplier/sourcing/sourcingDetail.vue')
        },
               {
                path: 'SupplierCompare',
                name: 'SupplierCompare',
                component: () =>import ('../views/supplier/Compare/Compare.vue')
        },
                {
                path: 'SupplierCompareOverview',
                name: 'SupplierCompareOverview',
                component: () =>import ('../views/supplier/Compare/Overview.vue')
        }
      ]
    },
    {
        path:'/sellerProduct',
        component:Layout,
        redirect:'/sellerProduct/overview',
        name:'sellerProduct',
        children:[
            {
                path:'overview',
                name:'overview',
                component: () => import('../views/sellerProduct/overview')
            }
        ]
    },
    {
      path: '/negotiation',
      component: Layout,
      redirect: '/negotiation/inquiryOverview',
      name: 'negotiation',
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
                name:'orderOverView',
                component: () =>import('../views/order/overView.vue')
        },
            {
                path: 'creatOrder',
                name:'creatOrder',
                component: () =>import('../views/order/creatOrder/index.vue')
        }, {
                path: 'poDetail',
                name:'poDetail',
                component: () =>import('../views/order/poDetail/index.vue')
        }, {
                path: 'draftOverview',
                name:'draftOverview',
                component: () =>import('../views/order/draftOverview.vue')
        }
      ]
    },
    {
      path: '/warehouse',
      component: Layout,
      redirect: '/warehouse/overview',
      name: 'Warehouse',
      children: [
        {
          path: 'overview',
          component: () => import('../views/warehouse/warehouseOverview.vue'),
          name:'warehouse overview'
        },
        {
          path: 'qcOverview',
          component: () => import('../views/warehouse/qcOverview.vue'),
          name:'qc overview'
        },
        {
          path: 'qcDetail',
          component: () => import('../views/warehouse/qcDetail.vue'),
          name:'qcOrder detail'
        },
        {
          path: 'createQc',
          component: () => import('../views/warehouse/createQc.vue'),
          name:'createQcOrder'
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
      redirect: '/settings/departmentSetting',
      name: 'Settings',
      noDropdown: true,
      children: [
        {
          path: 'departmentSetting',
          component: () => import('../views/settings/departmentSetting.vue')
        },
        {
          path: 'CategorySetting',
          component: () => import('../views/settings/CategorySetting')
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
    },
    {
        path: '/track',
        component: Layout,
        redirect: '/track/trackBySKU',
        name: 'Track',
        children: [
            {
                path: 'trackBySKU',
                component: () =>import('../views/track/trackBySKU.vue'),
                name:'trackBySKU'
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
