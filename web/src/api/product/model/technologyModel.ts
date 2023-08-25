import { Page } from '../../model/baseModel';

export class TechnologyTypeEnum {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  static readonly Blanking = new TechnologyTypeEnum(1, '下料');
  static readonly RoughTurning = new TechnologyTypeEnum(2, '粗车');
  static readonly FineTurning = new TechnologyTypeEnum(3, '精车');
  static readonly Perforate = new TechnologyTypeEnum(4, '打孔');
  static readonly FineMilling = new TechnologyTypeEnum(5, '精铣');
  static readonly Compounding = new TechnologyTypeEnum(6, '复配');

  private static readonly Mapper = new Map([
    [TechnologyTypeEnum.Blanking.id.toString(), TechnologyTypeEnum.Blanking],
    [TechnologyTypeEnum.RoughTurning.id.toString(), TechnologyTypeEnum.RoughTurning],
    [TechnologyTypeEnum.FineTurning.id.toString(), TechnologyTypeEnum.FineTurning],
    [TechnologyTypeEnum.Perforate.id.toString(), TechnologyTypeEnum.Perforate],
    [TechnologyTypeEnum.FineMilling.id.toString(), TechnologyTypeEnum.FineMilling],
    [TechnologyTypeEnum.Compounding.id.toString(), TechnologyTypeEnum.Compounding],
    [TechnologyTypeEnum.Blanking.name, TechnologyTypeEnum.Blanking],
    [TechnologyTypeEnum.RoughTurning.name, TechnologyTypeEnum.RoughTurning],
    [TechnologyTypeEnum.FineTurning.name, TechnologyTypeEnum.FineTurning],
    [TechnologyTypeEnum.Perforate.name, TechnologyTypeEnum.Perforate],
    [TechnologyTypeEnum.FineMilling.name, TechnologyTypeEnum.FineMilling],
    [TechnologyTypeEnum.Compounding.name, TechnologyTypeEnum.Compounding],
  ]);

  static from = (id: number) => TechnologyTypeEnum.Mapper.get(`${id}`);
  static fromName = (name: string) => TechnologyTypeEnum.Mapper.get(`${name}`);
}

export class WorkStationEnum {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  static readonly One = new WorkStationEnum(1, '1号工区');
  static readonly Two = new WorkStationEnum(2, '2号工区');
  static readonly Three = new WorkStationEnum(3, '3号工区');
  static readonly Four = new WorkStationEnum(4, '4号工区');
  static readonly Five = new WorkStationEnum(5, '5号工区');
  static readonly Six = new WorkStationEnum(6, '6号工区');

  private static readonly Mapper = new Map([
    [WorkStationEnum.One.id.toString(), WorkStationEnum.One],
    [WorkStationEnum.Two.id.toString(), WorkStationEnum.Two],
    [WorkStationEnum.Three.id.toString(), WorkStationEnum.Three],
    [WorkStationEnum.Four.id.toString(), WorkStationEnum.Four],
    [WorkStationEnum.Five.id.toString(), WorkStationEnum.Five],
    [WorkStationEnum.Six.id.toString(), WorkStationEnum.Six],
    [WorkStationEnum.One.name, WorkStationEnum.One],
    [WorkStationEnum.Two.name, WorkStationEnum.Two],
    [WorkStationEnum.Three.name, WorkStationEnum.Three],
    [WorkStationEnum.Four.name, WorkStationEnum.Four],
    [WorkStationEnum.Five.name, WorkStationEnum.Five],
    [WorkStationEnum.Six.name, WorkStationEnum.Six],
  ]);

  static from = (id: number) => WorkStationEnum.Mapper.get(`${id}`);
  static fromName = (name: string) => WorkStationEnum.Mapper.get(`${name}`);
}

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
