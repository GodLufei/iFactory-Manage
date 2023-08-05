using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public abstract class ProductDetailDto : ProductListDto
{
    protected ProductDetailDto(IList<ProductItemDetailDto> productItemDetailDtos)
    {
        ProductItemDetailDtos = productItemDetailDtos;
    }

    public IList<ProductItemDetailDto> ProductItemDetailDtos { get; set; }

}
