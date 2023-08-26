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
                a.Property(p => p.Street).HasColumnName("Street");
                a.Property(p => p.ZipCode).HasColumnName("ZipCode");
                a.Property(p => p.Province).HasColumnName("Province");
                a.Property(p => p.City).HasColumnName("City");
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
            .Property<string>(x => x.BankAccount)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();

        builder
            .Property<string>(x => x.PhoneNumber)
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .IsRequired();
    }
}