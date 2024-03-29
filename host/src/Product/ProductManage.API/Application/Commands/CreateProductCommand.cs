﻿using MediatR;

namespace ProductManage.API.Application.Commands;

public class CreateProductCommand : IRequest<int>
{
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

    public IEnumerable<ProductItemDto> ProductItems { get; set; }

    public CreateProductCommand(
        string description,
        string city, string street, string province,
        string zipcode, string title, string tax, string bankInfo, string phoneNumber, string bankAccount,
        IEnumerable<ProductItemDto> productItems)
    {
        QuotationId = 0;
        Description = description;
        City = city;
        Street = street;
        Province = province;
        ZipCode = zipcode;
        ProductItems = productItems;
        Title = title;
        Tax = tax;
        BankInfo = bankInfo;
        PhoneNumber = phoneNumber;
        BankAccount = bankAccount;
    }

    public record ProductItemDto
    {
        public int ProductTypeId { get; set; }
        public string ProductItemName { get; set; }
        public string TechnicalRequirements { get; set; }
        public string Material { get; set; }
        public string Diameter { get; set; }
        public string Length { get; set; }
        public string FigureNo { get; set; }
        public int Amount { get; set; }
        public string Unit { get; set; }
    }
}