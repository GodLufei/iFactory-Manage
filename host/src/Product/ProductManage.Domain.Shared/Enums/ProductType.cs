using ProductManage.Domain.SeedWork;
using ProductManage.Domain.Shared.Exceptions;

namespace ProductManage.Domain.Shared.Enums;

public class ProductType : Enumeration
{
    private static readonly ProductType ShaftingSystem = new(1, "轴系");

    private static readonly ProductType RudderSystem = new(2, "舵系");

    private static readonly ProductType NonStandardPart = new(3, "非标件");

    private static readonly ProductType StandardPart = new(4, "标件");

    private static readonly ProductType Other = new(5, "其他");

    private ProductType(int id, string name)
        : base(id, name)
    {
    }

    private static IEnumerable<ProductType> List() => new[]
    {
        ShaftingSystem,
        RudderSystem,
        NonStandardPart,
        StandardPart,
        Other
    };

    public static ProductType FromName(string name)
    {
        var state = List()
            .SingleOrDefault(s => String.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));
        if (state == null)
        {
            throw new ProductDomainException(
                $"Possible values for ProductType: {String.Join(",", List().Select(s => s.Name))}");
        }
        return state;
    }

    public static ProductType From(int id)
    {
        var state = List().SingleOrDefault(s => s.Id == id);

        if (state == null)
        {
            throw new ProductDomainException(
                $"Possible values for ProductType: {String.Join(",", List().Select(s => s.Name))}");
        }
        return state;
    }
}