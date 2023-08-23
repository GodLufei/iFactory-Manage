using MediatR;
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
           var productItemStep = new ProductItemStep(notification.ProductItemId, i, notification.WorkStationNos[i],
               ProductStatus.AwaitingProduct.Id);
           var result=_productRepository.Add(productItemStep);
        }
        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
    }
}