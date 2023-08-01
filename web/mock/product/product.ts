import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';
import { Product, ProductItemDTO } from '/@/api/product/model/productModel';

const productInfos: Product[] = [
  {
    id: 1,
    name: 'product 1',
    address: {
      street: '南京街',
      city: '南京市',
      province: '江苏省',
      zipCode: '0010101',
    },
    quotationId: 1,
    description: 'ceshitest',
    productType: 1,
    productItems: [
      {
        id: 1,
        productTypeId: 1,
        name: 'item1',
        technicalRequirements: '1',
        material: 'string',
        diameter: 'string',
        length: 'string',
        figureNo: 'string',
        amount: 1,
        unit: 'string',
        manHour: 1,
        scheduledTime: 1,
        status: 1,
      },
      {
        id: 2,
        productTypeId: 1,
        name: 'item2',
        technicalRequirements: '1',
        material: 'string',
        diameter: 'string',
        length: 'string',
        figureNo: 'string',
        amount: 1,
        unit: 'string',
        manHour: 1,
        scheduledTime: 1,
        status: 1,
      },
    ] as ProductItemDTO[],
  },
  {
    id: 2,
    name: 'product 2',
    address: {
      street: '无锡街',
      city: '无锡市',
      province: '江苏省',
      zipCode: '0020202',
    },
    quotationId: 2,
    description: '测试test',
    productType: 2,
    productItems: [
      {
        id: 5,
        productTypeId: 2,
        name: 'item5',
        technicalRequirements: '1',
        material: 'string',
        diameter: 'string',
        length: 'string',
        figureNo: 'string',
        amount: 1,
        unit: 'string',
        manHour: 1,
        scheduledTime: 1,
        status: 1,
      },
      {
        id: 4,
        productTypeId: 2,
        name: 'item4',
        technicalRequirements: '1',
        material: 'string',
        diameter: 'string',
        length: 'string',
        figureNo: 'string',
        amount: 1,
        unit: 'string',
        manHour: 1,
        scheduledTime: 1,
        status: 1,
      },
    ] as ProductItemDTO[],
  },
];

export default [
  {
    url: '/basic-api/product',
    timeout: 1000,
    method: 'get',
    statusCode: 200,
    response: () => {
      return resultSuccess(productInfos);
    },
  },
  {
    url: '/basic-api/product',
    method: 'post',
    statusCode: 201,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/product/tokenExpired',
    method: 'put',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
