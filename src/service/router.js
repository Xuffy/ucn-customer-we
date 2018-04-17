import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router'
import config from 'service/config';
import Layout from 'components/Layout/index.vue'
import {localStore, sessionStore} from 'service/store';

Vue.use(Router);

export const routerMap = [
    {
      path: '/',
      component: Layout,
      redirect: '/workbench/index',
      hidden: true, // 在侧边栏中不显示该菜单
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/workbench',
      component: Layout,
      name: 'Workbench',
      redirect: '/workbench/index',
      noDropdown: true,
      children: [
        {
          path: 'index',
          meta: {
            draft: false,
            recycleBin: false,
            log: false,
          },
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
          name: 'Sourcing Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/sourcing/sourcing'),
        },
        {
          path: 'sourcingDetail',
          name: 'Sourcing Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/sourcing/detail'),
        },
        {
          path: 'bookmark',
          name: 'Bookmark Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/bookmark/bookmark'),
        },
        {
          path: 'bookmarkDetail',
          name: 'Bookmark Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/bookmark/detail'),
        },
        {
          path: 'bookmarkManuallyAdd',
          name: 'Bookmark ManuallyAdd',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/bookmark/manuallyAdd'),
        },
        {
          path: 'bookmarkRecycleBin',
          name: 'Bookmark RecycleBin',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/bookmark/recycleBin'),
        },

        {
          path: 'compare',
          name: 'Compare Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/compare/overview'),
        },
        {
          path: 'compareDetail',
          name: 'Compare Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/product/compare/compare'),
        },
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      redirect: '/supplier/sourcing',
      name: 'Supplier',
      children: [
        {
          path: 'sourcing',
          name: 'Sourcing',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/sourcing/sourcing.vue'),
        },
        {
          path: 'bookmark',
          name: 'Bookmark',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/bookmark/bookmark.vue')
        },
        {
          path: 'bookmarkDetail',
          name: 'Bookmark Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/bookmark/bookmarkDetail.vue')
        },
        {
          path: 'sourcingDetail',
          name: 'Sourcing Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/sourcing/sourcingDetail.vue')
        },
        {
          path: 'compareDetail',
          name: 'Compare Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/Compare/Compare.vue')
        },
        {
          path: 'compare',
          name: 'Compare Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import ('../views/supplier/Compare/Overview.vue')
        }
      ]
    },
    {
      path: '/negotiation',
      component: Layout,
      redirect: '/negotiation/inquiry',
      name: 'negotiation',
      children: [
        {
          path: 'inquiry',
          name: 'Inquiry Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/negotiation/inquiryOverview')
        },
        {
          path: 'inquiryDetail',
          name: 'Inquiry Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/negotiation/inquiryDetail')
        },
        {
          path: 'createInquiry',
          name: 'Create Inquiry',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/negotiation/createInquiry')
        },
        {
          path: 'compare',
          name: 'Compare Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/negotiation/compareOverview')
        },
        {
          path: 'compareDetail',
          name: 'Compare Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/negotiation/compare')
        }
      ]
    },
    {
      path: '/payment',
      component: Layout,
      redirect: '/payment/index',
      name: 'Payment',
      noDropdown: true,
      children: [
        {
          path: 'index',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/payment/index.vue')
        }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order/overview',
      name: 'Order',
      noDropdown: true,
      children: [
        {
          path: 'overview',
          name: 'Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/order/overView.vue')
        },
        {
          path: 'creat',
          name: 'Creat',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/order/creatOrder/index.vue')
        }, {
          path: 'detail',
          name: 'Detail',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/order/poDetail/index.vue')
        }, {
          path: 'draftOverview',
          name: 'Draft Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/order/draftOverview.vue')
        }
      ]
    },
    {
      path: '/warehouse',
      component: Layout,
      redirect: '/warehouse/overview',
      name: 'Warehouse',
      noDropdown: true,
      children: [
        {
          path: 'overview',
          name: 'Warehouse Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/warehouse/warehouseOverview.vue'),
        },
        {
          path: 'qcOverview',
          name: 'Qc Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/warehouse/qcOverview.vue'),
        },
        {
          path: 'qcDetail',
          name: 'QcOrder Detail',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/warehouse/qcDetail.vue'),
        },
        {
          path: 'createQc',
          name: 'Create QcOrder',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/warehouse/createQc.vue'),
        },
      ]
    },
    {
      path: '/logistic',
      name: 'logistic',
      component: Layout,
      redirect: '/logistic/plan',
      children: [
        {
          path: 'plan',
          name: 'Plan Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/logisticPlanOverview')
        },
        {
          path: 'placeLogisticPlan',
          name: 'Place Logistic Plan',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/placeLogisticPlan')
        },
        {
          path: 'planDetail',
          name: 'Plan Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/logisticPlanDetail')
        },
        {
          path: 'orderOverview',
          name: 'Order Overview',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/logisticOrderOverview')
        },
        {
          path: 'placeLogisticOrder',
          name: 'Place Logistic Order',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/placeLogisticOrder')
        },
        {
          path: 'orderDetail',
          name: 'Order Detail',
          hidden: true,
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/logistic/logisticOrderDetail')
        }
      ]

    },
    {
      path: '/settings',
      component: Layout,
      redirect: '/settings/department',
      name: 'Settings',
      children: [
        {
          path: 'department',
          name: 'department and user setting',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/settings/departmentSetting.vue')
        },
        {
          path: 'category',
          name: 'Category Setting',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/settings/CategorySetting')
        },
           {
          path: 'Personal',
          name: 'Personal Setting',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/settings/personalSetting')
        },
          {
              path: 'companyInfo',
              name: 'Company Info',
              meta: {
                  draft: true,
                  recycleBin: true,
                  log: true,
              },
              component: () => import('../views/settings/companyInfo')
          },
      ]
    },
    {
      path: '/track',
      component: Layout,
      redirect: '/track/index',
      name: 'Track',
      noDropdown: true,
      children: [
        {
          path: 'index',
          meta: {
            draft: true,
            recycleBin: true,
            log: true,
          },
          component: () => import('../views/track/trackBySKU.vue'),
        }
      ]
    },
    {
      path: '/logs',
      component: Layout,
      name: 'Logs',
      redirect: '/logs/index',
      noDropdown: true,
      hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('../views/logs/logs.vue')
        }
      ]
    },
    {
      path: '/message',
      component: Layout,
      redirect: '/message/index',
      name: 'Message',
      hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('../views/message/message.vue'),
        },
        {
          name: 'Management',
          path: 'management',
          component: () => import('../views/message/messageManagement.vue'),
        },

      ],
    },
    // todo 供应商路由
    {
      path: '/sellerProduct',
      component: Layout,
      redirect: '/sellerProduct/overview',
      name: 'sellerProduct',
      hidden: true,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('../views/sellerProduct/overview')
        },
        {
          path: 'addNewProduct',
          name: 'Add New Product',
          component: () => import('../views/sellerProduct/addNewProduct')
        },
        {
          path: 'detail',
          name: 'Detail',
          component: () => import('../views/sellerProduct/detail')
        },
      ]
    },
    //draft  草稿箱路由
    {
      path: '/draft',
      component: Layout,
      name: 'draft',
      redirect: '/draft/index',
      noDropdown: true,
         hidden: true,
      children: [
        {
          path: 'index',
          meta: {
            draft: false,
            recycleBin: false,
            log: false,
          },
          component: () => import('../views/draft/index.vue')
        }
      ]
    },
        //recycleBin  回收站路由
    {
      path: '/recycle',
      component: Layout,
      name: 'recycle Bin',
      redirect: '/recycle/index',
      noDropdown: true,
         hidden: true,
      children: [
        {
          path: 'index',
          meta: {
            draft: false,
            recycleBin: false,
            log: false,
          },
          component: () => import('../views/recycleBin/index.vue')
        }
      ]
    },
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
        return to.matched.length ?
          next({path: to.matched[1] ? to.matched[1].redirect : to.matched[0].redirect}) : next({path: '/'});
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
