using AutoMapper;
using MediatR;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class QueryProductListCommand : IRequest<ProductPageListDto>
{
    public QueryProductListCommand(Page page)
    {
        Page = page;
    }

    public Page Page { get;}
}

public class QueryProductListCommandHandler : IRequestHandler<QueryProductListCommand, ProductPageListDto>
{
    private readonly ILogger<QueryProductListCommandHandler> _logger;

    private readonly IProductRepository _productRepository;

    private readonly IMapper _mapper;

    public QueryProductListCommandHandler(ILogger<QueryProductListCommandHandler> logger,
        IProductRepository productRepository, IMapper mapper)
    {
        _logger = logger;
        _productRepository = productRepository;
        _mapper = mapper;
    }

    public async Task<ProductPageListDto> Handle(QueryProductListCommand request,
        CancellationToken cancellationToken)
    {
        var products =
            await _productRepository.GetListAsync(request.Page.PageSize, request.Page.PageIndex);
        var productListDtos = products.Select(t => _mapper.Map<ProductListDto>(t));
        request.Page.Total= await _productRepository.GetCount();
        return new ProductPageListDto
        {
            ProductListDtos = productListDtos,
            Page = request.Page
        };
    }
}