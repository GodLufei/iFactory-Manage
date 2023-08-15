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
            cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

        services.AddAutoMapper(typeof(CreateProductCommand).Assembly);

        services.AddScoped<IProductTechnologyQueries, ProductTechnologyQueries>();

        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidatorBehavior<,>));
        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(TransactionBehaviour<,>));

        services.AddDbContext<ProductContext>(options =>
            {
                options.UseSqlite("Data Source=QuotationServiceManagement.db;Cache=Shared",
                    sqliteOptionsAction =>
                    {
                        sqliteOptionsAction.MigrationsAssembly(typeof(Program).GetTypeInfo().Assembly.GetName().Name);
                    });
            }
        );
        return services;
    }
}