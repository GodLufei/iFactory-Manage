import { LoginParams } from './model/userModel';

import { RoleEnum } from '/@/enums/roleEnum';

export function getUserList() {
  return [
    {
      userId: '1',
      username: 'admin',
      realName: '管理员',
      avatar: '',
      desc: 'manager',
      password: '123456',
      token: 'manager-token',
      homePath: '/product/list',
      roles: [
        {
          roleName: '管理员',
          value: RoleEnum.MANAGER,
        },
      ],
    },
    {
      userId: '2',
      username: 'worker',
      password: '123456',
      realName: '员工',
      avatar: '',
      desc: '员工',
      token: 'worker-token',
      homePath: '/product-item/list',
      roles: [
        {
          roleName: '员工',
          value: RoleEnum.WORKER,
        },
      ],
    },
    {
      userId: '3',
      username: 'approver',
      password: '123456',
      realName: '审计',
      avatar: '',
      desc: 'approver',
      token: 'approver-token',
      homePath: '/product-item/list',
      roles: [
        {
          roleName: '审计',
          value: RoleEnum.APPROVER,
        },
      ],
    },
  ];
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  const checkUser = getUserList().find(
    (item) => item.username === params.username && params.password === item.password,
  );
  if (!checkUser) {
    throw new Error('Incorrect account or password！');
  }
  return checkUser.token;
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(token: string) {
  return getUserList().find((item) => item.token === token);
}

export function doLogout() {
  return {
    code: 0,
    message: 'ok',
    type: 'success',
  };
}
