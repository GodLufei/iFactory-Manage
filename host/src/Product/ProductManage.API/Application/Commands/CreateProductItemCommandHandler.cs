using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class CreateProductItemCommandHandler : IRequestHandler<CreateProductItemCommand, int>
{
    private readonly IProductRepository _productRepository;

    public CreateProductItemCommandHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<int> Handle(CreateProductItemCommand request, CancellationToken cancellationToken)
    {
        var product = await _productRepository.GetAsync(request.Id);
        product.AddProductItem(request.ProductTypeId, request.ProductItemName,
            request.TechnicalRequirements, request.Material, request.Diameter, request.Length, request.FigureNo,
            request.Amount, request.Unit);
        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        return product.Id;
    }
}