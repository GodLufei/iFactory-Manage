import { ProductTypeEnum } from '/@/api/product/model/productModel';
import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';

export const productTypeOptions = [
  {
    label: ProductTypeEnum.ShaftingSystem.name,
    value: ProductTypeEnum.ShaftingSystem.id,
  },
  {
    label: ProductTypeEnum.RudderSystem.name,
    value: ProductTypeEnum.RudderSystem.id,
  },
  {
    label: ProductTypeEnum.NonStandardPart.name,
    value: ProductTypeEnum.NonStandardPart.id,
  },
  {
    label: ProductTypeEnum.StandardPart.name,
    value: ProductTypeEnum.StandardPart.id,
  },
  {
    label: ProductTypeEnum.Other.name,
    value: ProductTypeEnum.Other.id,
  },
];

export const productTechnologyStepSchemas = [
  {
    align: 'center',
    title: '步骤',
    dataIndex: 'stepIndex',
    key: 'stepIndex',
  },
  {
    align: 'center',
    title: '技术类型',
    key: 'technologyType',
    dataIndex: 'technologyType',
  },
  {
    align: 'center',
    title: '工作区',
    key: 'workStationNo',
    dataIndex: 'workStationNo',
  },
  {
    align: 'center',
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
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
