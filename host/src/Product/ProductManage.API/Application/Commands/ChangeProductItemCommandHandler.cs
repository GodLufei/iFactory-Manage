﻿
using MediatR;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Commands;

public class ChangeProductItemCommandHandler : IRequestHandler<ChangeProductItemCommand, int>
{
    private readonly IProductRepository _productRepository;

    private readonly ILogger<ChangeProductItemCommandHandler> _logger;

    public ChangeProductItemCommandHandler(IProductRepository productRepository,
        ILogger<ChangeProductItemCommandHandler> logger)
    {
        _productRepository = productRepository;
        _logger = logger;
    }

    public async Task<int> Handle(ChangeProductItemCommand request, CancellationToken cancellationToken)
    {
        var productItem = await _productRepository.GetItemAsync(request.Id);
        productItem.UpdateProductItem(request.ProductTypeId, request.ProductItemName, request.TechnicalRequirements,
            request.Material, request.Diameter, request.Length, request.FigureNo, request.Amount, request.Unit);

        var newProductItem = _productRepository.UpdateItem(productItem);
        await _productRepository.UnitOfWork.SaveChangesAsync(cancellationToken);

        _logger.LogInformation("----- Creating product - ProductItem: {@ProductItem}", newProductItem);
        return newProductItem.Id;
    }
}