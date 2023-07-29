import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const product: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product',
  meta: {
    icon: 'ant-design:inbox-outlined',
    title: '货品管理',
    orderNo: 100,
  },
  children: [
    {
      path: 'list',
      name: 'ProductPage',
      component: () => import('/@/views/product/list/index.vue'),
      meta: {
        title: '货品管理',
        icon: 'ant-design:inbox-outlined',
      },
    },
    {
      path: 'create',
      name: 'CreateProductPage',
      component: () => import('/@/views/product/create/index.vue'),
      meta: {
        title: '货品创建',
        icon: 'ant-design:inbox-outlined',
      },
    },
    {
      path: 'detail',
      name: 'ProductDetailPage',
      component: () => import('/@/views/product/detail/index.vue'),
      meta: {
        title: '货品详情',
        icon: 'ant-design:inbox-outlined',
      },
    },
  ],
};

export default product;
