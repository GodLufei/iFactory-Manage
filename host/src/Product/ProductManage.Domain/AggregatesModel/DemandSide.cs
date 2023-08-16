
using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class DemandSide : Entity
{
    public DemandSide()
    {
    }

    public DemandSide(string title, string tax, string bankInfo, string phoneNumber, Address address):this()
    {
        Title = title;
        Address = address;
        Tax = tax;
        BankInfo = bankInfo;
        PhoneNumber = phoneNumber;
    }

    public string Title { get; set; }

    public Address Address { get; set; }

    public string Tax { get; set; }

    public string BankInfo { get; set; }

    public string PhoneNumber { get; set; }
}