using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using QuotationManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Application.Service.Quotation.Commands;
using QuotationServiceManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;

namespace QuotationManagement.Application.Service.Quotation.Commands;

public class PickQuotationDetailCommandHandler : IRequestHandler<PickQuotationDetailCommand, QuotationDetailDto>
{
    private readonly IQuotationRepository _quotationRepository;

    private readonly ILogger<PickQuotationCommandHandler> _logger;

    private readonly IMapper _mapper;

    public PickQuotationDetailCommandHandler(IQuotationRepository quotationRepository, ILogger<PickQuotationCommandHandler> logger, IMapper mapper)
    {
        _quotationRepository = quotationRepository;
        _logger = logger;
        _mapper = mapper;
    }

    public async Task<QuotationDetailDto> Handle(PickQuotationDetailCommand request, CancellationToken cancellationToken)
    {
        return null;
    }
}