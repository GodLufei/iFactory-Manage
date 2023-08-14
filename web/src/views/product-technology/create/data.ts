import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';

const provincesOptions = [
  {
    id: 'guangdong',
    label: '广东省',
    value: '1',
    key: '1',
  },
  {
    id: 'jiangsu',
    label: '江苏省',
    value: '2',
    key: '2',
  },
];
const citiesOptionsData = {
  guangdong: [
    {
      label: '珠海市',
      value: '1',
      key: '1',
    },
    {
      label: '深圳市',
      value: '2',
      key: '2',
    },
    {
      label: '广州市',
      value: '3',
      key: '3',
    },
  ],
  jiangsu: [
    {
      label: '南京市',
      value: '1',
      key: '1',
    },
    {
      label: '无锡市',
      value: '2',
      key: '2',
    },
    {
      label: '苏州市',
      value: '3',
      key: '3',
    },
  ],
};

export const productSchemas: FormSchema[] = [
  {
    field: 'description',
    component: 'Input',
    label: '描述',
    required: true,
    colProps: {
      span: 8,
    },
  },
  {
    field: 'divider-linked',
    component: 'Divider',
    label: '甲方信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'companyName',
    component: 'Input',
    label: '甲方',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '税号',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '委托代理人',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '开票电话',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '开户银行',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '账号',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '联系电话',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: 'E-mail',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'taxNo',
    component: 'Input',
    label: '传真',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'divider-linked',
    component: 'Divider',
    label: '甲方地址',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'province',
    component: 'Select',
    label: '省份',
    required: true,
    colProps: {
      span: 4,
    },
    componentProps: ({ formModel, formActionType }) => {
      return {
        options: provincesOptions,
        placeholder: '请选择省份',
        onChange: (e: any) => {
          // console.log(e)
          let citiesOptions =
            e == 1
              ? citiesOptionsData[provincesOptions[0].id]
              : citiesOptionsData[provincesOptions[1].id];
          // console.log(citiesOptions)
          if (e === undefined) {
            citiesOptions = [];
          }
          formModel.city = undefined; //  reset city value
          const { updateSchema } = formActionType;
          updateSchema({
            field: 'city',
            componentProps: {
              options: citiesOptions,
            },
          });
        },
      };
    },
  },
  {
    field: 'city',
    component: 'Select',
    label: '城市',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
    componentProps: {
      options: [], // defalut []
      placeholder: '请选择城市',
    },
  },
  {
    field: 'street',
    component: 'Input',
    label: '街道',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'zipCode',
    component: 'Input',
    label: '邮政编码',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
];

export const productItemTableSchemas: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'Name',
    width: 100,
  },
  {
    title: '类别',
    dataIndex: 'productType',
    width: 100,
  },
  {
    title: '材料',
    dataIndex: 'material',
    width: 100,
  },
  {
    title: '规格',
    dataIndex: 'diameter',
    width: 100,
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: 100,
  },
  {
    title: '指纹码',
    dataIndex: 'figureNo',
    width: 100,
  },
  {
    title: '总计',
    dataIndex: 'amount',
    width: 100,
  },
  {
    title: '单位',
    dataIndex: 'unit',
    width: 100,
  },
];

export const productItemFormSchemas: FormSchema[] = [
  {
    field: 'description',
    component: 'Input',
    label: '描述',
    required: true,
  },
  {
    field: 'addressDetail',
    component: 'Input',
    label: '地址',
    required: true,
  },
];
