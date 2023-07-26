using DotNetCore.CAP;
using MediatR;
using QuotationServiceManagement.Domain.Events;

namespace QuotationManagement.Application.Service.Quotation.DomainEventHandler
{
    public class QuotationFinishDomainEventHandler : INotificationHandler<QuotationFinishDomainEvent>
    {
        private readonly ICapPublisher _capPublisher;

        public QuotationFinishDomainEventHandler(ICapPublisher capPublisher)
        {
            _capPublisher = capPublisher;
        }

        public async Task Handle(QuotationFinishDomainEvent notification, CancellationToken cancellationToken)
        {
            // await _capPublisher.PublishAsync(
            //     "QuotationFinishIntegrationEvent.Subscribe",
            //     new QuotationFinishIntegrationEvent(notification.QuotationId, notification.InquiryPartyId,notification.TotalData, DateTime.Now),
            //     cancellationToken: cancellationToken);
        }
    }
}