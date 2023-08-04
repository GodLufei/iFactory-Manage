using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public interface IProductRepository : IRepository<Product>
{
    # region 
    Product Add(Product order);

    Product Update(Product order);

    Task<Product> GetAsync(int id);

    Task<IEnumerable<Product>> GetListAsync();
    #endregion

    #region ProductItem
    Task<ProductItem> GetItemAsync(int id);

    ProductItem UpdateItem(ProductItem order);
    # endregion
}