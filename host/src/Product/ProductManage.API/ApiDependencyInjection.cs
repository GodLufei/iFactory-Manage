using MediatR;
using ProductManage.API.Application.Commands;

namespace Microsoft.Extensions.DependencyInjection;

public static class ApiDependencyInjection
{
    public static IServiceCollection AddApiServices(this IServiceCollection services)
    {
        services.AddMediatR(typeof(CreateProductCommand).Assembly);
        // services.AddAutoMapper(typeof(CreateProductCommand).Assembly);
        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidatorBehavior<,>));
        // services.AddScoped(typeof(IPipelineBehavior<,>), typeof(TransactionBehaviour<,>));

        // services.AddDbContext<QuotationServiceManagementContext>(options =>
        //     {
        //         options.UseSqlite("Data Source=QuotationServiceManagement.db;Cache=Shared",
        //             sqliteOptionsAction =>
        //             {
        //                 sqliteOptionsAction.MigrationsAssembly(typeof(Program).GetTypeInfo().Assembly.GetName().Name);
        //             });
        //     }
        // );

        return services;
    }
}