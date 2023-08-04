using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public abstract class ProductDetailDto : ProductListDto
{
    public IList<ProductItemDetailDto> ProductItemDetailDtos { get; set; }

}
