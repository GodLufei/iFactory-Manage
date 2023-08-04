using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public abstract class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, int>
{
    private readonly IProductRepository _productRepository;

    private readonly ILogger<CreateProductCommandHandler> _logger;

    protected CreateProductCommandHandler(
        IProductRepository productRepository,
        ILogger<CreateProductCommandHandler> logger)
    {
        _productRepository = productRepository;
        _logger = logger;
    }

    public async Task<int> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        var address = new Address(request.Street, request.City, request.Province, request.ZipCode);
        var product = new Domain.AggregatesModel.Product(request.QuotationId, request.Description);

        product.InitProduct(address);
        foreach (var productItem in request.ProductItems)
        {
            product.AddProductItem(productItem.ProductTypeId, productItem.Name,
                productItem.TechnicalRequirements, productItem.Material,
                productItem.Diameter, productItem.Length, productItem.FigureNo, productItem.Amount,
                productItem.Unit);
        }

        _logger.LogInformation("----- Creating product - Product: {@Product}", product);

        var result = _productRepository.Add(product);

        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        return result.Id;
    }
}