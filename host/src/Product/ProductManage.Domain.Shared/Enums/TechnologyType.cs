
using ProductManage.Domain.SeedWork;
using ProductManage.Domain.Shared.Exceptions;

namespace ProductManage.Domain.Shared.Enums;

public class TechnologyType : Enumeration
{
    public static readonly TechnologyType Blanking = new(1, "下料");

    public static readonly TechnologyType RoughTurning = new(2, "粗车");

    public static readonly TechnologyType FineTurning = new(3, "精车");

    public static readonly TechnologyType Perforate = new(4, "打孔");

    public static readonly TechnologyType FineMilling = new(5, "精铣");

    public static readonly TechnologyType Compounding = new(6, "复配");

    public TechnologyType(int id, string name) : base(id, name)
    {
    }

    private static IEnumerable<TechnologyType> List() => new[] { Blanking, RoughTurning, FineTurning, Perforate, FineMilling, Compounding };

    public static TechnologyType FromName(string name)
    {
        var state = List()
            .SingleOrDefault(s => string.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for TechnologyType: {string.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }

    public static TechnologyType From(int id)
    {
        var state = List().SingleOrDefault(s => s.Id == id);

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for TechnologyType: {string.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }
}