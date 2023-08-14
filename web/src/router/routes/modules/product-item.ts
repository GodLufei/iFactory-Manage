import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const product: AppRouteModule = {
  path: '/product-item',
  name: 'ProductItem',
  component: LAYOUT,
  redirect: '/product-item',
  meta: {
    icon: 'ant-design:inbox-outlined',
    title: '成品管理',
    orderNo: 100,
    roles: [RoleEnum.WORKER, RoleEnum.APPROVER],
  },
  children: [
    {
      path: 'list',
      name: 'ProductItemListPage',
      component: () => import('/@/views/product-item/list/index.vue'),
      meta: {
        title: '成品管理',
        icon: 'ant-design:inbox-outlined',
        roles: [RoleEnum.WORKER, RoleEnum.APPROVER],
      },
    },
  ],
};

export default product;
