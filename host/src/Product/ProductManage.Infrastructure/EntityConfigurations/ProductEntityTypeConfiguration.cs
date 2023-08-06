using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Product.Infrastructure.EntityConfigurations;

public class ProductEntityTypeConfiguration : IEntityTypeConfiguration<ProductManage.Domain.AggregatesModel.Product>
{
    public void Configure(EntityTypeBuilder<ProductManage.Domain.AggregatesModel.Product> productConfiguration)
    {
        productConfiguration.ToTable(nameof(Product), ProductContext.DEFAULT_SCHEMA);

        productConfiguration.HasKey(o => o.Id);

        productConfiguration.Ignore(b => b.DomainEvents);

        //Address value object persisted as owned entity type supported since EF Core 2.0
        productConfiguration
            .OwnsOne(o => o.Address, a =>
            {
                // Explicit configuration of the shadow key property in the owned type 
                // as a workaround for a documented issue in EF Core 5: https://github.com/dotnet/efcore/issues/20740
                a.WithOwner();
            });

        productConfiguration
            .Property<DateTime>(x => x.CreateTime)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productConfiguration
            .Property<string>(x => x.Description)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productConfiguration
            .Property<int>(x => x.QuotationId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productConfiguration
            .Property<DateTime>(x => x.StartTime)
            .UsePropertyAccessMode(PropertyAccessMode.Field);

        productConfiguration
            .Property<DateTime>(x => x.EndTime)
            .UsePropertyAccessMode(PropertyAccessMode.Field);

        productConfiguration
            .Property<int>(x => x.ProductStatusId)
            .UsePropertyAccessMode(PropertyAccessMode.Field);

        productConfiguration.HasMany(b => b.ProductItems)
            .WithOne()
            .HasForeignKey("ProductId")
            .OnDelete(DeleteBehavior.Cascade);
    }
}