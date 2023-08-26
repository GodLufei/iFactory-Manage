using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

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