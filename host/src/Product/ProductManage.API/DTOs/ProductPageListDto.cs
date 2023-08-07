using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public class ProductPageListDto
{
    [DataMember] public IEnumerable<ProductListDto> ProductListDtos { get; set; }

    [DataMember]
    public Page Page { get; set; }
}