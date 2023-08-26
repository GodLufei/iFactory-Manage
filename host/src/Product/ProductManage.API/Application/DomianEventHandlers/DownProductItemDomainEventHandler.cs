using MediatR;
using Product.Infrastructure.Repositories;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Events;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.DomianEventHandlers;

public class DownProductItemDomainEventHandler:  INotificationHandler<DownProductItemDomainEvent>
{
    private readonly IProductRepository _productRepository;

    public DownProductItemDomainEventHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task Handle(DownProductItemDomainEvent notification, CancellationToken cancellationToken)
    {
        for (var i = 0; i < notification.WorkStationNos.Count; i++)
        {
           var s= notification.WorkStationNos[i];
           var productStatusId = i == 0 ? ProductStatus.AwaitingProduct.Id : ProductStatus.UnProduct.Id;
           var productItemStep = new ProductItemStep(notification.ProductItemId, i, notification.WorkStationNos[i], productStatusId);
           var result=_productRepository.Add(productItemStep);
        }
        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
    }
}

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
                var productItemStep = new ProductItemStep(item.Id, step.StepIndex, step.WorkStationNo, item.ProductStatusId);
                _productRepository.Add(productItemStep);
            }
        }
        await _productRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }
}