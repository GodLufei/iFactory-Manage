using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, int>
{
    private readonly IProductRepository _productRepository;

    public UpdateProductCommandHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<int> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
    {
        var product = await _productRepository.GetAsync(request.Id);
        product.UpdateDemandSide(request.Title, request.Tax, request.BankInfo, request.PhoneNumber, request.Street,
            request.City, request.Province, request.ZipCode, request.BankAccount);
        await _productRepository.UnitOfWork
            .SaveEntitiesAsync(cancellationToken);
        return product.Id;
    }
}