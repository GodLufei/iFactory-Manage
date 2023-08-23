using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

public class UpdateProductCommand : IRequest<int>
{
    public UpdateProductCommand(string city, string street, string province, string zipCode, int quotationId,
        string description, string title, string tax, string bankInfo, string phoneNumber, int id)
    {
        City = city;
        Street = street;
        Province = province;
        ZipCode = zipCode;
        QuotationId = quotationId;
        Description = description;
        Title = title;
        Tax = tax;
        BankInfo = bankInfo;
        PhoneNumber = phoneNumber;
        Id = id;
    }

    [FromRoute] public int Id { get; set; }

    public string City { get; set; }

    public string Street { get; set; }

    public string Province { get; set; }

    public string ZipCode { get; set; }

    public int QuotationId { get; set; }

    public string Description { get; set; }

    public string Title { get; set; }

    public string Tax { get; set; }

    public string BankInfo { get; set; }

    public string BankAccount { get; set; }

    public string PhoneNumber { get; set; }
}