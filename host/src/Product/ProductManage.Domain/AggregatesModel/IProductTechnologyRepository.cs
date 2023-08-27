using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public interface IProductTechnologyRepository : IRepository<ProductTechnology>
{
    ProductTechnology Add(ProductTechnology productTechnology);

    ProductTechnology Update(ProductTechnology productTechnology);

    Task<int> DeleteAsync(int id);

    Task<ProductTechnology> GetAsync(int id);

    Task<IEnumerable<ProductTechnology>> GetListAsync(int pageSize, int pageIndex);

    Task<int> GetCount();
    
    Task<ProductTechnology> GetByProductTypeIdAsync(int productTypeId);
    Task<IEnumerable<ProductTechnology>> GetByProductTypeIdsAsync(int[] productTypeIds);
}