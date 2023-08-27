using MediatR;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Events;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.DomianEventHandlers;

public class DownProductDomainEventHandler : INotificationHandler<DownProductDomainEvent>
{
    private readonly IProductRepository _productRepository;
    private readonly IProductTechnologyRepository _productTechnologyRepository;
    public DownProductDomainEventHandler(IProductRepository productRepository, IProductTechnologyRepository productTechnologyRepository)
    {
        _productRepository = productRepository;
        _productTechnologyRepository = productTechnologyRepository;
    }

    public async Task Handle(DownProductDomainEvent @event, CancellationToken cancellationToken)
    {
        var product = await _productRepository.GetAsync(@event.ProductId);
        var result = await _productTechnologyRepository.GetByProductTypeIdsAsync(product.ProductItems.Select(_ => _.ProductTypeId).Distinct().ToArray());

        foreach (var item in product.ProductItems)
        {
            var techSteps = result.FirstOrDefault(_ => _.ProductTypeId == item.ProductTypeId);
            foreach (var step in techSteps.ProductTechnologyItems.OrderBy(_=>_.StepIndex))
            {
                var productStatusId = step.StepIndex == 1 ? ProductStatus.AwaitingProduct.Id : ProductStatus.UnProduct.Id;
                var productItemStep = new ProductItemStep(item.Id, step.StepIndex, step.WorkStationNo, productStatusId);
                _productRepository.Add(productItemStep);
            }
        }
        await _productRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }
}