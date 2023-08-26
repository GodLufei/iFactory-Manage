using ProductManage.Domain.SeedWork;
using ProductManage.Domain.Shared.Enums;
using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class ProductTechnology : Entity, IAggregateRoot
{
    public int ProductTypeId { get; }

    private readonly List<ProductTechnologyItem> _productTechnologyItems;

    public int TechnologySteps => _productTechnologyItems.Count;

    public IReadOnlyCollection<ProductTechnologyItem> ProductTechnologyItems => _productTechnologyItems;

    public ProductType ProductType => ProductType.From(ProductTypeId);

    private ProductTechnology()
    {
        _productTechnologyItems = new List<ProductTechnologyItem>();
    }

    public ProductTechnology(int productTypeId) : this()
    {
        ProductTypeId = productTypeId;
    }

    public void RemoveAllProductTechnology() 
    {
        _productTechnologyItems.Clear();
    }
    public void AddProductTechnologyDetail(int technologyTypeId, int stepIndex, string workStationNo)
    {
        _productTechnologyItems.Add(new ProductTechnologyItem(technologyTypeId, workStationNo, stepIndex));
    }

    public void RemoveProductTechnologyDetail(int detailId)
    {
        _productTechnologyItems.Remove(_productTechnologyItems.SingleOrDefault(t => t.Id == detailId)!);
    }
}