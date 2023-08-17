using System.Runtime.Serialization;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

public class ChangeProductItemCommand : IRequest<int>
{
    public ChangeProductItemCommand(int id, int productTypeId, string name, string technicalRequirements, string material, string diameter, string length, string figureNo, int amount, string unit)
    {
        Id = id;
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
    [FromRoute]
    public int Id { get; set; }

    [DataMember]
    public int ProductTypeId { get; private set; }

    [DataMember]
    public string Name { get; private set; }

    [DataMember]
    public string TechnicalRequirements { get; private set; }

    [DataMember]
    public string Material { get; private set; }

    [DataMember]
    public string Diameter { get; private set; }

    [DataMember]
    public string Length { get; private set; }

    [DataMember]
    public string FigureNo { get; private set; }

    [DataMember]
    public int Amount { get; private set; }

    [DataMember]
    public string Unit { get; private set; }
}