using MediatR;

namespace QuotationServiceManagement.Domain.Events
{
    public class QuotationChangeDomainEvent : INotification
    {
        public int QuotationId { get; }

        public QuotationChangeDomainEvent(
            int quotationId)
        {
            QuotationId = quotationId;
        }
    }
}