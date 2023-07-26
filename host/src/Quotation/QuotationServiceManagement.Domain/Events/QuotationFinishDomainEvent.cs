using MediatR;

namespace QuotationServiceManagement.Domain.Events
{
    public class QuotationFinishDomainEvent : INotification
    {
        public int QuotationId { get; set; }
        public int TotalData { get; set; }
        public DateTime SubmitTime { get; set; }

        public QuotationFinishDomainEvent(
            int quotationId,
            int totalData,
            DateTime submitTime)
        {
            QuotationId = quotationId;
            TotalData = totalData;
            SubmitTime = submitTime;
        }
    }
}