using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Product.Infrastructure;
using ProductManage.API.Application.Commands;
using ProductManage.API.Application.Dapper;
using ProductManage.API.Application.Queries;

namespace Microsoft.Extensions.DependencyInjection;

public static class ApiDependencyInjection
{
    public static IServiceCollection AddApiServices(this IServiceCollection services,IConfiguration configuration)
    {
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssembly(typeof(CreateProductCommand).Assembly));

        services.AddAutoMapper(typeof(CreateProductCommand).Assembly);

        services.AddScoped<IProductTechnologyQueries, ProductTechnologyQueries>();

        services.AddScoped<IProductQueries, ProductQueries>();
        
        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidatorBehavior<,>));
        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(TransactionBehaviour<,>));

        services.AddDbContext<ProductContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("db"),
                    sqlOptionsAction =>
                    {
                        sqlOptionsAction.MigrationsAssembly(typeof(Program).GetTypeInfo().Assembly.GetName().Name);
                    });
            }
        );
        
        services.AddSingleton(sp => new BaseDbContext(
            configuration.GetConnectionString("db")
        ));
        return services;
    }
}