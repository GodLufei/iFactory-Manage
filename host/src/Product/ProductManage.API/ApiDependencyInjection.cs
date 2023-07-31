using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Product.Infrastructure;

namespace Microsoft.Extensions.DependencyInjection;

public static class ApiDependencyInjection
{
    public static IServiceCollection AddApiServices(this IServiceCollection services)
    {
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
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