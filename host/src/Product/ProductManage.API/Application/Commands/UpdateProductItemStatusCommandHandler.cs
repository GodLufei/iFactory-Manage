using MediatR;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.Shared.Enums;

namespace ProductManage.API.Application.Commands;

public class UpdateProductItemStatusCommandHandler : IRequestHandler<UpdateProductItemStatusCommand, bool>
{
    private readonly IProductRepository _productRepository;

    public UpdateProductItemStatusCommandHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<bool> Handle(UpdateProductItemStatusCommand request, CancellationToken cancellationToken)
    {
        var productItemSteps = await _productRepository.GetByProductItemIdAsync(request.ProductItemId);

        if (productItemSteps.Count == 0) return false;
        var productItemStep = productItemSteps.Find(t => t.WorkStationNo == request.StationNo);
        
        if (productItemStep is null) return false;
        
        var originProductItemStepIndex =productItemStep.StepIndex;
                
        productItemStep!.UpdateStatus(request.ProductStatusId);

        if (request.ProductStatusId == ProductStatus.DoneProduct.Id)
        {
            // 最后一个工艺步骤 更新 productItem 
            if (productItemStep.StepIndex == productItemSteps.Max(t => t.StepIndex))
            {
                var product = await _productRepository.GetProductByItemIdAsync(productItemStep.ProductItemId);
                product.ApproveProductItem(productItemStep.ProductItemId);
            }
            else
            {
                var newProductItemStepIndex = originProductItemStepIndex++;
                // 更新productItemStep
                var nextProductItemStep = productItemSteps.Find(t => t.StepIndex ==newProductItemStepIndex);
                nextProductItemStep!.UpdateStatus(ProductStatus.AwaitingProduct.Id);
                _productRepository.Update(nextProductItemStep);
            }
        }
        await _productRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
        return true;
    }

    // public async Task<bool> Handle(UpdateProductItemStatusCommand request, CancellationToken cancellationToken)
    // {
    //     var productItemSteps = await _productRepository.GetByProductItemIdAsync(request.ProductItemId);
    //
    //     var productItemStep = productItemSteps.Find(t => t.WorkStationNo == request.StationNo);
    //
    //     productItemStep!.UpdateStatus(request.ProductStatusId);
    //
    //     if (request.ProductStatusId == ProductStatus.DoneProduct.Id || request.ProductStatusId == ProductStatus.CancelledProduct.Id)
    //     {
    //         var product = await _productRepository.GetProductByItemIdAsync(productItemStep.ProductItemId);
    //         // 最后一个工艺步骤 更新 productItem 
    //         if (productItemStep.StepIndex == productItemSteps.Max(t => t.StepIndex))
    //         {
    //             //product.ApproveProductItem(productItemStep.ProductItemId);
    //             product.DoneProduct();
    //         }
    //         else 
    //         {
    //             product.DoingProduct();
    //         }
    //     }
    //     await _productRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    //     return true;
    // }
}