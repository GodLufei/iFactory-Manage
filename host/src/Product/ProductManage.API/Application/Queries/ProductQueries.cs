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

    public async Task<IEnumerable<AwaitReverseProductItemsGroupDto>> GetAwaitApproveListAsync()
    {
        var products = await _productRepository.GetListAsync();
        return (from product in products
            let productDto = _mapper.Map<ProductListDto>(product)
            let productItems = product.ProductItems.Where(t => t.ProductStatusId == ProductStatus.DoingProduct.Id)
            let productItemsDtos = productItems.Select(t => _mapper.Map<ProductItemDetailDto>(t))
            select new AwaitReverseProductItemsGroupDto(productDto, productItemsDtos)).ToList();
    }

    public async Task<IEnumerable<AwaitReverseProductItemsGroupDto>> GetListByStationNoAsync(string stationNo)
    {
        var productSteps =
            await _productRepository.GetByWorkStationNoAndProductStatusIdAsync(stationNo,
                ProductStatus.AwaitingProduct.Id);

        var productItemIds = productSteps.Select(t => t.ProductItemId).Distinct().ToList();

        var awaitReverseProductItemsGroupDtos = new List<AwaitReverseProductItemsGroupDto>();

        foreach (var productItemId in productItemIds)
        {
            var product = await _productRepository.GetIdByProductItemIdAsync(productItemId);
            var productDetails = product.ProductItems.Where(t => t.ProductStatusId == ProductStatus.AwaitingProduct.Id);
            awaitReverseProductItemsGroupDtos.Add(new AwaitReverseProductItemsGroupDto(
                _mapper.Map<ProductListDto>(product),
                productDetails.Select(t => _mapper.Map<ProductItemDetailDto>(t))));
        }
        
        return awaitReverseProductItemsGroupDtos;
    }
}