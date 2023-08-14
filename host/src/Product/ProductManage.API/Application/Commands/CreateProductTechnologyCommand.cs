using MediatR;

namespace ProductManage.API.Application.Commands;

public class CreateProductTechnologyCommand : IRequest<int>
{
    public CreateProductTechnologyCommand(int productTypeId,
        IEnumerable<CreateProductTechnologyItemDto> productTechnologyItemDtos)
    {
        ProductTypeId = productTypeId;
        ProductTechnologyItemDtos = productTechnologyItemDtos;
    }

    public int ProductTypeId { get; }

    public IEnumerable<CreateProductTechnologyItemDto> ProductTechnologyItemDtos { get; }

    public record CreateProductTechnologyItemDto
    {
        public int StepIndex { get; init; }

        public int TechnologyTypeId { get; init; }

        public string WorkStationNo { get; init; }
    }
}

