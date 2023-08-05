using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class DeleteProductItemCommand : IRequest<int>
{
    public readonly int Id;

    public DeleteProductItemCommand(int id)
    {
        Id = id;
    }
}

public class DeleteProductItemCommandHandler : IRequestHandler<DeleteProductItemCommand, int>
{
    private readonly IProductRepository _productRepository;

    private readonly ILogger<CreateProductCommandHandler> _logger;

    protected DeleteProductItemCommandHandler(
        IProductRepository productRepository,
        ILogger<CreateProductCommandHandler> logger)
    {
        _productRepository = productRepository;
        _logger = logger;
    }

    public async Task<int> Handle(DeleteProductItemCommand request, CancellationToken cancellationToken)
    {
        var result=await _productRepository.DeleteItemAsync(request.Id);
        await _productRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
        return result;
    }
}