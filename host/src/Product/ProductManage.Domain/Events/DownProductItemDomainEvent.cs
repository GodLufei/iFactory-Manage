using MediatR;

namespace ProductManage.Domain.Events;

public class DownProductItemDomainEvent : INotification
{
    public DownProductItemDomainEvent(int productItemId, List<string> workStationNos)
    {
        ProductItemId = productItemId;
        WorkStationNos = workStationNos;
    }

    public int ProductItemId { get; set; }

    public List<string> WorkStationNos { get; set; }
}

public class DownProductDomainEvent : INotification
{
    public DownProductDomainEvent(int productId)
    {
        ProductId = productId;
    }

    public int ProductId { get; set; }

}