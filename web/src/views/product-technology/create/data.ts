import { ProductTypeEnum } from '/@/api/product/model/productModel';
import { TechnologyTypeEnum } from '/@/api/product/model/technologyModel';
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

export const technologyTypeOptions = [
  {
    label: TechnologyTypeEnum.Blanking.name,
    value: TechnologyTypeEnum.Blanking.id,
  },
  {
    label: TechnologyTypeEnum.RoughTurning.name,
    value: TechnologyTypeEnum.RoughTurning.id,
  },
  {
    label: TechnologyTypeEnum.FineTurning.name,
    value: TechnologyTypeEnum.FineTurning.id,
  },
  {
    label: TechnologyTypeEnum.Perforate.name,
    value: TechnologyTypeEnum.Perforate.id,
  },
  {
    label: TechnologyTypeEnum.FineMilling.name,
    value: TechnologyTypeEnum.FineMilling.id,
  },
  {
    label: TechnologyTypeEnum.Compounding.name,
    value: TechnologyTypeEnum.Compounding.id,
  },
];

export const workStationNoOptions = [
  {
    label: '1号车间',
    value: 1,
  },
  {
    label: '2号车间',
    value: 2,
  },
  {
    label: '3号车间',
    value: 3,
  },
  {
    label: '4号车间',
    value: 4,
  },
  {
    label: '5号车间',
    value: 5,
  },
  {
    label: '6号车间',
    value: 6,
  },
];

export const productTechnologyStepSchemas = [
  {
    align: 'center',
    title: '步骤',
    dataIndex: 'stepIndex',
    key: 'stepIndex',
    customRender: ({ text }) => {
      return `第 ${text} 步`;
    },
  },
  {
    align: 'center',
    title: '技术类型',
    key: 'technologyType',
    dataIndex: 'technologyType',
    customRender: ({ text }) => {
      return `${TechnologyTypeEnum.from(text)?.name}`;
    },
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

export const productTechnologyFormSchemas: FormSchema[] = [
  {
    field: 'technologyType',
    component: 'Select',
    label: '技术要求',
    required: true,
    componentProps: {
      options: technologyTypeOptions, // defalut []
    },
  },
  {
    field: 'workStationNo',
    component: 'Select',
    label: '工作车间',
    required: true,
    componentProps: {
      options: workStationNoOptions, // defalut []
    },
  },
];

export interface StepTechnology {
  key: string;
  stepIndex: number;
  technologyType: number;
  workStationNo: number;
}
