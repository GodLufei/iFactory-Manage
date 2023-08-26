import { ProductTypeEnum, TechnologyTypeEnum, WorkStationEnum } from '/@/api/product/enums/enums';
import { FormSchema } from '/@/components/Form';

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
    label: WorkStationEnum.One.name,
    value: WorkStationEnum.One.id,
  },
  {
    label: WorkStationEnum.Two.name,
    value: WorkStationEnum.Two.id,
  },
  {
    label: WorkStationEnum.Three.name,
    value: WorkStationEnum.Three.id,
  },
  {
    label: WorkStationEnum.Four.name,
    value: WorkStationEnum.Four.id,
  },
  {
    label: WorkStationEnum.Five.name,
    value: WorkStationEnum.Five.id,
  },
  {
    label: WorkStationEnum.Six.name,
    value: WorkStationEnum.Six.id,
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
    key: 'technologyTypeId',
    dataIndex: 'technologyTypeId',
    customRender: ({ text }) => {
      return `${TechnologyTypeEnum.from(text)?.name}`;
    },
  },
  {
    align: 'center',
    title: '工作区',
    key: 'workStationNo',
    dataIndex: 'workStationNo',
    customRender: ({ text }) => {
      return `${WorkStationEnum.from(text)?.name}`;
    },
  },
  {
    align: 'center',
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

export const productTechnologyFormSchemas: FormSchema[] = [
  {
    field: 'technologyTypeId',
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
  technologyTypeId: number;
  workStationNo: string;
}
