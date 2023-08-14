using Microsoft.Extensions.DependencyInjection;
using Product.Infrastructure;
using Product.Infrastructure.Repositories;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.SeedWork;

namespace Microsoft.Extensions.DependencyInjection;

public static class InfrastructureDependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, ProductContext>(provider =>
            provider.GetService<ProductContext>()!
        );

        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<IProductTechnologyRepository, ProductTechnologyRepository>();

        return services;
    }
}