using ProductManage.API.DTOs;

namespace ProductManage.API.Application.Profile;

public class ProductTechnologyListAutoMapperProfile : AutoMapper.Profile
{
    public ProductTechnologyListAutoMapperProfile()
    {
        CreateMap<Domain.AggregatesModel.ProductTechnology, ProductTechnologyListDto>()
            .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            .ForMember(d => d.TechnologySteps, o => o.MapFrom(s => s.TechnologySteps))
            .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name));
    }
}