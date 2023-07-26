using MediatR;
using Microsoft.Extensions.Logging;
using QuotationServiceManagement.Application.Service.Quotation.Commands;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;

namespace QuotationManagement.Application.Service.Quotation.Commands
{
    public class FinishQuotationCommandHandler : IRequestHandler<FinishQuotationCommand, bool>
    {
        private readonly IMediator _mediator;

        private readonly IQuotationRepository _quotationRepository;

        private readonly ILogger<PickQuotationCommandHandler> _logger;

        public FinishQuotationCommandHandler(IMediator mediator,
            ILogger<PickQuotationCommandHandler> logger,
            IQuotationRepository quotationRepository)
        {
            _mediator = mediator;
            _logger = logger;
            _quotationRepository = quotationRepository;
        }


        public async Task<bool> Handle(FinishQuotationCommand request, CancellationToken cancellationToken)
        {
            var quotation = await _quotationRepository.GetAsync(request.QuotationId, cancellationToken);
            quotation.FinishQuotation(quotation.Id, 1, DateTime.Now);
            await _quotationRepository.UnitOfWork.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(true);
        }
    }
}