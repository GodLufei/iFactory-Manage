using QuotationServiceManagement.Domain.Shared.Models;

namespace QuotationServiceManagement.Domain.AggregatesModel.InquiryAggregate
{
    public class InquiryParty : Entity
    {
        private InquiryParty()
        {
            Gcid = Guid.NewGuid().ToString();
        }

        public InquiryParty(string title, string address) : this()
        {
            Title = title;

            Address = address;
        }

        public string Gcid { get; private set; }
        public string Title { get; private set; }
        public string Address { get; private set; }

        public string BankNo { get; private set; }

        public string BankName { get; private set; }

    }
}