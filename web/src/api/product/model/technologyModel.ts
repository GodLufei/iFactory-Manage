import { Page } from '../../model/baseModel';

export interface CreateProductTechnologyCommand {
  productTypeId: number;
  productTechnologyItemDtos: ProductTechnologyItemDto[];
}

export interface ProductTechnologyItemDto {
  stepIndex: number;
  technologyTypeId: number;
  workStationNo: string;
}

export interface ProductTechnologyPageListDto {
  productTechnologyListDtos: ProductTechnologyListDto[];
  page: Page;
}

export interface ProductTechnologyListDto {
  id: number;
  technologySteps: number;
  productTypeId: string;
  productTechnologyItemDtos: ProductTechnologyItemDto[];
}
