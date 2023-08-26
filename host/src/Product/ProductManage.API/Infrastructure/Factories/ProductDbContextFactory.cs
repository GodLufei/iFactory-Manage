using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Product.Infrastructure;

namespace ProductManage.API.Infrastructure.Factories;

public class ProductDbContextFactory : IDesignTimeDbContextFactory<ProductContext>
{
    public ProductContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory()))
            .AddJsonFile("appsettings.json")
            .AddEnvironmentVariables()
            .Build();

        var optionsBuilder = new DbContextOptionsBuilder<ProductContext>();

        optionsBuilder.UseSqlServer(config.GetConnectionString("db"),
            sqlServerOptionsAction: o => o.MigrationsAssembly("ProductManage.API"));

        return new ProductContext(optionsBuilder.Options);
    }
}