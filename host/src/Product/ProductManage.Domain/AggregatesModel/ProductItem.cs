﻿using ProductManage.Domain.Events;
using ProductManage.Domain.Shared.Enums;
using ProductManage.Domain.Shared.Exceptions;
using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class ProductItem : Entity
{
    /// <summary>
    /// 产品类型Id
    /// </summary>
    public int ProductTypeId { get; private set; }

    /// <summary>
    /// 产品明细名称
    /// </summary>
    public string ProductItemName { get; private set; }

    /// <summary>
    /// 技术要求
    /// </summary>
    public string TechnicalRequirements { get; private set; }

    /// <summary>
    /// 材料型号
    /// </summary>
    public string Material { get; private set; }

    /// <summary>
    /// 直径
    /// </summary>
    public string Diameter { get; private set; }

    /// <summary>
    /// 长度
    /// </summary>
    public string Length { get; private set; }

    /// <summary>
    /// 图号
    /// </summary>
    public string FigureNo { get; private set; }

    /// <summary>
    /// 数量
    /// </summary>
    public int Amount { get; private set; }

    /// <summary>
    /// 单位
    /// </summary>
    public string Unit { get; private set; }

    /// <summary>
    ///  产品生产状态
    /// </summary>
    public int ProductStatusId { get; private set; }

    /// <summary>
    /// 计划时间
    /// </summary>
    public TimeSpan ScheduledTime { get; private set; }

    /// <summary>
    /// 开始时间
    /// </summary>
    public DateTime? StartTime { get;  set; }

    /// <summary>
    /// 结束时间
    /// </summary>
    public DateTime? EndTime { get;  set; }

    /// <summary>
    ///  工时
    /// </summary>
    public TimeSpan? ManHour { get; private set; }

    public int ProductId { get; private set; }

    public IEnumerable<ProductItemStep>  ProductItemSteps { get; private set; }
    public ProductItem(int productTypeId, string productItemName,
        string technicalRequirements, string material, string diameter,
        string length, string figureNo, int amount, string unit)
    {
        ProductTypeId = productTypeId;
        ProductItemName = productItemName;
        TechnicalRequirements = technicalRequirements;
        Material = material;
        Diameter = diameter;
        Length = length;
        FigureNo = figureNo;
        Amount = amount;
        Unit = unit;
        ProductStatusId = ProductStatus.UnProduct.Id;
    }

    /// <summary>
    /// 更新ProductItem
    /// </summary>
    /// <param name="productTypeId"></param>
    /// <param name="productItemName"></param>
    /// <param name="technicalRequirements"></param>
    /// <param name="material"></param>
    /// <param name="diameter"></param>
    /// <param name="length"></param>
    /// <param name="figureNo"></param>
    /// <param name="amount"></param>
    /// <param name="unit"></param>
    public void UpdateProductItem(int productTypeId, string productItemName,
        string technicalRequirements, string material, string diameter,
        string length, string figureNo, int amount, string unit)
    {
        ProductTypeId = productTypeId;
        ProductItemName = productItemName;
        TechnicalRequirements = technicalRequirements;
        Material = material;
        Diameter = diameter;
        Length = length;
        FigureNo = figureNo;
        Amount = amount;
        Unit = unit;
    }

    /// <summary>
    /// 开始生产
    /// </summary>
    /// <param name="scheduleTime"></param>
    public void StartProductItem(TimeSpan scheduleTime)
    {
        ProductStatusId = ProductStatus.DoingProduct.Id;
        StartTime = DateTime.Now;
        ScheduledTime = scheduleTime;
    }

    /// <summary>
    ///  状态扭转
    /// </summary>
    public void TransferStatus()
    {
        ++ProductStatusId;
        if (ProductStatusId.Equals(ProductStatus.DoneProduct.Id))
        {
            FinishProductItem();
        }
    }

    public void DoingStatus()
    {
        ProductStatusId = ProductStatus.DoingProduct.Id;
    }
    public void DoneStatus()
    {
        ProductStatusId = ProductStatus.DoneProduct.Id;
    }


    public void DownProductItemProductEvent(List<string> workStationNos)
    {
        AddDomainEvent(new DownProductItemDomainEvent(this.Id,workStationNos));
    }


    /// <summary>
    /// 完成产品
    /// </summary>
    private void FinishProductItem()
    {
        ProductStatusId = ProductStatus.DoneProduct.Id;
        EndTime = DateTime.Now;
        ManHour = EndTime - StartTime;
    }

    /// <summary>
    /// 取消订单
    /// </summary>
    public void CancelProductItem()
    {
        ProductStatusId = ProductStatus.ScarpProduct.Id;
    }

    public void ApproveProductItem()
    {
        ProductStatusId = ProductStatus.ApproveProduct.Id;
    }

    /// <summary>
    /// 更新数量
    /// </summary>
    /// <param name="amount"></param>
    /// <exception cref="ProductDomainException"></exception>
    public void SetNewAmount(int amount)
    {
        if (amount < 0)
        {
            throw new ProductDomainException("amount is not valid");
        }
        Amount = amount;
    }
}