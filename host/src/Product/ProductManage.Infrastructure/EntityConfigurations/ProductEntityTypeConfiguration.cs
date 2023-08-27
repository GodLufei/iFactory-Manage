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
        
        productConfiguration.Ignore(b => b.ProductStatus);

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
            .Property(x => x.ProductStatusId)
            .UsePropertyAccessMode(PropertyAccessMode.Field);

        productConfiguration.HasOne(b => b.DemandSide)
            .WithMany()
            .HasForeignKey("DemandSideId")
            .OnDelete(DeleteBehavior.Cascade);

        productConfiguration.HasMany(b => b.ProductItems)
            .WithOne()
            .HasForeignKey(b=>b.ProductId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}