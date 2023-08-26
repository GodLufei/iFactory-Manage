namespace ProductManage.API.DTOs;

public class AwaitReverseProductItemsGroupDto
{
    public AwaitReverseProductItemsGroupDto(ProductListDto productListDto, IEnumerable<ProductItemDetailDto> productItemDetailDtos)
    {
        ProductListDto = productListDto;
        ProductItemDetailDtos = productItemDetailDtos;
    }

    public ProductListDto ProductListDto { get; set; }

    public IEnumerable<ProductItemDetailDto> ProductItemDetailDtos { get; set; }
}