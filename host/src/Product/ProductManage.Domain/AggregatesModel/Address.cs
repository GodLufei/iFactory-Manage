using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public class Address : ValueObject
{
    private String Street { get; }
    private String City { get; }
    private String Province { get; }
    private String ZipCode { get; }

    public Address(string street, string city, string province, string zipcode)
    {
        Street = street;
        City = city;
        Province = province;
        ZipCode = zipcode;
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        // Using a yield return statement to return each element one at a time
        yield return Street;
        yield return City;
        yield return Province;
        yield return ZipCode;
    }

    public override string ToString()
    {
        return $"省份：{Province} 城市:{City} 街道：{Street}";
    }
}