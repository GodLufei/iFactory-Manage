using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductManage.Domain.AggregatesModel;

namespace Product.Infrastructure.EntityConfigurations;

public class DemandSideEntityTypeConfiguration : IEntityTypeConfiguration<DemandSide>
{
    public void Configure(EntityTypeBuilder<DemandSide> builder)
    {
        builder.ToTable(nameof(DemandSide), ProductContext.DEFAULT_SCHEMA);

        builder.HasKey(o => o.Id);

        builder.Ignore(b => b.DomainEvents);

        builder
            .OwnsOne(o => o.Address, a =>
            {
                // as a workaround for a documented issue in EF Core 5: https://github.com/dotnet/efcore/issues/20740
                a.WithOwner();
            });

        builder
            .Property<string>(x => x.Title)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<string>(x => x.Tax)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<string>(x => x.BankInfo)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<string>(x => x.PhoneNumber)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();
    }
}