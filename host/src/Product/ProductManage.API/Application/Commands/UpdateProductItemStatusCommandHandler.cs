using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class UpdateProductItemStatusCommandHandler : IRequestHandler<UpdateProductItemStatusCommand, int>
{
    private readonly IProductRepository _productRepository;

    public UpdateProductItemStatusCommandHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<int> Handle(UpdateProductItemStatusCommand request, CancellationToken cancellationToken)
    {
        var productItemSteps =await _productRepository.GetByProductItemIdAsync(request.ProductItemId);
        productItemSteps.Find(t => t.WorkStationNo == request.StationNo)!.UpdateStatus(request.ProductStatusId);

        if(productItemSteps.Select(t=>t.ProductItemId).Distinct().Count()==productItemSteps.Count)
        {
            

        }
        
        throw new NotImplementedException();
    }
}