using MediatR;
using Product.Infrastructure.Repositories;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class CreateProductTechnologyCommandHandler : IRequestHandler<CreateProductTechnologyCommand, int>
{
    private readonly IProductTechnologyRepository _productTechnologyRepository;

    private readonly ILogger<CreateProductTechnologyCommandHandler> _logger;

    public CreateProductTechnologyCommandHandler(
        ILogger<CreateProductTechnologyCommandHandler> logger,
        IProductTechnologyRepository productTechnologyRepository)
    {
        _logger = logger;
        _productTechnologyRepository = productTechnologyRepository;
    }

    public async Task<int> Handle(CreateProductTechnologyCommand request, CancellationToken cancellationToken)
    {
        var productTechnology = await _productTechnologyRepository.GetByProductTypeIdAsync(request.ProductTypeId);
        if (productTechnology is null) 
        {
            productTechnology = new ProductTechnology(request.ProductTypeId);
            productTechnology = _productTechnologyRepository.Add(productTechnology);
            await _productTechnologyRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        }
        productTechnology.RemoveAllProductTechnology();
        foreach (var itemDto in request.ProductTechnologyItemDtos)
        {
            productTechnology.AddProductTechnologyDetail(itemDto.TechnologyTypeId, itemDto.StepIndex,
                itemDto.WorkStationNo);
        }

        var result = _productTechnologyRepository.Update(productTechnology);
        await _productTechnologyRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        return result.Id;
    }
}