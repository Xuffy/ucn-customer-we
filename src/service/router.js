import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router'
import Config from 'service/config';
import Layout from 'components/layout/index.vue';
import $i from '../language/index';
import {Notification, Message} from 'element-ui';
import {localStore, sessionStore} from 'service/store';
import Util from 'service/util';

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
    meta: {name: $i.router.workbench},
    redirect: '/workbench/index',
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: 'workbench',
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
    meta: {name: $i.router.product},
    redirect: '/product/sourcing',
    children: [
      {
        path: 'sourcing',
        name: 'productSourcingOverview',
        meta: {
          // draft: false,
          // recycleBin: false,
          // log: true,
          name: $i.router.productSourcingOverview
        },
        component: () => import('../views/product/sourcing/sourcing'),
      },
      {
        path: 'sourcingDetail',
        name: 'productSourcingDetail',
        hidden: true,
        meta: {
          // draft: false,
          // recycleBin: false,
          // log: true,
          name: $i.router.productSourcingDetail
        },
        component: () => import('../views/product/sourcing/detail'),
      },
      {
        path: 'bookmark',
        name: 'productBookmarkOverview',
        meta: {
          // draft: false,
          // recycleBin: true,
          // log: true,
          name: $i.router.productBookmarkOverview
        },
        component: () => import('../views/product/bookmark/bookmark'),
      },
      {
        path: 'bookmarkDetail',
        name: 'productBookmarkDetail',
        hidden: true,
        meta: {
          // draft: false,
          // recycleBin: true,
          // log: false,
          name: $i.router.productBookmarkDetail
        },
        component: () => import('../views/product/bookmark/detail'),
      },
      {
        path: 'bookmarkManuallyAdd',
        name: 'productBookmarkManuallyAdd',
        hidden: true,
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.productBookmarkManuallyAdd
        },
        component: () => import('../views/product/bookmark/manuallyAdd'),
      },
      {
        path: 'recycleBin',
        name: 'productBookmarkRecycleBin',
        hidden: true,
        meta: {
          // draft: false,
          // recycleBin: true,
          // log: true,
          name: $i.router.productBookmarkRecycleBin
        },
        component: () => import('../views/product/bookmark/recycleBin'),
      },

      {
        path: 'compare',
        name: 'productCompareOverview',
        meta: {
          // draft: false,
          // recycleBin: true,
          // log: true,
          name: $i.router.productCompareOverview
        },
        component: () => import('../views/product/compare/overview'),
      },
      {
        path: 'compareDetail/:type',
        name: 'productCompareDetail',
        hidden: true,
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.productCompareDetail
        },
        component: () => import('../views/product/compare/compare'),
      },
      {
        path: 'compareRecycleBin',
        name: 'productCompareRecycleBin',
        hidden: true,
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.productCompareRecycleBin
        },
        component: () => import('../views/product/compare/recycleBin'),
      },
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    meta: {name: $i.router.supplier},
    redirect: '/supplier/sourcing',
    children: [
      {
        path: 'sourcing',
        name: 'supplierSourcing',
        meta: {
          draft: false,
          recycleBin: false,
          log: true,
          name: $i.router.supplierOverview
        },
        component: () => import ('../views/supplier/sourcing/sourcing.vue'),
      },
      {
        path: 'bookmark',
        name: 'supplierBookmark',
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: $i.router.supplierBookmark
        },
        component: () => import ('../views/supplier/bookmark/bookmark.vue')
      },
      {
        path: 'bookmarkDetail',
        name: 'supplierBookmarkDetail',
        hidden: true,
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: $i.router.supplierBookmarkDetail
        },
        component: () => import ('../views/supplier/bookmark/bookmarkDetail.vue')
      },
      {
        path: 'bookmarkRecycleBin',
        name: 'bookmarkRecycleBin',
        hidden: true,
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: $i.router.supplierBookmarkRecycleBin
        },
        component: () => import ('../views/supplier/bookmark/recycleBin.vue')
      },
      {
        path: 'sourcingDetail',
        name: 'supplierSourcingDetail',
        hidden: true,
        meta: {
          draft: false,
          recycleBin: false,
          log: true,
          name: $i.router.supplierSourcingDetail
        },
        component: () => import ('../views/supplier/sourcing/sourcingDetail.vue')
      },
      {
        path: 'compareDetail/:type',
        name: 'supplierCompareDetail',
        hidden: true,
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: $i.router.supplierCompareDetail
        },
        component: () => import ('../views/supplier/compare/compare.vue')
      },
      {
        path: 'compare',
        name: 'supplierCompare',
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: $i.router.supplierCompareOverview
        },
        component: () => import ('../views/supplier/compare/overview.vue')
      },
      {
        path: 'compareRecycleBin',
        name: 'supplierCompareRecycleBin',
        hidden: true,
        meta: {
          draft: false,
          recycleBin: true,
          log: true,
          name: 'Compare RecycleBin'
        },
        component: () => import ('../views/supplier/compare/recycleBin.vue')
      }
    ]
  },
  {
    path: '/negotiation',
    component: Layout,
    redirect: '/negotiation/inquiry',
    name: 'negotiation',
    meta: {name: $i.router.negotiation},
    children: [
      {
        path: 'inquiry',
        name: 'negotiationInquiry',
        meta: {
          name: $i.router.negotiationInquiryOverview,
          draft: 'INQUIRY:OVERVIEW:DRAFT',
          recycleBin: 'INQUIRY:OVERVIEW:RECYCLE_BIN'
        },
        component: () => import('../views/negotiation/inquiryOverview')
      },
      {
        path: 'inquiryDetail',
        name: 'negotiationInquiryDetail',
        hidden: true,
        meta: {
          name: $i.router.negotiationInquiryDetail,
          messageBoard: 'code',
          draft: 'INQUIRY:DETAIL:DRAFT',
          recycleBin: 'INQUIRY:DETAIL:RECYCLE_BIN'
        },
        component: () => import('../views/negotiation/inquiryDetail')
      },
      {
        path: 'createInquiry',
        name: 'negotiationCreateInquiry',
        hidden: true,
        meta: {
          name: $i.router.negotiationCreateInquiry
        },
        component: () => import('../views/negotiation/createInquiry')
      },
      {
        path: 'compare',
        name: 'negotiationCompare',
        meta: {
          name: $i.router.negotiationCompareOverview,
          recycleBin: 'INQUIRY:COMPARE_OVERVIEW:RECYCLE_BIN'
        },
        component: () => import('../views/negotiation/compareOverview')
      },
      {
        path: 'compareDetail/:type',
        name: 'negotiationCompareDetail',
        hidden: true,
        meta: {
          name: $i.router.negotiationCompareDetail
        },
        component: () => import('../views/negotiation/compare')
      },
      {
        path: 'draft/:type',
        name: 'negotiationDraft',
        hidden: true,
        meta: {
          name: $i.router.negotiationDraft
        },
        component: () => import('../views/negotiation/draft')
      },
      {
        path: 'recycleBin/:type',
        name: 'negotiationRecycleBin',
        hidden: true,
        meta: {
          name: $i.router.negotiationRecycleBin
        },
        component: () => import('../views/negotiation/recycleBin')
      }
    ]
  },
  {
    path: '/payment',
    meta: {name: $i.router.payment},
    component: Layout,
    redirect: '/payment/index',
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: 'payment',
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
    meta: {name: $i.router.order},
    noDropdown: true,
    children: [
      {
        path: 'overview',
        name: 'order',
        meta: {
          // draft: '/order/draft',
          // recycleBin: true,
          // log: true,
          name: $i.router.orderOverview
        },
        component: () => import('../views/order/overView.vue')
      },
      {
        path: 'create',
        name: 'orderCreate',
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.orderCreate
        },
        component: () => import('../views/order/createOrder/createOrder.vue')
      },
      {
        path: 'detail',
        name: 'Order Detail',
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.orderDetail
        },
        component: () => import('../views/order/poDetail/poDetail.vue')
      },

      {
        path: 'draft',
        name: 'orderDraft',
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.orderDraft
        },
        component: () => import('../views/order/draftOverview.vue')
      }, {
        path: 'recycleBin',
        name: 'orderRecycleBin',
        meta: {
          draft: true,
          recycleBin: true,
          log: true,
          name: $i.router.orderRecycleBin
        },
        component: () => import('../views/order/recycleBin.vue')
      }
    ]
  },
  {
    path: '/warehouse',
    component: Layout,
    redirect: '/warehouse/overview',
    name: 'Warehouse',
    meta: {name: $i.router.warehouse},
    noDropdown: false,
    children: [
      {
        path: 'overview',
        name: 'Warehouse Overview',
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.warehouseOverview
        },
        component: () => import('../views/warehouse/warehouseOverview.vue'),
      },
      {
        path: 'qcOverview',
        name: 'warehouseQc',
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.warehouseQcOverview
        },
        component: () => import('../views/warehouse/qcOverview.vue'),
      },
      {
        path: 'qcDetail',
        name: 'warehouseQcOrderDetail',
        hidden: true,
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.warehouseQcOrderDetail
        },
        component: () => import('../views/warehouse/qcDetail.vue'),
      },
      {
        path: 'createQc',
        name: 'warehouseCreateQcOrder',
        hidden: true,
        meta: {
          // draft: true,
          // recycleBin: true,
          // log: true,
          name: $i.router.warehouseCreateQcOrder
        },
        component: () => import('../views/warehouse/createQc.vue'),
      },
    ]
  },
  {
    path: '/logistic',
    name: 'logistic',
    meta: {name: $i.router.logistic},
    component: Layout,
    redirect: '/logistic/plan',
    children: [
      {
        path: 'plan',
        name: 'overviewPlan',
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.logisticPlanOverview
        },
        component: () => import('../views/logistic/logisticPlanOverview')
      },
      {
        path: 'loadingList',
        name: 'overviewLoadingList',
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.logisticLoadingListOverview
        },
        component: () => import('../views/logistic/logisticPlanOverview')
      },
      {
        path: 'draft',
        name: 'overviewDraft',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.logisticLoadingDraft
        },
        component: () => import('../views/logistic/logisticPlanOverview')
      },
      {
        path: 'archivePlan',
        name: 'archivePlan',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.archive
        },
        component: () => import('../views/logistic/archivePlan')
      },
      {
        path: 'archiveDraft',
        name: 'archiveDraft',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.archive
        },
        component: () => import('../views/logistic/archiveDraft')
      },
      {
        path: 'archiveLoadingList',
        name: 'archiveLoadingList',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: true,
          importTask: false,
          name: $i.router.archive
        },
        component: () => import('../views/logistic/archiveLoadingList')
      },
      // {
      //   path: 'archive',
      //   name: 'overviewArchive',
      //   hidden: true,
      //   meta: {
      //     draft: '/logistic/draft',
      //     recycleBin: false,
      //     log: true,
      //     importTask: false,
      //     name: $i.router.logisticLoadingArchive
      //   },
      //   component: () => import('../views/logistic/logisticPlanOverview')
      // },
      {
        path: 'placeLogisticPlan',
        name: 'placeLogisticPlan',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: false,
          importTask: false,
          name: $i.router.logisticPlaceLogisticPlan
        },
        component: () => import('../views/logistic/logisticPlanDetail')
      },
      {
        path: 'planDetail',
        name: 'logisticPlanDetail',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: false,
          importTask: false,
          name: $i.router.logisticPlaceDetail
        },
        component: () => import('../views/logistic/logisticPlanDetail')
      },
      {
        path: 'loadingListDetail',
        name: 'loadingListDetail',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: false,
          importTask: false,
          name: $i.router.logisticLoadingList
        },
        component: () => import('../views/logistic/logisticPlanDetail')
      },
      {
        path: 'planDraftDetail',
        name: 'logisticDraftDetail',
        hidden: true,
        meta: {
          draft: '/logistic/draft',
          recycleBin: false,
          log: false,
          importTask: false,
          name: $i.router.logisticLoadingDraft
        },
        component: () => import('../views/logistic/logisticPlanDetail')
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/department',
    meta: {name: $i.router.settings},
    children: [
      {
        path: 'department',
        name: 'settingsDepartment',
        meta: {
          // draft: true,
          // recycleBin: false,
          // log: true,
          auth: [0],
          name: $i.router.settingsDepartment
        },
        component: () => import('../views/settings/departmentSetting.vue')
      },
      {
        path: 'category',
        name: 'settingsCategory',
        meta: {
          draft: true,
          recycleBin: true,
          log: true,
          auth: [0],
          name: $i.router.settingsCategory
        },
        component: () => import('../views/settings/CategorySetting')
      },
      {
        path: 'Personal',
        name: 'settingsPersonal',
        meta: {
          draft: true,
          recycleBin: true,
          log: true,
          name: $i.router.settingsPersonal
        },
        component: () => import('../views/settings/personalSetting')
      },
      {
        path: 'companyInfo',
        name: 'settingsCompany',
        meta: {
          draft: true,
          recycleBin: true,
          log: true,
          auth: [0],
          name: $i.router.settingsCompany
        },
        component: () => import('../views/settings/companyInfo')
      },
    ]
  },
  {
    path: '/track',
    component: Layout,
    redirect: '/track/index',
    meta: {name: $i.router.track},
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: 'track',
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
    redirect: '/logs/index',
    meta: {name: $i.router.logs},
    noDropdown: true,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'logs',
        meta: {
          draft: true,
          recycleBin: true,
          log: true,
        },
        component: () => import('../views/logs/logs.vue')
      },
      {
        path: 'import',
        name: 'logsImport',
        meta: {},
        component: () => import('../views/logs/import.vue')
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/message/index',
    meta: {name: $i.router.message},
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'message',
        component: () => import('../views/message/message.vue'),
      },
      {
        name: 'Management',
        path: 'messageManagement',
        meta: {
          name: $i.router.messageManagement
        },
        component: () => import('../views/message/messageManagement.vue'),
      },

    ],
  },
  // todo 供应商路由
  //draft  草稿箱路由
  {
    path: '/draft',
    component: Layout,
    meta: {name: $i.router.draft},
    redirect: '/draft/index',
    noDropdown: true,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'draft',
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
    meta: {name: $i.router.recycle},
    redirect: '/recycle/index',
    noDropdown: true,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'recycleBin',
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

let router = new Router({
  routes: routerMap
});

router.beforeResolve((to, from, next) => {
  let ts = localStore.get('token')
    , cacheParam = sessionStore.get('cache_router_param') || []
    , cp = _.findWhere(cacheParam, {path: to.path}) // 从缓存中获取对应路由参数
    , version;

  if (to.meta && to.meta.auth && !Util.$auth(to.meta.auth)) {
    return next({path: '/'});
  }

  if (to.path !== '/login' || from.path === '/login') {
    /*version = localStore.get('version');

    if (version !== Config.VERSION) { // 版本控制
      return next({path: '/login'});
    }*/
    if (_.isEmpty(ts)) { // 登录验证
      return next({path: '/login'});
    }
  }

  // 判断路由是否必须带入参数 todo 跳转之前页面地址没有带上参数
  /*if (to.meta.needParam) {
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

  }*/

  // Notification.closeAll();

  next();
});

export default router
