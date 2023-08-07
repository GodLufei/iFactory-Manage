import { BasicColumn } from '/@/components/Table';
import { list } from '/@/api/product/product';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { ProductStatusEnum } from '/@/api/product/model/productModel';

export const columns: BasicColumn[] = [
  {
    title: '描述',
    dataIndex: 'description',
    width: 100,
  },
  {
    title: '地址',
    dataIndex: 'addressDetail',
    width: 120,
  },
  {
    title: '工时',
    dataIndex: 'totalManHour',
    width: 120,
  },
  {
    title: '完成率',
    dataIndex: 'completionRate',
    width: 120,
    customRender: ({ text }) => {
      return `${text} %`;
    },
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

export const datas = [];

export function getProducts() {
  return list();
}
