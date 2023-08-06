using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Profile;

public class ProductItemDetailAutoMapperProfile : AutoMapper.Profile
{
    public ProductItemDetailAutoMapperProfile()
    {
        CreateMap<Domain.AggregatesModel.ProductItem, ProductItemDetailDto>()
            .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            .ForMember(d => d.ProductItemName, o => o.MapFrom(s => s.ProductItemName))
            .ForMember(d => d.TechnicalRequirements, o => o.MapFrom(s => s.TechnicalRequirements))
            .ForMember(d => d.ProductType, o => o.MapFrom(s => ProductType.From(s.ProductTypeId)))
            .ForMember(d => d.ProductStatus, o => o.MapFrom(s => ProductStatus.From(s.ProductStatusId)))
            .ForMember(d => d.Amount, o => o.MapFrom(s => s.Amount))
            .ForMember(d => d.Diameter, o => o.MapFrom(s => s.Diameter))
            .ForMember(d => d.Length, o => o.MapFrom(s => s.Length))
            .ForMember(d => d.Unit, o => o.MapFrom(s => s.Unit))
            .ForMember(d => d.Material, o => o.MapFrom(s => s.Material))
            .ForMember(d => d.FigureNo, o => o.MapFrom(s => s.FigureNo))
            .ForMember(d => d.ScheduledTime, o => o.MapFrom(s => s.ScheduledTime))
            .ForMember(d => d.StartTime, o => o.MapFrom(s => s.StartTime))
            .ForMember(d => d.EndTime, o => o.MapFrom(s => s.EndTime));
    }
}