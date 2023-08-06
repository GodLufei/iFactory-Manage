using ProductManage.Domain.Shared.Models;

namespace ProductManage.Domain.AggregatesModel;

public class ProductTechnologyItem : Entity
{
    public ProductTechnologyItem(int technologyTypeId, string workStationNo, int stepIndex)
    {
        TechnologyTypeId = technologyTypeId;
        WorkStationNo = workStationNo;
        StepIndex = stepIndex;
    }

    public int StepIndex { get; }

    public int TechnologyTypeId { get; }

    public string WorkStationNo { get; }
}