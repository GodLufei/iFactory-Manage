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
