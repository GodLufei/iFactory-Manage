using System.Runtime.Serialization;
using MediatR;

namespace ProductManage.API.Application.Commands;

public abstract class CreateProductCommand : IRequest<int>
{
    [DataMember] private readonly List<ProductItemDto> _productItem;

    [DataMember] public IEnumerable<ProductItemDto> ProductItems => _productItem;

    [DataMember] public string City { get; private set; } = null!;

    [DataMember] public string Street { get; private set; } = null!;

    [DataMember] public string Province { get; private set; } = null!;

    [DataMember] public string ZipCode { get; private set; } = null!;

    [DataMember] public int QuotationId { get; private set; }

    [DataMember] public string Description { get; private set; } = null!;

    [DataMember] public string Title { get; set; } = null!;

    [DataMember] public string Tax { get; set; } = null!;

    [DataMember] public string BankInfo { get; set; } = null!;

    [DataMember] public string PhoneNumber { get; set; } = null!;

    protected CreateProductCommand()
    {
        _productItem = new List<ProductItemDto>();
    }

    public CreateProductCommand(
        string description, int quotationId,
        string city, string street, string province,
        string zipcode, string title, string tax, string bankInfo, string phoneNumber,
        List<ProductItemDto> productItemDtos) : this()
    {
        QuotationId = quotationId;
        Description = description;
        City = city;
        Street = street;
        Province = province;
        ZipCode = zipcode;
        _productItem = productItemDtos;
        Title = title;
        Tax = tax;
        BankInfo = bankInfo;
        PhoneNumber = phoneNumber;
    }

    public record ProductItemDto
    {
        public int ProductTypeId { get; init; }
        public string Name { get; init; }
        public string TechnicalRequirements { get; init; }
        public string Material { get; init; }
        public string Diameter { get; init; }
        public string Length { get; init; }
        public string FigureNo { get; init; }
        public int Amount { get; init; }
        public string Unit { get; init; }
    }

}