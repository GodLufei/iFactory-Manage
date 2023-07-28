import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '货品名称',
    dataIndex: 'productName',
    width: 200,
  },
  {
    title: '货品类别',
    dataIndex: 'productCategory',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: '停用',
        unCheckedChildren: '启用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = checked;
        },
      });
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'productName',
    label: '货品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'productCategory',
    label: '货品类别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '轴系', value: '1' },
        { label: '舵系', value: '0' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const datas: object[] = [
  {
    productName: '联轴节',
    productCategory: '轴系',
    orderNo: 1,
    status: 1,
    createTime: '2023-07-30',
    remark: '嘻嘻嘻',
  },
  {
    productName: '上舵杆',
    productCategory: '舵系',
    orderNo: 2,
    status: 0,
    createTime: '2023-07-30',
    remark: '嘻嘻嘻',
  },
];
