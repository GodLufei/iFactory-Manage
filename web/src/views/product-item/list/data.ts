import { BasicColumn } from '/@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { ProductStatusEnum } from '/@/api/product/model/productModel';
import { getProductItemList, getWaitToApproveProductItems } from '/@/api/product/productApi';
import { GetUserInfoModel } from '/@/api/sys/model/userModel';
import { RoleEnum } from '/@/enums/roleEnum';
import { Pagable, Page } from '/@/api/model/baseModel';
import { DescItem } from '/@/components/Description';

export const productItemTableColumns: BasicColumn[] = [
  {
    title: '产品类型',
    dataIndex: 'productType',
    width: 100,
  },
  {
    title: '名称',
    dataIndex: 'productItemName',
    width: 120,
  },
  {
    title: '技术要求',
    dataIndex: 'technicalRequirements',
    width: 120,
  },
  {
    title: '材料',
    dataIndex: 'material',
    width: 120,
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: 120,
  },
  {
    title: '指纹码',
    dataIndex: 'figureNo',
    width: 120,
  },
  {
    title: '总计',
    dataIndex: 'amount',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'productStatus',
    width: 100,
    customRender: ({ text }) => {
      const status = ProductStatusEnum.fromName(text);
      return h(Tag, { color: status?.color ?? 'black' }, () => status?.name);
    },
  },
];

export const productSchemas: DescItem[] = [
  {
    field: 'description',
    label: '描述',
  },
  {
    field: 'title',
    label: '公司名称',
  },
  {
    field: 'tax',
    label: '税号',
  },
  {
    field: 'bankInfo',
    label: '开户银行',
  },
  {
    field: 'bankAccount',
    label: '银行账号',
  },
  {
    field: 'phoneNumber',
    label: '联系电话',
  },
  {
    field: 'clientPerson',
    label: '委托代理人',
  },
  {
    field: 'addressDetail',
    label: '地址',
  },
];

export const getList = async (page: Pagable, userInfo: GetUserInfoModel) => {
  return userInfo.roles.map((role) => role.value).includes(RoleEnum.APPROVER.toString())
    ? await getWaitToApproveProductItems(page)
    : await getProductItemList(page, userInfo.username);
};
