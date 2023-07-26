using ProductManage.Domain.Exceptions;
using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public class Product : Entity, IAggregateRoot
{
    public readonly int QuotationId;

    public readonly string Description;

    public DateTime CreateTime;

    public DateTime StartTime;

    public DateTime EndTime;

    public decimal CompletionRate;

    public int ProductStatusId;

    public TimeSpan? TotalManHour;

    // Address is a Value Object pattern example persisted as EF Core 2.0 owned entity
    public Address Address { get; private set; }

    private readonly List<ProductItem> _productItems;

    public IReadOnlyCollection<ProductItem> ProductItems => _productItems;

    public Product(int quotationId, string description)
    {
        QuotationId = quotationId;
        Description = description;
        _productItems = new List<ProductItem>();
    }

    public void InitProduct(DateTime createDate, string street, string city, string province, string zipCode)
    {
        CreateTime = createDate;
        ProductStatusId = ProductStatus.UnProduct.Id;
        CompletionRate = 0;
        Address = new Address(street, city, province, zipCode);
        TotalManHour = new TimeSpan();
    }

    public void AddProductItem(string productItemName, string technicalRequirements, string material, string diameter,
        string length, string figureNo, int amount, string unit)
    {
        var existingProductItem = _productItems.SingleOrDefault(o => o.ProductItemName == productItemName);
        if (existingProductItem is null)
        {
            _productItems.Add(new ProductItem(productItemName, technicalRequirements, material, diameter, length,
                figureNo, amount, unit));
        }
    }

    public void DownProduct()
    {
        StartTime = DateTime.Now;
        ProductStatusId = ProductStatus.AwaitingProduct.Id;
    }

    public void UpdateProduct(int productItemId, TimeSpan scheduleTime)
    {
        var existingProductItem = _productItems.SingleOrDefault(o => o.Id == productItemId);

        if (existingProductItem is null)
            throw new ProductDomainException($"productItemI : {productItemId} is not exist!");

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
        // TotalManHour =
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