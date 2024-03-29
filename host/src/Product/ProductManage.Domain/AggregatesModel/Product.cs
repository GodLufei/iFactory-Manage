﻿using ProductManage.Domain.Events;
using ProductManage.Domain.SeedWork;
using ProductManage.Domain.Shared.Enums;
using ProductManage.Domain.Shared.Exceptions;
using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class Product : Entity, IAggregateRoot
{
    public readonly int QuotationId;

    public string Description;

    public DateTime CreateTime;

    public DateTime StartTime;

    public DateTime EndTime;

    public decimal CompletionRate;
    public ProductStatus ProductStatus { get;  set; }

    public int ProductStatusId { get; set; }

    public TimeSpan? TotalManHour;

    public DemandSide DemandSide { get; private set; }

    private readonly List<ProductItem> _productItems;

    public IReadOnlyCollection<ProductItem> ProductItems => _productItems;

    private Product()
    {
    }

    public Product(int quotationId, string description) : this()
    {
        QuotationId = quotationId;
        Description = description;
        _productItems = new List<ProductItem>();
    }

    public void InitProduct(string title, string tax, string bankInfo, string phoneNumber,string bankAccount, Address address)
    {
        CreateTime = DateTime.Now;
        ProductStatusId = ProductStatus.UnProduct.Id;
        CompletionRate = 0;
        DemandSide = new DemandSide(title, tax, bankInfo, phoneNumber, address,bankAccount);
        TotalManHour = new TimeSpan();
    }

    public void UpdateDescription(string description)
    {
        Description = description;
    }

    public void UpdateDemandSide(string title, string tax, string bankInfo, string phoneNumber,string street,string city,
        string province,string  zipCode,string bankAccount)
    {
        var address = new Address(street, city, province, zipCode);
        DemandSide = new DemandSide(title, tax, bankInfo, phoneNumber, address,bankAccount);
    }

    public void AddProductItem(int productTypeId, string productItemName, string technicalRequirements, string material,
        string diameter,
        string length, string figureNo, int amount, string unit)
    {
        var existingProductItem = _productItems.SingleOrDefault(o => o.ProductItemName == productItemName);
        if (existingProductItem is null)
        {
            _productItems.Add(new ProductItem(productTypeId, productItemName, technicalRequirements, material, diameter,
                length,
                figureNo, amount, unit));
        }
    }

    public void ApproveProductItem(int itemId)
    {
        var productItem = _productItems.SingleOrDefault(o => o.Id == itemId);
        productItem?.ApproveProductItem();
        if (_productItems.All(t => t.ProductStatusId == ProductStatus.ApproveProduct.Id))
            ProductStatusId = ProductStatus.ApproveProduct.Id;
    }
    public void DoneProduct()
    {
        EndTime = DateTime.Now;
        ProductStatusId = ProductStatus.DoneProduct.Id;
        foreach (var item in ProductItems)
        {
            item.DoneStatus();
        }
    }
    public void DoingProduct()
    {
        ProductStatusId = ProductStatus.DoingProduct.Id;
        foreach (var item in ProductItems)
        {
            item.DoingStatus();
        }
    }

    //public void DownProduct()
    //{
    //    StartTime = DateTime.Now;
    //    ProductStatusId = ProductStatus.AwaitingProduct.Id;
    //}
    
    public void DownProduct()
    {
        StartTime = DateTime.Now;
        ProductStatusId = ProductStatus.AwaitingProduct.Id;
        foreach (var item in ProductItems)
        {
            item.TransferStatus();
        }
        DownProductEvent();
    }

    private void DownProductEvent()
    {
        AddDomainEvent(new DownProductDomainEvent(this.Id));
    }

    public void UpdateProduct(int productItemId, TimeSpan scheduleTime)
    {
        var existingProductItem = _productItems.SingleOrDefault(o => o.Id == productItemId);

        if (existingProductItem is null)
            throw new ProductDomainException($"productItem : {productItemId} is not exist!");

        if (ProductStatusId.Equals(ProductStatus.AwaitingProduct.Id)) // product start 
        {
            StateProduct(existingProductItem, scheduleTime);
        }
        else
        {
            existingProductItem.TransferStatus();
        }

        CalculateCompletionRate();
    }

    private void StateProduct(ProductItem existingProductItem, TimeSpan scheduleTime)
    {
        existingProductItem.StartProductItem(scheduleTime);
        ProductStatusId = ProductStatus.DoingProduct.Id;
    }

    private void CalculateCompletionRate()
    {
        CompletionRate = _productItems.Count == 0
            ? 0
            : _productItems.Select(T => T.ProductStatusId.Equals(ProductStatus.DoneProduct.Id)).Count() /
              _productItems.Count;
        if (CompletionRate != 1) return;
        ProductStatusId = ProductStatus.DoneProduct.Id;
        EndTime = DateTime.Now;
        var manHourList = _productItems.Where(T => T.ProductStatusId.Equals(ProductStatus.DoneProduct.Id))
            .Select(t => t.ManHour).ToList();
        for (var i = 1; i < manHourList.Count; i++)
        {
            TotalManHour += manHourList[i];
        }
    }

    public void CancelProduct()
    {
        foreach (var productItem in _productItems)
        {
            productItem.CancelProductItem();
        }

        ProductStatusId = ProductStatus.CancelledProduct.Id;
        EndTime = DateTime.Now;
    }
}