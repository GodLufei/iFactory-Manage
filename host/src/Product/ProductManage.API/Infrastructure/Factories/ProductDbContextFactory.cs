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

        optionsBuilder.UseSqlServer("data source=192.168.1.6;initial catalog=productManage;user=sa;password=123456",
            sqlServerOptionsAction: o => o.MigrationsAssembly("ProductManage.API"));

        return new ProductContext(optionsBuilder.Options);
    }
}