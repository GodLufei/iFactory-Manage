using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using QuotationManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Application.Service.Quotation.Commands;
using QuotationServiceManagement.Application.Service.Quotation.DTOs;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;

namespace QuotationManagement.Application.Service.Quotation.Commands
{
    public class PickQuotationCommandHandler : IRequestHandler<PickQuotationCommand, QuotationDto>
    {
        private readonly IQuotationRepository _quotationRepository;

        private readonly ILogger<PickQuotationCommandHandler> _logger;

        private readonly IMapper _mapper;

        public PickQuotationCommandHandler(IQuotationRepository quotationRepository, ILogger<PickQuotationCommandHandler> logger, IMapper mapper)
        {
            _quotationRepository = quotationRepository;
            _logger = logger;
            _mapper = mapper;
        }

        public async Task<QuotationDto> Handle(PickQuotationCommand request, CancellationToken cancellationToken)
        {
            var quotation = await _quotationRepository.GetAsync(request.QuotationId, cancellationToken);
            return _mapper.Map<QuotationDto>(quotation);
        }
    }
}