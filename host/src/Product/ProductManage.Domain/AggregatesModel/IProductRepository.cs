using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public interface IProductRepository : IRepository<Product>
{
    # region 
    Product Add(Product product);

    Product Update(Product product);

    Task<Product> GetAsync(int id);
    
    Task<Product> GetProductByItemIdAsync(int productItemId);

    Task<IEnumerable<Product>> GetListAsync(int pageSize, int pageIndex);

    Task<IEnumerable<Product>> GetListAsync();
    Task<IEnumerable<Product>> GetDoneListAsync();

    Task<Product> GetIdByProductItemIdAsync(int productItemId);

    Task<IEnumerable<Product>> GetProductsByItemIdsAsync(int[] productItemIds);

    Task<IEnumerable<Product>> GetListByProductStatusAsync(int productStatusId);
    
    Task<int> GetCount();
    
    #endregion

    #region ProductItem
    Task<ProductItem> GetItemAsync(int id);

    ProductItem UpdateItem(ProductItem order);

    Task<int> DeleteItemAsync(int id);
    #endregion
    
    ProductItemStep Add(ProductItemStep productItemStep);
    
    ProductItemStep Update(ProductItemStep productItemStep);
    
    Task<List<ProductItemStep>> GetByProductItemIdAsync(int productItemId);
    
    Task<List<ProductItemStep>> GetByWorkStationNoAndProductStatusIdAsync(string workStationNo,int productStatusId);

    Task<List<ProductItemStep>> GetByProductItemIdsAsync(int[] productItemIds);
}