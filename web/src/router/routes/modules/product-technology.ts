import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const product: AppRouteModule = {
  path: '/product-technology',
  name: 'ProductTechnology',
  component: LAYOUT,
  redirect: '/product-technology/create',
  meta: {
    icon: 'ant-design:inbox-outlined',
    title: '模板管理',
    orderNo: 100,
    hideChildrenInMenu: true,
    roles: [RoleEnum.MANAGER],
  },
  children: [
    {
      path: 'create',
      name: 'CreateProductTechnologyPage',
      component: () => import('/@/views/product-technology/create/index.vue'),
      meta: {
        title: '模板管理',
        icon: 'ant-design:inbox-outlined',
        roles: [RoleEnum.MANAGER],
      },
    },
  ],
};

export default product;
