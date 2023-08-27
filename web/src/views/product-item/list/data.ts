import { BasicColumn } from '/@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { getProductItemList, getWaitToApproveProductItems } from '/@/api/product/productApi';
import { GetUserInfoModel } from '/@/api/sys/model/userModel';
import { RoleEnum } from '/@/enums/roleEnum';
import { DescItem } from '/@/components/Description';
import { ProductStatusEnum, ProductTypeEnum } from '/@/api/product/enums/enums';

export const productItemTableColumns: BasicColumn[] = [
  {
    title: '产品类型',
    dataIndex: 'productTypeId',
    width: 50,
    customRender: ({ text }) => {
      const status = ProductTypeEnum.fromName(text);
      return status?.name;
    },
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
    dataIndex: 'productStatusId',
    width: 50,
    customRender: ({ text }) => {
      const status = ProductStatusEnum.from(text);
      console.log(status);
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
    field: 'createTime',
    label: '创建时间',
    contentMinWidth: 100,
  },
  {
    field: 'completionRate',
    label: '完成率',
    contentMinWidth: 100,
    render: (v) => `${v} %`,
  },
  {
    field: 'productStatusId',
    contentMinWidth: 100,
    label: '产品状态',
    render: (v) => {
      const status = ProductStatusEnum.from(v);
      return h(Tag, { color: status?.color ?? 'black' }, () => status?.name);
    },
  },
  {
    field: 'totalManHour',
    contentMinWidth: 100,
    label: '工时',
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
