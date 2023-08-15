using AutoMapper;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Queries;

public class ProductQueries : IProductQueries
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;

    public ProductQueries(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<AwaitApproveProductItemsGroupDto>> GetAwaitApproveAsync()
    {
        var products = await _productRepository.GetListAsync();
        return (from product in products
            let productDto = _mapper.Map<ProductListDto>(product)
            let productItems = product.ProductItems.Where(t => t.ProductStatusId == ProductStatus.DoingProduct.Id)
            let productItemsDtos = productItems.Select(t => _mapper.Map<ProductItemDetailDto>(t))
            select new AwaitApproveProductItemsGroupDto(productDto, productItemsDtos)).ToList();
    }
}