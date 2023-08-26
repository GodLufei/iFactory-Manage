using Microsoft.EntityFrameworkCore;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.SeedWork;

namespace Product.Infrastructure.Repositories;

public class ProductTechnologyRepository : IProductTechnologyRepository
{
    private readonly ProductContext _context;
    public IUnitOfWork UnitOfWork => _context;

    public ProductTechnologyRepository(ProductContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public ProductTechnology Add(ProductTechnology productTechnology)
    {
        return _context.ProductTechnologies.Add(productTechnology).Entity;
    }

    public ProductTechnology Update(ProductTechnology productTechnology)
    {
        return _context.ProductTechnologies.Update(productTechnology).Entity;
    }

    public async Task<int> DeleteAsync(int id)
    {
        var result = _context.ProductTechnologies.Remove((await _context.ProductTechnologies.FirstOrDefaultAsync(t => t.Id == id))!);
        return result.Entity.Id;
    }

    public async Task<ProductTechnology> GetAsync(int id)
    {
        var productTechnology = await _context
            .ProductTechnologies
            .Include(x => x.ProductTechnologyItems)
            .FirstOrDefaultAsync(o => o.Id == id);
        return productTechnology!;
    }

    public async Task<ProductTechnology> GetByProductTypeIdAsync(int productTypeId)
    {
        var productTechnology = await _context
            .ProductTechnologies
            .Include(x => x.ProductTechnologyItems)
            .FirstOrDefaultAsync(o => o.ProductTypeId == productTypeId);
        return productTechnology!;
    }
    public async Task<IEnumerable<ProductTechnology>> GetListAsync(int pageSize, int pageIndex)
    {
        return await _context
            .ProductTechnologies
            .Include(x => x.ProductTechnologyItems).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToListAsync();
    }

    public async Task<int> GetCount()
    {
        return await _context.ProductTechnologies.CountAsync();
    }
}