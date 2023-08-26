using MediatR;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

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
        
        var productItemStep=productItemSteps.Find(t => t.WorkStationNo == request.StationNo);
        productItemStep!.UpdateStatus(request.ProductStatusId);
        
        if (request.ProductStatusId == ProductStatus.DoneProduct.Id )
        {
            // 最后一个工艺步骤
            if (productItemStep.StepIndex == productItemSteps.Max(t => t.StepIndex))
            {
                
            }

            var nextProductItemStep = productItemSteps.Find(t => t.StepIndex == ++productItemStep.StepIndex);
        
        }

        return 0;
    }
}