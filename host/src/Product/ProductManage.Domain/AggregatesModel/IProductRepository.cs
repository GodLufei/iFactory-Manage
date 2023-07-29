using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public interface IProductRepository : IRepository<Product>
{
    Product Add(Product order);

    Task<Product?> GetAsync(int orderId);
}