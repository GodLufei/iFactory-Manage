import { Page } from '../../model/baseModel';

export interface ProductPageListDto {
  page: Page;
  productListDtos: ProductListDto[];
}
export interface ProductListDto {
  id: number;
  description: string;
  createTime: string;
  completionRate: number;
  productStatusId: number;
  totalManHour: string;
  addressDetail: string;
}
export interface CreateProductCommand {
  productItems: ProductItemDto[];
  city: string;
  street: string;
  province: string;
  zipCode: string;
  description: string;
  title: string;
  tax: string;
  bankInfo: string;
  bankAccount: string;
  phoneNumber: string;
  id?: number;
}
export interface ProductItemDto {
  productTypeId: number;
  amount: number;
  productItemName: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  unit: string;
  id?: number;
}

export interface ProductDetailDto {
  productItemDetailDtos: ProductItemDto[];
  quotationId: number;
  city: string;
  street: string;
  province: string;
  zipCode: string;
  description: string;
  title: string;
  tax: string;
  bankInfo: string;
  bankAccount: string;
  phoneNumber: string;
  id: number;
}

export interface ProductItemDetailDto {
  id: number;
  productTypeId: number;
  productItemName: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  amount: number;
  unit: string;
  productStatusId: number;
}

export interface ChangeProductItemCommand {
  productTypeId: number;
  amount: number;
  productItemName: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  unit: string;
  id: number;
}

export interface CreateProductItemCommand {
  productTypeId: number;
  productItemName: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  amount: number;
  unit: string;
  productStatusId: number;
  scheduledTime?: string;
}

export interface AwaitReverseProductItemsGroupDto {
  productListDto: ProductListDto;
  productItemDetailDtos: ProductItemDetailDto[];
}

export interface AwaitReverseProductItemsGroupDto {
  productListDto: ProductListDto;
  productItemDetailDtos: ProductItemDetailDto[];
}
