using MediatR;
using QuotationServiceManagement.Domain.Events;

namespace QuotationManagement.Application.Service.Quotation.DomainEventHandler;

public class QuotationChangeDomainEventHandler : INotificationHandler<QuotationChangeDomainEvent>
{
    public Task Handle(QuotationChangeDomainEvent notification, CancellationToken cancellationToken)
    {
        // todo print the quotation page
        throw new NotImplementedException();
    }
}