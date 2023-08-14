using ProductManage.API.Application.Commands;
using ProductManage.API.DTOs;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Profile;


public class ProductTechnologyItemAutoMapperProfile : AutoMapper.Profile
{
    public ProductTechnologyItemAutoMapperProfile()
    {
        CreateMap<Domain.AggregatesModel.ProductTechnologyItem, ProductTechnologyItemDto>()
            .ForMember(d => d.StepIndex, o => o.MapFrom(s => s.StepIndex))
            .ForMember(d => d.WorkStationNo, o => o.MapFrom(s => s.WorkStationNo))
            .ForMember(d => d.TechnologyType, o => o.MapFrom(s => TechnologyType.From(s.TechnologyTypeId)));
    }
}