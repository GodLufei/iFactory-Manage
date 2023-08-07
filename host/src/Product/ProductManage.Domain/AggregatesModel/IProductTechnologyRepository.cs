using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

internal interface IProductTechnologyRepository : IRepository<ProductTechnology>
{
    ProductTechnology Add(ProductTechnology productTechnology);

    Task<int> DeleteAsync(int id);

    Task<ProductTechnology> GetAsync(int id);
}