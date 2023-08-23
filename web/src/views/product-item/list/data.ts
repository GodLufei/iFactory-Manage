import { BasicColumn } from '/@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { ProductStatusEnum } from '/@/api/product/model/productModel';
import { getProductItemList, getWaitToApproveProductItems } from '/@/api/product/productApi';
import { GetUserInfoModel } from '/@/api/sys/model/userModel';
import { RoleEnum } from '/@/enums/roleEnum';
import { DescItem } from '/@/components/Description';

export const productItemTableColumns: BasicColumn[] = [
  {
    title: '产品类型',
    dataIndex: 'productType',
    width: 50,
  },
  {
    title: '名称',
    dataIndex: 'productItemName',
    width: 50,
  },
  {
    title: '技术要求',
    dataIndex: 'technicalRequirements',
    width: 120,
  },
  {
    title: '材料',
    dataIndex: 'material',
    width: 50,
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: 50,
  },
  {
    title: '图号',
    dataIndex: 'figureNo',
    width: 50,
  },
  {
    title: '总计',
    dataIndex: 'amount',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'productStatus',
    width: 50,
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
    contentMinWidth: 20,
  },
  {
    field: 'title',
    label: '公司名称',
    contentMinWidth: 100,
  },
  {
    field: 'tax',
    label: '税号',
    contentMinWidth: 100,
  },
  {
    field: 'bankInfo',
    contentMinWidth: 100,
    label: '开户银行',
  },
  {
    field: 'bankAccount',
    contentMinWidth: 100,
    label: '银行账号',
  },
  {
    field: 'phoneNumber',
    contentMinWidth: 100,
    label: '联系电话',
  },
  {
    field: 'clientPerson',
    contentMinWidth: 100,
    label: '委托代理人',
  },
  {
    field: 'addressDetail',
    contentMinWidth: 100,
    label: '地址',
  },
];

export const getList = async (userInfo: GetUserInfoModel) => {
  return userInfo.roles.map((role) => role.value).includes(RoleEnum.APPROVER.toString())
    ? await getWaitToApproveProductItems()
    : await getProductItemList(userInfo.username);
};
