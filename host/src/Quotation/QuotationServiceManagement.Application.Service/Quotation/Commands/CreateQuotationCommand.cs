using MediatR;
using QuotationServiceManagement.Application.Service.Quotation.DTOs;

namespace QuotationManagement.Application.Service.Quotation.Commands
{
    public class CreateQuotationCommand : IRequest<int>
    {
        public IEnumerable<QuotationItemsDto> QuotationItems { get; private set; }

        public DateTime StartTime { get; private set; }

        public DateTime EndTime { get; private set; }

        public string Title { get; private set; }

        public string Address { get; private set; }

        public string BankAccount { get; private set; }

        public string OpeningBank { get; private set; }

        public string LinkMan { get; private set; }

        public string Email { get; private set; }

        public string Phone { get; private set; }

        public string Fax { get; private set; }

        public string Description { get; private set; }


        public CreateQuotationCommand(
            IEnumerable<QuotationItemsDto> quotationItems,
            DateTime startTime,
            DateTime endTime,
            string title, string address,
            string bankAccount, string openingBank,
            string linkMan, string email, string phone, string fax,
            string description)
        {
            QuotationItems = quotationItems.ToList();
            StartTime = startTime;
            EndTime = endTime;
            Title = title;
            Address = address;
            BankAccount = bankAccount;
            OpeningBank = openingBank;
            LinkMan = linkMan;
            Email = email;
            Phone = phone;
            Fax = fax;
            Description = description;
        }
    }
}