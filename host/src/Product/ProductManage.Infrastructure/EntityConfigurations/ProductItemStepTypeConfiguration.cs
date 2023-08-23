using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductManage.Domain.AggregatesModel;

namespace Product.Infrastructure.EntityConfigurations;

public class ProductItemStepTypeConfiguration: IEntityTypeConfiguration<ProductItemStep>
{
    public void Configure(EntityTypeBuilder<ProductItemStep> builder)
    {
        builder.ToTable(nameof(ProductItemStep), ProductContext.DEFAULT_SCHEMA);

        builder.HasKey(o => o.Id);

        builder.Ignore(b => b.DomainEvents);
        
        builder
            .Property<int>(x => x.ProductItemId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<int>(x => x.StepIndex)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<string>(x => x.WorkStationNo)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<int>(x => x.ProductStatusId)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();
    }
}