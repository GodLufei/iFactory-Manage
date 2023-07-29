using Microsoft.EntityFrameworkCore;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.SeedWork;

namespace Product.Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly ProductContext _context;

    public IUnitOfWork UnitOfWork => _context;

    public ProductRepository(ProductContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public ProductManage.Domain.AggregatesModel.Product Add(ProductManage.Domain.AggregatesModel.Product order)
    {
        return _context.Products.Add(order).Entity;
    }

    public async Task<ProductManage.Domain.AggregatesModel.Product?> GetAsync(int orderId)
    {
        var product = await _context
            .Products
            .Include(x => x.Address)
            .FirstOrDefaultAsync(o => o.Id == orderId);
        if (product == null) return product;
        await _context.Entry(product)
            .Collection(i => i.ProductItems).LoadAsync();
        await _context.Entry(product)
            .Reference(i => i.ProductStatus).LoadAsync();
        return product;
    }
}