import { BasicColumn, FormSchema } from '/@/components/Table';
import { list } from '/@/api/product/product';

export const columns: BasicColumn[] = [
  {
    title: '货品名称',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '货品类别',
    dataIndex: 'productType',
    width: 100,
    customRender: ({ type }) => {
      return type === 1 ? '轴系' : '舵系';
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 120,
    customRender: ({ address }) => {
      return `${address.province} ${address.city} ${address.street}`;
    },
  },
  {
    title: '报价单Id',
    dataIndex: 'quotationId',
    width: 120,
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '货品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'productType',
    label: '货品类别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '舵系', value: '2' },
        { label: '轴系', value: '1' },
        { label: '全部', value: '0' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const datas = await getProducts();

export function getProducts() {
  return list();
}
