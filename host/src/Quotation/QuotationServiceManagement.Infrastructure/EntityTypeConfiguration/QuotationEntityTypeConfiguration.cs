using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuotationServiceManagement.Domain.AggregatesModel.QuotationAggregate;
using QuotationServiceManagement.Domain.Shared.Enums;
using QuotationServiceManagement.Infrastructure.Repositories;

namespace QuotationServiceManagement.Infrastructure.EntityTypeConfiguration
{
    class QuotationEntityTypeConfiguration : IEntityTypeConfiguration<Quotation>
    {
        public void Configure(EntityTypeBuilder<Quotation> quotationConfiguration)
        {
            quotationConfiguration.ToTable(
                nameof(Quotation).ToLower(),
                QuotationServiceManagementContext.DEFAULT_SCHEMA
                );

            quotationConfiguration.HasKey(o => o.Id);

            quotationConfiguration.Ignore(b => b.DomainEvents);

            quotationConfiguration.Property(x => x.Gcid)
                .UsePropertyAccessMode(PropertyAccessMode.Field)
                .HasMaxLength(40).IsRequired();

            quotationConfiguration.Property(x => x.CreateTime)
                .UsePropertyAccessMode(PropertyAccessMode.Field)
                .IsRequired();

            quotationConfiguration.Property(x => x.QuotationDateTime)
                .UsePropertyAccessMode(PropertyAccessMode.Field)
                .IsRequired();

            quotationConfiguration.Property(x => x.EndTime)
                .IsRequired();

            quotationConfiguration.Property(x => x.QuotationCount)
                .IsRequired();

            quotationConfiguration.Property(x => x.QuotationStatus)
                .HasDefaultValue(QuotationStatus.Create)
                .IsRequired();

            quotationConfiguration.Property(x => x.Description)
                .HasDefaultValue(string.Empty)
                .IsRequired();

            quotationConfiguration.Property(x => x.TotalData)
                .HasDefaultValue(0)
                .IsRequired();

            quotationConfiguration.HasMany(b => b.QuotationItems)
                .WithOne()
                .HasForeignKey("QuotationId")
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}