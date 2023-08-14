using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductManage.Domain.AggregatesModel;

namespace Product.Infrastructure.EntityConfigurations;

internal class ProductTechnologyItemEntityTypeConfiguration : IEntityTypeConfiguration<ProductTechnologyItem>
{
    public void Configure(EntityTypeBuilder<ProductTechnologyItem> builder)
    {
        builder.ToTable(nameof(ProductTechnologyItem), ProductContext.DEFAULT_SCHEMA);

        builder.HasKey(x => x.Id);

        builder.Ignore(x => x.DomainEvents);

        builder.Property(x => x.StepIndex)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder.Property(x => x.TechnologyTypeId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder.Property(x => x.WorkStationNo)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();
    }
}