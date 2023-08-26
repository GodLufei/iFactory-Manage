import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';
import pc from '../pc';
import { ProductTypeEnum, TechnologyTypeEnum } from '/@/api/product/enums/enums';

const provincesOptions = pc.map((city) => ({
  id: city.code,
  label: city.name,
  value: city.name,
  key: city.code,
}));

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

export const productSchemas: FormSchema[] = [
  {
    field: 'description',
    component: 'Input',
    label: '描述',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'divider-info-linked',
    component: 'Divider',
    label: '甲方信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'title',
    component: 'Input',
    label: '公司名称',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'tax',
    component: 'Input',
    label: '税号',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'bankInfo',
    component: 'Input',
    label: '开户银行',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'bankAccount',
    component: 'Input',
    label: '银行账号',
    required: true,
    colProps: {
      span: 4,
      offset: 2,
    },
  },
  {
    field: 'phoneNumber',
    component: 'Input',
    label: '联系电话',
    required: true,
    colProps: {
      span: 4,
    },
  },
  {
    field: 'divider-address-linked',
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
          console.log(e);
          const citiesOptions = pc
            .find((p) => p.name == e)
            ?.children.map((city) => ({
              id: city.code,
              label: city.name,
              value: city.name,
              key: city.code,
            }));
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
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '产品类型',
    dataIndex: 'productTypeId',
    width: 100,
    customRender: ({ text }) => {
      const status = ProductTypeEnum.from(text);
      return status?.name;
    },
  },
  {
    title: '技术要求',
    dataIndex: 'technicalRequirements',
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
    title: '图号',
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
    field: 'name',
    component: 'Input',
    label: '名字',
    required: true,
  },
  {
    field: 'productTypeId',
    component: 'Select',
    label: '产品类型',
    required: true,
    componentProps: {
      options: productTypeOptions, // defalut []
    },
  },
  {
    field: 'technicalRequirements',
    component: 'Input',
    label: '技术要求',
    required: true,
  },
  {
    field: 'material',
    component: 'Input',
    label: '材料',
    required: true,
  },
  {
    field: 'diameter',
    component: 'Input',
    label: '规格',
    required: true,
  },
  {
    field: 'length',
    component: 'Input',
    label: '长度',
    required: true,
  },
  {
    field: 'figureNo',
    component: 'Input',
    label: '图号',
    required: true,
  },
  {
    field: 'amount',
    component: 'Input',
    label: '总计',
    required: true,
  },
  {
    field: 'unit',
    component: 'Input',
    label: '单位',
    required: true,
  },
];
