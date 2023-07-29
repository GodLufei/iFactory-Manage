using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public class Address : ValueObject
{
    public String Street { get; private set; }
    public String City { get; private set; }
    public String Province { get; private set; }
    public String ZipCode { get; private set; }

    private Address() { }

    public Address(string street, string city, string province, string zipcode) : this()
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
}