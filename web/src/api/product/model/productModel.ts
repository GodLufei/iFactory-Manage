export interface Address {
  city: string;
  street: string;
  province: string;
  zipCode: string;
}

export interface Product {
  id?: number;
  name: string;
  address: Address;
  quotationId: number;
  description: string;
  productItems: ProductItemDTO[];
  productType: number;
}

export interface ProductItemDTO {
  id?: number;
  productTypeId: number;
  name: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  amount: number;
  unit: string;
  manHour: number;
  scheduledTime: number;
  status: number;
}

export type CreateProductRequest = Product;
export type UpdateProductItemRequest = ProductItemDTO;
export type AddProductItemRequest = ProductItemDTO;
