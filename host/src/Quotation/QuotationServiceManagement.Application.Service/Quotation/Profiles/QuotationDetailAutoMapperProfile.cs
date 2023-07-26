using QuotationManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;

namespace QuotationManagement.Application.Service.Quotation.Profiles;

public class QuotationDetailAutoMapperProfile : AutoMapper.Profile
{
    public QuotationDetailAutoMapperProfile()
    {
        CreateMap<QuotationItem, QuotationItemsDto>()
            .ForMember(d => d.Name, o => o.MapFrom(s => s.Name))
            .ForMember(d => d.Quatity, o => o.MapFrom(s => s.Quantity))
            .ForMember(d => d.Remark, o => o.MapFrom(s => s.Remark))
            .ForMember(d => d.Specification, o => o.MapFrom(s => s.Specification))
            .ForMember(d => d.TechnologicalStandard, o => o.MapFrom(s => s.TechnologicalStandard))
            .ForMember(d => d.TotalPrice, o => o.MapFrom(s => s.UnitPrice * s.Quantity));
    }

}