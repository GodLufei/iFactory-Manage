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

        optionsBuilder.UseSqlServer("Data Source=192.168.1.6,1433;Initial Catalog=ProductManage;Persist Security Info=True;User ID=sa;Password=123456;TrustServerCertificate=true",
            sqlServerOptionsAction: o => o.MigrationsAssembly("ProductManage.API"));

        return new ProductContext(optionsBuilder.Options);
    }
}