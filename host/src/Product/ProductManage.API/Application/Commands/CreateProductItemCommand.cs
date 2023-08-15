using System.Runtime.Serialization;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

[DataContract]
public class CreateProductItemCommand : IRequest<int>
{
    public CreateProductItemCommand(int productTypeId, string productItemName, string technicalRequirements,
        string material, string diameter, string length, string figureNo, string unit, int amount, int productStatusId,
        TimeSpan scheduledTime, int id)
    {
        ProductTypeId = productTypeId;
        ProductItemName = productItemName;
        TechnicalRequirements = technicalRequirements;
        Material = material;
        Diameter = diameter;
        Length = length;
        FigureNo = figureNo;
        Unit = unit;
        Amount = amount;
        ProductStatusId = productStatusId;
        ScheduledTime = scheduledTime;
        Id = id;
    }

    [FromRoute] public int Id { get; }
    [DataMember] public int ProductTypeId { get; }

    [DataMember] public string ProductItemName { get; }

    [DataMember] public string TechnicalRequirements { get; }

    [DataMember] public string Material { get; }

    [DataMember] public string Diameter { get; }

    [DataMember] public string Length { get; }

    [DataMember] public string FigureNo { get; }

    [DataMember] public int Amount { get; }

    [DataMember] public string Unit { get; }
    
    [DataMember] public int ProductStatusId { get; }
    
    [DataMember] public TimeSpan ScheduledTime { get; }
}