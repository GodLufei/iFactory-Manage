using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public class ProductItemDetailDto
{
    public ProductItemDetailDto()
    {
    }

    public ProductItemDetailDto(int id, int productTypeId, string productItemName, string technicalRequirements, string material, string diameter, string length, string figureNo, int amount, string unit, int productStatusId)
    {
        Id = id;
        ProductTypeId = productTypeId;
        ProductItemName = productItemName;
        TechnicalRequirements = technicalRequirements;
        Material = material;
        Diameter = diameter;
        Length = length;
        FigureNo = figureNo;
        Amount = amount;
        Unit = unit;
        ProductStatusId = productStatusId;
    }

    public int Id { get; set; }

    public int ProductTypeId { get; set; }

    public string ProductItemName { get; set; }

    public string TechnicalRequirements { get; set; }

    public string Material { get; set; }

    public string Diameter { get; set; }

    public string Length { get; set; }

    public string FigureNo { get; set; }

    public int Amount { get; set; }

    public string Unit { get; set; }

    public int ProductStatusId { get; set; }
    

}