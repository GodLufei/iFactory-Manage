import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';
import {
  ChangeProductItemCommand,
  CreateProductCommand,
  CreateProductItemCommand,
  ProductDetailDto,
  ProductPageListDto,
} from './model/productModel';
import { BasicFetchResult } from '../model/baseModel';

enum Api {
  Product = '/product',
  ProductItem = '/productItem',
}

/**
 * @description: get products
 */
export function getList(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<BasicFetchResult<ProductPageListDto>>(
    { url: Api.Product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get wait to approve product items
 */
export function getWaitToApproveProductItems(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<BasicFetchResult<ProductPageListDto>>(
    { url: Api.Product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: get products
 */
export async function detail(productId: number, mode: ErrorMessageMode = 'modal') {
  return await defHttp.get<BasicFetchResult<ProductDetailDto>>(
    { url: `${Api.Product}/${productId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product
 */
export async function create(product: CreateProductCommand, mode: ErrorMessageMode = 'modal') {
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
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.put<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}`, params: product },
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
  mode: ErrorMessageMode = 'modal',
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
 * @description: add product item
 */
export async function addProductItem(
  productId: number,
  productItem: CreateProductItemCommand,
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.post<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}/${Api.ProductItem}`, params: productItem },
    { errorMessageMode: mode },
  );
}

/**
 * @description: delete product item
 */
export async function deleteProductItem(
  productId: number,
  productItemId: number,
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.delete<BasicFetchResult<number>>(
    { url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItemId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: approve product item
 */
export async function approveProductItem(
  productId: number,
  productItemId: number,
  mode: ErrorMessageMode = 'modal',
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
  mode: ErrorMessageMode = 'modal',
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
export function getProductItemList(workStationNo: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<BasicFetchResult<CreateProductItemCommand>>(
    { url: `${Api.ProductItem}/${workStationNo}` },
    { errorMessageMode: mode },
  );
}
