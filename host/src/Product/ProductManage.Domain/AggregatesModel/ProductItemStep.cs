using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class ProductItemStep: Entity
{
    public ProductItemStep(int productItemId, int stepIndex, string workStationNo, int productStatusId)
    {
        ProductItemId = productItemId;
        StepIndex = stepIndex;
        WorkStationNo = workStationNo;
        ProductStatusId = productStatusId;
    }

    public int ProductItemId { get; set; }
    
    public int StepIndex { get; set; }

    public string WorkStationNo { get; set; }
    
    public int ProductStatusId { get; set; }

    public void UpdateStatus(int productStatusId)
    {
        this.ProductStatusId = productStatusId;
    }
    

}