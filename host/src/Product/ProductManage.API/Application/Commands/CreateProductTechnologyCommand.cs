using MediatR;

namespace ProductManage.API.Application.Commands;

public  class CreateProductTechnologyCommand: IRequest<int>
{
    public CreateProductTechnologyCommand(int productTypeId,
        IEnumerable<ProductTechnologyItemDto> productTechnologyItemDtos)
    {
        ProductTypeId = productTypeId;
        ProductTechnologyItemDtos = productTechnologyItemDtos;
    }

    public int ProductTypeId { get;  }

    public IEnumerable<ProductTechnologyItemDto> ProductTechnologyItemDtos { get;  }

    public abstract record ProductTechnologyItemDto
    {   
        public int StepIndex { get; init; }

        public int TechnologyTypeId { get;init; }

        public string WorkStationNo { get;init; }
    }
}

