using System.Data;
using System.Globalization;
using AutoMapper;
using Dapper;
using ProductManage.API.Application.Dapper;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Queries;

public class ProductQueries : IProductQueries
{
    private readonly IProductRepository _productRepository;

    private readonly IMapper _mapper;

    public readonly BaseDbContext BaseDb;

    public ProductQueries(IProductRepository productRepository, IMapper mapper, BaseDbContext baseDb)
    {
        _productRepository = productRepository;
        _mapper = mapper;
        BaseDb = baseDb;
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

    public async Task<ProductPageListDto> GetList(int pageIndex, int pageSize)
    {
        IEnumerable<ProductListDto> list;
        using (IDbConnection dbConnection = BaseDb.CreateConnection())
        {
            dbConnection.Open();
            list = await
                dbConnection.QueryAsync<ProductListDto>(
                        sql: "SELECT * FROM (SELECT Product.[Id],Product.[ProductStatusId],[CreateTime],[Description],(DemanSide.[Province]+DemanSide.[City]+DemanSide.[Street]) as AddressDetail,ROW_NUMBER() OVER (ORDER BY  Product.[Id]) AS RowNum FROM [ProductManage].[Product].[Product] as Product  inner join [ProductManage].[Product].[DemandSide] as DemanSide  on Product.Id=DemanSide.Id  ) AS T WHERE RowNum > (@pageIndex - 1) * @pageSize AND RowNum <= @pageIndex * @pageSize", new { pageIndex, pageSize })
                    ;
        }
        foreach (var item in list)
        {
            var product = await _productRepository.GetAsync(item.Id);
            item.CompletionRate = product.CompletionRate.ToString(CultureInfo.InvariantCulture);
            item.TotalManHour = product.TotalManHour;
        }
        var totalCount = await _productRepository.GetCount();
        return new ProductPageListDto
        {
            ProductListDtos = list,
            Page = new Page
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                Total = totalCount,
            }
        };
    }
}