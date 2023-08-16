namespace ProductManage.API.DTOs;

public class AwaitApproveProductItemsGroupDto
{
    public AwaitApproveProductItemsGroupDto(ProductListDto productListDto, IEnumerable<ProductItemDetailDto> productItemDetailDtos)
    {
        ProductListDto = productListDto;
        ProductItemDetailDtos = productItemDetailDtos;
    }

    private ProductListDto ProductListDto { get; set; }

    private IEnumerable<ProductItemDetailDto> ProductItemDetailDtos { get; set; }
}