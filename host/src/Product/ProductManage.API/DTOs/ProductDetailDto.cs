using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public class ProductDetailDto
{
    public ProductDetailDto(IList<ProductItemDetailDto> productItemDetailDtos)
    {
        ProductItemDetailDtos = productItemDetailDtos;
    }
    
    [DataMember]
    public int Id { get; set; }

    [DataMember]
    public string Description { get;  set; } 
    
    [DataMember] public string Title { get; set; }

    [DataMember] public string Tax { get; set; }

    [DataMember] public string BankInfo { get; set; }

    [DataMember] public string BankAccount { get; set; }

    [DataMember] public string PhoneNumber { get; set; }

    [DataMember] public string City { get; set; }

    [DataMember] public string Street { get; set; }

    [DataMember] public string Province { get; set; }

    [DataMember] public string ZipCode { get; set; }

    [DataMember]  public string ClientPerson { get; set; }

    [DataMember]
    public IList<ProductItemDetailDto> ProductItemDetailDtos { get; set; }
}