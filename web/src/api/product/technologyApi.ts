import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BasicFetchResult } from '../model/baseModel';
import { CreateProductTechnologyCommand, ProductTechnologyItemDto } from './model/technologyModel';

enum Api {
  ProductTechnology = '/ProductTechnology',
}

/**
 * @description: get product technology
 */
export async function detail(productTypeId: number, mode: ErrorMessageMode = 'modal') {
  return await defHttp.get<BasicFetchResult<ProductTechnologyItemDto[]>>(
    { url: `${Api.ProductTechnology}/${productTypeId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product technology
 */
export async function create(
  productTechnology: CreateProductTechnologyCommand,
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: Api.ProductTechnology, params: productTechnology },
    { errorMessageMode: mode },
  );
}
