import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:inbox-outlined',
    title: '货品管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'ProductPage',
      component: () => import('/@/views/product/index.vue'),
      meta: {
        title: '货品管理',
        icon: 'ant-design:inbox-outlined',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
