using System.Runtime.Serialization;
using MediatR;

namespace ProductManage.API.Application.Commands;

public class ChangeProductItemCommand :IRequest<int>
{
    [DataMember]
    public int Id { get; private set; }
    
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