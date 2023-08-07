using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class CreateProductTechnologyCommandHandler : IRequestHandler<CreateProductTechnologyCommand, int>
{
    private readonly IProductRepository _productRepository;

    private readonly ILogger<CreateProductTechnologyCommandHandler> _logger;

    public CreateProductTechnologyCommandHandler(IProductRepository productRepository,
        ILogger<CreateProductTechnologyCommandHandler> logger)
    {
        _productRepository = productRepository;
        _logger = logger;
    }

    public Task<int> Handle(CreateProductTechnologyCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}