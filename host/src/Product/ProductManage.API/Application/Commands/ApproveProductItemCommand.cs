using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class ApproveProductItemCommand: IRequest<bool>
{
    public ApproveProductItemCommand(int id, int itemId)
    {
        Id = id;
        ItemId = itemId;
    }

    [FromRoute]
    public int Id { get; }
    
    [FromRoute]
    public int ItemId { get; }
}

public class ApproveProductItemCommandHandler : IRequestHandler<ApproveProductItemCommand, bool>
{
    private readonly IProductRepository _productRepository;

    public ApproveProductItemCommandHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<bool> Handle(ApproveProductItemCommand request, CancellationToken cancellationToken)
    {
        var product = await _productRepository.GetAsync(request.Id);
        product.ApproveProductItem(request.ItemId);
        await _productRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
        return true;
    }
}