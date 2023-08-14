import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const product: AppRouteModule = {
  path: '/product-technology',
  name: 'ProductTechnology',
  component: LAYOUT,
  redirect: '/product-technology',
  meta: {
    icon: 'ant-design:inbox-outlined',
    title: '模板管理',
    orderNo: 100,
    roles: [RoleEnum.MANAGER],
  },
  children: [
    {
      path: 'list',
      name: 'ProductTechnologyListPage',
      component: () => import('/@/views/product-technology/list/index.vue'),
      meta: {
        title: '模板管理',
        icon: 'ant-design:inbox-outlined',
        roles: [RoleEnum.MANAGER],
      },
    },
    {
      path: 'create',
      name: 'CreateProductTechnologyPage',
      component: () => import('/@/views/product-technology/create/index.vue'),
      meta: {
        title: '模板创建',
        icon: 'ant-design:inbox-outlined',
        roles: [RoleEnum.MANAGER],
      },
    },
    {
      path: 'detail/:id',
      name: 'ProductTechnologyDetailPage',
      component: () => import('/@/views/product-technology/detail/index.vue'),
      meta: {
        title: '模板详情',
        icon: 'ant-design:inbox-outlined',
        realPath: 'product-technology/detail',
        hideTab: true,
        hideBreadcrumb: true,
        hideMenu: true,
        roles: [RoleEnum.MANAGER],
      },
    },
  ],
};

export default product;
