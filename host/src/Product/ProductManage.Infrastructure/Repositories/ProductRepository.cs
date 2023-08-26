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

    public ProductManage.Domain.AggregatesModel.Product Add(ProductManage.Domain.AggregatesModel.Product product)
    {
        return _context.Products.Add(product).Entity;
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
            .Include(x=>x.ProductItems)
            .FirstOrDefaultAsync(o => o.Id == id);
        return product!;
    }

    public Task<ProductManage.Domain.AggregatesModel.Product> GetProductByItemIdAsync(int productItemId)
    {
        return _context
            .Products
            .Include(x => x.ProductItems.Where(t=>t.Id==productItemId)).FirstOrDefaultAsync()!;
    }

    public async Task<IEnumerable<ProductManage.Domain.AggregatesModel.Product>> GetListAsync(int pageSize,
        int pageIndex)
    {
        return await _context
            .Products.OrderBy(t=>t.Id)
            .Include(x => x.DemandSide)
            .Include(x=>x.ProductItems).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToListAsync();
    }

    public Task<ProductManage.Domain.AggregatesModel.Product> GetIdByProductItemIdAsync(int productItemId)
    {
        return _context
            .Products.Include(x => x.ProductItems).FirstOrDefaultAsync(t=>t.ProductItems.Select(productItem=>productItem.Id).Contains(productItemId))!;
    }

    public async Task<IEnumerable<ProductManage.Domain.AggregatesModel.Product>> GetListByProductStatusAsync(int productStatusId)
    {
        return await _context
            .Products.OrderBy(p=>p.CreateTime)
            .Include(x => x.ProductItems).Where(t=>t.ProductItems.Select(productItem=>productItem.ProductStatusId).Contains(productStatusId)).ToListAsync();
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

    public async Task<IEnumerable<ProductManage.Domain.AggregatesModel.Product>> GetListAsync()
    {
        return await _context
            .Products
            .Include(x => x.ProductItems).ToListAsync();
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

    public ProductItemStep Add(ProductItemStep productItemStep)
    {
        return _context.ProductItemSteps.Add(productItemStep).Entity;
    }

    public Task<List<ProductItemStep>> GetByProductItemIdAsync(int productItemId)
    {
        return _context.ProductItemSteps.Where(t=>t.ProductItemId==productItemId).ToListAsync();
    }

    public Task<List<ProductItemStep>> GetByWorkStationNoAndProductStatusIdAsync(string workStationNo,int productStatusId)
    {
        return _context.ProductItemSteps.Where(t => t.WorkStationNo==workStationNo && t.ProductStatusId==productStatusId).ToListAsync();
    }
}