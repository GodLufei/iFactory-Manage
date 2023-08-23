using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public class ProductItemDetailDto
{
    public int Id { get; set; }

    public string ProductType { get; set; }

    public string ProductItemName { get; set; }

    public string TechnicalRequirements { get; set; }

    public string Material { get; set; }

    public string Diameter { get; set; }

    public string Length { get; set; }

    public string FigureNo { get; set; }

    public int Amount { get; set; }

    public string Unit { get; set; }

    public string ProductStatus { get; set; }
    

}