import { BasicColumn, FormSchema } from '/@/components/Table';
import { list } from '/@/api/product/product';
import { toRaw } from 'vue';

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
    customRender: ({ text }) => {
      return text === 1 ? '轴系' : '舵系';
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 120,
    customRender: function ({ text }) {
      const address = toRaw(text);
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
        { label: '全部', value: '0' },
        { label: '轴系', value: '1' },
        { label: '舵系', value: '2' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const datas = [];

export function getProducts() {
  return list();
}
