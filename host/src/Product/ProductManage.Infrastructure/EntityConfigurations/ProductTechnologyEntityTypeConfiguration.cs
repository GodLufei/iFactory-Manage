using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductManage.Domain.AggregatesModel;

namespace Product.Infrastructure.EntityConfigurations;


public class ProductTechnologyEntityTypeConfiguration : IEntityTypeConfiguration<ProductTechnology>
{
    public void Configure(EntityTypeBuilder<ProductTechnology> builder)
    {
        builder.ToTable(nameof(ProductTechnology), ProductContext.DEFAULT_SCHEMA);

        builder.HasKey(x => x.Id);

        builder.Ignore(x => x.DomainEvents);

        builder.Property(x => x.ProductTypeId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder.HasMany(b => b.ProductTechnologyItems)
            .WithOne()
            .HasForeignKey("ProductTechnologyId")
            .OnDelete(DeleteBehavior.Cascade);

    }
}