using ProductManage.Domain.Exceptions;
using ProductManage.Domain.SeedWork;

namespace ProductManage.Domain.AggregatesModel;

public class ProductItem : Entity
{
    public readonly string ProductItemName; //产品明细名称

    public string TechnicalRequirements; //技术要求

    public string Material; // 材料型号

    public string Diameter; // 直径

    public string Length; //长度

    public string FigureNo; // 图号

    public int Amount; //数量

    public string Unit; //单位

    public int ProductStatusId; // 产品状态

    public TimeSpan ScheduledTime; //

    public DateTime StartTime;

    public DateTime EndTime;

    public TimeSpan? ManHour;

    private ProductItem()
    {
        ProductStatusId = ProductStatus.UnProduct.Id;
    }

    public ProductItem(string productItemName, string technicalRequirements, string material, string diameter,
        string length, string figureNo, int amount, string unit) : this()
    {
        ProductItemName = productItemName;
        TechnicalRequirements = technicalRequirements;
        Material = material;
        Diameter = diameter;
        Length = length;
        FigureNo = figureNo;
        Amount = amount;
        Unit = unit;
    }


    public void StartProductItem(TimeSpan scheduleTime)
    {
        ProductStatusId = ProductStatus.DoingProduct.Id;
        StartTime = DateTime.Now;
        ScheduledTime = scheduleTime;
    }

    public void TransferStatus()
    {
        ++ProductStatusId;
        if (ProductStatusId.Equals(ProductStatus.DoneProduct.Id))
        {
            FinishProductItem();
        }
    }

    private void FinishProductItem()
    {
        ProductStatusId = ProductStatus.DoneProduct.Id;
        EndTime = DateTime.Now;
        ManHour = EndTime - StartTime;
    }

    public void CancelProductItem()
    {
        ProductStatusId = ProductStatus.ScarpProduct.Id;
    }

    public void SetNewAmount(int amount)
    {
        if (amount < 0)
        {
            throw new ProductDomainException("amount is not valid");
        }

        Amount = amount;
    }
}