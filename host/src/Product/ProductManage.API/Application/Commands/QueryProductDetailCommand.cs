using AutoMapper;
using MediatR;
using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class QueryProductDetailCommand : IRequest<ProductDetailDto>
{
    public QueryProductDetailCommand(int id)
    {
        Id = id;
    }

    public int Id { get; }
}

public class QueryProductDetailCommandHandler : IRequestHandler<QueryProductDetailCommand, ProductDetailDto>
{
    private readonly IProductRepository _productRepository;

    private readonly IMapper _mapper;

    private readonly ILogger<QueryProductDetailCommandHandler> _logger;

    public QueryProductDetailCommandHandler(IProductRepository productRepository,
        ILogger<QueryProductDetailCommandHandler> logger, IMapper mapper)
    {
        _productRepository = productRepository;
        _logger = logger;
        _mapper = mapper;
    }

    public async Task<ProductDetailDto> Handle(QueryProductDetailCommand request, CancellationToken cancellationToken)
    {
        var product = await _productRepository.GetAsync(request.Id);
        return _mapper.Map<ProductDetailDto>(product);
    }
}