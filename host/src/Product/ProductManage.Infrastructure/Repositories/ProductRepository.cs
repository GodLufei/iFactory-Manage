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

    public ProductManage.Domain.AggregatesModel.Product Update(ProductManage.Domain.AggregatesModel.Product quotation)
    {
        var entry = _context.Products.Update(quotation);
        return entry.Entity;
    }

    public async Task<ProductManage.Domain.AggregatesModel.Product> GetAsync(int id)
    {
        var product = await _context
            .Products
            .Include(x => x.DemandSide)
            .FirstOrDefaultAsync(o => o.Id == id);
        if (product == null) return product!;
        await _context.Entry(product)
            .Collection(i => i.ProductItems).LoadAsync();
        await _context.Entry(product)
            .Reference(i => i.ProductStatus).LoadAsync();
        return product;
    }

    public async Task<IEnumerable<ProductManage.Domain.AggregatesModel.Product>> GetListAsync(int pageSize,
        int pageIndex)
    {
        return await _context
            .Products
            .Include(x => x.DemandSide).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToListAsync();
    }

    public async Task<int> GetCount()
    {
        return await _context.Products.CountAsync();
    }

    public async Task<ProductItem> GetItemAsync(int id)
    {
        return (await _context
            .ProductItems
            .FirstOrDefaultAsync(o => o.Id == id))!;
    }

    public ProductItem UpdateItem(ProductItem productItem)
    {
        var entry = _context.ProductItems.Update(productItem);
        return entry.Entity;
    }

    public async Task<int> DeleteItemAsync(int id)
    {
        var result = _context.ProductItems.Remove((await _context.ProductItems.FirstOrDefaultAsync(t => t.Id == id))!);
        return result.Entity.Id;
    }
}