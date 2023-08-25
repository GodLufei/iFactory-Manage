import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BasicFetchResult } from '../model/baseModel';
import {
  CreateProductTechnologyCommand,
  ProductTechnologyListDto,
  ProductTechnologyPageListDto,
} from './model/technologyModel';

enum Api {
  ProductTechnology = '/ProductTechnology',
}

/**
 * @description: get product technology list
 */
export async function getList(mode: ErrorMessageMode = 'message') {
  return await defHttp.get<BasicFetchResult<ProductTechnologyPageListDto>>(
    { url: `${Api.ProductTechnology}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get product technology
 */
export async function detail(productTypeId: number, mode: ErrorMessageMode = 'message') {
  return await defHttp.get<BasicFetchResult<ProductTechnologyListDto>>(
    { url: `${Api.ProductTechnology}/${productTypeId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product technology
 */
export async function create(
  productTechnology: CreateProductTechnologyCommand,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: Api.ProductTechnology, params: productTechnology },
    { errorMessageMode: mode },
  );
}

/**
 * @description: delete product technology
 */
export async function deleteProductTechnology(
  productTechnologyId: number,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.delete<BasicFetchResult<boolean>>(
    { url: `${Api.ProductTechnology}/${productTechnologyId}` },
    { errorMessageMode: mode },
  );
}
