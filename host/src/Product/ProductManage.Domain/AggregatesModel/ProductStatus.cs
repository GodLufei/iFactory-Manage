using ProductManage.Domain.Exceptions;
using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public class ProductStatus : Enumeration
{
    public static ProductStatus UnProduct = new(1, "未排期");

    public static ProductStatus AwaitingProduct = new(2, "下发生产");

    public static ProductStatus DoingProduct = new(3, "生产中");

    public static ProductStatus DoneProduct = new(4, "生产完成");

    public static ProductStatus CancelledProduct = new(5, "生产取消");

    public static ProductStatus ScarpProduct = new(6, "生产报废");

    public ProductStatus(int id, string name)
        : base(id, name)
    {
    }

    public static IEnumerable<ProductStatus> List() => new[] { UnProduct, AwaitingProduct, DoingProduct, DoneProduct, CancelledProduct, ScarpProduct };

    public static ProductStatus FromName(string name)
    {
        var state = List()
            .SingleOrDefault(s => String.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for ProductStatus: {String.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }

    public static ProductStatus From(int id)
    {
        var state = List().SingleOrDefault(s => s.Id == id);

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for ProductStatus: {String.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }

}