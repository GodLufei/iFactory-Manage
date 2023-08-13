using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class DeleteProductTechnologyCommand: IRequest<bool>
{
    public DeleteProductTechnologyCommand(int id)
    {
        Id = id;
    }

    public int Id { get; }
}

public class DeleteProductTechnologyCommandHandler: IRequestHandler<DeleteProductTechnologyCommand, bool>
{
    private readonly IProductTechnologyRepository _productTechnologyRepository;

    private readonly ILogger<DeleteProductTechnologyCommandHandler> _logger;

    public DeleteProductTechnologyCommandHandler(IProductTechnologyRepository productTechnologyRepository, ILogger<DeleteProductTechnologyCommandHandler> logger)
    {
        _productTechnologyRepository = productTechnologyRepository;
        
        _logger = logger;
    }

    public async Task<bool> Handle(DeleteProductTechnologyCommand request, CancellationToken cancellationToken)
    {
        var result=await _productTechnologyRepository.DeleteAsync(request.Id);
        await _productTechnologyRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
        return true;
    }
}
