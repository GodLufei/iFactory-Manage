using System.Runtime.Serialization;
using MediatR;
namespace ProductManage.API.Application.Commands;

public class CreateProductCommand : IRequest<int>
{
    [DataMember] public List<ProductItemDto> ProductItems { get; private set; }

    [DataMember] public string City { get; private set; }

    [DataMember] public string Street { get; private set; }

    [DataMember] public string Province { get; private set; }

    [DataMember] public string ZipCode { get; private set; }

    [DataMember] public int QuotationId { get; private set; }

    [DataMember] public string Description { get; private set; }

    private CreateProductCommand()
    {

    }

    public CreateProductCommand(List<ProductItemDto> productItems,
        string description, int quotationId,
        string city, string street, string province,
        string zipcode) : this()
    {
        ProductItems = productItems;
        QuotationId = quotationId;
        Description = description;
        City = city;
        Street = street;
        Province = province;
        ZipCode = zipcode;
    }

    public class ProductItemDto
    {
        public ProductItemDto(int productTypeId, string name, string technicalRequirements, string material, string diameter, string length, string figureNo, int amount, string unit)
        {
            ProductTypeId = productTypeId;
            Name = name;
            TechnicalRequirements = technicalRequirements;
            Material = material;
            Diameter = diameter;
            Length = length;
            FigureNo = figureNo;
            Amount = amount;
            Unit = unit;
        }

        /// <summary>
        ///  产品类型Id
        /// </summary>
        public int ProductTypeId { get; }

        /// <summary>
        /// 产品名称
        /// </summary>
        public string Name { get; }

        /// <summary>
        /// 技术要求
        /// </summary>
        public string TechnicalRequirements { get; }

        /// <summary>
        /// 材料
        /// </summary>
        public string Material { get; }

        /// <summary>
        /// 直径
        /// </summary>
        public string Diameter { get; }

        /// <summary>
        /// 长度
        /// </summary>
        public string Length { get; }

        /// <summary>
        ///  图号
        /// </summary>
        public string FigureNo { get; }

        /// <summary>
        /// 数量
        /// </summary>
        public int Amount { get; }

        /// <summary>
        /// 单位
        /// </summary>
        public string Unit { get; }

    }
}