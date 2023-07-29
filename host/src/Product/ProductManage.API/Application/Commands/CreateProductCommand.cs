using System.Runtime.Serialization;
using MediatR;
namespace ProductManage.API.Application.Commands;

[DataContract]
public class CreateProductCommand : IRequest<int>
{
    [DataMember] public List<ProductItemDTO> ProductItems;

    [DataMember] public string City { get; private set; }

    [DataMember] public string Street { get; private set; }

    [DataMember] public string Province { get; private set; }

    [DataMember] public string ZipCode { get; private set; }

    [DataMember] public int QuotationId { get; private set; }

    [DataMember] public string Description { get; private set; }

    public CreateProductCommand()
    {
        ProductItems = new List<ProductItemDTO>();
    }

    public CreateProductCommand(List<ProductItemDTO> productItems,
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

    public class ProductItemDTO
    {
        /// <summary>
        ///  产品类型Id
        /// </summary>
        public int ProductTypeId { get; private set; }

        /// <summary>
        /// 产品名称
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// 技术要求
        /// </summary>
        public string TechnicalRequirements { get; private set; }

        /// <summary>
        /// 材料
        /// </summary>
        public string Material { get; private set; }

        /// <summary>
        /// 直径
        /// </summary>
        public string Diameter { get; private set; }

        /// <summary>
        /// 长度
        /// </summary>
        public string Length { get; private set; }

        /// <summary>
        ///  图号
        /// </summary>
        public string FigureNo { get; private set; }

        /// <summary>
        /// 数量
        /// </summary>
        public int Amount { get; private set; }

        /// <summary>
        /// 单位
        /// </summary>
        public string Unit { get; private set; }

        /// <summary>
        /// 计划时间
        /// </summary>
        public TimeSpan ScheduledTime { get; private set; }
    }
}