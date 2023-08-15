using ProductManage.API.DTOs;
using ProductManage.Domain.AggregatesModel;

namespace ProductManage.API.Application.Queries;

public interface IProductQueries
{
    Task<IEnumerable<AwaitApproveProductItemsGroupDto>> GetAwaitApproveAsync();
}