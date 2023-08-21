import { Page } from '../../model/baseModel';

export class ProductStatusEnum {
  id: number;
  name: string;
  color: string;
  constructor(id: number, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
  static readonly UnProduct = new ProductStatusEnum(1, '未排期', 'grey');
  static readonly AwaitingProduct = new ProductStatusEnum(2, '下发生产', 'blue');
  static readonly DoingProduct = new ProductStatusEnum(3, '生产中', 'darkblue');
  static readonly DoneProduct = new ProductStatusEnum(4, '生产完成', 'green');
  static readonly CancelledProduct = new ProductStatusEnum(5, '生产取消', 'orange');
  static readonly ScarpProduct = new ProductStatusEnum(6, '生产报废', 'red');
  static readonly ApproveProduct = new ProductStatusEnum(7, '已审批', 'black');
  private static readonly Mapper = new Map([
    [ProductStatusEnum.UnProduct.id.toString(), ProductStatusEnum.UnProduct],
    [ProductStatusEnum.AwaitingProduct.id.toString(), ProductStatusEnum.AwaitingProduct],
    [ProductStatusEnum.DoingProduct.id.toString(), ProductStatusEnum.DoingProduct],
    [ProductStatusEnum.DoneProduct.id.toString(), ProductStatusEnum.DoneProduct],
    [ProductStatusEnum.CancelledProduct.id.toString(), ProductStatusEnum.CancelledProduct],
    [ProductStatusEnum.ScarpProduct.id.toString(), ProductStatusEnum.ScarpProduct],
    [ProductStatusEnum.ApproveProduct.id.toString(), ProductStatusEnum.ApproveProduct],
    [ProductStatusEnum.UnProduct.name, ProductStatusEnum.UnProduct],
    [ProductStatusEnum.AwaitingProduct.name, ProductStatusEnum.AwaitingProduct],
    [ProductStatusEnum.DoingProduct.name, ProductStatusEnum.DoingProduct],
    [ProductStatusEnum.DoneProduct.name, ProductStatusEnum.DoneProduct],
    [ProductStatusEnum.CancelledProduct.name, ProductStatusEnum.CancelledProduct],
    [ProductStatusEnum.ScarpProduct.name, ProductStatusEnum.ScarpProduct],
    [ProductStatusEnum.ApproveProduct.name, ProductStatusEnum.ApproveProduct],
  ]);

  static from = (id: number) => ProductStatusEnum.Mapper.get(`${id}`);
  static fromName = (name: string) => ProductStatusEnum.Mapper.get(`${name}`);
}

export class ProductTypeEnum {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  static readonly ShaftingSystem = new ProductTypeEnum(1, '轴系');
  static readonly RudderSystem = new ProductTypeEnum(2, '舵系');
  static readonly NonStandardPart = new ProductTypeEnum(3, '非标件');
  static readonly StandardPart = new ProductTypeEnum(4, '标件');
  static readonly Other = new ProductTypeEnum(5, '其他');

  private static readonly Mapper = new Map([
    [ProductTypeEnum.ShaftingSystem.id.toString(), ProductTypeEnum.ShaftingSystem],
    [ProductTypeEnum.RudderSystem.id.toString(), ProductTypeEnum.RudderSystem],
    [ProductTypeEnum.NonStandardPart.id.toString(), ProductTypeEnum.NonStandardPart],
    [ProductTypeEnum.StandardPart.id.toString(), ProductTypeEnum.StandardPart],
    [ProductTypeEnum.Other.id.toString(), ProductTypeEnum.Other],
    [ProductTypeEnum.ShaftingSystem.name, ProductTypeEnum.ShaftingSystem],
    [ProductTypeEnum.RudderSystem.name, ProductTypeEnum.RudderSystem],
    [ProductTypeEnum.NonStandardPart.name, ProductTypeEnum.NonStandardPart],
    [ProductTypeEnum.StandardPart.name, ProductTypeEnum.StandardPart],
    [ProductTypeEnum.Other.name, ProductTypeEnum.Other],
  ]);

  static from = (id: number) => ProductTypeEnum.Mapper.get(`${id}`);
  static fromName = (name: string) => ProductTypeEnum.Mapper.get(`${name}`);
}

export interface ProductPageListDto {
  page: Page;
  productListDtos: ProductListDto[];
}
export interface ProductListDto {
  id: number;
  description: string;
  createTime: string;
  completionRate: number;
  productStatus: string;
  totalManHour: string;
  addressDetail: string;
}
export interface CreateProductCommand {
  productItems: ProductItemDto[];
  quotationId: number;
  city: string;
  street: string;
  province: string;
  zipCode: string;
  description: string;
  title: string;
  tax: string;
  bankInfo: string;
  phoneNumber: string;
}
export interface ProductItemDto {
  productTypeId: number;
  amount: number;
  name: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  unit: string;
}

export interface ProductDetailDto extends ProductListDto {
  productItemDetailDtos: ProductItemDetailDto[];
}

export interface ProductItemDetailDto {
  id: number;
  productType: string;
  productItemName: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  amount: number;
  unit: string;
  productStatus: string;
  scheduledTime: string;
  startTime: string;
  endTime: string;
}

export interface ChangeProductItemCommand {
  productTypeId: number;
  amount: number;
  name: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  unit: string;
}

export interface CreateProductItemCommand {
  id: number;
  productName: string;
  productTypeId: number;
  amount: number;
  name: string;
  technicalRequirements: string;
  material: string;
  diameter: string;
  length: string;
  figureNo: string;
  unit: string;
}
