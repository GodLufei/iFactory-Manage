using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Product.Infrastructure;
using ProductManage.API.Application.Commands;
using ProductManage.API.Application.Queries;

namespace Microsoft.Extensions.DependencyInjection;

public static class ApiDependencyInjection
{
    public static IServiceCollection AddApiServices(this IServiceCollection services)
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
                options.UseSqlServer("Data Source=192.168.1.6,1433;Initial Catalog=ProductManage;Persist Security Info=True;User ID=sa;Password=123456;TrustServerCertificate=true",
                    sqliteOptionsAction =>
                    {
                        sqliteOptionsAction.MigrationsAssembly(typeof(Program).GetTypeInfo().Assembly.GetName().Name);
                    });
            }
        );
        return services;
    }
}