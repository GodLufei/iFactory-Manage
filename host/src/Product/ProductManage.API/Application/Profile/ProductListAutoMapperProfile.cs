using System.Globalization;
using ProductManage.API.DTOs;

namespace ProductManage.API.Application.Profile;

public class ProductListAutoMapperProfile : AutoMapper.Profile
{
    public ProductListAutoMapperProfile()
    {
        CreateMap<Domain.AggregatesModel.Product, ProductListDto>()
            .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            .ForMember(d => d.CreateTime, o => o.MapFrom(s => s.CreateTime))
            .ForMember(d => d.ProductStatus, o => o.MapFrom(s => s.ProductStatus.Name))
            .ForMember(d => d.Description, o => o.MapFrom(s => s.Description))
            .ForMember(d => d.CompletionRate, o => o.MapFrom(s => s.CompletionRate))
            .ForMember(d => d.TotalManHour, o => o.MapFrom(s => s.TotalManHour))
            .ForMember(d => d.AddressDetail, o => o.MapFrom(s => s.Address.ToString()));
    }
}