using Microsoft.Extensions.DependencyInjection;
using QuotationServiceManagement.Domain.AggregatesModel.ContractAggregate;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;
using QuotationServiceManagement.Domain.Interface;
using QuotationServiceManagement.Infrastructure.Repositories;

namespace QuotationServiceManagement.Infrastructure;

public static class InfrastructureDependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, QuotationServiceManagementContext>(provider =>
            provider.GetService<QuotationServiceManagementContext>()
        );

        services.AddScoped<IQuotationRepository, QuotationRepository>();


        services.AddScoped<IContractRepository, ContractRepository>();

        return services;
    }
}