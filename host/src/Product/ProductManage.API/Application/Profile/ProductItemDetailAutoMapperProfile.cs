using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Profile;

public class ProductItemDetailAutoMapperProfile : AutoMapper.Profile
{
    public ProductItemDetailAutoMapperProfile()
    {
        CreateMap<ProductItem, ProductItemDetailDto>()
            .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            .ForMember(d => d.ProductItemName, o => o.MapFrom(s => s.ProductItemName))
            .ForMember(d => d.TechnicalRequirements, o => o.MapFrom(s => s.TechnicalRequirements))
            .ForMember(d => d.ProductTypeId, o => o.MapFrom(s => s.ProductTypeId))
            .ForMember(d => d.ProductStatusId, o => o.MapFrom(s => s.ProductStatusId))
            .ForMember(d => d.Amount, o => o.MapFrom(s => s.Amount))
            .ForMember(d => d.Diameter, o => o.MapFrom(s => s.Diameter))
            .ForMember(d => d.Length, o => o.MapFrom(s => s.Length))
            .ForMember(d => d.Unit, o => o.MapFrom(s => s.Unit))
            .ForMember(d => d.Material, o => o.MapFrom(s => s.Material))
            .ForMember(d => d.FigureNo, o => o.MapFrom(s => s.FigureNo));
    }
}