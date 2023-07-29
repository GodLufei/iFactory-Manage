using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductManage.Domain.AggregatesModel;

namespace Product.Infrastructure.EntityConfigurations;

public class ProductItemEntityTypeConfiguration : IEntityTypeConfiguration<ProductItem>
{
    public void Configure(EntityTypeBuilder<ProductItem> productItemConfiguration)
    {
        productItemConfiguration.ToTable(nameof(ProductItem), ProductContext.DEFAULT_SCHEMA);

        productItemConfiguration.HasKey(x => x.Id);

        productItemConfiguration.Ignore(x => x.DomainEvents);

        productItemConfiguration.Property(x => x.ProductTypeId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.ProductItemName)
            .HasMaxLength(40)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.TechnicalRequirements)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.Amount)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.Material)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.Length)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.Diameter)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property<string>(x => x.Unit)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.FigureNo)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.ProductStatusId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        productItemConfiguration.Property(x => x.ScheduledTime)
            .UsePropertyAccessMode(PropertyAccessMode.Field);
    }
}