import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';
import {
  AwaitReverseProductItemsGroupDto,
  ChangeProductItemCommand,
  CreateProductCommand,
  CreateProductItemCommand,
  ProductDetailDto,
  ProductPageListDto,
} from './model/productModel';
import { BasicFetchResult, Pagable } from '../model/baseModel';

enum Api {
  Product = '/Product',
  ProductItem = '/ProductItem',
  ProductItemStep = '/ProductItemStep',
}

/**
 * @description: get products
 */
export function getList(page: Pagable, mode: ErrorMessageMode = 'message') {
  return defHttp.get<BasicFetchResult<ProductPageListDto>>(
    { url: Api.Product, params: { pageIndex: page.page, pageSize: page.pageSize } },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get wait to approve product items
 */
export function getWaitToApproveProductItems(mode: ErrorMessageMode = 'message') {
  return defHttp.get<BasicFetchResult<AwaitReverseProductItemsGroupDto[]>>(
    { url: Api.ProductItem },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get products
 */
export async function detail(productId: number, mode: ErrorMessageMode = 'message') {
  return await defHttp.get<BasicFetchResult<ProductDetailDto>>(
    { url: `${Api.Product}/${productId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product
 */
export async function create(product: CreateProductCommand, mode: ErrorMessageMode = 'message') {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: Api.Product, params: product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: update product
 */
export async function update(
  productId: number,
  product: CreateProductCommand,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.put<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}`, params: product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: down product
 */
export async function down(productId: number, mode: ErrorMessageMode = 'message') {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}/down` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: update product item
 */
export async function updateProductItem(
  productId: number,
  productItemId: number,
  productItem: ChangeProductItemCommand,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.put<BasicFetchResult<number>>(
    {
      url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItemId}`,
      params: productItem,
    },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product item
 */
export async function createProductItem(
  productId: number,
  productItem: CreateProductItemCommand,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}/${Api.ProductItem}`, params: productItem },
    { errorMessageMode: mode },
  );
}

/**
 * @description: delete product item
 */
export async function deleteProductItem(productItemId: number, mode: ErrorMessageMode = 'message') {
  return await defHttp.delete<BasicFetchResult<number>>(
    { url: `${Api.Product}/${Api.ProductItem}/${productItemId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: approve product item
 */
export async function approveProductItem(
  productId: number,
  productItemId: number,
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.patch<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItemId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: update product item status
 */
export async function updateProductItemStatus(
  productId: number,
  productItemId: number,
  targetStatus: { status: number },
  mode: ErrorMessageMode = 'message',
) {
  return await defHttp.put<BasicFetchResult<number>>(
    {
      url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItemId}`,
      params: targetStatus,
    },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get product items
 */
export function getProductItemList(workStationNo: string, mode: ErrorMessageMode = 'message') {
  return defHttp.get<BasicFetchResult<AwaitReverseProductItemsGroupDto[]>>(
    { url: `${Api.ProductItem}/${workStationNo}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product item step
 */
export function createProductItemStep(workStationNo: string, mode: ErrorMessageMode = 'message') {
  return defHttp.get<BasicFetchResult<AwaitReverseProductItemsGroupDto[]>>(
    { url: `${Api.ProductItemStep}/${workStationNo}` },
    { errorMessageMode: mode },
  );
}
