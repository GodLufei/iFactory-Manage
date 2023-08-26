using ProductManage.API.DTOs;

namespace ProductManage.API.Application.Profile;

public class ProductDetailAutoMapperProfile : AutoMapper.Profile
{
    public ProductDetailAutoMapperProfile()
    {
        CreateMap<Domain.AggregatesModel.Product, ProductDetailDto>()
            .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
            .ForMember(d => d.Title, o => o.MapFrom(s => s.DemandSide.Title))
            .ForMember(d => d.Description, o => o.MapFrom(s => s.Description))
            .ForMember(d => d.City, o => o.MapFrom(s => s.DemandSide.Address.City))
            .ForMember(d => d.Province, o => o.MapFrom(s => s.DemandSide.Address.Province))
            .ForMember(d => d.Street, o => o.MapFrom(s => s.DemandSide.Address.Street))
            .ForMember(d => d.ZipCode, o => o.MapFrom(s => s.DemandSide.Address.ZipCode))
            .ForMember(d => d.Tax, o => o.MapFrom(s => s.DemandSide.Tax))
            .ForMember(d => d.PhoneNumber, o => o.MapFrom(s => s.DemandSide.PhoneNumber))
            .ForMember(d => d.BankAccount, o => o.MapFrom(s => s.DemandSide.BankAccount))
            .ForMember(d => d.BankInfo, o => o.MapFrom(s => s.DemandSide.BankInfo));
            ;
    }
}