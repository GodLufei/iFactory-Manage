import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';
import {
  AddProductItemRequest,
  CreateProductRequest,
  Product,
  UpdateProductItemRequest,
} from './model/productModel';
import { BasicFetchResult } from '../model/baseModel';

enum Api {
  Product = '/product',
  ProductItem = '/productItem',
}

/**
 * @description: get products
 */
export function list(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<BasicFetchResult<Product>>({ url: Api.Product }, { errorMessageMode: mode });
}

/**
 * @description: get products
 */
export async function detail(productId: number, mode: ErrorMessageMode = 'modal') {
  return await defHttp.get<Product>(
    { url: `${Api.Product}/${productId}` },
    { errorMessageMode: mode },
  );
}

/**
 * @description: create product
 */
export async function create(product: CreateProductRequest, mode: ErrorMessageMode = 'modal') {
  return await defHttp.post<number>(
    { url: Api.Product, params: product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: update product
 */
export async function update(product: CreateProductRequest, mode: ErrorMessageMode = 'modal') {
  return await defHttp.put<number>(
    { url: `${Api.Product}/${product.id}`, params: product },
    { errorMessageMode: mode },
  );
}

/**
 * @description: update product item
 */
export async function updateProductItem(
  productId: number,
  productItem: UpdateProductItemRequest,
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.put<number>(
    {
      url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItem.id}`,
      params: productItem,
    },
    { errorMessageMode: mode },
  );
}

/**
 * @description: add product item
 */
export async function addProductItem(
  productItem: AddProductItemRequest,
  mode: ErrorMessageMode = 'modal',
) {
  return await defHttp.post<number>(
    { url: `${Api.ProductItem}`, params: productItem },
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
  return await defHttp.delete<number>(
    { url: `${Api.Product}/${productId}/${Api.ProductItem}/${productItemId}` },
    { errorMessageMode: mode },
  );
}
