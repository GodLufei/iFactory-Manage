using System.Data;
using System.Diagnostics;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Product.Infrastructure.EntityConfigurations;
using ProductManage.Domain.AggregatesModel;
using ProductManage.Domain.SeedWork;

namespace Product.Infrastructure;

public sealed class ProductContext : DbContext, IUnitOfWork
{
    public const string DEFAULT_SCHEMA = "Product";
    public DbSet<ProductManage.Domain.AggregatesModel.Product> Products { get; set; }
    public DbSet<ProductItem> ProductItems { get; set; }

    public DbSet<ProductTechnology> ProductTechnologies { get; set; }

    public DbSet<ProductTechnologyItem> ProductTechnologyItems { get; set; }

    private readonly IMediator? _mediator;

    private IDbContextTransaction? _currentTransaction;

    public ProductContext(DbContextOptions<ProductContext> options) : base(options)
    { }


    public ProductContext(DbContextOptions<ProductContext> options, IMediator? mediator) : base(options)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));

        System.Diagnostics.Debug.WriteLine("OrderingContext::ctor ->" + this.GetHashCode());
    }

    public IDbContextTransaction? GetCurrentTransaction() => _currentTransaction;

    public bool HasActiveTransaction => _currentTransaction != null;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ProductItemEntityTypeConfiguration());
        modelBuilder.ApplyConfiguration(new ProductEntityTypeConfiguration());
        modelBuilder.ApplyConfiguration(new ProductTechnologyEntityTypeConfiguration());
        modelBuilder.ApplyConfiguration(new ProductTechnologyItemEntityTypeConfiguration());
    }

    public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
    {
        await _mediator.DispatchDomainEventsAsync(this);

        var result = await SaveChangesAsync(cancellationToken);

        return true;
    }

    public async Task<IDbContextTransaction?> BeginTransactionAsync()
    {
        if (_currentTransaction != null) return null;

        _currentTransaction = await Database.BeginTransactionAsync(IsolationLevel.ReadCommitted);

        return _currentTransaction;
    }

    public async Task CommitTransactionAsync(IDbContextTransaction transaction)
    {
        if (transaction == null) throw new ArgumentNullException(nameof(transaction));
        if (transaction != _currentTransaction)
            throw new InvalidOperationException($"Transaction {transaction.TransactionId} is not current");

        try
        {
            await SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch
        {
            RollbackTransaction();
            throw;
        }
        finally
        {
            if (_currentTransaction != null)
            {
                _currentTransaction.Dispose();
                _currentTransaction = null;
            }
        }
    }

    private void RollbackTransaction()
    {
        try
        {
            _currentTransaction?.Rollback();
        }
        finally
        {
            if (_currentTransaction != null)
            {
                _currentTransaction.Dispose();
                _currentTransaction = null;
            }
        }
    }
}