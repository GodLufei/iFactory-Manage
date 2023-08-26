using ProductManage.API.DTOs;

namespace ProductManage.API.Application.Queries;

public interface IProductQueries
{
    Task<IEnumerable<AwaitReverseProductItemsGroupDto>> GetAwaitApproveListAsync();
    
    Task<IEnumerable<AwaitReverseProductItemsGroupDto>> GetListByStationNoAsync(string stationNo);

    Task<ProductPageListDto> GetList(int pageIndex,int pageSize);
}