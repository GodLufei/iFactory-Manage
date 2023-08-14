using AutoMapper;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Queries;

public class ProductTechnologyQueries : IProductTechnologyQueries
{
    private readonly IProductTechnologyRepository _productTechnologyRepository;

    private readonly IMapper _mapper;

    public ProductTechnologyQueries(IProductTechnologyRepository productTechnologyRepository, IMapper mapper)
    {
        _productTechnologyRepository = productTechnologyRepository;
        _mapper = mapper;
    }

    public async Task<ProductTechnologyPageListDto> GetListAsync(int pageSize, int pageIndex)
    {
        var productTechnologies = await _productTechnologyRepository.GetListAsync(pageSize, pageIndex);
        var listDtos = productTechnologies.Select(t => _mapper.Map<ProductTechnologyListDto>(t));
        var total = await _productTechnologyRepository.GetCount();
        return new ProductTechnologyPageListDto(
            listDtos,
            new Page
            {
                PageSize = pageSize,
                PageIndex = pageIndex,
                Total = total
            });
    }
}