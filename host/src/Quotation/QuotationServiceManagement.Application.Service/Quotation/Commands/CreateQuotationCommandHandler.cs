using MediatR;
using Microsoft.Extensions.Logging;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;


namespace QuotationManagement.Application.Service.Quotation.Commands;

public class CreateQuotationCommandHandler : IRequestHandler<CreateQuotationCommand, int>
{
    private readonly IQuotationRepository _quotationRepository;

    private readonly ILogger<ChangeQuotationCommandHandler> _logger;

    public CreateQuotationCommandHandler(IQuotationRepository quotationRepository,
        ILogger<ChangeQuotationCommandHandler> logger)
    {
        _quotationRepository = quotationRepository;
        _logger = logger;
    }

    public Task<int> Handle(CreateQuotationCommand request, CancellationToken cancellationToken)
    {
        var quotation = new QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate.Quotation();

        quotation.InitQuotation(DateTime.Now, request.Description, request.QuotationItems.Sum(t => t.Quatity));

        foreach (var quotationItem in request.QuotationItems)
        {
            quotation.AddQuotationItem(quotationItem.Name, quotationItem.Specification,
                quotationItem.TechnologicalStandard, quotationItem.UnitPrice, quotationItem.Quatity,
                quotationItem.Remark);
        }

        _quotationRepository.Add(quotation, cancellationToken);
        var result = _quotationRepository.UnitOfWork.SaveChangesAsync(cancellationToken);

        return result;
    }
}