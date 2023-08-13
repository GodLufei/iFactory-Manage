import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';

export const productSchemas: FormSchema[] = [
  {
    field: 'description',
    component: 'Input',
    label: '描述',
    required: true,
    colProps: {
      span: 6,
    },
  },
  {
    field: 'addressDetail',
    component: 'Cascader',
    label: '地址',
    required: true,
    colProps: {
      span: 6,
      offset: 2,
    },
    componentProps: {
      options: [
        {
          value: '浙江省',
          label: '浙江省',
          children: [
            {
              value: '杭州市',
              label: '杭州市',
              children: [
                {
                  value: '西湖区',
                  label: '西湖区',
                },
              ],
            },
          ],
        },
        {
          value: '江苏省',
          label: '江苏省',
          children: [
            {
              value: '南京市',
              label: '南京市',
              children: [
                {
                  value: '鼓楼区',
                  label: '鼓楼区',
                },
                {
                  value: '秦淮区',
                  label: '秦淮区',
                },
                {
                  value: '江宁区',
                  label: '江宁区',
                },
                {
                  value: '六合区',
                  label: '六合区',
                },
                {
                  value: '雨花台区',
                  label: '雨花台区',
                },
                {
                  value: '建邺区',
                  label: '建邺区',
                },
                {
                  value: '浦口区',
                  label: '浦口区',
                },
                {
                  value: '溧水区',
                  label: '溧水区',
                },
              ],
            },
            {
              value: '无锡市',
              label: '无锡市',
              children: [
                {
                  value: '江阴市',
                  label: '江阴市',
                },
                {
                  value: '宜兴市',
                  label: '宜兴市',
                },
                {
                  value: '崇安区',
                  label: '崇安区',
                },
                {
                  value: '无锡新区',
                  label: '无锡新区',
                },
                {
                  value: '锡山区',
                  label: '锡山区',
                },
                {
                  value: '惠山区',
                  label: '惠山区',
                },
                {
                  value: '滨湖区',
                  label: '滨湖区',
                },
                {
                  value: '梁溪区',
                  label: '梁溪区',
                },
                {
                  value: '新吴区',
                  label: '新吴区',
                },
              ],
            },
          ],
        },
      ],
      displayRender: ({ labels }) => labels.join(' '),
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
    colProps: {
      offset: 2,
    },
  },
];
