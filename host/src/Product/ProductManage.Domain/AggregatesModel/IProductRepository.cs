using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public interface IProductRepository : IRepository<Product>
{
    # region 
    Product Add(Product product);

    Product Update(Product product);

    Task<Product> GetAsync(int id);

    Task<IEnumerable<Product>> GetListAsync(int pageSize, int pageIndex);

    Task<IEnumerable<Product>> GetListAsync();
    
    Task<int> GetCount();
    #endregion

    #region ProductItem
    Task<ProductItem> GetItemAsync(int id);

    ProductItem UpdateItem(ProductItem order);

    Task<int> DeleteItemAsync(int id);
    #endregion

}