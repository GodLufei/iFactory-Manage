import { FormSchema } from '/@/components/Form';

export const schemas: FormSchema[] = [
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
