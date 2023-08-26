import { BasicColumn } from '/@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { ProductStatusEnum } from '/@/api/product/enums/enums';

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
    dataIndex: 'productStatusId',
    width: 100,
    customRender: ({ text }) => {
      const status = ProductStatusEnum.from(text);
      return h(Tag, { color: status?.color ?? 'black' }, () => status?.name);
    },
  },
];
