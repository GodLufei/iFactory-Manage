namespace ProductManage.API.DTOs;

public class AwaitReverseProductItemsGroupDto
{
    public AwaitReverseProductItemsGroupDto(ProductListDto productListDto, IEnumerable<ProductItemDetailDto> productItemDetailDtos)
    {
        ProductListDto = productListDto;
        ProductItemDetailDtos = productItemDetailDtos;
    }

    private ProductListDto ProductListDto { get; set; }

    private IEnumerable<ProductItemDetailDto> ProductItemDetailDtos { get; set; }
}