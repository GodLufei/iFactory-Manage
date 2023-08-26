using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class DownProductCommandHandler : IRequestHandler<DownProductCommand, int>
{
    private readonly IProductRepository _productRepository;
    
    private readonly IProductTechnologyRepository _productTechnologyRepository;

    private readonly ILogger<DownProductCommandHandler> _logger;
    
    public DownProductCommandHandler(IProductRepository productRepository, ILogger<DownProductCommandHandler> logger, IProductTechnologyRepository productTechnologyRepository)
    {
        _productRepository = productRepository;
        _logger = logger;
        _productTechnologyRepository = productTechnologyRepository;
    }

    public async Task<int> Handle(DownProductCommand request, CancellationToken cancellationToken)
    {
        var product =await _productRepository.GetAsync(request.Id);
        product.DownProduct();
        var productItems = product.ProductItems;
        foreach (var productItem in productItems)
        {
            var result = await _productTechnologyRepository.GetByProductTypeIdAsync(productItem.ProductTypeId);
            productItem.TransferStatus();
            productItem.DownProductItemProductEvent(result.ProductTechnologyItems.Select(t=>t.WorkStationNo).ToList());
        }
        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        _logger.LogInformation($"down the product succeed: id{product.Id}");
        return product.Id;
    }
}