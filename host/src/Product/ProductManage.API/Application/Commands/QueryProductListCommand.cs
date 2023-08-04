using AutoMapper;
using MediatR;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class QueryProductListCommand : IRequest<IEnumerable<ProductListDto>>
{
}

public class QueryProductListCommandHandler : IRequestHandler<QueryProductListCommand, IEnumerable<ProductListDto>>
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

    public async Task<IEnumerable<ProductListDto>> Handle(QueryProductListCommand request,
        CancellationToken cancellationToken)
    {
        var products = await _productRepository.GetListAsync();
        return products.Select(t => _mapper.Map<ProductListDto>(t));
    }
}